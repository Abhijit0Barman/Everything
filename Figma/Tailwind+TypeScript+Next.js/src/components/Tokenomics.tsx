import React from "react"
import CardT2 from "./ui/CardT2"
import Image from "next/image"
import TokenomicsDiagram from "../../public/images/tokenomics.png"
import { shojumaru, zcool } from "@/lib/fonts"

const Tokenomics = () => {
  return (
    <section
      style={zcool.style}
      id="tokenomics"
      className="bg-[url('../../public/images/bg3.png')] bg-black py-20"
    >
      <h2 style={shojumaru.style} className="text-4xl text-center text-primary">
        Tokenomics
      </h2>
      <div className=" container mx-auto">
        <div className="sm:flex justify-center">
          <CardT2 title="Token Details" className="p-10">
            <div className="grid grid-cols-2 gap-4 mx-4 my-6">
              <div>Name</div>
              <div>Saviour</div>
              <div>Symbol</div>
              <div>SVR</div>
              <div>Total Supply</div>
              <div>1000 Trillion</div>
              <div>Decimals</div>
              <div>18</div>
            </div>
          </CardT2>
          <div className="flex items-center px-2">
            <Image src={TokenomicsDiagram} height={250} alt="tokenomics" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
