import React from "react";
import NavLink from "./NavLink";

interface MobileMenuOverlayProps {
  links: { path: string; title: string }[];
}

const MobileMenuOverlay = ({ links }: MobileMenuOverlayProps) => {
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
