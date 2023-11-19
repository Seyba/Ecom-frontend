import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Color } from '../components/Color'
import Meta from '../components/Meta'

export const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare"}/>
        <BreadCrumb title="Compare" />
        <section className="compare-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <div className="cross position-absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div>
                            
                            <div className="product-card-image">
                                <img src="/images/camera-1.jpg" alt="compare"/>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T1 7.0.1 GB RAM 8 ROM 7 Inc with Wi-fi+3G Tablet.</h5>
                                <h6 className="price mt-3">$100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Olympus</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Camera</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
