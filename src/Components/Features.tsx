import type { IconType } from 'react-icons'
import styles from './Features.module.css'

interface Feature {
    id: number
    icon: IconType
    title: string
    description: string
}

interface FeaturesProps {
    title?: string
    features: Feature[]
    columns?: 3 | 4
}

export function Features({ title = 'Nuestras características', features, columns = 3 }: FeaturesProps) {
    return (
        <section className={styles.features}>
            <div className={styles.featuresContainer}>
                {title && (
                    <div className={styles.featuresHeader}>
                        <h2 className={styles.featuresTitle}>{title}</h2>
                    </div>
                )}

                <div className={`${styles.featuresGrid} ${styles[`columns${columns}`]}`}>
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div key={feature.id} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <Icon />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
