import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard(){
  return (
    <div className="blog-card">
        <div className="card-image">
            <img src="/images/blog-vr.jpg" className="img-fluid" alt="blog"/>
        </div>
        <div className="blog-content">
            <p className="date">
                11 JUNE, 2022
            </p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
                You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...
            </p>
            <Link to="" className="button">READ MORE</Link>
        </div>
    </div>
  )
}
