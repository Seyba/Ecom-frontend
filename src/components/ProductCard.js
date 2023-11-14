import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

export default function ProductCard(){
  return (
    <div className="col-3">
        <div className="product-card position-relative">
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
                    edit={false}
                    size={24} 
                    activeColor="#ffd700"
                    value="3"
                />
                <p className="price">$220.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
