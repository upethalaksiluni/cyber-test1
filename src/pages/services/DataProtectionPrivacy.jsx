import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    DatabaseZap,
    Eye,
    FileCheck2,
    LockKeyhole,
    Radar,
    Search,
    ShieldCheck,
    Target,
    UserLock
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: LockKeyhole,
        title: "DLP and Data Exfiltration Protection",
        text: "Data Loss Prevention and Data Exfiltration Protection Services prevent unauthorized access, leakage, or theft of sensitive information across on-premise, cloud, and hybrid environments. Cyber-Intel supports discovery, classification, policy design, control implementation, endpoint, network and cloud testing, monitoring, incident response integration, and continuous improvement."
    },
    {
        icon: Eye,
        title: "Online Privacy and Doxing Risk Assessments",
        text: "Online Privacy, Doxing, and Digital Footprint Assessment services evaluate how personal, executive, employee, or organizational information is exposed across the internet, social platforms, data brokers, and open-source repositories. Cyber-Intel identifies public exposure, profiling risk, social engineering risk, unintended disclosures, and actionable mitigation paths."
    },
    {
        icon: Search,
        title: "OSINT and Social Media Intelligence Gathering",
        text: "Open-Source Intelligence and Social Media Intelligence services focus on lawful and ethical collection, analysis, and interpretation of publicly available information from websites, social networks, forums, messaging platforms, data repositories, and open databases to support investigations, threat detection, crisis management, and strategic decision-making."
    }
];

const outcomes = [
    "Safeguarding personal data, intellectual property, and business-critical information",
    "Visibility into how data is accessed, shared, transmitted, stored, and exposed",
    "Reduced data breach, insider misuse, regulatory, and reputational risk",
    "Privacy risk assessments, OSINT, social media intelligence, and digital footprint review",
    "Risk-based data protection controls across cloud, hybrid, endpoint, email, and web channels",
    "Long-term trust, transparency, and data governance maturity"
];

const references = [
    ["ISO/IEC 27701 Privacy", "https://www.iso.org/standard/71670.html"],
    ["NIST SP 800-171", "https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final"],
    ["ISO/IEC 27001", "https://www.iso.org/isoiec-27001-information-security.html"],
    ["Microsoft Purview DLP", "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp"],
    ["NIST Privacy Framework", "https://www.nist.gov/privacy-framework"],
    ["ENISA Data Protection", "https://www.enisa.europa.eu/topics/data-protection"]
];

function DataProtectionPrivacy() {
    return (
        <>
            <Helmet>
                <title>Data Protection & Privacy — Cyber-Intel Online</title>
                <meta name="description" content="Data protection, privacy, DLP, data exfiltration protection, doxing risk assessment, OSINT, and social media intelligence services." />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <UserLock size={16} />
                                Data Protection, Privacy, and Intelligence Services
                            </div>

                            <h1 className="ci-heading-xl">
                                Protect sensitive data across the <span className="ci-gradient-text">full information lifecycle</span>
                            </h1>

                            <p className="ci-lead">
                                Data Protection, Privacy and Intelligence Services safeguard sensitive information, manage privacy risk, and provide actionable intelligence on data exposure across digital ecosystems.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Privacy Support <ArrowRight size={18} />
                                </Link>
                                <a href="#data-protection-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><LockKeyhole size={17} /> DLP Protection</span>
                                <span><Eye size={17} /> Doxing Risk</span>
                                <span><Radar size={17} /> OSINT Intelligence</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <UserLock size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Protection Scope</span>
                                    <strong>Data · Privacy · Intelligence</strong>
                                </div>
                                <div>
                                    <span>Coverage</span>
                                    <strong>Cloud · Hybrid · Endpoint · Web</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Trusted Data Governance</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="data-protection-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <DatabaseZap size={42} />
                                <h3>Privacy-aware intelligence and data control</h3>
                                <p>
                                    Cyber-Intel integrates data loss prevention, privacy assessment, OSINT, and intelligence gathering to support confident data governance and exposure reduction.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <ShieldCheck size={18} />
                                Data Control
                            </div>

                            <div className="ci-floating-card card-b">
                                <Target size={18} />
                                Exposure Reduction
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Safeguarding data from creation to disposal</h2>
                                <p>
                                    This category addresses the full lifecycle of data from creation and storage to transmission, use, and disposal, ensuring information assets remain confidential, controlled, and compliant.
                                </p>
                            </div>

                            <div className="ci-check-list ci-mt-32">
                                {outcomes.map((item) => (
                                    <div key={item}>
                                        <CheckCircle2 size={20} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container">
                        <div className="ci-section-header text-center">
                            <span className="ci-mini-title">Privacy Service Areas</span>
                            <h2 className="ci-heading-lg">DLP, doxing protection, OSINT, and social media intelligence</h2>
                            <p>
                                Cyber-Intel combines technical data protection controls, privacy risk assessments, and intelligence-driven analysis to reduce breach, misuse, and exposure risk.
                            </p>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {services.map((item, index) => (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                                    <div className="ci-service-main-card ci-scan-card">
                                        <div className="ci-service-card-top">
                                            <span className="ci-icon-box">
                                                <item.icon size={24} />
                                            </span>
                                            <ArrowRight size={20} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Delivery Methodology</span>
                                <h2 className="ci-heading-lg">Risk-based protection, intelligence, monitoring, and improvement</h2>
                                <p>
                                    Engagements begin with scope definition, data discovery, privacy risk profiling, and intelligence objectives, followed by control implementation, exposure analysis, monitoring, reporting, and continuous tuning.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Data discovery and classification",
                                "DLP policy design and control implementation",
                                "Digital footprint and doxing exposure analysis",
                                "OSINT collection, validation, and threat correlation",
                                "Privacy hardening and data removal guidance",
                                "Executive reporting and continuous improvement"
                            ].map((item) => (
                                <div key={item}>
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container">
                        <div className="ci-section-header text-center">
                            <span className="ci-mini-title">Data Protection References</span>
                            <h2 className="ci-heading-lg">Useful references for privacy and data protection planning</h2>
                            <p>
                                These references support client education, data protection planning, and privacy governance awareness.
                            </p>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {references.map(([title, href], index) => (
                                <motion.a key={title} href={href} target="_blank" rel="noreferrer" className="ci-card ci-hover-lift" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                                    <div className="ci-icon-box">
                                        <FileCheck2 size={22} />
                                    </div>
                                    <h3>{title}</h3>
                                    <p>Open external reference</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section-sm">
                    <div className="ci-container">
                        <motion.div className="ci-cta-strip ci-animated-gradient" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div>
                                <span className="ci-mini-title">Data Protection & Privacy</span>
                                <h2>Reduce exposure, protect sensitive data, and strengthen privacy confidence</h2>
                                <p>
                                    Engage Cyber-Intel for DLP, data exfiltration protection, online privacy assessment, doxing risk review, OSINT, and social media intelligence.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <Link to="/contact" className="ci-btn ci-btn-light">
                                    Contact Team <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default DataProtectionPrivacy;