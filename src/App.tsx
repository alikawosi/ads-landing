
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";
import AdsSearchTool from "./pages/AdsSearchTool";
import MarketingTool from "./pages/MarketingTool";
import Gear1SearchingAgent from "./pages/Gear1SearchingAgent";
import StockManagement from "./pages/StockManagement";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/community" element={<Community />} />
          <Route path="/solutions/ads-search-tool" element={<AdsSearchTool />} />
          <Route path="/solutions/marketing-tool" element={<MarketingTool />} />
          <Route path="/solutions/gear1-searching-agent" element={<Gear1SearchingAgent />} />
          <Route path="/solutions/stock-management" element={<StockManagement />} />
          <Route path="/signup" element={<Contact />} /> {/* Using Contact page as signup for now */}
          <Route path="/login" element={<Contact />} /> {/* Using Contact page as login for now */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
