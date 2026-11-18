import cheeseCashDashboard from '../assets/images/cheese-cash/cheese-cash.png'
import binksDashboard from '../assets/images/binks/binks.png'


export type Project = {
    id: string
    title: string
    description: string
    technologies: string[]
    status: 'live' | 'development' | 'completed'
    featured: boolean
    image?: string
    demoUrl?: string
    githubUrl?: string

    role?: string
    contributions?: string[]
    additionalContributions?: string[]
}


export const projects: Project[] = [
    {
        id: 'cheese-cash',
        title: 'Cheese Cash',
        description:
            'A multi-currency digital wallet supporting ARS, USD, EUR and BTC.',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
        status: 'live',
        featured: true,
        image: cheeseCashDashboard,
        demoUrl: 'https://cheesecash-frontend.vercel.app/',
        githubUrl: 'https://github.com/Leonelbruno/cheesecash-frontend',

        role: 'Frontend Development & Team Collaboration',

        contributions: [
            'Built the initial frontend structure and reusable components.',
            'Developed the first dashboard version based on Figma designs.',
            'Integrated registration, login and exchange-rate features with backend REST APIs.',
            'Configured deployment with Vercel and GitHub Actions.',
            'Resolved UI and integration issues through refactoring.',
        ],

        additionalContributions: [
            'Organized team tasks and tracked sprint progress using Notion.',
            'Coordinated development activities and tracked pending tasks.',
            'Collaborated with teammates to resolve integration issues.',
        ],

    },
    {
        id: 'binks',
        title: 'Binks',
        description:
            'A management system for a real food business, covering sales, kitchen operations and inventory.',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
        status: 'development',
        featured: true,
        image: binksDashboard,

        role: 'Full Stack Development & Product Planning',

        contributions: [
            'Contributed to the modular architecture of the frontend and backend.',
            'Implemented the product catalog domain, including categories, products and variants.',
            'Worked on PostgreSQL data modeling, migrations, repositories and API layers.',
            'Developed frontend interfaces connected to backend APIs.',
            'Participated in automated testing and maintainability improvements.',
        ],

        additionalContributions: [
            'Created the initial product roadmap with AI assistance.',
            'Defined development stages, sprint goals, tasks and functional priorities.',
            'Helped distribute responsibilities among team members.',
            'Translated real operational problems into technical requirements.',
            'Used AI to explore solutions and structure project decisions.',
        ],

    },
    {
        id: 'miniblog',
        title: 'MiniBlog API',
        description:
            'A REST API with relational data, validation, automated testing and Swagger documentation.',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Vitest', 'Swagger'],
        status: 'completed',
        featured: false,
        githubUrl: 'https://github.com/Leonelbruno/miniblog-api',
    },
    {
        id: 'palette-generator',
        title: 'Palette Generator',
        description:
            'A responsive color palette generator built with vanilla JavaScript.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        status: 'live',
        featured: false,
        demoUrl: 'https://leonelbruno.github.io/ProyectoM1_Leonel_Bruno_Vera/',
        githubUrl: 'https://github.com/Leonelbruno/ProyectoM1_Leonel_Bruno_Vera',
    },
]
