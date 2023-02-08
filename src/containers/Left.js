import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeItemActionCreator,
  updateQtyItemActionCreator
} from '../states/items/action'

export default function Left () {
  const { items } = useSelector(states => states)
  const dispatch = useDispatch()

  const handleIncrement = e => {
    e.preventDefault()

    const arr = e.target.value.split(',').map(res => Number(res))

    dispatch(updateQtyItemActionCreator(Number(arr[0]), Number(arr[1] + 1)))
  }

  const handleDecrement = e => {
    e.preventDefault()

    const arr = e.target.value.split(',').map(res => Number(res))

    if (Number(arr[1]) > 1) {
      dispatch(updateQtyItemActionCreator(Number(arr[0]), Number(arr[1] + -1)))
    }
  }

  const handleRemove = e => {
    e.preventDefault()

    const confirmed = window.confirm('Are you sure to use this action?')

    if (confirmed) {
      if (items.length === 1) {
        alert('Cart cannot be null in this simulation app!')
        return
      }

      dispatch(removeItemActionCreator(Number(e.currentTarget.value)))
    }
  }

  return (
    <div className='w-full p-4 rounded-md shadow bg-white'>
      <h4 className='text-lg font-medium mb-5'>Cart ({items.length} items)</h4>
      {items.map((res, idx) => (
        <div key={res.id}>
          <div className='flex gap-x-6'>
            <div className='md:w-1/3 w-1/2'>
              <img src={res.img} alt={res.name} className='rounded' />
            </div>
            <div className='w-full flex flex-col justify-around'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='md:mb-2 md:text-lg font-medium'>{res.name}</h3>
                  <p className='md:text-base text-sm'>{res.type}</p>
                </div>
                <div className='flex items-center justify-between border'>
                  <button
                    onClick={handleDecrement}
                    value={[res.id, res.qty]}
                    className='px-2 py-1 md:px-3 md:py-2 font-semibold border hover:bg-gray-200'
                  >
                    -
                  </button>
                  <span className='py-1 w-9 md:w-14 md:py-2 text-sm text-center'>
                    {res.qty}
                  </span>
                  <button
                    onClick={handleIncrement}
                    value={[res.id, res.qty]}
                    className='px-2 py-1 md:px-3 md:py-2 font-semibold border hover:bg-gray-200'
                  >
                    +
                  </button>
                </div>
              </div>
              <p className='md:text-base text-sm'>Color: {res.color}</p>
              <p className='md:text-base text-sm'>Size: {res.size}</p>
              <div className='flex justify-between items-center font-medium'>
                <div className='flex gap-x-4 md:gap-x-6 uppercase text-black/50'>
                  <button
                    onClick={handleRemove}
                    value={res.id}
                    className='flex gap-x-1 items-center md:border-none border-2 rounded'
                  >
                    {/* prettier-ignore */}
                    <svg className='w-6' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" />
                </svg>
                    <span className='md:block hidden text-sm md:text-base'>
                      Remove Item
                    </span>
                  </button>
                  <button
                    onClick={handleRemove}
                    value={res.id}
                    className='flex gap-x-1 items-center md:border-none border-2 rounded'
                  >
                    {/* prettier-ignore */}
                    <svg className='w-6' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                    </svg>
                    <span className='md:block hidden text-sm md:text-base'>
                      Move To Wishlist
                    </span>
                  </button>
                </div>
                <p>${(res.price * res.qty).toFixed(2)}</p>
              </div>
            </div>
          </div>
          {idx !== items.length - 1 && <hr className='my-3' />}
        </div>
      ))}
    </div>
  )
}
