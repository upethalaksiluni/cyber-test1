import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
    FileCheck2,
    Gavel,
    Landmark,
    Scale,
    SearchCheck,
    ShieldCheck,
    UsersRound
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Gavel,
        title: "Cyber Law, Computer Crime, and E-Discovery",
        text: "Legal, regulatory, and evidentiary support for cyber incidents, digital misconduct, data breaches, insider abuse, fraud, intellectual property theft, investigations, litigation, and lawful electronic evidence handling."
    },
    {
        icon: Landmark,
        title: "Forensic Accounting and AML Services",
        text: "Financial misconduct, fraud, illicit activity, anomaly detection, transaction tracing, regulatory mapping, anti-money laundering support, evidence correlation, and audit-ready financial investigation reporting."
    },
    {
        icon: UsersRound,
        title: "Human Resource Dispute Resolution Services",
        text: "Workplace dispute and investigation support involving digital systems, communications, access misuse, policy violations, employee misconduct, insider risk, harassment, data misuse, and evidence-based HR decisions."
    }
];

const outcomes = [
    "Defensible cyber legal, financial, and specialized assurance support",
    "Reduced legal, regulatory, audit, and reputational exposure",
    "Structured handling of electronic evidence and investigative findings",
    "Support for cybercrime, litigation, regulatory investigations, and disputes",
    "Financial crime, AML, fraud, and forensic accounting investigation support",
    "Clear audit-ready reporting for legal, HR, compliance, and executive teams"
];

const references = [
    ["NIST Digital Forensics", "https://www.nist.gov/itl/ssd/digital-forensics"],
    ["Thomson Reuters Cybersecurity and the Law", "https://legal.thomsonreuters.com/en/insights/articles/cybersecurity-and-the-law"],
    ["U.S. DOJ Computer Crime and IP Section", "https://www.justice.gov/criminal-ccips"],
    ["FATF AML/CFT", "https://www.fatf-gafi.org"],
    ["ACFE Fraud Examination", "https://www.acfe.com"],
    ["NIST Insider Threat", "https://www.nist.gov/itl/applied-cybersecurity/insider-threat"]
];

function CyberLegalFinancialAssurance() {
    return (
        <>
            <Helmet>
                <title>Cyber Legal & Financial Assurance — Cyber-Intel Online</title>
                <meta name="description" content="Cyber legal, financial, forensic accounting, AML, e-discovery, computer crime, and HR dispute resolution assurance services." />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Gavel size={16} />
                                Cyber Legal, Financial, and Specialized Assurance
                            </div>

                            <h1 className="ci-heading-xl">
                                Defensible assurance for <span className="ci-gradient-text">legal, financial, and regulatory cyber risk</span>
                            </h1>

                            <p className="ci-lead">
                                Cyber Legal, Financial and Specialized Assurance Services address the intersection of cyber security, law, finance, and regulatory oversight.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Assurance Support <ArrowRight size={18} />
                                </Link>
                                <a href="#legal-assurance-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Scale size={17} /> Legal Alignment</span>
                                <span><FileCheck2 size={17} /> E-Discovery</span>
                                <span><BriefcaseBusiness size={17} /> Financial Assurance</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <Scale size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Focus Areas</span>
                                    <strong>Law · Finance · HR · Evidence</strong>
                                </div>
                                <div>
                                    <span>Use Cases</span>
                                    <strong>Disputes · Crime · Audits</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Defensible Decisions</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="legal-assurance-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <SearchCheck size={42} />
                                <h3>Technical rigor with legal and financial defensibility</h3>
                                <p>
                                    Cyber-Intel combines cyber forensics, legal advisory, financial investigation, and compliance assurance to support confident incident, dispute, and regulatory outcomes.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <ShieldCheck size={18} />
                                Audit Ready
                            </div>

                            <div className="ci-floating-card card-b">
                                <Gavel size={18} />
                                Evidence Led
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Support for cyber incidents, disputes, investigations, and accountability</h2>
                                <p>
                                    These services help reduce legal exposure, support regulatory and audit requirements, and ensure investigative findings and controls withstand external scrutiny.
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
                            <span className="ci-mini-title">Assurance Service Areas</span>
                            <h2 className="ci-heading-lg">Cyber law, e-discovery, forensic accounting, AML, and HR dispute support</h2>
                            <p>
                                Cyber-Intel delivers specialized assurance through structured, standards-aligned methodologies that combine technical rigor with legal and financial expertise.
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
                                <h2 className="ci-heading-lg">Coordinated, defensible, and audit-ready assurance workflow</h2>
                                <p>
                                    Engagement begins with legal, regulatory, financial, or HR scoping, followed by evidence identification, preservation, analysis, reporting, and expert advisory.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Legal and regulatory scoping",
                                "Evidence identification and preservation",
                                "Transaction analysis and anomaly detection",
                                "Digital artifact and communications review",
                                "Audit-ready documentation and expert advisory",
                                "Support for legal counsel, HR, compliance, and leadership"
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
                            <span className="ci-mini-title">Assurance References</span>
                            <h2 className="ci-heading-lg">Useful references for legal, financial, and evidence governance</h2>
                            <p>
                                These references support cyber legal, e-discovery, AML, forensic accounting, and insider-risk awareness.
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
                                <span className="ci-mini-title">Specialized Assurance</span>
                                <h2>Handle cyber legal, financial, and HR-sensitive matters with confidence</h2>
                                <p>
                                    Engage Cyber-Intel for e-discovery, cyber law support, computer crime assistance, forensic accounting, AML, and HR dispute resolution.
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

export default CyberLegalFinancialAssurance;