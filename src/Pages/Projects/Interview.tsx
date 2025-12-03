import styles from "./Interview.module.css";
import heroImage from "../../assets/imgs/pexels-sora-shimazaki-5926389.jpg";

const highlights = [
    {
        title: "Objetivo",
        text: "Plataforma de entrevistas y retos de logica con evaluacion por IA en tiempo real."
    },
    {
        title: "Enfoque",
        text: "Retos tipo LeetCode, feedback guiado, hints progresivos y explicaciones generadas por IA."
    },
    {
        title: "Entrega",
        text: "Dashboard de progreso, reportes descargables y panel para equipos de talento." 
    }
];

const flows = [
    "Selecci?n de nivel y rol (frontend, backend, fullstack)",
    "Resolucion en editor con soporte para TypeScript y Python",
    "Ejecucion en sandbox y feedback inmediato de casos edge",
    "Explicacion paso a paso de la solucion esperada",
    "Recomendaciones personalizadas de temas a reforzar"
];

const stack = [
    "React",
    "TypeScript",
    "Monaco Editor",
    "Node.js",
    "Python Sandbox",
    "OpenAI API (feedback)"
];


const link = "https://interview-ai.example.com";

export default function InterviewPage() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.heroBadge}>Proyecto / Entrevistas</div>
                <h1 className={styles.title}>Interview AI</h1>
                <p className={styles.lead}>
                    Practica de logica de programacion con experiencia tipo LeetCode y feedback de IA en tiempo real.
                </p>
                <div className={styles.metaRow}>
                    <span className={styles.meta}>Version: 0.9.0</span>
                    <span className={styles.meta}>Estado: Beta</span>
                    <span className={styles.meta}>Actualizado: Hoy</span>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Probar demo
                </a>
            </header>

            <div className={styles.projectPreview}>
                <div className={styles.previewContainer}>
                    <img
                        src={heroImage}
                        alt="Interview AI - Vista previa"
                        className={styles.previewImage}
                    />
                    <div className={styles.previewOverlay}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.previewButton}
                            aria-label="Abrir Interview AI en nueva ventana"
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
                        <a href="#flujo">Flujo principal</a>
                        <a href="#stack">Stack</a>
                        <a href="#estado">Estado & Roadmap</a>
                    </nav>
                </aside>

                <main className={styles.content}>
                    <section id="resumen" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Resumen</h2>
                            <p>Lo que ofrece Interview AI y por que es diferente.</p>
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

                    <section id="flujo" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Flujo principal</h2>
                            <p>Camino del usuario desde elegir un reto hasta recibir feedback.</p>
                        </div>
                        <ol className={styles.listOrdered}>
                            {flows.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ol>
                    </section>

                    <section id="stack" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Stack & utilidades</h2>
                            <p>Herramientas de evaluacion, editor y sandbox.</p>
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
                            <p>Caracteristicas presentes y proximas.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            <li>Feedback inmediato con explicacion paso a paso.</li>
                            <li>Test suite de casos edge y medicion de complejidad.</li>
                            <li>Modo entrevista con temporizador y notas del evaluador.</li>
                        </ul>
                        <div className={styles.calloutMuted}>
                            Roadmap: agregar modo pair-programming, integracion con ATS y analitica de cohortes.
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
