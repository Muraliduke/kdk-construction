import { useState, useCallback } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CommitmentPage } from "./pages/CommitmentPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
    const [activePage, setActivePage] = useState("Home");

    const handleNav = useCallback((page: string) => {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const pages: Record<string, JSX.Element> = {
        Home: <HomePage onNav={handleNav} />,
        About: <AboutPage />,
        Commitment: <CommitmentPage />,
        Projects: <ProjectsPage />,
        Expertise: <ExpertisePage />,
        Contact: <ContactPage />,
    };

    return (
        <div className="app-shell">
            <Navbar active={activePage} onNav={handleNav} />
            <main>{pages[activePage] || pages.Home}</main>
            <Footer onNav={handleNav} />
        </div>
    );
}