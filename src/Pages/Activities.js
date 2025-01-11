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
          Epic Ventures Ceylon was born out of a deep passion for adventure and a profound love for Sri Lanka’s breathtaking landscapes. What started at 2005 as a small group of outdoor 
            enthusiasts dreaming of exploring the wild has now grown into a 
            trusted name in eco-tourism and adventure travel after 18 years of services.
        
        </p>

        </section>

      
          

      <div className="two-column-container">
        <div className="image-column">
        
           <div>
              <img src={picture1} alt="Camping Scene 1" />
            </div>
            
        </div>
        <div className="text-column">
          <h2>Enjoy The Experience</h2>
          <p>
          Toast a marshmallow. Enjoy a cheese platter on your deck. Sleep late or wake early
          for a surf and a sunrise over the water.
          </p>
          <p>
          Whatever your style, we’ve got everything for foodies, for nature lovers, adventure seekers, and explorers.
          </p>
        </div>
      </div>

      <div className="two-column-container">
        <div className="image-column">
      
            <div>
              <img src={picture6} alt="Camping Scene 1" />
            </div>
        </div>
        <div className="text-column">
          <h2>Hiking</h2>
          <p>
          Explore scenic trails and enjoy breathtaking views as you trek through nature. 
          Perfect for adventure seekers and nature enthusiasts alike.
          </p>
          <p>
          Embark on an unforgettable journey through two stunning mountains, guided by our experienced professionals. They ensure your safety while sharing fascinating insights 
          about the trails and surrounding nature, making your adventure both enjoyable and informative.
          </p>
        </div>
      </div>

      <div className="two-column-container">
        <div className="image-column">
  
            <div>
              <img src={picture3} alt="Camping Scene 1" />
            </div>
        </div>
        <div className="text-column">
          <h2>Water Rafting</h2>
          <p>
          Toast a marshmallow. Enjoy a cheese platter on your deck. Sleep late or wake early
          for a surf and a sunrise over the water.
          </p>
          <p>
          Whatever your style, we’ve got everything for foodies, for nature lovers, adventure seekers, and explorers.
          </p>
        </div>
      </div>

      <div className="two-column-container">
        <div className="image-column">
        
            <div>
              <img src={picture4} alt="Camping Scene 1" />
            </div>
        </div>
        <div className="text-column">
          <h2>Waterfall Abseiling</h2>
          <p>
          Toast a marshmallow. Enjoy a cheese platter on your deck. Sleep late or wake early
          for a surf and a sunrise over the water.
          </p>
          <p>
          Whatever your style, we’ve got everything for foodies, for nature lovers, adventure seekers, and explorers.
          </p>
        </div>
      </div>

      <div className="two-column-container">
        <div className="image-column">
        
            <div>
              <img src={picture5} alt="Camping Scene 1" />
            </div>
           
        </div>
        <div className="text-column">
          <h2>Bird Watching</h2>
          <p>
          Toast a marshmallow. Enjoy a cheese platter on your deck. Sleep late or wake early
          for a surf and a sunrise over the water.
          </p>
          <p>
          Whatever your style, we’ve got everything for foodies, for nature lovers, adventure seekers, and explorers.
          </p>
        </div>
      </div>
      
    </div>
  )
}
