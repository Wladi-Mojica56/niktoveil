import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'
import writer from '../assets/imgs/writer.png'
import project2 from '../assets/imgs/whitehunters.png'
import project3 from '../assets/imgs/pexels-sora-shimazaki-5926389.jpg'

function Hero() {
    const [isHovering, setIsHovering] = useState<number | null>(null)

    const projects = [
        {
            id: 1,
            name: 'Writer Portfolio',
            image: writer,
            alt: 'Writer Portfolio Project',
            link: '/projects/writer'
        },
        {
            id: 2,
            name: 'White Hunters',
            image: project2,
            alt: 'White Hunters Project',
            link: '/projects/whitehunter'
        },
        {
            id: 3,
            name: 'Pentest Security',
            image: project3,
            alt: 'Pentest Security Project',
            link: '/projects/interview'
        }
    ]

    return (
        <section className={styles.hero} aria-label="Hero">
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Experiencias digitales que elevan tu marca.
                    </h1>

                    <p className={styles.heroSubtitle}>
                        Desarrollamos plataformas web de alto rendimiento, con diseno impecable, automatizaciones inteligentes y analisis de seguridad integrados. Tecnologia, estetica y precision como un solo lenguaje.
                    </p>

                    <div className={styles.heroButtons}>
                        <a href="https://wa.me/3248213762" target="_blank" rel="noopener noreferrer" className={styles.heroButtonPrimary}>Solicitar una consulta privada</a>
                        <Link to="/portfolio" className={styles.heroButtonSecondary}>Ver Trabajos</Link>
                    </div>
                </div>

                <aside className={styles.heroAside} aria-hidden="true" />
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className={styles.projectTile}
                        onMouseEnter={() => setIsHovering(project.id)}
                        onMouseLeave={() => setIsHovering(null)}
                    >
                        <img
                            src={project.image}
                            alt={project.alt}
                            className={styles.projectTileImage}
                        />
                        <div className={styles.projectTileOverlay}>
                            <div className={styles.projectTileContent}>
                                <h2 className={styles.projectTileName}>{project.name}</h2>
                                <span className={styles.projectTileCategory}>Platform</span>
                            </div>
                            <Link
                                to={project.link}
                                className={styles.projectTileButton}
                                aria-label={`Ver caso de ${project.name}`}
                            >
                                {isHovering === project.id ? 'Ver Caso' : 'Explorar'}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Hero;


