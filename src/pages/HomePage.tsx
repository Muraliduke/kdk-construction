import styles from "./HomePage.module.css";
import { Reveal } from "../components/common/Reveal";
import { AmberBar } from "../components/common/AmberBar";
import { TestimonialSection } from "../components/sections/TestimonialSection";

export const HomePage = ({ onNav }: { onNav: (page: string) => void }) => {
    const stats = [
        { num: "7+", label: "Cities Served" },
        { num: "5+", label: "Brands Built" },
        { num: "100%", label: "On-Time Delivery" },
        { num: "AB, BC", label: "Province" },
    ];
    return (
        <div>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="grid-overlay" />
                <div className={styles.heroShape1} />
                <div className={styles.heroShape2} />

                <div className="hero-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "140px 32px 100px", position: "relative", zIndex: 1, width: "100%" }}>
                    <div className={styles.heroContent}>
                        <div className="fadeUp">
                            <div className={styles.heroTags}>
                                {["Commercial Construction", "Restaurant Buildouts", "Franchise Projects"].map(s => (
                                    <span key={s} className={styles.heroTag}>{s}</span>
                                ))}
                            </div>
                        </div>
                        <div style={{ animation: "fadeUp 0.7s ease 100ms both" }}>
                            <h1 className={`heading-xl ${styles.heroTitle}`}>
                                Excellence<br /><span className="amber">Built Into</span><br />Every Project
                            </h1>
                        </div>
                        <div style={{ animation: "fadeUp 0.7s ease 220ms both" }}>
                            <AmberBar width={80} mt={28} mb={24} />
                            <p className={styles.heroSub}>
                                Full-service commercial construction across Alberta — restaurant buildouts, retail spaces, and franchise projects delivered on time and on brand.
                            </p>
                        </div>
                        <div style={{ animation: "fadeUp 0.7s ease 330ms both" }} className="hero-btns">
                            <div className={styles.heroBtns}>
                                <button className="btn-primary" onClick={() => onNav("Projects")}>View Our Work →</button>
                                <button className="btn-outline" onClick={() => onNav("Contact")}>Contact Us</button>
                            </div>
                        </div>
                        <div style={{ animation: "fadeUp 0.7s ease 430ms both" }} className={styles.completedProjects}>
                            <p className={styles.completedProjectsTitle}>Completed Projects In</p>
                            <div className={styles.completedProjectsList}>
                                {["Calgary", "Red Deer", "Grand Prairie", "Airdrie", "Cochrane", "Medicine Hat", "Edmonton", "Chestermere"].map(loc => (
                                    <span key={loc} className={styles.locationTag}>{loc}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.heroBottomBar} />
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className="stats-grid page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                    {stats.map((s, i) => (
                        <Reveal key={s.num} delay={i * 70}>
                            <div className={styles.statItem}>
                                <div className={styles.statNum}>{s.num}</div>
                                <div className={styles.statLabel}>{s.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className={styles.servicesSection}>
                <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px" }}>
                    <Reveal>
                        <span className="section-tag">What We Do</span>
                        <h2 className={`heading-lg ${styles.servicesTitle}`}>Spaces Built for <span className="amber">Business</span></h2>
                    </Reveal>
                    <div className="desktop-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
                        {[
                            { icon: "🍽️", title: "Restaurant Buildouts", desc: "Commercial kitchen to front-of-house — fully operational, health-code compliant, brand-standard builds for restaurants and food franchises." },
                            { icon: "🏪", title: "Retail & Franchise Spaces", desc: "Tenant improvements, fixtures, flooring, and lighting. Prototype-compliant builds for national and regional retail brands." },
                            { icon: "🏥", title: "Specialty Interiors", desc: "Daycares, pharmacies, and beauty salons — functional, compliant interiors built for operational performance from day one." },
                        ].map((s, i) => (
                            <Reveal key={s.title} delay={i * 100}>
                                <div className={`card-hover ${styles.serviceCard}`}>
                                    <div className={styles.serviceIcon}>{s.icon}</div>
                                    <h3 className={styles.serviceName}>{s.title}</h3>
                                    <p className={styles.serviceDesc}>{s.desc}</p>
                                    <AmberBar width={36} mt={24} mb={0} />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialSection />


            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="grid-overlay" />
                <div className="cta-flex page-pad" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32, position: "relative", zIndex: 1 }}>
                    <div>
                        <h2 className="heading-md" style={{ marginBottom: 8 }}>Ready to Start Building?</h2>
                        <p className={styles.ctaSub}>We respond within 24 hours — let's discuss your next project.</p>
                    </div>
                    <button className="btn-primary" onClick={() => onNav("Contact")}>Start a Conversation →</button>
                </div>
            </section>
        </div>
    );
};
