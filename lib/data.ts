// Single source of truth for everything shown on the site.
// Edit text here; the page, metadata and structured data all read from it.

export const site = {
  // Change this to the final domain before deploying (used for canonical URL, sitemap and social cards).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anuraag-one.vercel.app",
  name: "Anurag Mishra",
  role: "Software Developer",
  title: "Anurag Mishra · Software Developer, banking frontend in React and TypeScript",
  description:
    "Anurag Mishra is a software developer at Mindmash Data Labs building the frontend of a banking application in React, TypeScript and Mantine. Also Java, SQL and SAP ABAP.",
  email: "mishraanurag66031@gmail.com",
  location: "Greater Noida, India",
  company: "Mindmash Data Labs",
  links: {
    linkedin: "https://www.linkedin.com/in/anurag-mishra-9b1387224",
    github: "https://github.com/anurag4002",
    leetcode: "https://leetcode.com/u/the_anurag_01/",
  },
};

export const heroWords = ["Software", "Developer"];
export const heroTag = ["Banking frontend,", "React and TypeScript"];

// `hi: true` words render in ink; the rest render in the soft grey.
export const lede: { t: string; hi?: boolean }[] = [
  { t: "Anurag" },
  { t: "Mishra" },
  { t: "is" },
  { t: "a" },
  { t: "software", hi: true },
  { t: "developer", hi: true },
  { t: "at" },
  { t: "Mindmash" },
  { t: "Data" },
  { t: "Labs," },
  { t: "building" },
  { t: "the" },
  { t: "frontend" },
  { t: "of" },
  { t: "a" },
  { t: "banking", hi: true },
  { t: "application", hi: true },
  { t: "in" },
  { t: "React" },
  { t: "and" },
  { t: "TypeScript." },
];

export const expertise = [
  "React",
  "TypeScript",
  "Banking frontend",
  "TanStack Query",
  "Testing with Vitest",
  "Java and SQL",
];

export type CoverKind = "tender" | "pathlab" | "contractor" | "sap" | "egyan" | "iot";

export type Project = {
  slug: string;
  name: string;
  desc: string;
  tag: string;
  stack: string;
  cover: CoverKind;
  href?: string;
  cta?: "View" | "Visit";
  // Grid placement on the 12-column desktop grid.
  layout: "a" | "b" | "c" | "d" | "e" | "f";
};

export const projects: Project[] = [
  {
    slug: "tender-management",
    name: "Tender Management System",
    desc: "Tender bidding for Admin and Vendor roles, one bid per vendor.",
    tag: "Java web app",
    stack: "Java, Servlets, JSP, JDBC, MySQL, Tomcat, Maven",
    cover: "tender",
    href: "https://github.com/anurag4002/Tender-Management",
    cta: "View",
    layout: "a",
  },
  {
    slug: "pure-path-lab",
    name: "Pure Path Lab",
    desc: "Lab management for patients, cases, billing and reports.",
    tag: "Full stack",
    stack: "Node.js, Express, MongoDB, REST API",
    cover: "pathlab",
    href: "https://github.com/anurag4002/Pathlab",
    cta: "View",
    layout: "b",
  },
  {
    slug: "contractor-worker-management",
    name: "Contractor Worker Management",
    desc: "Workers, attendance, salaries and sites from one dashboard.",
    tag: "MERN",
    stack: "React, Node.js, Express, MongoDB",
    cover: "contractor",
    href: "https://contractor-worker-management.vercel.app",
    cta: "Visit",
    layout: "c",
  },
  {
    slug: "employee-travel-reimbursement",
    name: "Employee Travel Reimbursement",
    desc: "CDS views over 3 Z-tables, exposed as one OData service.",
    tag: "SAP ABAP · Practice project",
    stack: "SAP ABAP, CDS Views, OData, SAP Gateway",
    cover: "sap",
    layout: "d",
  },
  {
    slug: "egyan-portal",
    name: "NOU eGyan Portal",
    desc: "College portal for admins, students and study centers.",
    tag: "Internship project",
    stack: "Java, Servlets, JSP, JDBC, MySQL, Bootstrap",
    cover: "egyan",
    href: "https://github.com/anurag4002/eGyan-Portal",
    cta: "View",
    layout: "e",
  },
  {
    slug: "iot-multifunctional-car",
    name: "IoT Multifunctional Car",
    desc: "Arduino car with obstacle detection, driven from a phone.",
    tag: "IoT · Arduino",
    stack: "Arduino, ultrasonic sensors, motor drivers",
    cover: "iot",
    href: "https://github.com/anurag4002/IoT-Multifunctional-Car",
    cta: "View",
    layout: "f",
  },
];

export type Row = { title: string; desc: string; meta: string; href?: string };

export const experience: Row[] = [
  {
    title: "Software Developer, Mindmash Data Labs",
    desc: "Banking application for business and retail customers. Screens for payments, transfers, credit cards and loans in React, TypeScript and Mantine, with 50+ Vitest tests and 40+ bugs fixed across 2 teams.",
    meta: "Aug 2026 – Now",
  },
  {
    title: "Software Developer, Mindmash Data Labs",
    desc: "Live retail storefront on HCL Commerce. Shipped 30+ banners and page sections and fixed 20+ bugs with Pug templates and SCSS.",
    meta: "Jun – Jul 2026",
  },
  {
    title: "Software Development Intern, Mindmash Data Labs",
    desc: "Built a QR-based restaurant menu and ordering system with React.js, Node.js and JavaScript. Converted to full-time.",
    meta: "Mar – May 2026",
  },
  {
    title: "Software Development Intern, Softpro India",
    desc: "Create, read, update and delete flows for the NOU e-Gyan Portal in 45 days, using Java Servlets and JDBC on MySQL and SQL Server.",
    meta: "Jul – Aug 2022",
  },
];

export const moreCode: Row[] = [
  {
    title: "DSA Problems",
    desc: "Data structures and algorithms practice in Java.",
    meta: "View",
    href: "https://github.com/anurag4002/DSA-Problems",
  },
  {
    title: "Top SQL 50",
    desc: "Solutions to 50 SQL interview questions.",
    meta: "View",
    href: "https://github.com/anurag4002/Top-SQL-50-Qs",
  },
  {
    title: "Contact Form App",
    desc: "React and Axios contact form with validation and API integration.",
    meta: "View",
    href: "https://github.com/anurag4002/contact-form-app-react",
  },
  {
    title: "LeetCode",
    desc: "Problem solving profile.",
    meta: "Visit",
    href: "https://leetcode.com/u/the_anurag_01/",
  },
];

export const education: Row[] = [
  {
    title: "B.Tech, Information Technology",
    desc: "GL Bajaj Institute of Technology and Management, Greater Noida. CGPA 8.0/10.",
    meta: "2023 – 2026",
  },
  {
    title: "Diploma, Computer Science",
    desc: "Govt. Polytechnic Adampur Gonda. 77%.",
    meta: "2020 – 2023",
  },
];

export const certifications: Row[] = [
  {
    title: "OCI 2025 Certified Generative AI Professional",
    desc: "Oracle Cloud Infrastructure, Oracle University.",
    meta: "2025",
  },
  {
    title: "SAP Certified Associate, Back-End Developer (ABAP Cloud)",
    desc: "SAP.",
    meta: "2025",
  },
  {
    title: "SAP Certified Associate, SAP Generative AI Developer",
    desc: "SAP.",
    meta: "2025",
  },
  {
    title: "Programming in Java",
    desc: "NPTEL, 12-week course.",
    meta: "2024",
  },
  {
    title: "Database and SQL",
    desc: "Infosys.",
    meta: "2025",
  },
  {
    title: "Quantitative Research Job Simulation",
    desc: "J.P. Morgan on Forage. Price data analysis and commodity contract pricing in Python.",
    meta: "2025",
  },
];
