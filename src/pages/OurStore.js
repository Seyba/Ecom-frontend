import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"

export default function OurStore() {
  return (
    <>
        <Meta title={"Our Store"}/>
        <BreadCrumb title="Our Store" />
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop by Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" checked/>
                                    <label className="form-check-label" htmlFor="">
                                        In Stock (2)  
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="">
                                        Out of Stock (0)
                                    </label>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating mb-3">
                                        
                                        <input 
                                            className="form-control py-1"
                                            type="number"
                                            name=""
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput1">From</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input 
                                            className="form-control py-1"
                                            type="number"
                                            name=""
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                        
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <ul className="colors p-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li> 
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li> 
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>      
                                    </ul>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value="" 
                                        id="color-1"
                                    />
                                    <label className="form-check-label" htmlFor="color-1">
                                        S (12)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value="" 
                                        id="color-2"
                                    />
                                    <label className="form-check-label" htmlFor="color-2">
                                        M (10)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value="" 
                                        id="color-3"
                                    />
                                    <label className="form-check-label" htmlFor="color-3">
                                        L (12)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Headphones</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Laptop</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Mobile</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Oppo</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Speaker</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Tablet</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Vivo</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Wire</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Product
                            </h3>
                            <div>
                                <div className="random-products d-flex mb-3 py-3">
                                    <div className="w-25">
                                        <img src="/images/headphone-1.jpg" className="img-fluid" alt="headphone"/>
                                    </div>
                                    <div className="w-75 px-3">
                                        <h4>Kids headphones bulk 10 pack multi colored for students</h4>
                                        <ReactStars 
                                            count={5} 
                                            edit={false}
                                            size={24} 
                                            activeColor="#ffd700"
                                            value="3"
                                        />
                                        <h5 className="price">$100.00</h5>
                                    </div>

                                    
                                </div>
                                <div className="random-products d-flex mb-3 py-3">
                                    <div className="w-25">
                                        <img src="/images/appleWatch-1.jpg" className="img-fluid" alt="headphone"/>
                                    </div>
                                    <div className="w-75 px-3">
                                        <h4>Apple Watch Series 2 -42 Mm Stainless</h4>
                                        <ReactStars 
                                            count={3} 
                                            edit={false}
                                            size={24} 
                                            activeColor="#ffd700"
                                            value="3"
                                        />
                                        <h5 className="price">$150.00</h5>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
