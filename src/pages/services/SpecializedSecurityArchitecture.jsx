import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    FileCheck2,
    KeyRound,
    Network,
    Radar,
    Route,
    ShieldCheck,
    Skull,
    Target,
    UserRoundCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Network,
        title: "Honeypots, Tarpits, DNS/IP Sinkholes and Bastion Hosts",
        text: "Advanced defensive architectures that detect, delay, analyze, redirect, block, and contain malicious activity before it impacts critical systems. These mechanisms enhance visibility into attacker behavior while reducing production-system risk."
    },
    {
        icon: KeyRound,
        title: "HSM, Sheep-Dip, and Sandbox Computing Services",
        text: "Specialized infrastructure for cryptographic asset protection, isolated high-risk data handling, controlled file inspection, malware analysis, secure transfer between isolated networks, and safe analysis of unknown or malicious content."
    },
    {
        icon: UserRoundCheck,
        title: "High-Profile Business and Individual Targeted Attack Audits",
        text: "Specialized assessments for organizations, executives, key personnel, and high-risk individuals facing targeted cyber, digital, social engineering, doxing, impersonation, and intelligence-driven threats."
    }
];

const outcomes = [
    "Advanced security architecture beyond conventional preventive controls",
    "Active detection, delay, deception, and containment of sophisticated adversaries",
    "Enhanced attacker-behavior visibility and defensive intelligence",
    "Hardened access control, sinkholing, deception assets, HSMs, and sandbox design",
    "Protection for critical assets, sensitive data, executives, and high-risk systems",
    "Risk-aligned deployment, validation, monitoring, and continuous improvement"
];

const references = [
    ["NIST Boundary Protection", "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final"],
    ["MITRE ATT&CK", "https://attack.mitre.org/"],
    ["CISA DNS Security", "https://www.cisa.gov/dns"],
    ["SANS Honeypots", "https://www.sans.org/security-resources/idfaq/honeypots"],
    ["NIST FIPS 140 CMVP", "https://csrc.nist.gov/projects/cryptographic-module-validation-program"],
    ["CISA Malware Analysis", "https://www.cisa.gov/malware"]
];

function SpecializedSecurityArchitecture() {
    return (
        <>
            <Helmet>
                <title>Specialized Security Architecture — Cyber-Intel Online</title>
                <meta name="description" content="Specialized security architecture, deception, honeypots, tarpits, sinkholes, bastion hosts, HSM, sheep-dip, sandbox computing, and targeted attack audit services." />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Route size={16} />
                                Specialized Security Architecture, Deception, and Protection Services
                            </div>

                            <h1 className="ci-heading-xl">
                                Advanced defensive design for <span className="ci-gradient-text">high-risk environments</span>
                            </h1>

                            <p className="ci-lead">
                                Specialized Security Architecture, Deception and Protection Services focus on high-assurance designs that detect, delay, mislead, and contain sophisticated adversaries.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Architecture Support <ArrowRight size={18} />
                                </Link>
                                <a href="#specialized-architecture-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Radar size={17} /> Deception</span>
                                <span><KeyRound size={17} /> HSM & Sandbox</span>
                                <span><Target size={17} /> Targeted Attack Audits</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <ShieldCheck size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Architecture</span>
                                    <strong>Deception · Isolation · Hardening</strong>
                                </div>
                                <div>
                                    <span>Protection</span>
                                    <strong>Critical Assets · Executives</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Adaptive Defense</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="specialized-architecture-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <Skull size={42} />
                                <h3>Deceive, contain, and learn from adversaries</h3>
                                <p>
                                    Cyber-Intel integrates secure architecture engineering with deception technologies and targeted protection mechanisms to improve defensive intelligence and reduce successful compromise risk.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <Radar size={18} />
                                Early Detection
                            </div>

                            <div className="ci-floating-card card-b">
                                <Network size={18} />
                                Hardened Access
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Purpose-built protection for targeted and high-impact threats</h2>
                                <p>
                                    This category addresses environments where traditional perimeter defenses are insufficient, emphasizing resilient architecture, hardened access control, and deception-based techniques.
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
                            <span className="ci-mini-title">Specialized Architecture Areas</span>
                            <h2 className="ci-heading-lg">Deception, cryptographic protection, sandboxing, and targeted attack audits</h2>
                            <p>
                                Cyber-Intel delivers specialized security architecture through intelligence-driven design, risk-aligned deployment, and continuous validation.
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
                                <h2 className="ci-heading-lg">Threat modelling, architecture assessment, deployment, and validation</h2>
                                <p>
                                    Engagement begins with threat modelling, exposure mapping, and architecture assessment, followed by controlled deployment, monitoring, reporting, and improvement.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Threat modelling and architecture assessment",
                                "Deception asset and sinkhole deployment",
                                "Bastion host and hardened access design",
                                "HSM, sheep-dip, and sandbox workflow design",
                                "Targeted attack exposure mapping",
                                "Continuous monitoring, validation, and executive reporting"
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
                            <span className="ci-mini-title">Architecture References</span>
                            <h2 className="ci-heading-lg">Useful references for deception, isolation, cryptography, and boundary protection</h2>
                            <p>
                                These references support architecture planning, deception strategy, malware analysis, and high-assurance protection design.
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
                                <span className="ci-mini-title">Specialized Protection</span>
                                <h2>Build adaptive defenses for targeted, high-impact, and advanced threats</h2>
                                <p>
                                    Engage Cyber-Intel for honeypots, tarpits, DNS/IP sinkholes, bastion hosts, HSM design, sheep-dip systems, sandbox computing, and targeted attack audits.
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

export default SpecializedSecurityArchitecture;