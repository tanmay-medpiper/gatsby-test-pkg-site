import React from 'react'
import img1 from '../images/Component 29 – 18.png'
import img2 from '../images/Mask Group 22.png';
import {singleCategoryBox,main,closeBtn,categoryInfo,price,contentInfo,left,right,bookBtn,btn}
from '../components/CardComponent.module.css'
function CardComponent() {
  return (
    <div className={main}>
    <div className={singleCategoryBox}>
        <div className={closeBtn}>
            <button className={btn}>
                <img width="25px" height="25px" src={img1} alt="bg-image" />
            </button>
        </div>
        <div className={categoryInfo}>
            <img width="100px" height="100px" src={img2} alt="bg-image" />
            <div>
                <h3>Test/package name</h3>
                <h6>Category name</h6>
            </div>
            <div className={price}>
                <h2>Rs. 1200</h2>
            </div>
        </div>
        {/* <!-- categoryInfo div closes here --> */}
        <div className={contentInfo} style={{display: "flex"}}>
            <div class={left}>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
            </div>
            <div class={right}>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
                <h6>✓ Lorem Ipsum is the dummy text.</h6>
            </div>
        </div>
        {/* <!-- content info ends here --> */}
        <div>
            <button class={bookBtn}>
                Book now
            </button>
        </div>
    </div>
    </div>
  )
}

export default CardComponent