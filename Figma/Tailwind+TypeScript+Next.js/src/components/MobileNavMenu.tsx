"use client"

import React from "react"
import MenuItems from "@/data/menu"
import Link from "next/link"
import ChevronDown from "./ui/ChevronDown"
import { zcool } from "@/lib/fonts"

interface MobileNavMenuProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ setIsSidebarOpen }) => {
  return (
    <div style={zcool.style}>
      <ul className="text-white">
        {MenuItems.map((item) => (
          <li
            key={item.id}
            className="flex gap-2 justify-center items-center text-3xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Link href={item.url}>{item.label}</Link>{" "}
            {item.submenu ? <ChevronDown /> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNavMenu
