import React from 'react'
import {Link} from 'react-router-dom'
export default function BreadCrumb(props) {
    const { title} = props
  return (
    <div className="breadCrumb mb-0 py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <p className="text-center">
                        <Link to="/" className="text-dark">
                            Home &nbsp;
                        </Link> {" "}
                        / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
