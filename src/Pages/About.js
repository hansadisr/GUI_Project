import React from 'react'
import './About.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image4 from "../Images/about_images/about.jpg";
import image2 from "../Images/image_2.jpg";
import image3 from "../Images/image_adven.jpg";
import image1 from "../Images/about_images/picture1.jpg"
import image5 from "../Images/about_images/cabing.jpg"
import image6 from "../Images/about_images/food1.jpg"
import image7 from "../Images/about_images/family cabana.jpg"
import image8 from "../Images/about_images/nature2.jpg"
import image9 from "../Images/about_images/rock sliding.jpg"
import image10 from "../Images/about_images/water camping 1.webp"
import image11 from "../Images/about_images/nature4.jpg"
import image12 from "../Images/about_images/Zipline 1.jpg"
import image13 from "../Images/about_images/cabing2.jpg"
import image14 from "../Images/about_images/nature3.jpg"
import image15 from "../Images/about_images/Jungle Camping 1.jpg"
import image16 from "../Images/about_images/Nature Trail 1.jpeg"
import image17 from "../Images/about_images/rafting1.jpg"
import image18 from "../Images/about_images/nature6.jpg"



export default function About() {
  const settings = {
    // Show navigation dots
    infinite: true, // Loop the images
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide images
    autoplaySpeed: 3000, // Time between auto slides (ms)
    arrows: true, // Add left and right arrows
  };
  const images = [image1, image15, image16, image4, image5, image6, image7,
    image8, image9, image10, image11, image12, image13, image14, image17, image18 
  ];

  return (
    <div className="about-container">
      <section className="img">
        <div className="first_text">
          
            who we are
          
        </div>
        </section>

        <div className='story'>
          <h2 className='head1'>OUR STORY</h2>
          <p>
          Jungle Odyssey was born from a deep passion for adventure and an enduring love for the great outdoors. What started as a small 
          initiative to explore nature’s hidden gems has now grown into a trusted name in camping and adventure travel. Over the years, 
          we have welcomed countless explorers, offering them unforgettable experiences in breathtaking landscapes. Our journey began with a
           simple mission: to provide an escape into nature while promoting sustainable and responsible tourism. From humble beginnings with small 
           camping trips, we’ve expanded to offer diverse adventure and stay packages for thrill-seekers, nature lovers, and families alike. 
           Today, we continue to evolve, curating immersive  experiences that not only create lifelong memories but also preserve the beauty of nature for generations to come.
         </p>

        </div>
        <h1 className='heading2'>Enjoy a nature stay experience like no other.</h1>
        <h3 className='heading3'>We welcome you to our park – and to experience our truly unique camping, glamping and accommodation. </h3>
      <section id='activities-section'>
        <div className='activities'>
          <div className='list'>
            <h4>Our Faclities</h4>
            <ul>
               <li>Spacious, well-maintained campsites</li>
               <li>Comfortable tents with bedding</li>
               <li>Campfire and BBQ areas</li>
               <li>Guided hiking and trekking trails</li>
               <li>Kayaking and river adventures</li>
               <li>Night safaris and wildlife spotting</li>
               <li>Water Abseiling</li>
               <li>Trained guides and emergency assistance</li>
               <li>GPS tracking for adventure activities</li>
               <li>Wildlife-safe camping zones</li>
            
            </ul>
            <h4>Our Accommodation</h4>
            <ul>
              <li>Glamping for couples & families</li>
              <li>Modern & stylish cabins </li>
              <li>Large powered & unpowered sites for camping & caravanning</li>
              <li>Ensuite sites</li>
            </ul>
          </div>
          <div className='imageoption'>
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

        </div>
        </section>
        <div className='story'>
          <h2 className='head1'>Sustainability and Eco Friendliness
          </h2>
          <p>
          At Jungle Odyssey, sustainability and respect for nature are at the heart of everything we do. Our experiences are designed to offer thrilling adventures while minimizing environmental impact and fostering a deep appreciation for the natural world. 
          From eco-friendly camping facilities and waste reduction efforts to guided activities that promote conservation awareness, we ensure that every aspect of our operations aligns with responsible tourism. We take pride in protecting our stunning landscapes, 
          ensuring they remain untouched for future generations to explore and cherish. By supporting local eco-tourism, engaging in reforestation projects, and empowering nearby communities with sustainable opportunities, we go beyond adventure to create a positive impact. 
          At Jungle Odyssey, every journey is not just about exploring the wild—it’s about preserving it for years to come.
         </p>

        </div>

        <div className="gallery">
        {images.map((image, index) => (
         <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>

      
    
  )
}
