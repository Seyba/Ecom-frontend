import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import { GiShoppingBag } from "react-icons/gi"
import { GrView } from "react-icons/gr"
import { BsShuffle } from "react-icons/bs"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { CiHeart } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa";



export default function ProductCard(props){
    const { grid } = props
    let location = useLocation()
    //console.log(location.pathname)
    const gridPath = (location.pathname === '/store')
  return (
    <>
        
        <div className={`${location.pathname === '/store'}? gr-${grid} : "col-3"`}>
            <Link to="/product/id" className="product-card position-relative">
                <div className="product-image">
                    <img src="/images/appleWatchSeries2.jpg" className="img-fluid" alt="product"/>
                    <img src="/images/appleWatchSeries2Pink.jpg" className="img-fluid" alt="product"/>
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
                    <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                    </p>
                    <p className="price">$220.00</p>
                </div>
                <div className="position-absolute wishlist">
                    <button className="border-0 bg-transparent">
                        <CiHeart/>
                    </button>
                </div>
                <div className="position-absolute action-bar">
                    
                    <div className="d-flex flex-column gap-10">
                        <button className="border-0 bg-transparent">
                            <HiOutlineShoppingBag/>
                        </button>
                        
                        <button className="border-0 bg-transparent">
                            <BsShuffle/>
                        </button>
                        <button className="border-0 bg-transparent">
                            <GrView/>
                        </button>
                        
                    </div>
                </div>
            </Link>
        </div>
        <div className={`${gridPath}`? `gr-${grid}`:`col-3`}>
            <Link className="product-card position-relative">
                <div className="product-image">
                    <img src="/images/appleWatchSeries2.jpg" className="img-fluid" alt="product"/>
                    <img src="/images/appleWatchSeries2Pink.jpg" className="img-fluid" alt="product"/>
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
                    <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                    </p>
                    <p className="price">$220.00</p>
                </div>
                <div className="position-absolute wishlist ">
                    <button className="border-0 bg-transparent">
                        <CiHeart/>
                    </button>
                </div>
                <div className="position-absolute action-bar">
                    
                    <div className="d-flex flex-column gap-10">
                        <button className="border-0 bg-transparent">
                            <HiOutlineShoppingBag/>
                        </button>
                        
                        <button className="border-0 bg-transparent">
                            <BsShuffle/>
                        </button>
                        <button className="border-0 bg-transparent">
                            <GrView/>
                        </button>
                        
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}
