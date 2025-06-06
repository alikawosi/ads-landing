export const COMPANY_NAME = "Auto Dealer Solutions ";

export const NAVIGATION = [
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`;

export const CONTACT_INFO = {
  email: "support@autodealersolutions.co.uk",
  phone: "+44 7500 056007",
  address: "Aurora House 71-75 Uxbridge Road \nLondon, England \nW5 5SL",
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/company/auto-dealer-solutions-limited",
    facebook: "",
  },
};

export const TEAM_MEMBERS = [
  {
    name: "Arya Daryadel",
    role: "Chief Executive Officer",
    image: "/assets/ceo.jpeg",
    bio: "5+ years in the automotive industry. Passionate about leveraging AI to transform car dealerships.",
  },
  {
    name: "Ali Kawosi",
    role: "Chief Product Officer",
    image: "/assets/cpo.jpeg",
    bio: "Product visionary focused on building intuitive tools for the automotive industry. Former tech entrepreneur",
  },
  {
    name: "Amirreza Mohammadi",
    role: "Chief Technology Officer",
    image: "/assets/cto.jpeg",
    bio: "AI specialist with background in machine learning and automotive data analytics. Formerly at a leading tech firm.",
  },
  {
    name: "Sam Torabi",
    role: "Director of Sales",
    image: "/assets/sales_vp.jpeg",
    bio: "Experienced sales leader with deep understanding of automotive dealer needs and market dynamics.",
  },
];

// We're using this for the unified pricing display on both pages
export const PRICING_TIERS = [
  {
    id: 1,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    enterprise: false,
    features: [
      "ADS Search Tool",
      "50 Valuation Credits",
      "Automated Search Tool",
      "Basic support",
    ],
    link: import.meta.env.VITE_APP_URL,
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 100,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    enterprise: false,
    features: [
      "ADS Search Tool",
      "300 Valuation Credits Monthly",
      "Automated Search Tool",
      "Automated Valuation Tool",
      "24/7 support",
    ],
    link: import.meta.env.VITE_APP_URL,
  },
  {
    id: 3,
    title: "Enterprise",
    monthlyPrice: 0,
    buttonText: "Contact Sales",
    popular: false,
    inverse: false,
    enterprise: true,
    features: [
      "Custom Credit Limits",
      "Adding members",
      "Custom Valuation System",
      "Custom Market Search",
      "Integrations",
      "Advanced analytics",
      "Advanced security features",
      "High Priority Support",
    ],
    link: "/contact",
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
