import styles from "./WhiteHunter.module.css";
import heroImage from "../../assets/imgs/whitehunters.png";

const highlights = [
    {
        title: "Objetivo",
        text: "Pentesting continuo para reforzar la postura de seguridad y cumplir con marcos como OWASP y CIS."
    },
    {
        title: "Enfoque",
        text: "Pruebas manuales y automatizadas, reporting accionable y remediacion guiada."
    },
    {
        title: "Entrega",
        text: "Informe ejecutivo, evidencias tecnicas y plan de mitigacion priorizado por riesgo."
    }
];

const coverage = [
    "API y microservicios (auth, rate limiting, inyecciones)",
    "Aplicaciones web y paneles administrativos",
    "Infraestructura cloud (configuracion y permisos)",
    "Ingenieria social y configuraciones de email (opcional)"
];

const methodology = [
    "Reconocimiento y mapeo de superficies (dominios, endpoints, roles)",
    "Explotacion controlada y escalada de privilegios",
    "Validacion de impacto y pivote interno simulado",
    "Reporte con CVSS, evidencia y pasos de fix",
    "Re-test para confirmar mitigaciones"
];

const stack = [
    "OWASP Testing Guide",
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Custom scripts",
    "CI/CD hooks"
];

const link = "https://wladi-mojica56.github.io/WhiteHunters/";

export default function WhiteHunterPage() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.heroBadge}>Proyecto / Pentesting</div>
                <h1 className={styles.title}>WhiteHunter</h1>
                <p className={styles.lead}>
                    Documentacion viva de la startup WhiteHunter: servicios de pentesting continuo, metodologias y entregables para equipos exigentes.
                </p>
                <div className={styles.metaRow}>
                    <span className={styles.meta}>Version: 1.0.0</span>
                    <span className={styles.meta}>Estado: En curso</span>
                    <span className={styles.meta}>Actualizado: Hoy</span>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Visitar Platform
                </a>
            </header>

            <div className={styles.projectPreview}>
                <div className={styles.previewContainer}>
                    <img
                        src={heroImage}
                        alt="WhiteHunter - Vista previa"
                        className={styles.previewImage}
                    />
                    <div className={styles.previewOverlay}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.previewButton}
                            aria-label="Abrir WhiteHunter en nueva ventana"
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
                        <a href="#cobertura">Cobertura</a>
                        <a href="#metodologia">Metodologia</a>
                        <a href="#stack">Stack</a>
                        <a href="#estado">Estado & Roadmap</a>
                    </nav>
                </aside>

                <main className={styles.content}>
                    <section id="resumen" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Resumen</h2>
                            <p>Que hacemos y que obtiene el cliente.</p>
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

                    <section id="cobertura" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Cobertura</h2>
                            <p>Superficies y frentes evaluados en cada engagement.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            {coverage.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="metodologia" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Metodologia</h2>
                            <p>Fases de trabajo alineadas a OWASP y buenas practicas ofensivas.</p>
                        </div>
                        <ol className={styles.listOrdered}>
                            {methodology.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ol>
                    </section>

                    <section id="stack" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Stack & utilidades</h2>
                            <p>Herramientas y referencias clave.</p>
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
                            <p>Hitos actuales y proximos entregables.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            <li>Playbooks de pruebas manuales publicados.</li>
                            <li>Pipeline de escaneo recurrente en configuracion.</li>
                            <li>Portal de clientes con reportes descargables (en desarrollo).</li>
                        </ul>
                        <div className={styles.calloutMuted}>
                            Proximo: integracion con SIEM para correlacionar hallazgos con eventos en tiempo real.
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
