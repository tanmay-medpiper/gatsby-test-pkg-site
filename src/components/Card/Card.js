import React from "react"
import {
  avatar,
  cardContent,
  headerTestTitle,
  headerCategory,
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

const Card = ({ data, fullName, testType, lisCode, shortName, date, id }) => {
  // console.log(data.name);
  return (
    <div className={card}>
      <div className={cardContent}>
        <div className={cardHeader}>
          <div>
            <h4 className={headerTestTitle}>{fullName}</h4>
            <p className={headerCategory}>{testType}</p>
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
          <h2 className={cardPrice}>Rs. 500</h2>
        </div>
        <div className={cardDescription}>
          <div className={ul}>
            <div>✓ {fullName}</div>
            <div>✓ {shortName}</div>
            <div>✓ {testType}</div>
            <div>✓ {lisCode}</div>
            <div>✓ {date}</div>
          </div>
          <Link
            to={data.name}
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
              to={data.name}
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
