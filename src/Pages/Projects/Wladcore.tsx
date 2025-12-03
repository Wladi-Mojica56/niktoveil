import styles from "./Wladcore.module.css"
import heroImage from "../../assets/imgs/wladcore.png"

const highlights = [
    {
        title: "Objetivo",
        text: "Diseñar y lanzar productos web con alto rendimiento y escalabilidad para startups y pymes."
    },
    {
        title: "Enfoque",
        text: "Discovery ágil, diseño UI/UX, desarrollo full-stack y despliegue continuo."
    },
    {
        title: "Entrega",
        text: "MVP en semanas, analítica integrada y handoff documentado para tu equipo."
    }
]

const services = [
    "Landing pages y sitios corporativos optimizados para SEO",
    "Dashboards y paneles administrativos con auth y roles",
    "Ecommerce y pasarelas de pago integradas",
    "Integraciones con APIs externas y automatización de flujos"
]

const processSteps = [
    "Kickoff: objetivos, métricas y priorización de alcance",
    "Wireframes + UI kit y aprobaciones rápidas",
    "Sprints de desarrollo con demos semanales",
    "QA + performance + accesibilidad",
    "Entrega, capacitación y soporte post-lanzamiento"
]

const stack = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Vercel / AWS"
]

const roadmap = [
    "Design system ligero reutilizable",
    "Biblioteca de componentes para dashboards",
    "Plantillas de landing multi-industria"
]

const link = "https://wladi-mojica56.github.io/wladcore/"

export default function WladcorePage() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.heroBadge}>Proyecto / Desarrollo web</div>
                <h1 className={styles.title}>Wladcore</h1>
                <p className={styles.lead}>
                    Startup de desarrollo web enfocada en construir productos digitales rápidos, seguros y listos para escalar.
                </p>
                <div className={styles.metaRow}>
                    <span className={styles.meta}>Versión: 1.0.0</span>
                    <span className={styles.meta}>Estado: En curso</span>
                    <span className={styles.meta}>Actualizado: Hoy</span>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Visitar plataforma
                </a>
            </header>

            <div className={styles.projectPreview}>
                <div className={styles.previewContainer}>
                    <img
                        src={heroImage}
                        alt="Wladcore - Vista previa"
                        className={styles.previewImage}
                    />
                    <div className={styles.previewOverlay}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.previewButton}
                            aria-label="Abrir Wladcore en nueva ventana"
                        >
                            <span>Ver demo</span>
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
                        <a href="#servicios">Servicios</a>
                        <a href="#proceso">Proceso</a>
                        <a href="#stack">Stack</a>
                        <a href="#estado">Estado & Roadmap</a>
                    </nav>
                </aside>

                <main className={styles.content}>
                    <section id="resumen" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Resumen</h2>
                            <p>Qué hacemos y qué obtiene tu equipo.</p>
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

                    <section id="servicios" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Servicios</h2>
                            <p>Casos y entregables más frecuentes.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            {services.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="proceso" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Proceso</h2>
                            <p>Cómo trabajamos de kickoff a lanzamiento.</p>
                        </div>
                        <ol className={styles.listOrdered}>
                            {processSteps.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ol>
                    </section>

                    <section id="stack" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Stack & utilidades</h2>
                            <p>Herramientas principales y plataformas de despliegue.</p>
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
                            Próximo: casos de estudio publicados y portal de clientes para seguimiento.
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
