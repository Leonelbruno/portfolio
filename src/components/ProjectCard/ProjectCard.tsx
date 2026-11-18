
import type { Project } from '../../data/projects'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
    project: Project
}

const statusLabels = {
    live: 'Live project',
    development: 'In development',
    completed: 'Completed',
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article
            className={`${styles.card} ${project.featured ? styles.featured : ''
                }`}
        >{project.image && (
            <div className={styles.imageContainer}>
                <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className={styles.image}
                />
            </div>
        )}
            <div className={styles.header}>
                <span className={styles.status}>
                    {statusLabels[project.status]}
                </span>

                {project.featured && (
                    <span className={styles.featuredLabel}>
                        Featured
                    </span>
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>
                    {project.title}
                </h3>

                <p className={styles.description}>
                    {project.description}
                </p>

                {project.role && (
                    <p className={styles.role}>
                        {project.role}
                    </p>
                )}

                {project.contributions && (
                    <div className={styles.contributionSection}>
                        <h4>Technical Contributions</h4>

                        <ul>
                            {project.contributions.map((contribution) => (
                                <li key={contribution}>{contribution}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.additionalContributions && (
                    <div className={styles.contributionSection}>
                        <h4>Product & Collaboration</h4>

                        <ul>
                            {project.additionalContributions.map((contribution) => (
                                <li key={contribution}>{contribution}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
                        <span key={technology} className={styles.tag}>
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.links}>
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo ↗
                    </a>
                )}

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard
