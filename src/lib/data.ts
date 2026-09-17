export const profile = {
  name: "Sajjad Naqvi",
  title: "SDET | AI QA Engineer | CI/CD & DevOps",
  location: "Berlin, Germany",
  relocate: "Open to relocate within Germany",
  email: "naqveesajjad@gmail.com",
  phone: "+49 176 45960571",
  linkedin: "https://linkedin.com/in/sajjad-naqvi-0bb958b2",
  github: "https://github.com/NaqviSajjad",
  summary:
    "SDET with 5+ years designing, building, and maintaining automated E2E and API test suites in TypeScript and Python across fintech, media, and automotive platforms. Owns quality gates end to end: shift-left test strategy, Playwright/Pytest automation, Docker-containerized environments, and staged CI/CD pipelines in GitHub Actions, GitLab CI, and Jenkins. Hands-on with AWS and observability (Grafana, CloudWatch), and building practical AI-assisted testing skills through public LLM-driven test-generation projects.",
};

export const skillGroups = [
  {
    label: "Test Automation",
    items: [
      "Playwright (TS/JS)",
      "Cypress",
      "Appium",
      "Pytest",
      "Selenium",
      "Postman/Newman",
      "REST API testing",
    ],
  },
  {
    label: "CI/CD & DevOps",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps", "Docker"],
  },
  {
    label: "Cloud & IaC",
    items: ["AWS (EC2, S3, IAM, CloudWatch)", "Terraform", "Kubernetes (foundational)"],
  },
  {
    label: "AI-Assisted Testing",
    items: [
      "Prompt engineering",
      "AI-generated test cases",
      "Playwright MCP",
      "Playwright CLI",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "DeepEval",
      "Langfuse",
    ],
  },
  {
    label: "Monitoring & Observability",
    items: [
      "Grafana",
      "AWS CloudWatch",
      "Flaky-test analysis",
      "LLM tracing",
      "Evaluation datasets",
      "Latency/token monitoring",
    ],
  },
  {
    label: "Languages & Tooling",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Bash/Shell", "SQL", "JIRA", "Confluence", "X-RAY"],
  },
];

export const experience = [
  {
    role: "QA Engineer (SDET)",
    company: "DYN Media GmbH",
    location: "Cologne",
    period: "Jul 2024 – Present",
    points: [
      "Design, build, and maintain automated E2E (Playwright/TypeScript) and API test suites, enforcing quality gates in GitHub Actions on every pull request and merge.",
      "Integrated Playwright CLI with AI coding tools (Claude, Cursor) to automate test generation and DOM inspection, cutting script creation time by 35%.",
      "Implemented a Playwright MCP server in sandboxed test environments for dynamic, prompt-driven UI validation and automated exploratory testing.",
      "Diagnosed UI glitches via automated screenshots, session logs, and network traffic captured during test runs.",
    ],
  },
  {
    role: "System Test Engineer",
    company: "Joynext GmbH",
    location: "Dresden",
    period: "Sep 2023 – Feb 2024",
    points: [
      "Executed system and integration tests for automotive infotainment firmware on hardware benches and simulators against OEM specifications, catching critical defects before OEM sign-off.",
      "Maintained full requirements traceability matrices so every infotainment module had documented coverage.",
      "Coordinated defect correction with OEM stakeholders and development teams within an agile release cycle.",
      "Performed exploratory testing of new features and edge cases, documenting defects with reproduction steps.",
    ],
  },
  {
    role: "Test Automation Engineer",
    company: "Finoa GmbH",
    location: "Berlin",
    period: "Nov 2022 – Aug 2023",
    points: [
      "Built and maintained CI/CD-integrated E2E and REST API test automation with parallel execution for a regulated crypto-asset platform, raising QA throughput and cutting flaky failures.",
      "Integrated automated API tests into CI pipelines to detect integration and regression problems early in the development lifecycle.",
      "Kept the automation codebase maintainable through modular design and code review across TypeScript and Python.",
    ],
  },
  {
    role: "Software Tester",
    company: "Scoolio GmbH",
    location: "Dresden",
    period: "Jan 2020 – Sep 2022",
    points: [
      "Owned QA for Android and iOS apps used by 100k+ students; defined test strategy, test plans, and defect workflows.",
      "Built the Appium mobile automation test suite from scratch, cutting manual regression effort by 40%.",
      "Collaborated with developers and product teams to improve testability and release quality.",
    ],
  },
  {
    role: "Associate System Engineer",
    company: "TPS Worldwide",
    location: "Karachi",
    period: "Feb 2017 – Oct 2018",
    points: [
      "Supported banks on e-banking and payment-processing incidents, tracing transactions across ATM, POS, and internet-banking channels to root cause.",
      "Queried MySQL and Oracle 10g/11g databases using SQL to investigate production incidents.",
      "Coordinated technical investigations involving transaction-processing and banking systems.",
    ],
  },
];

export const projects = [
  {
    name: "AI QA Automation Framework",
    tagline: "LLM & RAG quality evaluation, beyond pass/fail",
    description:
      "A production-style Playwright + Pytest framework that tests an LLM customer-support assistant through the browser, then layers AI evaluation (DeepEval, RAGAS, Promptfoo) on top to score response relevancy, faithfulness, and retrieval quality. Keeps a sharp boundary between deterministic UI/API validation and semantic AI scoring, with a CI/CD quality gate in GitHub Actions that blocks a merge when evaluation scores drop below threshold.",
    stack: ["Python", "Playwright", "Pytest", "DeepEval", "RAGAS", "Promptfoo", "GitHub Actions"],
    href: "https://github.com/NaqviSajjad/AI-QA-Automation-Framework",
    featured: true,
  },
  {
    name: "Playwright Agents — Autonomous E2E",
    tagline: "Planner / Generator / Healer agent workflow",
    description:
      "Demonstrates the Playwright Agents workflow (v1.56): a Planner agent explores the app and writes a Markdown test plan, a Generator turns the plan into executable Playwright tests on a POM fixture, and a Healer runs failing tests, inspects the UI, and auto-repairs them. Built against TodoMVC as a clean, reproducible target app.",
    stack: ["TypeScript", "Playwright", "POM", "AI Agents"],
    href: "https://github.com/NaqviSajjad/playwright-agents",
    featured: true,
  },
  {
    name: "Playwright Test Agent",
    tagline: "JIRA story → LLM scenario classifier → generated tests",
    description:
      "An autonomous testing system for a live e-commerce site combining an AI agent layer (reads a JIRA story, classifies scenarios with an LLM, pushes manual cases to a TMS, generates Playwright test files) with a hand-crafted Page Object Model test suite. Staged GitHub Actions pipeline: API → UI smoke → UI full → cross-browser matrix.",
    stack: ["Python", "Playwright", "Pytest", "Anthropic Claude API", "GitHub Actions"],
    href: "https://github.com/NaqviSajjad/PlaywrightTestAgent",
    featured: true,
  },
  {
    name: "Dockerized Python App",
    tagline: "Multi-stage Docker build, FastAPI + Postgres",
    description:
      "A minimal, production-ready FastAPI service containerized with a multi-stage Dockerfile and orchestrated via Docker Compose alongside a PostgreSQL database, with unit tests and health-check endpoints.",
    stack: ["Python", "FastAPI", "Docker", "Docker Compose", "PostgreSQL", "Pytest"],
    href: "https://github.com/NaqviSajjad/DockerizedPythonApp",
    featured: false,
  },
  {
    name: "Appium Sign-Up Automation",
    tagline: "Mobile E2E for a student platform sign-up flow",
    description:
      "Mobile automation suite built with Appium and Java covering the sign-up flow for StudyDrive's Android app, from scratch to a maintainable regression suite.",
    stack: ["Java", "Appium", "Mobile Automation"],
    href: "https://github.com/NaqviSajjad/AppiumSignUpTask",
    featured: false,
  },
  {
    name: "StudyDrive Onboarding Automation",
    tagline: "Automated onboarding-flow regression coverage",
    description:
      "JavaScript-based automation covering the onboarding user journey, built to catch regressions before release.",
    stack: ["JavaScript", "Automation"],
    href: "https://github.com/NaqviSajjad/StudyDrive_Onboarding_automate",
    featured: false,
  },
];

export const education = [
  {
    degree: "M.Sc. coursework — Applied Mathematics, Network & Data Sciences",
    school: "Hochschule Mittweida, Germany",
    period: "2018 – 2024",
    note: "90 ECTS completed",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Sir Syed University of Engineering & Technology, Karachi, Pakistan",
    period: "2012 – 2016",
  },
];

export const certifications = [
  "DevOps on AWS: Tools for Automated Workflows (LinkedIn Learning)",
  "Intermediate Jenkins: Automate, Integrate, and Secure CI/CD Workflows at Scale (LinkedIn Learning)",
  "Playwright Advanced Automation (Udemy)",
];

export const languages = [
  { name: "English", level: "Fluent (full working proficiency)" },
  { name: "German", level: "A2 (actively pursuing B1)" },
];
