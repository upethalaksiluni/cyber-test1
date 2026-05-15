import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Bug,
    CheckCircle2,
    Crosshair,
    Eye,
    Flame,
    Network,
    Radar,
    ScanSearch,
    ShieldCheck,
    Skull,
    Target,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: ScanSearch,
        title: "VA/PT Vulnerability Assessment and Penetration Testing",
        text: "Vulnerability Assessment and Penetration Testing are structured security testing services designed to identify, analyze, and validate weaknesses within systems, applications, networks, databases, cloud environments, web applications, and APIs. Cyber-Intel validates findings, risk-rates exposure, and translates technical results into clear remediation guidance, optional re-testing, and executive reporting."
    },
    {
        icon: ShieldCheck,
        title: "Red, Blue, Purple, White, Tiger, Green, Yellow, and Orange Teaming",
        text: "Team-based security exercises evaluate how effectively an organization can prevent, detect, and respond to real-world attacks. Red Teams simulate adversarial behavior, Blue Teams focus on monitoring and response, Purple Teams improve collaboration, and advanced teams extend testing into governance, decision-making, crisis management, and executive response."
    },
    {
        icon: Target,
        title: "Adversary Simulation, Cyber Kill Chain, and MITRE ATT&CK Services",
        text: "Adversary Simulation replicates real threat actor tactics, techniques, and procedures to test security controls and response capabilities. Cyber-Intel maps adversary behavior to MITRE ATT&CK and the Cyber Kill Chain, then validates detection, response, governance, and remediation opportunities."
    },
    {
        icon: Bug,
        title: "Zero-Day, Side-Channel, and Backdoor Assessments",
        text: "Zero-Day, Side-Channel, and Backdoor Assessments evaluate exposure to sophisticated and often unknown attack vectors. Cyber-Intel combines threat research, advanced testing techniques, behavioral analysis, and controlled execution to identify high-impact risks and provide actionable remediation strategies."
    }
];

const outcomes = [
    "Realistic intelligence-led testing against real-world attack scenarios",
    "Validation of preventive controls, detection mechanisms, and response processes",
    "Actionable insight into vulnerabilities, detection gaps, and response effectiveness",
    "Improved coordination between technical and leadership teams",
    "Controlled risk-aligned engagements mapped to MITRE ATT&CK and Cyber Kill Chain",
    "Measurable improvement in security readiness and cyber resilience"
];

const references = [
    ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
    ["NIST Penetration Testing Guidance", "https://csrc.nist.gov/publications/detail/sp/800-115/final"],
    ["MITRE Adversary Emulation Plans", "https://attack.mitre.org/resources/adversary-emulation-plans/"],
    ["MITRE ATT&CK Framework", "https://attack.mitre.org/"],
    ["CISA Threat-Informed Defense", "https://www.cisa.gov/threat-informed-defense"],
    ["NIST National Vulnerability Database", "https://nvd.nist.gov/"]
];

function AdversarySimulationTesting() {
    return (
        <>
            <Helmet>
                <title>Adversary Simulation & Testing — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Offensive, defensive, VA/PT, red team, blue team, purple team, adversary simulation, MITRE ATT&CK, Cyber Kill Chain, zero-day, side-channel, and backdoor assessment services."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Crosshair size={16} />
                                Offensive, Defensive and Adversary Simulation Services
                            </div>

                            <h1 className="ci-heading-xl">
                                Validate security against <span className="ci-gradient-text">real-world adversaries</span>
                            </h1>

                            <p className="ci-lead">
                                Offensive, Defensive and Adversary Simulation Services provide organizations with realistic, intelligence-led testing of cyber security capabilities against real-world attack scenarios.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Security Testing <ArrowRight size={18} />
                                </Link>
                                <a href="#adversary-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Radar size={17} /> Intelligence-Led</span>
                                <span><Target size={17} /> MITRE ATT&CK</span>
                                <span><Skull size={17} /> Adversary Emulation</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <Crosshair size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Testing Model</span>
                                    <strong>Offensive · Defensive · Collaborative</strong>
                                </div>
                                <div>
                                    <span>Frameworks</span>
                                    <strong>MITRE ATT&CK · Cyber Kill Chain</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Validated Cyber Readiness</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="adversary-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <Flame size={42} />
                                <h3>Move beyond theoretical risk assessments</h3>
                                <p>
                                    These services validate preventive controls, detection mechanisms, response processes, and governance structures under active and simulated adversarial conditions.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <Eye size={18} />
                                Detection Gaps
                            </div>

                            <div className="ci-floating-card card-b">
                                <Zap size={18} />
                                Attack Paths
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Practical execution for measurable security improvement</h2>
                                <p>
                                    By combining offensive testing, defensive operations, and collaborative adversary simulations, organizations gain actionable insight into vulnerabilities, detection gaps, and response effectiveness.
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
                            <span className="ci-mini-title">Service Areas</span>
                            <h2 className="ci-heading-lg">Offensive testing, teaming, emulation, and advanced assessment</h2>
                            <p>
                                Cyber-Intel delivers controlled, risk-aligned engagements designed to identify exploitable weaknesses, improve detection, and strengthen response maturity.
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
                                <span className="ci-mini-title">Engagement Methodology</span>
                                <h2 className="ci-heading-lg">Controlled execution with clear success metrics</h2>
                                <p>
                                    Engagements begin with objective definition and threat modelling, followed by controlled execution, observation, detection validation, and post-exercise analysis.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Scoping and risk alignment",
                                "Threat modelling and attack-path planning",
                                "Automated and manual validation",
                                "Detection and response observation",
                                "Executive reporting and remediation guidance",
                                "Optional re-testing for measurable improvement"
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
                            <h2 className="ci-heading-lg">Recognized references for threat-informed testing</h2>
                            <p>
                                Use these external references for awareness, planning, and client education.
                            </p>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {references.map(([title, href], index) => (
                                <motion.a key={title} href={href} target="_blank" rel="noreferrer" className="ci-card ci-hover-lift" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                                    <div className="ci-icon-box">
                                        <Network size={22} />
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
                                <span className="ci-mini-title">Validate Your Defenses</span>
                                <h2>Test security controls before real attackers do</h2>
                                <p>
                                    Engage Cyber-Intel for VA/PT, red teaming, purple teaming, adversary simulation, zero-day assessment, side-channel analysis, and backdoor detection.
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

export default AdversarySimulationTesting;