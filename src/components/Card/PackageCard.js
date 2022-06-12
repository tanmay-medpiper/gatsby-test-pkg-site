import { Link } from "gatsby"
import {
  avatar,
  buttonText,
  card,
  cardButton,
  cardContent,
  cardDescription,
  cardDescriptionSeeMore,
  cardFooter,
  cardHeader,
  cardPrice,
  headerCategory,
  headerTestTitle,
  ul,
} from "./Card.module.css"

export default PackageCard = ({
  fullName,
  testType,
  lisCode,
  shortName,
  date,
  id,
}) => {
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
            to="/description"
            className={cardDescriptionSeeMore}
            state={{
              fullName: fullName,
              shortName: shortName,
              testType: testType,
              lisCode: lisCode,
              date: date,
            }}
          >
            See all details...
          </Link>
        </div>
        <div className={cardFooter}>
          <button className={cardButton}>
            <Link
              to="description"
              className={buttonText}
              state={{
                fullName: fullName,
                shortName: shortName,
                testType: testType,
                lisCode: lisCode,
                date: date,
              }}
            >
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
