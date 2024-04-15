import { Shojumaru } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Shojumaru({ subsets: ["latin"] ,weight:'400'});

export const metadata = {
  title: "Learning Next.js",
  description: "Without TypeScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-5 m-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
