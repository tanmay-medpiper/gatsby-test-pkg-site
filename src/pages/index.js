import * as React from "react"
import {
  commonHolder,
  bgImage,
  floatRightOptions,
  introBox,
  bookBtn,
  knowMore,
  searchDivWrap,
  hrDiv,
  featureDiv, featureBox, featureTitle, featureLogo, featurePara,
  bookDiv,
  serviceDiv,
  circleImage,
  footerBox, footerRow, firstRow, secondRow,
  row, col,
  left, leftCol, right, rightRow,
  packageDivWrap, packageDiv, packageTitle, packageBox, packageLogo,
  blueDiv, contactBox, btn,
  active,
} from "./index.module.css"
// import Layout from "../components/Layout/Layout"
import Footer from "../components/Footer/Footer";

import mainBgImage from "../images/shutterstock_1292496331.png";
import Logo from "../images/Asset 1-8.png";
import downArrow from "../images/Component 126 – 1.png";
import mailInbox from "../images/mail-inbox.png";
import tracking from "../images/tracking.png";
import backInTime from "../images/back-in-time.png";
import heartImg from "../images/Mask Group 21.png";
import img1 from "../images/Mask Group 22.png";
import img2 from "../images/Mask Group 22-1.png";
import img3 from "../images/Mask Group 22-2.png";
import img4 from "../images/Mask Group 22-3.png";
import img5 from "../images/Mask Group 22-4.png";
import img6 from "../images/Mask Group 22-5.png";

const IndexPage = () => {
  

  return (
    <>
    <section className={commonHolder}>
        <img className={bgImage} src={mainBgImage} alt="background-image" />

        <img width="55px" height="60px" src={Logo} alt="Dr. Swasth-logo" />
        <div className={floatRightOptions}>
            <a href="#">Swasth card</a>
            <a href="#" className={active}>Swasth care</a>
        </div>
        <div className={introBox}>
            <h2>Choose yourself today!</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <button className={bookBtn}>
                <a href="#">Book a test</a>
            </button>
        </div>
    </section>
    <div className={knowMore}>
        Know more &nbsp;&nbsp; 
        <img width="10px" src={downArrow} alt="arrowDown" />
    </div>
    <section>
        <div className={searchDivWrap}>

            <div className={hrDiv}></div>

            <div className={featureDiv}>
                <div className={featureBox}>
                    <div className={featureTitle}>
                        <div className={featureLogo}>
                            <img src={backInTime} />
                        </div>
                        On Time arrival of our technician
                    </div>
                    <div className={featurePara}>
                        The assigned technician will reach the assigned location for sample collection.
                        They are certified and trained to give you almost painless experience.
                    </div>
                </div>
                {/* <!-- ----------------------------------------- --> */}
                <div className={featureBox}>
                    <div className={featureTitle}>
                        <div className={featureLogo}>
                            <img src={tracking} />
                        </div>
                        Sample tracking
                    </div>
                    <div className={featurePara}>
                        You can track how much time it takes for your sample to be submitted to the testing lab.
                        Timely sample deposition ensures accurate results.
                    </div>
                </div>
                {/* <!-- ----------------------------------------- --> */}
                <div className={featureBox}>
                    <div className={featureTitle}>
                        <div className={featureLogo}>
                            <img src={mailInbox} />
                        </div>
                        Reports received in inbox
                    </div>
                    <div className={featurePara}>
                        Receive a soft copy of your test results in your inbox or through WhatsApp.
                    </div>
                </div>
                {/* <!-- ----------------------------------------- --> */}
                <div className={bookDiv}>
                    <button className={bookBtn}>
                        <a href="#">Book a test</a>
                    </button>
                </div>
            </div>
            {/* <!-- feature div ends here --> */}

            <div className={hrDiv}></div>

            <div className={serviceDiv}>
                <img className={circleImage} width="250px" height="250px" src={heartImg} alt="heartImage" />

                <div className={hrDiv}></div>


                <div className={row}>
                    <div className={col}>
                        <h3>Book a test</h3>
                    </div>
                    <div className={col}>
                        Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum is
                        simply a dummy text of the printing and typesetting industry.
                    </div>
                </div>

                <div className={hrDiv}></div>


                <div className={row}>
                    <div className={col}>
                        <h3>Consult a doctor</h3>
                    </div>
                    <div className={col}>
                        Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum is
                        simply a dummy text of the printing and typesetting industry.
                    </div>
                </div>

                <div className={hrDiv}></div>


                <div className={row}>
                    <div className={col}>
                        <h3>Join Communities</h3>
                    </div>
                    <div className={col}>
                        Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum is
                        simply a dummy text of the printing and typesetting industry.
                    </div>
                </div>

                <div className={hrDiv}></div>


            </div>

            <div className={packageDivWrap}>
                <div className={packageDiv}>
                    <div className={packageTitle}>Explore packages</div>
                    <div className={packageBox}>
                        <div className={packageLogo}><img width="120px" height="120px"
                         src={img1} />PCOD
                        </div>
                        <div className={packageLogo}><img width="120px" height="120px"
                                src={img2} />Natal
                        </div>
                        <div className={packageLogo}><img width="120px" height="120px"
                                src={img3} />Men's
                            Health</div>
                        <div className={packageLogo}><img width="120px" height="120px"
                                src={img3} />Diabetes</div>
                        <div className={packageLogo}><img width="120px" height="120px"
                                src={img4} />Mental
                            Health</div>
                        <div className={packageLogo}><img width="120px" height="120px"
                                src={img5} />Oncology</div>
                    </div>
                </div>
            </div>
            {/* <!-- package div wrap ends here  --> */}

            <div className={blueDiv}>
               <Footer />
                {/* <!-- footer div ends here --> */}
            </div>
            {/* <!-- blue div ends here --> */}
        </div>
        {/* <!-- search div wrap ends here --> */}



    </section>

    </>
    // <div>
    //   {/* <TestDetails /> */}
    //   {/* <Layout/> */}
    // </div>
  )
}

export default IndexPage
