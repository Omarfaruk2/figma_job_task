import React from 'react'
import "./About.css"
import aboutpng from "../../src/images/aboutlog.png"
import side from "../../src/images/sideabout.png"
import happayImg from "../../src/images/happyparents.png"

const About = () => {
    return (
        <div>
            <div className='mainAbout py-5'>
                <div>
                    <h2 className='text-center'>About US</h2>
                </div>
                <p className='text-center aboutImg'>
                    <img src={side} alt="Logo" />
                    <img src={aboutpng} alt="Logo" />
                    <img src={side} alt="Logo" />
                </p>
            </div>
            <div>
                <img className='w-100' src={happayImg} alt="" />
            </div>
        </div>
    )
}

export default About