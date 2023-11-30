import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import { Container } from '../components/Container'

export const ResetPassword = () => {
  return (
    <>
        <BreadCrumb title={"Reset Password"}/>
        <Meta title="Reset Password"/>
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3>Reset Password</h3>
                        <form className="d-flex flex-column gap-30" action="">
                            <div >
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-1">
                                <input 
                                    type="password"
                                    name="confpassword"
                                    placeholder="confirm password"
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button">Ok</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
