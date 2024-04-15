import React from "react"
import ChevronDown from "./ui/ChevronDown"
import Link from "next/link"
import MenuItems from "@/data/menu"

const Navbar = () => {
  return (
    <ul className="flex gap-4 bg-background text-white px-4 py-2 rounded-2xl">
      {MenuItems.map((item) => (
        <li key={item.id} className="flex gap-2 justify-center items-center">
          <Link href={item.url}>{item.label}</Link>{" "}
          {item.submenu ? <ChevronDown /> : null}
        </li>
      ))}
    </ul>
  )
}

export default Navbar
