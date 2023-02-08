import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Left from '../containers/Left'
import Right from '../containers/Right'
import { setItemsActionCreator } from '../states/items/action'
import { data } from '../utils'

export default function CartPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setItemsActionCreator(data))
  }, [dispatch])

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container py-8'>
        <h2 className='text-2xl font-semibold text-center'>Shopping Cart</h2>
        <div className='flex flex-col gap-4 mt-10 lg:items-start lg:flex-row'>
          <Left />
          <Right />
        </div>
      </div>
    </div>
  )
}
