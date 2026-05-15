import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Cloud,
    Code2,
    DatabaseZap,
    FileCheck2,
    LockKeyhole,
    Mail,
    Network,
    SearchCheck,
    ServerCog,
    ShieldCheck,
    Target,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Code2,
        title: "Web, API, Database, and Application Security",
        text: "Web, API, Database, and Application Security services protect software systems and the data they process throughout the application lifecycle. Cyber-Intel identifies injection flaws, broken authentication, insecure APIs, misconfigurations, logic errors, and unauthorized data access through automated scanning, manual testing, architecture review, secure design assessment, exploitation validation, risk rating, remediation guidance, re-testing, and executive reporting."
    },
    {
        icon: ShieldCheck,
        title: "Firewall, WAF, Email, and Secure Web Gateway Testing",
        text: "Network, Firewall, WAF, and Email Security Testing evaluates perimeter and internal security controls against modern threats. Cyber-Intel validates segmentation, firewall rules, intrusion prevention, web application firewalls, email gateways, secure web gateways, phishing defense, malware delivery controls, lateral movement resistance, detection capability, and remediation quality."
    },
    {
        icon: ServerCog,
        title: "Data Centers, Virtual Data Centers, and DR Sites",
        text: "Data Center, Virtual Data Center, and Disaster Recovery Site Services focus on secure planning, implementation, testing, and ongoing compliance for critical computing environments. Cyber-Intel supports requirements analysis, risk assessment, architecture design, configuration hardening, compliance validation, fail-over testing, RTO/RPO validation, and continuous improvement planning."
    },
    {
        icon: DatabaseZap,
        title: "Cluster, Beowulf, Load and Stress Testing Services",
        text: "Cluster, Beowulf, Load, and Stress Testing Services evaluate performance, resilience, scalability, and security of high-availability and high-performance computing environments. Cyber-Intel reviews architecture, characterizes workloads, performs controlled load generation, stress testing, fail-over validation, performance analysis, benchmarking, and optimization recommendations."
    }
];

const outcomes = [
    "Secure applications, APIs, databases, networks, cloud platforms, and enterprise infrastructure",
    "Proactive risk identification and secure architecture improvement",
    "Reduced likelihood of data breaches, service disruption, and regulatory non-compliance",
    "Structured assessments, testing, and engineering aligned with industry best practices",
    "Clear remediation guidance for development, operations, and leadership teams",
    "Scalable, resilient, and secure technology ecosystems for long-term business growth"
];

const references = [
    ["OWASP Application Security Risks", "https://owasp.org/www-project-top-ten/"],
    ["NIST Secure Software Development Framework", "https://csrc.nist.gov/projects/secure-software-development-framework-ssdf"],
    ["MITRE CWE Common Weakness Enumeration", "https://cwe.mitre.org/"],
    ["NIST Firewall and Boundary Protection", "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final"],
    ["OWASP Web Application Firewall Guide", "https://owasp.org/www-project-web-application-firewall/"],
    ["NIST Contingency Planning and DR", "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"]
];

function ApplicationInfrastructureSecurity() {
    return (
        <>
            <Helmet>
                <title>Application & Infrastructure Security — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Application, API, database, firewall, WAF, email, secure web gateway, data center, DR, cluster, load, and stress testing services by Cyber-Intel Online."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Code2 size={16} />
                                Application, Infrastructure, and Platform Security
                            </div>

                            <h1 className="ci-heading-xl">
                                Secure the full <span className="ci-gradient-text">digital technology stack</span>
                            </h1>

                            <p className="ci-lead">
                                Application, Infrastructure, and Platform Security Services focus on securing the systems, networks, and platforms that underpin modern digital business operations.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Security Assessment <ArrowRight size={18} />
                                </Link>
                                <a href="#application-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Code2 size={17} /> Web · API · Database</span>
                                <span><Network size={17} /> Firewall · WAF · Email</span>
                                <span><Cloud size={17} /> Cloud · DR · Platform</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <Code2 size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Stack Coverage</span>
                                    <strong>Application · Network · Cloud</strong>
                                </div>
                                <div>
                                    <span>Testing</span>
                                    <strong>Architecture · Config · Resilience</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Secure Digital Operations</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="application-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <LockKeyhole size={42} />
                                <h3>Secure design, testing, and platform resilience</h3>
                                <p>
                                    Cyber-Intel integrates security into application development, infrastructure design, and platform operations to reduce exposure and improve operational reliability.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <SearchCheck size={18} />
                                Risk Validation
                            </div>

                            <div className="ci-floating-card card-b">
                                <Zap size={18} />
                                Resilience Testing
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Application, infrastructure, and platform security built for modern business</h2>
                                <p>
                                    This category addresses security across applications, APIs, databases, networks, cloud platforms, and enterprise infrastructure, ensuring systems are designed, configured, and operated securely throughout their lifecycle.
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
                            <span className="ci-mini-title">Security Service Areas</span>
                            <h2 className="ci-heading-lg">Application testing, boundary validation, DR readiness, and platform resilience</h2>
                            <p>
                                Cyber-Intel delivers structured assessments, testing, and engineering that support secure digital transformation, cloud adoption, high availability, and regulatory confidence.
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
                                <span className="ci-mini-title">Assessment Methodology</span>
                                <h2 className="ci-heading-lg">Risk-based testing, secure engineering, and executive-ready reporting</h2>
                                <p>
                                    Engagements begin with scoping and asset identification, followed by architecture review, vulnerability discovery, exploitation validation, configuration analysis, resilience testing, and prioritized remediation.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Scoping and asset identification",
                                "Automated scanning and manual testing",
                                "Architecture review and secure design assessment",
                                "Configuration analysis and simulated attack validation",
                                "Fail-over, RTO/RPO, load, and stress validation",
                                "Remediation guidance, re-testing, and executive reporting"
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
                            <span className="ci-mini-title">Security References</span>
                            <h2 className="ci-heading-lg">Useful references for application, network, and resilience security</h2>
                            <p>
                                These references can support client education, development planning, infrastructure review, and resilience readiness.
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
                                <span className="ci-mini-title">Application & Infrastructure Security</span>
                                <h2>Secure your applications, platforms, infrastructure, and recovery environments</h2>
                                <p>
                                    Engage Cyber-Intel for web, API, database, firewall, WAF, email, secure web gateway, data center, DR, cluster, load, and stress testing services.
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

export default ApplicationInfrastructureSecurity;