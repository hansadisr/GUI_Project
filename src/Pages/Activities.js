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
          <h2 className='first-topic'>Why Are You Waiting?</h2>
          <h4 className='second-topic'>Come join with us</h4>
          <p className='first-para'>
         Jungle Odyssey Ceylon was born out of a deep passion for adventure and a profound love for Sri Lanka’s breathtaking landscapes. What started at 2005 as a small group of outdoor 
            enthusiasts dreaming of exploring the wild has now grown into a 
            trusted name in eco-tourism and adventure travel after 18 years of services.
        
        </p>

        </section>

      
        <div className="activities-grid">
        {[
        { img: picture1, title: "🌿 Enjoy The Experience", desc: "Immerse yourself in the breathtaking beauty of nature at Jungle Odyssey. Whether you seek adventure or relaxation, our campsite offers the perfect escape into the wilderness, where every moment becomes a cherished memory." },
        { img: picture6, title: "🥾 Hiking", desc: "Explore scenic trails that wind through lush forests, rugged terrains, and panoramic viewpoints. Whether you're a beginner or an experienced trekker, our guided hikes promise an unforgettable journey through Sri Lanka’s diverse landscapes." },
        { img: picture3, title: "🚣 Water Rafting", desc: "Feel the adrenaline rush as you navigate thrilling rapids on Sri Lanka’s pristine rivers. Our expert-guided rafting experience is perfect for adventure seekers looking for an exciting water adventure in a safe environment." },
        { img: picture4, title: "🌊 Waterfall Abseiling", desc: "Challenge yourself with an exhilarating descent down cascading waterfalls! Experience the thrill of abseiling as you rappel down rocky cliffs with the refreshing mist surrounding you." },
        { img: picture5, title: "🦜 Bird Watching", desc: "Discover the vibrant birdlife hidden within the jungle. From colorful endemic species to rare migratory birds, our guided birdwatching tours let you witness nature’s beauty in its purest form." }
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
      