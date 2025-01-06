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
          <p>Epic Ventures Ceylon was born out of a deep passion for adventure and a profound love for Sri Lanka’s breathtaking landscapes. What started at 2005 as a small group of outdoor 
            enthusiasts dreaming of exploring the wild has now grown into a 
            trusted name in eco-tourism and adventure travel after 18 years of services. Within those years, we have served around 32,000 customers and gave them lifetime experiences.

          Our journey began with a simple mission: to share the beauty of Sri Lanka’s natural wonders while promoting sustainable 
          tourism practices. From humble beginnings organizing small hiking trips, we’ve expanded to offer a wide range of adventure and stay packages that cater to thrill-seekers, nature lovers, and everyone in between. Today, we continue to innovate and evolve, creating experiences that not only leave lasting memories but also contribute to preserving the environment for future generations.
         </p>

        </div>
        <h1 className='heading2'>Enjoy a nature stay experience like no other.</h1>
        <h3 className='heading3'>We welcome you to our park – and to experience our truly unique camping, glamping and accommodation. </h3>
      <section id='activities-section'>
        <div className='activities'>
          <div className='list'>
            <h4>Our faclities</h4>
            <ul>
               <li>cgvhbj</li>
               <li>fybhj</li>
               <li>cxcjnjk</li>
               <li>vghbj</li>
            
            </ul>
            <h4>Our accommodation</h4>
            <ul>
              <li>gvhbjnjk</li>
              <li>fcvhj </li>
              <li>ctvhh</li>
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
          At Epic Venture Ceylon, sustainability and respect for nature are at the core of everything we do. Our programs are designed 
          to minimize environmental impact while fostering a deep connection with the natural world. From eco-friendly accommodations and 
          waste reduction initiatives to activities that educate participants about biodiversity conservation, every aspect of our operations prioritizes harmony 
          with the environment. We take pride in preserving Sri Lanka’s 
          stunning ecosystems, ensuring that they remain pristine for future generations to explore and cherish.

         We also actively support reforestation projects, promote eco-tourism within local communities, and empower them with sustainable 
         livelihood opportunities. By combining thrilling adventures with a commitment to environmental stewardship, we invite our guests to 
         not only explore the beauty of nature but also become active participants in its preservation. At Epic Venture Ceylon, your journey leaves more than just footprints
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
