import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    ClipboardCheck,
    FileCheck2,
    Gavel,
    Layers3,
    LockKeyhole,
    Scale,
    ShieldCheck,
    Target
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: ShieldCheck,
        title: "ISO/IEC 27001 ISMS Services",
        text: "ISO/IEC 27001 is the internationally recognized standard for establishing, implementing, maintaining, and continually improving an Information Security Management System. Cyber-Intel supports gap analysis, risk assessment, ISMS design, policy development, control implementation, staff awareness, internal audits, corrective action support, and certification readiness."
    },
    {
        icon: BadgeCheck,
        title: "SOC 2 Compliance Services",
        text: "SOC 2 is a widely recognized compliance framework developed by the AICPA to assess how service organizations protect customer data. Cyber-Intel supports readiness assessment, gap analysis, Trust Services Criteria mapping, control design, evidence management, audit preparation, remediation guidance, and ongoing advisory."
    },
    {
        icon: Scale,
        title: "Risk, Compliance, and Mitigation Services",
        text: "Risk, Compliance, and Mitigation Services provide organizations with a structured approach to identifying, assessing, and managing cyber, operational, regulatory, and digital risks. Cyber-Intel supports risk identification, impact analysis, compliance mapping, control design, mitigation planning, continuous monitoring, and reporting."
    },
    {
        icon: LockKeyhole,
        title: "Parkerian Hexad-Aligned ISMS Services",
        text: "The Parkerian Hexad extends beyond the traditional CIA triad by incorporating Authenticity, Possession, and Utility. Cyber-Intel maps information assets against all six principles and aligns controls, policies, risk registers, and audit-ready documentation to strengthen modern information governance."
    }
];

const outcomes = [
    "Improved audit readiness and regulatory confidence",
    "Structured governance and control assurance",
    "Risk identification and mitigation planning",
    "Evidence-ready documentation and reporting",
    "Sustainable compliance and continuous monitoring",
    "Long-term organizational resilience"
];

function CyberComplianceAssurance() {
    return (
        <>
            <Helmet>
                <title>Cyber Compliance Assurance — Cyber-Intel Online</title>
                <meta name="description" content="Compliance, risk, governance, regulatory assurance, ISO 27001, SOC 2, risk mitigation, and Parkerian Hexad-aligned ISMS services." />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <ClipboardCheck size={16} />
                                Compliance, Risk, Governance, and Regulatory Assurance
                            </div>

                            <h1 className="ci-heading-xl">
                                Build audit-ready <span className="ci-gradient-text">cyber compliance confidence</span>
                            </h1>

                            <p className="ci-lead">
                                Compliance, Risk and Regulatory Assurance Services help organizations establish, maintain, and demonstrate adherence to legal, regulatory, and contractual cyber security obligations while managing enterprise risk effectively.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Compliance Support <ArrowRight size={18} />
                                </Link>
                                <a href="#compliance-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><FileCheck2 size={17} /> Audit Ready</span>
                                <span><Scale size={17} /> Risk Aligned</span>
                                <span><ShieldCheck size={17} /> Control Assurance</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <FileCheck2 size={74} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Frameworks</span>
                                    <strong>ISO 27001 · SOC 2 · Risk</strong>
                                </div>
                                <div>
                                    <span>Focus</span>
                                    <strong>Governance · Controls · Evidence</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Sustainable Compliance</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="compliance-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <Gavel size={42} />
                                <h3>Compliance embedded into business operations</h3>
                                <p>
                                    Services are designed to ensure that security, privacy, and compliance requirements are embedded into business operations rather than treated as standalone technical activities.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <BadgeCheck size={18} />
                                Evidence Ready
                            </div>

                            <div className="ci-floating-card card-b">
                                <Target size={18} />
                                Risk Based
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Governance, risk, and control assurance aligned to recognized standards</h2>
                                <p>
                                    This category focuses on structured governance, risk identification, and control assurance aligned with internationally recognized standards and frameworks.
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
                            <span className="ci-mini-title">Compliance Service Areas</span>
                            <h2 className="ci-heading-lg">From readiness to sustainable assurance</h2>
                            <p>
                                By integrating risk management, compliance oversight, and continuous assurance, organizations gain improved audit readiness, regulatory confidence, and transparency across their security posture.
                            </p>
                        </div>

                        <div className="ci-grid-2 ci-mt-32">
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
                                <span className="ci-mini-title">Implementation Methodology</span>
                                <h2 className="ci-heading-lg">Risk-based methodologies, control validation, and continuous monitoring</h2>
                                <p>
                                    Cyber-Intel delivers compliance and assurance capabilities through risk-based methodologies, control validation, and continuous monitoring, enabling sustainable compliance, adaptive risk management, and long-term organizational resilience.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Gap analysis and risk assessment",
                                "ISMS design and policy development",
                                "Control implementation and evidence management",
                                "Internal audit and corrective action support",
                                "Continuous risk monitoring and improvement"
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
                            <span className="ci-mini-title">Framework References</span>
                            <h2 className="ci-heading-lg">Useful official and supporting references</h2>
                            <p>
                                These links can be used for client education, procurement review, and framework awareness.
                            </p>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {[
                                ["ISO/IEC 27001 Official Overview", "https://www.iso.org/isoiec-27001-information-security.html"],
                                ["NIST Risk Management Framework", "https://csrc.nist.gov/projects/risk-management"],
                                ["AICPA SOC 2 Overview", "https://www.aicpa-cima.com/resources/article/what-is-soc-2"],
                                ["Microsoft SOC Reports and Trust Services", "https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc"],
                                ["ISO 31000 Risk Management", "https://www.iso.org/iso-31000-risk-management.html"],
                                ["SANS Parkerian Hexad Explained", "https://www.sans.org/security-resources/glossary-of-terms/parkerian-hexad"]
                            ].map(([title, href], index) => (
                                <motion.a key={title} href={href} target="_blank" rel="noreferrer" className="ci-card ci-hover-lift" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                                    <div className="ci-icon-box">
                                        <Layers3 size={22} />
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
                                <span className="ci-mini-title">Compliance Assurance</span>
                                <h2>Prepare for audits, reduce regulatory exposure, and improve governance confidence</h2>
                                <p>
                                    Engage Cyber-Intel for ISO 27001 readiness, SOC 2 readiness, risk management, control assurance, mitigation planning, and audit-ready reporting.
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

export default CyberComplianceAssurance;