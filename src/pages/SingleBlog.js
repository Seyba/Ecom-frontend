import React from 'react'
import BlogCard from '../components/BlogCard'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const SingleBlog = () => {
  return (
    <>
        <BreadCrumb title={"Dynamic title"}/>
        <Meta title="Dynamic title"/>
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <h3>A Beautiful Sunday Morning Renaissance</h3>
                            <img src="/images/blogImg1.jpg" alt="blog" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
