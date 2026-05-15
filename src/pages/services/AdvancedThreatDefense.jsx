import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Bug,
    CheckCircle2,
    DatabaseZap,
    FileCheck2,
    Flame,
    Network,
    Radar,
    SearchCheck,
    ShieldCheck,
    Skull,
    Target,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Bug,
        title: "Malware, APT, Rootkit, and Bootkit Analysis",
        text: "Malware, Advanced Persistent Threats, rootkits, and bootkits represent sophisticated threats designed to evade detection and maintain long-term unauthorized access. Cyber-Intel combines static and dynamic malware analysis, memory inspection, behavioral analysis, system integrity verification, threat intelligence correlation, and controlled investigative processes to uncover persistence mechanisms, command-and-control activity, and hidden attacker behavior."
    },
    {
        icon: Flame,
        title: "Ransomware Prevention, Response, and Universal Data Recovery",
        text: "Ransomware Prevention, Response, and Data Recovery services protect organizations across the ransomware lifecycle, from preparedness and hardening to containment, forensic analysis, eradication, secure restoration, and post-incident strengthening. Cyber-Intel supports backup validation, recovery planning, response playbooks, root-cause analysis, and executive reporting without encouraging ransom payment."
    },
    {
        icon: SearchCheck,
        title: "Remote Site Malware Detection and Remediation",
        text: "Remote Site Malware Detection and Remediation identifies, contains, and eliminates malicious software across distributed, branch, remote, and hybrid environments. Cyber-Intel uses remote scanning, behavioral analysis, threat validation, centralized monitoring, controlled remediation, post-remediation verification, and hardening recommendations to reduce compromise across geographically dispersed systems."
    },
    {
        icon: ShieldCheck,
        title: "EDR, MDR, and XDR Solutions and Audits",
        text: "EDR, MDR, and XDR services provide advanced threat detection, investigation, and response across endpoints, networks, identities, cloud workloads, and applications. Cyber-Intel supports capability assessment, architecture alignment, deployment, integration, detection engineering, threat hunting, response playbooks, performance audits, and executive reporting."
    },
    {
        icon: Network,
        title: "SIEM/SOAR Architecture, Integration, and Audits",
        text: "SIEM and SOAR services form the analytical and operational backbone of modern security operations. Cyber-Intel supports maturity assessment, architecture design, data source integration, correlation rules, automated playbooks, detection engineering, MITRE ATT&CK mapping, operational audits, and executive reporting."
    },
    {
        icon: Radar,
        title: "Cyber Threat Intelligence",
        text: "Cyber Threat Intelligence transforms raw threat data into actionable intelligence about adversaries, vulnerabilities, campaigns, motivations, capabilities, and techniques. Cyber-Intel defines intelligence requirements, collects and validates multi-source intelligence, delivers alerts and executive briefings, and integrates intelligence into SIEM, SOAR, EDR/XDR, incident response, and risk management workflows."
    }
];

const outcomes = [
    "Earlier threat visibility and reduced attacker dwell time",
    "Improved containment, recovery, and business continuity",
    "Threat-informed security operations aligned with real-world attack behavior",
    "EDR, MDR, XDR, SIEM, SOAR, CTI, and adversary simulation integration",
    "Detection engineering, threat hunting, and executive-ready reporting",
    "Resilient and adaptive defense against malware, ransomware, APTs, and stealthy campaigns"
];

const references = [
    ["CISA Malware and APT Threats", "https://www.cisa.gov/malware"],
    ["MITRE ATT&CK Advanced Threat Techniques", "https://attack.mitre.org/"],
    ["IBM X-Force Threat Intelligence", "https://www.ibm.com/security/xforce"],
    ["CISA Stop Ransomware", "https://www.cisa.gov/stopransomware"],
    ["NIST Incident Response Guide SP 800-61", "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"],
    ["ENISA Threat Landscape and Intelligence", "https://www.enisa.europa.eu/topics/threat-risk-management"]
];

function AdvancedThreatDefense() {
    return (
        <>
            <Helmet>
                <title>Advanced Threat Defense — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Malware, ransomware, APT, EDR, MDR, XDR, SIEM, SOAR, and cyber threat intelligence services by Cyber-Intel Online."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Skull size={16} />
                                Malware, Ransomware and Advanced Threat Defense
                            </div>

                            <h1 className="ci-heading-xl">
                                Defend against <span className="ci-gradient-text">advanced cyber threats</span>
                            </h1>

                            <p className="ci-lead">
                                Advanced Threat Defense Services protect organizations against sophisticated, high-impact cyber threats designed to evade traditional security controls and cause operational, financial, and reputational damage.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Threat Defense <ArrowRight size={18} />
                                </Link>
                                <a href="#advanced-threat-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Flame size={17} /> Ransomware Defense</span>
                                <span><Radar size={17} /> Threat Intelligence</span>
                                <span><ShieldCheck size={17} /> EDR · MDR · XDR</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <Skull size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Defense Model</span>
                                    <strong>Prevent · Detect · Respond</strong>
                                </div>
                                <div>
                                    <span>Operations</span>
                                    <strong>EDR · MDR · XDR · SIEM · SOAR</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Threat-Informed Resilience</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="advanced-threat-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <DatabaseZap size={42} />
                                <h3>Intelligence-driven detection and response</h3>
                                <p>
                                    Cyber-Intel combines continuous monitoring, threat intelligence, advanced analytics, and response playbooks to reduce dwell time and contain high-impact threats faster.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <Zap size={18} />
                                Rapid Containment
                            </div>

                            <div className="ci-floating-card card-b">
                                <Target size={18} />
                                Attack Behavior
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Adaptive defense against malware, ransomware, APTs, and stealthy campaigns</h2>
                                <p>
                                    By combining intelligence-driven defense, continuous monitoring, and advanced detection and response capabilities, organizations gain earlier threat visibility, reduced attacker dwell time, and improved incident containment.
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
                            <span className="ci-mini-title">Threat Defense Service Areas</span>
                            <h2 className="ci-heading-lg">Detection, response, recovery, intelligence, and security operations</h2>
                            <p>
                                Cyber-Intel delivers advanced threat defense through integrated capabilities that support proactive risk reduction, rapid response, and sustained security operations maturity.
                            </p>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {services.map((item, index) => (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.06 }}>
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
                                <span className="ci-mini-title">Defense Methodology</span>
                                <h2 className="ci-heading-lg">From threat visibility to executive-ready remediation</h2>
                                <p>
                                    Engagements begin with readiness assessment and threat scoping, followed by monitoring alignment, detection engineering, response planning, containment support, recovery validation, and continuous improvement.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Incident scoping and artifact collection",
                                "Static, dynamic, memory, and behavioral analysis",
                                "Containment, eradication, and recovery validation",
                                "EDR, MDR, XDR, SIEM, and SOAR tuning",
                                "Threat intelligence correlation and detection engineering",
                                "Executive reporting and strategic defense recommendations"
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
                            <span className="ci-mini-title">Threat Defense References</span>
                            <h2 className="ci-heading-lg">Useful references for malware, ransomware, response, and intelligence</h2>
                            <p>
                                These references can support awareness, executive education, security operations planning, and incident readiness.
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
                                <span className="ci-mini-title">Advanced Threat Defense</span>
                                <h2>Strengthen detection, response, recovery, and threat intelligence maturity</h2>
                                <p>
                                    Engage Cyber-Intel for malware analysis, ransomware response, remote remediation, EDR/MDR/XDR audits, SIEM/SOAR architecture, and cyber threat intelligence.
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

export default AdvancedThreatDefense;