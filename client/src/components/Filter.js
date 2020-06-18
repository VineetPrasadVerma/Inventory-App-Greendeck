import React, { useState, useContext } from 'react'
import axios from 'axios'
import NumericFilter from './FilterType/NumericFilter'
import TextFilter from './FilterType/TextFilter'
import BooleanFilter from './FilterType/BooleanFilter'
import DateFilter from './FilterType/DateFilter'
import { ProductContext } from '../context/ProductContext'

const Filter = ({ filters, handleError }) => {
  const { dispatch } = useContext(ProductContext)

  const [number, setNumber] = useState('')
  const [otherNumber, setOtherNumber] = useState('')
  const [operator, setOperator] = useState('<')
  const [text, setText] = useState('')
  const [boolean, setBoolean] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const selectedFilters = {}
  const handleApply = async () => {
    if (number) {
      if (operator === 'between') {
        if (otherNumber) {
          Object.assign(selectedFilters, {
            discount: {
              key: 'discount',
              value: [number, otherNumber],
              operator: operator
            }
          })
        }
      } else {
        Object.assign(selectedFilters, {
          discount: { key: 'discount', value: number, operator: operator }
        })
      }
    }

    if (text) {
      Object.assign(selectedFilters, {
        brand: { key: 'brand', value: text, operator: 'equals' }
      })
    }

    if (boolean !== '') {
      Object.assign(selectedFilters, {
        availability: {
          key: 'stock_available',
          value: boolean,
          operator: 'contains'
        }
      })
    }

    if (startDate && endDate) {
      Object.assign(selectedFilters, {
        created_at: {
          key: 'created_at',
          value: [startDate, endDate],
          operator: 'between'
        }
      })
    }

    const filters = Object.values(selectedFilters)

    if (filters.length) {
      try {
        const res = await axios({
          method: 'POST',
          url: 'http://localhost:5500/filter',
          data: { filters },
          headers: { 'Content-type': 'application/json' }
        })
        dispatch({ type: 'FILTER_PRODUCTS', products: res.data })
      } catch (err) {
        handleError("Can't filter Products")
      }
    } else {
      try {
        const res = await axios.get('http://localhost:5500/')
        dispatch({ type: 'GET_PRODUCTS', products: res.data })
      } catch (err) {
        handleError("Can't get Products")
      }
    }
  }

  const handleReset = async () => {
    setNumber('')
    setOtherNumber('')
    setOperator('<')
    setText('')
    setBoolean('')
    setStartDate('')
    setEndDate('')

    try {
      const res = await axios.get('http://localhost:5500/')
      dispatch({ type: 'GET_PRODUCTS', products: res.data })
    } catch (err) {
      handleError("Can't get Products")
    }
  }

  return (
    <div className='filter'>
      {filters.map((filter) => {
        if (filter.type === 'numeric') {
          return (
            <div key={filter.id}>
              <NumericFilter
                filter={filter}
                number={number}
                setNumber={setNumber}
                operator={operator}
                otherNumber={otherNumber}
                setOtherNumber={setOtherNumber}
                setOperator={setOperator}
              />
              <hr />
            </div>
          )
        } else if (filter.type === 'text') {
          return (
            <div key={filter.id}>
              <TextFilter
                filter={filter}
                text={text}
                setText={setText}
                key={filter.id}
              />
              <hr />
            </div>
          )
        } else if (filter.type === 'boolean') {
          return (
            <div key={filter.id}>
              <BooleanFilter
                filter={filter}
                boolean={boolean}
                setBoolean={setBoolean}
                key={filter.id}
              />
              <hr />
            </div>
          )
        } else if (filter.type === 'date') {
          return (
            <div key={filter.id}>
              <DateFilter
                filter={filter}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                key={filter.id}
              />
              <hr />
            </div>
          )
        } else {
          return <></>
        }
      })}

      <button className='btn btn-primary button' onClick={handleApply}>
        Apply
      </button>
      <button className='btn btn-primary button' onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default Filter
