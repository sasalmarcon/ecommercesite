import React,{useState} from 'react'

export default function FilterList(props) {

    const [isCollapse,setIsCollapse] = useState(false);

    function toggleCollapse(){
        setIsCollapse(prevState => !prevState);
    }

    const items = props.items.map(item => {
        return (
            <li className='my-2'>
                <input type = 'checkbox' id = {item.value} value = {item.value}/>
                <label className='mx-2' htmlFor= {item.value}>{item.value}</label>
            </li>
        )
    })
  return (
    <div className='bg-gray-200 px-4 py-2 my-2 rounded'>
        <div className=''>
        <img
                  className ={`w-4 float-right -translate-x-2 translate-y-4 ${isCollapse ? "":"rotate-90"}`}
                  src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/22C3E6/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-8.png" alt = ""/>
            <button onClick={toggleCollapse} className='text-xl font-semibold w-full text-left'>{props.title}</button>
        </div>
            <ul>
                {!isCollapse && items}
            </ul>
        
    </div>
  )
}
