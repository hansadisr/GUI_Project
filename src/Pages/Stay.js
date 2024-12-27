import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Images/image_2.jpg";
import image2 from "../Images/stay_images/carvanning.jpeg";
import image3 from "../Images/stay_images/glamping.jpg";
import image4 from "../Images/stay_images/cabins.jpg";
import map from "../Images/stay_images/map2.png";
import './Stay.css';

export default function Stay() {
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
            <button className="park-map-button">PARK MAP</button>
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
            <img src={image2} alt="Caravanning" />
            <p>Caravanning</p>
          </div>
          <div className="option">
            <img src={image3} alt="Glamping" />
            <p>Glamping</p>
          </div>
          <div className="option">
            <img src={image4} alt="Cabins" />
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
              <img src={image4} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={image2} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={image3} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info">
            <h2>UNPLUGGED</h2>
            <h3>Camping & Caravan Sites</h3>
            <p>
              Large shady sites with room to spread out & take in the natural surrounds. Perfect for tents or off-grid campers (Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Camp Kitchen & Gathering Space</li>
                <li>Well-appointed amenities</li>
                <li>BBQs</li>
                <li>Perfect for tents or off-grid campers (Unpowered).</li>
              </ul>
            </div>
            <button className="book-button">BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

      <section className="caravan-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={image4} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={image2} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={image3} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info" style={{color:"rgb(87, 70, 46)"}}>
            <h2>UNPLUGGED</h2>
            <h3>Camping & Caravan Sites</h3>
            <p>
              Large shady sites with room to spread out & take in the natural surrounds. Perfect for tents or off-grid campers (Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Camp Kitchen & Gathering Space</li>
                <li>Well-appointed amenities</li>
                <li>BBQs</li>
                <li>Perfect for tents or off-grid campers (Unpowered).</li>
              </ul>
            </div>
            <button className="book-button2">BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

      <section className="glamping-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={image4} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={image2} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={image3} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info">
            <h2>UNPLUGGED</h2>
            <h3>Camping & Caravan Sites</h3>
            <p>
              Large shady sites with room to spread out & take in the natural surrounds. Perfect for tents or off-grid campers (Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Camp Kitchen & Gathering Space</li>
                <li>Well-appointed amenities</li>
                <li>BBQs</li>
                <li>Perfect for tents or off-grid campers (Unpowered).</li>
              </ul>
            </div>
            <button className="book-button">BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

      <section className="cabin-section">
        <div className="stay-content">
          <div className="stay-image">
          <Slider {...settings}>
            <div>
              <img src={image4} alt="Camping Scene 1" />
            </div>
            <div>
              <img src={image2} alt="Camping Scene 2" />
            </div>
            <div>
              <img src={image3} alt="Camping Scene 3" />
            </div>
          </Slider>
          </div>
          <div className="stay-info">
            <h2>UNPLUGGED</h2>
            <h3>Camping & Caravan Sites</h3>
            <p>
              Large shady sites with room to spread out & take in the natural surrounds. Perfect for tents or off-grid campers (Unpowered).
            </p>
            <h4>Facilities:</h4>
            <div className='facilities'>
              <ul>
                <li>Camp Kitchen & Gathering Space</li>
                <li>Well-appointed amenities</li>
                <li>BBQs</li>
                <li>Perfect for tents or off-grid campers (Unpowered).</li>
              </ul>
            </div>
            <button className="book-button3">BOOK YOUR STAY!</button>
          </div>
        </div>
      </section>

    </div>

    
  )
}
