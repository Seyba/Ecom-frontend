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
import { Container } from '../components/Container'




export const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(0)
    const props = {width: 400, height: 250, zooWidth: 500, img: "/images/headphoneBlue.jpg" }
    
    const [careDetails, setCareDetails] = useState(false)
    const [showShippingDetails, setShowShippingDetails] = useState(false)
    const [materialsInfo, setMaterialsInfo] = useState(false)
    const [faq, setFaq] = useState(false)

  return (
    <>
        <BreadCrumb title={"Product Name"}/>
        <Meta title="Product Name"/>
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
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
                                
                                <div className="accordion accordion-wrapper mt-4">
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                                </svg>
                                                <h5 className="mb-0 prod-accordion-title">Shipping & Returns</h5>
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
                                                <p className="prod_detail__data px-3">
                                                    Free shipping and returns available on all orders!
                                                    We ship all US domestic orders within <b>5-10 business days!</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion accordion-wrapper" >
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                                <SiMaterialdesignicons/>
                                                <h5 className="mb-0 prod-accordion-title">Materials</h5>
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
                                                <p className="prod_detail__data px-3">
                                                    Running Shoes cushions your stride with soft foam to keep you running in comfort. 
                                                    Lightweight knit material wraps your foot in breathable support, 
                                                    while a minimalist design fits in just about anywhere your day takes you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion accordion-wrapper">
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                            </svg>
                                                <h5 className="mb-0 prod-accordion-title">Care Instructions</h5>
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
                                                <p className="prod_detail__data px-3">
                                                    Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion accordion-wrapper">
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-15 align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                                </svg>
                                                <h5 className="mb-0 prod-accordion-title">FAQ's</h5>
                                            </div>
                                            <div className="" id="headingOne">
                                                <h5 className="mb-0">
                                                    <Link 
                                                        className="text-dark"
                                                        onClick={() => setFaq(!faq)}
                                                    >
                                                        {faq? <BiChevronUp/>:<BiChevronDown/>}
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>

                                        <div id="collapseTwo" className={`collapse ${faq ? 'show anim' : '' }`} aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="">
                                                <h3 className="faq-heading px-3">The Standard Lorem Ipsum Passage</h3>
                                                <p className="prod_detail__data px-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, 
                                                    faucibus eget elit quis, vehicula rhoncus nulla. 
                                                    Phasellus convallis sem nec facilisis commodo. 
                                                    Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. 
                                                    Quisque gravida suscipit tincidunt.
                                                </p>
                                                <h3 className="faq-heading px-3">At Vero Eos Et Accusamus Et Iusto Odio Dignissimos</h3>
                                                <p className="prod_detail__data px-3">
                                                    Mauris elementum scelerisque elit non egestas. 
                                                    Cras lacus nibh, pretium quis bibendum nec, dapibus a metus. 
                                                    Morbi eros lectus, aliquam eu aliquam id, fringilla nec eros. 
                                                    Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. 
                                                    Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.
                                                </p>
                                                <h3 className="faq-heading px-3">Certain Circumstances And Owing To The Claims Of Duty Or The Obligations</h3>
                                                <p className="prod_detail__data px-3">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure 
                                                    and praising pain was born and I will give you a complete account of the system, 
                                                    and expound the actual teachings of the great explorer of the truth, 
                                                    the master-builder of human happiness. No one rejects, dislikes.
                                                </p>
                                                <h3 className="faq-heading px-3">Integer Ultrices Laoreet Nunc In Gravida</h3>
                                                <p className="prod_detail__data px-3">
                                                    Sed lobortis pulvinar viverra. 
                                                    Cum sociis natoque penatibus et magnis dis parturient montes, 
                                                    nascetur ridiculus mus. Mauris suscipit dolor scelerisque, 
                                                    bibendum tellus ac, pharetra sapien. 
                                                    Praesent lacinia scelerisque odio et consequat. 
                                                    In a facilisis lacus. Maecenas vel lobortis tellus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prod-footer-payment">
                                    <h5 className="prod-footer__heading">Payment Methods</h5>
                                    <div className="d-flex justify-content-center gap-10">
                                        <div className="">
                                            <svg enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001" fill="#0e4595"/><path d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528" fill="#f2ae14"/>
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5" fill="#d9222a"/><path d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5" fill="#ee9f2d"/><path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"/><path d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z" fill="#fff"/><path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"/><path d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z" fill="#fff"/>
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m40 .001h700c22.092 0 40 17.909 40 40v420c0 22.092-17.908 40-40 40h-700c-22.091 0-40-17.908-40-40v-420c0-22.091 17.909-40 40-40z" fill="#2557d6"/><path d="m.253 235.69h37.441l8.442-19.51h18.9l8.42 19.51h73.668v-14.915l6.576 14.98h38.243l6.576-15.202v15.138h183.08l-.085-32.026h3.542c2.479.083 3.204.302 3.204 4.226v27.8h94.689v-7.455c7.639 3.92 19.518 7.455 35.148 7.455h39.836l8.525-19.51h18.9l8.337 19.51h76.765v-18.532l11.626 18.532h61.515v-122.51h-60.88v14.468l-8.522-14.468h-62.471v14.468l-7.828-14.468h-84.38c-14.123 0-26.539 1.889-36.569 7.153v-7.153h-58.229v7.153c-6.383-5.426-15.079-7.153-24.75-7.153h-212.74l-14.274 31.641-14.659-31.641h-67.005v14.468l-7.362-14.468h-57.145l-26.539 58.246v64.261h.003zm236.34-17.67h-22.464l-.083-68.794-31.775 68.793h-19.24l-31.858-68.854v68.854h-44.57l-8.42-19.592h-45.627l-8.505 19.592h-23.801l39.241-87.837h32.559l37.269 83.164v-83.164h35.766l28.678 59.587 26.344-59.587h36.485zm-165.9-37.823-14.998-35.017-14.915 35.017zm255.3 37.821h-73.203v-87.837h73.203v18.291h-51.289v15.833h50.06v18.005h-50.061v17.542h51.289zm103.16-64.18c0 14.004-9.755 21.24-15.439 23.412 4.794 1.748 8.891 4.838 10.84 7.397 3.094 4.369 3.628 8.271 3.628 16.116v17.255h-22.104l-.083-11.077c0-5.285.528-12.886-3.458-17.112-3.202-3.09-8.083-3.76-15.973-3.76h-23.523v31.95h-21.914v-87.838h50.401c11.199 0 19.451.283 26.535 4.207 6.933 3.924 11.09 9.652 11.09 19.45zm-27.699 13.042c-3.013 1.752-6.573 1.81-10.841 1.81h-26.62v-19.51h26.982c3.818 0 7.804.164 10.393 1.584 2.842 1.28 4.601 4.003 4.601 7.765 0 3.84-1.674 6.929-4.515 8.351zm62.844 51.138h-22.358v-87.837h22.358zm259.56 0h-31.053l-41.535-65.927v65.927h-44.628l-8.527-19.592h-45.521l-8.271 19.592h-25.648c-10.649 0-24.138-2.257-31.773-9.715-7.701-7.458-11.708-17.56-11.708-33.533 0-13.027 2.395-24.936 11.812-34.347 7.085-7.01 18.18-10.242 33.28-10.242h21.215v18.821h-20.771c-7.997 0-12.514 1.14-16.862 5.203-3.735 3.699-6.298 10.69-6.298 19.897 0 9.41 1.951 16.196 6.023 20.628 3.373 3.476 9.506 4.53 15.272 4.53h9.842l30.884-69.076h32.835l37.102 83.081v-83.08h33.366l38.519 61.174v-61.174h22.445zm-133.2-37.82-15.165-35.017-15.081 35.017zm189.04 178.08c-5.322 7.457-15.694 11.238-29.736 11.238h-42.319v-18.84h42.147c4.181 0 7.106-.527 8.868-2.175 1.665-1.474 2.605-3.554 2.591-5.729 0-2.561-1.064-4.593-2.677-5.811-1.59-1.342-3.904-1.95-7.722-1.95-20.574-.67-46.244.608-46.244-27.194 0-12.742 8.443-26.156 31.439-26.156h43.649v-17.479h-40.557c-12.237 0-21.129 2.81-27.425 7.174v-7.175h-59.985c-9.595 0-20.854 2.279-26.179 7.175v-7.175h-107.12v7.175c-8.524-5.892-22.908-7.175-29.549-7.175h-70.656v7.175c-6.745-6.258-21.742-7.175-30.886-7.175h-79.077l-18.094 18.764-16.949-18.764h-118.13v122.59h115.9l18.646-19.062 17.565 19.062 71.442.061v-28.838h7.021c9.479.14 20.66-.228 30.523-4.312v33.085h58.928v-31.952h2.842c3.628 0 3.985.144 3.985 3.615v28.333h179.01c11.364 0 23.244-2.786 29.824-7.845v7.845h56.78c11.815 0 23.354-1.587 32.134-5.649l.002-22.84zm-354.94-47.155c0 24.406-19.005 29.445-38.159 29.445h-27.343v29.469h-42.591l-26.984-29.086-28.042 29.086h-86.802v-87.859h88.135l26.961 28.799 27.875-28.799h70.021c17.389 0 36.929 4.613 36.929 28.945zm-174.22 40.434h-53.878v-17.48h48.11v-17.926h-48.11v-15.974h54.939l23.969 25.604zm86.81 10.06-33.644-35.789 33.644-34.65zm49.757-39.066h-28.318v-22.374h28.572c7.912 0 13.404 3.09 13.404 10.772 0 7.599-5.238 11.602-13.658 11.602zm148.36-40.373h73.138v18.17h-51.315v15.973h50.062v17.926h-50.062v17.48l51.314.08v18.23h-73.139zm-28.119 47.029c4.878 1.725 8.865 4.816 10.734 7.375 3.095 4.291 3.542 8.294 3.631 16.037v17.418h-22.002v-10.992c0-5.286.531-13.112-3.542-17.198-3.201-3.147-8.083-3.899-16.076-3.899h-23.42v32.09h-22.02v-87.859h50.594c11.093 0 19.173.47 26.366 4.146 6.915 4.004 11.266 9.487 11.266 19.511-.001 14.022-9.764 21.178-15.531 23.371zm-12.385-11.107c-2.932 1.667-6.556 1.811-10.818 1.811h-26.622v-19.732h26.982c3.902 0 7.807.08 10.458 1.587 2.84 1.423 4.538 4.146 4.538 7.903 0 3.758-1.699 6.786-4.538 8.431zm197.82 5.597c4.27 4.229 6.554 9.571 6.554 18.613 0 18.9-12.322 27.723-34.425 27.723h-42.68v-18.84h42.51c4.157 0 7.104-.525 8.95-2.175 1.508-1.358 2.589-3.333 2.589-5.729 0-2.561-1.17-4.592-2.675-5.811-1.675-1.34-3.986-1.949-7.803-1.949-20.493-.67-46.157.609-46.157-27.192 0-12.744 8.355-26.158 31.33-26.158h43.932v18.7h-40.198c-3.984 0-6.575.145-8.779 1.587-2.4 1.422-3.29 3.534-3.29 6.319 0 3.314 2.037 5.57 4.795 6.546 2.311.77 4.795.995 8.526.995l11.797.306c11.895.276 20.061 2.248 25.024 7.065zm86.955-23.52h-39.938c-3.986 0-6.638.144-8.867 1.587-2.312 1.423-3.202 3.534-3.202 6.322 0 3.314 1.951 5.568 4.791 6.544 2.312.771 4.795.996 8.444.996l11.878.304c11.983.284 19.982 2.258 24.86 7.072.891.67 1.422 1.422 2.033 2.175v-25z" fill="#fff"/>
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg enable-background="new 0 0 780 500" height="40" viewBox="0 0 780 500" width="40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m168.38 169.35c-8.399-5.774-19.359-8.668-32.88-8.668h-52.346c-4.145 0-6.435 2.073-6.87 6.215l-21.264 133.48c-.221 1.311.107 2.51.981 3.6.869 1.092 1.962 1.635 3.271 1.635h24.864c4.361 0 6.758-2.068 7.198-6.215l5.888-35.986c.215-1.744.982-3.162 2.291-4.254 1.308-1.09 2.944-1.803 4.907-2.129 1.963-.324 3.814-.488 5.562-.488 1.743 0 3.814.111 6.217.328 2.397.217 3.925.324 4.58.324 18.756 0 33.478-5.285 44.167-15.867 10.684-10.576 16.032-25.242 16.032-44.004 0-12.868-4.203-22.191-12.598-27.974zm-26.989 40.08c-1.094 7.635-3.926 12.649-8.506 15.049-4.581 2.403-11.124 3.599-19.629 3.599l-10.797.326 5.563-35.007c.434-2.397 1.851-3.597 4.252-3.597h6.218c8.72 0 15.049 1.257 18.975 3.761 3.924 2.51 5.233 7.801 3.924 15.869z" fill="#003087"/><path d="m720.79 160.68h-24.207c-2.406 0-3.822 1.2-4.254 3.601l-21.266 136.1-.328.654c0 1.096.436 2.127 1.311 3.109.867.98 1.963 1.471 3.27 1.471h21.596c4.137 0 6.428-2.068 6.871-6.215l21.264-133.81v-.325c-.001-3.055-1.423-4.581-4.257-4.581z" fill="#009cde"/><path d="m428.31 213.36c0-1.088-.438-2.126-1.305-3.105-.875-.981-1.857-1.475-2.945-1.475h-25.191c-2.404 0-4.367 1.096-5.891 3.271l-34.678 51.039-14.395-49.074c-1.096-3.487-3.492-5.236-7.197-5.236h-24.541c-1.093 0-2.074.492-2.941 1.475-.875.979-1.309 2.019-1.309 3.105 0 .439 2.127 6.871 6.379 19.303 4.252 12.436 8.832 25.85 13.74 40.246 4.908 14.393 7.469 22.031 7.688 22.896-17.886 24.432-26.825 37.518-26.825 39.26 0 2.838 1.415 4.254 4.253 4.254h25.191c2.398 0 4.36-1.088 5.89-3.27l83.427-120.4c.433-.432.65-1.192.65-2.29z" fill="#003087"/><path d="m662.89 208.78h-24.865c-3.057 0-4.904 3.6-5.559 10.799-5.678-8.722-16.031-13.089-31.084-13.089-15.703 0-29.064 5.89-40.076 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.762 23.121 11.285 30.752 7.525 7.639 17.611 11.451 30.266 11.451 6.324 0 12.758-1.311 19.301-3.926 6.543-2.617 11.664-6.105 15.379-10.469 0 .219-.223 1.197-.654 2.941-.441 1.748-.656 3.061-.656 3.926 0 3.494 1.414 5.234 4.254 5.234h22.576c4.139 0 6.541-2.068 7.193-6.215l13.416-85.39c.215-1.31-.111-2.507-.982-3.599-.877-1.088-1.965-1.635-3.273-1.635zm-42.694 64.454c-5.562 5.453-12.27 8.178-20.121 8.178-6.328 0-11.449-1.742-15.377-5.234-3.928-3.482-5.891-8.281-5.891-14.395 0-8.064 2.727-14.886 8.182-20.447 5.445-5.562 12.213-8.342 20.283-8.342 6.102 0 11.174 1.799 15.213 5.396 4.031 3.6 6.055 8.562 6.055 14.889-.002 7.851-2.783 14.505-8.344 19.955z" fill="#009cde"/><path d="m291.23 208.78h-24.865c-3.058 0-4.908 3.6-5.563 10.799-5.889-8.722-16.25-13.089-31.081-13.089-15.704 0-29.065 5.89-40.078 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.763 23.121 11.288 30.752 7.525 7.639 17.61 11.451 30.262 11.451 6.104 0 12.433-1.311 18.975-3.926 6.543-2.617 11.778-6.105 15.704-10.469-.875 2.615-1.309 4.906-1.309 6.867 0 3.494 1.417 5.234 4.253 5.234h22.574c4.141 0 6.543-2.068 7.198-6.215l13.413-85.39c.215-1.31-.111-2.507-.981-3.599-.873-1.088-1.962-1.635-3.269-1.635zm-42.695 64.616c-5.563 5.35-12.382 8.016-20.447 8.016-6.329 0-11.4-1.742-15.214-5.234-3.819-3.482-5.726-8.281-5.726-14.395 0-8.064 2.725-14.886 8.18-20.447 5.449-5.562 12.211-8.343 20.284-8.343 6.104 0 11.175 1.8 15.214 5.397 4.032 3.6 6.052 8.562 6.052 14.889-.001 8.07-2.781 14.779-8.343 20.117z" fill="#003087"/><path d="m540.04 169.35c-8.398-5.774-19.355-8.668-32.879-8.668h-52.02c-4.363 0-6.764 2.073-7.197 6.215l-21.266 133.48c-.221 1.311.107 2.51.982 3.6.865 1.092 1.961 1.635 3.27 1.635h26.826c2.617 0 4.361-1.416 5.236-4.252l5.889-37.949c.217-1.744.98-3.162 2.291-4.254 1.309-1.09 2.943-1.803 4.908-2.129 1.961-.324 3.812-.488 5.561-.488 1.744 0 3.814.111 6.215.328 2.398.217 3.93.324 4.58.324 18.76 0 33.479-5.285 44.168-15.867 10.688-10.576 16.031-25.242 16.031-44.004.001-12.868-4.2-22.192-12.595-27.974zm-33.533 53.819c-4.799 3.271-11.998 4.906-21.592 4.906l-10.471.328 5.562-35.008c.432-2.396 1.85-3.598 4.252-3.598h5.887c4.799 0 8.615.219 11.455.654 2.83.438 5.561 1.799 8.178 4.088 2.619 2.291 3.926 5.619 3.926 9.979 0 9.164-2.402 15.377-7.197 18.651z" fill="#009cde"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg height="40" viewBox="0 0 780 500" width="40" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd">
                                                <path d="m54.992 0c-30.365 0-54.992 24.63-54.992 55.004v390.992c0 30.38 24.619 55.004 54.992 55.004h670.016c30.365 0 54.992-24.63 54.992-55.004v-390.992c0-30.38-24.619-55.004-54.992-55.004z" fill="#4d4d4d"/><path d="m327.152 161.893c8.837 0 16.248 1.784 25.268 6.09v22.751c-8.544-7.863-15.955-11.154-25.756-11.154-19.264 0-34.414 15.015-34.414 34.05 0 20.075 14.681 34.196 35.37 34.196 9.312 0 16.586-3.12 24.8-10.857v22.763c-9.341 4.14-16.911 5.776-25.756 5.776-31.278 0-55.582-22.596-55.582-51.737 0-28.826 24.951-51.878 56.07-51.878zm-97.113.627c11.546 0 22.11 3.72 30.943 10.994l-10.748 13.248c-5.35-5.646-10.41-8.028-16.564-8.028-8.853 0-15.3 4.745-15.3 10.989 0 5.354 3.619 8.188 15.944 12.482 23.365 8.044 30.29 15.176 30.29 30.926 0 19.193-14.976 32.553-36.32 32.553-15.63 0-26.994-5.795-36.458-18.872l13.268-12.03c4.73 8.61 12.622 13.222 22.42 13.222 9.163 0 15.947-5.952 15.947-13.984 0-4.164-2.055-7.734-6.158-10.258-2.066-1.195-6.158-2.977-14.2-5.647-19.291-6.538-25.91-13.527-25.91-27.185 0-16.225 14.214-28.41 32.846-28.41zm234.723 1.728h22.437l28.084 66.592 28.446-66.592h22.267l-45.494 101.686h-11.053zm-397.348.152h30.15c33.312 0 56.534 20.382 56.534 49.641 0 14.59-7.104 28.696-19.118 38.057-10.108 7.901-21.626 11.445-37.574 11.445h-29.992zm96.135 0h20.54v99.143h-20.54zm411.734 0h58.252v16.8h-37.725v22.005h36.336v16.791h-36.336v26.762h37.726v16.785h-58.252v-99.143zm71.858 0h30.455c23.69 0 37.265 10.71 37.265 29.272 0 15.18-8.514 25.14-23.986 28.105l33.148 41.766h-25.26l-28.429-39.828h-2.678v39.828h-20.515zm20.515 15.616v30.025h6.002c13.117 0 20.069-5.362 20.069-15.328 0-9.648-6.954-14.697-19.745-14.697zm-579.716 1.183v65.559h5.512c13.273 0 21.656-2.394 28.11-7.88 7.103-5.955 11.376-15.465 11.376-24.98 0-9.499-4.273-18.725-11.376-24.681-6.785-5.78-14.837-8.018-28.11-8.018z" fill="#fff"/><path d="m415.13 161.21c30.941 0 56.022 23.58 56.022 52.709v.033c0 29.13-25.081 52.742-56.021 52.742s-56.022-23.613-56.022-52.742v-.033c0-29.13 25.082-52.71 56.022-52.71zm364.85 127.15c-26.05 18.33-221.08 149.34-558.75 212.62h503.76c30.365 0 54.992-24.63 54.992-55.004v-157.62z" fill="#f47216"/></g>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
            </div>
        </Container>
        <Container  class1="description-wrapper py5 home-wrapper-2">
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
        </Container>
        <Container class1="reviews-wrapper py-5 home-wrapper-2">
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
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
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
        </Container>
    </>
  )
}
