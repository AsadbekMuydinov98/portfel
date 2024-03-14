import React, { useState } from 'react'
import './voala.css'

const Voala = () => {
  const [isActive, setIsActive] = useState(true)
  const add=()=>{
    setIsActive(!isActive)
  }
  return (
    <div className="home-container">
      <div className='logo'>
        <div onClick={add} className={isActive ? "main-img active" : "main-img"}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src="./me.jpg" alt="" />
      </div>
    </div>
  )
}



export default Voala