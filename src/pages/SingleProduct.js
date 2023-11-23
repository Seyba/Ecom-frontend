import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom"
import { Color } from '../components/Color'

export const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(0)
    const props = {width: 400, height: 250, zooWidth: 500, img: "/images/headphoneBlue.jpg" }
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
                        <div className="col-6 px-4">
                            <h3 className="prod_detail__title pb-2">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                            <h3 className="prod_detail__price mb-3">$150.00</h3>
                            <div className="prod_detail__review d-flex gap-10 align-items-center">
                                <ReactStars 
                                    count={5} 
                                    edit={false}
                                    size={24} 
                                    activeColor="#ffd700"
                                    value="3"
                                />
                                <p className="mb-0">Based on (8 reviews)</p>        
                            </div>
                            <div className="prod_detail_link_wrapper">
                                <Link className="prod_detail__link" to="">Write a review</Link> 
                            </div>
                            <div className="prod_detail_info">
                                
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="prod_detail__heading">Type: </h3> <p className="prod_detail__data">Headphone</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="prod_detail__heading">Brand: </h3> <p className="prod_detail__data">Havels</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="prod_detail__heading">Category: </h3> <p className="prod_detail__data">Headphone</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="prod_detail__heading">Tags: </h3> <p className="prod_detail__data">Headphone</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="prod_detail__heading">Availability: </h3> <p className="prod_detail__data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column my-2">
                                    <h3 className="prod_detail__heading">Size: </h3> 
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 text-dark border-secondary">S</span>
                                        <span className="badge border border-1 text-dark border-secondary">L</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-2">
                                    <h3 className="prod_detail__heading">Color: </h3> <p className="prod_detail__data"><Color/></p>
                                </div>
                                <div className="d-flex gap-10 flex-row my-2">
                                    <h3 className="prod_detail__heading">Quantity: </h3>
                                    <div>
                                        <input 
                                            type="number"
                                            name=""
                                            style={{width: '70px'}}
                                            min={1}
                                            max={10}
                                            className="form-control"
                                        />
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section  className="description-wrapper py5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <h4>Description</h4>
                    <div className="col-12">
                        <div className="bg-white p-3 desc-radius">
                            
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
                    <h3>Reviews</h3>
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
                            <div className="review-form py-4">
                                <h4>Write a review</h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <ReactStars 
                                            count={5} 
                                            edit={true}
                                            size={24} 
                                            activeColor="#ffd700"
                                            value="3"
                                        />
                                    </div>

                                    <div>
                                        <textarea 
                                            className="form-control" 
                                            id="exampleFormControlTextarea1" 
                                            placeholder="Comment" 
                                            rows="4">
                                        </textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button">
                                            Submit Review
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className="mb-0">John</h6>
                                        <ReactStars 
                                            count={5} 
                                            edit={false}
                                            size={24} 
                                            activeColor="#ffd700"
                                            value="3"
                                        />
                                        
                                    </div>
                                    <p className="mt-3">
                                        I really love this headset
                                        It gives me what i really want.
                                    </p>
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
