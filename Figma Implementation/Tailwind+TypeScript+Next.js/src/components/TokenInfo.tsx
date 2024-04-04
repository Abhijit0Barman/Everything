import React from "react"
import Button from "./ui/Button"
import CardT2 from "./ui/CardT2"

const TokenInfo = () => {
  return (
    <CardT2 title="Token Info">
      <div className="grid grid-cols-3 gap-4 px-2">
        <div className="col-span-2 --zcool">Total Token Supply</div>
        <div>20%</div>
        <div className="col-span-2">Soft Cap</div>
        <div>200 BNB</div>
        <div className="col-span-2">Initial exchange rate</div>
        <div>1 BNB</div>
      </div>
      <p className="py-4 text-center">Recommended Referral Commission</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">1st Generation</div>
        <div>5%</div>
        <div className="col-span-2">2nd Generation</div>
        <div>2%</div>
      </div>
    </CardT2>
  )
}

export default TokenInfo
