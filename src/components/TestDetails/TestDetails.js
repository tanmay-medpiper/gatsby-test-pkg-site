import React from "react"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import {
  headerTestTitle,
  headerTestCategory,
  headerContents,
  avatar,
  headerTest,
  testPrice,
  header,
  testDetailsCard,
  crossIcon,
  icon,
  testHeader,
  lists,
  listItems,
  testDetailsButton
} from "./TestDetails.module.css"

const TestDetails = ({fullName, shortName, testType, lisCode, date}) => {
  return (
    <div className={testDetailsCard}>
      <div className={testHeader}>
        <div className={crossIcon}>
          <CancelOutlinedIcon className={icon} />
        </div>
        <div className={header}>
          <div className={headerContents}>
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png"
              alt="xyz"
              className={avatar}
            />
            <div className={headerTest}>
              <h4 className={headerTestTitle}>{fullName}</h4>
              <p className={headerTestCategory}>Category name</p>
            </div>
          </div>
          <div>
            <h2 className={testPrice}>Rs. 500</h2>
          </div>
        </div>
      </div>
      <div className={lists}>
        <ul className={listItems}>
          <li>
            <span>✓ </span>{fullName}
          </li>
          <li>
            <span>✓ </span>{shortName}
          </li>
          <li>
            <span>✓ </span>{testType}
          </li>
          <li>
            <span>✓ </span>{lisCode}
          </li>
          <li>
            <span>✓ </span>{date}
          </li>
          <li>
            <span>✓ </span>{fullName}
          </li>
        </ul>
        <ul className={listItems}>
          <li>
            <span>✓ </span>{fullName}
          </li>
          <li>
            <span>✓ </span>{shortName}
          </li>
          <li>
            <span>✓ </span>{testType}
          </li>
          <li>
            <span>✓ </span>{lisCode}
          </li>
          <li>
            <span>✓ </span>{date}
          </li>
          <li>
            <span>✓ </span>{fullName}
          </li>
        </ul>
      </div>

      <div>
          <button className={testDetailsButton}>Book Now</button>
      </div>
    </div>
  )
}

export default TestDetails
