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
      title: "Backend & DevOps Engineer",
      location: "Barcelona, Spain",
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
      title: "Experience",
      nter: {
        position: "Backend Engineer",
        description: [
          "Designed and developed a scalable system to automatically validate code submissions, reducing manual correction time.",
          "Built backend microservices using Java Spring Boot with asynchronous communication via RabbitMQ.",
          "Orchestration of containerized applications using Docker and Kubernetes.",
          "Integrated CI/CD pipelines (GitLab) and automated infrastructure on AWS."
        ]
      },
      feeder: {
        position: "Backend Developer",
        description: [
          "Developed and maintained REST APIs in a microservices architecture using Spring Boot and NestJS communicated with RabbitMQ.",
          "Migration from monolith to microservices, applying Hexagonal Architecture and DDD.",
          "Designed and managed relational and non-relational databases (MySQL, PostgreSQL, MongoDB, Redis).",
          "Implemented CI/CD pipelines and deployed cloud infrastructure on AWS."
        ]
      },
      foxize: {
        position: "Fullstack Developer",
        description: [
          "Developed and maintained a SaaS e-learning platform using Symfony (PHP).",
          "Applied SOLID principles and improved code maintainability.",
          "Development of frontend functionalities with HTML, CSS, and JavaScript with Twig templates."
        ]
      }
    },
    skills: {
      title: "Skills & Technologies",
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      devops: "DevOps",
      tools: "Tools",
      testing: "Testing",
      architectures: "Architectures",
      other: "Other"
    },
    certifications: {
      title: "Certifications",
      description: "Currently I am getting additional cloud and infrastructure certifications to further enhance my knowledge and expertise."
    },
    contact: {
      title: "Get In Touch",
      description: "I am open to new opportunities. Feel free to reach out if you would like to know more about my work, or you think we could discuss for potential collaborations.",
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
      title: "Ingeniero Backend & DevOps",
      location: "Barcelona, España",
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
      title: "Experiencia",
      nter: {
        position: "Ingeniero Backend",
        description: [
          "Diseñé y desarrollé un sistema escalable para validar automáticamente envíos de código, reduciendo el tiempo de corrección manual.",
          "Construí microservicios backend usando Java Spring Boot con comunicación asíncrona vía RabbitMQ.",
          "Orquestación de aplicaciones containerizadas usando Docker y Kubernetes.",
          "Integré pipelines CI/CD (GitLab) e infraestructura automatizada en AWS."
        ]
      },
      feeder: {
        position: "Desarrollador Backend",
        description: [
          "Desarrollé y mantuve APIs REST en arquitectura de microservicios usando Spring Boot y NestJS comunicados con RabbitMQ.",
          "Migración de monolito a microservicios, aplicando Arquitectura Hexagonal y DDD.",
          "Diseñé y gestioné bases de datos relacionales y no relacionales (MySQL, PostgreSQL, MongoDB, Redis).",
          "Implementé pipelines CI/CD e infraestructura cloud en AWS."
        ]
      },
      foxize: {
        position: "Desarrollador Fullstack",
        description: [
          "Desarrollé y mantuve una plataforma SaaS de e-learning usando Symfony (PHP).",
          "Apliqué principios SOLID y mejoré la mantenibilidad del código.",
          "Desarrollo de funcionalidades frontend con HTML, CSS y JavaScript con plantillas Twig."
        ]
      }
    },
    skills: {
      title: "Habilidades y Tecnologías",
      languages: "Lenguajes",
      frameworks: "Frameworks",
      databases: "Bases de Datos",
      devops: "DevOps",
      tools: "Herramientas",
      testing: "Testing",
      architectures: "Arquitecturas",
      other: "Otros"
    },
    certifications: {
      title: "Certificaciones",
      description: "Actualmente estoy obteniendo certificaciones adicionales en la nube y en infraestructura para mejorar aún más mis conocimientos y experiencia."
    },
    contact: {
      title: "Contacto",
      description: "Estoy abierto a nuevas oportunidades. No dudes en contactarme si quieres saber más sobre mi trabajo o si crees que podríamos hablar sobre posibles colaboraciones.",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación"
    },
    footer: {
      builtWith: "Creado por"
    }
  }
};

export type Language = "en" | "es";
export type TranslationKeys = typeof translations.en;
