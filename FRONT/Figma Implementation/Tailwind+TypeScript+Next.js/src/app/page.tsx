import FAQ from "@/components/FAQ"
import Hero from "@/components/Hero"
import IDO from "@/components/IDO"
import Introduction from "@/components/Introduction"
import Roadmap from "@/components/Roadmap"
import Tokenomics from "@/components/Tokenomics"

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <IDO />
      <Tokenomics />
      <Roadmap />
      <FAQ />
    </main>
  )
}
