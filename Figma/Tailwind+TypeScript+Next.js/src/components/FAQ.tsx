import React from "react"
import Accordion from "./ui/Accordion"
import { faqs } from "../data/faqs"
import Sword from "../../public/images/sword.png"
import Image from "next/image"
import { shojumaru } from "@/lib/fonts"

interface FAQ {
  id: number
  question: string
  answer: string
}

const FAQ = () => {
  return (
    <section className="bg-background text-white py-10">
      <div className=" grid md:grid-cols-2 container mx-auto">
        <h2
          style={shojumaru.style}
          className="text-primary text-center text-4xl sm:hidden"
        >
          FAQ
        </h2>
        <div className="container mx-auto flex justify-center items-center">
          <Image src={Sword} height={503} width={503} alt="FAQ section" />
        </div>
        <div className="container p-10 mx-auto">
          <div className="flex flex-col gap-4">
            <h2
              style={shojumaru.style}
              className="text-primary hidden sm:flex justify-center text-4xl"
            >
              FAQ
            </h2>
            {faqs.map((faq: FAQ) => (
              <Accordion
                key={faq.id}
                title={
                  <div className="flex gap-4">
                    <span>{faq.id}</span>
                    <span>{faq.question}</span>
                  </div>
                }
                description={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
