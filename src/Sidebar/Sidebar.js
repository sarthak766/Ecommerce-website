import React from 'react'
import './Sidebar.css'
import Category from './Category/Category'
import Price from '../Price/Price'
import Color from './Color/Color'
export default function Sidebar({handleChange}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'></div>
        <h1>🛒</h1>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </section>
    </>
   
  )
}
