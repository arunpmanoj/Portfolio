import {
  Blocks,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Palette,
  Server,
  TerminalSquare,
  Users
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/arunpmanoj", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/arunpmanoj", icon: Linkedin }
];

export const aboutHighlights = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Frontend Development",
  "API Integrations",
  "Performance"
];

export const journey = [
  {
    type: "experience",
    place: "WHITE MATRIX Software Solutions",
    logo: "WM",
    title: "Junior Software Engineer Intern",
    period: "March 2026 – Present"
  },
  {
    type: "education",
    place: "Sahrdaya College Of Engineering And Technology",
    logo: "SC",
    title: "",
    period: "2022 – 2026"
  }
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    accent: "aqua",
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks",
    icon: Blocks,
    accent: "mint",
    skills: ["React.js", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Database",
    icon: Database,
    accent: "ember",
    skills: ["MySQL"]
  },
  {
    title: "ML / AI",
    icon: BrainCircuit,
    accent: "pulse",
    skills: ["Scikit-learn", "NumPy", "Pandas"]
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    accent: "aqua",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    accent: "mint",
    skills: ["Team Collaboration", "Problem Solving", "Communication", "Adaptability"]
  }
];

export const projects = [
  {
    title: "Agency.AI",
    subtitle: "Modern AI Agency Website",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    color: "bg-gradient-to-br from-white/8 via-white/4 to-black",
    image: "/projects/agency-ai-preview.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/arunpmanoj",
    showActions: true,
    description: "An immersive, high-performance agency platform featuring fluid UI animations, state-driven interfaces, and optimized performance benchmarks.",
    features: [
      "Frictionless, fluid interface animations using Framer Motion",
      "Fully responsive layout optimized for all device breakpoints",
      "Modular component architecture for high maintainability",
      "Sleek, premium dark mode styling and typography hierarchy"
    ]
  },
  {
    title: "Secure Online Voting System",
    subtitle: "Trusted Digital Voting Platform",
    stack: ["React", "Node.js", "MongoDB", "OAuth"],
    color: "bg-gradient-to-br from-white/10 via-white/5 to-black",
    image: "/projects/voting-system-preview.png",
    liveUrl: null,
    githubUrl: "https://github.com/arunpmanoj",
    showActions: true,
    description: "A secure, enterprise-grade digital voting platform engineering cryptographic integrity, real-time results streaming, and multi-factor voter verification.",
    features: [
      "Secure OAuth 2.0 authentication and role-based access control",
      "Strict one-person-one-vote validation workflow",
      "Real-time results visualization using database streams",
      "Comprehensive tamper-proof audit trails for transparency"
    ]
  },
  {
    title: "AI-Based Drug Response Prediction",
    subtitle: "ML-Assisted Healthcare Dashboard",
    stack: ["Python", "Scikit-learn", "React", "Next.js"],
    color: "bg-gradient-to-br from-white/6 via-white/3 to-black",
    image: "/projects/pharma-prediction-preview.png",
    liveUrl: null,
    githubUrl: "https://github.com/arunpmanoj",
    showActions: true,
    description: "An advanced machine learning dashboard providing predictive insights for clinical decision support and drug efficacy analysis.",
    features: [
      "High-accuracy predictive modeling for Type 2 Diabetes treatment",
      "Asynchronous API integration for real-time inference processing",
      "Interactive clinical data visualization dashboards",
      "Designed with clear, user-friendly medical data hierarchy"
    ]
  }
];

export const orbitSkills = [
  { label: "React", icon: Palette },
  { label: "Node", icon: Server },
  { label: "AI", icon: BrainCircuit }
];
