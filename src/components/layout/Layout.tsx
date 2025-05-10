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
      <div className="relative pt-4">
        {" "}
        {/* Added padding-top to accommodate the Termly banner */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <TermlyCMP websiteUUID={import.meta.env.VITE_TERMLY_UUID} />
        </div>
        <main
          className={`flex-grow mt-4 ${
            fullWidth ? "" : "container mx-auto px-4 md:px-6"
          }`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
