import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"

import { cookieStorage, createStorage } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

export const projectId = "05b20c581031dd96cb28cf1a5bd10704"

if (!projectId) throw new Error("Project ID is not defined")

const metadata = {
  name: "Saviour",
  description: "Saviour",
  url: "https://saviour-web3.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

// Create wagmiConfig
const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
