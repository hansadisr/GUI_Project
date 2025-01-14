import React from 'react'
import './Activities.css';

import picture1 from "../Images/about_images/Zipline 1.jpg";
import picture2 from "../Images/about_images/Nature Trail 1.jpeg";
import picture3 from "../Images/about_images/rafting1.jpg";
import picture4 from "../Images/Abseiling 1.jpg";
import picture5 from "../Images/birdwatching.jpg";
import picture6 from "../Images/hicking.jpg";
export default function Activities() {

  
  return (
    <div className='do-container'>
        <section className="top-img">
        <div className="first_text">
          
            BOOK YOUR OUTDOOR ADVENTURE
          
        </div>
        </section>

        <section className='do-content'>
          <h2 className='first-topic'>what are you waiting?</h2>
          <h4 className='second-topic'>Come join with us</h4>
          <p className='first-para'>
         Jungle Odyssey Ceylon was born out of a deep passion for adventure and a profound love for Sri Lanka’s breathtaking landscapes. What started at 2005 as a small group of outdoor 
            enthusiasts dreaming of exploring the wild has now grown into a 
            trusted name in eco-tourism and adventure travel after 18 years of services.
        
        </p>

        </section>

      
        <div className="activities-grid">
        {[
        { img: picture1, title: "Enjoy The Experience", desc: "Toast a marshmallow. Enjoy a cheese platter on your deck. Sleep late or wake early for a surf and a sunrise over the water." },
        { img: picture6, title: "Hiking", desc: "Explore scenic trails and enjoy breathtaking views as you trek through nature. Perfect for adventure seekers and nature enthusiasts alike." },
        { img: picture3, title: "Water Rafting", desc: "Experience the thrill of navigating wild waters with our expert-guided rafting adventures, designed for both beginners and pros." },
        { img: picture4, title: "Waterfall Abseiling", desc: "Challenge yourself by descending breathtaking waterfalls under the guidance of trained professionals for a unique thrill." },
        { img: picture5, title: "Bird Watching", desc: "Immerse yourself in nature with our bird-watching tours, spotting diverse species in their natural habitats." }
      ].map((activity, index) => (
        <div key={index} className="two-column-container">
          <div className="image-column">
            <img src={activity.img} alt={`${activity.title} Scene`} />
          </div>
          <div className="text-column">
            <h2>{activity.title}</h2>
            <p>{activity.desc}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
      