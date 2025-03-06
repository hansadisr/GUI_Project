import React from 'react'
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../Images/image_2.jpg";
import image2 from "../Images/stay_images/carvanning.jpeg";
import image3 from "../Images/stay_images/glamping.jpg";
import image4 from "../Images/stay_images/cabins.jpg";
import map from "../Images/stay_images/map2.png";
import './Stay.css';
import house1 from "../Images/stay_images/treehouse1.jpg";
import house2 from "../Images/stay_images/treehouse2.jpg";
import house3 from "../Images/stay_images/treehouse3.jpg";
import house4 from "../Images/stay_images/campfall3.jpg";
import house5 from "../Images/stay_images/campfall1.jpg";
import house6 from "../Images/stay_images/campfall2.jpg";
import house7 from "../Images/stay_images/topcamp1.jpg";
import house8 from "../Images/stay_images/topcamp2.jpg";
import house9 from "../Images/stay_images/topcamp3.jpg";
import house10 from "../Images/stay_images/cabana1.jpg";
import house11 from "../Images/stay_images/cabana2.jpg";
import house12 from "../Images/stay_images/cabana3.jpg";


export default function Stay() {
   
    const navigate = useNavigate();
  
    const handleBookingClick = () => {
      navigate("/book");
    };
  

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the images
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide images
    autoplaySpeed: 3000, // Time between auto slides (ms)
    arrows: true, // Add left and right arrows
  };
  



  return (
    <div className="stay-container">
      <section className="map">
        <div className="map-content">
          <a href="#map-section">
            <button  className="park-map-button">PARK MAP</button>
          </a>
        </div>
      </section>

      <section id='map-section' className="accommodation">
        <h2>accommodation</h2>
        <div className="options">
          <div className="option">
            <img src={image1} alt="Camping" />
            <p>Camping</p>
          </div>
          <div className="option">
            <img src={house2} alt="Tree House" />
            <p>Tree Houses</p>
          </div>
          <div className="option">
            <img src={image3} alt="Glamping" />
            <p>Glamping</p>
          </div>
          <div className="option">
            <img src={house11} alt="Cabins" />
            <p>Cabins</p>
          </div>
        </div>
      </section>

      <section className="map-location">
        <h2>Select camping position</h2>
        <div className='map-image'>
          <img src={map} alt='Map'></img>
        </div>
      </section>

      <section className="camping-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={house4} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={house5} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={house6} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info">
            <h2>WATER ESCAPE <br></br>(CAMPING PACKAGES 01) </h2>
            <h3> Kuda Ella Riverside Camp, Beli Oya Lakeside Camp, Heli Lakeside Camp</h3>
            <p>
            You can enjoy beauty of Kuda Ela canal and grasslands & 4 KM hike from entrance(Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Water, Lights & Sanitary Applications</li>
                <li>Dinner , Breakfast & Morning Tea</li>
                <li>BBQs</li>
                <li>Perfect for tents or off-grid campers (Unpowered).</li>
              </ul>
            </div>
            <button  className="book-button"
            onClick={handleBookingClick}>BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

      <section className="caravan-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={house7} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={house8} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={house9} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info" style={{color:"rgb(87, 70, 46)"}}>
            <h2>SKYPEAK SUMMIt CAMP <br></br> (CAMPING PACKAGES 02)</h2>
            <h3>Walas Kanda Summit Camp, Nela Rock Summit Camp</h3>
            <p>
            Breathtaking view of eastern valley sri lanka & 8 KM Hike from entrance(Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li> Water, Lights & Sanitary Applications</li>
                <li>Well-appointed amenities</li>
                <li>BBQs</li>
                <li>Perfect for tents or off-grid campers (Unpowered).</li>
              </ul>
            </div>
            <button className="book-button2"
            onClick={handleBookingClick}>BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

      <section className="glamping-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={house10} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={house11} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={house12} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info">
            <h2>JUNGLE CABANA</h2>
            <h3>Family    25500 Per Day<br></br>
            Couple    12500 Per Day</h3>
            <p>
              for family
              (Large shady sites with room to spread out & take in the natural surrounds. Perfect for tents or off-grid campers) (Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Private Kitchen and Bedrooms</li>
                <li>Washroom with heaters</li>
                <li>Water, Lights & Sanitary Applications(Electricity is provided)</li>
                <li>Dinner , Breakfast & Morning Tea.</li>
              </ul>
            </div>
            <button className="book-button"
            onClick={handleBookingClick}>BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

      <section className="cabin-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={house1} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={house2} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={house3} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info">
            <h2>WANA NIWAHANA</h2>
            <h3>Family Room  - Rs. 7500 Per Night<br></br>
            Double Room  - Rs. 5000 Per Night</h3>
            <p>
              Large shady sites with room to spread out & take in the natural surrounds. Perfect for tents or off-grid campers (Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Attached Bathrooms with heaters</li>
                <li>Electricity</li>
                <li>BBQs</li>
                <li>Comfortable Beds</li>
              </ul>
            </div>
            <button className="book-button3"
            onClick={handleBookingClick}>BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

    </div>

    
  )

}
