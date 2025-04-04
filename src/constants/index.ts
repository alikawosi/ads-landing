
export const COMPANY_NAME = "AutoAI";
export const TAGLINE = "AI-Powered Solutions for Modern Car Dealerships";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export const FEATURES = [
  {
    title: "AI Inventory Analysis",
    description: "Leverage AI to optimize your inventory based on market trends and customer preferences.",
    icon: "BarChart"
  },
  {
    title: "Smart Customer Matching",
    description: "Match customers with their ideal vehicles using advanced AI algorithms and preference analysis.",
    icon: "Users"
  },
  {
    title: "Market Price Prediction",
    description: "Stay competitive with AI-powered price predictions based on market data and vehicle condition.",
    icon: "LineChart"
  },
  {
    title: "Automated Lead Qualification",
    description: "Let AI qualify and prioritize leads so your sales team can focus on closing deals.",
    icon: "FilterX"
  },
  {
    title: "Sentiment Analysis",
    description: "Understand customer feedback and online reviews using natural language processing.",
    icon: "MessageSquare"
  },
  {
    title: "Predictive Maintenance",
    description: "Forecast vehicle maintenance needs to enhance customer satisfaction and service revenue.",
    icon: "Wrench"
  }
];

export const TESTIMONIALS = [
  {
    content: "AutoAI has transformed our dealership operations. Our inventory turnover has increased by 35% since implementation.",
    author: "Sarah Johnson",
    role: "Operations Director, Premier Motors"
  },
  {
    content: "The customer matching feature alone paid for the subscription in the first month. We're seeing more satisfied customers and higher sales.",
    author: "Michael Chen",
    role: "Sales Manager, Eastside Auto Group"
  },
  {
    content: "The price prediction tool gives us a competitive edge. We're pricing vehicles more accurately and maximizing profits as a result.",
    author: "David Rodriguez",
    role: "General Manager, Suncoast Vehicles"
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for small dealerships just getting started with AI.",
    features: [
      "AI Inventory Analysis",
      "Basic Customer Matching",
      "Market Price Insights",
      "Email Support",
      "Up to 100 vehicles"
    ],
    priceId: "price_starter12345" // Replace with your actual Stripe price ID
  },
  {
    name: "Professional",
    price: 599,
    description: "Ideal for growing dealerships looking to maximize AI benefits.",
    features: [
      "Everything in Starter",
      "Advanced Customer Matching",
      "Lead Qualification",
      "Sentiment Analysis",
      "Priority Support",
      "Up to 300 vehicles"
    ],
    priceId: "price_professional12345", // Replace with your actual Stripe price ID
    popular: true
  },
  {
    name: "Enterprise",
    price: 1299,
    description: "Comprehensive solution for large dealership groups.",
    features: [
      "Everything in Professional",
      "Multi-location Support",
      "Predictive Maintenance",
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "Unlimited vehicles"
    ],
    priceId: "price_enterprise12345" // Replace with your actual Stripe price ID
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "Former automotive executive with 15 years of experience in the industry. Pioneered the use of AI in dealership operations.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief AI Officer",
    bio: "PhD in Machine Learning with extensive research in predictive analytics. Leading our AI development team to create cutting-edge solutions.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    name: "Marcus Williams",
    role: "Head of Customer Success",
    bio: "Former dealership manager who understands the challenges our customers face. Dedicated to ensuring client satisfaction.",
    image: "/placeholder.svg" // Replace with actual image path
  }
];

export const CONTACT_INFO = {
  email: "info@autoai.example.com",
  phone: "+1 (555) 123-4567",
  address: "123 AI Boulevard, Silicon Valley, CA 94025",
  social: {
    twitter: "https://twitter.com/autoai",
    linkedin: "https://linkedin.com/company/autoai",
    facebook: "https://facebook.com/autoai"
  }
};
