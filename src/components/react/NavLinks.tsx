import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function NavLinks() {
  const navItems = [
    {
      link: "projetos",
      link_title: "Projetos",
      icon: "Code",
    },
    {
      link: "sobre",
      link_title: "Sobre",
      icon: "Lightbulb",
    },
    {
      link: "blog",
      link_title: "Blog",
      icon: "PencilSimpleLine",
    },
  ];

  return (
    <ul className="text-nav-items flex flex-col max-lg:gap-4 gap-2 max-lg:hidden">
      {navItems.map(({ link, link_title }) => (
        <li key={link} className="smooth-scroll cursor-pointer">
          <ScrollLink
            to={link}
            className="text-white text-2xl"
            smooth={true}
            duration={500}
            activeClass={"ml-4 font-bold"}
            spy={true}
            offset={-200}
          >
            {link_title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}
