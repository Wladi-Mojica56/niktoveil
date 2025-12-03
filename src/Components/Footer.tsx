import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        producto: [
            { label: 'Servicios', href: '/services' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'FAQ', href: '#' }
        ],
        compania: [
            { label: 'Sobre Nosotros', href: '/about' },
            { label: 'Blog', href: '#' },
            { label: 'Contacto', href: '/contact' },
            { label: 'Trabajar con Nosotros', href: '#' }
        ],
        legal: [
            { label: 'Privacidad', href: '#' },
            { label: 'Términos', href: '#' },
            { label: 'Cookies', href: '#' },
            { label: 'Sitemap', href: '#' }
        ]
    }

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/wladi-mojica56', label: 'GitHub' },
        { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FiTwitter, href: '#', label: 'Twitter' },
        { icon: FiMail, href: 'mailto:wladimyr.mojica@gmail.com', label: 'Email' }
    ]

    return (
        <footer className={styles.footer}>

            {/* Main Footer */}
            <div className={styles.footerMain}>
                <div className={styles.footerContainer}>
                    {/* Logo Section */}
                    <div className={styles.footerSection}>
                        <Link to="/" className={styles.footerLogo}>
                            Niktoveil
                        </Link>
                        <p className={styles.footerDescription}>
                            Soluciones digitales de alto rendimiento, diseño exquisito y seguridad integrada.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className={styles.socialLink}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className={styles.footerLinksGrid}>
                        {/* Producto */}
                        <div className={styles.footerLinkColumn}>
                            <h4 className={styles.footerLinkTitle}>Producto</h4>
                            <ul className={styles.footerLinkList}>
                                {footerLinks.producto.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.href} className={styles.footerLink}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Compañía */}
                        <div className={styles.footerLinkColumn}>
                            <h4 className={styles.footerLinkTitle}>Compañía</h4>
                            <ul className={styles.footerLinkList}>
                                {footerLinks.compania.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.href} className={styles.footerLink}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className={styles.footerLinkColumn}>
                            <h4 className={styles.footerLinkTitle}>Legal</h4>
                            <ul className={styles.footerLinkList}>
                                {footerLinks.legal.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.href} className={styles.footerLink}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContainer}>
                    <p className={styles.footerCopyright}>
                        © {currentYear} Niktoveil. Todos los derechos reservados.
                    </p>
                    <p className={styles.footerCredit}>
                        Diseñado y desarrollado con <span className={styles.heart}></span> por Niktoveil
                    </p>
                </div>
            </div>
        </footer>
    )
}
