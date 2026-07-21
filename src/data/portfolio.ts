export const personalInfo = {
  name: "Albert Menéndez González",
  photo: "/photo.jpg",
  email: "albertmenendezg@gmail.com",
  phone: "+34 678 630 197",
  github: "https://github.com/albertmenendezg",
  linkedin: "https://www.linkedin.com/in/albert-menendez-gonzalez",
  location: "Barcelona, Spain",
  startWorking: "2021-09-01"
};

export const experience = [
  {
    id: 1,
    company: "Nter Tech Services",
    startDate: new Date(Date.UTC(2025, 4, 1)),
    endDate: null,
    positionKey: "experience.nter.position",
    projects: [
      {
        nameKey: "experience.nter.projects.oysho.name",
        descriptionKey: "experience.nter.projects.oysho.description",
        tasksKey: "experience.nter.projects.oysho.tasks",
        startDate: new Date(Date.UTC(2026, 3, 1)),
        endDate: null,
        tech: ["Java", "SpringBoot", "React", "Kafka", "Docker", "AWS", "GitHub Actions", "Agentic AI", "Claude Code", "Codex"]
      },
      {
        nameKey: "experience.nter.projects.codebench.name",
        descriptionKey: "experience.nter.projects.codebench.description",
        tasksKey: "experience.nter.projects.codebench.tasks",
        startDate: new Date(Date.UTC(2025, 8, 1)),
        endDate: new Date(Date.UTC(2026, 3, 1)),
        tech: ["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]
      }
    ]
  },
  {
    id: 2,
    company: "Feeder The Reaction SaaS",
    startDate: new Date(Date.UTC(2022, 9, 1)),
    endDate: new Date(Date.UTC(2025, 3, 1)),
    positionKey: "experience.feeder.position",
    projects: [
      {
        nameKey: "experience.feeder.projects.feeder-health.name",
        descriptionKey: "experience.feeder.projects.feeder-health.description",
        tasksKey: "experience.feeder.projects.feeder-health.tasks",
        startDate: new Date(Date.UTC(2024, 8, 1)),
        endDate: new Date(Date.UTC(2025, 3, 1)),
        tech: ["NestJS", "RabbitMQ", "WebSockets", "Socket.io", "AWS", "React", "TypeScript", "Bitbucket"]
      },
      {
        nameKey: "experience.feeder.projects.feeder-metrics.name",
        descriptionKey: "experience.feeder.projects.feeder-metrics.description",
        tasksKey: "experience.feeder.projects.feeder-metrics.tasks",
        startDate: new Date(Date.UTC(2022, 9, 1)),
        endDate: new Date(Date.UTC(2024, 8, 1)),
        tech: ["Spring Boot", "Java", "TypeScript", "Node.js", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "Git", "BitBucket"]
      }
    ]
  },
  {
    id: 3,
    company: "Foxize Cloud",
    startDate: new Date(Date.UTC(2021, 8, 1)),
    endDate: new Date(Date.UTC(2022, 9, 1)),
    positionKey: "experience.foxize.position",
    projects: [
      {
        nameKey: "experience.foxize.projects.foxize-cloud.name",
        descriptionKey: "experience.foxize.projects.foxize-cloud.description",
        tasksKey: "experience.foxize.projects.foxize-cloud.tasks",
        startDate: new Date(Date.UTC(2021, 8, 1)),
        endDate: new Date(Date.UTC(2022, 9, 1)),
        tech: ["Symfony", "PHP", "Twig", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]
      }
    ]
  }
];

export const skills = {
  languages: ["Java", "JavaScript", "TypeScript", "Go", "Python", "PHP"],
  frameworks: ["SpringBoot", "Node.js", "NestJS", "React", "Next.js", "Symfony"],
  databases: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
  devops: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitLab CI", "GitHub Actions", "Bitbucket pipelines", "Linux"],
  testing: ["Unit Testing", "Integration Testing", "E2E Testing", "TDD", "JUnit", "Jest", "Mockito", "Cucumber", "PHPUnit", "Postman", "Playwright", "SonarQube"],
  ai: ["Prompt Engineering", "Agents", "MCP", "Codex", "Claude Code", "Opencode", "Ollama"],
  infrastructure: ["RabbitMQ", "Kafka", "Redis", "AWS SQS", "AWS SNS", "GCP Pub/Sub", "Grafana", "Prometheus", "OpenTelemetry", "AWS CloudWatch", "GCP Cloud Monitoring"],
  devTools: ["Swagger", "Dbeaver", "Jetbrains", "Jira", "Trello", "Git", "GitHub", "GitLab", "Bitbucket"],
  networkSecurity: ["HTTP", "WebSocket", "DHCP", "DNS", "IP", "API RESTful", "SSH", "JWT", "OAuth", "Authentication", "Authorization", "CORS", "BCrypt", "RBAC", "Rate Limiting", "Input Validation"],
  designArchitecture: ["Domain Driven Design", "Repository", "Adapter", "Strategy", "Builder", "Singleton", "Observer", "Saga Pattern", "Microservices", "Layered Architecture", "Feature Based Architecture", "Hexagonal Architecture", "Event Driven Architecture"]
};

export const education = [
  {
    id: 1,
    degreeKey: "education.entries.dam.degree",
    descriptionKey: "education.entries.dam.description",
    institution: "DigitechFP",
    startDate: new Date(Date.UTC(2025, 8, 1)),
    endDate: new Date(Date.UTC(2026, 5, 1)),
  },
  {
    id: 2,
    degreeKey: "education.entries.devops-cloud.degree",
    descriptionKey: "education.entries.devops-cloud.description",
    institution: "UNIR",
    startDate: new Date(Date.UTC(2024, 2, 1)),
    endDate: new Date(Date.UTC(2025, 10, 1)),
  },
  {
    id: 3,
    degreeKey: "education.entries.daw.degree",
    descriptionKey: "education.entries.daw.description",
    institution: "STUCOM",
    startDate: new Date(Date.UTC(2020, 8, 1)),
    endDate: new Date(Date.UTC(2022, 5, 1)),
  },
];

export const projects = [
  {
    id: 1,
    nameKey: "projects.portfolio.name",
    descriptionKey: "projects.portfolio.description",
    highlights: [
      { textKey: "projects.portfolio.highlights.website", link: "https://github.com/albertmenendezg/portfolio" },
      { textKey: "projects.portfolio.highlights.lambda", link: "https://github.com/albertmenendezg/portfolio-contact-lamda" },
      { textKey: "projects.portfolio.highlights.cv", link: "https://github.com/albertmenendezg/CV" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "AWS S3", "CloudFront", "Route 53", "API Gateway", "AWS Lambda", "AWS SES", "GitHub Actions"],
    links: {
      live: "https://albertmenendez.com"
    }
  }
]

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    link: "https://www.credly.com/badges/43118d9c-cb1c-4712-8db7-2a5b366989dc"
  }
];
