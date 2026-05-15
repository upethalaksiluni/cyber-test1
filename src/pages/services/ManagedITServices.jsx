import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Cloud,
    DatabaseZap,
    Headphones,
    LifeBuoy,
    MonitorCog,
    Network,
    ServerCog,
    ShieldCheck,
    UsersRound
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: ServerCog,
        title: "Fully Managed IT Services",
        text: "Fully Managed IT Services refer to the comprehensive outsourcing of an organization’s day-to-day IT operations to a dedicated service provider. This model covers infrastructure management, cloud and on-premise systems, endpoint administration, network operations, security monitoring, patch management, backups, and disaster recovery. The objective is to ensure stable, secure, and continuously available IT environments that support business operations without internal operational burden."
    },
    {
        icon: UsersRound,
        title: "Co-Managed IT Services",
        text: "Co-Managed IT Services represent a collaborative operating model in which an organization’s internal IT team works alongside Cyber-Intel’s specialists to jointly manage technology operations and security. Rather than fully outsourcing IT, this approach combines internal business knowledge with external technical expertise, tools, and monitoring capabilities."
    },
    {
        icon: Headphones,
        title: "IT Helpdesk, Remote, and On-Site Support Services",
        text: "IT Helpdesk, Remote, and On-Site Support Services provide organizations with a centralized point of contact for resolving day-to-day technology issues while maintaining operational stability and security. These services cover user assistance, incident management, troubleshooting, access provisioning, endpoint support, system configuration, and routine maintenance."
    }
];

const outcomes = [
    "Reliable, secure, and scalable technology operations",
    "Reduced operational risk and complexity",
    "Improved system performance and minimized downtime",
    "Flexible fully managed and co-managed delivery models",
    "Continuous monitoring, reporting, and improvement",
    "Stable operations, predictable costs, and business continuity"
];

function ManagedITServices() {
    return (
        <>
            <Helmet>
                <title>Managed IT Services — Cyber-Intel Online</title>
                <meta name="description" content="Managed, co-managed, helpdesk, remote, and on-site operational IT services by Cyber-Intel Online." />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Network size={16} />
                                Managed, Co-Managed, and Operational IT Services
                            </div>

                            <h1 className="ci-heading-xl">
                                Secure, scalable, and <span className="ci-gradient-text">reliable IT operations</span>
                            </h1>

                            <p className="ci-lead">
                                Managed, Co-Managed and Operational IT Services provide organizations with reliable, secure, and scalable technology operations that support day-to-day business functions while reducing operational risk and complexity.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request IT Support <ArrowRight size={18} />
                                </Link>
                                <a href="#managed-it-overview" className="ci-btn ci-btn-outline">
                                    View Services
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><ShieldCheck size={17} /> Secure Operations</span>
                                <span><Cloud size={17} /> Cloud & On-Prem</span>
                                <span><LifeBuoy size={17} /> Helpdesk Support</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <DatabaseZap size={74} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Delivery Models</span>
                                    <strong>Managed · Co-Managed</strong>
                                </div>
                                <div>
                                    <span>Coverage</span>
                                    <strong>Cloud · Endpoint · Network</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Stable Business Continuity</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="managed-it-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <MonitorCog size={42} />
                                <h3>Operational IT built for resilience</h3>
                                <p>
                                    Services are designed to integrate operational efficiency with embedded cyber security and governance controls.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <Cloud size={18} />
                                Cloud Ready
                            </div>

                            <div className="ci-floating-card card-b">
                                <ShieldCheck size={18} />
                                Secure by Design
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Reliable operations with embedded cyber security controls</h2>
                                <p>
                                    This category focuses on the proactive management of IT infrastructure, cloud environments, endpoints, and user support, ensuring systems remain available, resilient, and aligned with organizational needs.
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
                            <span className="ci-mini-title">Managed IT Service Areas</span>
                            <h2 className="ci-heading-lg">Flexible operational models for modern organizations</h2>
                            <p>
                                By combining fully managed and co-managed delivery models, organizations gain flexibility to retain control where needed while augmenting internal capabilities with specialized expertise and enterprise-grade tooling.
                            </p>
                        </div>

                        <div className="ci-services-grid ci-mt-32">
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
                                <span className="ci-mini-title">Business Benefits</span>
                                <h2 className="ci-heading-lg">Predictable costs, reduced downtime, and stronger security posture</h2>
                                <p>
                                    Organizations gain access to specialized expertise and enterprise-grade tools without the overhead of building and managing large internal IT teams. Potential concerns such as reduced direct control are addressed through clearly defined service levels, governance frameworks, and transparent reporting.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Environment assessment and operational baseline establishment",
                                "Transition planning and secure onboarding",
                                "Service-level agreements and security policies",
                                "Performance optimization and risk management",
                                "Regular reporting and continuous improvement"
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
                        <motion.div className="ci-cta-strip ci-animated-gradient" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div>
                                <span className="ci-mini-title">Operational Continuity</span>
                                <h2>Strengthen daily IT operations with Cyber-Intel support</h2>
                                <p>
                                    Engage Cyber-Intel for managed IT, co-managed IT, helpdesk, remote support, on-site support, monitoring, and operational resilience.
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

export default ManagedITServices;