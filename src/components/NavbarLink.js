import React from "react";
import { HashLink } from "react-router-hash-link";

function NavbarLink({ section }) {
  const linkClass = `link ${section.text.toLowerCase()}`;

  return (
    <div className={linkClass}>
      <HashLink key={section.id} smooth to={`/#${section.hash}`}>{section.text}</HashLink>
    </div>
  );
}

export default NavbarLink;
