import React from 'react'
import "./MIsson.css"
import logoPng from "../../images/aboutlog.png"
import side from "../../images/sideabout.png"
import flowerBook from "../../images/flower-book.png"
import Card from 'react-bootstrap/Card'

const Mission = () => {
    return (
        <div>
            <div className='py-5'>
                <h2 className='text-center'>MISSION</h2>
                <div>

                    {/* <p className='text-center aboutImg'>
                        <img src={side} alt="Logo" />
                        <img src={logoPng} alt="Logo" />
                        <img src={side} alt="Logo" />
                    </p> */}

                    <p className='text-center aboutImg'>
                        <hr className='hr-color' />
                        <img className='about' src={logoPng} alt="Logo" />
                        <hr className='hr-color' />
                    </p>

                </div>
                <div className="row m-0 p-0">
                    <div className="col-lg-6 col-sm-12">
                        <div className='mx-auto'>
                            <img className=' missionImg' src={flowerBook} alt="flowerIages" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <Card className='p-2 mission-card first-card'>
                            <h5 className='fw-bold'>Personalised</h5>
                            <p>Our core idealogy is to provide personalised homes to meet the very specific needs of residents.</p>
                        </Card>
                        <Card className='p-2 mt-2 mission-card'>
                            <small>Committed</small>
                        </Card>
                        <Card className='p-2 mt-2 mission-card'>
                            <small>Quality & Service Oriented</small>
                        </Card>
                        <Card className='p-2 mt-2 mission-card'>
                            <small>Timely </small>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission