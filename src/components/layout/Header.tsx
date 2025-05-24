import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Blocks, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Products',
    path: '/products',
    submenu: [
      { name: 'Newvestor', path: '/products/newvestor' },
      { name: 'Aladdin Strategy', path: '/products/aladdin-strategy' },
      { name: 'WIN Token', path: '/products/win-token' },
      { name: 'AiBT DEX', path: '/products/dex' },
      { name: 'Online Classroom', path: '/products/classroom' },
    ]
  },
  { name: 'Tokenomics', path: '/tokenomics' },
  { name: 'Business Model', path: '/business-model' }, // ✅ NEW LINK
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Team', path: '/team' },
  { name: 'Investment', path: '/investment' },
  { name: 'Contact', path: '/contact' },
];


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/*<Link to="/" className="flex items-center space-x-2">*/}
          {/*  /!*<Blocks className="h-8 w-8 text-primary-500" />*!/*/}
          {/*  <img*/}
          {/*      src="/public/favicon.png"*/}
          {/*      alt="AiBT.io logo"*/}
          {/*      className="h-8 w-8 rounded-md"*/}
          {/*  />*/}
          {/*  <span className="text-2xl font-bold gradient-text">AiBT.io</span>*/}
          {/*</Link>*/}

          <Link to="/" className="flex items-center space-x-2">
            <img
                src="public/favicon.png"
                className="h-8 w-8 rounded-md"
                loading="lazy"
            />
            <span className="text-2xl font-bold gradient-text">AiBT.io</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button 
                    onClick={() => toggleSubmenu(link.name)}
                    className={`flex items-center space-x-1 py-2 text-base font-medium transition-colors hover:text-primary-400 ${
                      location.pathname.includes(link.path) ? 'text-primary-400' : 'text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`py-2 text-base font-medium transition-colors hover:text-primary-400 ${
                      location.pathname === link.path ? 'text-primary-400' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.submenu && (
                  <div className={`absolute left-0 mt-2 w-48 rounded-md bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 transition-all transform origin-top-right ${
                    activeSubmenu === link.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  }`}>
                    <div className="py-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-white hover:bg-dark-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link to="/contact" className="hidden md:inline-flex btn btn-primary">
            Get Started
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-800"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <button 
                      onClick={() => toggleSubmenu(link.name)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeSubmenu === link.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeSubmenu === link.name ? 'auto' : 0,
                        opacity: activeSubmenu === link.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden ml-4 border-l-2 border-dark-700 pl-4"
                    >
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-sm text-white hover:text-primary-400"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`block py-2 text-base font-medium ${
                      location.pathname === link.path ? 'text-primary-400' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn btn-primary w-full text-center">
              Get Started
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;