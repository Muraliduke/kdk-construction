import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { NAV_ITEMS } from "../../constants/navigation";
import KDK_LOGO_SRC from "../../assets/logo.JPG";

const NavLogo = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className={styles.logoBtn}>
        <img
            src={KDK_LOGO_SRC}
            alt="KDK Construction"
            className={styles.logoImg}
            onError={(e: any) => {
                e.target.parentElement.innerHTML = `<span class="${styles.fallbackLogo}">KDK <span class="${styles.fallbackLogoAccent}">Construction</span></span>`;
            }}
        />
    </button>
);

const HamburgerIcon = ({ open }: { open: boolean }) => (
    <div className={styles.hamburgerIcon}>
        <span className={styles.hamburgerLine} style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
        <span className={styles.hamburgerLine} style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "scaleX(1)" }} />
        <span className={styles.hamburgerLine} style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
    </div>
);

export const Navbar = ({ active, onNav }: { active: string; onNav: (page: string) => void }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        const onResize = () => {
            setIsMobile(window.innerWidth < 900);
            if (window.innerWidth >= 900) setMobileOpen(false);
        };
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return () => { 
            window.removeEventListener("scroll", onScroll); 
            window.removeEventListener("resize", onResize); 
        };
    }, []);

    const handleNav = (page: string) => {
        onNav(page);
        setMobileOpen(false);
    };

    return (
        <nav className={`${styles.nav} ${scrolled || mobileOpen ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <NavLogo onClick={() => handleNav("Home")} />
                
                {!isMobile && (
                    <div className={styles.links}>
                        {NAV_ITEMS.map(item => (
                            <button 
                                key={item} 
                                onClick={() => handleNav(item)} 
                                className={`${styles.navLink} ${active === item ? styles.navLinkActive : ""}`}
                            >
                                {item}
                                {active === item && <span className={styles.activeIndicator} />}
                            </button>
                        ))}
                        <button className="btn-primary" onClick={() => handleNav("Contact")} style={{ marginLeft: 12, padding: "10px 20px", fontSize: 12 }}>
                            Get a Quote →
                        </button>
                    </div>
                )}

                {isMobile && (
                    <button onClick={() => setMobileOpen(o => !o)} className={styles.hamburger}>
                        <HamburgerIcon open={mobileOpen} />
                    </button>
                )}
            </div>

            {isMobile && (
                <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}>
                    <div className={styles.drawerContent}>
                        {NAV_ITEMS.map((item, i) => (
                            <button 
                                key={item} 
                                onClick={() => handleNav(item)} 
                                className={`${styles.mobileLink} ${active === item ? styles.mobileLinkActive : ""}`}
                                style={{ animation: mobileOpen ? `fadeUp 0.3s ease ${i * 40}ms both` : "none" }}
                            >
                                {item}
                            </button>
                        ))}
                        <button className="btn-primary" onClick={() => handleNav("Contact")} style={{ marginTop: 12, justifyContent: "center" }}>
                            Get a Quote →
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
