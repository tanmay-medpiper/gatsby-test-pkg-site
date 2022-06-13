import React from "react"
// import { useState } from "react"
import { cards, cardItems } from "./PackageItems.module.css"
import Card from "../Card/Card"

const PackageItems = ({ packageData }) => {
  return (
    <main className={cards}>
      <div className={cardItems}>
        {packageData.map(data => {
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
      </div>
    </main>
  )
}

export default PackageItems
