import React from 'react'
import './Header.css'
import Logo from './assets/Logo.png'
import cat from './assets/cars.json'
import Card from './Card'
let Cars=cat
const Header = () => {
    const submit=()=>{
    }
  return (
    <div className="header-container">
      <div className="logo-name">
        <img src={Logo} alt="Car Logo" className="logo" />
        <h1 className="site-name">Car Showcase</h1>
      </div>
      <div className="search-bar-container">
        <input type="text" placeholder="Search for cars..." className="search-bar" />
        <button className="search-button" onClick={submit}>Search</button>
      </div>
      <div className='car-grid-container'> 
     {Cars.map(function(elem){
        return <Card  TITLE={elem.title} IMAGE={elem.image}/>
     })}
      </div>
    </div>
  )
}

export default Header