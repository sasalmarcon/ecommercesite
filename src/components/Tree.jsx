import React, {useState} from 'react'
// fake data 
const categories = [
    {
        id:'1',
        parent:'Electronics',
        isCollapse:'true',
        children:['Phone','watch','laptops']
    },
    {
        id:'2',
        parent:'Clothing',
        isCollapse:'true',
        children:['Phone','watch','laptops']
    },
    {
        id:'3',
        parent:'Hardware',
        isCollapse:'true',
        children:['Phone','watch','laptops']
    },
    {
        id:'4',
        parent:'Bags',
        isCollapse:'true',
        children:['Phone','watch','laptops']
    },

]

export default function Tree() {
    const [productCategories,setProductCategories] = useState(categories);
    const items = productCategories.map(item=>{
        const listItems = item.children.map(list =>{
            return (
                <>
                {!item.isCollapse && <li>{list}</li>} 
                </>
                  )
                 })

        return (
            <li key = {item.id} className = "my-2">
                <div>
                <img
                 className ={`w-4 absolute translate-y-1 ${item.isCollapse ? "":"rotate-90"}`}
                  src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/22C3E6/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-8.png" alt = ""/>
                <button onClick={toggleCollapse} id = {item.id} className ='mx-6 font-semibold'>{item.parent}</button>
                </div>
            
                <ul className='mx-8'>
                {listItems}
                </ul>
                
            </li>
        )
    })

    function toggleCollapse(e){
        console.log(e.target.id)
        setProductCategories(prev=>
           prev.map(item=>{
            if(item.id === e.target.id)
            {
                return {...item,isCollapse:!item.isCollapse};
            }
            return item;
           })
           
        )
    }
  return (
    <div>
         {/* Departments */}
        <div className=''>
        <svg className = "translate-x-4 translate-y-7" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7H15V5H3V7ZM0 0V2H18V0H0ZM7 12H11V10H7V12Z" fill="#2264D1"/>
        </svg>
            <button className='border w-full text-left border-blue-500 px-10 py-2 rounded font-semibold text-blue-500 '>Departments</button>
        </div>
      <ul>
        {items}
      </ul>
    </div>
  )
}
