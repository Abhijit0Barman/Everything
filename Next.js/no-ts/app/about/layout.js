import Link from "next/link";
import React from "react";

const aboutLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-5 m-5">
          <li>
            <Link prefetch={false} href="/about/vission">CustomNotFoundPage</Link>
          </li>
          <li>
            <Link href="/about/mission">CustomErrorPage</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default aboutLayout;
