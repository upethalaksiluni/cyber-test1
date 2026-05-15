import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeDollarSign,
    BarChart3,
    Building2,
    CheckCircle2,
    Cloud,
    Cpu,
    DatabaseZap,
    FileCheck2,
    Globe2,
    Handshake,
    Landmark,
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
import { siteConfig } from "../config/siteConfig";

const investorHighlights = [
    "A multi-billion-dollar global cyber security market",
    "A diversified, service-driven revenue model",
    "Recurring revenue opportunities through managed and advisory services",
    "High-margin specialized services including intelligence, forensics, and advanced threat defense",
    "A future-ready, cloud-based operational architecture"
];

const differentiators = [
    {
        icon: Radar,
        title: "Intelligence-led security model",
        text: "Beyond traditional reactive approaches."
    },
    {
        icon: Network,
        title: "Full-spectrum service portfolio",
        text: "Strategy, operations, investigation, and defense."
    },
    {
        icon: FileCheck2,
        title: "Global framework alignment",
        text: "NIST, ISO, MITRE, and SOC 2 aligned."
    },
    {
        icon: Cloud,
        title: "Virtualized service model",
        text: "Scalable and globally deployable."
    },
    {
        icon: Globe2,
        title: "Emerging market positioning",
        text: "Strong fit for underserved digital economies."
    }
];

const revenueStreams = [
    "Executive advisory & governance services",
    "Managed & co-managed IT and security services",
    "Compliance and regulatory assurance",
    "Offensive & defensive security testing",
    "Digital forensics and investigation services",
    "Advanced threat intelligence and detection services"
];

const growthStrategy = [
    "Expanding into APAC, SAARC, and global markets",
    "Strengthening enterprise and government partnerships",
    "Enhancing intelligence-driven service capabilities",
    "Investing in automation, analytics, and advanced threat research",
    "Building long-term client relationships and recurring engagements"
];

function Home() {
    return (
        <>
            <Helmet>
                <title>Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Cyber-Intel Online Investor Relations. Building the future of cyber security and intelligence."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-home-hero ci-investor-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={BadgeDollarSign} dark>
                                Investor Relations — Cyber-Intel Online
                            </AnimatedBadge>

                            <div className="ci-home-title-brand">
                                <img src="/assets/images/logo-1.png" alt="Cyber-Intel Online" />
                                <div>
                                    <span>Cyber-Intel Online</span>
                                    <small>Investor Relations</small>
                                </div>
                            </div>

                            <h1 className="ci-heading-xl">
                                Building the Future of <span className="ci-gradient-text">Cyber Security & Intelligence</span>
                            </h1>

                            <p className="ci-lead">
                                Cyber-Intel Online is a next-generation cyber security and cyber intelligence firm delivering enterprise-grade, intelligence-driven services across global markets. We operate at the intersection of security, intelligence, compliance, and advanced threat defense.
                            </p>

                            <div className="ci-hero-actions">
                                <a href="mailto:investor.relations@cyberintel.online" className="ci-btn ci-btn-primary ci-shine">
                                    Contact Investor Relations <ArrowRight size={18} />
                                </a>
                                <Link to="/services" className="ci-btn ci-btn-outline">
                                    View Service Model
                                </Link>
                            </div>

                            <div className="ci-hero-badges">
                                <span><TrendingUp size={17} /> High-Growth Market</span>
                                <span><ShieldCheck size={17} /> Mission-Critical Services</span>
                                <span><Globe2 size={17} /> Global Scalability</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-investor-panel ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-investor-ring">
                                <div className="ci-radar-sweep" />
                                <img src="/assets/images/logo-1.png" alt="Cyber-Intel Online" className="ci-investor-ring-logo" />
                            </div>

                            <div className="ci-investor-metrics">
                                <div>
                                    <strong>Global</strong>
                                    <span>Market Reach</span>
                                </div>
                                <div>
                                    <strong>Recurring</strong>
                                    <span>Revenue Potential</span>
                                </div>
                                <div>
                                    <strong>Cloud</strong>
                                    <span>Native Architecture</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {[
                            [BarChart3, "Scalable Model", "Designed for regional and global growth"],
                            [DatabaseZap, "High-Value Services", "Intelligence, forensics, and threat defense"],
                            [Scale, "Governance Alignment", "ISO, NIST, MITRE, SOC 2"],
                            [Handshake, "Investor Engagement", "Strategic and institutional collaboration"]
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
                                <h3>Investment Opportunity Overview</h3>
                                <p>
                                    A high-growth, high-impact opportunity in a rapidly expanding global cyber security market.
                                </p>
                            </div>
                            <div className="ci-floating-card card-a">
                                <TrendingUp size={20} />
                                Growth Market
                            </div>
                            <div className="ci-floating-card card-b">
                                <Cloud size={20} />
                                Cloud-Native Scale
                            </div>
                        </motion.div>

                        <div>
                            <SectionHeader
                                eyebrow="Investment Opportunity"
                                title="A scalable cyber security business designed for long-term value"
                                text="Cyber-Intel represents a high-growth, high-impact opportunity in a rapidly expanding global cyber security market. The business model is designed to scale across regions, industries, and digital ecosystems while maintaining strong governance and operational excellence."
                            />

                            <div className="ci-check-list ci-mt-24">
                                {investorHighlights.map((item, index) => (
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
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Strategic Advantage"
                            title="Intelligence-driven methodologies, advanced expertise, and governance alignment"
                            text="Cyber-Intel differentiates itself through a unique combination of intelligence-driven methodologies, advanced technical expertise, and governance alignment."
                        />

                        <div className="ci-grid-3 ci-mt-32">
                            {differentiators.map((item, index) => (
                                <motion.div
                                    className="ci-card ci-investor-card"
                                    key={item.title}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.55, delay: index * 0.06 }}
                                >
                                    <span className="ci-icon-box"><item.icon size={24} /></span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <SectionHeader
                                eyebrow="Market Position"
                                title="Positioned to capitalize on exponential cyber security demand"
                                text="The global cyber security market is experiencing exponential growth driven by increasingly sophisticated attacks, regulatory pressure, digital transformation, and demand for managed intelligence-driven security services."
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
                                "Increasing frequency and sophistication of cyber attacks",
                                "Regulatory and compliance pressures",
                                "Digital transformation across industries",
                                "Demand for managed and intelligence-driven security services"
                            ].map((item) => (
                                <div key={item}>
                                    <Zap size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container">
                        <div className="ci-section-row">
                            <SectionHeader
                                eyebrow="Business Model"
                                title="Multi-layered revenue streams designed for resilience"
                                text="Cyber-Intel operates a diversified model that supports stability, scalability, recurring revenue, and cross-selling opportunities across service lines."
                            />
                            <Link to="/services" className="ci-btn ci-btn-light">
                                Services Hub <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="ci-revenue-grid ci-mt-32">
                            {revenueStreams.map((item, index) => (
                                <motion.div
                                    className="ci-revenue-item"
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

                <section className="ci-section">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <div>
                            <SectionHeader
                                eyebrow="Technology & Innovation"
                                title="Cloud-native, virtualized, and globally deployable"
                                text="Cyber-Intel is built on a cloud-native, highly virtualized architecture that enables global service delivery with minimal physical dependency, rapid scalability, automation, analytics, intelligence workflows, and secure compliant data handling."
                            />

                            <div className="ci-framework-tags">
                                <span>Cloud Native</span>
                                <span>Automation</span>
                                <span>Analytics</span>
                                <span>Encrypted Data Handling</span>
                                <span>Threat Research</span>
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
                            <h3>Continuous adaptation to evolving threats</h3>
                            <p>
                                The innovation approach focuses on adapting to new cyber risks, emerging technologies, and intelligence-led security workflows.
                            </p>
                            <Link to="/frameworks" className="ci-btn ci-btn-primary">
                                Explore Governance <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Governance, Risk & Compliance"
                            title="Built for transparency, accountability, and investor confidence"
                            text="Cyber-Intel is committed to strong governance and regulatory alignment, ensuring operational integrity and risk management at all levels."
                        />

                        <div className="ci-framework-tags ci-framework-tags-dark">
                            <span>ISO/IEC 27001</span>
                            <span>NIST Cybersecurity Framework</span>
                            <span>SOC 2 Trust Services Criteria</span>
                            <span>Global Privacy Regulations</span>
                            <span>Data Protection Alignment</span>
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container ci-grid-2">
                        <div>
                            <SectionHeader
                                eyebrow="Why Invest"
                                title="A compelling case for scalable cyber security value creation"
                                text="Cyber-Intel offers strong alignment with global cyber security demand, specialized high-value services, recurring revenue potential, and strategic positioning in high-growth digital economies."
                            />
                        </div>

                        <div className="ci-check-list">
                            {[
                                "Strong alignment with global cyber security demand",
                                "Scalable and future-ready business model",
                                "High-value specialized service offerings",
                                "Recurring revenue potential and long-term contracts",
                                "Strategic positioning in high-growth digital economies",
                                "Leadership focused on innovation, security, and resilience"
                            ].map((item) => (
                                <div key={item}>
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Growth Strategy"
                            title="Expanding capabilities, partnerships, markets, and recurring engagements"
                            text="The growth strategy focuses on international market expansion, enterprise and government partnerships, intelligence-driven service capability, and advanced threat research."
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
                                <span className="ci-mini-title">Investor Engagement</span>
                                <h2>Cyber-Intel welcomes strategic, institutional, and public-sector investor engagement</h2>
                                <p>
                                    We are committed to transparent communication, strategic alignment, and long-term value creation for our investors.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <a href="mailto:investor.relations@cyberintel.online" className="ci-btn ci-btn-light">
                                    investor.relations@cyberintel.online
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

export default Home;