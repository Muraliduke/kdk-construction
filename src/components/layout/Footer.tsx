import styles from "./Footer.module.css";
import { NAV_ITEMS } from "../../constants/navigation";
import KDK_LOGO_SRC from "../../assets/logo.JPG";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = ({ onNav }: { onNav: (page: string) => void }) => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 56, marginBottom: 48 }}>
                <div>
                    <div className={styles.logoContainer}>
                        <img
                            src={KDK_LOGO_SRC}
                            alt="KDK Construction"
                            className={styles.logoImg}
                        />
                    </div>
                    <p className={styles.description}>
                        Full-service commercial construction across Alberta. Restaurant buildouts, retail spaces, franchise projects, and specialty interiors.
                    </p>
                    <p className={styles.link}>www.kdkconstruction.ca</p>
                    <p className={styles.contactInfo}>paras@kdkconstruction.ca</p>
                    <p className={styles.contactInfo}>306-859-3031</p>
                    <div className={styles.socialContainer}>
                        <a href="https://www.instagram.com/kdk_constructions?igsh=bzg2MTY4ZHZxYXo=&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/kdk-construction-canada/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
                <div>
                    <p className={styles.sectionTitle}>Navigation</p>
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item}
                            onClick={() => onNav(item)}
                            className={styles.navBtn}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div>
                    <p className={styles.sectionTitle}>Project Cities</p>
                    {["Calgary, Alberta", "Red Deer, Alberta", "Grand Prairie, Alberta", "Cochrane, Alberta", "Airdrie, Alberta", "Medicine Hat, Alberta", "Edmonton, Alberta", "Chestermere, Alberta"].map(loc => (
                        <p key={loc} className={styles.city}>{loc}</p>
                    ))}
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p className={styles.legal}>© 2026 KDK Construction Group. All rights reserved.</p>
                <p className={styles.legal}>Alberta, Canada · Commercial Construction</p>
            </div>
        </div>
    </footer>
);
