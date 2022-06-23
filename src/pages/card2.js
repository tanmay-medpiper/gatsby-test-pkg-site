import React from 'react'
import { 
    halfImage, logo, floatRightOptions, searchDiv, btn, tagBox,
    categoryDiv, categoryType, active, categoryBoxWrap,
} from "./card2.module.css";

import mainBgImage from "../images/shutterstock_1292496331.png";
import logo from "../images/Asset 1-8.png";
import search from "../images/Component 9 – 1.png";
import Tag from '../components/SearchDiv/Tag';
import CategoryBox from '../components/SearchDiv/CategoryBox';


const card2 = () => {
  return (
    <>
    <div class={halfImage}>
        <img src={mainBgImage} alt="bg-image" />
    </div>
    <section>
    <div className={logo}>
            <img width="60px" height="70px" src={logo} alt="bg-image" />
            <div className={floatRightOptions}>
                <a href="#">Swasth card</a>
                <a href="#">Swasth care</a>
            </div>
        </div>
        <div>
            <h2>Choose yourself today!</h2>
        </div>
        <div className={logo}>
        <img width="60px" height="70px" src={Logo} alt="logo" />
        </div>
        
        <hr style={{width: "80%"}}/>
        <div className={searchDiv}>
            <form action="/" method="post">
                <div>
                    <img width="10px" height="10px" src={search} alt="search" />
                    <input type="text" placeholder="Search for a test or package by name"/>
                </div>
                <button className={btn}>Search</button>
            </form>
            <h6>Popular search results</h6>
            <div className={tagBox}>
                <Tag tagName={" Covid packages "} />
                
                <Tag tagName={" PCOS/PCOD "} />

                <Tag tagName={" Diabetes "} />


            </div>
            {/* <!-- tag box ends here --> */}
        </div>
        {/* <!-- search div ends here --> */}
        <div className={categoryDiv}>
            <div className={categoryType}>
                <a className={active} href="#">All</a> 
                <a href="#">Packages</a> 
                <a href="#">Tests</a> 
            </div>

            <div className={categoryBoxWrap}>
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />

            </div>
            {/* <!-- category box ends here --> */}
        </div>
    </section>
    </>
  )
}

export default card2