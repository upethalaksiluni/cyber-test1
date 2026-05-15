import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    Binary,
    BriefcaseBusiness,
    CheckCircle2,
    ClipboardCheck,
    Code2,
    Crosshair,
    DatabaseZap,
    Fingerprint,
    Gavel,
    Layers3,
    LifeBuoy,
    LockKeyhole,
    Network,
    Radar,
    Route,
    Scale,
    Search,
    Send,
    ShieldCheck,
    Skull,
    Sparkles,
    Target,
    UserLock,
    UserRoundCog,
    WandSparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBadge from "../components/common/AnimatedBadge";
import SectionHeader from "../components/common/SectionHeader";
import { siteConfig } from "../config/siteConfig";

const services = [
    {
        icon: UserRoundCog,
        title: "Executive Cyber Leadership",
        text: "Governance, vCISO, strategy, and intelligence-led security leadership.",
        path: "/services/executive-cyber-leadership",
        chips: ["Strategy", "Governance"]
    },
    {
        icon: Network,
        title: "Managed IT Services",
        text: "Operate, secure, and support core IT services with reliability.",
        path: "/services/managed-it-services",
        chips: ["Operations", "Support"]
    },
    {
        icon: ClipboardCheck,
        title: "Cyber Compliance Assurance",
        text: "Readiness, audits, and controls aligned to key standards.",
        path: "/services/cyber-compliance-assurance",
        chips: ["Controls", "Evidence"]
    },
    {
        icon: Crosshair,
        title: "Adversary Simulation & Testing",
        text: "Penetration testing, red teaming, and realistic attack emulation.",
        path: "/services/adversary-simulation-testing",
        chips: ["Pen Test", "Red Team"]
    },
    {
        icon: Fingerprint,
        title: "Digital Forensics",
        text: "Investigations, evidence handling, and incident support.",
        path: "/services/digital-forensics",
        chips: ["Investigation", "Evidence"]
    },
    {
        icon: Skull,
        title: "Advanced Threat Defense",
        text: "Ransomware response, malware analysis, and rapid containment.",
        path: "/services/advanced-threat-defense",
        chips: ["Ransomware", "Response"]
    },
    {
        icon: Code2,
        title: "Application & Infrastructure Security",
        text: "Web and API testing, hardening, and secure architecture.",
        path: "/services/application-infrastructure-security",
        chips: ["Web", "API"]
    },
    {
        icon: UserLock,
        title: "Data Protection & Privacy",
        text: "OSINT, doxing risk assessment, and exposure reduction.",
        path: "/services/data-protection-privacy",
        chips: ["OSINT", "Privacy"]
    },
    {
        icon: Gavel,
        title: "Cyber Legal & Financial Assurance",
        text: "Cyber law support, e-discovery services, and assurance reporting.",
        path: "/services/cyber-legal-financial-assurance",
        chips: ["Legal", "E-Discovery"]
    },
    {
        icon: Route,
        title: "Specialized Security Architecture",
        text: "Deception, sinkholes, and advanced defensive engineering.",
        path: "/services/specialized-security-architecture",
        chips: ["Deception", "Sinkhole"],
        center: true
    }
];

const kpis = [
    {
        icon: Layers3,
        title: "Full Service Portfolio",
        text: "Strategy, operations, compliance, testing, forensics, and defense."
    },
    {
        icon: ShieldCheck,
        title: "Mission-Critical Delivery",
        text: "Services designed for enterprises, governments, and high-risk organizations."
    },
    {
        icon: BadgeCheck,
        title: "Framework Aligned",
        text: "Mapped to governance, audit, and risk-management requirements."
    },
    {
        icon: LifeBuoy,
        title: "Response Ready",
        text: "Support pathways for urgent incidents and planned improvements."
    }
];

const recommendations = {
    baseline: {
        title: "Cyber Compliance Assurance",
        text: "Start with a baseline assessment, control review, and risk-prioritized roadmap.",
        path: "/services/cyber-compliance-assurance"
    },
    test: {
        title: "Adversary Simulation & Testing",
        text: "Begin with penetration testing or red-team validation for realistic attack-path visibility.",
        path: "/services/adversary-simulation-testing"
    },
    compliance: {
        title: "Cyber Compliance Assurance",
        text: "Focus on readiness, evidence packs, policy alignment, and audit-friendly outputs.",
        path: "/services/cyber-compliance-assurance"
    },
    incident: {
        title: "Advanced Threat Defense",
        text: "Prioritize containment, triage, ransomware handling, and response guidance.",
        path: "/services/advanced-threat-defense"
    },
    forensics: {
        title: "Digital Forensics",
        text: "Start with evidence preservation, investigation scoping, and incident reconstruction.",
        path: "/services/digital-forensics"
    },
    privacy: {
        title: "Data Protection & Privacy",
        text: "Focus on exposure reduction, OSINT review, privacy risk, and doxing defense.",
        path: "/services/data-protection-privacy"
    },
    leadership: {
        title: "Executive Cyber Leadership",
        text: "Start with strategy, governance, board-level guidance, and security program direction.",
        path: "/services/executive-cyber-leadership"
    }
};

function Services() {
    const [result, setResult] = useState(null);
    const [alert, setAlert] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            setAlert("Please select your objective and urgency first.");
            setResult(null);
            return;
        }

        const formData = new FormData(form);
        const objective = formData.get("objective");
        const urgency = formData.get("urgency");
        const recommendation = recommendations[objective];

        setAlert("");
        setResult({
            ...recommendation,
            urgency:
                urgency === "urgent"
                    ? "Urgent priority: contact the response team immediately."
                    : urgency === "soon"
                        ? "Near-term priority: plan the engagement within 1–4 weeks."
                        : "Planned priority: build this into a 1–3 month roadmap."
        });
    };

    return (
        <>
            <Helmet>
                <title>Services — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Explore Cyber-Intel Online service pillars including executive cyber leadership, managed IT, compliance assurance, adversary simulation, digital forensics, advanced threat defense, application and infrastructure security, privacy, legal assurance, and specialized security architecture."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={Layers3} dark>
                                Cyber-Intel Online Services
                            </AnimatedBadge>

                            <h1 className="ci-heading-xl">
                                Find the right <span className="ci-gradient-text">engagement model</span>
                            </h1>

                            <p className="ci-lead">
                                Quickly understand what Cyber-Intel Online does and the best first step. Our services are grouped into clear pillars with pathways to detailed sub-service pages.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="#service-pillars" className="ci-btn ci-btn-primary ci-shine">
                                    Explore Service Pillars <ArrowRight size={18} />
                                </a>
                                <a href="#service-matcher" className="ci-btn ci-btn-outline">
                                    Match My Goal
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Radar size={17} /> Intelligence-Led</span>
                                <span><ShieldCheck size={17} /> Enterprise-Grade</span>
                                <span><Target size={17} /> Outcome-Focused</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-services-command ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <DatabaseZap size={74} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Service Pillars</span>
                                    <strong>10</strong>
                                </div>
                                <div>
                                    <span>Delivery Model</span>
                                    <strong>Advisory · Managed · Response</strong>
                                </div>
                                <div>
                                    <span>Focus</span>
                                    <strong>Security · Intelligence · Compliance</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {kpis.map((item, index) => (
                            <motion.div
                                className="ci-trust-item"
                                key={item.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                            >
                                <item.icon size={24} />
                                <div>
                                    <strong>{item.title}</strong>
                                    <span>{item.text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="service-pillars">
                    <div className="ci-container">
                        <div className="ci-section-row">
                            <SectionHeader
                                eyebrow="Service Pillars"
                                title="Explore by pillar"
                                text="Each pillar is designed as a gateway to sub-services, detailed capabilities, delivery models, and recommended next steps."
                            />

                            <Link to="/contact" className="ci-btn ci-btn-light">
                                Talk to an Expert <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="ci-services-grid ci-mt-32">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    className={service.center ? "ci-service-card-wrap ci-service-center-card" : "ci-service-card-wrap"}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.55, delay: index * 0.04 }}
                                >
                                    <Link to={service.path} className="ci-service-main-card">
                                        <div className="ci-service-card-top">
                                            <span className="ci-icon-box">
                                                <service.icon size={24} />
                                            </span>
                                            <ArrowRight size={20} />
                                        </div>

                                        <h3>{service.title}</h3>
                                        <p>{service.text}</p>

                                        <div className="ci-service-chips">
                                            {service.chips.map((chip) => (
                                                <span key={chip}>{chip}</span>
                                            ))}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section" id="service-matcher">
                    <div className="ci-container ci-services-match-grid">
                        <motion.div
                            className="ci-service-matcher-panel"
                            initial={{ opacity: 0, x: -34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            <SectionHeader
                                eyebrow="Fast Guidance"
                                title="Match your goal to a first service"
                                text="Pick your objective and urgency to get a recommended starting point. This matcher runs locally and does not send data."
                            />

                            <form className="ci-service-matcher-form" onSubmit={handleSubmit} noValidate>
                                <div className="ci-form-grid">
                                    <div className="ci-field">
                                        <label htmlFor="objective">Objective</label>
                                        <select id="objective" name="objective" required defaultValue="">
                                            <option value="" disabled>Select an objective</option>
                                            <option value="baseline">Baseline Risk Assessment</option>
                                            <option value="test">Pen Test / Red Team</option>
                                            <option value="compliance">Compliance Readiness</option>
                                            <option value="incident">Incident / Ransomware Response</option>
                                            <option value="forensics">Digital Forensics</option>
                                            <option value="privacy">Privacy / Exposure Reduction</option>
                                            <option value="leadership">Security Strategy / vCISO</option>
                                        </select>
                                    </div>

                                    <div className="ci-field">
                                        <label htmlFor="urgency">Urgency</label>
                                        <select id="urgency" name="urgency" required defaultValue="">
                                            <option value="" disabled>Select urgency</option>
                                            <option value="urgent">Urgent: 0–72 hours</option>
                                            <option value="soon">Soon: 1–4 weeks</option>
                                            <option value="planned">Planned: 1–3 months</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="ci-field">
                                    <label htmlFor="scope">Scope Notes</label>
                                    <textarea id="scope" name="scope" placeholder="Example: web app and API, cloud environment, number of endpoints, audit timeline, or incident context." />
                                </div>

                                <button className="ci-btn ci-btn-primary ci-contact-submit" type="submit">
                                    Recommend a Service <WandSparkles size={18} />
                                </button>

                                {alert && <div className="ci-form-alert">{alert}</div>}
                            </form>
                        </motion.div>

                        <motion.aside
                            className="ci-service-recommendation-panel"
                            initial={{ opacity: 0, x: 34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="ci-service-reco-card">
                                <Sparkles size={36} />
                                <h3>{result ? result.title : "Recommended starting point"}</h3>
                                <p>
                                    {result
                                        ? result.text
                                        : "Select your objective and urgency to generate a recommended first service."}
                                </p>

                                {result && (
                                    <>
                                        <div className="ci-service-reco-note">
                                            <CheckCircle2 size={19} />
                                            <span>{result.urgency}</span>
                                        </div>

                                        <Link to={result.path} className="ci-btn ci-btn-primary">
                                            Open Service Path <ArrowRight size={18} />
                                        </Link>
                                    </>
                                )}
                            </div>

                            <div className="ci-service-browse-card">
                                <Search size={32} />
                                <h3>Prefer browsing?</h3>
                                <p>Review all service pillars and choose the closest fit for your organization.</p>
                                <div className="ci-service-browse-actions">
                                    <a href="#service-pillars" className="ci-btn ci-btn-light">Browse Pillars</a>
                                    <Link to="/contact" className="ci-btn ci-btn-outline">Ask Us</Link>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <SectionHeader
                                eyebrow="How We Work"
                                title="From security strategy to technical execution"
                                text="Cyber-Intel Online combines advisory, managed, testing, investigation, and response capabilities to reduce business risk and improve operational resilience."
                            />
                        </div>

                        <motion.div
                            className="ci-market-panel"
                            initial={{ opacity: 0, x: 34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            {[
                                "Assess current risk and business priorities",
                                "Map services to practical security outcomes",
                                "Deliver evidence-ready and executive-ready reporting",
                                "Create a path for continuous improvement"
                            ].map((item) => (
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
                                <span className="ci-mini-title">Need Help Choosing?</span>
                                <h2>Tell us your objective and we will suggest the right first engagement</h2>
                                <p>
                                    Use the contact page or email {siteConfig.email}. For urgent incidents, include priority details and response timeline.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <Link to="/contact" className="ci-btn ci-btn-light">
                                    Contact Team <Send size={18} />
                                </Link>
                                <a href={`mailto:${siteConfig.email}`} className="ci-btn ci-btn-outline">
                                    {siteConfig.email}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Services;