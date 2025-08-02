import React from 'react';
import { useState } from 'react'
import './styles.css';
import {useReducer} from 'react';
function App() {
  const pro=[
    {
      id:1,
      name:"Women Checked Shirt",
      Price:1750,
      OldPrice:3500,
      rating:4.2,
      discount:67
    },
    {
      id:2,
      name:"Women Crop top",
      Price:750,
      OldPrice:3400,
      rating:4.5,
      discount:75
    },
    {
      id:3,
      name:"Women Solid Shirt",
      Price:2750,
      OldPrice:3500,
      rating:3.9,
      discount:46
    },
    {
      id:4,
      name:"Men Solid Shirt",
      Price:2554,
      OldPrice:3500,
      rating:3.5,
      discount:27
    },
    {
      id:5,
      name:"Women Regular top",
      Price:2750,
      OldPrice:3500,
      rating:2.9,
      discount:67
    },
    {
      id:6,
      name:"Women T-shirt",
      Price:1790,
      OldPrice:3500,
      rating:2.2,
      discount:90
    },
    {
      id:7,
      name:"Women Printed top",
      Price:1550,
      OldPrice:3500,
      rating:3.2,
      discount:27
    },
    {
      id:8,
      name:"Men T-shirt",
      Price:3650,
      OldPrice:4500,
      rating:3.2,
      discount:21
    },
    {
      id:9,
      name:"Women T-shirt",
      Price:3750,
      OldPrice:4000,
      rating:2.2,
      discount:39
    }
    
    ]

const initialState={
  price:'',
  discount:'',
  rating:''
}

const filterReducer=(state,action)=>{
  switch(action.type){
    case 'PRICE':
      return {
        ...state,
        price:action.payload
      }
    case 'DISCOUNT':
      return {
        ...state,
        discount:action.payload
      }
    case 'RATING':
      return {
        ...state,
        rating:action.payload
      }
      
    default:
    return state;
  }
}
const [{price,discount,rating},filterDispatch]=useReducer(filterReducer,initialState);


const filteredProducts=pro.filter(product=>{
  const priceFilter=price?product.Price<=Number(price):true;
  const discountFilter=discount?product.discount>=Number(discount):true;
  const ratingFilter=rating?product.rating>=Number(rating):true;
  return  priceFilter && discountFilter && ratingFilter;
});
const handleRating=(e)=>{
  filterDispatch({
    type:'RATING',
    payload:e.target.value
  })
}
const handlePrice=(e)=>{
  filterDispatch({
    type:'PRICE',
    payload:e.target.value
  })
}
const handleDiscount=(e)=>{
  filterDispatch({
    type:'DISCOUNT',
    payload:e.target.value
  })
}

  return (
  <div>
      <div className="placeholder">
        <input onChange={handleRating} className="rating" placeholder="Enter your rating"></input>
        <input onChange={handleDiscount} className="discount" placeholder="Enter your discount"></input>
        <input onChange={handlePrice} className="price" placeholder="Enter your price"></input>
      </div>
      
     <div className="products">
      { 
      filteredProducts?.length>0 && filteredProducts.map(product=>(
       <div className="list">
         <p>{product.name}</p>
        <p>Price: {product.Price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}</p>
       </div>
       ))
      }
     </div>
  </div>
  )
}

export default App
