import styles from "./TestimonialSection.module.css";
import { Reveal } from "../common/Reveal";

interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    initials: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        text: "KDK delivered our franchise location exactly to brand spec. Their attention to detail in the kitchen build-out was exceptional and compliant with all local codes.",
        author: "Marcus Thompson",
        role: "Franchise Owner, Shawarma Group",
        initials: "MT"
    },
    {
        id: 2,
        text: "Working with them was a seamless experience. They handled everything from permits to final handover, keeping us informed every step of the way.",
        author: "Sarah Jenkins",
        role: "Operations Director, Retail West",
        initials: "SJ"
    },
    {
        id: 3,
        text: "Their expertise in restaurant buildouts is clear. They understood our technical requirements and delivered a high-performance space on a tight deadline.",
        author: "David Chen",
        role: "Restaurant Group CEO",
        initials: "DC"
    }
];

export const TestimonialSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <div className={styles.header}>
                        <span className="section-tag" style={{ justifyContent: "center" }}>Trusted Voice</span>
                        <h2 className="heading-lg">Client <span className="amber">Success</span> Stories</h2>
                    </div>
                </Reveal>

                <div className="desktop-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {testimonialsData.map((t, i) => (
                        <Reveal key={t.id} delay={i * 100}>
                            <div className={`card-hover ${styles.card}`}>
                                <div className={styles.quoteIcon}>"</div>

                                <div className={styles.text}>
                                    "{t.text}"
                                </div>
                                
                                <div className={styles.authorContainer}>
                                    <div className={styles.avatar}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <div className={styles.authorName}>{t.author}</div>
                                        <div className={styles.authorRole}>{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
