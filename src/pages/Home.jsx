import React from 'react'
import Products from '../components/Products';
import './Home.style.css'

const Home = () => {
  return (
    <div className='homeContainer'>
        <h2>Redux Statemanagement Store</h2>
        <Products/>
    </div>
  )
}

export default Home