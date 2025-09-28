import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Folder,
  Briefcase,
  Sparkles,
  User,
  Mail,
  FileText,
  Award,
  ExternalLink,
  Linkedin,
  Phone,
  GraduationCap,
  Github
} from "lucide-react";

// -----------------------------
// DATA
// -----------------------------
const PROJECTS = [
  {
    title: "Liars Bar Game",
    blurb:
      "Debugged and resolved errors across 100+ sessions, enhancing application stability and user experience. Built a command-line interface enabling real-time interaction and tracked 1,000+ gameplay sessions. Leveraged Git for version control across 25+ feature branches while developing in IntelliJ and VS Code.",
    img: "/projects/Liar.png",
  },
  {
    title: "File-Metadata Microservice",
    blurb:
      "Generated a file metadata microservice using Node.js and Express to process uploaded files and return structured information such as file name, type, and size. Implemented file handling with Multer middleware to ensure secure and efficient uploads. Deployed on Replit, highlighting backend microservice development and API integration skills.",
    img: "/projects/meta.png",
  },
  {
    title: "Exercise-Tracker",
    blurb:
      "Created an exercise tracker API with Node.js, Express, and MongoDB to log workouts for multiple users. Designed endpoints to add exercises, track duration and dates, and retrieve logs with filtering options for flexibility. Deployed on Replit, showcasing backend database integration, RESTful API design, and full-stack problem-solving skills.",
    img: "/projects/Exercise.png",
  },
  {
    title: "URL-Shortener API",
    blurb:
      "Engineered a URL shortener microservice with Node.js, Express, and MongoDB to generate and manage compact links. Designed endpoints for URL validation, storage, and redirection, ensuring secure and efficient handling of user input. Deployed on Replit, demonstrating backend database integration and scalable REST API development.",
    img: "/projects/URL.png",
  },
  {
    title: "HeadParser Microservice",
    blurb:
      "Built a request header parser microservice using Node.js and Express to extract client IP address, preferred language, and software information from HTTP headers. Designed lightweight RESTful endpoints for fast, reliable responses and validated outputs for accuracy. Deployed the project to Replit, demonstrating backend development and API integration skills.",
    img: "/projects/Code.png",
  },
  {
    title: "Timestamp API",
    blurb:
      "Developed a backend timestamp microservice with Node.js and Express to generate and validate Unix and UTC date formats via API endpoints. Implemented robust error handling to manage invalid date requests and ensure reliable responses. Deployed the project on Replit, showcasing RESTful API design and backend development proficiency.",
    img: "/projects/Time.png",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Johnson, Hall and Delong Strategies LLC ",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Championed SQL databases and optimized ETL pipelines to automate ingestion and transformation of 10,000+ client audio transcripts, reducing processing time by 40% while maintaining high data quality.",
      "Produced Python scripts leveraging AI speech-to-text (Claude/Whispr) to transcribe 50+ hours of audio weekly with 95%+ accuracy, automatically uploading results to AWS cloud storage.",
      "Built and deployed interactive dashboards (Python, JavaScript, AWS Lambda, Pandas) for 20+ stakeholders, providing real-time monitoring of system performance and sales team effectiveness.",
      "Applied ML models (scikit-learn, Pandas) to classify conversation outcomes with 90%+ precision, identifying objection patterns and supporting training for 30+ sales representatives.",
      "Delivered actionable insights that improved sales conversion strategies, cutting failed conversions from price objections by 24% and boosting opening-line effectiveness by 15%.",
    ],
  },
  {
    role: "Full Stack Developer Intern - Nomad-Track Remote Work Travel Journal",
    company: "Tech Elevator",
    period: "Sept 2024 – May 2025",
    bullets: [
      "Constructed 15+ RESTful API endpoints and integrated backend microservices.",
      "Engineered the backend with Spring Boot in an Agile/Scrum environment, structuring over 10 service and controller classes using object-oriented principles (OOP), reducing coupling and improving maintainability by 30%.",
      "Architected a dynamic frontend with Vue.js, integrating interactive components, responsive design using HTML/CSS, and Google Maps/Mapbox APIs for real-time geolocation features.",
      "Implemented API testing with Postman and integrated CI-ready code, reducing backend defects by 20%.",
    ],
  },
  {
    role: "Full Stack Developer Intern - Salon Booking Application",
    company: "Tech Elevator",
    period: "Sept 2024 – May 2025",
    bullets: [
      "Assembled a REST API using Java and Spring Boot integrated with PostgreSQL, supporting over 1,000 client records and handling real-time booking logic and user account management.",
      "Integrated third-party phone API validation services to verify user input with 98% accuracy, reducing invalid entries.",
      "Prevented 100% of booking conflicts through robust scheduling logic and implemented full CRUD functionality.",
      "Manufactured 10+ responsive UI components using Vue.js(HTML, CSS, and JavaScript), enabling users to select services, view real-time availability, and complete bookings across desktop and mobile devices.",
      "Implemented interactive client-side features using JavaScript and styled with CSS, improving average session duration by 40% and enhancing user experience across multiple screen sizes.",
    ],
  },
  {
    role: "Professional Server",
    company: "Lindey's Restaurant and Bar",
    period: "July 2021 – Current",
    bullets: [
      "Managed 150+ guests per shift, ensuring fast and accurate request processing via POS systems—mirroring real-time input handling and data integrity in web development.",
      "Handled 5–8 concurrent tables, prioritizing and executing time-sensitive tasks under pressure—paralleling concurrent request handling in full stack apps and troubleshooting.",
    ],
  },
];

const SKILL_BUCKETS = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "SQL", "R", "TypeScript"] },
  { label: "Frontend", items: ["Vue.js", "React", "Vite", "Tailwind", "Framer Motion"] },
  {
    label: "Backend/Database",
    items: ["PostgreSQL", "Spring Boot", "MongoDB", "REST API Development", "Microservices", "API Testing", "Integration Testing", "JUnit Testing"],
  },
  {
    label: "AI/ML",
    items: ["Pandas", "scikit-learn", "Kafka", "Supervised Learning", "Unsupervised Learning", "Reinforced Learning", "Decision Trees (CART)", "Classification & Regression"],
  },
  { label: "Data", items: ["Tableau", "BigQuery", "GA4", "Google Analytics", "Data Cleaning", "Data Analysis", "Business Analysis", "Data Visualization"] },
  { label: "Cloud/DevOps", items: ["AWS", "Azure", "Kubernetes", "Git", "Docker"] },
  { label: "Collaboration", items: ["Agile/Scrum", "CI/CD", "Software Development Lifecycle (SDLC)"] },
  { label: "Tools/IDEs", items: ["IntelliJ", "VSCode", "Eclipse", "Postman", "Slack"] },
];

const CERTIFICATIONS = [
  {
    name: "J.P. Morgan - Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2025",
    img: "/certs/JPMorgan&ChaseCert.png",
    href:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68b2633f3742e611c4c10c6e_1756760146125_completion_certificate.pdf",
  },
  {
    name: "Java Foundations Professional Certificate by JetBrains",
    issuer: "JetBrains",
    year: "2025",
    img: "/certs/LinkedInJetBrainsCert.png",
    href: "https://www.linkedin.com/learning/certificates/bcc6d7ed418d8943a2e5d2b1d2b5e6a1177d9b8e175754b019280d7d05810cdb",
  },
  {
    name: "Google Cybersecurity Specialization Certification",
    issuer: "Google",
    year: "2025",
    img: "/certs/GoogleCybersecurityCert.png",
    href: "https://coursera.org/share/07959669587320e1b5627dbd50d92536",
  },
  {
    name: "Google Analytics Certification (GA4)",
    issuer: "Google Digital Academy (Skillshop)",
    year: "2025",
    img: "/certs/Ga4_Certification.png",
    href: "https://skillshop.credential.net/43e5cba5-a47d-4165-a2da-0f63afed3341#acc.ZxJBQfzh",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google",
    year: "2025",
    img: "/certs/GoogleAnalyticsCert.png",
    href: "https://www.coursera.org/account/accomplishments/specialization/1KWVMG1K20B6",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford",
    year: "2025",
    img: "/certs/Deeplearning&StanfordCert.png",
    href: "https://www.coursera.org/account/accomplishments/specialization/X6K7UXU0LM5N",
  },
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    year: "2025",
    img: "/certs/FreeCodeCampBackendCert.png",
    href: "https://freecodecamp.org/certification/doughsec/back-end-development-and-apis",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2025",
    img: "/certs/FreeCodeCampResponsiveDesign.png",
    href: "https://freecodecamp.org/certification/doughsec/responsive-web-design",
  },
  {
    name: "AWS for Developers: S3",
    issuer: "LinkedIn",
    year: "2025",
    img: "/certs/AWSS3Cert.png",
    href:
      "https://www.linkedin.com/learning/certificates/f244797f3ee7fcc6f7039a38d2ddab1d74ed5ad930cdcdb119e5324044634cf7",
  },
  {
    name: "AWS for Developers: Identity Access Management (IAM)",
    issuer: "LinkedIn",
    year: "2025",
    img: "/certs/AWSIAMCert.png",
    href:
      "https://www.linkedin.com/learning/certificates/bc92e6d4294dab6ce1034523401e9aacddbdbb8b0714eee26be3cf31ec8d9cd5",
  },
  {
    name: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    year: "2025",
    img: "/certs/HFUnit1Cert.png",
    href:
      "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/DoughSec/2025-08-26.png",
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    year: "2025",
    img: "/certs/SimpliLearnAICert.png",
    href: "https://simpli-web.app.link/e/EDcr3F9EbWb",
  },
  {
    name: "Learn CSS Course",
    issuer: "Codecademy",
    year: "2025",
    img: "/certs/CACSSCert.png",
    href:
      "https://www.codecademy.com/profiles/DoughSec/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
  },
  {
    name: "Learn HTML Course",
    issuer: "Codecademy",
    year: "2025",
    img: "/certs/CAHTMLCert.png",
    href:
      "https://www.codecademy.com/profiles/DoughSec/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
  },
  {
    name: "Learn Java Course",
    issuer: "Codecademy",
    year: "2025",
    img: "/certs/CAJavaCert.png",
    href:
      "https://www.codecademy.com/profiles/DoughSec/certificates/d3f89367b558583e361640f778191345",
  },
  {
    name: "Learn SQL Course",
    issuer: "Codecademy",
    year: "2025",
    img: "/certs/CASQLCert.png",
    href:
      "https://www.codecademy.com/profiles/DoughSec/certificates/042a4e5884e3eb6ea1f2a12be6abb851",
  },
  {
    name: "Learn How to Code Course",
    issuer: "Codecademy",
    year: "2025",
    img: "/certs/CACodeCert.png",
    href:
      "https://www.codecademy.com/profiles/DoughSec/certificates/11a686a7fd57b8c214f7f92749388d42",
  },
  {
    name: "Learn What to Learn Course",
    issuer: "Codecademy",
    year: "2025",
    img: "/certs/CALearnCert.png",
    href:
      "https://www.codecademy.com/profiles/DoughSec/certificates/26e34ccfe2bb60dad6d46d3bd7ce42e7",
  },
];

// -----------------------------
// NEW: EDUCATION
// -----------------------------
const EDUCATION = [
  // Replace these with your actual education entries
  {
    degree: "Full-Stack Java Web Development",
    school: "Tech Elevator",
    period: "Sept 2024 – May 2025",
    bullets: [
      "Full-stack program designing software systems and solutions with 800+ hours of application and devlopment.",
      // "Capstones: Nomad-Track Travel Journal, Salon Booking Application",
    ],
  },
  {
    degree: "B.S. Computer Engineering",
    school: "The Ohio State University",
    period: "Aug 2019 - May 2022",
    bullets: ["Relevant courses: Differential Equations, Software I/II, Physics I/II, Data structures and algorithms, Fundamentals of Engineering"],
  },
  {
    degree: "A.S. Computer Engineering",
    school: "Columbus State Community College",
    period: "Aug 2018 - May 2019",
    bullets: ["Relevant Courses: Calculus I/II/III, Probability/Statistics, Engineering Mathematics, Computer Fundamentals, Intro to programming logic"],
  },
  // Example placeholder if you want to add university details:
  // {
  //   degree: "B.S. in Computer Science",
  //   school: "Your University",
  //   period: "20XX – 20XX",
  //   bullets: ["Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems"],
  // },
];

// -----------------------------
// NAVBAR
// -----------------------------
function Navbar() {
  const links = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/projects", label: "Projects", icon: Folder },
    { to: "/experience", label: "Experience", icon: Briefcase },
    { to: "/skills", label: "Skills", icon: Sparkles },
    { to: "/certifications", label: "Certifications", icon: Award },
    { to: "/education", label: "Education", icon: GraduationCap },
    { to: "/about", label: "About", icon: User },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-lg text-white">
          Addison Doseck
        </NavLink>

        {/* Desktop nav (unchanged) */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 ${
                    isActive ? "text-sky-400" : "text-neutral-300 hover:text-sky-400"
                  }`
                }
              >
                <Icon size={16} /> {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/resume_v2e.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-sky-400"
            >
              <FileText size={16} /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile nav (only visible < md) */}
        <div className="md:hidden relative w-full ml-4">
          <ul
            className="flex items-center gap-4 text-sm overflow-x-auto whitespace-nowrap hide-scrollbar pr-8"
            style={{ WebkitOverflowScrolling: "touch" }}
            aria-label="Site sections"
          >
            {links.map(({ to, label, icon: Icon }) => (
              <li key={to} className="shrink-0">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-2 py-1.5 rounded-md ${
                      isActive ? "text-sky-400 bg-white/5" : "text-neutral-300 hover:text-sky-400"
                    }`
                  }
                >
                  <Icon size={16} /> {label}
                </NavLink>
              </li>
            ))}
            <li className="shrink-0">
              <a
                href="/resume_v2e.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md text-neutral-300 hover:text-sky-400"
              >
                <FileText size={16} /> Resume
              </a>
            </li>
          </ul>

          {/* subtle edge fade to hint “scroll” */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/80 to-transparent" />
        </div>
      </div>
    </nav>
  );
}


// -----------------------------
// PAGES
// -----------------------------
function Home() {
  const heroBg = "/landing.jpg";
  return (
    <section className="min-h-[75vh] relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative text-center max-w-3xl mx-auto px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Hi, I’m Addison Doseck.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-lg text-neutral-200"
        >
          I build fast, accessible web experiences and data-driven products.
        </motion.p>

        {/* CTA buttons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <NavLink
            to="/projects"
            className="px-4 py-2 rounded-full bg-sky-600 text-white shadow hover:shadow-lg transition"
          >
            View Projects
          </NavLink>
          <a
            href="/resume_v2e.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-sky-600 text-sky-400 hover:bg-sky-600/10 transition"
          >
            Open Résumé
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-sm transition-all hover:shadow-lg hover:border-sky-400/60"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <img src={p.img} alt={p.title} className="w-full aspect-[16/9] object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-neutral-300">{p.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        <ol className="relative border-l border-neutral-700 ml-3">
          {EXPERIENCE.map((e, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="mb-10 ml-6"
            >
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-sm transition-all hover:shadow-lg hover:border-sky-400/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="text-sm text-neutral-400">{e.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-neutral-400">{e.company}</p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-neutral-300">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_BUCKETS.map((bucket) => (
            <motion.div
              key={bucket.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-sm transition-all hover:shadow-lg hover:border-sky-400/60"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-sky-400" />
                <h3 className="text-lg font-semibold">{bucket.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {bucket.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-sm bg-neutral-800 text-neutral-200 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <Award size={22} className="text-sky-400" />
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((c) => (
            <motion.article
              key={c.name}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-sm transition-all hover:shadow-lg hover:border-sky-400/60"
            >
              <a href={c.href || c.img} target="_blank" rel="noreferrer" className="group">
                <img src={c.img} alt={c.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-4">
                  <h3 className="text-base font-semibold">{c.name}</h3>
                  <p className="text-sm text-neutral-400">
                    {c.issuer} • {c.year}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 text-sky-400 text-sm">
                    View certificate <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// NEW: EDUCATION PAGE
// -----------------------------
function Education() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <GraduationCap size={22} className="text-sky-400" />
          Education
        </h2>

        <ol className="relative border-l border-neutral-700 ml-3">
          {EDUCATION.map((ed, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="mb-10 ml-6"
            >
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-sm transition-all hover:shadow-lg hover:border-sky-400/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{ed.degree}</h3>
                  <span className="text-sm text-neutral-400">{ed.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-neutral-400">{ed.school}</p>
                {ed.bullets?.length > 0 && (
                  <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-neutral-300">
                    {ed.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile image slot */}
        <div className="flex-shrink-0">
          <img
            src="/Addison Doseck2.jpeg"
            alt="Addison Doseck portrait"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-sky-400 shadow-lg"
            loading="eager"
            decoding="async"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg text-neutral-300">
            I'm a full-stack software engineer specializing in Java, Python, JavaScript/TypeScript, React, Vue.js, and modern
            databases (SQL/NoSQL). I design and build scalable APIs, cloud-native applications(AWS), and intuitive frontends that
            deliver measurable business impact. Passionate about solving complex problems with clean, efficient code and driving
            results through Agile collaboration, CI/CD pipelines, and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Let’s connect</h2>
        <h3>(click to view)</h3>
        {/* Use flex + wrap + min widths so nothing overlaps */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Email */}
          <a
            href="mailto:addisondoseck@gmail.com"
            className="min-w-[260px] sm:min-w-[300px] flex-1 max-w-[420px]
                       inline-flex items-center justify-center gap-2
                       px-4 py-3 rounded-xl border border-white/10 bg-neutral-900
                       hover:border-sky-400/60 hover:shadow-lg transition"
            title="Email Addison"
          >
            <Mail size={18} className="text-sky-400" />
            <span className="text-neutral-200">addisondoseck@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/addisondoseck/"
            target="_blank"
            rel="noreferrer"
            className="min-w-[260px] sm:min-w-[300px] flex-1 max-w-[420px]
                       inline-flex items-center justify-center gap-2
                       px-4 py-3 rounded-xl border border-white/10 bg-neutral-900
                       hover:border-sky-400/60 hover:shadow-lg transition"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} className="text-sky-400" />
            <span className="text-neutral-200">linkedin.com/in/addisondoseck</span>
          </a>

          {/* Phone */}
          <a
            href="tel:6148049755"
            className="min-w-[260px] sm:min-w-[300px] flex-1 max-w-[420px]
                       inline-flex items-center justify-center gap-2
                       px-4 py-3 rounded-xl border border-white/10 bg-neutral-900
                       hover:border-sky-400/60 hover:shadow-lg transition"
            title="Call Addison"
          >
            <Phone size={18} className="text-sky-400" />
            <span className="text-neutral-200">(614) 804-9755</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/DoughSec"
            target="_blank"
            rel="noreferrer"
            className="min-w-[260px] sm:min-w-[300px] flex-1 max-w-[420px]
                       inline-flex items-center justify-center gap-2
                       px-4 py-3 rounded-xl border border-white/10 bg-neutral-900
                       hover:border-sky-400/60 hover:shadow-lg transition"
            title="GitHub Profile"
          >
            <Github size={18} className="text-sky-400" />
            <span className="text-neutral-200">github.com/DoughSec</span>
          </a>
        </div>
      </div>
    </section>
  );
}


// -----------------------------
// APP ROOT
// -----------------------------
export default function App() {
  return (
    <div className="min-h-screen font-sans bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} /> {/* NEW */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="pb-10 px-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Addison Doseck. All rights reserved.
      </footer>
    </div>
  );
}
