
import React from "react";
import { Link } from "react-router-dom";
import {
  NAVIGATION,
  COMPANY_NAME,
  COPYRIGHT,
  CONTACT_INFO,
} from "../../constants";
import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-lg md:text-xl font-bold text-saas-blue mb-3 md:mb-4">
              {COMPANY_NAME}
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
              AI-powered solutions to transform the car dealership industry.
            </p>
            <div className="flex space-x-4">
              {CONTACT_INFO.social.twitter && (
                <a
                  href={CONTACT_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-saas-blue"
                >
                  <Twitter size={isMobile ? 18 : 20} />
                </a>
              )}
              {CONTACT_INFO.social.linkedin && (
                <a
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-saas-blue"
                >
                  <Linkedin size={isMobile ? 18 : 20} />
                </a>
              )}
              {CONTACT_INFO.social.facebook && (
                <a
                  href={CONTACT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-saas-blue"
                >
                  <Facebook size={isMobile ? 18 : 20} />
                </a>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Pages</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-saas-blue dark:hover:text-saas-blue transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={isMobile ? 14 : 16} className="text-saas-blue" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-saas-blue dark:hover:text-saas-blue"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={isMobile ? 14 : 16} className="text-saas-blue" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-saas-blue dark:hover:text-saas-blue"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={isMobile ? 14 : 16} className="text-saas-blue mt-1" />
                <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 md:mt-10 pt-4 md:pt-6 text-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            {COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
