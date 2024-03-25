
interface NavLinkProps {
  link: string;
  link_title: string;
  pathname: string;
}

export default function NavLink({
  link,
  link_title,
  pathname,
}: NavLinkProps) {
  let pathNameIsEqual = pathname == link;
  return (
    <li>
      <a href={link} className="flex items-center gap-2 w-fit">
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
