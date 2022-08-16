import React from 'react'
import "./Corporate.css"
import logoPng from "../../images/aboutlog.png"
import ceo from "../../images/ceo.png"
import happyChildren from "../../images/school-child.png"
import Card from 'react-bootstrap/Card'
// import Card from 'react-bootstrap/Card'

const Corpotate = () => {
    return (
        <div>
            <div>
                <h4 className='text-center'>Corporate Social Responsibility</h4>
            </div>
            <div>
                {/* <p className='text-center aboutImg'>
                    <img src={logoPng} alt="Logo" />
                </p> */}

                <p className='text-center aboutImg'>
                    <hr className='hr-color' />
                    <img className='about' src={logoPng} alt="Logo" />
                    <hr className='hr-color' />
                </p>


            </div>

            {/* ----------------- Card and images==== ---------------*/}
            <div className="row m-0 p-0">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-5">
                    <Card className='p-2 mission-card first-card'>
                        <h5 className='fw-bold'>Education for the under-privileged</h5>
                        <p>We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
                        </p>
                    </Card>
                    <Card className='p-2 mt-2 mission-card'>
                        <small>Support for Rural Farmers</small>
                    </Card>
                    <Card className='p-2 mt-2 mission-card'>
                        <small>Spiritual</small>
                    </Card>

                </div>
                <div className="col-lg-5">
                    <div className='mx-auto'>
                        <img className='center' src={happyChildren} alt="flowerIages" />
                    </div>
                </div>
            </div>
            {/* Company Ceo */}

            <div className='ceoside'>
                <div className='pt-3'>
                    <Card className='p-2 mt-2 w-75 mx-auto ceo-card'>
                        <h2 className='text-center'>Founder’s Message</h2> <br />
                        <div className="circle-img mx-auto">
                            <img className='' src={ceo} alt="CEO Images" />
                        </div>
                        <div className='mt-5'>
                            {/* <p className='text-center aboutImg'>
                                <img src={logoPng} alt="Logo" />
                            </p> */}

                            <p className='text-center aboutImg'>
                                <hr className='hr-color' />
                                <img className='about' src={logoPng} alt="Logo" />
                                <hr className='hr-color' />
                            </p>



                        </div>
                        <h2 className='fw-bold text-center '>
                            <span className='white-color'> Mr. Jayesh H. Pandya</span>
                        </h2>
                        <div className="talk ">
                            <p className='white-color'>“When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”
                            </p>
                        </div>
                        <div className="another-talk">
                            <p>
                                We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                            </p>
                        </div>
                    </Card>
                    <div className='mt-5 py-4'>
                        {/* <p className='text-center aboutImg'>
                            <img src={logoPng} alt="Logo" />
                        </p> */}

                        <p className='text-center aboutImg'>
                            <hr className='hr-color' />
                            <img className='about' src={logoPng} alt="Logo" />
                            <hr className='hr-color' />
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Corpotate