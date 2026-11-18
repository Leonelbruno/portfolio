
import styles from './Skills.module.css'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

const skillGroups = [
    {
        number: '01',
        title: 'Frontend Development',
        skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Vite',
            'Bootstrap',
            'Responsive Design',
        ],
    },
    {
        number: '02',
        title: 'Backend Development',
        skills: [
            'Node.js',
            'Express',
            'REST APIs',
        ],
    },
    {
        number: '03',
        title: 'Databases',
        skills: [
            'PostgreSQL',
            'MySQL',
            'MongoDB',
            'Firestore',
        ],
    },
    {
        number: '04',
        title: 'Tools & Testing',
        skills: [
            'Git',
            'GitHub',
            'Vitest',
            'Supertest',
            'Swagger / OpenAPI',
            'GitHub Actions',
            'Vercel',
            'Railway',
            'Figma',
        ],
    },
]

function Skills() {
    return (
        <section
            id="skills"
            className={styles.skills}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <ScrollReveal>
                        <p className={styles.eyebrow}>
                            Technical Skills
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className={styles.title}>
                            Technologies I work with.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className={styles.description}>
                            Tools and technologies I use to build,
                            integrate and maintain web applications.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {skillGroups.map((group, index) => (
                        <ScrollReveal
                            key={group.number}
                            delay={index * 120}
                        >
                            <article className={styles.card}>
                                <span className={styles.number}>
                                    {group.number}
                                </span>

                                <h3>{group.title}</h3>

                                <div className={styles.skillList}>
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={styles.skill}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
