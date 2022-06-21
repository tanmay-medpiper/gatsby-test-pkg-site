import React from "react"
import BookingForm from "../../components/Book/BookingForm"

export default function Form(props) {
  console.log("book data", props)
  return <BookingForm />
}

export const pageQuery = graphql`
  query PackagePageQuery($name: String) {
    package: graphCmsPackage(name: { eq: $name }) {
      id
      name
      offerPrice
      mrp
      tests {
        ... on GraphCMS_DiagnosticTest {
          id
          fullName
        }
      }
      name
    }
  }
`
