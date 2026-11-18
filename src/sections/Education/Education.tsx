
import itseLogo from '../../assets/images/education/itse.png'
import soyHenryLogo from '../../assets/images/education/soyhenry.png'

import styles from './Education.module.css'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

const educationItems = [
    {
        id: 'itse',
        institution: 'Instituto Tecnológico de Santiago del Estero (ITSE)',
        degree: 'Software Development Technician',
        period: 'March 2024 — December 2025',
        description:
            'Higher technical education focused on software development, programming fundamentals and application development.',
        logo: itseLogo,
        logoAlt: 'ITSE logo',
    },
    {
        id: 'soyhenry',
        institution: 'SoyHenry',
        degree: 'Full Stack Developer',
        period: 'May 2026 — September 2026',
        description:
            'Full Stack development training focused on frontend, backend, databases and collaborative software projects.',
        logo: soyHenryLogo,
        logoAlt: 'SoyHenry logo',
    },
]

function Education() {
    return (
        <section
            id="education"
            className={styles.education}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <ScrollReveal>
                        <p className={styles.eyebrow}>Education</p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className={styles.title}>
                            Academic background<span>.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className={styles.description}>
                            My academic background and professional training.
                        </p>
                    </ScrollReveal>
                </header>

                <div className={styles.list}>
                    {educationItems.map((item, index) => (
                        <ScrollReveal
                            key={item.id}
                            delay={index * 150}
                        >
                            <article className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.logoContainer}>
                                        <img
                                            src={item.logo}
                                            alt={item.logoAlt}
                                            className={styles.logo}
                                        />
                                    </div>

                                    <div className={styles.info}>
                                        <h3>{item.degree}</h3>

                                        <p className={styles.institution}>
                                            {item.institution}
                                        </p>

                                        <div className={styles.metadata}>
                                            <span className={styles.status}>
                                                Completed
                                            </span>

                                            <span className={styles.period}>
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className={styles.cardDescription}>
                                    {item.description}
                                </p>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
