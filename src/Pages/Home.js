import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import firstImage from "../Images/image01.jpg";
import secondImage from "../Images/image_2.jpg";
import thirdImage from "../Images/image_carvan.jpg";
import forthImage from "../Images/image_adven.jpg";



export default function Home() {
  return (
    <div>
    <div className="container">
      <div className="img-container">
      <img src={firstImage} alt="First" />
      <img src={secondImage} alt="Second" />
      <img src={thirdImage} alt="Third" />
      <img src={forthImage} alt="forth" />

      </div>
      <div className="content">
        <h1>BEST CAMPING SITES</h1>
        <p>Plan your vacation with us.</p>
        <div>
          <button>
            <span></span>WATCH MORE
          </button>
          <button>
            <span></span>SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
      


    </div>
    
  )
}
