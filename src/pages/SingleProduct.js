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
                <div className="row">
                    <div className="product-card">
                        <div className="col-6">
                            <img src="/images/headphone-1.jpg" className="img-fluid border-2" alt="headphone"/>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <img src="/images/headphone-2.jpg" alt="headphone"/>
                                    </div>
                                    <div>
                                        <img src="/images/headphone-2.jpg" alt="headphone"/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
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
                    <ProductCard/>
                </div>
            </div>
        </section>
    </>
  )
}
