import styles from "./PageHeader.module.css";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
    tag: string;
    title: string;
    highlight?: string;
}

export const PageHeader = ({ tag, title, highlight }: PageHeaderProps) => (
    <div className={styles.header}>
        <div className="grid-overlay" />
        <div className={styles.container}>
            <Reveal>
                <span className="section-tag">{tag}</span>
                <h1 className="heading-lg">
                    {title}{" "}
                    {highlight && <span className={styles.highlight}>{highlight}</span>}
                </h1>
            </Reveal>
        </div>
        <div className={styles.bottomBar} />
    </div>
);
