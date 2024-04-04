import React from "react"
import CopyIcon from "../../../public/icons/copy.svg"
import Image from "next/image"

interface SubmitField {
  placeholder: string
  buttonText: string
  copy: boolean
}

const SubmitField = ({ placeholder, buttonText, copy }: SubmitField) => {
  return (
    <div className="flex gap-2">
      <div className="border border-primary rounded-full p-1 w-full flex">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent mx-4 w-full outline-none"
        />
        <button className="bg-primary px-2 py-1 rounded-full">
          {buttonText}
        </button>
      </div>
      <button>
        <Image src={CopyIcon} height={20} width={20} alt="copy icon" />
      </button>
    </div>
  )
}

export default SubmitField
