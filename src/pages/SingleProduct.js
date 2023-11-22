import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"

export const SingleProduct = (props) => {
    const [orderedProduct, setOrderedProduct] = useState(0)

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
                                        <img src="/images/headphone-2.jpg"  alt="headphone"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="prod_img">
                                        <img src="/images/headphone-1.jpg" alt="headphone"/>
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
        <section  className="description-wrapper py5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-white p-3">
                            <h4>Description</h4>
                            <p>
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                            blanditiis praesentium voluptatum deleniti atque corrupti quos 
                            dolores et quas molestias excepturi sint occaecati cupiditate non 
                            provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et 
                            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi 
                            optio cumque nihil impedit quo minus id quod maxime placeat facere 
                            possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                            Temporibus autem quibusdam et aut officiis debitis aut rerum 
                            necessitatibus saepe eveniet ut et voluptates repudiandae sint et 
                            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente 
                            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut 
                            perferendis doloribus asperiores repellat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="reviews-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex gap-10 align-items-center">
                                        <ReactStars 
                                            count={5} 
                                            edit={false}
                                            size={24} 
                                            activeColor="#ffd700"
                                            value="3"
                                        />
                                        <p className="mb-0">Based on 4 reviews</p>
                                        
                                    </div>
                                </div>
                                <div>
                                    {orderedProduct > 0 && <Link className="text-dark text-decoration-underline">Write a review </Link>}
                                </div>
                            </div>
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
