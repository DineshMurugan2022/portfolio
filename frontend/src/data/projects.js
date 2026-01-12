import ecartImage from '../assets/ecart.png';
import gymimage from '../assets/gym.png';
import portfolioimage from '../assets/portfolio.png';
import chatbotimage from '../assets/chatbot.PNG';
import crmimage from '../assets/crm.PNG';
import paymentimage from '../assets/payment.PNG';
import pawnshopImage from '../assets/pawnshop.png';

export const projects = [
  // --- New Projects ---
  {
      id: 2,
      title: "BNY CRM System",
      description: "Advanced Customer Relationship Management system with secure authentication, user roles, and data visualization.",
      image: crmimage,
      tech: ["React", "Authentication", "Dashboard", "Charts"],
      github: "https://github.com/DineshMurugan2022",
      live: "https://bnycrm1.vercel.app",
      category: "Business",
      featured: true
  },
  {
      id: 3,
      title: "All In One Genie",
      description: "A versatile platform offering multiple services in one place. Designed for scalability and ease of use.",
      image: ecartImage, // Using E-cart image as placeholder
      tech: ["Next.js", "Tailwind", "API Integration"],
      github: "https://github.com/DineshMurugan2022",
      live: "https://allinonegenie.vercel.app/",
      category: "SaaS",
      featured: false
  },
    {
        id: 1,
        title: "PawnShop Admin Panel",
        description: "A comprehensive admin dashboard for managing pawn shop operations, including loan management and inventory tracking, with admin page management",
        image: pawnshopImage,
        tech: ["React", "Node.js", "MongoDB", "Admin UI"],
        github: "https://github.com/DineshMurugan2022",
        live: "https://pawnshop-git-main-dineshmurugan2022s-projects.vercel.app",
        category: "Management",
        featured: true,
        embeddable: false
    },
    {
        id: 4,
        title: "Vyce Labs",
        description: "Innovative web application for a tech lab, showcasing cutting-edge design and interactive elements.",
        image: portfolioimage,
        tech: ["React", "Framer Motion", "GSAP"],
        github: "https://github.com/DineshMurugan2022",
        live: "https://vyce-labs.vercel.app/",
        category: "Creative",
        featured: true
    },
    {
        id: 5,
        title: "Content Management System",
        description: "A robust CMS built for flexibility, allowing users to manage content dynamically with a modern interface.",
        image: chatbotimage, // Using Chatbot image as placeholder
        tech: ["MERN Stack", "Content API", "Secure"],
        github: "https://github.com/DineshMurugan2022",
        live: "https://cms-z296.onrender.com/",
        category: "CMS",
        featured: false
    },

    // --- Original Projects ---

    {
        id: 7,
        title: "Gym Management System",
        description: "Comprehensive gym management application with admin and user portals for managing memberships and schedules.",
        image: gymimage,
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/DineshMurugan2022",
        live: "https://gymsite-2nfa.vercel.app/",
        category: "Management",
        featured: false
    },
    {
        id: 8,
        title: "AI Chatbot Application",
        description: "Interactive chatbot powered by Gemini API, providing intelligent responses and enhanced user engagement.",
        image: chatbotimage,
        tech: ["React", "Gemini API", "AI Integration"],
        github: "https://github.com/DineshMurugan2022",
        live: "http://chatbot-cyan-iota.vercel.app",
        category: "AI/ML",
        featured: false
    },

    {
        id: 10,
        title: "Personal Portfolio (V1)",
        description: "Previous iteration of responsive portfolio showcasing web development skills and projects.",
        image: portfolioimage,
        tech: ["React", "CSS", "Responsive Design"],
        github: "https://github.com/DineshMurugan2022",
        live: "https://dinesh2002portfolio.vercel.app",
        category: "Portfolio",
        featured: false,
        embeddable: false
    },
    {
        id: 11,
        title: "Payment Gateway",
        description: "E-commerce payment system integrated with Razorpay API for secure online transactions.",
        image: paymentimage,
        tech: ["React", "Node.js", "Razorpay"],
        github: "https://github.com/DineshMurugan2022",
        live: "https://payment-liart-zeta.vercel.app/",
        category: "Fintech",
        featured: false
    }
];
