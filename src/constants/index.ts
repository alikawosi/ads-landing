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

export const PRICING_TIERS = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority Support",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const TESTIMONIALS = [
  {
    text: "Since using this platform, our stock turnover increased by 35%. The AI suggestions on what to buy have been incredibly accurate.",
    imageSrc: "avatar-1.png",
    name: "Michael Rodriguez",
    username: "California Motors",
  },
  {
    text: "We're closing deals faster thanks to the customer-matching features. Our team is more efficient and customers are more satisfied.",
    imageSrc: "avatar-2.png",
    name: "Sarah Johnson",
    username: "Prestige Auto Group",
  },
  {
    text: "Predictive analytics gave us a market edge. We stock the right cars before competitors even react.",
    imageSrc: "avatar-3.png",
    name: "David Thompson",
    username: "Elite Motors",
  },
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: "avatar-9.png",
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
  {
    text: "This app streamlined how we find, price, and reach out to owners. Game changer for our workflow.",
    imageSrc: "avatar-4.png",
    name: "Casey Jordan",
    username: "AutoSmart Ltd",
  },
  {
    text: "Our sourcing team now spends half the time researching. AI does the hard work for us.",
    imageSrc: "avatar-5.png",
    name: "Taylor Kim",
    username: "MotorLink Solutions",
  },
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: "avatar-9.png",
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
  {
    text: "We integrated it in days, and it's now core to our dealership operations.",
    imageSrc: "avatar-6.png",
    name: "Riley Smith",
    username: "DriveNow Auto",
  },
  {
    text: "Efficient, intuitive, and packed with features that matter. Highly recommended.",
    imageSrc: "avatar-7.png",
    name: "Jordan Patels",
    username: "Prime Auto Group",
  },
  {
    text: "Everything in one place—valuation, search, and outreach. This is what digital dealerships should be.",
    imageSrc: "avatar-8.png",
    name: "Sam Dawson",
    username: "CarDirect HQ",
  },
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: "avatar-9.png",
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
];
