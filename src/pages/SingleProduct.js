import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom"
import { Color } from '../components/Color'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { SiMaterialdesignicons } from "react-icons/si";




export const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(0)
    const props = {width: 400, height: 250, zooWidth: 500, img: "/images/headphoneBlue.jpg" }
    
    const [careDetails, setCareDetails] = useState(false)
    const [showShippingDetails, setShowShippingDetails] = useState(false)
    const [materialsInfo, setMaterialsInfo] = useState(false)
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
                                    <div className="d-flex align-items-center gap-30">
                                        <button className="button border-0">Buy It Now</button>
                                        <button className="button border-0">Add To Cart</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <Link className="text-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                            </svg>
                                            <span className="p-1">Add to Wishlist</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="text-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                                                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                                            </svg>
                                            <span className="p-1">Add to Compare</span>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="accordion">
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                                </svg>
                                                <h5 className="mb-0">Shipping & Returns</h5>
                                            </div>
                                            <div className="" id="headingOne">
                                                <h5 className="mb-0">
                                                    <Link 
                                                        className="text-dark"
                                                        onClick={() => setShowShippingDetails(!showShippingDetails)}
                                                    >
                                                        {showShippingDetails? <BiChevronUp/>:<BiChevronDown/>}
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>

                                        <div id="collapseOne" className={`collapse ${showShippingDetails ? 'show ' : '' }`} aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="" >
                                                <p className="prod_detail__data">
                                                    Free shipping and returns available on all orders!
                                                    We ship all US domestic orders within <b>5-10 business days!</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" >
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                                <SiMaterialdesignicons/>
                                                <h5 className="mb-0">Materials</h5>
                                            </div>
                                            <div className="" id="headingOne">
                                                <h5 className="mb-0">
                                                    <Link 
                                                        className="text-dark"
                                                        onClick={() => setMaterialsInfo(!materialsInfo)}
                                                    >
                                                        {materialsInfo? <BiChevronUp/>:<BiChevronDown/>}
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>

                                        <div id="collapseOne" className={`collapse ${materialsInfo ? 'show ' : '' }`} aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="">
                                                <p className="prod_detail__data">
                                                    Running Shoes cushions your stride with soft foam to keep you running in comfort. 
                                                    Lightweight knit material wraps your foot in breathable support, 
                                                    while a minimalist design fits in just about anywhere your day takes you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion">
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                            </svg>
                                                <h5 className="mb-0">Care Instructions</h5>
                                            </div>
                                            <div className="" id="headingOne">
                                                <h5 className="mb-0">
                                                    <Link 
                                                        className="text-dark"
                                                        onClick={() => setCareDetails(!careDetails)}
                                                    >
                                                        {careDetails? <BiChevronUp/>:<BiChevronDown/>}
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>

                                        <div id="collapseTwo" className={`collapse ${careDetails ? 'show ' : '' }`} aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="">
                                                <p className="prod_detail__data">
                                                    Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.
                                                </p>
                                            </div>
                                        </div>
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
