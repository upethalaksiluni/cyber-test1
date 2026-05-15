import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    Compass,
    Crosshair,
    FileCheck2,
    Layers3,
    ListChecks,
    Send,
    Workflow
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBadge from "../components/common/AnimatedBadge";
import SectionHeader from "../components/common/SectionHeader";

const frameworks = [
    {
        path: "/frameworks/iso-27001",
        icon: BadgeCheck,
        name: "ISO 27001",
        title: "ISMS governance & controls",
        text: "Ideal for organizations building an ISMS, preparing for certification, or strengthening control maturity.",
        bullets: ["Gap assessments & readiness", "Policies, controls, and evidence packs", "Risk treatment planning"]
    },
    {
        path: "/frameworks/nist-csf",
        icon: Compass,
        name: "NIST CSF",
        title: "Practical program structure",
        text: "Organize security outcomes across Identify, Protect, Detect, Respond, Recover. Great for executive reporting.",
        bullets: ["Program baselining & maturity", "Roadmaps with measurable outcomes", "Incident response readiness"]
    },
    {
        path: "/frameworks/mitre-attck",
        icon: Crosshair,
        name: "MITRE ATT&CK",
        title: "Threat-led defense mapping",
        text: "Maps real adversary techniques to detections and controls — perfect for testing and blue-team maturity.",
        bullets: ["Adversary simulation & validation", "Detection gaps & hardening priorities", "Actionable “what to fix next”"]
    }
];

const kpis = [
    {
        icon: CheckCircle2,
        title: "Client-friendly alignment",
        text: "Clear mapping to governance requirements"
    },
    {
        icon: Workflow,
        title: "Controls to execution",
        text: "Assess, remediate, validate, report"
    },
    {
        icon: FileCheck2,
        title: "Evidence-ready outputs",
        text: "Reports and documentation for audits"
    }
];

function Frameworks() {
    return (
        <>
            <Helmet>
                <title>Frameworks & Standards — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Cyber-Intel Online maps cybersecurity services to ISO 27001, NIST CSF, and MITRE ATT&CK."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-frameworks-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-container ci-frameworks-hero-inner">
                        <motion.div
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={ListChecks} dark>
                                Frameworks & Standards
                            </AnimatedBadge>

                            <h1 className="ci-heading-xl">
                                Make governance and <span className="ci-gradient-text">procurement easier</span>
                            </h1>

                            <p className="ci-lead">
                                Quickly see which frameworks Cyber-Intel Online supports and how services map to each one. This page keeps alignment practical, measurable, and audit-friendly.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="#framework-request" className="ci-btn ci-btn-primary ci-shine">
                                    Submit a Request <Send size={18} />
                                </a>
                                <Link to="/services" className="ci-btn ci-btn-outline">
                                    Browse Services <ArrowRight size={18} />
                                </Link>
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

                <section className="ci-section ci-section-soft">
                    <div className="ci-container">
                        <div className="ci-section-row">
                            <SectionHeader
                                eyebrow="Primary Frameworks"
                                title="Start with what your organization already uses"
                                text="Each framework page provides a focused overview and suggested service fit."
                            />
                            <Link to="/services" className="ci-btn ci-btn-light">
                                <Layers3 size={18} />
                                View Services Hub
                            </Link>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {frameworks.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                >
                                    <Link to={item.path} className="ci-framework-card-link">
                                        <div className="ci-framework-card-top">
                      <span className="ci-framework-pill">
                        <item.icon size={18} />
                          {item.name}
                      </span>
                                            <ArrowRight size={22} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                        <ul>
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Service Mapping"
                            title="How engagements typically support frameworks"
                            text="A simplified mapping for leadership, procurement, security teams, and auditors."
                        />

                        <motion.div
                            className="ci-framework-map ci-mt-32"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-framework-map-head">
                                <span>Framework</span>
                                <span>Common Client Goals</span>
                                <span>Services That Fit</span>
                            </div>

                            <div className="ci-framework-map-row">
                                <div data-label="Framework">ISO 27001</div>
                                <div data-label="Common Client Goals">ISMS readiness, control coverage, documentation, evidence for audits, risk management.</div>
                                <div data-label="Services That Fit">Compliance Assurance, Executive Cyber Leadership, Hardening & Security Testing</div>
                            </div>

                            <div className="ci-framework-map-row">
                                <div data-label="Framework">NIST CSF</div>
                                <div data-label="Common Client Goals">Program maturity assessment, prioritization, security roadmap, incident response planning.</div>
                                <div data-label="Services That Fit">vCISO / Strategy, IR & Threat Defense, Managed IT Services</div>
                            </div>

                            <div className="ci-framework-map-row">
                                <div data-label="Framework">MITRE ATT&CK</div>
                                <div data-label="Common Client Goals">Validate detections, emulate adversaries, test response, close gaps using attacker techniques.</div>
                                <div data-label="Services That Fit">Pen Test / Red Team, Malware / Ransomware Response, Deception / Sinkholes</div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Frameworks;