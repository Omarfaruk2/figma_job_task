import React from 'react'
import "./About.css"
import aboutpng from "../../../src/images/aboutlog.png"
import side from "../../../src/images/sideabout.png"
import happayImg from "../../../src/images/happyparents.png"

const About = () => {
    return (
        <div className='pt-3'>
            <div className='mainAbout py-5'>
                <div className='mb-5'>
                    <h2 className='text-center'>About US</h2>
                </div>
                <p className='text-center aboutImg'>
                    <hr className='hr-color' />
                    <img className='about' src={aboutpng} alt="Logo" />
                    <hr className='hr-color' />
                </p>
            </div>
            <div>
                <img className='w-100' src={happayImg} alt="" />
            </div>
        </div>
    )
}

export default About