import React from 'react'

import {
    halfImage, logo, bookTestDiv, wrapperBox, left, right, full, half, greenText, consultationBox, btn 
} from "./Book.module.css";

import bgImage from "../../images/Mask Group 30.png";
import Logo from "../../images/Asset 1-8.png";
import check from "../../images/Group 7022.png";
import img1 from "../../images/Component 29 – 17.png";

const Book = () => {
  return (
    <>
    
    <div className={halfImage}>
        <img src={bgImage} alt="bg-image" />
    </div>
    <section>
        <div className={logo}>
            <img width="60px" height="70px" src={Logo} alt="logo" />
        </div>
        <div className={bookTestDiv}>
            <img width="25px" height="25px" src={img1} alt="bookTest" />
        </div>
        <div className={wrapperBox}>
            <div className={left}>
                <form action="/" method="POST">
                    <div className={full}>
                        <label>Full name</label>
                        <input type="text" />
                    </div>
                    <div className={half}>
                        <label>E-mail</label>
                        <input type="email" />
                    </div>
                    <div className={half}>
                        <label>Mobile number</label>
                        <input type="number" />
                    </div>
                    <div className={full}>
                        <label>Address</label>
                        <input type="text" />
                    </div>
                    <div className={half}>
                        <label>City</label>
                        <input type="text" />
                    </div>
                    <div className={half}>
                        <label>Pincode</label>
                        <input type="number" />
                    </div>
                    <div className={`${full} ${greenText}`}>
                        <img width="15px" height="15px" src={check} alt="bg-image" />
                        &nbsp;
                        We are servicing in your location!
                    </div>
                    <div className={`${half} ${consultationBox}`}>
                        <label>Consultation</label>
                        <input type="radio" id="self" name="Consultation" value="SELF" /> Self
                        <input type="radio" id="others" name="Consultation" value="others" /> Others
                    </div>
                    <div className={half}>
                        <label>Test name</label>
                        <input type="text" />
                    </div>
                    <div className={half}>
                        <label>Date</label>
                        <input type="date" />
                    </div>
                    <div className={half}>
                        <label>Time slot</label>
                        <input type="datetime-local" />
                    </div>
                    <div>
                        <button type="submit" className={btn}>
                            Proceed to pay and back
                        </button>
                    </div>
                </form>
            </div>
            <div className={right}>
                <div>
                    <h2>Test/package name</h2>
                    <div>
                        <div>
                            <h1>Rs. 1200</h1>
                            <div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>
                                <div>
                                    <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </section>
    
    </>
  )
}

export default Book