export const site = {
  name: 'Azeez Ibrahim A.',
  shortName: 'Azeez',
  title: 'Azeez Ibrahim A. — Forward Deployed Engineer',
  description:
    'Forward Deployed Engineer with 6+ years building production systems across cloud, payments and AI. Based in Lagos, Nigeria. Open to UK/EU relocation and remote roles.',
  url: 'https://kunmi02.github.io',
  email: 'azeezakinkunmi02@gmail.com',
  location: 'Lagos, Nigeria',
  openness: 'Open to UK/EU relocation and remote',
  headline:
    'Forward Deployed Engineer | Bridging customer needs and engineering through developer platforms, cloud infrastructure, and AI-powered solutions.',
  valueProp:
    '6+ years of software engineering. Based in Lagos, Nigeria. Open to UK/EU relocation and remote.',
  years: '6+',
  social: {
    linkedin: 'https://linkedin.com/in/azeezakinkunmi',
    github: 'https://github.com/kunmi02',
  },
  cvPath: '/Azeez_Ibrahim_CV.pdf',
  image: '/images/author.jpg',
  ogImage: '/og-image.png',
} as const;

export const experience = [
  {
    company: 'Port.io',
    location: 'US, remote',
    role: 'Forward Deployed Engineer / Technical Customer Success Engineer',
    period: 'Jul 2025 – present',
    highlights: [
      'Senior IC for enterprise accounts adopting Port’s internal developer platform; run workshops and solution design with customer engineering teams.',
      'Built a Terraform “Actions ROI” module that cut setup from 4–6 hours to about 10 minutes.',
      'Shipped a Blueprint YAML validator that cut integration breakages by about 65%.',
      'Built real-time agent streaming of CI/CD logs from Jenkins, Buildkite and CircleCI.',
      'Implemented async resync and adaptive rate limiting for more reliable integrations.',
      'Automated workflows with n8n, OpenAI, Jira and Slack.',
    ],
  },
  {
    company: 'Jasetech',
    location: 'Canada, remote',
    role: 'Senior Full Stack Engineer',
    period: 'Sep 2023 – Jul 2025',
    highlights: [
      'Built products with FastAPI, React, TypeScript and PostgreSQL on Azure.',
      'Delivered Autogen AI agents that turn crawled web data into marketing strategies.',
      'Improved latency by 30% and sustained 99.99% uptime with solid CI/CD.',
    ],
  },
  {
    company: 'Kyshi',
    location: 'UK, remote',
    role: 'Full Stack Engineer, team lead of 3',
    period: 'Apr 2022 – Sep 2023',
    highlights: [
      'Shipped with Django, Next.js, Rails, PostgreSQL and Firestore on GCP and Kubernetes.',
      'Built Express remittances covering 10+ African countries.',
      'Delivered the first Merchant of Record platform, contributing to 100%+ revenue growth.',
      'Built a Slack bot that cut support time by 60%.',
    ],
  },
  {
    company: 'Samaritan',
    location: 'US',
    role: 'Rails contractor',
    period: 'Sep 2021 – Dec 2021',
    highlights: [
      'Built event-driven notifications that improved retention by 10%.',
      'Used TDD practices that cut bugs by 60%.',
    ],
  },
  {
    company: 'Bloc',
    location: 'Lagos',
    role: 'Integrations Engineer',
    period: 'Jul 2019 – Sep 2021',
    highlights: [
      'Shipped wallet-to-any-Nigerian-bank transfers: ₦90M+ moved in under 6 months, with revenue up 10%.',
      'Built partner APIs and cut reconciliation effort by 50%.',
      'Migrated Python 2 microservices to Python 3, reducing downtime by 40%.',
      'Mentored junior engineers.',
    ],
  },
] as const;

export const projects = [
  {
    name: 'StudySnap',
    url: 'https://usestudysnap.com',
    summary:
      'Live AI study platform I built and run. Three paying monthly subscribers today.',
    impact: 'Live product with paying users',
    tags: ['AI', 'Product', 'Full stack'],
  },
  {
    name: 'GrapeCare',
    url: 'https://grape.care',
    summary:
      'Community health platform connecting people to volunteers. A blood drive is underway.',
    impact: 'Community health, volunteer matching',
    tags: ['Health', 'Community'],
  },
  {
    name: 'GitDeclutter',
    url: 'https://github.com/kunmi02/git-declutter',
    summary:
      'Go CLI that analyzes stale local Git branches and classifies each as SAFE, REVIEW, KEEP or PROTECTED before anything is deleted. Uses local history, remote tracking state, and GitHub/GitLab PR metadata.',
    impact: 'Side project — safe branch cleanup',
    tags: ['Go', 'CLI', 'Developer tools'],
  },
  {
    name: 'UI blood-donor app',
    url: null,
    summary:
      'Final-year Android app to locate willing blood donors, find nearest blood banks, and register as a volunteer.',
    impact: 'University of Ibadan final-year project',
    tags: ['Android', 'Health'],
  },
] as const;

export const openSource = [
  {
    name: 'Port Terraform Provider',
    repo: 'port-labs/terraform-provider-port-labs',
    url: 'https://github.com/port-labs/terraform-provider-port-labs',
    prCount: 7,
    contributions: [
      {
        number: 340,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/340',
        description:
          'Added `port_organization` Terraform resource to manage organization settings.',
      },
      {
        number: 342,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/342',
        description:
          'Expanded organization resource to support additional API settings, announcements and permissions.',
      },
      {
        number: 315,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/315',
        description: 'Fixed importing action dataset rules containing primitive values.',
      },
      {
        number: 306,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/306',
        description: 'Fixed blueprint permissions import.',
      },
      {
        number: 303,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/303',
        description: 'Improved test coverage for JQ array minimum and maximum constraints.',
      },
      {
        number: 301,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/301',
        description: 'Added dynamic JQ expression support for array min/max items.',
      },
      {
        number: 292,
        url: 'https://github.com/port-labs/terraform-provider-port-labs/pull/292',
        description: 'Added Terraform-based organization secret management.',
      },
    ],
  },
  {
    name: 'Port Experimental – Terraform Import Generator',
    repo: 'port-experimental/terraform-import-generator',
    url: 'https://github.com/port-experimental/terraform-import-generator',
    prCount: 6,
    contributions: [
      {
        number: 7,
        url: 'https://github.com/port-experimental/terraform-import-generator/pull/7',
        description: 'Added system blueprint support.',
      },
      {
        number: 8,
        url: 'https://github.com/port-experimental/terraform-import-generator/pull/8',
        description: 'Handled installation IDs containing whitespace.',
      },
      {
        number: 9,
        url: 'https://github.com/port-experimental/terraform-import-generator/pull/9',
        description: 'Added configurable base URL support.',
      },
      {
        number: 10,
        url: 'https://github.com/port-experimental/terraform-import-generator/pull/10',
        description: 'Fixed alias handling.',
      },
      {
        number: 11,
        url: 'https://github.com/port-experimental/terraform-import-generator/pull/11',
        description: 'Fixed system blueprint import.',
      },
      {
        number: 12,
        url: 'https://github.com/port-experimental/terraform-import-generator/pull/12',
        description: 'Fixed entity import page.',
      },
    ],
  },
] as const;

export const skills = {
  'Languages & runtimes': ['Python', 'TypeScript', 'Node'],
  Backend: ['Django', 'Flask', 'FastAPI', 'Rails'],
  Frontend: ['React', 'Next.js'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'GraphQL'],
  'Cloud & ops': ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  'Automation & AI': ['n8n', 'LLM agents'],
} as const;

export const education = [
  {
    school: 'University of Ibadan',
    credential: 'BSc Computer Science',
    period: '2016 – 2019',
  },
  {
    school: 'LASUSTECH',
    credential: 'ND Computer Science, Distinction',
    period: '2012 – 2014',
  },
  {
    school: 'AltSchool Africa',
    credential: 'Cloud Engineering Diploma',
    period: '2024 – 2025',
  },
] as const;

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'French', level: 'A1' },
  { name: 'Yoruba', level: null },
] as const;

export const aboutParagraphs = [
  'I’m Azeez, a software engineer with 6+ years building production systems across cloud, payments and AI.',
  'I started at Bloc in Lagos on wallet-to-bank transfers that moved ₦90M+ in under 6 months. At Kyshi I led a team of 3 on remittances and the first Merchant of Record platform. At Jasetech I built FastAPI and React systems on Azure, including Autogen AI agents. At Port.io I work as a Forward Deployed Engineer / Technical Customer Success Engineer with enterprise teams adopting the internal developer platform.',
  'I’m based in Lagos, Nigeria, and open to UK/EU relocation and remote roles in Forward Deployed Engineering, Customer Success Engineering, Technical Support Engineering, Senior Full Stack and Solutions Engineering.',
] as const;
