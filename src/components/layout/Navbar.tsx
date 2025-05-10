import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Car,
  Key,
  Calendar,
  DollarSign,
  Layers,
  Users,
} from "lucide-react";
import { NAVIGATION, COMPANY_NAME } from "../../constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const solutions = [
    {
      title: "ADS Search",
      description:
        "Find the most relevant and high-converting ads for your business",
      href: "/solutions/ads-search",
      icon: <Car className="h-6 w-6 text-blue-500" />,
      badge: null,
    },
    {
      title: "Marketing Tool",
      description:
        "Streamline your marketing operations with our comprehensive platform",
      href: "/solutions/marketing-tool",
      icon: <DollarSign className="h-6 w-6 text-purple-500" />,
      badge: "Coming Soon",
    },
    {
      title: "Automated Search",
      description:
        "AI agent searches based on user preferences and finds cars at the best prices",
      href: "/solutions/automated-search",
      icon: <Key className="h-6 w-6 text-green-500" />,
      badge: null,
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-saas-black/95 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/logo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-gray-600 dark:text-gray-300  transition-colors"
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[750px] p-4 bg-white dark:bg-gray-900 shadow-lg rounded-md">
                      <div className="grid grid-cols-2 gap-4">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.title}
                            to={solution.href}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="mr-3 mt-1">{solution.icon}</div>
                            <div>
                              <div className="flex items-center gap-4">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                  {solution.title}
                                </h3>
                                {solution.badge && (
                                  <Badge
                                    className="text-xs"
                                    variant="secondary"
                                  >
                                    {solution.badge}
                                  </Badge>
                                )}
                              </div>
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

            {NAVIGATION.map(
              (item) =>
                item.href !== "/community" && (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              asChild
              className="rounded-[16px] px-6 py-2 border-2 border-saas-blue"
            >
              <a
                href={import.meta.env.VITE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
            </Button>
            <Button
              className="rounded-[16px] px-6 py-2 flex items-center gap-2"
              asChild
            >
              <a
                href={import.meta.env.VITE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up
                <Car className="h-4 w-4" />
              </a>
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
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      solutionsOpen ? "transform rotate-180" : ""
                    }`}
                  />
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
                        <div className="flex items-center">
                          <span>{solution.title}</span>
                          {solution.badge && (
                            <span className="ml-2">{solution.badge}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {NAVIGATION.map(
                (item) =>
                  item.href !== "/community" && (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-saas-blue dark:hover:text-saas-blue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
              )}

              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button
                  variant="outline"
                  className="w-full rounded-[16px] px-6 py-2 border-2 border-saas-blue"
                  asChild
                >
                  <a
                    href={import.meta.env.VITE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log in
                  </a>
                </Button>
                <Button
                  className="w-full rounded-[16px] px-6 py-2 flex items-center justify-center gap-2"
                  asChild
                >
                  <a
                    href={import.meta.env.VITE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign up
                    <Car className="h-4 w-4" />
                  </a>
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
