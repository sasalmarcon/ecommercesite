
import React, { useState } from 'react'

const Navbar = () => {
  const [showSearchClose,setShowSearchClose] = useState(false);
  const [search,setSearch] = useState('');

  const handleChange = (e)=>{
    // show close button on searchBar if input is not empty
    if(e.target.value !== '')
    {
      setShowSearchClose(true);
    }
    setSearch(e.target.value);
  }
  //Erases search input field
  const handleClose = ()=>{
    setSearch('');
    setShowSearchClose(false);
  }

  return (
    <div className = "flex items-center justify-between my-2">

      {/* Navbar Left section */}
          <div className = "flex items-center ">
            {/* LOGO */}
            <div className = "mx-2 px-2">
              <img className = "w-32 " src = "./images/logo.png" alt = ""/>
            </div>
            {/* Link */}
            <div className = "w-32">
              <span className = "text-navLeftLink font-bold">Sell on Shopka</span>
            </div>
            {/* Link */}
            <div className = "w-32">
              <span className = "text-navLeftLink font-semibold">Register</span>
            </div>

           </div>

      {/* Navbar Mid Section */}
      <div className = "flex items-center grow ">
        {/* Search bar */}
      <div className = "flex items-center w-3/5">
        <img className = "w-4 float-left translate-x-6" src="https://img.icons8.com/material-outlined/96/737373/search--v1.png" alt = ""/>
        <input onChange = {handleChange} value = {search} className = "bg-gray-200 w-full rounded-full px-8 py-1 focus:outline-0"/>
        {showSearchClose && <img onClick = {handleClose} className = "w-4 float-right -translate-x-6 hover:cursor-pointer" src="https://img.icons8.com/material-outlined/96/22C3E6/delete-sign.png" alt = ""/>
      }
        </div>
        {/* Link */}
          <div className = "mx-1">
              <span className = "text-blue-500">Consumer Electronics</span>
          </div>
      </div>
      

      {/* Navbar Right Section */}
      <div className = "flex items-center ">
        <button className = "mx-2 px-2 py-1 font-bold text-blue-500 border border-blue-200 rounded ">Sign in</button>
        {/* MyCart */}
        <div className = "">
          {/* item alert */}
          <div className = "bg-red-500 float-right -translate-x-6 -translate-y-2 rounded-full h-5 w-5 flex items-center justify-center">
            <span className = "text-xs font-bold text-center text-white ">2</span>
          </div>
          <button className = "mx-2 px-2 py-1 font-bold text-blue-500 shadow-md shadow-blue-200 ">My cart</button>
        </div>
        <img className = "mx-2 rounded-full w-10 h-10" src="https://img.icons8.com/external-others-inmotus-design/67/22C3E6/external-Avatar-round-icons-others-inmotus-design-4.png" alt = ""/>
      
      </div>
    </div>
  )
}

export default Navbar