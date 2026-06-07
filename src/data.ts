/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Education, LeadershipClub, Service, Certification, FAQ, VoluntaryExperience, Achievement } from "./types";

// Import generated premium assets
const profileAshik = "https://i.postimg.cc/jdjPDW02/Whats-App-Image-2025-07-10-at-1-03-33-AM-(1).jpg";
import canvaMockup from "./assets/images/canva_mockup_1780669417181.png";
import brandingMockup from "./assets/images/branding_mockup_1780669436877.png";

export const PERSONAL_INFO = {
  fullName: "Md. Arifeen Ashik",
  tagline: "Marketing Enthusiast, Digital Creator & Branding Strategist",
  shortIntro: "Result-oriented and team-oriented professional with strong communication and leadership skills. Passionate about marketing and content creation, with the ability to effectively guide teams and manage processes.",
  detailedIntro: "Result-oriented and team-oriented professional with strong communication and leadership skills. Passionate about marketing and content creation, with the ability to effectively guide teams and manage processes. Eager to learn, grow, and contribute to organizational success through creativity, collaboration, and continuous improvement.",
  profileImage: profileAshik,
  cvUrl: "#", // Anchor to be linked to simulated modern interactive visual CV download
  contact: {
    address: "Eastern Housing, Pallabi, Mirpur, Dhaka",
    phone: "01969040147",
    email: "arifeenashik57@gmail.com",
    linkedin: "https://www.linkedin.com/in/ashik-arifeen-1a04bb331",
    facebook: "https://www.facebook.com/ashik.arifeen",
    instagram: "https://www.instagram.com/ashik__1111/"
  }
};

export const CORE_STATS = [
  { value: "4", label: "Clubs & Involvements" },
  { value: "20+", label: "Clients Contacted" },
  { value: "3.58", label: "IBA JU CGPA" },
  { value: "5.00", label: "MCPS&C HSC GPA" }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Business Administration (BBA) - 3rd Year",
    institution: "Institute of Business Administration (IBA), Jahangirnagar University",
    duration: "Dec 2023 - Present",
    gpa: "CGPA - 3.58 (upto 5th semester)",
    details: [
      "Major in Marketing",
      "CGPA - 3.58 (upto 5th semester)"
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mirpur Cantonment Public School and College",
    duration: "2020-2022",
    gpa: "GPA- 5.00",
    details: [
      "Science background",
      "GPA- 5.00"
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    role: "Outbound Sales and Service Executive",
    company: "CreatiCore",
    duration: "Jan 2026- April 2026",
    description: [
      "Searched for potential clients/business in different areas, outreached through social media, asked their needs and goals. Collected and organized clients information in excel file. (20+ clients)",
      "Conduct initial sales meeting and pitched the company's offering and services. (10+ clients)"
    ],
    stats: [
      { label: "Clients Reached", value: "20+" },
      { label: "Pitches Run", value: "10+" }
    ]
  }
];

export const VOLUNTARY_EXPERIENCE_DATA: VoluntaryExperience[] = [
  {
    id: "vol-1",
    role: "Campus Ambassador",
    organization: "Agent X- NetCom Learning",
    duration: "April 2025- May 2025",
    bullets: [
      "Oversaw the advertisement of the competition and manage the stalls and booths. Help to register more than 100 students across campus."
    ]
  },
  {
    id: "vol-2",
    role: "Volunteer- Operation and Logistics",
    organization: "Breaking Brand 2.0",
    duration: "March 2025- May 2025",
    bullets: [
      "Breaking Brand 2.0 is a national brand building competition hosted by IBA-JU Business Club. Look after the operational and logistic tasks of the comp and took active part in participation and guest management in the finale."
    ]
  },
  {
    id: "vol-3",
    role: "Junior Executive- Branding and Promotion",
    organization: "Negocio 2.0",
    duration: "April 2025 - May 2025",
    bullets: [
      "Negocio 2.0 is a national sales competition organized by IBA-JU Communication Club. Wrote engaging contents, posts and create short videos to advertise and promote the event"
    ]
  }
];

export const LEADERSHIP_DATA: LeadershipClub[] = [
  {
    id: "club-x",
    role: "Management Associate- Branding & Documentation",
    club: "E-Business and Entrepreneurship Club",
    badge: "Branding",
    description: "Dynamic associate guiding e-business marketing, copywriting documentation, and strategic content planning",
    responsibilities: [
      "Framed event campaign copies, press releases, and structured brand communication guides",
      "Handled official campus announcements and promotional files across social platforms"
    ]
  },
  {
    id: "club-1",
    role: "General Manager- Operation and Finance",
    club: "IBA-JU Business Club",
    badge: "Finance/Ops",
    description: "Leading the core financial budgeting and general operations for major university projects.",
    responsibilities: [
      "Managing major budget sheets and financial logistics for student business events.",
      "Overseeing executive sub-committees on digital branding and marketing engagement."
    ]
  },
  {
    id: "club-2",
    role: "Manager- Operation and Logistics",
    club: "Communic| IBA-JU",
    badge: "Logistics",
    description: "Directing public outreach logistics, technical operations, and digital communication streams.",
    responsibilities: [
      "Coordinating multi-channel messaging arrays for seminars, guest lectures, and networking meets.",
      "Liaising with vendors and corporate partners for event sponsorship materials."
    ]
  },
  {
    id: "club-3",
    role: "Executive Lead- Branding and Operation",
    club: "IBA-JU Sports Club",
    badge: "Branding",
    description: "Designing the visual identity, event branding graphics, and promotional formats.",
    responsibilities: [
      "Crafting social media campaigns to drive public enrollment in university sport fixtures.",
      "Ideating event branding and apparel visual elements using Canva and PowerPoint."
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "srv-1",
    title: "Digital Marketing Strategy",
    tagline: "Social media campaigns & audience engagement formats",
    description: "Developing tailormade digital outreach programs designed to optimize engagement, establish brand authority, and turn prospects into loyal community members.",
    bullets: [
      "Social media campaigns tailored for Facebook, LinkedIn and Instagram",
      "Audience engagement analytics and content calibration",
      "Online branding roadmap architecture",
      "Copywriting and modern content strategy"
    ]
  },
  {
    id: "srv-2",
    title: "Presentation Design",
    tagline: "High-impact slides and corporate pitch decks",
    description: "Transforming raw data and complex business strategies into elegant, visually persuasive visual stories that capture client attention and close deals.",
    bullets: [
      "Ultra-professional Canva and PowerPoint slide decks",
      "Advanced visual storytelling and content hierarchy layout",
      "Slick corporate pitch and sales deck iterations",
      "Academic research defense materials with clean modern visuals"
    ]
  },
  {
    id: "srv-3",
    title: "Canva & Creative Brand Design",
    tagline: "Sleek social graphics, flyers, posters & branding content",
    description: "Providing elite non-designer aesthetic creative solutions. High-contrast layout configurations, curated modern color schemes, and striking typography hierarchies.",
    bullets: [
      "Slick event branding posters, flyers, and social tiles",
      "Curated, modern custom brand guidelines on Canva",
      "Promotional templates built for easy team customization",
      "High-contrast club publication digital posters"
    ]
  },
  {
    id: "srv-4",
    title: "Video Editing & AI Video",
    tagline: "Short-form TikToks, Reels, and YouTube shorts",
    description: "Editing energetic vertical content optimized to trigger algorithm boosts, using modern cut sequences, engaging subtitles, custom b-rolls, and AI generation tools.",
    bullets: [
      "Dynamic vertical video cuts using CapCut & AI platforms",
      "Social narrative styling with subtitles, active zoom, and kinetic audio cues",
      "Promotional brand launch snippets and business teasers",
      "AI-assisted outline and video scene structuring"
    ]
  },
  {
    id: "srv-5",
    title: "AI & Prompt Engineering",
    tagline: "Empowering operational agility using LLMs and modern tools",
    description: "Leveraging state-of-the-art Generative AI frameworks to generate marketing copy, automate pipeline outreach text, and optimize administrative efficiency.",
    bullets: [
      "Advanced prompt design for content creation (ChatGPT, Claude, Gemini)",
      "Automation of repetitive business messaging and lead analysis",
      "Workflow optimizations to save over 10+ hours weekly on administrative tasks",
      "Image and design automation scripting prompts"
    ]
  },
  {
    id: "srv-6",
    title: "Branding & Event Operations",
    tagline: "Physical event branding, logistics, and organizational flow",
    description: "Synchronizing human resource logistics, visual assets, financial spreadsheets, and audience communications to run high-profile business clubs seamlessly.",
    bullets: [
      "Logistics flow mapping for multi-day business contests",
      "Financial budgeting sheets and sponsorship tracking sheets",
      "Cross-functional team leadership across multiple student branches",
      "On-ground operational coordination and audience management"
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Premium Pitch Deck: Multimodal Corporate Design",
    category: "Canva Design",
    description: "A highly refined, minimalist presentation model tailored to represent marketing strategies for fast-growing corporate branches. Features space-grade condensed titles and custom infographics.",
    image: canvaMockup,
    tags: ["Canva", "Presentation Design", "Corporate Pitch", "Typography Focus"],
    role: "Lead Creative Designer",
    brandContext: "Corporate Case Pitch"
  },
  {
    id: "proj-2",
    title: "High-Contrast Branding System for Public Events",
    category: "Branding",
    description: "Complete identity asset library for a major regional club. Uses electric indigo neon highlights with a high-contrast grayscale background to trigger younger Gen-Z professional engagement.",
    image: brandingMockup,
    tags: ["Branding", "Event Design", "Event Campaign", "Social Layout"],
    role: "Executive Operations lead",
    brandContext: "JU Business Fest"
  },
  {
    id: "proj-3",
    title: "Case Application Challenge Layouts",
    category: "Social Media Campaign",
    description: "Curated social advertising asset models developed while participating in elite business programs, including corporate programs by Dabur Bangladesh, Grameenphone, and Arla Foods.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Digital Ads", "Campaign Strategy", "Corporate App", "Audience Target"],
    role: "Brand Strategist",
    brandContext: "Top Corporate Brand Challenges"
  },
  {
    id: "proj-4",
    title: "Interactive Brand Pitch Deck Template",
    category: "Canva Design",
    description: "A plug-and-play Canva kit designed for university club campaigns. Seamless layout rules allow student committee chairs to configure professional flyers in under 5 minutes.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800&auto=format&fit=crop",
    tags: ["Canva Guide", "Branding Assets", "Operational Kit", "Presentation"],
    role: "Operations Architect",
    brandContext: "IBA JU Communication Club"
  },
  {
    id: "proj-5",
    title: "Dynamic Social Engagement Video Sequence",
    category: "Video Editing & Production",
    description: "A rapid vertical marketing video, combining clean visual typography overlays with AI-generated subtitles. Captures high user retention through micro-cuts and audio dynamics.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    tags: ["CapCut", "AI Editing", "Retention Marketing", "Video Content"],
    role: "Video & Script Director",
    brandContext: "CreatiCore Outbound Campaign"
  },
  {
    id: "proj-6",
    title: "Operations & Logistics Master Schema",
    category: "University Project",
    description: "A centralized dashboard blueprint combining cashflow, inventory, and cross-functional team allocation schedules, utilized during Jahangirnagar University's business club tournaments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Excel Master", "Logistics Blueprint", "Operations", "Club Admin"],
    role: "General Manager",
    brandContext: "IBA JU Sports & Operations"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Digital Marketing",
    issuer: "UY Lab",
    date: "2025",
    badgeColor: "from-indigo-500 to-purple-600"
  },
  {
    id: "cert-2",
    title: "Content Creation CapCut",
    issuer: "ICT Bangla Academy",
    date: "2025",
    badgeColor: "from-blue-500 to-indigo-600"
  },
  {
    id: "cert-3",
    title: "Professional Work Experience & Corporate Sales",
    issuer: "CreatiCore",
    date: "2026",
    badgeColor: "from-orange-500 to-amber-600"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ach-1",
    title: "2nd Round- OVER THE WALL",
    subtitle: "Marico Flagship Business Competition"
  },
  {
    id: "ach-2",
    title: "CHAMPION - Fastwind 5.0",
    subtitle: "Badminton Men's Single - IBA-JU Sports Club"
  },
  {
    id: "ach-3",
    title: "CHAMPION - Fastwind 7.0",
    subtitle: "Badminton Men's Doubles - IBA-JU Sports Club"
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "Which academic major is Ashik pursuing and where?",
    answer: "Ashik is pursuing a Bachelor of Business Administration (BBA) at the prestigious Institute of Business Administration (IBA), Jahangirnagar University, with a major specializing in Marketing."
  },
  {
    id: "faq-2",
    question: "What was Ashik's role and success metric in his corporate career at CreatiCore?",
    answer: "He served as an Outbound Sales and Service Executive (Jan – April 2026). His core metrics include conducting over 10+ high-end corporate pitch meetings and contacting 20+ global prospective leads, translating into digital outreach services."
  },
  {
    id: "faq-3",
    question: "What leadership responsibilities does Ashik hold in university?",
    answer: "Ashik actively manages three club positions: General Manager (Operations & Finance) at IBA JU Business Club, Manager (Operations & Logistics) at IBA JU Communication Club, and Executive Lead (Branding & Operations) at IBA JU Sports Club."
  },
  {
    id: "faq-4",
    question: "What is Ashik's long-term professional aspiration?",
    answer: "Ashik aspires to join leading multinational FMCG/Telecom corporations as a senior branding executive. He plans to further solidify his strategic business intellect by pursuing an MBA at top-tier business institutions in the United States."
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Strategic & Operational Skills",
    skills: ["Digital Marketing", "Branding & Identity", "Operational Leadership", "Sales outreach", "Social Media Strategy", "Content Strategy"]
  },
  {
    title: "Creative & Engineering Tools",
    skills: ["Canva Design", "Microsoft PowerPoint", "Microsoft Excel", "Google Slides / Docs", "CapCut Video Editor", "AI & Prompt Engineering (LLMs)"]
  }
];

export const LANGUAGES_DATA = [
  { name: "English", level: "Fluent (Professional / Academic)", percent: 95 },
  { name: "Bangla", level: "Native / Mother Tongue", percent: 100 },
  { name: "Hindi", level: "Spoken Mastery", percent: 85 },
  { name: "Arabic", level: "Intermediate Written & Reading", percent: 65 },
  { name: "Spanish", level: "Currently Learning (Newbie)", percent: 15 }
];
