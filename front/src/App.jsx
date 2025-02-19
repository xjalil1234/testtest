import Product from "./components/product/Product"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  
  const [products,setProducts] =useState();
const [product,setproduct]=useState();
  useEffect(()=>{
      async function fetchProducts() {
          try {
             const res =await axios.get("https://fakestoreapi.com/products");
  console.log(res.data[0]);
  setProducts(res.data);
  setproduct(res.data[0])
          } catch (error) {
              console.error(error);
          }
      }
  
      fetchProducts();
  },[])
  

  return (
    <>
    <Product info={product?  product : 'null'}/>
    </>
  )
}

export default App
