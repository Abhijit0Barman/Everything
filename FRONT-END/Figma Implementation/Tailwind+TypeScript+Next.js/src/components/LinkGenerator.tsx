import React from "react"
import SubmitField from "./ui/SubmitField"

const LinkGenerator = () => {
  return (
    <div>
      <SubmitField
        placeholder="Generate a unique referral link"
        buttonText="Generate"
        copy={true}
      />
    </div>
  )
}

export default LinkGenerator
