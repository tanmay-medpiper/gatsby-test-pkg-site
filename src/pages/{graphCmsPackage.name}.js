import { graphql } from "gatsby"
import React from "react"
import TestDetails from "../components/TestDetails/TestDetails"

export default function PackagePage({ data }) {
  React.useEffect(() => {
    console.log("DATA", data)
  }, [data])
  // if(!location.state){
  //   return null
  // }
  return (
    <TestDetails
      fullName={data.package.name}
      shortName={data.package.offerPrice}
      testType={""}
      lisCode={""}
      date={""}
    />
  )

  // return <div>Hello</div>
}

export const pageQuery = graphql`
  query PackagePageQuery($name: String) {
    package: graphCmsPackage(name: { eq: $name }) {
      id
      name
      offerPrice
      mrp
    }
  }
`
