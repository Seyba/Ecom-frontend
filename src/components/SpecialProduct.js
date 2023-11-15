import React from 'react'
import ReactStars from "react-rating-stars-component"


export default function SpecialProduct() {
  return (
    <div className="col-4">
        <div className=" special-product">
            <div className="d-flex justify-content">
                <div>
                    <img src="/images/appleWatch-1.jpg" className="img-fluid" alt="applewatch"/>
                </div>
                <div className="special-product-content">
                    <h5 className="brand">Havels</h5>
                    <h6>Apple Watch Series 2</h6>
                    <ReactStars 
                        count={5} 
                        edit={false}
                        size={24} 
                        activeColor="#ffd700"
                        value="3"
                    />
                    <p className="price">
                        <span className="red-p">$100</span> <strike>$200</strike>
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
