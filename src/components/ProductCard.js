import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

export default function ProductCard(){
  return (
    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="/images/smartSpeaker.jpg" alt="product"/>
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Sony EXTRA BASS Portable Splash-Proof Wireless Speaker
                </h5>
                <ReactStars 
                    count={5} 
                    size={24} 
                    activeColor="#ffd700"
                    value="3"
                />
                <p className="price">$220.00</p>
            </div>
        </div>
    </div>
  )
}
