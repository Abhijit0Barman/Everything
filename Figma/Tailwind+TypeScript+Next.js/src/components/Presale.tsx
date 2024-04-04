import React from "react"
import Button from "./ui/Button"

const Presale = () => {
  return (
    <div className="text-center flex flex-col border border-primary gap-4 py-6 rounded-xl mt-4">
      <div className="text-primary -my-[74px]">
        <span className="font-sans text-white bg-black rounded-sm border border-primary px-3 py-2 text-4xl m-[5px]">
          0
        </span>
        <span className="font-sans text-white bg-black rounded-sm border border-primary px-3 py-2 text-4xl m-[5px]">
          0
        </span>
        <span className="font-sans text-primary text-[40pt] font-extrabold">
          {" "}
          :{" "}
        </span>
        <span className="font-sans text-white bg-black rounded-sm border border-primary px-3 py-2 text-4xl m-[5px]">
          0
        </span>
        <span className="font-sans text-white bg-black rounded-sm border border-primary px-3 py-2 text-4xl m-[5px]">
          0
        </span>
      </div>
      <h2 className="text-3xl font-bold mt-20">Presale 1</h2>
      <h3 className="text-primary sm:text-white sm:text-2xl">
        1 Saviour = 0.657 USDT
      </h3>
      <div className="text-primary sm:text-white sm:text-xl flex flex-col gap-2">
        <p className="text-sm sm:text-lg">Next Stage Price = 0.723 USDT</p>
        <p className="text-sm sm:text-lg">Sold - $34,56,56,764/$50,00,00,000</p>
        <p className="text-sm sm:text-lg">
          Raised - $34,56,56,764/$40,00,00,000
        </p>
      </div>
      <div className="flex flex-col px-10 gap-4">
        <input
          type="text"
          placeholder="Enter the amount (BNB)"
          className="bg-transparent outline-primary border border-primary rounded-xl p-2"
        />
        <input
          type="text"
          placeholder="Minimum Quantity to Buy"
          className="bg-transparent outline-primary border border-primary rounded-xl p-2"
        />
        <input
          type="text"
          placeholder="Maximum Quantity of Tokens"
          className="bg-transparent outline-primary border border-primary rounded-xl p-2"
        />
      </div>
      <div className="flex justify-center gap-6">
        <Button>Buy</Button>
        <Button>Claim Drop</Button>
      </div>
    </div>
  )
}

export default Presale
