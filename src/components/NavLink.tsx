import type { ElementType } from "react";

interface NavLinkProps {
  link: string;
  link_title: string;
  icon: ElementType;
  pathname: string;
}

export default function NavLink({
  link,
  link_title,
  icon: Icon,
  pathname,
}: NavLinkProps) {
  let pathNameIsEqual = pathname == link;
  return (
    <li>
      <a href={link} className="flex items-center gap-2">
        <Icon
          size={`${pathNameIsEqual ? 32 : 10}`}
          className={`${
            pathNameIsEqual ? "text-2xl font-bold" : "text-xl text-gray-300/95"
          }`}
        />
        <span
          className={`${
            pathNameIsEqual ? "text-2xl font-bold" : "text-xl text-gray-300/95"
          }`}
        >
          {link_title}
        </span>
      </a>
    </li>
  );
}
