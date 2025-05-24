import React from 'react';
import { Link } from 'react-router-dom';
import { Blocks, Mail, MessageCircle, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                  src="/favicon.png"
                  alt="AiBT.io logo"
                  className="h-8 w-8 rounded-md"
                  loading="lazy"
              />
              <span className="text-2xl font-bold gradient-text">AiBT.io</span>
            </Link>
            <p className="text-dark-300 max-w-xs">
              At the intersection of artificial intelligence and blockchain technology, we're building the future of decentralized finance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-300 hover:text-primary-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-dark-300 hover:text-primary-400">About Us</Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-dark-300 hover:text-primary-400">Tokenomics</Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-dark-300 hover:text-primary-400">Roadmap</Link>
              </li>
              <li>
                <Link to="/team" className="text-dark-300 hover:text-primary-400">Team</Link>
              </li>
              <li>
                <Link to="/investment" className="text-dark-300 hover:text-primary-400">Investment</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/newvestor" className="text-dark-300 hover:text-primary-400">Newvestor</Link>
              </li>
              <li>
                <Link to="/products/aladdin-strategy" className="text-dark-300 hover:text-primary-400">Aladdin Strategy</Link>
              </li>
              <li>
                <Link to="/products/win-token" className="text-dark-300 hover:text-primary-400">WIN Token</Link>
              </li>
              <li>
                <Link to="/products/dex" className="text-dark-300 hover:text-primary-400">AiBT DEX</Link>
              </li>
              <li>
                <Link to="/products/classroom" className="text-dark-300 hover:text-primary-400">Online Classroom</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-dark-300">info@aibt.io</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-dark-300">Live chat available 24/7</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm">
              &copy; {new Date().getFullYear()} AiBT.io. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-dark-400 hover:text-primary-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-dark-400 hover:text-primary-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/legal" className="text-dark-400 hover:text-primary-400 text-sm">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;