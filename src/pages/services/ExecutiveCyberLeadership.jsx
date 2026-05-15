import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    BrainCircuit,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    Eye,
    Fingerprint,
    Gavel,
    Globe2,
    LockKeyhole,
    Radar,
    ShieldCheck,
    Target,
    UserRoundCog
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceCards = [
    {
        icon: UserRoundCog,
        title: "Virtual Chief Information Security Officer (vCISO)",
        text: "Executive-level cyber leadership, governance oversight, policy alignment, and strategic cyber risk management."
    },
    {
        icon: BrainCircuit,
        title: "Business & Competitive Intelligence",
        text: "Strategic intelligence analysis supporting leadership, resilience, market awareness, and informed cyber decision-making."
    },
    {
        icon: Fingerprint,
        title: "Human-Risk & Insider Threat",
        text: "Behavioral risk visibility, insider threat governance, detection enablement, and workforce-focused security resilience."
    }
];

const highlights = [
    {
        icon: ShieldCheck,
        title: "Governance Alignment",
        text: "Align cyber security leadership with enterprise governance and accountability."
    },
    {
        icon: BadgeCheck,
        title: "Compliance Confidence",
        text: "Support executive readiness across regulations, frameworks, and audit obligations."
    },
    {
        icon: Globe2,
        title: "Strategic Intelligence",
        text: "Transform intelligence into measurable operational and executive value."
    },
    {
        icon: Building2,
        title: "Business Resilience",
        text: "Improve long-term resilience through leadership-driven cyber maturity."
    }
];

function ExecutiveCyberLeadership() {
    return (
        <>
            <Helmet>
                <title>
                    Executive Cyber Leadership | Cyber-Intel Online
                </title>

                <meta
                    name="description"
                    content="Executive Cyber Leadership, Governance and Intelligence Services including vCISO, business intelligence, insider threat management, cyber governance, and strategic cyber resilience."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Radar size={16} />
                                Executive Cyber Leadership
                            </div>

                            <h1 className="ci-heading-xl">
                                Governance, strategy &{" "}
                                <span className="ci-gradient-text">
                                    intelligence-led security leadership
                                </span>
                            </h1>

                            <p className="ci-lead">
                                Executive Cyber Leadership, Governance and
                                Intelligence Services help organizations align
                                cyber security strategy with business
                                objectives, enterprise risk management,
                                governance obligations, and regulatory
                                requirements.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link
                                    to="/contact"
                                    className="ci-btn ci-btn-primary ci-shine"
                                >
                                    Speak With Cyber Leadership Team
                                    <ArrowRight size={18} />
                                </Link>

                                <a
                                    href="#service-overview"
                                    className="ci-btn ci-btn-outline"
                                >
                                    Explore Services
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span>
                                    <ShieldCheck size={17} />
                                    Governance Driven
                                </span>

                                <span>
                                    <Target size={17} />
                                    Risk Focused
                                </span>

                                <span>
                                    <BrainCircuit size={17} />
                                    Intelligence Led
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-services-command ci-scan-card"
                            initial={{ opacity: 0, x: 34 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <LockKeyhole size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Core Focus</span>
                                    <strong>Leadership & Governance</strong>
                                </div>

                                <div>
                                    <span>Delivery Model</span>
                                    <strong>Advisory · Strategic · Executive</strong>
                                </div>

                                <div>
                                    <span>Business Outcome</span>
                                    <strong>Cyber Resilience & Risk Reduction</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section
                    className="ci-section ci-section-soft"
                    id="service-overview"
                >
                    <div className="ci-container">
                        <div className="ci-section-row">
                            <div className="ci-section-header">
                                <span className="ci-mini-title">
                                    Category Overview
                                </span>

                                <h2 className="ci-heading-lg">
                                    Executive leadership aligned to cyber risk
                                    and governance
                                </h2>

                                <p>
                                    Executive Cyber Leadership, Governance and
                                    Intelligence Services provide organizations
                                    with senior-level oversight and strategic
                                    direction to manage cyber risk as a core
                                    business and governance issue.
                                </p>
                            </div>
                        </div>

                        <div className="ci-grid-2 ci-mt-32">
                            <motion.div
                                className="ci-card ci-hover-lift ci-scan-card"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="ci-icon-box">
                                    <BriefcaseBusiness size={24} />
                                </div>

                                <h3>Strategic Cyber Governance</h3>

                                <p>
                                    Services focus on aligning cyber security
                                    strategy with organizational objectives,
                                    regulatory obligations, and enterprise risk
                                    frameworks while improving executive
                                    visibility and accountability.
                                </p>
                            </motion.div>

                            <motion.div
                                className="ci-card ci-hover-lift ci-scan-card"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.08 }}
                            >
                                <div className="ci-icon-box">
                                    <Eye size={24} />
                                </div>

                                <h3>Intelligence-Driven Decisions</h3>

                                <p>
                                    Cyber-Intel integrates governance,
                                    leadership, and intelligence capabilities to
                                    improve decision-making, resilience,
                                    compliance confidence, and long-term cyber
                                    maturity.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container">
                        <div className="ci-section-header text-center">
                            <span className="ci-mini-title">
                                Core Service Areas
                            </span>

                            <h2 className="ci-heading-lg">
                                Leadership & intelligence services
                            </h2>

                            <p>
                                Structured advisory and executive-level cyber
                                services designed to strengthen governance,
                                strategic awareness, and organizational
                                resilience.
                            </p>
                        </div>

                        <div className="ci-services-grid ci-mt-32">
                            {serviceCards.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08
                                    }}
                                >
                                    <div className="ci-service-main-card ci-scan-card">
                                        <div className="ci-service-card-top">
                                            <span className="ci-icon-box">
                                                <item.icon size={24} />
                                            </span>

                                            <ArrowRight size={18} />
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
                    <div className="ci-container">
                        <div className="ci-section-header text-center">
                            <span className="ci-mini-title">
                                Virtual Chief Information Security Officer
                            </span>

                            <h2 className="ci-heading-lg">
                                Executive cyber leadership without the overhead
                                of a full-time CISO
                            </h2>

                            <p>
                                A Virtual Chief Information Security Officer
                                (vCISO) delivers strategic cyber leadership,
                                governance oversight, compliance alignment, and
                                executive reporting through a flexible advisory
                                engagement model.
                            </p>
                        </div>

                        <div className="ci-grid-2 ci-mt-32">
                            <motion.div
                                className="ci-market-panel"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {[
                                    "Cyber security strategy and governance oversight",
                                    "Risk governance and policy development",
                                    "Executive reporting and stakeholder alignment",
                                    "Compliance alignment with NIST and ISO/IEC 27001",
                                    "Continuous cyber maturity improvement"
                                ].map((item) => (
                                    <div key={item}>
                                        <CheckCircle2 size={20} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                className="ci-framework-panel ci-floating"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <UserRoundCog size={42} />

                                <h3>
                                    Flexible leadership built around business
                                    risk
                                </h3>

                                <p>
                                    Cyber-Intel implements vCISO engagements
                                    through organizational assessment, maturity
                                    evaluation, governance development, roadmap
                                    creation, executive reporting, and
                                    continuous strategic guidance.
                                </p>

                                <div className="ci-framework-tags ci-framework-tags-dark">
                                    <span>NIST</span>
                                    <span>ISO 27001</span>
                                    <span>Risk Governance</span>
                                    <span>Executive Reporting</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container">
                        <div className="ci-section-header text-center">
                            <span className="ci-mini-title">
                                Business & Competitive Intelligence
                            </span>

                            <h2 className="ci-heading-lg">
                                Intelligence that supports strategic cyber and
                                business decisions
                            </h2>

                            <p>
                                Business and Competitive Intelligence services
                                provide situational awareness, strategic
                                visibility, and evidence-based insights across
                                cyber security, market conditions, regulatory
                                changes, and emerging risks.
                            </p>
                        </div>

                        <div className="ci-grid-3 ci-mt-32">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="ci-card ci-hover-lift"
                                    initial={{ opacity: 0, y: 26 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.06
                                    }}
                                >
                                    <div className="ci-icon-box">
                                        <item.icon size={24} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container ci-grid-2 ci-framework-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-section-header">
                                <span className="ci-mini-title">
                                    Human-Risk & Insider Threat
                                </span>

                                <h2 className="ci-heading-lg">
                                    Reduce insider risk through governance,
                                    visibility, and responsible monitoring
                                </h2>

                                <p>
                                    Human-Risk and Insider Threat Services
                                    address risks originating from employees,
                                    contractors, partners, and trusted insiders
                                    through multidisciplinary governance,
                                    detection strategy, awareness, and response
                                    support.
                                </p>
                            </div>

                            <div className="ci-check-list ci-mt-32">
                                {[
                                    "Insider threat assessment and policy review",
                                    "Behavioral risk indicator analysis",
                                    "Access governance and misuse detection",
                                    "Executive reporting and governance support",
                                    "Awareness and workforce resilience programs"
                                ].map((item) => (
                                    <div key={item}>
                                        <CheckCircle2 size={20} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-security-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-visual-card large ci-scan-card">
                                <Gavel size={42} />

                                <h3>
                                    Ethical governance with privacy-aligned risk
                                    management
                                </h3>

                                <p>
                                    Cyber-Intel integrates cyber security, HR,
                                    legal, and governance functions to reduce
                                    insider threats while maintaining workforce
                                    trust and regulatory alignment.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <ShieldCheck size={18} />
                                Privacy Aligned
                            </div>

                            <div className="ci-floating-card card-b">
                                <Target size={18} />
                                Early Detection
                            </div>
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
                                <span className="ci-mini-title">
                                    Executive Advisory
                                </span>

                                <h2>
                                    Build a stronger cyber governance and
                                    intelligence capability
                                </h2>

                                <p>
                                    Engage Cyber-Intel Online for leadership
                                    augmentation, intelligence integration,
                                    governance support, and strategic cyber risk
                                    reduction.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <Link
                                    to="/contact"
                                    className="ci-btn ci-btn-light"
                                >
                                    Contact Cyber-Intel
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ExecutiveCyberLeadership;