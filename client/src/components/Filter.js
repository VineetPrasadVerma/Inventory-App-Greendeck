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

  const requestFilters = {}
  const handleApply = async () => {
    if (number) {
      if (operator === 'between') {
        if (otherNumber) {
          Object.assign(requestFilters, {
            discount: {
              key: 'discount',
              value: [number, otherNumber],
              operator: operator
            }
          })
        }
      } else {
        Object.assign(requestFilters, {
          discount: { key: 'discount', value: number, operator: operator }
        })
      }
    }

    if (text) {
      Object.assign(requestFilters, {
        brand: { key: 'brand', value: text, operator: 'equals' }
      })
    }

    if (boolean !== '') {
      Object.assign(requestFilters, {
        availability: {
          key: 'stock_available',
          value: boolean,
          operator: 'contains'
        }
      })
    }

    if (startDate && endDate) {
      Object.assign(requestFilters, {
        created_at: {
          key: 'created_at',
          value: [startDate, endDate],
          operator: 'between'
        }
      })
    }

    const filters = Object.values(requestFilters)

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
        handleError('Can\'t filter Products')
      }
    } else {
      try {
        const res = await axios.get('http://localhost:5500/')
        dispatch({ type: 'GET_PRODUCTS', products: res.data })
      } catch (err) {
        handleError('Can\'t get Products')
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
      handleError('Can\'t get Products')
    }
  }

  return (
    <div className='filter'>
      {filters.map((filter) => {
        if (filter.type === 'numeric') {
          return (
            <NumericFilter
              filter={filter}
              number={number}
              setNumber={setNumber}
              operator={operator}
              otherNumber={otherNumber}
              setOtherNumber={setOtherNumber}
              setOperator={setOperator}
              key={filter.id}
            />
          )
        } else if (filter.type === 'text') {
          return (
            <TextFilter
              filter={filter}
              text={text}
              setText={setText}
              key={filter.id}
            />
          )
        } else if (filter.type === 'boolean') {
          return (
            <BooleanFilter
              boolean={boolean}
              setBoolean={setBoolean}
              key={filter.id}
            />
          )
        } else if (filter.type === 'date') {
          return (
            <DateFilter
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              key={filter.id}
            />
          )
        }
      })}

      <button onClick={handleApply}>Apply</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Filter
