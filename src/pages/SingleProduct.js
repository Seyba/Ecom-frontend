import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'

export const SingleProduct = (props) => {
  return (
    <>
        <BreadCrumb title={"Product Name"}/>
        <Meta title="Product Name"/>
        <section className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="product-card">
                    <div className="row">
                        <div className="col-6">
                            <div className="prod_img mb-4">
                                <img src="/images/headphoneBlue.jpg" className="img-fluid" alt="headphone"/>
                            </div>
                            <div className="row mb-4">
                                <div className="col-6">
                                    <div className="prod_img">
                                        <img src="/images/headphone-2.jpg" alt="headphone"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="prod_img">
                                        <img src="/images/headphone-2.jpg" alt="headphone"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="prod_img">
                                        <img src="/images/headphone-2.jpg" alt="headphone"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="prod_img">
                                        <img src="/images/headphone-2.jpg" alt="headphone"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl ">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                    <div className="col-3">
                        <ProductCard/>
                    </div>
                    <div className="col-3">
                        <ProductCard/>
                    </div>
                    <div className="col-3">
                        <ProductCard/>
                    </div>
                    <div className="col-3">
                        <ProductCard/>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}
