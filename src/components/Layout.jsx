import React from 'react'
import Sidebar from './Sidebar'
import Product from './Product'

export default function Layout() {
  return (
    <div className='flex justify-between my-2'>
      <Sidebar/>
      <Product/>
    </div>
  )
}

