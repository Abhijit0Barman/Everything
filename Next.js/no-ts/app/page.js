import Image from "next/image";
import me from "@/public/me.png";

export default function Home() {
  return (
    <main>
      <div>helllo world</div>
      <Image placeholder="blur" src={me} alt="Picture of me" quality={100}/>
    </main>
  );
}
