
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, BarChart2, Bot } from 'lucide-react';
import { NAVIGATION, COMPANY_NAME } from '../../constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const solutions = [
    {
      title: "ADS Searching Tool",
      description: "Find the most relevant and high-converting ads for your business",
      href: "/solutions/ads-search-tool",
      icon: <Search className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Marketing Tool",
      description: "Streamline your marketing operations with our comprehensive platform",
      href: "/solutions/marketing-tool",
      icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Gear 1: Searching Agent",
      description: "AI-powered car search that matches you with the perfect vehicle at the right price",
      href: "/solutions/gear1-searching-agent",
      icon: <Bot className="h-6 w-6 text-green-500" />,
    },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 dark:bg-saas-black/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-saas-blue">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4 bg-white dark:bg-gray-900 shadow-lg rounded-md">
                      <div className="grid grid-cols-2 gap-4">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.title}
                            to={solution.href}
                            className="flex items-start p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="mr-3 mt-1">{solution.icon}</div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {solution.title}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/demo"
              className="text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
            >
              Demo
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-saas-black shadow-md animate-fade-in">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              <div className="relative">
                <button 
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-600 dark:text-gray-300"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {solutionsOpen && (
                  <div className="pl-4 mt-1 space-y-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.title}
                        to={solution.href}
                        className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-saas-blue"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="mr-2">{solution.icon}</div>
                        <span>{solution.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/demo"
                className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
