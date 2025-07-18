// Knowledge Base Articles Data
// Extracted from HTML files for use in the React application

export const knowledgeArticles = [
  {
    id: 'addressing-unconscious-bias',
    slug: 'addressing-unconscious-bias',
    title: 'Addressing Unconscious Bias',
    category: 'Diversity & Inclusion',
    summary: 'Comprehensive frameworks, practical tools, and repeatable processes to systematically recognize, measure, mitigate, and continuously monitor unconscious bias across the entire talent lifecycle.',
    content: {
      sections: [
        {
          title: 'Purpose & Audience',
          content: 'This foundational module provides HR leaders, hiring managers, L&D specialists, and senior executives with the comprehensive frameworks, practical tools, and repeatable processes required to systematically recognize, measure, mitigate, and continuously monitor unconscious (or implicit) bias.'
        },
        {
          title: 'Definition & Scientific Foundations',
          content: 'Unconscious (Implicit) Bias refers to the automatic, unintentional, and deeply ingrained mental shortcuts or associations that influence our perceptions, judgments, and decisions. These biases operate below the level of conscious awareness yet can profoundly affect our behavior in milliseconds.'
        },
        {
          title: 'Why It Matters to the Organization',
          content: 'Unchecked bias is not merely a social issue; it is a significant business liability with measurable consequences. It systematically undermines organizational effectiveness, introduces risk, and incurs direct and indirect costs.'
        }
      ],
      metrics: ['Diverse Shortlist Ratio (DSR)', 'Bias Interruption Index (BII)', 'Structured Interview Compliance Rate', 'Promotion Parity Ratio (PPR)', 'Compensation Equity Ratio (CER)'],
      tools: ['Bias Challenge Questions', 'STAR Method Scoring Rubric', 'Structured Interview Kits'],
      relatedArticles: ['advanced-hr-analytics', 'interviewing-techniques', 'measuring-dei-initiatives']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['bias', 'diversity', 'inclusion', 'hiring', 'unconscious bias', 'DEI']
  },
  {
    id: 'advanced-hr-analytics',
    slug: 'advanced-hr-analytics',
    title: 'Advanced HR Metrics & Strategic Analytics',
    category: 'Analytics & Metrics',
    summary: 'Framework and toolset to elevate HR from traditional reporting to strategic analytics powerhouse, covering predictive, prescriptive, and causal analytics.',
    content: {
      sections: [
        {
          title: 'Objective & Strategic Context',
          content: 'This module provides the framework and toolset to elevate the HR function from a traditional reporting center to a strategic analytics powerhouse. The goal is to move beyond descriptive metrics (what happened) and diagnostics (why it happened) into predictive, prescriptive, and causal analytics.'
        },
        {
          title: 'The Analytics Maturity Model',
          content: 'Organizations can use this model to self-assess their current capabilities and chart a course for advancement. A company can be at different levels for different HR domains.'
        },
        {
          title: 'Scalable Data Architecture Blueprint',
          content: 'A modern, scalable people analytics architecture is essential for moving up the maturity curve. This blueprint illustrates a best-practice, cloud-native approach.'
        }
      ],
      metrics: ['Revenue per FTE', 'Labor Cost as % of Revenue', 'Human Capital ROI', 'Quality of Hire Index', 'Predictive Attrition Score'],
      tools: ['BigQuery/Snowflake', 'Python/R', 'PowerBI/Tableau', 'Machine Learning pipelines'],
      relatedArticles: ['ats-systems', 'performance-management', 'employee-engagement-strategies']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['analytics', 'metrics', 'data', 'HR analytics', 'KPIs', 'reporting']
  },
  {
    id: 'ats-systems',
    slug: 'ats-systems',
    title: 'Applicant Tracking Systems (ATS)',
    category: 'Recruitment & Talent Acquisition',
    summary: 'Comprehensive guide to selecting, implementing, and optimizing an ATS for modern talent acquisition, with specific focus on KSA compliance and Arabic language support.',
    content: {
      sections: [
        {
          title: 'Purpose & Strategic Importance',
          content: 'An Applicant Tracking System (ATS) is the technological backbone of a modern talent acquisition function. Its primary purpose is to centralize candidate data, automate the entire recruitment workflow, ensure robust compliance, and generate actionable analytics for strategic workforce planning.'
        },
        {
          title: 'Key Business Outcomes & ROI',
          content: 'A strategic ATS implementation drives measurable value across several key areas: Accelerated Hiring Velocity, Enhanced Compliance & Risk Mitigation, Improved Quality of Hire, Significant Cost Reduction, and Superior Candidate Experience.'
        },
        {
          title: 'Enterprise Feature Requirements Matrix',
          content: 'When selecting an ATS for the region, this detailed matrix provides a comprehensive checklist including KSA/GCC essential enhancements like Arabic language support and TAQAT/Qiwa integration.'
        }
      ],
      metrics: ['Time-to-Fill', 'Quality of Hire', 'Cost per Hire', 'Candidate Experience Score', 'Compliance Rate'],
      tools: ['ATS platforms', 'HRIS integration', 'API automation', 'Reporting dashboards'],
      relatedArticles: ['job-posting-best-practices', 'interviewing-techniques', 'recruitment-resources']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['ATS', 'recruitment', 'hiring', 'technology', 'HRIS', 'compliance']
  },
  {
    id: 'competitive-benefits-packages',
    slug: 'competitive-benefits-packages',
    title: 'Competitive Benefits Packages',
    category: 'Compensation & Benefits',
    summary: 'Strategic guide to designing differentiated Total Rewards strategies that attract and retain talent in the competitive GCC market, aligned with Saudi Vision 2030.',
    content: {
      sections: [
        {
          title: 'Strategic Positioning & Purpose',
          content: 'In the modern war for talent, benefits are far more than a simple line item in the budget; they are a powerful and visible signal of an employer\'s values, culture, and commitment to its people.'
        },
        {
          title: 'The Integrated Total Rewards Model',
          content: 'Total Rewards = Fixed Compensation + Variable Compensation + Benefits + Recognition + Growth & Development Opportunities. True market leadership requires a balanced and integrated approach across all five pillars.'
        },
        {
          title: 'KSA Statutory Baselines & Competitive Benchmarks',
          content: 'Understanding the legal floor is the first step in building a competitive package, including CCHI-compliant medical coverage, annual leave requirements, and End of Service Benefits.'
        }
      ],
      metrics: ['Benefits utilization rate', 'Employee satisfaction with benefits', 'Cost per employee', 'Retention impact'],
      tools: ['Total Rewards Calculator', 'Benefits administration platforms', 'Cost modeling spreadsheets'],
      relatedArticles: ['equity-compensation', 'pay-for-performance', 'salary-structure']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['benefits', 'compensation', 'total rewards', 'employee benefits', 'KSA compliance']
  },
  {
    id: 'conflict-resolution',
    slug: 'conflict-resolution',
    title: 'Conflict Resolution in the Workplace',
    category: 'Employee Relations',
    summary: 'Structured framework to diagnose conflict types, select appropriate resolution strategies, and build a culture where disagreements are handled productively.',
    content: {
      sections: [
        {
          title: 'Overview & Strategic Rationale',
          content: 'Workplace conflict is an inevitable byproduct of passionate, diverse teams working under pressure. When managed constructively, conflict serves as a powerful catalyst for innovation, deeper understanding, and stronger team cohesion.'
        },
        {
          title: 'A Practical Typology of Workplace Conflict',
          content: 'Understanding the type of conflict is the first step toward resolving it effectively. Types include Task Conflict, Process Conflict, Relationship Conflict, Values Conflict, and Data Conflict.'
        },
        {
          title: 'The Financial Cost of Unmanaged Conflict',
          content: 'Conflict has hard financial costs including lost productivity, employee turnover, management time, and legal/HR investigation costs.'
        }
      ],
      metrics: ['Mean Time-to-Resolution', 'Conflict Recurrence Rate', 'Post-Resolution Satisfaction Score'],
      tools: ['Thomas-Kilmann Instrument (TKI)', 'Facilitated Conversation Script', 'Conflict Cost Calculator'],
      relatedArticles: ['employee-engagement-strategies', 'performance-management', 'leadership-development']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['conflict resolution', 'employee relations', 'mediation', 'workplace conflict', 'communication']
  },
  {
    id: 'digital-training-development',
    slug: 'digital-training-development',
    title: 'Effective Digital Training & Development Strategies',
    category: 'Learning & Development',
    summary: 'Modern integrated ecosystem of microlearning, blended models, gamification, adaptive learning paths, and data-driven evaluation for high-velocity skills development.',
    content: {
      sections: [
        {
          title: 'Strategic Context & Purpose',
          content: 'In an era of rapid technological change and evolving business models, the ability to build new capabilities at scale and speed is a primary driver of competitive advantage.'
        },
        {
          title: 'Aligning Learning Strategy with Business Objectives',
          content: 'Training initiatives that are not directly tied to business outcomes are often perceived as costly overhead. A strategic alignment map ensures every learning program has a clear purpose and measurable impact.'
        },
        {
          title: 'Modern Learning Modalities',
          content: 'Different delivery methods suited for different attributes: Microlearning, Gamification, Blended Learning, and Social Learning.'
        }
      ],
      metrics: ['Course Completion Rate', 'Knowledge Retention Score', 'Behavior Application Score', 'Business Impact Delta', 'Training ROI'],
      tools: ['LMS platforms', 'Authoring tools', 'Learning Record Store (LRS)', 'Analytics platforms'],
      relatedArticles: ['training-needs-assessment', 'leadership-development', 'onboarding-best-practices']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['training', 'L&D', 'digital learning', 'microlearning', 'gamification', 'blended learning']
  },
  {
    id: 'employee-engagement-strategies',
    slug: 'employee-engagement-strategies',
    title: 'Employee Engagement Strategies',
    category: 'Employee Experience',
    summary: 'Comprehensive framework linking engagement to business performance through the Engagement Flywheel model and multi-layered measurement architecture.',
    content: {
      sections: [
        {
          title: 'The Critical Link Between Engagement and Performance',
          content: 'Employee engagement is the emotional commitment, involvement, and discretionary effort an employee brings to their work and workplace. It is a powerful predictor of business outcomes.'
        },
        {
          title: 'The Engagement Flywheel Framework',
          content: 'Engagement is a continuous, self-reinforcing cycle with five key components: Connection, Enablement, Energy, Growth, and Advocacy.'
        },
        {
          title: 'Multi-Layered Measurement Architecture',
          content: 'A robust listening strategy uses multiple instruments including annual surveys, quarterly pulses, always-on feedback, and lifecycle surveys.'
        }
      ],
      metrics: ['Employee Net Promoter Score (eNPS)', 'Engagement Index Score', 'Voluntary Turnover Rate', 'Productivity Metrics'],
      tools: ['Pulse survey template', 'Manager enablement toolkit', 'Action planning workflow'],
      relatedArticles: ['performance-management', 'conflict-resolution', 'onboarding-best-practices']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['engagement', 'employee experience', 'surveys', 'culture', 'retention']
  },
  {
    id: 'equity-compensation',
    slug: 'equity-compensation',
    title: 'Equity Compensation',
    category: 'Compensation & Benefits',
    summary: 'Comprehensive guide to equity instruments, valuation, accounting, and implementation strategies for aligning employee and shareholder interests.',
    content: {
      sections: [
        {
          title: 'Purpose and Strategic Role',
          content: 'Equity compensation is a powerful tool used to align the long-term financial interests of employees with those of shareholders and the organization itself.'
        },
        {
          title: 'Overview of Equity Instruments',
          content: 'Different equity instruments serve different purposes: Stock Options, RSUs, Performance Shares, SARs, and ESPPs.'
        },
        {
          title: 'Legal, Tax & Governance Notes',
          content: 'KSA tax framework, cross-border complexity, capitalization table management, and dilution guardrails.'
        }
      ],
      metrics: ['Grant utilization rate', 'Vesting rates', 'Employee understanding scores', 'Retention impact'],
      tools: ['Black-Scholes calculator', 'Scenario modeling tool', 'Communication pack templates'],
      relatedArticles: ['competitive-benefits-packages', 'pay-for-performance', 'salary-structure']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['equity', 'compensation', 'stock options', 'RSUs', 'ESPP', 'retention']
  },
  {
    id: 'interviewing-techniques',
    slug: 'interviewing-techniques',
    title: 'Mastering the Art of Interviewing',
    category: 'Recruitment & Talent Acquisition',
    summary: 'Evidence-based approach to interviewing that increases predictive validity while ensuring fairness and enhancing candidate experience.',
    content: {
      sections: [
        {
          title: 'Objective and Strategic Importance',
          content: 'The interview is often the most heavily weighted component of any selection process. Mastering interviewing is critical for increasing the predictive validity of hiring decisions.'
        },
        {
          title: 'Comparative Grid of Interview Modalities',
          content: 'Different interview types suited for assessing different attributes: Behavioral, Situational, Competency-Based, Technical, and Values interviews.'
        },
        {
          title: 'Structuring the Interview Panel',
          content: 'A well-structured panel ensures 360-degree coverage and reduces individual bias through defined roles and responsibilities.'
        }
      ],
      metrics: ['Interview-to-Offer Ratio', 'Inter-Rater Reliability', 'Candidate Experience NPS', 'Score vs Performance Correlation'],
      tools: ['STAR method rubric', 'Question bank samples', 'Panel structure guide', 'Legal guidelines'],
      relatedArticles: ['addressing-unconscious-bias', 'ats-systems', 'job-posting-best-practices']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['interviewing', 'hiring', 'recruitment', 'STAR method', 'behavioral interviews']
  },
  {
    id: 'job-posting-best-practices',
    slug: 'job-posting-best-practices',
    title: 'Job Posting Best Practices',
    category: 'Recruitment & Talent Acquisition',
    summary: 'Critical recruitment marketing strategies to attract deep, diverse pools of qualified candidates through transparent, inclusive, and compelling job postings.',
    content: {
      sections: [
        {
          title: 'Goal & Strategic Importance',
          content: 'A job posting is a critical piece of recruitment marketing that acts as a filter, encouraging high-fit candidates to apply while helping lower-fit candidates self-select out.'
        },
        {
          title: 'The Anatomy of a High-Impact Job Posting',
          content: 'A structured 12-part framework including clear title, location, company EVP, role summary, responsibilities, qualifications, compensation transparency, and diversity statement.'
        },
        {
          title: 'SEO & Discoverability',
          content: 'Ensuring postings appear correctly in job search aggregators through structured data (JSON-LD) and strategic keyword usage.'
        }
      ],
      metrics: ['Apply Start Rate', 'Apply Completion Rate', 'Qualified Applicant Rate', 'Time to Fill'],
      tools: ['Inclusive language checkers', 'A/B testing framework', 'JSON-LD structured data'],
      relatedArticles: ['writing-job-descriptions', 'ats-systems', 'addressing-unconscious-bias']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['job postings', 'recruitment marketing', 'inclusive language', 'SEO', 'candidate attraction']
  },
  {
    id: 'measuring-dei-initiatives',
    slug: 'measuring-dei-initiatives',
    title: 'Measuring the Impact of DEI Initiatives',
    category: 'Diversity & Inclusion',
    summary: 'Holistic measurement framework assessing the entire employee lifecycle and connecting DEI efforts to tangible business outcomes through a five-pillar approach.',
    content: {
      sections: [
        {
          title: 'Framework Overview',
          content: 'Moving beyond simple representation metrics to a five-pillar framework: Representation, Experience & Inclusion, Equity, Outcomes, and Business Impact.'
        },
        {
          title: 'Multi-Layered Metric Catalogue',
          content: 'Effective measurement requires a combination of quantitative data and qualitative insights across all five pillars.'
        },
        {
          title: 'The Importance of Intersectionality',
          content: 'Analyzing data through multiple lenses to understand unique experiences of discrimination or privilege based on overlapping identities.'
        }
      ],
      metrics: ['Representation Ratio', 'Inclusion Index Score', 'Pay Equity Gap', 'Promotion Parity Ratio', 'Business Impact Correlation'],
      tools: ['DEI scorecard template', 'Intersectional analysis framework', 'Qualitative survey instruments'],
      relatedArticles: ['addressing-unconscious-bias', 'advanced-hr-analytics', 'employee-engagement-strategies']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['DEI', 'diversity metrics', 'inclusion', 'equity', 'measurement', 'analytics']
  },
  {
    id: 'onboarding-best-practices',
    slug: 'onboarding-best-practices',
    title: 'Onboarding Best Practices',
    category: 'Employee Experience',
    summary: 'Systematic process for integrating new employees through a phased 90-day journey that drives retention, productivity, and cultural alignment.',
    content: {
      sections: [
        {
          title: 'Strategic Rationale: The First 90 Days',
          content: 'Research shows that a new hire\'s experience in their first 90 days is a powerful predictor of their future performance, engagement, and decision to stay with the company long-term.'
        },
        {
          title: 'The Phased Onboarding Model',
          content: 'A world-class onboarding experience is a structured journey from Pre-Boarding through Orientation, Role Immersion, to Integration & Future Focus.'
        },
        {
          title: 'The Onboarding Buddy Program',
          content: 'A buddy is a friendly peer who helps navigate the informal social and cultural landscape of the company.'
        }
      ],
      metrics: ['90-Day Attrition Rate', 'Time-to-Productivity', 'New Hire NPS', 'Manager Satisfaction Score'],
      tools: ['Pre-boarding checklist', 'Buddy program guide', 'Digital onboarding portal', '30/60/90-day templates'],
      relatedArticles: ['employee-engagement-strategies', 'digital-training-development', 'performance-management']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['onboarding', 'new hire experience', 'retention', 'productivity', 'employee experience']
  },
  {
    id: 'pay-for-performance',
    slug: 'pay-for-performance',
    title: 'Pay for Performance (PFP)',
    category: 'Compensation & Benefits',
    summary: 'Compensation strategies linking pay to performance through clear metrics, fair evaluation, and strategic alignment with business objectives.',
    content: {
      sections: [
        {
          title: 'Framework Overview & Guiding Principles',
          content: 'PFP systems directly link employee pay to performance. Guiding principles include Clarity, Fairness, Control, and Alignment.'
        },
        {
          title: 'Catalogue of Compensation Models',
          content: 'Different models suited for different roles: Merit Pay, Individual Bonus, Profit Sharing, Gainsharing, Commission, and Skill-Based Pay.'
        },
        {
          title: 'The Goal Cascade',
          content: 'Ensuring individual performance goals directly support company objectives through a cascading alignment process.'
        }
      ],
      metrics: ['Performance distribution', 'Payout accuracy', 'Employee satisfaction with PFP', 'ROI on variable compensation'],
      tools: ['Goal cascade template', 'Calibration process guide', 'Payout calculation engine'],
      relatedArticles: ['performance-management', 'salary-structure', 'competitive-benefits-packages']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['pay for performance', 'variable compensation', 'bonuses', 'incentives', 'performance management']
  },
  {
    id: 'performance-management',
    slug: 'performance-management',
    title: 'Performance Management',
    category: 'Performance & Development',
    summary: 'Modern continuous performance management focused on performance enablement through regular feedback, coaching, and data-driven development.',
    content: {
      sections: [
        {
          title: 'The Evolution: From Appraisal to Enablement',
          content: 'Modern performance management prioritizes clear goal setting, regular feedback, ongoing coaching, and data-driven development over rating and ranking.'
        },
        {
          title: 'The Continuous Performance Management Cycle',
          content: 'A quarterly cycle of Plan, Monitor, Develop, and Review, with annual Reward decisions based on cumulative performance.'
        },
        {
          title: 'Goal Setting Framework',
          content: 'Using OKR + SMART hybrid approach for setting clear, ambitious, and measurable goals.'
        }
      ],
      metrics: ['Goal achievement rate', 'Feedback frequency', 'Performance improvement rate', 'Manager effectiveness scores'],
      tools: ['OKR templates', 'Check-in guides', 'Performance conversation scripts'],
      relatedArticles: ['pay-for-performance', 'employee-engagement-strategies', 'digital-training-development']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['performance management', 'OKRs', 'feedback', 'coaching', 'continuous improvement']
  },
  {
    id: 'recruitment-resources',
    slug: 'recruitment-resources',
    title: 'Recruitment Resources Hub',
    category: 'Recruitment & Talent Acquisition',
    summary: 'Centralized repository of templates, tools, and guides for running fair, efficient, and effective hiring processes from start to finish.',
    content: {
      sections: [
        {
          title: 'Purpose',
          content: 'This hub serves as a one-stop-shop for all templates, tools, and guides related to the recruitment and selection process.'
        },
        {
          title: 'Resource Library Structure',
          content: 'Organized into Templates, Checklists, Calculators & Tools, and Guides for easy access and implementation.'
        }
      ],
      metrics: ['Resource utilization', 'Process standardization', 'Time savings', 'Quality improvements'],
      tools: ['Job description templates', 'Interview kits', 'Cost calculators', 'Process checklists'],
      relatedArticles: ['ats-systems', 'interviewing-techniques', 'job-posting-best-practices']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['recruitment', 'resources', 'templates', 'tools', 'hiring process']
  },
  {
    id: 'salary-structure',
    slug: 'salary-structure',
    title: 'Designing Salary Structures',
    category: 'Compensation & Benefits',
    summary: 'Systematic framework for defining job values within an organization, ensuring internal equity and external competitiveness.',
    content: {
      sections: [
        {
          title: 'Purpose',
          content: 'A salary structure provides a systematic framework for defining the value of different jobs, ensuring both internal equity and external competitiveness.'
        },
        {
          title: 'The Process Flow',
          content: 'Seven-step process from Job Analysis through Implementation & Communication, including evaluation, benchmarking, and grade creation.'
        }
      ],
      metrics: ['Internal equity ratio', 'Market competitiveness index', 'Grade distribution', 'Compa-ratio'],
      tools: ['Job evaluation methods', 'Market data sources', 'Salary range calculators'],
      relatedArticles: ['competitive-benefits-packages', 'pay-for-performance', 'equity-compensation']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['salary structure', 'compensation', 'job evaluation', 'pay grades', 'market benchmarking']
  },
  {
    id: 'training-needs-assessment',
    slug: 'training-needs-assessment',
    title: 'Training Needs Assessment (TNA)',
    category: 'Learning & Development',
    summary: 'Systematic process for identifying gaps between current and desired KSAs, ensuring targeted and effective training investments aligned with business goals.',
    content: {
      sections: [
        {
          title: 'Purpose',
          content: 'A TNA ensures that training investments are targeted, effective, and aligned with strategic business goals, preventing wasteful spending on irrelevant programs.'
        },
        {
          title: 'The 3-Level Analysis Framework',
          content: 'Organizational Analysis (where training is needed), Task/Occupational Analysis (what skills are required), and Individual Analysis (who needs training).'
        }
      ],
      metrics: ['Skills gap closure rate', 'Training effectiveness', 'ROI on training spend', 'Performance improvement'],
      tools: ['TNA survey templates', 'Skills assessment tools', 'Gap analysis frameworks'],
      relatedArticles: ['digital-training-development', 'leadership-development', 'performance-management']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['training needs', 'skills gap', 'L&D', 'assessment', 'workforce planning']
  },
  {
    id: 'leadership-development',
    slug: 'leadership-development',
    title: 'Understanding Leadership Development Programs',
    category: 'Learning & Development',
    summary: 'Critical component of succession planning building a robust pipeline of future leaders through the 70-20-10 development model.',
    content: {
      sections: [
        {
          title: 'Strategic Importance',
          content: 'LDPs build a robust pipeline of future leaders with skills, knowledge, and experience to execute company strategy and navigate future challenges.'
        },
        {
          title: 'The 70-20-10 Model',
          content: '70% Experiential Learning (stretch assignments, rotations), 20% Social Learning (mentoring, coaching), 10% Formal Learning (coursework).'
        }
      ],
      metrics: ['Leadership pipeline strength', 'Succession readiness', 'Program completion rates', 'Promotion rates of graduates'],
      tools: ['70-20-10 planning template', 'Mentoring program guide', 'Leadership competency framework'],
      relatedArticles: ['training-needs-assessment', 'performance-management', 'digital-training-development']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['leadership development', 'succession planning', 'talent management', 'executive development']
  },
  {
    id: 'writing-job-descriptions',
    slug: 'writing-job-descriptions',
    title: 'Writing Effective Job Descriptions',
    category: 'Recruitment & Talent Acquisition',
    summary: 'Dual-purpose tool serving as internal alignment document and external marketing material with comprehensive components for clarity and compliance.',
    content: {
      sections: [
        {
          title: 'The Dual Purpose',
          content: 'An effective job description serves as both an internal alignment tool and an external marketing document.'
        },
        {
          title: 'Key Components',
          content: 'Comprehensive structure including job identification, role summary, essential duties, qualifications, working conditions, and approval information.'
        }
      ],
      metrics: ['Job description clarity score', 'Time to approval', 'Candidate quality', 'Internal alignment'],
      tools: ['Job description template', 'Action verb library', 'Compliance checklist'],
      relatedArticles: ['job-posting-best-practices', 'salary-structure', 'interviewing-techniques']
    },
    author: 'HR Insights Team',
    lastUpdated: '2025-07-18',
    tags: ['job descriptions', 'recruitment', 'job analysis', 'documentation', 'compliance']
  }
];

// Helper function to get articles by category
export const getArticlesByCategory = (category) => {
  return knowledgeArticles.filter(article => article.category === category);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug) => {
  return knowledgeArticles.find(article => article.slug === slug);
};

// Helper function to search articles
export const searchArticles = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return knowledgeArticles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.summary.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Get all unique categories
export const getAllCategories = () => {
  const categories = [...new Set(knowledgeArticles.map(article => article.category))];
  return categories.sort();
};

// Get all unique tags
export const getAllTags = () => {
  const tags = new Set();
  knowledgeArticles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return [...tags].sort();
};

// Get related articles (based on tags and category)
export const getRelatedArticles = (articleId, limit = 3) => {
  const article = knowledgeArticles.find(a => a.id === articleId);
  if (!article) return [];
  
  // Score other articles based on shared tags and category
  const scoredArticles = knowledgeArticles
    .filter(a => a.id !== articleId)
    .map(a => {
      let score = 0;
      
      // Category match
      if (a.category === article.category) score += 2;
      
      // Tag matches
      const sharedTags = a.tags.filter(tag => article.tags.includes(tag));
      score += sharedTags.length;
      
      // Related articles explicitly mentioned
      if (article.content.relatedArticles?.includes(a.id)) score += 3;
      
      return { article: a, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article);
  
  return scoredArticles;
};