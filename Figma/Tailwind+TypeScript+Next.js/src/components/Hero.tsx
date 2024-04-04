import { shojumaru } from "@/lib/fonts"
import React from "react"

const Hero = () => {
  return (
    <div className="bg-[url('../../public/images/hero-image.png')] bg-cover py-[100px]">
      <h1
        style={shojumaru.style}
        className="text-white text-3xl sm:text-4xl text-center container mx-auto w-[90%] my-6 bg-[#242323] bg-opacity-40 rounded-2xl p-6 sm:bg-opacity-0 sm:leading-[4rem]"
      >
        Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
      </h1>
    </div>
  )
}

export default Hero
