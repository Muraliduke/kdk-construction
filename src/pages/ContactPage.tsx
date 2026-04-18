import { useState } from "react";
import styles from "./ContactPage.module.css";
import { Reveal } from "../components/common/Reveal";
import { AmberBar } from "../components/common/AmberBar";
import { PageHeader } from "../components/common/PageHeader";

export const ContactPage = () => {
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", project: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(p => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Replace the URL with your deployed Firebase Cloud Function URL
            // e.g., "https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/sendContactEmail"
            const response = await fetch("http://localhost:5001/kdk-construction/us-central1/sendContactEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (data.success || response.ok) {
                setSubmitted(true);
            } else {
                throw new Error(data.error || "Failed to send message.");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.page}>
            <PageHeader tag="Get In Touch" title="Let's Build" highlight="Together" />
            <div className={styles.container}>
                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 88 }}>
                    <Reveal>
                        <p className={styles.introText}>
                            Tell us about your project. We'll review your requirements and get back to you within 24 hours to discuss next steps.
                        </p>
                        {[
                            { icon: "📞", label: "Phone", value: "306-859-3031" },
                            { icon: "✉️", label: "Email", value: "paras@kdkconstruction.ca" },
                            { icon: "🌐", label: "Website", value: "www.kdkconstruction.ca" },
                            { icon: "📍", label: "Service Area", value: "Alberta, Canada" },
                        ].map(item => (
                            <div key={item.label} className={styles.infoItem}>
                                <span className={styles.infoIcon}>{item.icon}</span>
                                <div>
                                    <p className={styles.infoLabel}>{item.label}</p>
                                    <p className={styles.infoValue}>{item.value}</p>
                                </div>
                            </div>
                        ))}
                        <div className={styles.citiesBox}>
                            {/* <p className={styles.citiesTitle}>Project Cities</p>
                            <p className={styles.citiesList}>Calgary · Red Deer · Grand Prairie · Cochrane</p>
                             */}
                            <AmberBar width={40} mt={0} mb={16} />
                            <p className={styles.thankYouText}>
                                "Thank you for considering KDK Construction. We look forward to building your next project and becoming your trusted construction partner."
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        {submitted ? (
                            <div className={styles.successBox}>
                                <div className={styles.successIcon}>✓</div>
                                <h3 className="heading-md" style={{ marginBottom: 16 }}>Message Sent!</h3>
                                <p className={styles.successText}>We'll review your project details and reach out within 24 hours.</p>
                                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another →</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                                    <input type="text" name="name" placeholder="Full Name *" required value={form.name} onChange={handleChange} />
                                    <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
                                    <input type="email" name="email" placeholder="Email Address *" required value={form.email} onChange={handleChange} />
                                    <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                                </div>
                                <select name="project" value={form.project} onChange={handleChange} style={{ cursor: "pointer" }}>
                                    <option value="" disabled>Project Type</option>
                                    <option value="restaurant">Restaurant Buildout</option>
                                    <option value="franchise">Franchise Location</option>
                                    <option value="retail">Retail Fit-Out</option>
                                    <option value="pharmacy">Pharmacy</option>
                                    <option value="daycare">Daycare</option>
                                    <option value="salon">Beauty Salon</option>
                                    <option value="other">Other Commercial</option>
                                </select>
                                <textarea name="message" placeholder="Tell us about your project — location, size, timeline, budget..." rows={5} value={form.message} onChange={handleChange} style={{ resize: "vertical" }} />
                                {error && <p style={{ color: "#d32f2f", fontSize: "0.875rem", margin: "10px 0", gridColumn: "1 / -1" }}>{error}</p>}
                                <button type="submit" disabled={isLoading} className={`btn-primary ${styles.submitBtn}`} style={{ opacity: isLoading ? 0.7 : 1 }}>
                                    {isLoading ? "Sending..." : "Send Project Inquiry →"}
                                </button>
                                <p className={styles.formFooter}>
                                    KDK Construction Group · 306-859-3031 · paras@kdkconstruction.ca
                                </p>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>
        </div>
    );
};
