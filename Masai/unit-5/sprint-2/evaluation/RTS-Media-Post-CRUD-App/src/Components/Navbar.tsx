import React from "react";

interface Titleprops {
  pagename: string;
}

export const Navbar = ({pagename}:Titleprops) => {
  return (
    <div>
      <h2>Media Post</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-post-link" href="/add-post">
        Add New Post
      </a>
      <h3 data-testid="page-name">{pagename}</h3>
    </div>
  );
};
