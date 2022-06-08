import React from "react"
import TestDetails from "../components/TestDetails/TestDetails"

const description = ({ location }) => {
  if(!location.state){
    return null
  }
  return (
    <TestDetails
      fullName={location.state.fullName}
      shortName={location.state.shortName}
      testType={location.state.testType}
      lisCode={location.state.lisCode}
      date={location.state.date}
    />
  )
}

export default description
