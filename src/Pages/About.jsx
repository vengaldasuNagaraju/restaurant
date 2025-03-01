import React from "react";
import '../styles/About.css';
import AboutImage from '../assets/masala.jpg'

function About(){
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage : `url(${AboutImage})`}}>
            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>
                Welcome to Flavors & Feast, where every meal is a celebration of taste and tradition! Our passion for food drives us to serve delicious, freshly crafted dishes made with the finest ingredients. From hearty classics to innovative creations, our menu offers something for every palate. Whether you're dining with family, friends, or colleagues, our warm ambiance and exceptional service ensure a memorable experience. At Flavors & Feast, we believe great food brings people together, and we’re excited to share our culinary journey with you. Come, indulge in flavors that delight and a feast that satisfies!
                </p>
            </div>
        </div>
    )
}
export default About;