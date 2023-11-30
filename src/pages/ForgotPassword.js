import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import { Container } from '../components/Container'
import { CustomInput } from '../components/CustomInput'

export const ForgotPassword = () => {
  return (
    <>
        <BreadCrumb title={"Account"}/>
        <Meta title="Account"/>
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3>Reset Your Password</h3>
                            <p className="text-center mt-2 mb-2">We will send you an email to reset your password</p>
                            <form className="d-flex flex-column gap-30" action="">
                                <CustomInput type="email" name="email" placeholder="email"/>
                                <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                    <button className="button border-0" type="submit">Submit</button>
                                    <Link to="/login">Cancel</Link>
                                </div>
                            </form>

                        </div>
                    </div>
            </div>
        </Container>
    </>
  )
}
