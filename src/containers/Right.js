import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearDiscountActionCreator,
  setDiscountActionCreator
} from '../states/discount/action'

export default function Right () {
  const [isOpen, setOpen] = useState(false)

  const { items, discount } = useSelector(states => states)
  const dispatch = useDispatch()

  const handleCheck = e => {
    if (e.currentTarget.checked) {
      dispatch(setDiscountActionCreator(20))
    } else {
      dispatch(clearDiscountActionCreator())
    }
  }

  const handleCheckout = () => {
    const confirmed = window.confirm('Are you sure to checkout now?')

    if (confirmed) {
      alert('Thank you for trying this simulation ^^')
    }
  }

  const total = items.map(res => res.price * res.qty).reduce((a, b) => a + b, 0)

  return (
    <div className='flex items-start lg:items-stretch flex-row lg:flex-col lg:w-1/3 w-full gap-4'>
      <div className='w-full p-4 rounded-md shadow bg-white'>
        <h4 className='font-medium'>The total amount of</h4>
        <div className='my-3 space-y-2 text-black/50'>
          <div className='flex items-center justify-between text-sm gap-x-2'>
            <p>Temporary amount</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className='flex items-center justify-between text-sm gap-x-2'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          {discount && (
            <div className='flex items-center justify-between text-sm gap-x-2'>
              <p>Discount</p>
              <p>-${discount}</p>
            </div>
          )}
        </div>
        <hr />
        <div className='flex items-center justify-between mt-3 text-sm gap-x-2 font-medium'>
          <p>The total amount of (including VAT)</p>
          <p>
            {discount
              ? total - discount > 0
                ? `$${(total - discount).toFixed(2)}`
                : 'Free'
              : `$${total.toFixed(2)}`}
          </p>
        </div>
        <button
          onClick={handleCheckout}
          type='button'
          className='inline-block w-full px-6 py-3 mt-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
        >
          Go to Checkout
        </button>
      </div>
      <div className='w-full p-4 rounded-md shadow bg-white'>
        <button
          onClick={() => setOpen(!isOpen)}
          className='flex justify-between items-center w-full'
        >
          <p className='text-sm text-left'>Add a discount code (optional)</p>
          {isOpen ? (
            /* prettier-ignore */
            <svg className='w-5 text-black/50' fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            /* prettier-ignore */
            <svg className='w-5 text-black/50' fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className='bg-white mt-4 pt-4 border-t'>
            <div className='flex items-center pl-4 border border-black/25 rounded'>
              <input
                type='checkbox'
                id='discount'
                onChange={handleCheck}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
              />
              <label htmlFor='discount' className='w-full py-3 ml-3 text-sm'>
                Discount $20
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
