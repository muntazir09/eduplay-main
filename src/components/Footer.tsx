import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TowerControl as GameController, Twitter, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Games', path: '/games' },
        { name: 'Activities', path: '/activities' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Games Categories',
      links: [
        { name: 'Math Games', path: '/games?category=math' },
        { name: 'Language Games', path: '/games?category=language' },
        { name: 'Science Games', path: '/games?category=science' },
        { name: 'Art Games', path: '/games?category=art' },
        { name: 'Music Games', path: '/games?category=music' },
      ]
    },
    {
      title: 'Parents & Teachers',
      links: [
        { name: 'Educational Resources', path: '/resources' },
        { name: 'Progress Tracking', path: '/progress' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Use', path: '/terms' },
        { name: 'FAQs', path: '/faqs' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', url: '#' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: '#' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: '#' },
    { icon: <Youtube size={20} />, name: 'YouTube', url: '#' },
  ];

  return (
    <footer className="bg-indigo-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                  <GameController size={20} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="ml-2 font-bold text-2xl text-white">
                EduPlay
              </span>
            </Link>
            
            <p className="text-indigo-100 mb-6">
              Making education fun and engaging for children through interactive games and activities.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-indigo-800 hover:bg-indigo-700 flex items-center justify-center text-white transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-indigo-100 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-indigo-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EduPlay. All rights reserved.
          </p>
          
          <p className="text-indigo-200 text-sm flex items-center">
            Made with <Heart size={16} className="text-red-400 mx-1" /> for young learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;