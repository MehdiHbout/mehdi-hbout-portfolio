import type { CaseStudy } from "@/types";

export const confidentialityNote =
  "Due to confidentiality constraints, case studies are presented as anonymized versions of real enterprise delivery experience. Internal system names, datasets and implementation details are intentionally generalized.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "financial-control-workflow-automation",
    title: "Financial Control Workflow Automation",
    short:
      "Designed BPMN-based automation workflows for critical financial control processes using Camunda, JavaScript, REST APIs and JSON-based integrations.",
    impact:
      "Improved traceability, reduced manual follow-up and supported structured validation flows for critical financial controls.",
    tags: ["Camunda BPMN", "REST APIs", "JavaScript", "Workflow Automation"],
    detail:
      "Designed and implemented BPMN-based automation workflows for critical financial control processes in a regulated banking environment. Solutions leveraged Camunda for process orchestration, JavaScript for business logic, REST APIs for system integration, and JSON-based data exchanges for seamless interoperability between financial control systems.",
  },
  {
    slug: "data-driven-control-anomaly-detection",
    title: "Data-driven Control & Anomaly Detection",
    short:
      "Built data automation and reporting solutions using Python, HiveQL and Spark SQL to support financial control monitoring and anomaly detection.",
    impact:
      "Reduced repetitive analysis and improved operational monitoring through automated data processing.",
    tags: ["Python", "SQL", "Spark SQL", "Data Automation", "Reporting"],
    detail:
      "Developed data automation pipelines and reporting solutions to support financial control monitoring. Used Python for data processing, HiveQL and Spark SQL for large-scale data queries, and built anomaly detection logic to identify irregularities in financial control datasets.",
  },
  {
    slug: "telecom-provisioning-system-integration",
    title: "Telecom Provisioning & System Integration",
    short:
      "Led IT projects around telecom provisioning, FTTH systems, service inventory and inter-application automation.",
    impact:
      "Improved provisioning reliability, delivery coordination and SLA-oriented operational follow-up.",
    tags: ["REST APIs", "PL/SQL", "Linux", "Jenkins", "Telecom Systems"],
    detail:
      "Led IT delivery projects focused on telecom provisioning, FTTH system deployments, service inventory management, and inter-application automation. Coordinated REST API integrations, PL/SQL development, Linux server administration, and Jenkins-based CI/CD pipelines.",
  },
  {
    slug: "ai-assisted-process-automation",
    title: "AI-assisted Process Automation",
    short:
      "Explored AI-powered workflows, n8n automation, APIs and structured prompt engineering to automate operational tasks.",
    impact:
      "Extended traditional automation with faster prototyping using APIs, n8n and structured prompts.",
    tags: ["n8n", "APIs", "Prompt Engineering", "AI Workflows"],
    detail:
      "Explored and prototyped AI-powered workflow automation using n8n, REST APIs, and structured prompt engineering. Focused on automating operational tasks through intelligent process design and API-based integrations.",
  },
];
