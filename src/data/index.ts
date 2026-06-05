import type { Project, Testimonial, NavItem, SocialLinkData } from '../types';

export const navItems: NavItem[] = [
  { label: 'HOME',      path: '/'          },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'CONTACT',   path: '/contact'   },
];


export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jonathan Calero',
    role: 'Founder',
    company: 'JM SPA SOLUTIONS',
    text: 'If you\'re looking for a responsible, efficient designer with a great eye for design, I definitely recommend Willy. His work speaks for itself.',
  },
  {
    id: '2',
    name: 'Glice Gallardo',
    role: 'Independent',
    company: 'Independent',
    text: 'I had the opportunity to work with Willy Lara on the development of my website, and the experience was excellent. From the very first moment, he proved to be a committed, creative, and highly detail-oriented professional.',
  },
  {
    id: '3',
    name: 'Kimberly Lara',
    role: 'Founder',
    company: 'Kairos Gym',
    text: 'Willy delivered exactly what I needed: an attractive, functional design optimized for different devices. Furthermore, he was always available to answer questions and make adjustments, ensuring the final result met my expectations.',
  }
];

export const heroSocials: SocialLinkData[] = [
  { platform: 'whatsapp',   url: 'https://wa.me/506708339',   label: 'WhatsApp'   },
  { platform: 'github',    url: 'https://github.com/WLARA23',    label: 'GitHub'    },
  { platform: 'linkedin',  url: 'https://www.linkedin.com/in/willylaracampos/',  label: 'LinkedIn'  },
  { platform: 'email',   url: 'mailto:willylaracampos@gmail.com',   label: 'Email'   },
];

export const contactSocials: SocialLinkData[] = [
  { platform: 'whatsapp', url: 'https://wa.me/506708339',             label: '+506 7013-8339'          },
  { platform: 'email',    url: 'mailto:willylaracampos@gmail.com',        label: 'willylaracampos@gmail.com' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/willylaracampos/',    label: '/in/willylaracampos'          },
];

export const footerSocials: SocialLinkData[] = [
  { platform: 'whatsapp',   url: 'https://wa.me/506708339',   label: 'WhatsApp'   },
  { platform: 'github',    url: 'https://github.com/WLARA23',    label: 'GitHub'    },
  { platform: 'linkedin',  url: 'https://www.linkedin.com/in/willylaracampos/',  label: 'LinkedIn'  },
  { platform: 'email',   url: 'mailto:willylaracampos@gmail.com',   label: 'Email'   },
];

export const skills = [
  'React', 'Claude Code', 'TypeScript', 'Figma', 'SQLServer', 'Azure Functions',
  'GitHub', 'Next.js', 'Tailwind CSS', 'GraphQL', '.NET Core', 'Power BI',
  'Photoshop', 'Illustrator', 'Wordpress', 'React Native',
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Zentra',
    categories: ['Development', 'UX/UI Design', 'Desktop App'],
    bgColor: '#551C9E',
    image: '/images/projects/zentra.png',
    year: '2026',
    role: 'UX/UI Designer & Full-Stack Developer',
    duration: '3 months',
    overview: 
      'Zentra is a personal finance desktop application designed to centralize income, expenses, services, savings, and debts in one place. It features a bi-weekly budgeting system and a monthly overview panel that reflects real-time budget adjustments.',
    challenge: 
      'Managing personal finances across multiple categories with a bi-weekly payment model required a data architecture that could handle recurring items, date-bounded debts, frozen budget snapshots, and per-period approval workflows — all without losing historical accuracy when base amounts change.',
    solution: 
      'Built with a Tauri 2 shell wrapping a React frontend and a Rust backend with SQLite. The budget system uses an INSERT OR IGNORE freeze strategy to lock approved amounts, while a LEFT JOIN presupuesto_items layer lets users override values per quincena without affecting past records. UI follows Atomic Design with React Hook Form, Zod validation, TanStack Query for server state, and Zustand for auth.',
    results: [
      'Consolidated income, expenses, services, savings, and debts into a single desktop app',
      'Bi-weekly budget approval workflow with freeze-on-approve and re-approval support',
      'Date-bounded debt tracking with automatic active/inactive classification',
      'Full offline operation with local SQLite — no server or internet dependency',
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'Tauri 2', 'Rust', 'SQLite', 'TanStack Query', 'Zustand', 'Zod', 'Claude Code'],
    githubUrl: 'https://github.com/WLARA23',
  },
  {
    id: '2',
    title: 'Car.e',
    categories: ['Development', 'UX/UI Design', 'Mobile App'],
    bgColor: '#551C9E',
    image: '/images/projects/care.png',
    year: '2026',
    role: 'UI/UX Designer & Developer',
    duration: '2 months',
    overview:
      'CAR.E is a mobile app that helps vehicle owners manage their maintenance effortlessly. It supports multiple vehicles, tracks full service and upgrade history, monitors components with maintenance intervals, and provides monthly and per-component spending statistics.',
    challenge:
      'The main challenge was designing an experience that works fully offline with no external dependencies, keeping all data local to the device. The app also needed to support both kilometers and miles natively on a per-vehicle basis, and allow complete data portability between devices without requiring an account or server.',
    solution:
      'Built with React Native and Expo for iOS and Android coverage from a single codebase. Data persistence is 100% local using SQLite via expo-sqlite — no backend or authentication required. A machine-readable export/import format enables transferring a vehicle\'s complete history between devices. Each vehicle configures its own unit of measurement (km/mi), with automatic conversion throughout the entire interface.',
    results: [
      '100% local persistence — works fully offline at all times',
      'Multi-vehicle support with independent unit configuration per vehicle (km/mi)',
      'Full data portability through structured machine-readable export and import',
      'iOS and Android coverage from a single React Native + TypeScript codebase',
    ],
    technologies: ['Figma', 'React Native', 'TypeScript', 'Expo', 'SQLite', 'React Navigation', 'Iconify', 'Claude Code'],
    githubUrl: 'https://github.com/WLARA23',
  },
  {
    id: '3',
    title: 'JM Spa Solutions',
    categories: ['Branding', 'Graphic Design'],
    bgColor: '#17a097',
    image: '/images/projects/jm-spa.png',
    year: '2024',
    role: 'Brand Designer',
    client: 'JM Spa Solutions',
    duration: '1 month',
    overview:
      'Complete visual identity system for JM Spa Solutions, a professional spa maintenance and service provider. The project covered logo design, color palette, typography selection, spa catalog, invoice template, and brand usage guidelines — giving the company a coherent, premium presence across all touchpoints.',
    challenge:
      'The client had no existing visual identity and was operating in a crowded market. The brand needed to communicate professionalism and reliability without feeling cold or corporate, while standing out from competitors who typically use generic stock-style aesthetics.',
    solution:
      'Developed a brand centered on calm authority. The logo uses a custom wordmark paired with an abstract mark that references both water flow and precision. The palette — deep teal — conveys cleanliness and expertise. All deliverables were packaged in an editable brand kit for easy handoff.',
    results: [
      'Delivered a complete brand kit in under 4 weeks',
      'Client reported a noticeably stronger first impression with new prospects',
      'Brand identity applied across print materials, and social media',
      'Zero revision rounds after the second presentation — concept was clear and well-received',
    ],
    technologies: ['Figma', 'Adobe Photoshop', 'Affinity Design'],
    liveUrl: 'https://linkedin.com/in/willylaracampos',
  },
  {
    id: '4',
    title: 'Iron Man Vectorization',
    categories: ['Graphic Design', 'Illustration'],
    bgColor: '#660707',
    image: '/images/projects/iron-man.png',
    year: '2020',
    role: 'Graphic Designer',
    duration: '1 week',
    overview:
      'A high-fidelity vector recreation of the Iron Man armor, produced as a personal study in complex vectorization technique. The goal was to reproduce intricate mechanical details and lighting effects using only vector tools (no raster brushes or filters) resulting in a fully scalable, print-ready illustration.',
    challenge:
      'Iron Man\'s armor involves dozens of overlapping mechanical panels with subtle gradients, hard-edge highlights, and precise symmetry. Reproducing this in vector form without losing the energy of the original required careful layer management and a systematic approach to shading with gradient meshes.',
    solution:
      'Worked from reference photos using a structured layer system: base shapes first, then panel divisions, then highlight and shadow layers. Gradient meshes handled the curved metallic surfaces, while clipping masks kept detail work non-destructive. The final file contains over 300 individual paths organized into logical groups.',
    results: [
      'Final artwork is fully scalable from business card to billboard size',
      'File structure serves as a reusable template for future character vectorizations',
      'Used as a portfolio centerpiece that demonstrates technical precision in illustration',
    ],
    technologies: ['Inkscape'],
  },
  {
    id: '5',
    title: 'Tierra a la Vista',
    categories: ['Development', 'UX/UI Design', 'Game Design'],
    bgColor: '#1c759e',
    image: '/images/projects/tierra-vista.png',
    year: '2021',
    role: 'Game UI/UX Designer & Developer',
    duration: '4 months',
    overview:
      'Tierra a la Vista is a desktop adventure game set in a colonial-era naval world. The project involved designing the complete UI/UX system: HUD elements, menus, inventory screens, dialogue boxes, loading screens, and the overall in-game navigation flow — all in a hand-crafted, parchment-and-wood aesthetic.',
    challenge:
      'Game UI must serve two masters simultaneously: it needs to feel immersive and on-brand while remaining instantly readable under pressure.',
    solution:
      'A coherent design language was created inspired by old nautical charts and ship\'s logs—worn textures, serif typefaces, brass-toned icon frames—while applying strict usability standards: high-contrast legible text and a clear visual hierarchy that guides the eye even in the heat of battle.',
    results: [
      'Designed and implemented a complete in-game UI system — HUD, menus, inventory, dialogue and loading screens — within a 4-month timeline',
      'Achieved a consistent parchment-and-wood visual language across all screens using Figma components integrated directly into Unity 3D',
      'Handled both the UX design and the C# implementation, eliminating the designer-to-developer handoff gap entirely',
      'Delivered a playable desktop build with all UI flows functional end-to-end',
    ],
    technologies: ['Figma', 'Unity 3D', 'C#'],
  },
  {
    id: '6',
    title: 'Self Vectorization',
    categories: ['Graphic Design', 'Illustration'],
    bgColor: '#292929',
    image: '/images/projects/self-vector.png',
    year: '2020',
    role: 'Graphic Designer',
    duration: '3 days',
    overview:
      'A personal vectorized portrait study created as a technical and artistic exercise in stylized self-representation. The illustration is built entirely from vectors with a limited flat-color palette, exploring how far expressive likeness can be pushed without relying on photographic detail or raster shading.',
    challenge:
      'Achieving recognizable likeness in a heavily stylized, flat-vector style requires careful selection of which features to simplify and which to preserve. Too much simplification loses the person; too much detail defeats the purpose of the flat style.',
    solution:
      'Used a deliberate silhouette-first approach (establishing the overall shape language before any detail work) then layered in key facial landmarks as minimal geometric shapes. The result reads as a stylized portrait at any scale.',
    results: [
      'Achieved strong likeness with under 100 vector paths',
      'Established a personal style guide for future character work',
      'Widely used as a profile image across professional platforms',
    ],
    technologies: ['Inkscape'],
  },
  {
    id: '7',
    title: 'Assets Vectorization',
    categories: ['Graphic Design', 'Illustration'],
    bgColor: '#5e320a',
    image: '/images/projects/assets-vector.png',
    year: '2019',
    role: 'Graphic Designer',
    client: 'Independent Client',
    duration: '3 weeks',
    overview:
      'Complete vector asset library for a 2D snakes and ladders board game inspired by Dante\'s Divine Comedy. Deliverables included original characters, board tiles, ascent and descent elements (the game\'s equivalent of ladders and snakes) and decorative props, all designed to evoke the visual language of the Inferno, Purgatorio, and Paradiso across the game board.',
    challenge:
      'Translating the three realms of the Divine Comedy into a coherent, playable board without becoming visually overwhelming. Each asset category (characters, tiles, ascent elements, descent elements, and decoration) had to read clearly at game scale while still communicating the thematic contrast between Hell, Purgatory, and Heaven.',
    solution:
      'Adopted a flat-vector illustration style with a distinct palette per realm: dark reds and charcoal for the Inferno, muted earth tones for Purgatorio, and white tones for Paradiso. All pieces were drawn on a consistent grid for visual cohesion. Ascent and descent elements were designed as thematically opposite pairs (white platforms rising vs. centipedes descending) reinforcing the game mechanics through the art itself.',
    results: [
      'Full asset set delivered: characters, board tiles, ascent elements, descent elements, and decorative props',
      'Three visually distinct realms unified under a single flat-vector illustration style',
      'Thematic pairing of ascent and descent elements communicates game mechanics visually without text',
      'All assets production-ready for direct use in a 2D game engine',
    ],
    technologies: ['Inkscape'],
  },
  {
    id: '8',
    title: 'Real Tickets',
    categories: ['UX/UI Design', 'Web Design'],
    bgColor: '#251c9e',
    image: '/images/projects/real-tickets.png',
    year: '2021',
    role: 'UI/UX Designer',
    client: 'Universidad de Costa Rica (UCR)',
    duration: '3 months',
    overview:
      'Real Tickets is a fictional ticket booking platform for live events (concerts, theatre, and sports) created entirely as a university UX/UI practice project. The scope covered the full design process from concept to high-fidelity prototype in Figma: information architecture, user flows, wireframes, visual design system, and interactive screens. No code was written; the deliverable was a complete, clickable prototype.',
    challenge:
      'Ticket buying platforms are notoriously frustrating: confusing seat maps, hidden fees revealed at checkout, and time-pressured flows that push users into errors. The academic challenge was to tackle a real-world UX problem from scratch (without a client or existing codebase) and produce a design that demonstrably improved clarity and trust through intentional decisions alone.',
    solution:
      'Defined three core design principles to guide every screen: show the total price before the user commits, never hide the seat, and always allow going back without losing progress. The resulting Figma prototype covers the full booking flow — event discovery, seat selection, order summary with transparent fee breakdown, and confirmation — with a consistent design system of reusable components, spacing tokens, and a defined color palette.',
    results: [
      'Delivered a complete high-fidelity Figma prototype covering the end-to-end booking flow',
      'Built a reusable component library and design system as part of the project',
      'Applied UX principles (progressive disclosure, clear hierarchy, error prevention) in a realistic scenario without any code constraints',
      'Served as a hands-on introduction to professional UX/UI process: research, IA, wireframes, and visual design in sequence',
    ],
    technologies: ['Figma', 'FigJam'],
  },
  {
    id: '9',
    title: 'Kiara Goddess',
    categories: ['Branding', 'Graphic Design'],
    bgColor: '#C0607A',
    image: '/images/projects/kiara.png',
    year: '2020',
    role: 'Brand Designer',
    client: 'Kiara Goddess',
    duration: '1 month',
    overview:
      'Kiara Goddess is a Costa Rican beauty brand focused on feminine products — both makeup and skincare. Its broad catalog serves a diverse customer base, making an inclusive brand identity essential. The project delivered a complete visual identity system: an imagotype with horizontal and compact signatures, a full brand manual, a custom typography system, a color palette, and a set of branded graphic elements for print and digital use.',
    challenge:
      'The brand needed to communicate femininity, elegance, and strength at the same time — while also reflecting the inclusivity of its diverse clientele. The visual identity had to scale across physical touchpoints (packaging stickers, thank-you cards) and digital channels (Instagram posts and stories) without losing coherence or impact at any size.',
    solution:
      'The Lotus Flower was chosen as the brand\'s central graphic element — a symbol of beauty, purity, and strength. Titan One anchors the logo with weight and stability; Cutie Cupid adds the femininity and delicacy of the brand; Roboto handles extended text for readability. The color palette combines five analogous pink tones — representing the brand\'s products and clientele — with a gold accent that evokes divinity. The imagotype was designed for full scalability, with both horizontal and compact signature variants.',
    results: [
      'Delivered a complete brand kit: imagotype, brand manual, typography system, color palette, and graphic elements',
      'Horizontal and compact signature variants keep the logo functional from packaging stickers to digital headers',
      'Brand applied to print collateral (stickers, thank-you cards) and Instagram content (feed posts and stories)',
      'Lotus Flower established as a distinctive, recognizable brand symbol across all touchpoints',
    ],
    technologies: ['Inkscape', 'Figma'],
  },
];
