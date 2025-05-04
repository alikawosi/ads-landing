import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TermlyCMP from "../termly/TermlyCMP";

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main
        className={`flex-grow ${
          fullWidth ? "" : "container mx-auto px-4 md:px-6"
        }`}
      >
        <TermlyCMP websiteUUID="c7b7d90a-ba00-4660-92c0-e69aede86132" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
