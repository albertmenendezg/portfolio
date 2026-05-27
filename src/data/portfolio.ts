export const personalInfo = {
  name: "Albert Menéndez González",
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
    periodKey: "experience.nter.period",
    positionKey: "experience.nter.position",
    projects: [
      {
        nameKey: "experience.nter.projects.oysho.name",
        descriptionKey: "experience.nter.projects.oysho.description",
        tasksKey: "experience.nter.projects.oysho.tasks",
        periodKey: "experience.nter.projects.oysho.period",
        tech: ["Java", "SpringBoot", "React", "Kafka", "Docker", "AWS", "GitHub Actions"]
      },
      {
        nameKey: "experience.nter.projects.codebench.name",
        descriptionKey: "experience.nter.projects.codebench.description",
        tasksKey: "experience.nter.projects.codebench.tasks",
        periodKey: "experience.nter.projects.codebench.period",
        tech: ["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]
      }
    ]
  },
  {
    id: 2,
    company: "Feeder The Reaction SaaS",
    periodKey: "experience.feeder.period",
    positionKey: "experience.feeder.position",
    projects: [
      {
        nameKey: "experience.feeder.projects.feeder-health.name",
        descriptionKey: "experience.feeder.projects.feeder-health.description",
        tasksKey: "experience.feeder.projects.feeder-health.tasks",
        periodKey: "experience.feeder.projects.feeder-health.period",
        tech: ["NestJS", "RabbitMQ", "WebSockets", "Socket.io", "AWS", "React", "TypeScript", "Bitbucket"]
      },
      {
        nameKey: "experience.feeder.projects.feeder-metrics.name",
        descriptionKey: "experience.feeder.projects.feeder-metrics.description",
        tasksKey: "experience.feeder.projects.feeder-metrics.tasks",
        periodKey: "experience.feeder.projects.feeder-metrics.period",
        tech: ["Spring Boot", "Java", "TypeScript", "Node.js", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "Git", "BitBucket"]
      }
    ]
  },
  {
    id: 3,
    company: "Foxize Cloud",
    periodKey: "experience.foxize.period",
    positionKey: "experience.foxize.position",
    projects: [
      {
        nameKey: "experience.foxize.projects.foxize-cloud.name",
        descriptionKey: "experience.foxize.projects.foxize-cloud.description",
        tasksKey: "experience.foxize.projects.foxize-cloud.tasks",
        periodKey: "experience.foxize.projects.foxize-cloud.period",
        tech: ["Symfony", "PHP", "Twig", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]
      }
    ]
  }
];

export const skills = {
  languages: ["Java", "JavaScript", "TypeScript", "Go", "Python", "PHP"],
  frameworks: ["SpringBoot", "Node.js", "NestJS", "React", "Next.js", "Symfony"],
  databases: ["MySQL", "PostgresSQL", "Redis", "MongoDB"],
  devops: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitLab CI", "GitHub Actions", "Bitbucket pipelines"],
  tools: ["Postman", "Swagger", "Dbeaver", "Jetbrains", "Jira", "Trello"],
  testing: ["JUnit", "Jest", "Mockito", "Cucumber", "PHPUnit"],
  architectures: [ "Microservices", "Domain Driven Design", "Hexagonal Architecture", "Event Driven Architecture"],
  ai: ["Prompt Engineering", "Agents", "MCP", "Skills", "OpenAI Codex", "Claude Code", "Opencode", "Ollama"],
  other: ["Git", "GitHub", "GitLab", "Bitbucket", "Linux", "Grafana", "RabbitMQ", "Kafka"]
};

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    link: "https://www.credly.com/badges/43118d9c-cb1c-4712-8db7-2a5b366989dc"
  }
];
