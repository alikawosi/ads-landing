export const COMPANY_NAME = "autodealersolution";

export const NAVIGATION = [
  { name: "Pricing", href: "/pricing" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`;

export const CONTACT_INFO = {
  email: "info@autodealersolution.com",
  phone: "+1 (555) 123-4567",
  address: "123 Auto Plaza, Suite 100, San Francisco, CA 94105",
  social: {
    twitter: "https://twitter.com/autodealersolution",
    linkedin: "https://linkedin.com/company/autodealersolution",
    facebook: "https://facebook.com/autodealersolution",
  },
};

export const TEAM_MEMBERS = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "/placeholder.svg",
    bio: "15+ years in the automotive industry. Former dealership manager turned tech entrepreneur.",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    image: "/placeholder.svg",
    bio: "AI specialist with background in machine learning and automotive data analytics.",
  },
  {
    name: "Michael Chen",
    role: "VP of Product",
    image: "/placeholder.svg",
    bio: "Product visionary focused on building intuitive tools for the automotive industry.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for small dealerships just getting started.",
    price: {
      monthly: 99,
      annually: 79,
    },
    features: [
      "Up to 50 vehicles in inventory",
      "Basic AI matching system",
      "Standard support",
      "Market analytics (basic)",
      "Single location",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing dealerships with multiple staff members.",
    price: {
      monthly: 299,
      annually: 239,
    },
    features: [
      "Up to 200 vehicles in inventory",
      "Advanced AI matching system",
      "Priority support",
      "Market analytics (advanced)",
      "Customer behavior insights",
      "Up to 3 locations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "For established dealerships with advanced needs.",
    price: {
      monthly: 599,
      annually: 479,
    },
    features: [
      "Up to 500 vehicles in inventory",
      "Premium AI matching system",
      "24/7 dedicated support",
      "Market analytics (premium)",
      "Customer behavior insights",
      "Unlimited locations",
      "Custom integrations",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];
