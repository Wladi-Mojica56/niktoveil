import { FiStar } from 'react-icons/fi'
import styles from './Testimonials.module.css'

interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    content: string
    rating: number
}

interface TestimonialsProps {
    testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
    {
        id: 1,
        name: 'María González',
        role: 'Directora de Marketing',
        company: 'TechStart Solutions',
        content: 'Niktoveil transformó completamente nuestra presencia digital. El equipo fue profesional, dedicado y entregó resultados excepcionales en tiempo récord.',
        rating: 5
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        role: 'CEO',
        company: 'DigitalFlow Inc',
        content: 'La calidad de su trabajo es impecable. No solo desarrollan código, sino soluciones estratégicas que impactan realmente el negocio.',
        rating: 5
    },
    {
        id: 3,
        name: 'Ana Martínez',
        role: 'Fundadora',
        company: 'CreativeHub Agency',
        content: 'Trabajar con Niktoveil fue la mejor decisión que tomamos. Su atención al detalle y compromiso con la excelencia es incomparable.',
        rating: 5
    }
]

export function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
    return (
        <section className={styles.testimonials}>
            <div className={styles.testimonialsContainer}>
                <div className={styles.testimonialsHeader}>
                    <h2 className={styles.testimonialsTitle}>Lo que dicen nuestros clientes</h2>
                    <p className={styles.testimonialsLead}>
                        Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales.
                    </p>
                </div>

                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.testimonialCard}>
                            {/* Rating */}
                            <div className={styles.ratingContainer}>
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <FiStar key={i} className={styles.starIcon} />
                                ))}
                            </div>

                            {/* Content */}
                            <p className={styles.testimonialContent}>
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className={styles.testimonialAuthor}>
                                <h4 className={styles.authorName}>{testimonial.name}</h4>
                                <p className={styles.authorRole}>
                                    {testimonial.role} · {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
