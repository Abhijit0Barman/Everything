import React from "react"
import Button from "./ui/Button"
import ChevronDown from "./ui/ChevronDown"
import Image from "next/image"
import NinjaIntro from "../../public/images/ninja.png"
import Link from "next/link"
import { zcool } from "@/lib/fonts"
import { shojumaru } from "@/lib/fonts"

const Introduction = () => {
  return (
    <section className="bg-background text-white text-center">
      <div className="container mx-auto grid sm:grid-cols-2 sm:justify-center py-20 px-6 sm:py-0">
        <div>
          <h1
            style={shojumaru.style}
            className="text-4xl sm:hidden text-primary"
          >
            Introduction
          </h1>
          <Image
            src={NinjaIntro}
            height={600}
            width={600}
            alt="Saviour Introduction"
          />
        </div>
        <div className="flex h-full flex-col gap-10 sm:self-start justify-center">
          <h1
            style={shojumaru.style}
            className="text-4xl hidden sm:block text-left text-primary"
          >
            Introduction
          </h1>
          <p style={zcool.style} className="sm:text-left">
            We&apos;ve all been in the mud once, and now we&apos;ve decided to
            fight it out. Pay tribute to those pioneers of WEB3 and the warriors
            who dedicated their love to the blockchain. Save the lucky ones
            alive, join us to save the future! Our mission is to empower
            everyone to share wealth and succeed. <br />
            <Link className="opacity-50" href="#">
              read more...
            </Link>
          </p>
          <div
            style={zcool.style}
            className="flex justify-center sm:justify-start"
          >
            <Button>
              Documents <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
