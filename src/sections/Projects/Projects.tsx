
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './Projects.module.css'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

function Projects() {
    const featuredProjects = projects.filter(
        (project) => project.featured
    )

    const otherProjects = projects.filter(
        (project) => !project.featured
    )

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <header className={styles.sectionHeader}>
                    <ScrollReveal>
                        <p className={styles.eyebrow}>SELECTED WORK</p>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className={styles.title}>
                            Projects<span>.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className={styles.description}>
                            A selection of products and applications
                            I've worked on, from frontend interfaces
                            to backend development.
                        </p>
                    </ScrollReveal>
                </header>

                <div className={styles.featuredGrid}>
                    {featuredProjects.map((project, index) => (
                        <ScrollReveal
                            key={project.id}
                            delay={index * 150}
                        >
                            <ProjectCard project={project} />
                        </ScrollReveal>
                    ))}
                </div>

                {otherProjects.length > 0 && (
                    <div className={styles.otherProjects}>
                        <ScrollReveal>
                            <h3 className={styles.subtitle}>
                                More projects
                            </h3>
                        </ScrollReveal>

                        <div className={styles.otherGrid}>
                            {otherProjects.map((project, index) => (
                                <ScrollReveal
                                    key={project.id}
                                    delay={index * 120}
                                >
                                    <ProjectCard project={project} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
