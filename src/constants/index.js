import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  ibm,
  research,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Computer Science Enginerring",
    company_name: "VIVEKANANDA GLOBAL UNIVERSITY JAIPUR",
    icon: "/image.png",
    iconBg: "#fff",
    date: "20 - Present",
    points: [
      "🎓 Expected Graduation: August 2028 ",
      
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "High School",
    company_name: "CENTRAL BOARD OF SECONDARY EDUCATION",
    icon: "https://upload.wikimedia.org/wikipedia/en/9/95/CBSE_new_logo.svg",
    iconBg: "#fff",
    date: "2021-2023",
    points: [
      "P C HIGH SCHOOL PATSA",
      "PCM",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

import mernLogo from "../assets/mern.svg";
import javacLogo from "../assets/javac.svg";
import leadershipLogo from "../assets/leadership.svg";
import architectureLogo from "../assets/architecture.svg";

const experiences = [
 {
    title: "Full Stack MERN Developer",
    date: "2026 – Present",
    icon: mernLogo,
    iconBg: "#383E56",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Built REST APIs and integrated dynamic frontend with backend services.",
      "Designed responsive UI using Tailwind CSS with modern UX principles.",
      "Implemented authentication, routing, and state management in real-world projects."
    ],
  },
  {
    title: "Java & C Programmer",
    date: "2024 – Present",
    icon: javacLogo,
    iconBg: "#fff",
    points: [
      "Solved programming problems using Java and C with strong logic building.",
      "Worked on data structures, loops, functions, and object-oriented concepts.",
      "Developed mini applications and console-based projects.",
      "Focused on writing clean, efficient, and optimized code."
    ],
  },
  {
    title: "Management & Leadership Skills",
    date: "2024 – Present",
    icon: leadershipLogo,
    iconBg: "#fff",
    points: [
      "Led academic and project teams, ensuring timely delivery of tasks.",
      "Demonstrated strong problem-solving and decision-making abilities.",
      "Managed multiple projects efficiently with proper planning.",
      "Collaborated with peers and improved communication skills."
    ],
  },
  {
     title: "System Architecture & Backend Learner",
    date: "2025 – Present",
    icon: architectureLogo,
    iconBg:"#fff",
    points: [
      "Learning system design concepts like client-server architecture and APIs.",
      "Exploring database design, scalability, and backend workflows.",
      "Understanding cloud basics and deployment strategies.",
      "Building small backend systems to apply architectural concepts."
    ],
  },
];


const extracurricular = [
  {
    title: "Linux System Administration",
    type: "EduPyramids, IIT Bombay",
    icon: ubuntu,
    iconBg: "#E95420",
    date: "Mar 2026",
    points: [
      "Mastered core Linux architecture, shell command-line operations, and advanced system administration principles.",
      "Demonstrated strong proficiency in secure system configuration, process management, and file permissions.",
      "Successfully cleared a rigorous proctored examination conducted remotely by IIT Bombay (76.67% Score).",
      "Awarded 2 academic credits via the National Mission on Education, Ministry of Education, Govt. of India."
    ],
    credential: "/LINUX CERTIFICATE.jpg",
  },
  {
    title: "Advanced C Programming",
    type: "Professional Certification",
    icon: cplusplus,
    iconBg: "#00599C", // Standard C/C++ blue
    date: "2026",
    points: [
      "Mastered foundational and advanced concepts of C programming, including memory management and pointer arithmetic.",
      "Developed high-performance algorithms and optimized code execution for resource-constrained environments.",
      "Demonstrated strong problem-solving skills through hands-on implementation of complex data structures.",
      "Built robust, scalable, and secure applications requiring low-level hardware interactions."
    ],
    credential: "/C CERTIFICATE.jpg",
  },
  {
    title: "Core & Advanced Java",
    type: "Professional Certification",
    icon: java,
    iconBg: "#B07219",
    date: "2026",
    points: [
      "Mastered Object-Oriented Programming (OOP) principles, multithreading, and Exception Handling.",
      "Developed scalable and robust algorithms utilizing the Java Collections Framework and Data Structures.",
      "Demonstrated strong problem-solving skills by architecting and developing efficient console-based and UI sub-systems.",
      "Optimized memory usage, performance, and application lifecycle with an in-depth understanding of the JVM."
    ],
    credential: "/JAVA CERTIFICATE.jpg",
  },
  {
    title: "Academic Research & Innovation",
    type: "Research Publication / Study",
    icon: research,
    iconBg: "#ffffff", // White background to make the vibrant logo pop
    date: "2026",
    points: [
      "Conducted in-depth academic research focusing on innovative methodologies, data-driven analysis, and solving complex problems.",
      "Synthesized core findings into structured models, demonstrating strong critical thinking and systematic literature review skills.",
      "Explored advanced technical concepts and evaluated their practical feasibility for real-world software integration.",
      "Documented and presented comprehensive research findings, highlighting the potential impact on modern scalable architectures."
    ],
    credential: "/Research.jpg",
  },
  {
    title: "Regional Tech Summit & Networking",
    type: "Leadership & Community Engagement",
    icon: leadershipLogo,
    iconBg: "#512DA8", // A rich deep purple signifying community and leadership
    date: "2026",
    points: [
      "Actively participated in the Regional Meet, engaging in high-level discussions with industry leaders and technical peers.",
      "Explored cutting-edge tech trends and exchanged innovative ideas on modern development workflows.",
      "Expanded professional network by building meaningful connections with seasoned experts and mentors.",
      "Demonstrated strong proactive communication, leadership potential, and dedication to community growth."
    ],
    credential: "/Regional Meet.jpeg",
  },
  {
    title: "Agentic AI Architect",
    type: "IBM SkillsBuild & CSRBOX",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    iconBg: "#052FAD",
    date: "2025",
    points: [
      "Agentic AI: From Learner to Builder - Become an AI Agent Architect",
      "Successfully completed the 4 weeks program",
      "Unique ID: AAI2025CSRBOX0679"
    ],
    credential: "/Agentic_AI_Certificate.jpg",
  },
];

const projects = [
  {
    name: "Kisan Sahayak (AI AgTech) 🌾",
    description:
      "Kisan Sahayak is an AI-powered AgTech platform designed to empower farmers with real-time data and automated decision-making. Features an intelligent AI Advisor for crop disease diagnosis (e.g., leaf blight detection), dynamic market price-tracking bots, and an automated weather alert system. Built with a modern tech/AI stack to include resource management dashboards, expense tracking, and farm yield analytics, ensuring sustainable and optimized agriculture.",
    tags: [
      {
        name: "AI-Advisor",
        color: "blue-text-gradient",
      },
      {
        name: "AgTech",
        color: "green-text-gradient",
      },
      {
        name: "Market-Bot",
        color: "pink-text-gradient",
      },
      {
        name: "Analytics",
        color: "blue-text-gradient",
      },
    ],
    image: "/PROJECT.png",
    source_code_link: "https://kisan-sahayak-tau.vercel.app/", // No repo provided, using live web app
    live_project_link: "https://kisan-sahayak-tau.vercel.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "Abhishek is a phenomenal developer. His grasp on the MERN stack and ability to build seamless, scalable web applications is truly impressive. He consistently delivers high-quality code and is a great team player.",
    name: "Rahul Verma",
    designation: "Senior Software Engineer",
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've had the pleasure of working with Abhishek on several complex backend projects. His proficiency in Java and C, coupled with his strong logic and problem-solving skills, make him a standout programmer.",
    name: "Sneha Sharma",
    designation: "Technical Lead",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Abhishek's leadership skills are as exceptional as his technical abilities. He effectively manages projects, communicates clearly, and always ensures the team stays on track to meet deadlines. A valuable asset to any organization.",
    name: "Amit Patel",
    designation: "Project Manager",
    company: "Creative Devs",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};