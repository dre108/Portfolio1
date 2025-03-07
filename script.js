// Portfolio Data
const portfolioData = {
  home: {
    overview:
      "I am a software developer from the south side of Chicago, specializing in full-stack development and modern web technologies. I strive to create impactful software that solves real-world problems.",
    address: "1234 S Code St, Chicago, IL",
    // "Deondre "
    contact: {
      email: "deondre.kinsey@gmail.com",
      github: "https://github.com/dre108",
      linkedin: "https://www.linkedin.com/in/deondrekinsey/",
    },
  },
  about: {
    overview:
      "Hello, I'm Deondre Kinsey. I'm a passionate software developer with a strong focus on creating efficient, scalable, and user-friendly applications. My journey in tech started with a deep curiosity for problem-solving and has evolved into a career building innovative solutions. I thrive in collaborative environments and enjoy tackling complex challenges with modern technologies.",
    skills: [
      "Full-stack Development",
      "Problem Solving",
      "Team Collaboration",
      "Agile Methodologies",
      "RESTful APIs",
      "UI/UX Design",
      "Cloud Computing (AWS, GCP)",
    ],
    tools: ["Git", "Docker", "Jest", "Webpack", "GraphQL"],
  },
  work: {
    overview:
      "With over a year of professional experience in software engineering, I've had the opportunity to work on diverse projects that have enhanced my technical skills and business acumen. I've built full-stack applications, managed databases, and collaborated in agile teams to deliver quality software.",
    experience: [
      {
        company: "Tech Solutions Inc.",
        role: "Full-Stack Developer",
        period: "Jan 2024 - Present",
        responsibilities: [
          "Developed and maintained multiple full-stack applications using React, Node.js, and PostgreSQL.",
          "Led the design and implementation of new features based on client specifications.",
          "Collaborated with UX/UI designers to improve the user experience of key products.",
          "Optimized application performance and scalability for better user experience.",
        ],
      },
      {
        company: "Code Works Studio",
        role: "Junior Software Engineer",
        period: "Jun 2023 - Dec 2023",
        responsibilities: [
          "Worked in a cross-functional team to develop web applications using TypeScript, React, and MongoDB.",
          "Built RESTful APIs to handle complex data interactions between the frontend and backend.",
          "Integrated third-party services and APIs to extend the functionality of applications.",
          "Wrote unit tests and participated in code reviews to ensure high-quality code delivery.",
        ],
      },
    ],
    projects: [
      {
        id: 1,
        title: "JavaScript Development",
        description:
          "Building modern web applications with a focus on performance and user experience. This project demonstrates my ability to create dynamic and efficient user interfaces.",
        skills: ["Problem Solving", "Clean Code", "Performance Optimization"],
        technologies: [
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "MongoDB",
        ],
        link: "https://github.com/deondrekinsey/javascript-dev-project",
      },
      {
        id: 2,
        title: "Database Management",
        description:
          "Designing and implementing efficient database solutions for scalable applications. This includes database normalization, performance tuning, and query optimization.",
        skills: ["Database Design", "Query Optimization", "Data Modeling"],
        technologies: ["SQL", "PostgreSQL", "MongoDB"],
        link: "https://github.com/deondrekinsey/database-management",
      },
      {
        id: 3,
        title: "E-Commerce Web App",
        description:
          "Developed a full-stack e-commerce platform with user authentication, product management, and payment integration. Focused on responsive design and smooth checkout experience.",
        skills: [
          "React",
          "Node.js",
          "MongoDB",
          "RESTful API",
          "Authentication",
          "Payment Gateway Integration",
        ],
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        link: "https://github.com/deondrekinsey/e-commerce-app",
      },
    ],
  },
  testimonials: {
    overview:
      "As a full-stack developer specializing in JavaScript, I've had the pleasure of working with amazing teams and clients. Here's what they have to say about our collaboration.",
    quotes: [
      {
        text: "Deondre is an exceptional developer with a keen eye for detail. His ability to dive into both frontend and backend is invaluable.",
        author: "Project Manager, Tech Solutions Inc.",
      },
      {
        text: "Working with Deondre was a pleasure! He consistently delivered high-quality code while keeping the user experience in mind.",
        author: "Lead Designer, Code Works Studio",
      },
    ],
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Chicago",
    graduationYear: 2023,
    relevantCourses: [
      "Data Structures and Algorithms",
      "Web Development",
      "Database Management Systems",
      "Software Engineering Principles",
      "Cloud Computing",
    ],
  },
  certifications: [
    {
      title: "AWS Certified Developer – Associate",
      year: 2024,
    },
    {
      title: "MongoDB Certified Developer",
      year: 2023,
    },
  ],
};

// DOM Elements
const elements = {
  home: {
    overview: document.getElementById("homeOverview"),
    address: document.getElementById("homeAddress"),
    contact: document.getElementById("homeContact"),
  },
  about: document.getElementById("aboutOverview"),
  work: {
    overview: document.getElementById("workOverview"),
    projects: document.getElementById("workProjects"),
  },
  testimonials: document.getElementById("testimonialsOverview"),
};

// Render Functions
function renderHome() {
  elements.home.overview.textContent = portfolioData.home.overview;
  elements.home.address.textContent = portfolioData.home.address;

  // Display individual contact properties
  elements.home.contact.innerHTML = `
      <p>Email: <a href="mailto:${portfolioData.home.contact.email}">${portfolioData.home.contact.email}</a></p>
      <p>GitHub: <a href="${portfolioData.home.contact.github}" target="https://github.com/dre108">@Dre108</a></p>
      <p>LinkedIn: <a href="${portfolioData.home.contact.linkedin}" target="_blank">Deondre Kinsey</a></p>
    `;
}

function renderAbout() {
  elements.about.textContent = portfolioData.about.overview;
}

function renderWork() {
  elements.work.overview.textContent = portfolioData.work.overview;

  const projectsHTML = portfolioData.work.projects
    .map(
      (project) => `
      <article class="project-card" id="project-${project.id}">
          <h3 class="project-card__title">${project.title}</h3>
          <p>${project.description}</p>
          
          <h4>Skills</h4>
          <ul class="project-card__list">
              ${project.skills
                .map(
                  (skill) => `
                  <li class="project-card__item">${skill}</li>
              `
                )
                .join("")}
          </ul>
          
          <h4>Technologies</h4>
          <ul class="project-card__list">
              ${project.technologies
                .map(
                  (tech) => `
                  <li class="project-card__item">${tech}</li>
              `
                )
                .join("")}
          </ul>
      </article>
  `
    )
    .join("");

  elements.work.projects.innerHTML = projectsHTML;
}

function renderTestimonials() {
  elements.testimonials.textContent = portfolioData.testimonials.overview;
}

// Initialize
function init() {
  renderHome();
  renderAbout();
  renderWork();
  renderTestimonials();

  // Add smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Start the application
document.addEventListener("DOMContentLoaded", init);

// Toggle button (Dark Mode)
const toggle = document.getElementById("myToggle");
const body = document.body;

toggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    updateProjectCardColors(true);
    console.log("Dark Mode Enabled");
  } else {
    body.classList.remove("dark-mode");
    updateProjectCardColors(false);
    console.log("Dark Mode Disabled");
  }
});

function updateProjectCardColors(isDarkMode) {
  document.querySelectorAll(".project-card").forEach((card) => {
    if (isDarkMode) {
      card.style.backgroundColor = "#2d3748"; // Dark mode color
      card.style.borderColor = "#4a5568";
      card.style.color = "#e2e8f0";
    } else {
      card.style.backgroundColor = ""; // Revert to default (CSS controlled)
      card.style.borderColor = "";
      card.style.color = "";
    }
  });
}
