
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        <div className="pt-16 md:pt-20"> {/* Add padding-top to account for fixed navbar */}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
