import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import { GiShoppingBag } from "react-icons/gi"
import { GrView } from "react-icons/gr"
import { BsShuffle } from "react-icons/bs"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { CiHeart } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa";



export default function ProductCard(){
  return (
    <div className="col-3">
        <div className="product-card position-relative">
            <div className="product-image">
                <img src="/images/appleWatchSeries2.jpg" alt="product"/>
                <img src="/images/appleWatchSeries2Pink.jpg" alt="product"/>
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
            <div className="position-absolute wishlist">
                <Link>
                    <CiHeart/>
                </Link>
            </div>
            <div className="position-absolute action-bar">
                
                <div className="d-flex flex-column gap-10">
                    <Link>
                        <HiOutlineShoppingBag/>
                    </Link>
                    
                    <Link>
                        <BsShuffle/>
                    </Link>
                    <Link>
                        <GrView/>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
