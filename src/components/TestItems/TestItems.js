import React from "react"
import Card from "../Card/Card"
import { useState } from "react"
import { cards, cardItems, pagination } from "./TestItems.module.css"
import Pagination from "@mui/material/Pagination"

const TestItems = ({ testData, totalPages }) => {
  const [currentItems, setCurrentItems] = useState(testData.slice(0, 6))

  const handlePaginationChange = (event, value) => {
    setCurrentItems(testData.slice((value - 1) * 6, (value - 1) * 6 + 6))
  }

  return (
    <main className={cards}>
      <div className={cardItems}>
        {currentItems.map(data => {
          return (
            <Card
              key={data.id}
              id={data.id}
              testPrice = {data.price}
              fullName={data.fullName}
              shortName={data.abbr}
              testType={data.testType}
              lisCode={data.lisCode}
              date={data.updatedAt}
              data={data}
              isTest={true}
            />
          )
        })}
      </div>
      <div className={pagination}>
        <Pagination
          count={totalPages}
          siblingCount={0}
          boundaryCount={1}
          size="large"
          onChange={handlePaginationChange}
        />
      </div>
    </main>
  )
}

export default TestItems
