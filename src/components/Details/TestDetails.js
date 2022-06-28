import React from 'react'
import {
    singleCategoryBox, closeBtn, btn, categoryInfo, price, contentInfo, left, right, bookBtn, 
} from "./TestDetails.module.css"

const TestDetails = () => {
  return (
    <>
     <section>
        <div className={singleCategoryBox}>
            <div className={closeBtn}>
                <button className={btn}>
                    <img width="25px" height="25px" src="assets/Component 29 – 18.png" alt="bg-image" />
                </button>
            </div>
            <div className={categoryInfo}>
                <img width="70px" height="70px" src="assets/Mask Group 22.png" alt="bg-image" />
                <div>
                    <h3>Test/package name</h3>
                    <h6>Category name</h6>
                </div>
                <div className={price}>
                    <h2>Rs. 1200</h2>
                </div>
            </div>
            {/* <!-- categoryInfo div closes here --> */}
            <div className={contentInfo} style={{ display: "flex"}}>
                <div className={left}>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                </div>
                <div className={right}>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                    <h6>✓ Lorem Ipsum is the dummy text.</h6>
                </div>
            </div>
            {/* <!-- content info ends here --> */}
            <div>
                <button className={bookBtn}>
                    Book now
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default TestDetails