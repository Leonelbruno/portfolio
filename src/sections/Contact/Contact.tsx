
import styles from './Contact.module.css'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

const email = 'leonelbruno972@gmail.com'

function Contact() {
    return (
        <section
            id="contact"
            className={styles.contact}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <ScrollReveal>
                        <p className={styles.eyebrow}>
                            Get in touch
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className={styles.title}>
                            Let's build something
                            <span> together.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className={styles.description}>
                            I'm open to opportunities where I can
                            contribute to building useful web products
                            and continue growing as a developer.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.emailLink}
                        >
                            <span className={styles.emailLabel}>
                                EMAIL
                            </span>

                            <span className={styles.emailAddress}>
                                {email}
                            </span>

                            <span aria-hidden="true">↗</span>
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className={styles.links}>
                            <a
                                href="https://github.com/Leonelbruno"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href="https://www.linkedin.com/in/leonel-bruno-vera-b25095412/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href="/cv-leonel-bruno-vera.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View CV ↗
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default Contact
