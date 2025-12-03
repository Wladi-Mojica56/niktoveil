import styles from './writer.module.css'
import img from '../../assets/imgs/writer.png'

const highlights = [
    {
        title: 'Objetivo',
        text: 'Construir un portafolio editorial premium con performance, SEO y una UX impecable.'
    },
    {
        title: 'Resultado',
        text: 'Arquitectura en React + TypeScript, rutas protegidas y diseño accesible inspirado en doc sites.'
    },
    {
        title: 'Entrega',
        text: 'MVP listo, módulos de contenido documentados y lista de mejoras priorizada.'
    }
]

const milestones = [
    'Configuración de base técnica (routing, theming, tipografías).',
    'Plantillas modulares para casos de uso, artículos y landing de autor.',
    'Optimización inicial de SEO técnico y tiempos de carga.',
    'Checklist de accesibilidad AA para textos, contrastes y foco.'
]

const stack = ['React', 'TypeScript', 'CSS Modules', 'Framer Motion', 'Contentful (planificado)', 'Github']

const link = 'https://wladi-mojica56.github.io/Writer/'

export default function WriterProjectPage() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.heroBadge}>Proyecto / Documentación</div>
                <h1 className={styles.title}>Writer Portfolio</h1>
                <p className={styles.lead}>
                    Documentación viva del proyecto Writer: decisiones de diseño, arquitectura y próximos pasos para el
                    portafolio editorial minimalista.
                </p>
                <div className={styles.metaRow}>
                    <span className={styles.meta}>Versión: 1.0.0</span>
                    <span className={styles.meta}>Estado: En curso</span>
                    <span className={styles.meta}>Actualizado: Hoy</span>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Ver Proyecto en Vivo →
                </a>
            </header>

            <div className={styles.projectPreview}>
                <div className={styles.previewContainer}>
                    <img 
                        src={img} 
                        alt="Writer Portfolio - Vista previa del proyecto"
                        className={styles.previewImage}
                    />
                    <div className={styles.previewOverlay}>
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.previewButton}
                            aria-label="Abrir proyecto Writer Portfolio en nueva ventana"
                        >
                            <span>Explorar Proyecto</span>
                            <span className={styles.previewIcon}>→</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.layout}>
                <aside className={styles.toc} aria-label="Tabla de contenido">
                    <div className={styles.tocTitle}>Contenido</div>
                    <nav>
                        <a href="#resumen">Resumen</a>
                        <a href="#arquitectura">Arquitectura</a>
                        <a href="#flujo">Flujo del usuario</a>
                        <a href="#stack">Stack</a>
                        <a href="#estado">Estado & Roadmap</a>
                    </nav>
                </aside>

                <main className={styles.content}>
                    <section id="resumen" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Resumen</h2>
                            <p>Contexto rápido del proyecto y el valor que entrega.</p>
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

                    <section id="arquitectura" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Arquitectura</h2>
                            <p>Estructura técnica y decisiones de diseño del sistema.</p>
                        </div>
                        <div className={styles.callout}>
                            <span className={styles.calloutLabel}>Principios</span>
                            <ul>
                                <li>Separación clara de componentes, estilos y data mocks.</li>
                                <li>Tematizado mediante variables CSS globales para light/dark.</li>
                                <li>Carga perezosa (lazy) planificada para vistas pesadas.</li>
                                <li>Animaciones opcionales con preferencia de usuario (reduce motion).</li>
                            </ul>
                        </div>
                    </section>

                    <section id="flujo" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Flujo del usuario</h2>
                            <p>Recorrido principal pensado para lectores y clientes.</p>
                        </div>
                        <ol className={styles.listOrdered}>
                            <li>Landing: mensaje claro, CTA a casos y contacto.</li>
                            <li>Casos de estudio: storytelling breve, métricas clave, stack y resultados.</li>
                            <li>Blog/Notas: piezas cortas para SEO y autoridad temática.</li>
                            <li>Contacto: formulario validado + link directo a email.</li>
                        </ol>
                    </section>

                    <section id="stack" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Stack & utilidades</h2>
                            <p>Herramientas principales y dependencias planeadas.</p>
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
                            <p>Checklist de hitos y próximas entregas.</p>
                        </div>
                        <ul className={styles.listPlain}>
                            {milestones.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <div className={styles.calloutMuted}>
                            Próximos pasos: integrar CMS, agregar vista de analytics y publicar demo en Vercel.
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
