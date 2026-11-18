
import { useState } from 'react'
import styles from './Header.module.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Main navigation">
                <a href="#home" className={styles.logo} onClick={closeMenu}>
                    Leonel Bruno<span>.</span>
                </a>

                <button
                    type="button"
                    className={styles.menuButton}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="main-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <div
                    id="main-menu"
                    className={`${styles.links} ${menuOpen ? styles.open : ''}`}
                >
                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>
                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>
                    <a href="#education" onClick={closeMenu}>
                        Education
                    </a>
                    <a
                        href="#contact"
                        className={styles.contactButton}
                        onClick={closeMenu}
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
