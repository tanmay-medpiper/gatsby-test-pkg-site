import React from "react"
// import { useState } from "react"
import { cards, cardItems } from "./PackageItems.module.css"
import Card from "../Card/Card"

const PackageItems = ({ packageData }) => {
  console.log(packageData);
  return (
    <main className={cards}>
      <div className={cardItems}>
        {packageData.map(data => {
          return (
            <Card
              key={data.id}
              data={data}
              fullName={data.name}
              shortName={data.mrp}
              offerPrice={data.offerPrice}
              date={data.updatedAt}
              lisCode={data.name}
              isPackage={true}
              tests={data.tests}
            />
          )
        })}
      </div>
    </main>
  )
}

export default PackageItems
