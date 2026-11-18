
import styles from './HowIWork.module.css'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

const workPrinciples = [
    {
        number: '01',
        title: 'Organization',
        description:
            'Planning tasks, tracking progress and coordinating development workflows to keep projects structured and moving forward.',
    },
    {
        number: '02',
        title: 'Problem Solving',
        description:
            'Understanding real business needs and translating them into practical technical solutions.',
    },
    {
        number: '03',
        title: 'Collaboration',
        description:
            'Working with teams, sharing decisions and resolving integration challenges through clear communication.',
    },
    {
        number: '04',
        title: 'AI-assisted Work',
        description:
            'Using AI tools to support research, explore alternatives, structure project plans and improve development workflows.',
    },
]

function HowIWork() {
    return (
        <section
            id="how-i-work"
            className={styles.howIWork}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <ScrollReveal>
                        <p className={styles.eyebrow}>Beyond code</p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className={styles.title}>
                            How I work.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className={styles.description}>
                            Building products involves more than writing code.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {workPrinciples.map((principle, index) => (
                        <ScrollReveal
                            key={principle.number}
                            delay={index * 120}
                        >
                            <article className={styles.card}>
                                <span className={styles.number}>
                                    {principle.number}
                                </span>

                                <h3>{principle.title}</h3>

                                <p>{principle.description}</p>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowIWork
