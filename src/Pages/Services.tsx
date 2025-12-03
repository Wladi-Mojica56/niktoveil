import styles from './Services.module.css'
import { servicesData } from '../Data/DataServices'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
    const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})
    const [visibleVideos, setVisibleVideos] = useState<Set<number>>(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0')
                    setVisibleVideos((prev) => new Set([...prev, videoId]))
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('[data-video-id]').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="services" className={styles.services}>
            <div className={styles.servicesContainer}>
                {/* Header */}
                <div className={styles.servicesHeader}>
                    <h2 className={styles.servicesTitle}>
                        Qué Podemos<br />Hacer Para Tu<br />Negocio
                    </h2>
                    <p className={styles.servicesDescription}>
                        Acompañamos a emprendedores y pequeños negocios locales a construir soluciones digitales seguras, funcionales y accesibles, incluso cuando trabajan con herramientas de IA sin conocimientos técnicos.
                    </p>
                </div>

                {/* Services Grid */}
                <div className={styles.servicesGrid}>
                    {servicesData.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <div key={service.id} className={styles.serviceCard} data-video-id={service.id}>
                                {/* Card Header with Icon */}
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBadge}>
                                        <IconComponent className={styles.serviceIcon} />
                                    </div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                </div>

                                {/* Video/Image Section */}
                                <div className={styles.serviceImage}>
                                    {visibleVideos.has(service.id) && (
                                        <video
                                            ref={(el) => {
                                                if (el) videoRefs.current[service.id] = el
                                            }}
                                            width="400"
                                            height="300"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                        >
                                            <source
                                                src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto/${service.image}`}
                                                type="video/mp4"
                                            />
                                            Tu navegador no soporta videos HTML5.
                                        </video>
                                    )}
                                </div>

                                {/* Description */}
                                <p className={styles.serviceDescription}>{service.description}</p>

                                {/* Footer Accent */}
                                <div className={styles.cardFooter}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
