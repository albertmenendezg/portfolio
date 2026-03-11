export const personalInfo = {
  name: "Albert Menendez Gonzalez",
  title: "Backend & DevOps Engineer",
  email: "albertmenendezg@gmail.com",
  phone: "+34 678 630 197",
  location: "Barcelona, Spain",
  github: "https://github.com/albertmenendezg",
  linkedin: "https://www.linkedin.com/in/albert-menendez-gonzalez",
  summary: "Backend and DevOps Engineer with experience in designing and implementing scalable architectures. Specialized in Java, Go, and Node.js with a strong focus on cloud-native solutions, CI/CD, and automation."
};

export const experience = [
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
];

export const skills = {
  languages: ["Java", "JavaScript", "TypeScript", "Go", "Python", "PHP"],
  frameworks: ["SpringBoot", "Node.js", "NestJS", "React", "Next.js", "Symfony"],
  databases: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
  devops: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitLab CI", "GitHub Actions", "Bitbucket pipelines"],
  tools: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Trello", "Postman", "Swagger"],
  testing: ["JUnit", "Jest", "Mockito", "Cucumber", "PHPUnit"],
  methodologies: ["Domain Driven Design", "Hexagonal Architecture", "Event Driven Architecture", "Agile/Scrum"],
  other: ["Linux", "Grafana", "RabbitMQ", "Kafka"]
};

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    link: "https://www.credly.com/earner/earned/badge/43118d9c-cb1c-4712-8db7-2a5b366989dc"
  }
];
