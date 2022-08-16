import React from 'react'
import "./Footer.css"
import footerbiglogo from "../../images/footerbiglogo.png"
import footersmalllogo from "../../images/fotersamlllogo.png"

const Footer = () => {
    return (
        <div className='footer-section'>
            <section className=' d-flex justify-content-between pt-3'>
                <div className="logo-footer">
                    <img src={footerbiglogo} alt="" />
                </div>
                <div className="link-footer d-flex mt-4">
                    <div>
                        <p>Quick Link</p>
                        <span><a href="/contact">Contact US</a></span>
                        <span><a href="/contact">About US</a></span>
                        <span><a href="/contact">Testimonial</a></span>
                        <span><a href="/contact">Gallery</a></span>
                        <span><a href="/contact">Site Map</a></span>
                    </div>
                    <div>
                        <p>Flats in Mumbai</p>
                        <span><a href="/contact">1BHK Andheri West</a></span>
                        <span><a href="/contact">2 BHK Andheri West</a></span>
                        <span><a href="/contact">3 BHK Andheri West</a></span>
                        <span><a href="/contact">1BHK Goregaon East</a></span>
                        <span><a href="/contact">2BHK Goregaon East</a></span>
                    </div>
                    <div>
                        <p>Projects in Mumbai</p>
                        <span><a href="/contact">Ongoing</a></span>
                        <span><a href="/contact">Upcoming</a></span>
                        <span><a href="/contact">Completed</a></span>
                        <span><a href="/contact">Hetali Blessings</a></span>
                        <span><a href="/contact">Hetali Anuchhaya</a></span>
                    </div>
                </div>

            </section>
            <section>
                <div>
                    <p className='text-center py-3 aboutImg m-0'>
                        <img width="50px" src={footersmalllogo} alt="Logo" />
                    </p>
                    <p className='text-white text-center pb-4 m-0'>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</p>
                </div>
            </section>

        </div>
    )
}

export default Footer