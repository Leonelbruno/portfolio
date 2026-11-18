import styles from './Footer.module.css'
import DotGrid from '../../components/Backgrounds/DotGrid'

const email = 'leonelbruno972@gmail.com'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <DotGrid
                dotSize={4}
                gap={22}
                baseColor="#2a2435"
                activeColor="#a78bfa"
                proximity={130}
                strength={0.8}
                bounce={0.45}
                tension={0.35}
                shockRadius={280}
                shockStrength={3}
                swell={0.7}
                stretch={0.4}
                glow={0.35}
                opacity={0.65}
            />
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.identity}>
                        <a href="#home" className={styles.logo}>
                            Leonel Bruno<span>.</span>
                        </a>

                        <p className={styles.role}>
                            Full Stack Developer · Frontend-focused
                        </p>
                    </div>

                    <a href="#home" className={styles.backToTop}>
                        Back to top <span aria-hidden="true">↑</span>
                    </a>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Leonel Bruno. All rights reserved.
                    </p>

                    <nav className={styles.links} aria-label="Social links">
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
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email ↗
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
