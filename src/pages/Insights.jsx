import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    FileText,
    Globe2,
    Network,
    Radar,
    ShieldCheck,
    Target,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { insightParagraphs, insightTitle } from "../data/sectorContent";

const insightPoints = [
    "Cybersecurity has become a business and national security priority",
    "Modern threats target IT, OT, cloud, remote work, finance, healthcare, and government systems",
    "Demand is increasing for VA/PT, threat intelligence, adversary simulation, forensics, and incident response",
    "Governance, risk management, and compliance are critical across public and private sectors",
    "Organizations need proactive, intelligence-led, and continuously adaptive security posture"
];

function Insights() {
    return (
        <>
            <Helmet>
                <title>Insights — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Cybersecurity industry insights and strategic business intelligence from Cyber-Intel Online."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-insights-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <FileText size={16} />
                                Insights
                            </div>

                            <h1 className="ci-heading-xl">
                                Cybersecurity industry insights and <span className="ci-gradient-text">strategic intelligence</span>
                            </h1>

                            <p className="ci-lead">
                                Strategic context for organizations operating in complex government, defense, intelligence, enterprise, and private digital environments.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="#insights-content" className="ci-btn ci-btn-primary ci-shine">
                                    Read Insights <ArrowRight size={18} />
                                </a>
                                <Link to="/industries" className="ci-btn ci-btn-outline">
                                    View Industries
                                </Link>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Radar size={17} /> Threat Landscape</span>
                                <span><ShieldCheck size={17} /> Resilience</span>
                                <span><Globe2 size={17} /> Strategic Context</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-industries-command ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <BarChart3 size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Focus</span>
                                    <strong>Risk · Resilience · Compliance</strong>
                                </div>
                                <div>
                                    <span>Signals</span>
                                    <strong>Threats · Cloud · AI · IoT</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Strategic Security Posture</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {[
                            [Target, "Business Priority", "Cybersecurity is now core to continuity"],
                            [Radar, "Threat Intelligence", "Modern attacks are intelligence-driven"],
                            [Network, "Expanded Attack Surface", "Cloud, OT, IoT, and remote work"],
                            [ShieldCheck, "Governance Demand", "GRC and compliance continue to rise"]
                        ].map(([Icon, title, text], index) => (
                            <motion.div
                                className="ci-trust-item"
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                            >
                                <Icon size={24} />
                                <div>
                                    <strong>{title}</strong>
                                    <span>{text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="insights-content">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div
                            className="ci-security-visual"
                            initial={{ opacity: 0, x: -34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-visual-card large ci-scan-card">
                                <Zap size={42} />
                                <h3>From technical risk to strategic resilience</h3>
                                <p>
                                    Organizations require integrated cybersecurity ecosystems capable of identifying emerging threats, minimizing disruption, protecting sensitive information, and supporting long-term digital sustainability.
                                </p>
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">INSIGHTS</span>
                                <h2 className="ci-heading-lg">{insightTitle}</h2>
                                <p>
                                    In today’s digital environment, cybersecurity requires proactive cyber resilience, regulatory compliance, secure operational continuity, and intelligence-led strategy.
                                </p>
                            </div>

                            <div className="ci-check-list ci-mt-32">
                                {insightPoints.map((item) => (
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
                        <motion.article
                            className="ci-insights-article"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.18 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-insights-article-head">
                                <span className="ci-icon-box">
                                    <FileText size={24} />
                                </span>
                                <div>
                                    <span className="ci-tag">Strategic Business Intelligence</span>
                                    <h2>{insightTitle}</h2>
                                </div>
                            </div>

                            <div className="ci-insights-article-body">
                                {insightParagraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.article>
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
                                <span className="ci-mini-title">Strategic Cyber Guidance</span>
                                <h2>Move from reactive security to intelligence-led resilience</h2>
                                <p>
                                    Cyber-Intel Online helps organizations strengthen cyber resilience, protect critical digital assets, enhance operational continuity, and maintain stakeholder confidence.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <Link to="/contact" className="ci-btn ci-btn-light">
                                    Contact Team <ArrowRight size={18} />
                                </Link>
                                <Link to="/services" className="ci-btn ci-btn-outline">
                                    View Services
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Insights;