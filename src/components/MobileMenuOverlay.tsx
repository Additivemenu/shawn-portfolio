import React from "react";
import NavLink from "./NavLink";

const MobileMenuOverlay = ({ links }: { links: any }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: any, index: number) => (
        <li key={link.path + index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuOverlay;
