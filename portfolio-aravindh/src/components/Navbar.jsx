import { useEffect, useState } from "react";
import {
  HomeIcon,
  User,
  Code,
  Folder,
  Briefcase,
  Mail,
  ArrowBigDown,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar2() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const navItems = [
    { id: 1, path: "", icon: <HomeIcon />, label: "Home" },
    { id: 2, path: "about", icon: <User />, label: "About" },
    { id: 3, path: "skills", icon: <Code />, label: "Skills" },
    { id: 4, path: "projects", icon: <Folder />, label: "Projects" },
    { id: 5, path: "experience", icon: <Briefcase />, label: "Experience" },
    { id: 6, path: "contact", icon: <Mail />, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 80);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-0 
        bg-gray-950/80 backdrop-blur-3xl shadow-md border-b border-white/20 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Logo */}
      <div className="flex items-baseline text-[#00ADB5] font-bold tracking-wider">
        ARAVINDH RAJ
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={`/${item.path}`}
            end
            className={({ isActive }) =>
              `relative py-6 px-2 text-sm transition-all duration-300 ${
                isActive
                  ? "text-[#00ADB5] font-semibold"
                  : "text-gray-500 hover:text-[#00ADB5]"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#00ADB5] after:transition-all after:duration-300 ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`
            }
          >
            <div className="flex items-center gap-1">
              <span>{item.label}</span>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Resume Button */}
      <Link to="/resume" className="flex items-center gap-1 bg-[#00ADB5] rounded-md px-4 py-2 text-white text-sm font-medium backdrop-blur-sm">
        Resume <ArrowBigDown size={20} />
      </Link>
    </nav>
  );
}
