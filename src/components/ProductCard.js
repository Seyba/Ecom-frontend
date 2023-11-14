import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(){
  return (
    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="/images/smartSpeaker.jpg" alt="product"/>
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
            </div>
        </div>
    </div>
  )
}
