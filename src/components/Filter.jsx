import React, {useState} from 'react'
import FilterList from './FilterList'

const expandedFilters = [
    {value:'Recommended'},
    {value:'Recently Added'},
    {value:'Expiring Soon'},
    {value:'Most Rated'},
    {value:'Price: Low -> High'},
    {value:'Price: High -> Low'}
]

const yearOfManufacturing = [
    {value:'1955'},
    {value:'1956'},
    {value:'1957'},
    {value:'1958'},
    {value:'1959'},
    {value:'1960'},
    {value:'1961'},
    {value:'1962-2020'},
]

export default function Filter() {
    const [isCollapse,setIsCollapse] = useState(true);

    function toggleCollapse(){
        setIsCollapse(prevState => !prevState);
    }
  return (
    <div>
        {/* Toggle Expand and Collapse Filters */}
        <div>
        <img
                  className ={`w-4 float-right -translate-x-2 translate-y-7 ${isCollapse ? "":"rotate-90"}`}
                  src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/22C3E6/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-8.png" alt = ""/>
            <button onClick = {toggleCollapse} className='rounded shadow-md shadow-gray-400 border border-blue-400 w-full px-2 py-2 text-left'>Collapsed Filters</button>
        </div>
        {!isCollapse && <FilterList title = 'Expanded Filters' items = {expandedFilters} /> }
        {!isCollapse && <FilterList title = 'Year of Manufacturing' items = {yearOfManufacturing}/>}
        
    </div>
  )
}
