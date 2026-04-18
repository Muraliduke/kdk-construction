import styles from "./ExpertisePage.module.css";
import { Reveal } from "../components/common/Reveal";
import { CheckItem } from "../components/common/CheckItem";
import { PageHeader } from "../components/common/PageHeader";

export const ExpertisePage = () => {
    const expertiseList = [
        "Restaurant & franchise buildouts",
        "Daycare facility construction",
        "Beauty salons & personal care spaces",
        "Pharmacy interiors",
        "Commercial kitchen layouts and coordination",
        "Tenant improvements and interior fit-outs",
        "Fast-track construction for tight deadlines",
        "Compliance with health, safety, and building codes",
    ];
    const specialties = [
        { icon: "🍽️", title: "Restaurant & Franchise", desc: "Full buildouts from permits to handover. Brand-compliant, health-code cleared, kitchen-ready." },
        { icon: "🏥", title: "Pharmacy", desc: "Dispensary build-outs and retail front-ends meeting all regulatory requirements." },
        { icon: "👶", title: "Daycare", desc: "Safe, durable, provincial-code compliant childcare environments." },
        { icon: "💄", title: "Beauty Salon", desc: "Plumbing-intensive salon fit-outs with custom millwork and brand aesthetics." },
        { icon: "🏪", title: "Retail Fit-Outs", desc: "High-traffic commercial spaces with fixtures, lighting, and flooring systems." },
        { icon: "🏗️", title: "Tenant Improvements", desc: "Interior construction, demising walls, ceiling systems, and electrical distribution." },
    ];
    const process = [
        { step: "01", title: "Planning & Coordination", desc: "We align with your vision, brand standards, and budget. Scope, permits, and timeline defined upfront." },
        { step: "02", title: "Execution", desc: "Our team ensures high-quality workmanship with efficient timelines and daily progress accountability." },
        { step: "03", title: "Delivery", desc: "We hand over a fully completed, ready-to-operate space — inspected, deficiency-cleared, and operational." },
    ];

    return (
        <div className={styles.page}>
            <PageHeader tag="Skills & Process" title="Expertise &" highlight="Approach" />
            <div className={styles.content}>
                <div className="expertise-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 96, alignItems: "start" }}>
                    <Reveal>
                        <span className="section-tag">Our Expertise</span>
                        <h2 className="heading-md" style={{ marginBottom: 20 }}>Deep in <span className="amber">Commercial Construction</span></h2>
                        <p className={styles.introText}>
                            KDK Construction specializes in restaurant and commercial construction, with deep understanding of operational and technical requirements. We build spaces that are not only visually strong — but fully optimized for performance.
                        </p>
                        {expertiseList.map((text, i) => <CheckItem key={i} text={text} />)}
                    </Reveal>

                    <Reveal delay={150}>
                        <div className={styles.grid2}>
                            {specialties.map((s, i) => (
                                <Reveal key={s.title} delay={i * 70}>
                                    <div className={`card-hover ${styles.specialtyCard}`}>
                                        <div className={styles.specialtyIcon}>{s.icon}</div>
                                        <h4 className={styles.specialtyTitle}>{s.title}</h4>
                                        <p className={styles.specialtyDesc}>{s.desc}</p>
                                        <div className={styles.accentBar} />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <Reveal>
                    <span className="section-tag">How We Work</span>
                    <h2 className={`heading-md ${styles.processSectionTitle}`}>Our <span className="amber">3-Step Process</span></h2>
                </Reveal>
                <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
                    {process.map((p, i) => (
                        <Reveal key={p.step} delay={i * 120}>
                            <div className={`${styles.stepCard} ${i === 1 ? styles.stepCardAlt : ""}`}>
                                <div className={styles.stepIconContainer}>
                                    <span className={styles.stepNum}>{p.step}</span>
                                </div>
                                <h3 className={styles.stepTitle}>{p.title}</h3>
                                <p className={styles.stepDesc}>{p.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};
