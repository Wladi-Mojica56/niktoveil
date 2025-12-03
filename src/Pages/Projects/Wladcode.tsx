import styles from "./Wladcode.module.css"
import heroImage from "../../assets/imgs/wladcode.png"

const highlights = [
    {
        title: "Enfoque",
        text: "Frontend moderno con rendimiento, accesibilidad y SEO como prioridades."
    },
    {
        title: "Especialidad",
        text: "React, TypeScript, animaciones cuidadas y sistemas de diseño reutilizables."
    },
    {
        title: "Valor",
        text: "Entregas claras: código limpio, documentación y handoff listo para equipos."
    }
]

const certifications = [
    "Frontend Developer - freeCodeCamp",
    "JavaScript Algorithms & Data Structures",
    "React Advanced Patterns (Platzi)",
    "Accesibilidad Web (WAI-ARIA)"
]

const projects = [
    "Dashboard SaaS con roles y dark mode",
    "Landing fintech con animaciones y A/B testing",
    "Ecommerce headless con Next.js y Stripe",
    "Portfolio creativo con microinteracciones"
]

const stack = [
    "React / Next.js",
    "TypeScript",
    "CSS Modules / Tailwind",
    "Framer Motion",
    "Node.js",
    "Vercel"
]

const roadmap = [
    "Publicar blog técnico sobre rendimiento y DX",
    "Agregar sección de estudios de caso con métricas",
    "Integrar panel de analítica del portafolio"
]

const link = "https://wladcode.pro"

export default function WladcodePage() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.heroBadge}>Proyecto / Portfolio</div>
                <h1 className={styles.title}>Wladcode</h1>
                <p className={styles.lead}>
                    Portafolio profesional de frontend: certificaciones, proyectos destacados y enfoque en calidad de producto.
                </p>
                <div className={styles.metaRow}>
                    <span className={styles.meta}>Versión: 1.0.0</span>
                    <span className={styles.meta}>Estado: Público</span>
                    <span className={styles.meta}>Actualizado: Hoy</span>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Ver portafolio
                </a>
            </header>

            <div className={styles.projectPreview}>
                <div className={styles.previewContainer}>
                    <img
                        src={heroImage}
                        alt="Wladcode - Vista previa"
                        className={styles.previewImage}
                    />
                    <div className={styles.previewOverlay}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.previewButton}
                            aria-label="Abrir Wladcode en nueva ventana"
                        >
                            <span>Explorar</span>
                            <span className={styles.previewIcon}>-&gt;</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.layout}>
                <aside className={styles.toc} aria-label="Tabla de contenido">
                    <div className={styles.tocTitle}>Contenido</div>
                    <nav>
                        <a href="#resumen">Resumen</a>
                        <a href="#certificaciones">Certificaciones</a>
                        <a href="#proyectos">Proyectos</a>
                        <a href="#stack">Stack</a>
                        <a href="#estado">Estado & Roadmap</a>
                    </nav>
                </aside>

                <main className={styles.content}>
                    <section id="resumen" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Resumen</h2>
                            <p>Fortalezas principales y propuesta de valor.</p>
                        </div>
                        <div className={styles.cards}>
                            {highlights.map((item) => (
                                <div key={item.title} className={styles.card}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="certificaciones" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Certificaciones</h2>
                            <p>Aprendizajes formales y avales.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            {certifications.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="proyectos" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Proyectos</h2>
                            <p>Casos representativos y escenarios.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            {projects.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="stack" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Stack & utilidades</h2>
                            <p>Herramientas y plataformas preferidas.</p>
                        </div>
                        <div className={styles.tags}>
                            {stack.map((item) => (
                                <span key={item} className={styles.tag}>{item}</span>
                            ))}
                        </div>
                    </section>

                    <section id="estado" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Estado & Roadmap</h2>
                            <p>Qué está listo y qué sigue.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            {roadmap.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <div className={styles.calloutMuted}>
                            Próximo: sección de logros con métricas de impacto y referencias de clientes.
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
