import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  cards,
  cardItems,
  navLinkTextActive,
} from "./Layout.module.css"
import Card from "../Card/Card"
import { graphql, useStaticQuery } from "gatsby"
// import TestDetails from "../TestDetails/TestDetails"

const Layout = ({ children }) => {
  const [allMenu, setAllMenu] = useState(true)
  const [packagesMenu, setPackegesMenu] = useState(false)
  const [testsMenu, setTestsMenu] = useState(false)
  const { allGraphCmsDiagnosticTest, allGraphCmsPackage } =
    useStaticQuery(graphql`
      query MyQuery {
        allGraphCmsDiagnosticTest {
          nodes {
            id
            fullName
            updatedAt
            lisCode
            abbr
            price
            testType
          }
        }

        allGraphCmsPackage {
          nodes {
            name
            mrp
            offerPrice
            remoteTypeName
            stage
            updatedAt
            id
          }
        }
      }
    `)

  return (
    <div>
      
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                <span
                  onClick={() => {
                    setAllMenu(true)
                    setPackegesMenu(false)
                    setTestsMenu(false)
                  }}
                  className={allMenu ? navLinkTextActive : ""}
                  aria-hidden="true"
                >
                  All
                </span>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                <span
                  onClick={() => {
                    setAllMenu(false)
                    setPackegesMenu(true)
                    setTestsMenu(false)
                  }}
                  className={packagesMenu ? navLinkTextActive : ""}
                  aria-hidden="true"
                >
                  Packages
                </span>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                <span
                  onClick={() => {
                    setAllMenu(false)
                    setPackegesMenu(false)
                    setTestsMenu(true)
                  }}
                  className={testsMenu ? navLinkTextActive : ""}
                  aria-hidden="true"
                >
                  Tests
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className={cards}>
          <div className={cardItems}>
            {allMenu &&
              allGraphCmsPackage.nodes.map(data => {
                return (
                  <Card
                    key={data.id}
                    fullName={data.name}
                    shortName={data.mrp}
                    testType={data.offerPrice}
                    date={data.updatedAt}
                    lisCode={data.name}
                  />
                )
              })}
            {allMenu &&
              allGraphCmsDiagnosticTest.nodes.map(data => {
                return (
                  <Card
                    key={data.id}
                    fullName={data.fullName}
                    shortName={data.abbr}
                    testType={data.testType}
                    lisCode={data.lisCode}
                    date={data.updatedAt}
                  />
                )
              })}

            {packagesMenu &&
              allGraphCmsPackage.nodes.map(data => {
                return (
                  <Card
                    key={data.id}
                    fullName={data.name}
                    shortName={data.mrp}
                    testType={data.offerPrice}
                    date={data.updatedAt}
                    lisCode={data.name}
                  />
                )
              })}

            {testsMenu &&
              allGraphCmsDiagnosticTest.nodes.map(data => {
                return (
                  <Card
                    key={data.id}
                    id={data.id}
                    fullName={data.fullName}
                    shortName={data.abbr}
                    testType={data.testType}
                    lisCode={data.lisCode}
                    date={data.updatedAt}
                  />
                )
              })}
          </div>
        </main>
      </div>
    </div>
  )
}
export default Layout
