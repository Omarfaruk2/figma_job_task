import React from 'react'
import "./Grooup.css"
import logo from "../../../src/images/aboutlog.png"
import img1 from "../../../src/images/img1.png"
import img2 from "../../../src/images/img2.png"
import img3 from "../../../src/images/img3.png"

const Group = () => {
    return (
        <div>
            <div>
                <h2 className='text-center my-5 py-3'>Group Companies</h2>

                {/* <p className='text-center aboutImg py-5'>
                    <img src={logo} alt="Logo" />
                </p> */}

                <p className='text-center aboutImg py-4'>
                    <hr className='hr-color' />
                    <img className='about' src={logo} alt="Logo" />
                    <hr className='hr-color' />
                </p>


            </div>
            <div>
                <div className="company-group-image row m-0 p-0 gx-2">

                    <div className='col-sm-12 col-lg-4 mx-auto'>
                        <p className='mx-auto'> <img className='' src={img1} alt="img1" /></p>
                        <p>Agriculture</p>
                    </div>
                    <div className='img2 col-lg-4 col-sm-10 mx-auto'>

                        <p className='mx-auto'> <img className='' src={img2} alt="img1" /></p>
                        <p>Fule</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 mx-auto'>

                        <p className='mx-auto last-img'> <img className='' src={img3} alt="img1" /></p>
                        <p>Foods</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Group