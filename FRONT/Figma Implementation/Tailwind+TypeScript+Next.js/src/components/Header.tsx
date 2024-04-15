"use client"
import React, { useState } from "react"
import Logo from "../../public/saviour-logo.png"
import Image from "next/image"
import Navbar from "./Navbar"
import Bars from "./ui/Bars"
import ConnectButton from "./ConnectButton"
import Link from "next/link"
import { zcool } from "@/lib/fonts"
import MobileNavMenu from "./MobileNavMenu"

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <header
        style={zcool.style}
        className={`fixed flex justify-between items-center p-6 w-full text-white z-50 ${
          isSidebarOpen ? ` bg-background` : ``
        }`}
      >
        <div className="flex gap-2 items-center">
          <button
            className="sm:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <Bars />
          </button>
          <Link className="flex gap-2 items-center" href={"/"}>
            <Image src={Logo} alt="Saviour Logo" height={50} width={50} />
            <span>Saviour</span>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <Navbar />
        </div>
        <div>
          <ConnectButton />
        </div>
      </header>
      <div
        className={`fixed z-40 bg-background w-full overflow-hidden top-[100px] flex flex-col justify-center transition-all ${
          isSidebarOpen ? `h-full` : `h-0`
        }`}
      >
        <MobileNavMenu setIsSidebarOpen={setIsSidebarOpen} />
      </div>
    </>
  )
}

export default Header
