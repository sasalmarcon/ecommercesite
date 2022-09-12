import React,{useEffect,useState} from 'react'
import axios from 'axios';

import starIcon from '../assets/fullstar.png'
import heartIcon from '../assets/heart.png'
import halfstarIcon from '../assets/star.png'


const Product = () => {
 
    const [data,setData] = useState([])
    const [stars] = useState((Math.random()+4).toFixed(2))
    

   async function getStoreDate(){
     const response = await axios.get(`https://fakestoreapi.com/products/1`)
    
     setData(response.data)
      
   }
   console.log(data)
   getStoreDate()
   const {title, price, description,image } = data
   
   
   

  return (
    <div className='w-[259px] h-[472px] mx-auto mt-[70px]'>
      <img src={image} alt={title} width='224px' height='227px' className=' mx-[16px] mb-[12px]  mt-[16px]' />
      <p className='mx-[16px] text-[#19191D] tracking-[0.0275em] leading-[150%]  mb-[8px] '>{title}</p>
      <p className='mx-[16px] text-[24px] font-bold leading-[150%] mb-[8px]'>${price}</p>
      <p className='mx-[16px] text-[14px] tracking-[0.018em] leading-[143%] text-[#787885] mb-[9px]'>Free Shipping</p>
      <div className='flex space-x-[30px] items-center '>
      <p className=' flex flex-row   items-center'>
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={halfstarIcon}  />
         
        <p className='ml-[10.47px]'>{stars}</p>
      </p>
      <div className='flex items-center mx-[16px] mb-[12px] mt-[16px]  space-x-2 text-[#2264D1]  text-[14px] border rounded-lg border-[#2264D1] px-[10px] py-[6px]'>
      <img className='h-[20px]' src={heartIcon} />
       <p className='text-[14px]  font-bold pr-[12px]'>Watch</p>
      </div>
      </div>
    </div>
  )
}

export default Product