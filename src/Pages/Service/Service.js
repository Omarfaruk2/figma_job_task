import React from 'react'
import "./Service.css"
import Card from 'react-bootstrap/Card'
import { Stopwatch, Star } from 'react-bootstrap-icons'
// import { GiShakingHands } from "react-icons/gi"
import { FaHandshake } from "react-icons/fa"
import { MdRealEstateAgent } from "react-icons/md"
import logo from "../../../src/images/aboutlog.png"
// import History from '../Pages/History/History'


const Service = () => {
    return (
        <div className='pt-5 pb-2 m-0 maindiv'>
            <div className="text-section">
                <p className='fw-bold'>We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.
                </p>
            </div>

            {/* <p className='text-center aboutImg py-5'>
                <img src={logo} alt="Logo" />
            </p> */}

            <p className='text-center aboutImg py-5'>
                <hr className='hr-color' />
                <img className='about' src={logo} alt="Logo" />
                <hr className='hr-color' />
            </p>


            {/* Icon section */}
            <div className='icon-section container row mt-0 p-0 mx-auto'>

                <Card className='col-lg-5 ms-auto icon-card me-1 my-1'>
                    <Stopwatch className='react-icon-css' />
                    <Card.Body className='icon-div'>
                        <p>Our track record has been impeccable with <b>project completion on time</b> and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our <b>modern and urbane designs</b> to their neighbours.</p>
                    </Card.Body>
                </Card>

                <Card className='col-lg-5 icon-card me-auto my-1'>
                    <Star className='react-icon-css' />
                    <Card.Body className='icon-div'>
                        <p>The Hetali Group is a redeveloper like no other with a <b>profound focus on quality</b> and <b>long term satisfaction of its residents.</b>

                        </p>
                    </Card.Body>
                </Card>


                <Card className='col-lg-5 icon-card ms-auto me-1'>
                    <FaHandshake className='react-icon-css' />
                    <Card.Body className='icon-div'>
                        <p>They just don't endeavour but build homes which make it's residents proud of their address <b>by putting home-owners at the heart and soul of everything</b> they do from start to finish and post completion.
                        </p>
                    </Card.Body>
                </Card>

                <Card className='col-lg-5 icon-card me-auto '>
                    <MdRealEstateAgent className='react-icon-css' />
                    <Card.Body className='icon-div'>
                        <p>Hetali Group lives by the ethos of <b>building homes to live and not houses to stay in.</b></p>
                    </Card.Body>
                </Card>

            </div>

            {/* another section for history */}
            <div className='black-width'>
            </div>

            {/* Text -difv */}
            <div className='w-75 history mx-auto'>
                <p>Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families! <br /> <br />

                    The Hetali Group promises a lifestyle second to none. In a span of over four decades, the group has proved to be one of the most reputed real estate builders in the western suburbs of Mumbai with residences in prime locations such as Andheri, Goregaon, Vile Parle and Juhu. <br /> <br />

                    Spearheaded by Mr Jayesh Pandya, the company's central ideology is to provide homes customized to the customer's requirements and home’s that are superior in nature keeping in mind the needs of the modern home user.

                </p>
            </div>

        </div>
    )
}
export default Service