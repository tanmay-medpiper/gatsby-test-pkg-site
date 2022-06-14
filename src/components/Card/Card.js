import React from "react"
import {
  avatar,
  cardContent,
  headerTestTitle,
  // headerCategory,
  cardHeader,
  card,
  cardPrice,
  cardDescription,
  cardFooter,
  cardButton,
  cardDescriptionSeeMore,
  ul,
  buttonText,
} from "./Card.module.css"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

const Card = ({ data, fullName, testType, lisCode, shortName, date, id, isPackage, offerPrice, tests }) => {
  tests = tests.slice(0,5)

  const testLists = (test) => {
    return (<div>✓ {test.fullName}</div>)
  }
  // console.log(data.name);
  return (
    <div className={card}>
      <div className={cardContent}>
        <div className={cardHeader}>
          <div>
            <h4 className={headerTestTitle}>{fullName}</h4>
            {/* <p className={headerCategory}></p> */}
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png"
              className={avatar}
              alt="..."
            />
          </div>
        </div>
        <div>
          <h2 className={cardPrice}>{isPackage && offerPrice}</h2>
        </div>
        <div className={cardDescription}>
          <div className={ul}>
            {isPackage && tests.map(testLists)}
            {/* <div>✓ {fullName}</div>
            <div>✓ {shortName}</div>
            <div>✓ {testType}</div>
            <div>✓ {lisCode}</div>
            <div>✓ {date}</div> */}
          </div>
          <Link
            to={kebabCase(data.name)}
            className={cardDescriptionSeeMore}
            key={id}
            // state={{
            //   fullName: fullName,
            //   shortName: shortName,
            //   testType: testType,
            //   lisCode: lisCode,
            //   date: date,
            // }}
          >
            See all details...
          </Link>
        </div>
        <div className={cardFooter}>
          <button className={cardButton}>
            <Link
              to={kebabCase(data.name)}
              className={buttonText}
              // state={{
              //   fullName: fullName,
              //   shortName: shortName,
              //   testType: testType,
              //   lisCode: lisCode,
              //   date: date,
              // }}
            >
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
