export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      hello: "Hello, I am",
      contactMe: "Contact Me",
      moreAboutMe: "More about me"
    },
    about: {
      title: "About Me",
      summary: "Backend and DevOps Engineer with experience in designing and implementing scalable architectures. Specialized in Java, Go, and Node.js with a strong focus on cloud-native solutions, CI/CD, and automation.",
      summary2: "Passionate about building robust and scalable systems. I enjoy solving complex problems and working with modern technologies to deliver high-quality solutions.",
      whatIDo: "What I Do",
      backend: "Backend Development with Java, Go & Node.js",
      cloud: "Cloud Architecture on AWS & GCP",
      containers: "Containerization & Orchestration (Docker, K8s)",
      cicd: "CI/CD Pipeline Design & Implementation",
      iac: "Infrastructure as Code with Terraform",
      yearsExperience: "Years Experience",
      projects: "Projects"
    },
    experience: {
      title: "Experience"
    },
    skills: {
      title: "Skills & Technologies"
    },
    certifications: {
      title: "Certifications",
      description: "Currently pursuing additional cloud and infrastructure certifications to further enhance my expertise."
    },
    contact: {
      title: "Get In Touch",
      description: "I am open to new opportunities. Feel free to reach out if you would like to know more about my work, discuss potential collaborations, or just to say hello.",
      email: "Email",
      phone: "Phone",
      location: "Location"
    },
    footer: {
      builtWith: "Built by"
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      certifications: "Certificaciones",
      contact: "Contacto"
    },
    hero: {
      hello: "Hola, soy",
      contactMe: "Contáctame",
      moreAboutMe: "Más sobre mí"
    },
    about: {
      title: "Sobre mí",
      summary: "Ingeniero Backend y DevOps con experiencia en el diseño e implementación de arquitecturas escalables. Especializado en Java, Go y Node.js con un fuerte enfoque en soluciones cloud-native, CI/CD y automatización.",
      summary2: "Apasionado por construir sistemas robustos y escalables. Disfruto resolviendo problemas complejos y trabajando con tecnologías modernas para ofrecer soluciones de alta calidad.",
      whatIDo: "Qué hago",
      backend: "Desarrollo Backend con Java, Go y Node.js",
      cloud: "Arquitectura Cloud en AWS y GCP",
      containers: "Contenedores y Orquestación (Docker, K8s)",
      cicd: "Diseño e Implementación de Pipelines CI/CD",
      iac: "Infraestructura como Código con Terraform",
      yearsExperience: "Años de Experiencia",
      projects: "Proyectos"
    },
    experience: {
      title: "Experiencia"
    },
    skills: {
      title: "Habilidades y Tecnologías"
    },
    certifications: {
      title: "Certificaciones",
      description: "Actualmente estoy obteniendo certificaciones adicionales en cloud e infraestructura para seguir mejorando mi experiencia."
    },
    contact: {
      title: "Contacto",
      description: "Estoy abierto a nuevas oportunidades. No dudes en contactarme si quieres saber más sobre mi trabajo, discutir posibles colaboraciones o simplemente para saludar.",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación"
    },
    footer: {
      builtWith: "Creado por"
    }
  }
};

export const experienceTranslations = {
  en: [
    {
      id: 1,
      company: "Nter Tech Services",
      position: "Backend Engineer",
      period: "May 2025 - Present",
      description: [
        "Designed and developed a scalable system to automatically validate code submissions, reducing manual correction time.",
        "Built backend microservices using Java Spring Boot with asynchronous communication via RabbitMQ.",
        "Orchestration of containerized applications using Docker and Kubernetes.",
        "Integrated CI/CD pipelines (GitLab) and automated infrastructure on AWS."
      ],
      tech: ["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]
    },
    {
      id: 2,
      company: "Feeder The Reaction SaaS",
      position: "Backend Developer",
      period: "Oct 2022 - Apr 2025",
      description: [
        "Developed and maintained REST APIs in a microservices architecture using Spring Boot and NestJS communicated with RabbitMQ.",
        "Migration from monolith to microservices, applying Hexagonal Architecture and DDD.",
        "Designed and managed relational and non-relational databases (MySQL, PostgreSQL, MongoDB, Redis).",
        "Implemented CI/CD pipelines and deployed cloud infrastructure on AWS."
      ],
      tech: ["Spring Boot", "Java", "TypeScript", "Node.js", "NestJS", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "Git", "BitBucket"]
    },
    {
      id: 3,
      company: "Foxize Cloud",
      position: "Fullstack Developer",
      period: "Sep 2021 - Oct 2022",
      description: [
        "Developed and maintained a SaaS e-learning platform using Symfony (PHP).",
        "Applied SOLID principles and improved code maintainability.",
        "Development of frontend functionalities with HTML, CSS, and JavaScript with Twig templates."
      ],
      tech: ["Symfony", "PHP", "Twig", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]
    }
  ],
  es: [
    {
      id: 1,
      company: "Nter Tech Services",
      position: "Backend Engineer",
      period: "Mayo 2025 - Actualidad",
      description: [
        "Diseñé y desarrollé un sistema escalable para validar automáticamente envíos de código, reduciendo el tiempo de corrección manual.",
        "Construí microservicios backend usando Java Spring Boot con comunicación asíncrona vía RabbitMQ.",
        "Orquestación de aplicaciones containerizadas usando Docker y Kubernetes.",
        "Integré pipelines CI/CD (GitLab) e infraestructura automatizada en AWS."
      ],
      tech: ["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]
    },
    {
      id: 2,
      company: "Feeder The Reaction SaaS",
      position: "Backend Developer",
      period: "Oct 2022 - Abr 2025",
      description: [
        "Desarrollé y mantuve APIs REST en arquitectura de microservicios usando Spring Boot y NestJS comunicados con RabbitMQ.",
        "Migración de monolito a microservicios, aplicando Arquitectura Hexagonal y DDD.",
        "Diseñé y gestioné bases de datos relacionales y no relacionales (MySQL, PostgreSQL, MongoDB, Redis).",
        "Implementé pipelines CI/CD e infraestructura cloud en AWS."
      ],
      tech: ["Spring Boot", "Java", "TypeScript", "Node.js", "NestJS", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "Git", "BitBucket"]
    },
    {
      id: 3,
      company: "Foxize Cloud",
      position: "Fullstack Developer",
      period: "Sep 2021 - Oct 2022",
      description: [
        "Desarrollé y mantuve una plataforma SaaS de e-learning usando Symfony (PHP).",
        "Apliqué principios SOLID y mejoré la mantenibilidad del código.",
        "Desarrollo de funcionalidades frontend con HTML, CSS y JavaScript con plantillas Twig."
      ],
      tech: ["Symfony", "PHP", "Twig", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]
    }
  ]
};

export type Language = "en" | "es";
export type TranslationKeys = typeof translations.en;
