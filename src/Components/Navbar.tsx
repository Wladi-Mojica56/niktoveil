import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import styles from './Navbar.module.css'

export function Navbar() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [mounted, setMounted] = useState(false)

    const applyThemeDirectly = (newTheme: 'light' | 'dark') => {
        const html = document.documentElement
        if (newTheme === 'dark') {
            html.setAttribute('data-theme', 'dark')
        } else {
            html.removeAttribute('data-theme')
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')

        applyThemeDirectly(initialTheme)
        setTheme(initialTheme)
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        applyThemeDirectly(newTheme)
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    if (!mounted) return null

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarLogo}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <span className={styles.logoText}>
                            Niktoveil
                        </span>
                    </Link>
                </div>
                
                <ul className={styles.navbarMenu}>
                    <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
                    <li><Link to="/services" className={styles.navLink}>Servicios</Link></li>
                    <li><Link to="/about" className={styles.navLink}>Sobre Nosotros</Link></li>
                    <li><Link to="/portfolio" className={styles.navLink}>Portafolio</Link></li>
                </ul>

                <div className={styles.navbarActions}>
                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                        title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                    >
                        {theme === 'light' ? (
                            <FiMoon size={20} />
                        ) : (
                            <FiSun size={20} />
                        )}
                    </button>
                    <Link to="/contact" className={styles.navbarButton}>Contacto</Link>
                </div>
            </div>
        </nav>
    )
}
