import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

interface CardT1 {
  title: string
  description: string
  image: string | StaticImageData
}

const CardT1 = ({ title, description, image }: CardT1) => {
  return (
    <Link
      href=""
      className="min-h-[226px] min-w-[156px] md:h-[340px] md:w-[234px] rounded-lg relative  bg-gradient-to-t from-primary to-[#EF490F] overflow-hidden border-4 border-primary"
    >
      <div className="absolute rounded-lg bg-[#060818] opacity-95">
        <Image src={image} alt="Card" className="rounded-lg" />
      </div>
      <div className="absolute bottom-0">
        <p className="text-white text-sm sm:text-2xl px-3 py-1">{title}</p>
        <p className="text-white text-xs sm:text-base p-3">{description}</p>
      </div>
    </Link>
  )
}

export default CardT1
