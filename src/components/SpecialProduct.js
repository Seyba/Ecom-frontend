import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

export default function SpecialProduct() {
  return (
    <div className="col-6 mb-3">
        <div className=" special-product">
            <div className="d-flex justify-content">
                <div>
                    <img src="/images/appleWatch-1.jpg" className="img-fluid" alt="applewatch"/>
                </div>
                
                <div className="special-product-content">
                    <h5 className="brand">Apple Watch</h5>
                    <h6>Apple Watch Series 2</h6>
                    <ReactStars 
                        count={5} 
                        edit={false}
                        size={24} 
                        activeColor="#ffd700"
                        value="3"
                    />
                    <p className="price">
                        <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                            <b>5</b>days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-3">1</span>
                            <span className="badge rounded-circle p-3">1</span>
                            <span className="badge rounded-circle p-3">1</span>
                        </div>
                        
                    </div>
                    <div className="product-count mt-3">
                        <p>Products: 5</p>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: "5%"}}></div>
                        </div>
                    </div>
                    <div>
                        <Link className="button my-3">
                            Add To Cart
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
