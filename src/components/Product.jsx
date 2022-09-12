import React,{useEffect,useState} from 'react'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://nike-products.p.rapidapi.com/shoes/men-shoes',
  headers: {
    'X-RapidAPI-Key': '0d7c1cbdf8msha22b7312f9e6540p1b85d4jsn8f42e61b63fb',
    'X-RapidAPI-Host': 'nike-products.p.rapidapi.com'
  }
};

const Product = () => {
  const [products,setProducts] = useState([])
  useEffect(() => {
    
    axios.request(options).then(function (response) {
	console.log(response.data);
    // setProducts(response.data.products);
}).catch(function (error) {
	console.error(error);
    });
    
  }, [])
  


  return (
    <div>This will be a product <br />
        {/* {products.map((product,id)=>(
            <div key={id}>
                <h2>{product.name}</h2>
            </div>
        ))} */}
    </div>
    
  )
}

export default Product