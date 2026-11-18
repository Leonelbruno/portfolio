
import styles from './Hero.module.css'
import profileImage from '../../assets/images/profile/leonel-bruno.png'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import DarkVeil from '../../components/Backgrounds/DarkVeil'

function Hero() {
    return (
        <section
            className={styles.hero}
            aria-labelledby="hero-title"
        >
            <DarkVeil
                color="#6b12ff"
                speed={0.35}
                flow={0.5}
                brightness={0.7}
                glow={0.3}
                grain={0.02}
                quality={0.5}
                mouseInteraction={true}
                mouseStrength={0.35}
                className={styles.background}
            />
            <div className={`${styles.container} ${styles.layout}`}>
                <div className={styles.content}>
                    <ScrollReveal>
                        <p className={styles.eyebrow}>
                            Full Stack Developer · Frontend-focused
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h1 id="hero-title" className={styles.title}>
                            I build web products from interface to API.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className={styles.stack}>
                            React · TypeScript · JavaScript · Node.js · Express
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className={styles.actions}>
                            <a href="#projects" className={styles.primaryButton}>
                                View projects <span aria-hidden="true">↗</span>
                            </a>

                            <a href="#contact" className={styles.secondaryButton}>
                                Contact me
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.media}>
                    <ScrollReveal delay={200}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={profileImage}
                                alt="Portrait of Leonel Bruno"
                                className={styles.image}
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className={styles.container}>
                <ScrollReveal delay={400}>
                    <a href="#projects" className={styles.scrollHint}>
                        <span>Selected work</span>
                        <span aria-hidden="true">↓</span>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Hero
