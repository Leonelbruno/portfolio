
import styles from './About.module.css'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>

                    <ScrollReveal>
                        <p className={styles.eyebrow}>About me</p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className={styles.title}>
                            Building web products with a product mindset.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className={styles.description}>
                            <p>
                                I'm a Full Stack Developer focused on frontend development.
                                I build responsive web interfaces using React, TypeScript
                                and JavaScript, while also working with Node.js, Express
                                and REST APIs. This full-stack perspective allows me to
                                understand how different parts of an application work together.
                            </p>

                            <p>
                                Beyond implementation, I'm interested in the product behind
                                the code: understanding real needs, organizing work and
                                collaborating to turn ideas into practical solutions.
                            </p>

                            <p>
                                Throughout my projects, I've taken an active role in team
                                organization, task coordination and project planning.
                                I enjoy combining technical problem-solving with clear
                                communication and a collaborative approach. I also use AI
                                tools to support research, planning and development workflows.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className={styles.education}>
                            <span className={styles.educationIcon}>✳</span>

                            <div>
                                <h3>Software Development Technician</h3>
                                <p>
                                    Instituto Tecnológico de Santiago del Estero (ITSE)
                                </p>
                                <span>2024 — 2025</span>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    )
}

export default About
