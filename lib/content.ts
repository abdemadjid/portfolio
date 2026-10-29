export type Lang = "fr" | "en";

export type Project = {
  name: string;
  tagline: string;
  period: string;
  summary: string;
  points: string[];
  tech: string[];
  featured?: boolean;
};

export type Job = {
  role: string;
  org: string;
  place: string;
  period: string;
  points: string[];
};

export type Edu = {
  title: string;
  school: string;
  place: string;
  period: string;
  note?: string;
};

export type SkillGroup = { title: string; items: string[] };

export type Content = {
  meta: { title: string; description: string };
  ui: {
    skip: string;
    nav: {
      about: string;
      experience: string;
      projects: string;
      skills: string;
      education: string;
      contact: string;
    };
    langLabel: string;
    otherLang: Lang;
    otherLangName: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    pitch: string;
    ctaProjects: string;
    ctaCv: string;
    location: string;
    stats: { value: string; label: string }[];
  };
  about: { title: string; text: string[]; focusTitle: string; focus: string[] };
  experience: { title: string; jobs: Job[] };
  projects: {
    title: string;
    intro: string;
    featured: string;
    details: string;
    items: Project[];
  };
  skills: { title: string; groups: SkillGroup[] };
  education: { title: string; items: Edu[]; languagesTitle: string; languages: { name: string; level: string }[] };
  contact: {
    title: string;
    text: string;
    email: string;
    linkedin: string;
    cvFr: string;
    cvEn: string;
  };
  footer: string;
};

export const EMAIL = "menad00madjid@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/abdelmadjid-m-355189314/";
export const CV_FR = "/CV_Abdelmadjid_Menad_FR.pdf";
export const CV_EN = "/CV_Abdelmadjid_Menad_EN.pdf";

const fr: Content = {
  meta: {
    title: "Abdelmadjid Menad — Ingénieur en Cybersécurité",
    description:
      "Portfolio d'Abdelmadjid Menad, ingénieur d'État en informatique spécialisé en cybersécurité : SIEM/SOC, détection des menaces, IDS/IPS, sécurité des extensions de navigateur et IA explicable.",
  },
  ui: {
    skip: "Aller au contenu",
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      education: "Formation",
      contact: "Contact",
    },
    langLabel: "Langue",
    otherLang: "en",
    otherLangName: "EN",
  },
  hero: {
    eyebrow: "Ingénieur d'État en Informatique · Cybersécurité",
    role: ".",
    pitch:
      "Spécialisé en sécurité des systèmes et réseaux, SIEM/SOC, IDS/IPS et IA appliquée à la détection. Je conçois des outils de supervision et d'analyse qui expliquent chacune de leurs alertes.",
    ctaProjects: "Voir mes projets",
    ctaCv: "Télécharger le CV",
    location: "Mostaganem, Algérie",
    stats: [
      { value: "6", label: "projets" },
      { value: "4", label: "stages" },
      { value: "SOC", label: "IT / OT" },
    ],
  },
  about: {
    title: "À propos",
    text: [
      "Ingénieur d'État en Informatique spécialisé en cybersécurité et titulaire d'un Master en Cybersécurité (ESTIN), je travaille sur la sécurité des systèmes et réseaux, l'administration réseau, le SIEM/SOC, les IDS/IPS et la sécurité IoT.",
      "Passionné par la protection des infrastructures informatiques et la prévention des cyberattaques, j'aime relier la détection, le développement logiciel et le Machine Learning pour construire des solutions concrètes et explicables.",
    ],
    focusTitle: "Domaines d'intérêt",
    focus: [
      "SIEM / SOC & détection des menaces",
      "Sécurité IT/OT et infrastructures critiques",
      "Sécurité des extensions de navigateur",
      "IA explicable pour la cybersécurité",
    ],
  },
  experience: {
    title: "Expérience professionnelle",
    jobs: [
      {
        role: "Stage en Cybersécurité",
        org: "EPM — Entreprise Portuaire de Mostaganem",
        place: "Mostaganem",
        period: "Févr. 2026 – Juin 2026",
        points: [
          "Conception et mise en place d'une solution de supervision et de détection des menaces basée sur un SIEM, avec intégration de Wazuh, Suricata et ELK.",
          "Collecte, centralisation et corrélation des logs de sécurité, surveillance des événements, détection des incidents et analyse des alertes pour renforcer la sécurité de l'infrastructure portuaire.",
        ],
      },
      {
        role: "Stage de découverte",
        org: "Sonelgaz",
        place: "Mostaganem",
        period: "Juil. 2025",
        points: [
          "Découverte des infrastructures informatiques et industrielles : initiation aux réseaux, aux systèmes SCADA et à la cybersécurité des infrastructures critiques.",
        ],
      },
      {
        role: "Stage en Analyse de Sécurité",
        org: "EPM — Entreprise Portuaire de Mostaganem",
        place: "Mostaganem",
        period: "Mars 2024",
        points: [
          "Analyse de la sécurité informatique et des infrastructures réseau, identification des risques et vulnérabilités, étude des mesures de protection adaptées à l'environnement portuaire.",
        ],
      },
      {
        role: "Stage de découverte",
        org: "Algérie Télécom",
        place: "Mostaganem",
        period: "Déc. 2023",
        points: [
          "Découverte des infrastructures de télécommunications : réseaux informatiques, systèmes de communication et administration réseau.",
        ],
      },
    ],
  },
  projects: {
    title: "Projets",
    intro: "Plateformes de supervision, outils d'analyse et recherche appliquée en cybersécurité.",
    featured: "À la une",
    details: "Détails du projet",
    items: [
      {
        name: "Controlix AI",
        tagline: "Plateforme de supervision de sécurité (SOC) IT/OT",
        period: "2026",
        featured: true,
        summary:
          "Plateforme SOC installée chez le client : collecte réelle des journaux, corrélation en incidents, score de risque explicable et détection d'anomalies par IA.",
        points: [
          "Collecte réelle des journaux Suricata, Wazuh et Syslog (serveurs Linux, FortiGate), normalisation des événements et détection par 13 règles YAML modifiables.",
          "Corrélation des alertes de plusieurs capteurs en incidents, score de risque explicable de 0 à 100 et cartographie MITRE ATT&CK (697 techniques et sous-techniques).",
          "Module d'IA de détection d'anomalies (Isolation Forest) qui apprend le comportement normal de chaque machine et explique chaque écart détecté.",
        ],
        tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "OpenSearch", "Docker Compose", "Python"],
      },
      {
        name: "ExtShield",
        tagline: "Analyseur statique de sécurité des extensions de navigateur",
        period: "2025",
        summary:
          "Analyse automatique du code source des extensions Chrome, Firefox et Edge pour identifier les comportements dangereux.",
        points: [
          "Détection des permissions excessives et des accès sensibles ; analyse des appels aux API cookies, history, tabs et webRequest.",
          "Repérage des téléchargements de scripts distants et des communications réseau suspectes.",
          "Génération d'un rapport justifiant chaque alerte avec le fichier et la ligne concernés.",
        ],
        tech: ["Python", "JavaScript AST", "Babel / Tree-sitter", "FastAPI"],
      },
      {
        name: "ExplainExt",
        tagline: "IA explicable pour la détection d'extensions malveillantes",
        period: "2025",
        summary:
          "Modèle de classification qui distingue les extensions légitimes des extensions potentiellement malveillantes, au-delà du nom ou des permissions déclarées.",
        points: [
          "Extraction de caractéristiques du code JavaScript et du fichier manifest.json.",
          "Comparaison de Random Forest, XGBoost et LightGBM.",
          "Explication des prédictions avec SHAP ; évaluation des faux positifs/négatifs, de la précision, du rappel et du F1-score.",
        ],
        tech: ["Python", "scikit-learn", "LightGBM", "SHAP", "pandas"],
      },
      {
        name: "ExtTrace",
        tagline: "Analyse dynamique et détection de fuites de confidentialité",
        period: "2026",
        summary:
          "Laboratoire isolé pour observer le comportement d'une extension pendant son exécution.",
        points: [
          "Observation des requêtes HTTP(S) et des domaines contactés ; détection des transferts inhabituels de données et des accès aux informations sensibles.",
          "Corrélation des événements du navigateur avec les actions de l'extension et comparaison avec les résultats de l'analyse statique.",
        ],
        tech: ["Playwright", "Chromium", "Python", "Proxy de laboratoire", "Docker"],
      },
      {
        name: "Stack ELK en home lab",
        tagline: "Centralisation et analyse de logs",
        period: "2026",
        summary:
          "Installation et configuration de la stack ELK (Elasticsearch, Logstash, Kibana) dans un environnement de home lab.",
        points: [
          "Collecte et centralisation des journaux, indexation et recherche des événements.",
          "Création de tableaux de bord Kibana pour la surveillance et l'analyse.",
        ],
        tech: ["Elasticsearch", "Logstash", "Kibana"],
      },
      {
        name: "Supervision réseau",
        tagline: "Disponibilité, performances et alertes",
        period: "2025",
        summary:
          "Supervision des équipements réseau (routeurs, commutateurs, pare-feu) : suivi de la disponibilité et des performances.",
        points: ["Configuration d'alertes pour détecter rapidement les pannes et les comportements anormaux."],
        tech: ["Supervision", "Alerting", "Réseaux"],
      },
    ],
  },
  skills: {
    title: "Compétences techniques",
    groups: [
      {
        title: "Cybersécurité",
        items: ["Sécurité des applications Web", "Analyse des menaces", "Détection d'activités malveillantes", "Confidentialité des données"],
      },
      {
        title: "SIEM & détection",
        items: ["Wazuh", "ELK", "Corrélation de logs", "Supervision SOC", "MITRE ATT&CK"],
      },
      {
        title: "IDS/IPS & réseau",
        items: ["Suricata", "Snort", "Zeek", "Wireshark", "TCP/IP", "DNS", "DHCP", "VLAN", "VPN", "Pare-feu"],
      },
      {
        title: "Analyse applicative",
        items: ["Analyse statique", "AST", "Analyse dynamique", "Extensions de navigateur", "Flux de données sensibles"],
      },
      {
        title: "Machine Learning & IA explicable",
        items: ["Classification", "Détection d'anomalies", "Feature engineering", "SHAP", "scikit-learn", "pandas", "NumPy"],
      },
      {
        title: "Développement",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C", "React.js", "Next.js", "API REST", "Linux"],
      },
    ],
  },
  education: {
    title: "Formation",
    items: [
      {
        title: "Ingénieur d'État en Informatique — spécialité Cybersécurité",
        school: "ESTIN, Campus Amizour",
        place: "Béjaïa",
        period: "Sept. 2021 – Juin 2026",
        note: "Sécurité des systèmes et réseaux, administration réseau, systèmes d'information, développement logiciel, IA, Machine Learning, sécurité IoT.",
      },
      {
        title: "Master Académique en Cybersécurité",
        school: "ESTIN, Campus Amizour",
        place: "Béjaïa",
        period: "Sept. 2021 – Juin 2026",
        note: "Recherche et développement en cybersécurité, IA, Machine Learning, analyse et détection des cybermenaces.",
      },
      {
        title: "Baccalauréat en Mathématiques — mention Très Bien (16,55)",
        school: "Lycée Hammou Othmane Kheir Eddine",
        place: "",
        period: "2021",
      },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "Très bon niveau" },
      { name: "Anglais", level: "Très bon niveau" },
    ],
  },
  contact: {
    title: "Contact",
    text: "Une opportunité, un stage, un projet de sécurité ? Écrivez-moi, je réponds avec plaisir.",
    email: "Envoyer un e-mail",
    linkedin: "Profil LinkedIn",
    cvFr: "CV (FR)",
    cvEn: "CV (EN)",
  },
  footer: "Conçu avec Next.js · Hébergé sur Vercel",
};

const en: Content = {
  meta: {
    title: "Abdelmadjid Menad — Cybersecurity Engineer",
    description:
      "Portfolio of Abdelmadjid Menad, State Engineer in Computer Science specialized in cybersecurity: SIEM/SOC, threat detection, IDS/IPS, browser extension security and explainable AI.",
  },
  ui: {
    skip: "Skip to content",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    langLabel: "Language",
    otherLang: "fr",
    otherLangName: "FR",
  },
  hero: {
    eyebrow: "State Engineer in Computer Science · Cybersecurity",
    role: "",
    pitch:
      "Specialized in systems and network security, SIEM/SOC, IDS/IPS and AI applied to detection. I build monitoring and analysis tools that explain every alert they raise.",
    ctaProjects: "View my projects",
    ctaCv: "Download CV",
    location: "Mostaganem, Algeria",
    stats: [
      { value: "6", label: "projects" },
      { value: "4", label: "internships" },
      { value: "SOC", label: "IT / OT" },
    ],
  },
  about: {
    title: "About",
    text: [
      "State Engineer in Computer Science specialized in cybersecurity, with a Master's degree in Cybersecurity (ESTIN), I work on systems and network security, network administration, SIEM/SOC, IDS/IPS and IoT security.",
      "Passionate about protecting IT infrastructures and preventing cyberattacks, I like to combine detection, software development and Machine Learning to build concrete, explainable solutions.",
    ],
    focusTitle: "Areas of interest",
    focus: [
      "SIEM / SOC & threat detection",
      "IT/OT security and critical infrastructures",
      "Browser extension security",
      "Explainable AI for cybersecurity",
    ],
  },
  experience: {
    title: "Professional experience",
    jobs: [
      {
        role: "Cybersecurity Internship",
        org: "EPM — Mostaganem Port Authority",
        place: "Mostaganem",
        period: "Feb. 2026 – June 2026",
        points: [
          "Designed and deployed a SIEM-based monitoring and threat detection solution integrating Wazuh, Suricata and ELK.",
          "Collected, centralized and correlated security logs, monitored events, detected incidents and analyzed alerts to strengthen the port infrastructure's security.",
        ],
      },
      {
        role: "Observation Internship",
        org: "Sonelgaz",
        place: "Mostaganem",
        period: "July 2025",
        points: [
          "Discovery of IT and industrial infrastructures: introduction to networks, SCADA systems and cybersecurity for critical infrastructures.",
        ],
      },
      {
        role: "Security Analysis Internship",
        org: "EPM — Mostaganem Port Authority",
        place: "Mostaganem",
        period: "March 2024",
        points: [
          "Analyzed IT security and network infrastructure, identified risks and vulnerabilities, and studied protection measures suited to the port environment.",
        ],
      },
      {
        role: "Observation Internship",
        org: "Algérie Télécom",
        place: "Mostaganem",
        period: "Dec. 2023",
        points: [
          "Discovery of telecommunications infrastructures: computer networks, communication systems and network administration.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Monitoring platforms, analysis tools and applied cybersecurity research.",
    featured: "Featured",
    details: "Project details",
    items: [
      {
        name: "Controlix AI",
        tagline: "IT/OT Security Operations Center (SOC) platform",
        period: "2026",
        featured: true,
        summary:
          "SOC platform deployed on the client's premises: real log collection, correlation into incidents, explainable risk scoring and AI-based anomaly detection.",
        points: [
          "Real collection of Suricata, Wazuh and Syslog logs (Linux servers, FortiGate), event normalization and detection through 13 editable YAML rules.",
          "Correlation of alerts from multiple sensors into incidents, explainable risk score from 0 to 100 and MITRE ATT&CK mapping (697 techniques and sub-techniques).",
          "Anomaly detection AI module (Isolation Forest) that learns each machine's normal behavior and explains every detected deviation.",
        ],
        tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "OpenSearch", "Docker Compose", "Python"],
      },
      {
        name: "ExtShield",
        tagline: "Static security analyzer for browser extensions",
        period: "2025",
        summary:
          "Automatic source code analysis of Chrome, Firefox and Edge extensions to identify dangerous behaviors.",
        points: [
          "Detection of excessive permissions and sensitive accesses; analysis of calls to the cookies, history, tabs and webRequest APIs.",
          "Identification of remote script downloads and suspicious network communications.",
          "Report justifying each alert with the file and line concerned.",
        ],
        tech: ["Python", "JavaScript AST", "Babel / Tree-sitter", "FastAPI"],
      },
      {
        name: "ExplainExt",
        tagline: "Explainable AI for malicious extension detection",
        period: "2025",
        summary:
          "Classification model that distinguishes legitimate extensions from potentially malicious ones, beyond the name or declared permissions.",
        points: [
          "Feature extraction from JavaScript code and the manifest.json file.",
          "Comparison of Random Forest, XGBoost and LightGBM.",
          "Prediction explanations with SHAP; evaluation of false positives/negatives, precision, recall and F1-score.",
        ],
        tech: ["Python", "scikit-learn", "LightGBM", "SHAP", "pandas"],
      },
      {
        name: "ExtTrace",
        tagline: "Dynamic analysis and privacy leakage detection",
        period: "2026",
        summary: "Isolated lab to observe the runtime behavior of a browser extension.",
        points: [
          "Observation of HTTP(S) requests and contacted domains; detection of unusual data transfers and accesses to sensitive information.",
          "Correlation of browser events with extension actions and comparison with static analysis results.",
        ],
        tech: ["Playwright", "Chromium", "Python", "Lab proxy", "Docker"],
      },
      {
        name: "ELK stack home lab",
        tagline: "Log centralization and analysis",
        period: "2026",
        summary:
          "Installation and configuration of the ELK stack (Elasticsearch, Logstash, Kibana) in a home lab environment.",
        points: [
          "Log collection and centralization, event indexing and search.",
          "Kibana dashboards for monitoring and analysis.",
        ],
        tech: ["Elasticsearch", "Logstash", "Kibana"],
      },
      {
        name: "Network monitoring",
        tagline: "Availability, performance and alerts",
        period: "2025",
        summary:
          "Monitoring of network equipment (routers, switches, firewalls): availability and performance tracking.",
        points: ["Alert configuration to quickly detect outages and abnormal behavior."],
        tech: ["Monitoring", "Alerting", "Networking"],
      },
    ],
  },
  skills: {
    title: "Technical skills",
    groups: [
      {
        title: "Cybersecurity",
        items: ["Web application security", "Threat analysis", "Malicious activity detection", "Data privacy"],
      },
      {
        title: "SIEM & detection",
        items: ["Wazuh", "ELK", "Log correlation", "SOC monitoring", "MITRE ATT&CK"],
      },
      {
        title: "IDS/IPS & networking",
        items: ["Suricata", "Snort", "Zeek", "Wireshark", "TCP/IP", "DNS", "DHCP", "VLAN", "VPN", "Firewalls"],
      },
      {
        title: "Application analysis",
        items: ["Static analysis", "AST", "Dynamic analysis", "Browser extensions", "Sensitive data flows"],
      },
      {
        title: "Machine Learning & explainable AI",
        items: ["Classification", "Anomaly detection", "Feature engineering", "SHAP", "scikit-learn", "pandas", "NumPy"],
      },
      {
        title: "Development",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C", "React.js", "Next.js", "REST APIs", "Linux"],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        title: "State Engineer in Computer Science — Cybersecurity",
        school: "ESTIN, Amizour Campus",
        place: "Béjaïa",
        period: "Sept. 2021 – June 2026",
        note: "Systems and network security, network administration, information systems, software development, AI, Machine Learning, IoT security.",
      },
      {
        title: "Academic Master's Degree in Cybersecurity",
        school: "ESTIN, Amizour Campus",
        place: "Béjaïa",
        period: "Sept. 2021 – June 2026",
        note: "Research and development in cybersecurity, AI, Machine Learning, cyber threat analysis and detection.",
      },
      {
        title: "Baccalaureate in Mathematics — Very Good (16.55/20)",
        school: "Hammou Othmane Kheir Eddine High School",
        place: "",
        period: "2021",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Very good" },
      { name: "English", level: "Very good" },
    ],
  },
  contact: {
    title: "Contact",
    text: "An opportunity, an internship, a security project? Get in touch — I'd be glad to hear from you.",
    email: "Send an email",
    linkedin: "LinkedIn profile",
    cvFr: "CV (FR)",
    cvEn: "CV (EN)",
  },
  footer: "Built with Next.js · Hosted on Vercel",
};

export const content: Record<Lang, Content> = { fr, en };
