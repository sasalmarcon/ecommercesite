import React from 'react'
import Tree from './Tree'
import Filter from './Filter'

export default function Sidebar() {
  return (
    <div className='mx-5 grow'>
      <Tree/>
      <Filter/>
    </div>
  )
}
