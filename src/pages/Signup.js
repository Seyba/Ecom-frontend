import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Container } from '../components/Container'
import { CustomInput } from '../components/CustomInput'

export const Signup = () => {
  return (
    <>
        <BreadCrumb title={"Signup"}/>
        <Meta title="Signup"/>
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3>Create Account</h3>
                        <form className="d-flex flex-column gap-30" action="">
                            <CustomInput type="text" name="name" placeholder="Name"/>
                            <CustomInput type="tel" name="mobile" placeholder="Mobile Number"/>
                            <CustomInput type="email" name="email" placeholder="Email"/>
                            <CustomInput type="password" name="password" placeholder="password"/>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button">Create</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
