"use client"
import React, { ReactNode } from "react"
import { useWeb3Modal } from "@web3modal/wagmi/react"

const ConnectButton = ({ children }: { children?: ReactNode }) => {
  const { open } = useWeb3Modal()
  return (
    <button
      className="flex gap-2 items-center bg-gradient-to-r from-[#D51B46] to-[#EE6910] px-4 py-2 rounded-2xl text-white text-sm"
      onClick={() => open()}
    >
      Connect Wallet
    </button>
  )
}

export default ConnectButton
