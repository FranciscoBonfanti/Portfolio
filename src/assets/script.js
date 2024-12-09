const translations = {
  es: {
    title: "Portfolio | Francisco Bonfanti",
    description: "Portafolio personal de Francisco Bonfanti",
    navbar: {
      home: "Inicio",
      about: "Sobre Mí",
      education: "Formación",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      title: "Francisco Bonfanti",
      subtitle: "Desarrollador de Software",
      description: "Aplicando conocimientos para crecer en el ámbito laboral.",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy Francisco Bonfanti, desarrollador de software, apasionado por la tecnología y el aprendizaje constante. Me interesa aplicar mis conocimientos para crecer profesionalmente y colaborar en proyectos innovadores.",
    },
    education: {
      title: "Formación Académica",
      cards: [
        "Tecnicatura en Desarrollo de Software",
        "Administración y Economía",
        "Desarrollo Web, Coderhouse",
        "Curso de JavaScript",
        "Curso de Angular",
      ],
    },
    experience: {
      title: "Experiencia Laboral",
      items: [
        { title: "Atención al Público", company: "Teniente Dan" },
        { title: "Gestión de Pedidos", company: "Fiambrería Don Pepe" },
        { title: "Bartender", company: "Simonah Disco" },
        { title: "Bartender", company: "Menta Food and Roll" },
      ],
    },
    skills: {
      title: "Habilidades",
      list: [
        "Trabajo en equipo",
        "Buena comunicación",
        "Resolución de problemas",
        "Atención al público",
        "Buena organización",
      ],
    },
    contact: {
      title: "Contacto",
      form: {
        emailLabel: "Tu correo electrónico:",
        messageLabel: "Tu mensaje:",
        submit: "Enviar",
      },
    },
    languageToggle: "Inglés",
  },
  en: {
    title: "Portfolio | Francisco Bonfanti",
    description: "Personal portfolio of Francisco Bonfanti",
    navbar: {
      home: "Home",
      about: "About Me",
      education: "Education",
      experience: "Work Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      title: "Francisco Bonfanti",
      subtitle: "Software Developer",
      description: "Applying knowledge to grow in the professional field.",
    },
    about: {
      title: "About Me",
      description:
        "I am Francisco Bonfanti, a software developer passionate about technology and continuous learning. I am interested in applying my knowledge to grow professionally and collaborate on innovative projects.",
    },
    education: {
      title: "Education",
      cards: [
        "Software Development Technician",
        "Administration and Economics",
        "Web Development, Coderhouse",
        "JavaScript Course",
        "Angular Course",
      ],
    },
    experience: {
      title: "Work Experience",
      items: [
        { title: "Customer Service", company: "Teniente Dan" },
        { title: "Order Management", company: "Fiambrería Don Pepe" },
        { title: "Bartender", company: "Simonah Disco" },
        { title: "Bartender", company: "Menta Food and Roll" },
      ],
    },
    skills: {
      title: "Skills",
      list: [
        "Teamwork",
        "Good communication",
        "Problem solving",
        "Customer service",
        "Good organization",
      ],
    },
    contact: {
      title: "Contact",
      form: {
        emailLabel: "Your email:",
        messageLabel: "Your message:",
        submit: "Send",
      },
    },
    languageToggle: "Español",
  },
};

// Cambiar idioma
const changeLanguage = (lang) => {
  const { navbar, hero, about, education, experience, skills, contact } =
    translations[lang];

  document.title = translations[lang].title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", translations[lang].description);

  // Navbar
  const navLinks = document.querySelectorAll(".navbar-links .nav-link");
  const navKeys = ["home", "about", "education", "experience", "skills", "contact"];
  navLinks.forEach((link, index) => {
    link.textContent = navbar[navKeys[index]];
  });

  // Hero Section
  document.querySelector(".hero .title").textContent = hero.title;
  document.querySelector(".hero .subtitle").textContent = hero.subtitle;
  document.querySelector(".hero .description").textContent = hero.description;

  // About Section
  document.querySelector("#about .section-title").textContent = about.title;
  document.querySelector("#about .about-description").textContent =
    about.description;

  // Education Section
  document.querySelector("#education .section-title").textContent =
    education.title;
  const educationCards = document.querySelectorAll(
    "#education .education-cards .card h3"
  );
  educationCards.forEach((card, index) => {
    card.textContent = education.cards[index];
  });

  // Experience Section
  document.querySelector("#experience .section-title").textContent =
    experience.title;
  const experienceItems = document.querySelectorAll(
    "#experience .experience-item h3"
  );
  experienceItems.forEach((item, index) => {
    item.textContent = experience.items[index].title;
  });

  // Skills Section
  document.querySelector("#skills .section-title").textContent = skills.title;
  const skillsList = document.querySelectorAll("#skills .skills-list li");
  skillsList.forEach((skill, index) => {
    skill.textContent = skills.list[index];
  });

  // Contact Section
  document.querySelector("#contact .section-title").textContent = contact.title;
  document.querySelector("#email").previousElementSibling.textContent =
    contact.form.emailLabel;
  document.querySelector("#message").previousElementSibling.textContent =
    contact.form.messageLabel;
  document.querySelector(".submit-btn").textContent = contact.form.submit;

  // Language Toggle
  document.querySelector("#language-toggle").textContent =
    translations[lang].languageToggle;
};

// Inicializar idioma
let currentLang = "es";
document
  .getElementById("language-toggle")
  .addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    changeLanguage(currentLang);
  });

// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .tech-item");

  const observerOptions = {
    root: null, // viewport completo
    threshold: 0.2, // activar cuando se vea el 20% de la sección
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Agregar clase de animación cuando la sección está visible
        entry.target.classList.add("visible");
      } else {
        // Eliminar la clase cuando salga del viewport (para animaciones reversibles)
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
