"use client"
import React, { useState } from "react"
import ChevronDown from "./ChevronDown"
import ChevronUp from "./ChevronUp"
import { shojumaru, zcool } from "@/lib/fonts"

interface Accordion {
  title: React.ReactNode
  description: React.ReactNode
}

const Accordion = ({ title, description }: Accordion) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-primary rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4"
      >
        <span className={shojumaru.className}>{title}</span>
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      <div
        className={`transition-all ease-in-out duration-300 px-4 ${
          isOpen ? `h-auto py-2 ` : `h-0 overflow-hidden py-0`
        }`}
      >
        <p
          style={zcool.style}
          className={` bg-[#0F0F0F] px-4 py-2 rounded-xl ${
            isOpen ? `block` : `hidden`
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default Accordion
