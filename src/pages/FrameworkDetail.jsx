import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    ClipboardCheck,
    Compass,
    Crosshair,
    FileText,
    FolderOpen,
    Mail,
    Send,
    ShieldCheck,
    Target,
    UserCheck,
    Zap
} from "lucide-react";
import AnimatedBadge from "../components/common/AnimatedBadge";
import SectionHeader from "../components/common/SectionHeader";
import { siteConfig } from "../config/siteConfig";

const frameworkPages = {
    "iso-27001": {
        icon: BadgeCheck,
        name: "ISO 27001",
        title: "ISMS readiness, controls, and audit-friendly evidence",
        description:
            "ISO 27001 alignment support helps organizations establish or strengthen an Information Security Management System with clear control mapping, practical implementation steps, and evidence-ready deliverables.",
        meta:
            "ISO 27001 alignment support: ISMS readiness, control mapping, evidence packs, risk treatment planning, and audit-friendly reporting.",
        kpis: [
            ["Readiness & gap analysis", "Know what is missing and what matters first", ClipboardCheck],
            ["Evidence packs", "Documentation aligned to audit expectations", FolderOpen],
            ["Risk treatment planning", "Controls mapped to real operational work", ShieldCheck]
        ],
        cards: [
            ["Control mapping", "Policies to controls to evidence", "Define what you must have, then translate it into operational tasks and measurable artifacts."],
            ["Maturity roadmap", "Prioritized improvement plan", "A realistic roadmap that fits your team capacity and deadlines."]
        ],
        deliverables: [
            "ISO 27001 gap assessment summary with high, medium, and low priority items",
            "ISMS documentation pack with selected policies, procedures, and templates",
            "Risk register and risk treatment plan support",
            "Control implementation guidance and evidence checklist",
            "Audit-ready reporting and stakeholder summary"
        ],
        mapping: [
            ["ISO 27001 readiness", "Gap analysis and planning", "Compliance Assurance, Executive Cyber Leadership"],
            ["Technical control validation", "Proof of implementation", "App & Infrastructure Security, Adversary Simulation & Testing"],
            ["Incident readiness", "Response process and evidence", "Advanced Threat Defense, Digital Forensics"]
        ],
        formTitle: "Request ISO 27001 alignment",
        formTypeLabel: "Target timeline",
        formOptions: ["0–1 month", "1–3 months", "3–6 months", "6+ months"],
        notePlaceholder: "What is your current status, policies, controls, or audit date?"
    },
    "nist-csf": {
        icon: Compass,
        name: "NIST CSF",
        title: "A simple model for measurable security outcomes",
        description:
            "NIST CSF helps structure security conversations into clear outcomes across Identify, Protect, Detect, Respond, and Recover so leadership can track progress and risk reduction.",
        meta:
            "NIST CSF alignment support: maturity baselining, roadmaps, measurable outcomes across Identify, Protect, Detect, Respond, Recover.",
        kpis: [
            ["Baseline", "Understand current state", Target],
            ["Prioritize", "Choose what matters first", ClipboardCheck],
            ["Validate", "Test and report progress", CheckCircle2]
        ],
        cards: [
            ["Executive-ready", "Clear reporting", "Briefs that stakeholders can act on, not just technical output."],
            ["Outcome mapping", "Measurable roadmap", "Prioritized plan aligned to budgets and timelines."]
        ],
        deliverables: [
            "Maturity baseline across Identify, Protect, Detect, Respond, and Recover",
            "Pragmatic roadmap with milestones, owners, and measurable outcomes",
            "Executive-ready reporting for security progress",
            "Incident readiness recommendations",
            "Security testing and validation plan"
        ],
        mapping: [
            ["Baseline & maturity", "Understand current security posture", "Executive Cyber Leadership, Compliance Assurance"],
            ["Roadmap & prioritization", "Define measurable next actions", "vCISO / Strategy, Managed IT Services"],
            ["Testing & validation", "Validate control effectiveness", "Advanced Threat Defense, App & Infrastructure Security"]
        ],
        formTitle: "Request NIST CSF roadmap",
        formTypeLabel: "Primary focus",
        formOptions: ["Baseline & maturity", "Roadmap & prioritization", "Incident readiness", "Testing & validation"],
        notePlaceholder: "Tell us your industry, size, and biggest security concern."
    },
    "mitre-attck": {
        icon: Crosshair,
        name: "MITRE ATT&CK",
        title: "Threat-led testing mapped to real attacker techniques",
        description:
            "MITRE ATT&CK alignment maps adversary behavior to your environment using tactics and techniques, then provides actionable findings to improve detection, response, and resilience.",
        meta:
            "MITRE ATT&CK alignment: threat-led testing, adversary simulation, detection gap analysis, and actionable hardening priorities mapped to attacker techniques.",
        kpis: [
            ["Adversary simulation", "Pen test and red team operations", Crosshair],
            ["Detection gaps", "Measure where visibility fails", Zap],
            ["Hardening priorities", "Actionable next fixes", ShieldCheck]
        ],
        cards: [
            ["Adversary Simulation", "Pen test & red team operations", "Realistic attack paths mapped to techniques with results you can act on."],
            ["Threat Defense", "Ransomware & malware response", "Containment guidance and investigative output for faster recovery."]
        ],
        deliverables: [
            "ATT&CK technique mapping for observed or tested behaviors",
            "Detection gap summary with prioritized improvements",
            "Hardening recommendations aligned to tested paths",
            "Executive-ready brief covering risk now and next actions",
            "Attack path and response validation summary"
        ],
        mapping: [
            ["Threat-led testing", "Real attacker technique simulation", "Adversary Simulation & Testing"],
            ["Detection improvement", "Find visibility and response gaps", "Advanced Threat Defense"],
            ["Resilience engineering", "Improve containment and deception", "Specialized Security Architecture"]
        ],
        formTitle: "Request ATT&CK-based testing",
        formTypeLabel: "Engagement type",
        formOptions: ["Penetration Testing", "Red Team Operations", "Detection Gap Assessment", "Incident Response Support"],
        notePlaceholder: "What environment should we test, such as web, cloud, endpoints, or email?"
    }
};

function FrameworkDetail() {
    const { frameworkId } = useParams();
    const page = frameworkPages[frameworkId] || frameworkPages["iso-27001"];
    const [alert, setAlert] = useState("");
    const Icon = page.icon;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            setAlert("Please complete all required fields.");
            return;
        }

        setAlert(`${page.name} request captured demo. Please email ${siteConfig.email} to proceed.`);
        form.reset();
    };

    return (
        <>
            <Helmet>
                <title>{page.name} — Framework Alignment | Cyber-Intel Online</title>
                <meta name="description" content={page.meta} />
            </Helmet>

            <main>
                <section className="ci-hero ci-framework-detail-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-container ci-frameworks-hero-inner">
                        <motion.div
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={Icon} dark>
                                {page.name}
                            </AnimatedBadge>

                            <h1 className="ci-heading-xl">{page.title}</h1>

                            <p className="ci-lead">{page.description}</p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="#framework-detail-request" className="ci-btn ci-btn-primary ci-shine">
                                    Submit Request <Send size={18} />
                                </a>
                                <Link to="/frameworks" className="ci-btn ci-btn-outline">
                                    Back to Frameworks
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {page.kpis.map(([title, text, KpiIcon], index) => (
                            <motion.div
                                className="ci-trust-item"
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                            >
                                <KpiIcon size={24} />
                                <div>
                                    <strong>{title}</strong>
                                    <span>{text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container ci-grid-2 ci-framework-detail-grid">
                        <div>
                            <SectionHeader
                                eyebrow="What We Do"
                                title={`${page.name} alignment support`}
                                text={page.description}
                            />

                            <div className="ci-grid-2 ci-mt-32">
                                {page.cards.map(([tag, title, text], index) => (
                                    <motion.div
                                        className="ci-card"
                                        key={title}
                                        initial={{ opacity: 0, y: 28 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.55, delay: index * 0.08 }}
                                    >
                                        <span className="ci-tag">{tag}</span>
                                        <h3>{title}</h3>
                                        <p>{text}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="ci-framework-deliverables ci-mt-32"
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.65 }}
                            >
                                <h3>Typical deliverables</h3>
                                <div className="ci-check-list">
                                    {page.deliverables.map((item) => (
                                        <div key={item}>
                                            <CheckCircle2 size={20} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.aside
                            className="ci-framework-form-card"
                            id="framework-detail-request"
                            initial={{ opacity: 0, x: 28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65 }}
                        >
                            <h3>{page.formTitle}</h3>
                            <p>Complete this short request form. In production, connect this to your backend or email workflow.</p>

                            <form className="ci-framework-form" onSubmit={handleSubmit} noValidate>
                                <div className="ci-field">
                                    <label htmlFor="fw_name">Your Name</label>
                                    <input id="fw_name" name="name" type="text" placeholder="Enter your full name" required />
                                </div>

                                <div className="ci-field">
                                    <label htmlFor="fw_email">Your Email</label>
                                    <input id="fw_email" name="email" type="email" placeholder="Enter your email address" required />
                                </div>

                                <div className="ci-field">
                                    <label htmlFor="fw_company">Company / Organization</label>
                                    <input id="fw_company" name="company" type="text" placeholder="Your organization name" required />
                                </div>

                                <div className="ci-field">
                                    <label htmlFor="fw_type">{page.formTypeLabel}</label>
                                    <select id="fw_type" name="type" required defaultValue="">
                                        <option value="" disabled>Select option</option>
                                        {page.formOptions.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="ci-field">
                                    <label htmlFor="fw_message">Notes</label>
                                    <textarea id="fw_message" name="message" placeholder={page.notePlaceholder} required />
                                </div>

                                <button className="ci-btn ci-btn-primary ci-contact-submit" type="submit">
                                    Submit Request <Send size={18} />
                                </button>

                                {alert && <div className="ci-form-alert">{alert}</div>}

                                <p className="ci-framework-email">
                                    Or email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                                </p>
                            </form>
                        </motion.aside>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Quick Mapping"
                            title="Client-friendly scope mapping"
                            text="A simplified view to help procurement and leadership understand scope quickly."
                        />

                        <motion.div
                            className="ci-framework-map ci-mt-32"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-framework-map-head">
                                <span>Goal</span>
                                <span>Meaning</span>
                                <span>Suggested Services</span>
                            </div>

                            {page.mapping.map(([goal, meaning, services]) => (
                                <div className="ci-framework-map-row" key={goal}>
                                    <div data-label="Goal">{goal}</div>
                                    <div data-label="Meaning">{meaning}</div>
                                    <div data-label="Suggested Services">{services}</div>
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
                                <span className="ci-mini-title">{page.name}</span>
                                <h2>Need help translating framework requirements into action?</h2>
                                <p>
                                    Start with a focused request and Cyber-Intel Online can suggest the most practical next step.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <a href="#framework-detail-request" className="ci-btn ci-btn-light">
                                    Request Alignment
                                </a>
                                <Link to="/contact" className="ci-btn ci-btn-outline">
                                    Talk to an Expert
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default FrameworkDetail;