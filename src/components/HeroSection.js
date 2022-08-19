import React from 'react'
import heroImg from "../img/happy.jpg"

const HeroSection = () => {
    const subHeading = "Ebube is a lover of wo....."
  return (
    <div className="heroSection">
        <div className='text'>
            <h1>The place where</h1>
            <h1>Everything works</h1>
            <p>{subHeading}</p>
            <button>He does not EXIST</button>
        </div>
        <div className="img">
            <img src={heroImg} alt="" />
        </div>
      </div>
  )
}

export default HeroSection