import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, User, Mail, Layers } from "lucide-react";
import { initialAlbumIds, initialTrackIds } from "../../../data/initialIds";
import logosvg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    {
      name: "Now Playing Card",
      href: `/track/${
        initialTrackIds[Math.floor(Math.random() * initialTrackIds.length)]
      }`,
      icon: '',
    },
    {
      name: "Album Poster",
      href: `/album-poster/${
        initialAlbumIds[Math.floor(Math.random() * initialAlbumIds.length)]
      }`,
      icon: '',
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-emerald-200/20 backdrop-blur-lg border-b border-white/20 text-emerald-500"
          : "bg-emerald-500 backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-7xl mt-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex gap-3 items-center">
              <img
                fetchPriority="high"
                src={logosvg}
                className="w-10 h-11"
                alt="logo"
              ></img>
              <h1 className="text-3xl font-medium">
                {" "}
                Spoti<span className="text-3xl font-thin">Tools</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group px-3 py-2 rounded-full text-sm font-medium transition-all duration-100 hover:bg-white/10 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                  >
                    {/* <IconComponent
                      size={16}
                      className=" transition-transform duration-300"
                    /> */}
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled
                  ? "hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  : "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              }  transition-all duration-200`}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6 transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t border-white/20">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`group text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-purple-50 hover:scale-105 flex items-center space-x-3 transform ${
                  isOpen
                    ? `translate-x-0 opacity-100`
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {/* <IconComponent
                  size={18}
                  className="group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300"
                /> */}
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
