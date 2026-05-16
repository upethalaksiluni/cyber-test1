import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    LockKeyhole,
    Network,
    Radar,
    Scale,
    ShieldCheck,
    Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { sectors } from "../data/sectorContent";

const capabilities = [
    "VA/PT and adversary simulation",
    "Cyber threat intelligence",
    "Red, blue, and purple teaming",
    "Digital forensics and cybercrime support",
    "Incident response operations",
    "Secure cloud and infrastructure engineering",
    "DevSecOps and secure software development",
    "Business continuity and disaster recovery",
    "Governance, risk, and compliance advisory"
];

function Industries() {
    return (
        <>
            <Helmet>
                <title>Industries — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Cyber-Intel Online industry sectors including government, federal, private, enterprise, military, defense, and state intelligence cybersecurity sectors."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-industries-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Globe2 size={16} />
                                Industries and Business Sectors
                            </div>

                            <h1 className="ci-heading-xl">
                                Cyber resilience for <span className="ci-gradient-text">mission-critical sectors</span>
                            </h1>

                            <p className="ci-lead">
                                Cyber-Intel Online supports government, federal, private, enterprise, military, defense, and intelligence-sector organizations with specialized cybersecurity, information security, digital resilience, and advanced IT/ICT solutions.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="#business-sectors" className="ci-btn ci-btn-primary ci-shine">
                                    Explore Sectors <ArrowRight size={18} />
                                </a>
                                <Link to="/contact" className="ci-btn ci-btn-outline">
                                    Discuss Your Sector
                                </Link>
                            </div>

                            <div className="ci-hero-badges">
                                <span><ShieldCheck size={17} /> Standards Aligned</span>
                                <span><Radar size={17} /> Intelligence Driven</span>
                                <span><Network size={17} /> Mission Critical</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-industries-command ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <Target size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Sectors</span>
                                    <strong>Government · Enterprise · Defense</strong>
                                </div>
                                <div>
                                    <span>Capabilities</span>
                                    <strong>Security · Intelligence · Resilience</strong>
                                </div>
                                <div>
                                    <span>Model</span>
                                    <strong>Vendor-Neutral Advisory</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {[
                            [Scale, "Governance Ready", "NIST, FIPS, FISMA, ISO/IEC aligned"],
                            [ShieldCheck, "Cyber Defense", "Threat-informed security operations"],
                            [Radar, "Intelligence Led", "Proactive visibility and risk reduction"],
                            [LockKeyhole, "Confidential Delivery", "Secure, scalable, and independent"]
                        ].map(([Icon, title, text], index) => (
                            <motion.div
                                className="ci-trust-item"
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                            >
                                <Icon size={24} />
                                <div>
                                    <strong>{title}</strong>
                                    <span>{text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="business-sectors">
                    <div className="ci-container">
                        <div className="ci-section-header text-center">
                            <span className="ci-mini-title">Business Sectors</span>
                            <h2 className="ci-heading-lg">Specialized cybersecurity for public, private, enterprise, defense, and intelligence operations</h2>
                            <p>
                                Each sector requires a unique balance of cyber defense, governance, compliance, intelligence, confidentiality, and operational continuity.
                            </p>
                        </div>

                        <div className="ci-industries-sector-list ci-mt-32">
                            {sectors.map((sector, index) => (
                                <motion.article
                                    className="ci-industry-sector-card"
                                    key={sector.title}
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.12 }}
                                    transition={{ duration: 0.65, delay: index * 0.04 }}
                                >
                                    <div className="ci-industry-sector-head">
                                        <span className="ci-icon-box">
                                            <sector.icon size={24} />
                                        </span>
                                        <div>
                                            <span className="ci-tag">{sector.tag}</span>
                                            <h3>{sector.title}</h3>
                                        </div>
                                    </div>

                                    <div className="ci-industry-sector-body">
                                        {sector.text.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Cross-Sector Capabilities</span>
                                <h2 className="ci-heading-lg">Security services mapped to real operational risk</h2>
                                <p>
                                    Cyber-Intel Online delivers a portfolio of technical, governance, intelligence, investigation, and resilience capabilities that support complex and mission-critical organizations.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            className="ci-market-panel"
                            initial={{ opacity: 0, x: 34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            {capabilities.map((item) => (
                                <div key={item}>
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section-sm">
                    <div className="ci-container">
                        <motion.div
                            className="ci-cta-strip ci-animated-gradient"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div>
                                <span className="ci-mini-title">Sector-Specific Engagement</span>
                                <h2>Build a cybersecurity strategy aligned with your industry, risk, and mission</h2>
                                <p>
                                    Cyber-Intel Online supports government, private, enterprise, military, defense, and intelligence organizations with vendor-neutral cybersecurity advisory, engineering, and response capabilities.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <Link to="/contact" className="ci-btn ci-btn-light">
                                    Contact Team <ArrowRight size={18} />
                                </Link>
                                <Link to="/insights" className="ci-btn ci-btn-outline">
                                    View Insights
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Industries;