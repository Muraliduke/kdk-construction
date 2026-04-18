import styles from "./CommitmentPage.module.css";
import { Reveal } from "../components/common/Reveal";
import { CheckItem } from "../components/common/CheckItem";
import { PageHeader } from "../components/common/PageHeader";

export const CommitmentPage = () => (
    <div className={styles.page}>
        <PageHeader tag="Our Purpose" title="Vision &" highlight="Mission" />
        <div className={styles.content}>
            <Reveal>
                <div className={`mission-pad ${styles.visionBox}`}>
                    <div className={styles.visionCircle} />
                    <span className="section-tag">Our Vision</span>
                    <h2 className={`heading-md ${styles.heading}`}>A Leading Commercial Constructor <span className="amber">in Alberta</span></h2>
                    <p className={styles.text}>
                        To become a leading commercial construction company in Alberta, recognized for delivering high-quality, reliable, and scalable construction solutions for growing businesses and national brands.
                    </p>
                    <p className={styles.text}>
                        We aim to be the trusted partner for franchise expansion — known for executing multiple locations with consistency, speed, and precision.
                    </p>
                    <p className={`${styles.text} ${styles.textLast}`}>
                        Our vision is to build more than just spaces — we build long-term relationships, strong reputations, and environments that drive business success.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={120}>
                <div className={`mission-pad ${styles.missionBox}`}>
                    <span className="section-tag">Our Mission</span>
                    <h2 className="heading-md" style={{ marginBottom: 24 }}>Built on <span className="amber">Accountability</span></h2>
                    <p className={styles.text} style={{ maxWidth: 780, marginBottom: 36 }}>
                        At KDK Construction, our mission is to deliver efficient, transparent, and high-quality construction solutions tailored to commercial and restaurant environments.
                    </p>
                    <p className={styles.commitmentTitle}>We Are Committed To:</p>
                    <div className={styles.checkGrid}>
                        {[
                            "Delivering every project on time and within budget",
                            "Maintaining the highest standards of quality, safety, and workmanship",
                            "Understanding our clients' business goals — not just construction needs",
                            "Creating functional, durable, and high-performing commercial spaces",
                            "Supporting business growth through consistent and reliable execution",
                        ].map((text, i) => <CheckItem key={i} text={text} />)}
                    </div>
                    <div className={styles.quoteBox}>
                        <p className={styles.quoteText}>
                            "We approach every project with ownership, accountability, and attention to detail."
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    </div>
);
