import React from "react"
import CardT1 from "./ui/CardT1"

import Card1 from "../../public/images/card_1.png"
import Card2 from "../../public/images/card_2.png"
import Card3 from "../../public/images/card_3.png"
import Card4 from "../../public/images/card_4.png"
import { shojumaru } from "@/lib/fonts"

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="bg-[url('../../public/images/bg4.png')] bg-cover bg-black py-20"
    >
      <h1
        style={shojumaru.style}
        className="text-center text-4xl mb-20 text-primary"
      >
        Road Map
      </h1>
      <div className="flex mx-auto justify-center gap-10 px-5">
        <div className="flex gap-10 overflow-x-auto">
          <CardT1
            title="Phase 1"
            description="Technical Readiness and Smart Contract Audit"
            image={Card1}
          />
          <CardT1
            title="Phase 2"
            description="Increase Liquidity and Trading Volume"
            image={Card2}
          />

          <CardT1
            title="Phase 3"
            description="Community Building and Marketing"
            image={Card3}
          />
          <CardT1
            title="Phase 4"
            description="Ecosystem Expansion and Partnerships"
            image={Card4}
          />
        </div>
      </div>
    </section>
  )
}

export default Roadmap
