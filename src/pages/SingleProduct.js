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
    const [faq, setFaq] = useState(false)

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

                                        <div id="collapseTwo" className={`collapse ${faq ? 'show ' : '' }`} aria-labelledby="headingOne" data-parent="#accordionExample">
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
                                <div>
                                    <div className="">
                                        <svg enable-background="new 0 0 780 500" height="50" viewBox="0 0 780 500" width="50" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001" fill="#0e4595"/><path d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528" fill="#f2ae14"/>
                                        </svg>
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
