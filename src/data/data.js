// Replace these links and texts as you like.
export const SITE = {
  name: "Yao Anicet AGBONON EDAGBEDJI",
  title: "Data & AI Engineer · GenAI · RAG · Data Platforms",
  email: "lanicet17@gmail.com",
  phone: "+33 7 82 37 47 10",
  linkedin: "https://www.linkedin.com/in/agbeya",
  github: "https://github.com/agbeya",
  location: "Paris, France",
};

export const HERO = {
  img: "/profil.jpg",
  headline: {
    fr: "Data & AI Engineer · GenAI · RAG · Data Platforms",
    en: "Data & AI Engineer · GenAI · RAG · Data Platforms",
  },
  sub: {
    fr: "Data & AI Engineer chez Avanade — mission AXA France | GenAI, RAG, Databricks, Azure",
    en: "Data & AI Engineer at Avanade — AXA France mission | GenAI, RAG, Databricks, Azure",
  },
  short: {
    fr: "Ingénieur Big Data & IA (EFREI Paris), 4 ans d’expérience en Data Engineering et IA générative chez Avanade (alliance Accenture-Microsoft), sur des missions grands comptes dans la finance, l’industrie et la santé. Solide expertise en pipelines ETL/ELT, architectures RAG et plateformes Azure/Databricks.",
    en: "Big Data & AI engineer (EFREI Paris), 4 years of experience in Data Engineering and Generative AI at Avanade (an Accenture-Microsoft alliance), on major-account missions across finance, industry and healthcare. Strong expertise in ETL/ELT pipelines, RAG architectures and Azure/Databricks platforms.",
  },
};

export const STATUS = {
  fr: "En mission chez AXA France",
  en: "Currently on assignment at AXA France",
};

export const METRICS = [
  { value: "4+", label: { fr: "ans d’expérience", en: "years of experience" } },
  { value: "6", label: { fr: "missions grands comptes", en: "major-account missions" } },
  { value: "3", label: { fr: "secteurs : finance, industrie, santé", en: "sectors: finance, industry, healthcare" } },
  { value: "10+", label: { fr: "certifications Microsoft & cloud", en: "Microsoft & cloud certifications" } },
];

export const ABOUT = {
  content: [
    {
      fr: "Data & AI Engineer chez Avanade (alliance Accenture-Microsoft), actuellement en mission chez AXA France sur la migration Databricks de Hive Metastore vers Unity Catalog. Auparavant en charge du développement d’une solution IA générative multi-agent (Azure AI Foundry, RAG, GPT-5) pour Opella.",
      en: "Data & AI Engineer at Avanade (an Accenture-Microsoft alliance), currently on assignment at AXA France on a Databricks migration from Hive Metastore to Unity Catalog. Previously led the development of a multi-agent generative AI solution (Azure AI Foundry, RAG, GPT-5) for Opella.",
    },
    {
      fr: "Solide expertise en pipelines ETL/ELT, architectures RAG et gouvernance de la donnée, acquise sur des missions grands comptes dans la finance (Natixis), l’industrie (Danone, SAUR) et la santé (Opella).",
      en: "Strong expertise in ETL/ELT pipelines, RAG architectures and data governance, built on major-account missions in finance (Natixis), industry (Danone, SAUR) and healthcare (Opella).",
    },
  ],
  bullets: [
    {
      fr: "Azure AI Foundry, Azure OpenAI (GPT-4o, GPT-5), RAG, MCP, Connected Agents",
      en: "Azure AI Foundry, Azure OpenAI (GPT-4o, GPT-5), RAG, MCP, Connected Agents",
    },
    {
      fr: "Databricks, Unity Catalog, Snowflake, Delta Lake, PySpark",
      en: "Databricks, Unity Catalog, Snowflake, Delta Lake, PySpark",
    },
    {
      fr: "Informatica Cloud, Azure Data Factory, Power BI, Streamlit",
      en: "Informatica Cloud, Azure Data Factory, Power BI, Streamlit",
    },
  ],
};

export const EXPERIENCES = [
  {
    company: {
      fr: "Avanade - Paris | Client : AXA France",
      en: "Avanade - Paris | Client: AXA France",
    },
    title: {
      fr: "Data & AI Engineer — Migration Databricks",
      en: "Data & AI Engineer — Databricks Migration",
    },
    date: { fr: "Juil 2026 - Présent", en: "Jul 2026 - Present" },
    desc: {
      fr: "Migration Hive Metastore vers Unity Catalog sur Databricks pour AXA France : cadrage de la migration des métadonnées et des permissions, refonte du modèle de gouvernance des données (catalogues, schémas, contrôle d'accès), et intégration d'Azure OpenAI pour l'accompagnement de la migration.",
      en: "Migration from Hive Metastore to Unity Catalog on Databricks for AXA France: metadata and permissions migration scoping, redesign of the data governance model (catalogs, schemas, access control), and Azure OpenAI integration to support the migration.",
    },
    stack: ["Databricks", "Unity Catalog", "Hive Metastore", "Azure OpenAI"],
  },
  {
    company: {
      fr: "Avanade - Paris | Client : Opella (Consumer Healthcare)",
      en: "Avanade - Paris | Client: Opella (Consumer Healthcare)",
    },
    title: {
      fr: "Data & AI Engineer — Solution GenAI Multi-Agent",
      en: "Data & AI Engineer — GenAI Multi-Agent Solution",
    },
    date: { fr: "2026", en: "2026" },
    desc: {
      fr: "Conception et développement d'une solution multi-agent IA (Azure AI Foundry) pour l'analyse automatisée d'images et de vidéos de divulgation médicamenteuse. Architecture RAG complète (chunking, embedding, indexation Azure AI Search, reranking), intégration d'Azure Content Understanding, orchestration via Connected Agents et MCP, et mise en œuvre de l'observabilité LLM (journalisation des appels GPT-5, traçage des prompts).",
      en: "Designed and developed a multi-agent AI solution (Azure AI Foundry) for automated analysis of medication-disclosure images and videos. Full RAG architecture (chunking, embedding, Azure AI Search indexing, reranking), Azure Content Understanding integration, orchestration via Connected Agents and MCP, and LLM observability (GPT-5 call logging, prompt tracing).",
    },
    stack: [
      "Azure AI Foundry",
      "Azure OpenAI GPT-4o/GPT-5",
      "RAG",
      "Azure AI Search",
      "Azure Content Understanding",
      "MCP",
      "Azure Container",
    ],
  },
  {
    company: {
      fr: "Avanade - Paris | Clients : Natixis, SAUR",
      en: "Avanade - Paris | Clients: Natixis, SAUR",
    },
    title: { fr: "Data Engineer — ETL & IA", en: "Data Engineer — ETL & AI" },
    date: { fr: "Oct 2024 - 2025", en: "Oct 2024 - 2025" },
    desc: {
      fr: "Conception et optimisation de pipelines ETL/ELT sous Informatica Cloud pour des données financières en environnement réglementé (Natixis). Développement de solutions IA pour SAUR (intégration Azure OpenAI pour l'enrichissement sémantique) et intégration de sources hétérogènes (Salesforce CRM, SQL Server).",
      en: "Designed and optimized ETL/ELT pipelines on Informatica Cloud for financial data in a regulated environment (Natixis). Developed AI solutions for SAUR (Azure OpenAI integration for semantic enrichment) and integrated heterogeneous sources (Salesforce CRM, SQL Server).",
    },
    stack: [
      "Informatica Cloud",
      "Azure OpenAI",
      "Salesforce",
      "SQL Server",
      "PostgreSQL",
      "Python",
      "Streamlit",
    ],
  },
  {
    company: {
      fr: "Avanade - Paris | Clients : Danone R&I, Natixis",
      en: "Avanade - Paris | Clients: Danone R&I, Natixis",
    },
    title: { fr: "Alternant Data Engineer", en: "Data Engineer (Apprenticeship)" },
    date: { fr: "Sept 2022 - Sept 2024", en: "Sept 2022 - Sept 2024" },
    desc: {
      fr: "Conception de pipelines ETL et structuration d'un modèle de données en libre-service sur Snowflake (modélisation dimensionnelle, ingestion, mise à disposition métier). Traitement distribué PySpark sur Azure Databricks : transformations, agrégations, optimisation Spark SQL, partitionnement.",
      en: "Designed ETL pipelines and structured a self-service data model on Snowflake (dimensional modeling, ingestion, business availability). Distributed PySpark processing on Azure Databricks: transformations, aggregations, Spark SQL optimization, partitioning.",
    },
    stack: [
      "PySpark",
      "Azure Databricks",
      "Snowflake",
      "Informatica Cloud",
      "Power BI",
      "Jira",
    ],
  },
  {
    company: {
      fr: "Hotshi D.A.C (Freelance) - Irlande",
      en: "Hotshi D.A.C (Freelance) - Ireland",
    },
    title: { fr: "Développeur FullStack", en: "Full-Stack Developer" },
    date: { fr: "Nov 2021 - Déc 2022", en: "Nov 2021 - Dec 2022" },
    desc: {
      fr: "Développement du site vitrine et de la plateforme d’administration (Laravel, Bootstrap).",
      en: "Built the marketing website and the admin platform (Laravel, Bootstrap).",
    },
    stack: ["Laravel", "Bootstrap", "Git", "Linux"],
  },
  {
    company: { fr: "MEDIASOFT - Togo", en: "MEDIASOFT - Togo" },
    title: { fr: "Développeur JEE", en: "JEE Developer" },
    date: { fr: "Mars 2018 - Août 2021", en: "Mar 2018 - Aug 2021" },
    desc: {
      fr: "Développement d'Application Web, Project owner pour l’intégration des institutions à la plateforme Bindoo, développement de modules USSD, génération de rapports fiscaux.",
      en: "Web application development; project owner for integrating institutions with the Bindoo platform; USSD module development; generation of fiscal reports.",
    },
    stack: [
      "JEE",
      "SQL Server",
      "PostgreSQL",
      "PrimeFaces",
      "Bootstrap",
      "Git",
      "OpenProject",
    ],
  },
];

export const PROJECTS = [
  {
    kind: "mission",
    sector: { fr: "Assurance", en: "Insurance" },
    name: {
      fr: "Migration Databricks : Hive Metastore → Unity Catalog",
      en: "Databricks Migration: Hive Metastore → Unity Catalog",
    },
    desc: {
      fr: "Cadrage et pilotage de la migration de la gouvernance des données sur Databricks : migration des métadonnées et permissions, refonte du modèle de catalogues/schémas et du contrôle d'accès, accompagnement outillé par Azure OpenAI.",
      en: "Scoping and driving the data governance migration on Databricks: metadata and permissions migration, redesign of the catalog/schema model and access control, supported by Azure OpenAI tooling.",
    },
    tags: ["Databricks", "Unity Catalog", "Hive Metastore", "Azure OpenAI", "Data Governance"],
  },
  {
    kind: "mission",
    sector: { fr: "Santé grand public", en: "Consumer Healthcare" },
    name: {
      fr: "Solution IA générative multi-agent",
      en: "Multi-Agent Generative AI Solution",
    },
    desc: {
      fr: "Conception d'une solution multi-agent (Azure AI Foundry) pour l'analyse automatisée d'images et de vidéos de divulgation médicamenteuse : architecture RAG complète, orchestration via Connected Agents et MCP, observabilité LLM.",
      en: "Designed a multi-agent solution (Azure AI Foundry) for automated analysis of medication-disclosure images and videos: full RAG architecture, orchestration via Connected Agents and MCP, LLM observability.",
    },
    tags: ["Azure AI Foundry", "RAG", "Azure OpenAI", "MCP", "Azure AI Search"],
  },
  {
    name: {
      fr: "Speech Emotion Recognition (SERAPP)",
      en: "Speech Emotion Recognition (SERAPP)",
    },
    desc: {
      fr: "Solution ML pour reconnaissance des émotions par l'analyse spectrale des voix (sans la sémantique).",
      en: "ML solution for emotion recognition by spectral analysis of voices (without semantics).",
    },
    link: "https://www.assas-universite.fr/fr/recherche/centres-de-recherche/efrei-research-lab",
    tags: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Flask",
      "NodeJS",
      "Telegram",
    ],
  },
  {
    name: { fr: "Plateforme BINDOO", en: "BINDOO Platform" },
    desc: {
      fr: "Développement de solution logiciel pour les institutions de microfinance afin d'offrir à leur client la gestion de leurs opérations courantes depuis chez eux.",
      en: "Software solution for microfinance institutions enabling clients to manage their day-to-day operations remotely.",
    },
    link: "https://www.ebindoo.com",
    tags: [
      "JEE",
      "JasperReport",
      "Microfinance",
      "API",
      "PostgreSQL",
      "Bootstrap",
    ],
  },
  {
    name: { fr: "Casier judiciaire - Togo", en: "Criminal Record – Togo" },
    desc: {
      fr: "Digitalisation de la demande et de la délivrance de casier judiciaire au Togo (e-gouvernement).",
      en: "Digitization of criminal-record requests and issuance in Togo (e-government).",
    },
    link: "https://service-public.gouv.tg/service/66ad0d1a77147a240f6d7547/justice/demande-d-extrait-de-casier-judiciaire",
    tags: ["JEE", "JasperReport", "PostgreSQL", "eGov"],
  },
  {
    name: { fr: "Microfina++", en: "Microfina++" },
    desc: {
      fr: "Développement et intégration du module de change de devise à la solution intégrée de gestion des opérations pour les IMF.",
      en: "Developed and integrated the foreign-exchange module into the integrated operations management solution for MFIs.",
    },
    link: "https://www.mediasofthome.com/flyers/microfinaPlus.pdf",
    tags: ["JEE", "Excel", "Finance", "Integration", "SQL Server"],
  },
  {
    name: { fr: "Hotshi", en: "Hotshi" },
    desc: {
      fr: "Développement du site officiel du réseau social professionnel africain Hotshi et mise en place du système de mailing.",
      en: "Developed the official website of the African professional social network Hotshi and set up the mailing system.",
    },
    link: "https://hotshi.com/",
    tags: ["Laravel", "Mailing", "Bootstrap"],
  },
];

export const SKILLS = {
  genai: [
    "Azure AI Foundry",
    "Azure OpenAI (GPT-4o, GPT-5)",
    "RAG",
    "Multi-agent orchestration",
    "MCP",
    "Connected Agents",
    "Azure AI Search",
    "Azure Content Understanding",
  ],
  languages: ["PySpark", "Python", "Scala", "SQL", "Spark SQL", "Bash"],
  data_processing: [
    "Apache Spark",
    "Delta Lake",
    "Unity Catalog",
    "Databricks",
    "Pandas",
    "NumPy",
    "scikit-learn",
  ],
  cloud_dw: ["Azure (ADLS Gen2, Key Vault)", "Snowflake", "Medallion Architecture"],
  etl_orchestration: [
    "Informatica Cloud (IICS)",
    "Azure Data Factory",
    "Databricks Workflows",
    "Talend",
  ],
  databases: ["SQL Server", "PostgreSQL", "Snowflake"],
  bi_analytics: ["Power BI", "Streamlit"],
  devops_tools: ["Git & GitHub", "Azure DevOps", "Docker", "Linux", "CI/CD"],
  soft: [
    { fr: "Rigueur", en: "Rigour" },
    { fr: "Esprit d\’équipe", en: "Team spirit" },
    { fr: "Communication", en: "Communication" },
    { fr: "Autonomie", en: "Autonomy" },
  ],
};

export const CERTIFICATES = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    short: "AZ-900",
    issuer: "Microsoft",
    path: "certif-img/az900.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    short: "DP-900",
    issuer: "Microsoft",
    path: "certif-img/dp900.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    short: "DP-203",
    issuer: "Microsoft",
    path: "certif-img/dp203.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Microsoft Certified: Power Platform Fundamentals",
    short: "PL-900",
    issuer: "Microsoft",
    path: "certif-img/pl900.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    short: "PL-300",
    issuer: "Microsoft",
    path: "certif-img/pl300.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    short: "AI-900",
    issuer: "Microsoft",
    path: "certif-img/ai900.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Informatica Data Integration Certification",
    short: "IDMC",
    issuer: "Informatica",
    path: "certif-img/idmc.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Cloud Data Quality (CDQ) Implementation Course",
    short: "CDQ",
    issuer: "Informatica",
    path: "certif-img/idmc.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "IICS: Cloud Data Integration Services R41 (onDemand)",
    short: "ICDS R41",
    issuer: "Informatica",
    path: "certif-img/idmc.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Academy Accreditation - Databricks Fundamentals",
    short: "Databricks",
    issuer: "Databricks",
    path: "certif-img/databricks_900.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Fondamentaux Kubernetes",
    short: "Kubernetes",
    issuer: "Datascientist.fr",
    path: "certif-img/kubernetes.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Formation PSC1",
    short: "PSC1",
    issuer: "FFSFP Fédération Française de Sauvetage et de Secourisme",
    path: "certif-img/ffsfp.png",
    link: "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012",
  },
  {
    name: "Microsoft Fabric Data Engineer Associate",
    short: "DP-700",
    issuer: "Microsoft",
    status: "in-progress",
  },
  {
    name: "Microsoft Fabric Analytics Engineer Associate",
    short: "DP-600",
    issuer: "Microsoft",
    status: "in-progress",
  },
  {
    name: "Google Cloud Professional Data Engineer",
    short: "GCP Data Engineer",
    issuer: "Google Cloud",
    status: "in-progress",
  },
  {
    name: "Databricks Certified Associate Developer for Apache Spark",
    short: "Spark Associate",
    issuer: "Databricks",
    status: "in-progress",
  },
];
