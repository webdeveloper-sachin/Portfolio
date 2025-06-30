import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    // { path: "/skills", name: "Skills" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <header className=" mx-auto max-w-7xl sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            {/* DevPortfolio */}
            SachinRawat
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex  space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-sm lg:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;