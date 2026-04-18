import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";
import styles from "./ProjectsPage.module.css";
import { Reveal } from "../components/common/Reveal";
import { PageHeader } from "../components/common/PageHeader";
// import { ProjectSlider } from "../components/ProjectSlider";
import OsmowsBefore from "../assets/BeforeAfter/Osmows_Before.jpg";
import OsmowsAfter from "../assets/BeforeAfter/Osmows_After.jpg";

const projectsData = [
    { id: 1, title: "Heal Wellness", type: "Health & Wellness", tag: "Multiple Locations", locations: "Calgary · Red Deer · Grand Prairie · Cochrane", color: "#1a4a62", desc: "Multiple locations completed across Alberta. Full interior construction and brand-standard execution across all sites.", highlights: ["Multi-location rollout", "Brand-standard interiors", "Full interior construction"], bgImage: OsmowsAfter, gallery: [OsmowsAfter, OsmowsBefore] },
    { id: 2, title: "Osmow's Shawarma", type: "Restaurant Franchise", tag: "Franchise Build", locations: "Multiple Alberta Locations", color: "#2d4a1e", desc: "Completed several franchise locations across Alberta. Focused on speed, consistency, and strict brand compliance.", highlights: ["Franchise brand compliance", "Fast-track execution", "Consistent quality"], bgImage: OsmowsBefore, gallery: [OsmowsBefore, OsmowsAfter] },
    { id: 3, title: "KukuRuku Chicken", type: "Restaurant", tag: "Mall Location", locations: "Alberta", color: "#4a2810", desc: "Restaurant construction and interior fit-outs designed for operational efficiency in a mall environment.", highlights: ["Mall integration", "Operational layout", "Interior fit-out"], bgImage: OsmowsAfter, gallery: [OsmowsAfter, OsmowsBefore] },
    { id: 4, title: "Up-Town Pharmacy", type: "Pharmacy", tag: "Specialty Interior", locations: "Alberta", color: "#1a3a4a", desc: "Specialty pharmacy interior with compliance-driven layout, dispensary build-out, and retail front-end.", highlights: ["Regulatory compliance", "Dispensary build-out", "Retail front-end"], bgImage: OsmowsBefore, gallery: [OsmowsBefore, OsmowsAfter] },
    { id: 5, title: "Daycare Facility", type: "Daycare", tag: "Specialty Interior", locations: "Alberta", color: "#3a1a4a", desc: "Purpose-built daycare interior meeting all provincial childcare facility requirements — safe, durable, and welcoming.", highlights: ["Provincial code compliance", "Child-safe finishes", "Durable interiors"], bgImage: OsmowsAfter, gallery: [OsmowsAfter, OsmowsBefore] },
];

const getColorForType = (type: string) => {
    switch (type) {
        case "Restaurant Franchise": return "var(--amber)";
        case "Restaurant": return "#E87020";
        case "Health & Wellness": return "#20A8E8";
        case "Pharmacy": return "#20E8A8";
        case "Daycare": return "#C820E8";
        default: return "var(--amber)";
    }
};

export const ProjectsPage = () => {
    const [filter, setFilter] = useState("All");
    const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const types = ["All", ...Array.from(new Set(projectsData.map(p => p.type)))];
    const filtered = filter === "All" ? projectsData : projectsData.filter(p => p.type === filter);

    const openGallery = (images: string[]) => {
        if (images && images.length > 0) {
            setGalleryImages(images);
            setCurrentImageIndex(0);
            document.body.style.overflow = "hidden";
        }
    };

    const closeGallery = () => {
        setGalleryImages(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (galleryImages) {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (galleryImages) {
            setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <div className={styles.page}>
            <PageHeader tag="Portfolio" title="Our" highlight="Projects" />
            <div className={styles.content}>
                <Reveal>
                    <p className={styles.introText}>
                        KDK Construction has successfully delivered multiple commercial and restaurant projects across Alberta. Our portfolio reflects strong execution, consistency in franchise buildouts, high-quality finishes, and efficient layouts designed for business performance.
                    </p>
                    <p className={styles.subText}>
                        We continue to work with growing brands and businesses looking for reliable construction partners.
                    </p>
                </Reveal>

                <div className={styles.filterContainer}>
                    {types.map(t => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`${styles.filterBtn} ${filter === t ? styles.filterBtnActive : ""}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div className="desktop-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                    {filtered.map((p, i) => (
                        <Reveal key={p.id} delay={i * 80}>
                            <div className={`card-hover ${styles.card}`}>
                                <div
                                    className={styles.cardHeader}
                                    // style={{ background: `linear-gradient(135deg, ${p.color}88, var(--navy-mid)), url(${p.bgImage})` }}
                                    style={{ background: `url(${p.bgImage})` }}
                                    onClick={() => openGallery(p.gallery)}
                                >
                                    <div className="grid-overlay" style={{ zIndex: 1 }} />
                                    <span className={styles.cardId} style={{ zIndex: 1 }}>{String(p.id).padStart(2, "0")}</span>
                                    {/* <span
                                        className={styles.cardTag}
                                        style={{ background: getColorForType(p.type), zIndex: 2 }}
                                    >
                                        {p.tag}
                                    </span> */}
                                    {p.gallery && p.gallery.length > 0 && (
                                        <div className={styles.galleryIndicator}>
                                            <ImageIcon size={14} /> {p.gallery.length} Photos
                                        </div>
                                    )}
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{p.title}</h3>
                                    <p className={styles.cardType} style={{ color: getColorForType(p.type) }}>{p.type}</p>
                                    <p className={styles.cardDesc}>{p.desc}</p>
                                    <div className={styles.highlightsList}>
                                        {p.highlights.map(h => (
                                            <div key={h} className={styles.highlightItem}>
                                                <span className={styles.dot} />{h}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.locationIcon}>📍</span>
                                        <span className={styles.locationText}>{p.locations}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Before and after slider view */}
                {/* <ProjectSlider
                    projectName="Osmows"
                    beforeImage={OsmowsBefore}
                    afterImage={OsmowsAfter}
                /> */}
            </div>

            {/* Gallery Modal */}
            {galleryImages && (
                <div className={styles.modalOverlay} onClick={closeGallery}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeGallery}>
                            <X size={24} /> Close
                        </button>

                        <img
                            src={galleryImages[currentImageIndex]}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            className={styles.sliderImg}
                        />

                        {galleryImages.length > 1 && (
                            <>
                                <button className={`${styles.sliderNav} ${styles.sliderPrev}`} onClick={prevImage}>
                                    <ChevronLeft size={32} />
                                </button>
                                <button className={`${styles.sliderNav} ${styles.sliderNext}`} onClick={nextImage}>
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
