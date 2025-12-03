import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'
import styles from './Contact.module.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const contactInfo = [
        {
            id: 1,
            icon: FiMail,
            title: 'Email',
            value: 'wladimyr.mojica@gmail.com',
            link: 'mailto:wladimyr.mojica@gmail.com'
        },
        {
            id: 2,
            icon: FiPhone,
            title: 'Whatsapp',
            value: '+57 3248213762',
            link: 'https://wa.me/3248213762'
        },
        {
            id: 3,
            icon: FiMapPin,
            title: 'Ubicación',
            value: 'Disponible Remotamente',
            link: '#'
        }
    ]

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        setTimeout(() => {
            setSubmitted(true)
            setLoading(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
            
            setTimeout(() => setSubmitted(false), 5000)
        }, 1500)
    }

    return (
        <div className={styles.contact}>
            {/* Hero Section */}
            <section className={styles.contactHero}>
                <div className={styles.contactHeroContainer}>
                    <div className={styles.contactHeroContent}>
                        <h1 className={styles.contactTitle}>
                            Ponte en contacto con nosotros
                        </h1>
                        <p className={styles.contactLead}>
                            Nos encantaría escuchar sobre tu próximo proyecto. Envíanos un mensaje y nos pondremos en contacto lo antes posible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className={styles.contactInfoSection}>
                <div className={styles.contactInfoContainer}>
                    <div className={styles.infoGrid}>
                        {contactInfo.map((info) => {
                            const Icon = info.icon
                            return (
                                <a key={info.id} href={info.link} className={styles.infoCard}>
                                    <div className={styles.infoIcon}>
                                        <Icon />
                                    </div>
                                    <h3 className={styles.infoTitle}>{info.title}</h3>
                                    <p className={styles.infoValue}>{info.value}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className={styles.formSection}>
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Envíanos un mensaje</h2>
                            <p className={styles.formDescription}>
                                Completa el formulario y nos pondremos en contacto contigo en 24 horas.
                            </p>
                        </div>

                        {submitted && (
                            <div className={styles.successMessage}>
                                <p>Gracias por tu mensaje. Nos pondremos en contacto pronto.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="¿Sobre qué es tu consulta?"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={styles.textarea}
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    rows={6}
                                />
                            </div>

                            <button type="submit" className={styles.submitButton} disabled={loading}>
                                {loading ? 'Enviando...' : 'Enviar Mensaje'}
                                {!loading && <FiArrowRight />}
                            </button>
                        </form>
                    </div>

                    {/* Aside - Additional Info */}
                    <div className={styles.formAside}>
                        <div className={styles.asideCard}>
                            <h3 className={styles.asideTitle}>Tiempo de respuesta</h3>
                            <p className={styles.asideText}>
                                Respondemos todos los mensajes en un plazo de 24 horas hábiles.
                            </p>
                        </div>

                        <div className={styles.asideCard}>
                            <h3 className={styles.asideTitle}>Disponibilidad</h3>
                            <p className={styles.asideText}>
                                Disponibles de lunes a viernes, de 9:00 AM a 6:00 PM (UTC-5).
                            </p>
                        </div>

                        <div className={styles.asideCard}>
                            <h3 className={styles.asideTitle}>Redes sociales</h3>
                            <p className={styles.asideText}>
                                Síguenos en nuestras redes sociales para actualizaciones y noticias.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
