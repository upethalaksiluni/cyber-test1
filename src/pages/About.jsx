import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Cloud,
    Cpu,
    FileCheck2,
    Globe2,
    Handshake,
    Layers3,
    LineChart,
    LockKeyhole,
    Network,
    Radar,
    Scale,
    ShieldCheck,
    Target,
    TrendingUp,
    UsersRound,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBadge from "../components/common/AnimatedBadge";
import SectionHeader from "../components/common/SectionHeader";

const differentiators = [
    "Intelligence-led security model beyond traditional reactive approaches",
    "Full-spectrum service portfolio from strategy to operations to investigation",
    "Alignment with global frameworks including NIST, ISO, MITRE, and SOC 2",
    "Virtualized, scalable, and globally deployable service model",
    "Strong positioning in emerging and underserved markets"
];

const marketDrivers = [
    "Increasing frequency and sophistication of cyber attacks",
    "Regulatory and compliance pressures",
    "Digital transformation across industries",
    "Demand for managed and intelligence-driven security services"
];

const revenueStreams = [
    "Executive advisory & governance services",
    "Managed & co-managed IT and security services",
    "Compliance and regulatory assurance",
    "Offensive & defensive security testing",
    "Digital forensics and investigation services",
    "Advanced threat intelligence and detection services"
];

const innovationItems = [
    "Global service delivery with minimal physical dependency",
    "Rapid scalability and operational flexibility",
    "Integration of advanced analytics, automation, and intelligence workflows",
    "Secure, encrypted, and compliant data handling"
];

const governanceItems = [
    "ISO/IEC 27001 Information Security standards",
    "NIST Cybersecurity Framework",
    "SOC 2 Trust Services Criteria",
    "Global privacy and data protection regulations"
];

const whyInvest = [
    "Strong alignment with global cyber security demand",
    "Scalable and future-ready business model",
    "High-value, specialized service offerings",
    "Recurring revenue potential and long-term contracts",
    "Strategic positioning in high-growth digital economies",
    "Leadership focused on innovation, security, and resilience"
];

const growthStrategy = [
    "Expanding into global and regional markets across APAC, SAARC, and global regions",
    "Strengthening enterprise and government partnerships",
    "Enhancing intelligence-driven service capabilities",
    "Investing in automation, analytics, and advanced threat research",
    "Building long-term client relationships and recurring engagements"
];

const investorEngagement = [
    "Strategic investors",
    "Institutional investors",
    "Technology and security-focused venture partners",
    "Government and public sector collaboration initiatives"
];

function About() {
    return (
        <>
            <Helmet>
                <title>About — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Cyber-Intel Online is a next-generation cyber security and cyber intelligence firm delivering enterprise-grade, intelligence-driven services across global markets."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-about-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={ShieldCheck} dark>
                                About Cyber-Intel Online
                            </AnimatedBadge>

                            <h1 className="ci-heading-xl">
                                Building the Future of <span className="ci-gradient-text">Cyber Security & Intelligence</span>
                            </h1>

                            <p className="ci-lead">
                                Cyber-Intel Online is a next-generation cyber security and cyber intelligence firm delivering enterprise-grade, intelligence-driven services across global markets. We operate at the intersection of security, intelligence, compliance, and advanced threat defense, addressing one of the most critical challenges of the digital era.
                            </p>

                            <p className="ci-lead ci-mt-24">
                                As cyber threats continue to evolve in scale and sophistication, Cyber-Intel is strategically positioned to deliver high-value, mission-critical services to enterprises, governments, and high-risk organizations worldwide.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/services" className="ci-btn ci-btn-primary ci-shine">
                                    Explore Services <ArrowRight size={18} />
                                </Link>
                                <a href="mailto:investor.relations@cyberintel.online" className="ci-btn ci-btn-outline">
                                    Investor Relations
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-about-command ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-about-orbit">
                                <div className="ci-radar-sweep" />
                                <LockKeyhole size={70} />
                            </div>

                            <div className="ci-about-stack">
                                <div>
                                    <Radar size={22} />
                                    <span>Intelligence</span>
                                </div>
                                <div>
                                    <Scale size={22} />
                                    <span>Compliance</span>
                                </div>
                                <div>
                                    <Zap size={22} />
                                    <span>Threat Defense</span>
                                </div>
                                <div>
                                    <Globe2 size={22} />
                                    <span>Global Delivery</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {[
                            [Radar, "Intelligence-Led", "Beyond reactive security"],
                            [Layers3, "Full-Spectrum", "Strategy to operations"],
                            [Scale, "Governance Aligned", "NIST, ISO, MITRE, SOC 2"],
                            [Cloud, "Globally Scalable", "Virtualized service delivery"]
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

                <section className="ci-section ci-section-soft">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div
                            className="ci-security-visual"
                            initial={{ opacity: 0, x: -34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-visual-card large">
                                <Target size={42} />
                                <h3>Our Strategic Advantage</h3>
                                <p>
                                    Intelligence-driven methodologies, advanced technical expertise, and governance alignment.
                                </p>
                            </div>
                            <div className="ci-floating-card card-a">
                                <Network size={20} />
                                Global Model
                            </div>
                            <div className="ci-floating-card card-b">
                                <FileCheck2 size={20} />
                                Framework Aligned
                            </div>
                        </motion.div>

                        <div>
                            <SectionHeader
                                eyebrow="Key Differentiators"
                                title="A unique combination of intelligence, engineering, and governance"
                                text="Cyber-Intel differentiates itself through a unique combination of intelligence-driven methodologies, advanced technical expertise, and governance alignment."
                            />

                            <div className="ci-check-list ci-mt-24">
                                {differentiators.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                    >
                                        <CheckCircle2 size={20} />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <SectionHeader
                                eyebrow="Market Position & Growth Potential"
                                title="Positioned for modern enterprise risk environments"
                                text="The global cyber security market is experiencing exponential growth. Cyber-Intel is positioned to capitalize on these trends by offering integrated, high-value services tailored for modern enterprise risk environments."
                            />
                        </div>

                        <motion.div
                            className="ci-market-panel"
                            initial={{ opacity: 0, x: 34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            {marketDrivers.map((item) => (
                                <div key={item}>
                                    <TrendingUp size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Business Model & Revenue Streams"
                            title="A multi-layered, resilient business model"
                            text="Cyber-Intel operates a multi-layered, resilient business model designed for long-term growth and sustainability. This diversified model ensures revenue stability, scalability, and cross-selling opportunities across service lines."
                        />

                        <div className="ci-revenue-grid ci-mt-32">
                            {revenueStreams.map((item, index) => (
                                <motion.div
                                    className="ci-revenue-item ci-revenue-item-dark"
                                    key={item}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <strong>{item}</strong>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <SectionHeader
                                eyebrow="Technology & Innovation"
                                title="Cloud-native, virtualized, and ready for global delivery"
                                text="Cyber-Intel is built on a cloud-native, highly virtualized architecture. Our innovation approach focuses on continuous adaptation to evolving threats and emerging technologies."
                            />

                            <div className="ci-check-list ci-mt-24">
                                {innovationItems.map((item) => (
                                    <div key={item}>
                                        <CheckCircle2 size={20} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            className="ci-framework-panel"
                            initial={{ opacity: 0, x: 34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Cpu size={38} />
                            <h3>Advanced analytics, automation, and intelligence workflows</h3>
                            <p>
                                Secure, encrypted, and compliant data handling supports global service delivery and operational flexibility.
                            </p>
                            <Link to="/frameworks" className="ci-btn ci-btn-primary">
                                View Frameworks <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Governance, Risk & Compliance"
                            title="Transparency, accountability, and risk management at every level"
                            text="Cyber-Intel is committed to strong governance and regulatory alignment, ensuring investor confidence and operational integrity."
                        />

                        <div className="ci-framework-tags justify-content-center">
                            {governanceItems.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container ci-grid-2">
                        <div>
                            <SectionHeader
                                eyebrow="Why Invest in Cyber-Intel"
                                title="A compelling investment case built on demand, scale, and specialization"
                                text="Cyber-Intel offers a compelling investment case based on global cyber security demand, a scalable business model, high-value service offerings, recurring revenue potential, and leadership focused on innovation and resilience."
                            />
                        </div>

                        <div className="ci-check-list ci-check-list-dark">
                            {whyInvest.map((item) => (
                                <div key={item}>
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Growth Strategy"
                            title="Expanding markets, partnerships, capabilities, and recurring relationships"
                            text="Our growth strategy focuses on regional and global expansion, strategic partnerships, service capability enhancement, advanced threat research, and long-term client relationships."
                        />

                        <div className="ci-growth-roadmap ci-mt-32">
                            {growthStrategy.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                >
                                    <span>{index + 1}</span>
                                    <p>{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <SectionHeader
                                eyebrow="Investor Engagement"
                                title="Strategic, institutional, technology, and public-sector collaboration"
                                text="Cyber-Intel welcomes engagement with strategic investors, institutional investors, technology and security-focused venture partners, and government and public sector collaboration initiatives."
                            />

                            <div className="ci-framework-tags">
                                {investorEngagement.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            className="ci-contact-panel"
                            initial={{ opacity: 0, x: 34 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                        >
                            <UsersRound size={42} />
                            <h3>Contact Investor Relations</h3>
                            <p>Cyber-Intel Online – Investor Relations</p>
                            <a href="mailto:investor.relations@cyberintel.online" className="ci-btn ci-btn-primary">
                                investor.relations@cyberintel.online
                            </a>
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
                                <span className="ci-mini-title">Long-Term Value Creation</span>
                                <h2>Transparent communication, strategic alignment, and resilient growth</h2>
                                <p>
                                    We are committed to maintaining transparent communication, strategic alignment, and long-term value creation for our investors.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <a href="mailto:investor.relations@cyberintel.online" className="ci-btn ci-btn-light">
                                    Contact Investor Relations
                                </a>
                                <Link to="/contact" className="ci-btn ci-btn-outline">
                                    Contact Page
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;