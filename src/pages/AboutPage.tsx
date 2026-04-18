import styles from "./AboutPage.module.css";
import { Reveal } from "../components/common/Reveal";
import { AmberBar } from "../components/common/AmberBar";
import { PageHeader } from "../components/common/PageHeader";

export const AboutPage = () => (
    <div className={styles.page}>
        <PageHeader tag="Our Story" title="About KDK" highlight="Construction" />
        <div className={styles.content}>
            <div className="desktop-grid-2 page-pad" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 88, alignItems: "start" }}>        
                <Reveal>
                    <p className={styles.introText}>
                        KDK Construction is a full-service commercial construction company specializing in restaurant buildouts, retail spaces, and interior construction across <strong className="amber">Alberta</strong>.
                    </p>
                    <p className={styles.subText}>
                        With successful projects completed in Calgary, Red Deer, Grand Prairie, and Cochrane, we understand the fast-paced requirements of the food and retail industry.
                    </p>
                    <p className={styles.subText}>
                        We don't just build spaces — we deliver fully operational, revenue-ready environments that meet brand standards, timelines, and budgets.
                    </p>
                    <p className={styles.subText}>
                        Our approach is hands-on, detail-oriented, and focused on delivering consistent, high-quality results across every project.
                    </p>
                    <AmberBar width={60} mt={36} mb={20} />
                    <p className={styles.quote}>
                        "Excellence built into every project."
                    </p>
                </Reveal>

                <Reveal delay={150}>
                    <div className={styles.featuresGrid}>
                        {[
                            { icon: "⏱", title: "On-Time Delivery", desc: "Every project executed to schedule, no exceptions." },
                            { icon: "✓", title: "Brand Standards", desc: "Franchise-compliant builds aligned to your brand prototype." },
                            { icon: "🤝", title: "Hands-On Team", desc: "Ownership and accountability from day one to handover." },
                            { icon: "📐", title: "Scalable Builds", desc: "Multi-location consistency for growing brands." },
                        ].map((item, i) => (
                            <Reveal key={item.title} delay={i * 80}>
                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>{item.icon}</div>
                                    <h4 className={styles.featureTitle}>{item.title}</h4>
                                    <p className={styles.featureDesc}>{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className={styles.locationsBox}>
                        <p className={styles.locationsTitle}>Project Locations</p>
                        <div className={styles.locationsGrid}>
                            {["Calgary", "Red Deer", "Grand Prairie", "Cochrane"].map(loc => (
                                <div key={loc} className={styles.locationItem}>
                                    <span className={styles.locationDot} />{loc}, AB
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </div>
);
