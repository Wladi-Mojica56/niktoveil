import styles from './About.module.css'

export default function About() {

    // Sección 'Nuestros Valores' removida según petición del usuario.
    // Equipo removido: la sección se gestiona en otra parte del sitio.

    return (
        <div className={styles.about}>
            {/* Hero Section */}
            <section className={styles.aboutHero}>
                <div className={styles.aboutHeroContainer}>
                    <div className={styles.aboutHeroContent}>
                        <h1 className={styles.aboutTitle}>
                            Construimos el futuro digital de las marcas.
                        </h1>
                        <p className={styles.aboutLead}>
                            Somos un equipo dedicado a crear soluciones web de alto rendimiento, con diseño exquisito y seguridad integrada. No somos solo una agencia, somos tus aliados estratégicos en la transformación digital.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.storySection}>
                <div className={styles.storyContainer}>
                    <div className={styles.storyContent}>
                        <h2 className={styles.storyTitle}>Nuestra Historia</h2>
                        <div className={styles.storyDivider}></div>
                        <p className={styles.storyText}>
                            Niktoveil nació de la necesidad de llenar un vacío en el mercado: negocios que querían soluciones digitales profesionales sin comprometer calidad, seguridad o estética. Comenzamos como un proyecto pequeño y hemos crecido hasta convertirnos en el socio de confianza para aliados locales que buscan diferenciarse de sus competidores.
                        </p>
                        <p className={styles.storyText}>
                            Cada proyecto que realizamos es un testimonio de nuestro compromiso: código limpio, interfaces intuitivas y protección integral. Creemos que la tecnología debe ser elegante, accesible y segura.
                        </p>
                    </div>
                    <div className={styles.storyStats}>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>100%</h3>
                            <p className={styles.statLabel}>Calidad Asegurada</p>
                        </div>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>98%</h3>
                            <p className={styles.statLabel}>Satisfacción de Clientes</p>
                        </div>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>24/7</h3>
                            <p className={styles.statLabel}>Soporte Dedicado</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
