import React from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import firstImage from "../Images/image01.jpg";
import secondImage from "../Images/image_2.jpg";
import thirdImage from "../Images/image_carvan.jpg";
import forthImage from "../Images/image_adven.jpg";
import fifthImage from "../Images/image_5.jpg";
import image1 from "../Images/accomadation.jpg";
import image2 from "../Images/adventure (2).jpg";
import image3 from "../Images/food.jpg";
import image4 from "../Images/nature.jpg";




export default function Home() {
   const navigate = useNavigate();
    
      const handleBookingClick = () => {
        navigate("/book");
      };


  return (
    <div>
    <div className="container">
      <div className="img-container">
      {[firstImage, secondImage, thirdImage, forthImage,fifthImage, firstImage, secondImage, thirdImage, forthImage,fifthImage].map((image, index) => (
      <img key={index} src={image} alt={`Slide ${index + 1}`} />
    ))}

      

      </div>
      <div className="content">
        <h1>BEST CAMPING SITES</h1>
        <p>Plan your vacation with us.</p>
        <div>
          <a href="#columns">
          <button>
            <span></span>WATCH MORE
          </button>
          </a>
          <button  onClick={handleBookingClick}>
            <span></span>BOOK NOW
          </button>
        </div>
      </div>
    </div>

    <div id='columns' className="two-columns">
  {/* Left column with text */}
  <div className="left-column">
    <h2>Who We Are</h2>
    <br></br>
    <p>
      Explore the most breathtaking camping destinations around the world. From serene cabins to thrilling outdoor adventures,
       we have something for every explorer. Plan your journey today and create unforgettable memories with your loved ones.
    </p>
  </div>

  {/* Right column with images */}
  <div className="right-column">
    <div className="image-grid">
      <div className="image-wrapper">
      <img src={image1} alt="Cabins" />
      <div className="image-overlay">ACCOMADATION</div>
      </div>
      <div className="image-wrapper">
      <img src={image2} alt="Glamping" />
      <div className="image-overlay">ADVENTURE</div>
      </div>
      <div className="image-wrapper">
      <img src={image3} alt="Caravanning" />
      <div className="image-overlay">FOOD</div>
      </div>
      <div className="image-wrapper">
      <img src={image4} alt="Camping" />
      <div className="image-overlay">NATURE</div>
      </div>
    </div>
  </div>
</div>



    </div>
    
  )
}
