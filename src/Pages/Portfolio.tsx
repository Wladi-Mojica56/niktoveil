import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";
import white from "../assets/imgs/whitehunters.png";
import writer from "../assets/imgs/writer.png";
import wladcore from "../assets/imgs/wladcore.png";
import aurora from "../assets/imgs/pexels-sora-shimazaki-5926389.jpg";
import wladcode from "../assets/imgs/wladcode.png";

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "WhiteHunter",
            description: "Dashboard interactivo con analisis en tiempo real, autenticacion segura e integracion de APIs.",
            category: "startup",
            tags: ["React", "TypeScript", "Node.js"],
            image: white,
            link: "/projects/whitehunter",
            featured: true
        },
        {
            id: 2,
            title: "WritePortfolio",
            description: "Portafolio profesional de alto rendimiento enfocado en escritura y creatividad.",
            category: "portfolio",
            tags: ["React", "TypeScript", "Next.js"],
            image: writer,
            link: "/projects/writer",
            featured: true
        },
        {
            id: 3,
            title: "Interview AI",
            description: "Plataforma de entrevistas enfocadas en desarrollo de logica y algoritmos con feedback instantaneo.",
            category: "platform",
            tags: ["React", "Framer Motion", "CSS", "SEO"],
            image: aurora,
            link: "/projects/interview",
            featured: false
        },
        {
            id: 4,
            title: "WladCore",
            description: "Startup enfocada en desarrollo web y apps con un enfoque en el desarrollo de productos digitales.",
            category: "startup",
            tags: ["React", "TypeScript", "Next.js"],
            image: wladcore,
            link: "/projects/wladcore",
            featured: true
        },
        {
            id: 5,
            title: "DevPortfolio",
            description: "Portafolio profesional de desarrollador web frontend con proyectos de alto impacto.",
            category: "portfolio",
            tags: ["React", "Javascript", "Next.js"],
            image: wladcode,
            link: "/projects/wladcode",
            featured: false
        }
    ];

    return (
        <div className={styles.portfolio}>
            {/* Hero Section */}
            <section className={styles.portfolioHero}>
                <div className={styles.portfolioHeroContainer}>
                    <div className={styles.portfolioHeroContent}>
                        <h1 className={styles.portfolioTitle}>
                            Proyectos que inspiran
                        </h1>
                        <p className={styles.portfolioLead}>
                            Explora nuestro portafolio de proyectos digitales de alto rendimiento, desde plataformas SaaS hasta experiencias de usuario excepcionales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className={styles.projectsSection}>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectsGrid}>
                        {projects.map((project) => {
                            const isInternal = project.link.startsWith("/");

                            if (isInternal) {
                                return (
                                    <Link
                                        key={project.id}
                                        to={project.link}
                                        className={`${styles.projectCard} ${project.featured ? styles.featured : ""}`}
                                    >
                                        <div className={styles.projectImageWrapper}>
                                            <div
                                                className={styles.projectImage}
                                                style={{ backgroundImage: `url(${project.image})` }}
                                                aria-label={project.title}
                                            />
                                        </div>

                                        <div className={styles.projectContent}>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <p className={styles.projectDescription}>{project.description}</p>

                                            <div className={styles.projectTags}>
                                                {project.tags.slice(0, 3).map((tag, index) => (
                                                    <span key={index} className={styles.projectTag}>{tag}</span>
                                                ))}
                                            </div>

                                            <div className={styles.projectFooter}>
                                                <span className={styles.projectCta}>
                                                    Ver Proyecto
                                                    <FiExternalLink />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }

                            return (
                                <a
                                    key={project.id}
                                    href={project.link || "#"}
                                    className={`${styles.projectCard} ${project.featured ? styles.featured : ""}`}
                                    target={project.link.startsWith("http") ? "_blank" : undefined}
                                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    <div className={styles.projectImageWrapper}>
                                        <div
                                            className={styles.projectImage}
                                            style={{ backgroundImage: `url(${project.image})` }}
                                            aria-label={project.title}
                                        />
                                    </div>

                                    <div className={styles.projectContent}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDescription}>{project.description}</p>

                                        <div className={styles.projectTags}>
                                            {project.tags.slice(0, 3).map((tag, index) => (
                                                <span key={index} className={styles.projectTag}>{tag}</span>
                                            ))}
                                        </div>

                                        <div className={styles.projectFooter}>
                                            <span className={styles.projectCta}>
                                                Ver Proyecto
                                                <FiExternalLink />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statsContainer}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statBox}>
                            <h3 className={styles.statValue}>100%</h3>
                            <p className={styles.statLabel}>Calidad Asegurada</p>
                        </div>
                        <div className={styles.statBox}>
                            <h3 className={styles.statValue}>98%</h3>
                            <p className={styles.statLabel}>Satisfaccion de Clientes</p>
                        </div>
                        <div className={styles.statBox}>
                            <h3 className={styles.statValue}>2+</h3>
                            <p className={styles.statLabel}>Anos de Experiencia</p>
                        </div>
                        <div className={styles.statBox}>
                            <h3 className={styles.statValue}>24/7</h3>
                            <p className={styles.statLabel}>Soporte</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
