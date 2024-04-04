import Image from "next/image"
import React from "react"
import Logo from "../../public/saviour-logo.png"
import Link from "next/link"
import Twitter from "./ui/Twitter"
import Telegram from "./ui/Telegram"
import Email from "./ui/Email"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 py-10 bg-[#120101] sm:bg-gradient-to-t from-[#120101] to-black text-white">
      <div className="flex justify-center">
        <Image src={Logo} alt="sitemap" />
      </div>
      <div className="flex justify-center">
        <h2 className="text-2xl flex justify-center uppercase w-fit font-bold bg-gradient-to-r from-[#FF002A] to-[#720005] text-transparent bg-clip-text">
          Sitemap
        </h2>
      </div>
      <div>
        <ul className="flex gap-x-4 flex-wrap justify-center text-base px-6 sm:text-xs">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">IDO</Link>
          </li>
          <li>
            <Link href="#">Tokenomics</Link>
          </li>
          <li>
            <Link href="#">Roadmap</Link>
          </li>
          <li>
            <Link href="#">Whitepaper</Link>
          </li>
          <li>
            <Link href="#">Pledge</Link>
          </li>
          <li>
            <Link href="#">NFT</Link>
          </li>
          <li>
            <Link href="#">Games</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <ul className="flex gap-4">
          <li>
            <Link href="">
              <Twitter />
            </Link>
          </li>
          <li>
            <Link href="">
              <Telegram />
            </Link>
          </li>
          <li>
            <Link href="">
              <Email />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
