import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Bell,
    BriefcaseBusiness,
    CheckCircle2,
    Clock,
    Code2,
    Globe2,
    GraduationCap,
    HeartHandshake,
    LockKeyhole,
    Mail,
    Radar,
    Rocket,
    ShieldCheck,
    Sparkles,
    Target,
    UsersRound
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBadge from "../components/common/AnimatedBadge";
import SectionHeader from "../components/common/SectionHeader";

const futureRoles = [
    {
        icon: ShieldCheck,
        title: "Cyber Security Analysts",
        text: "Defensive monitoring, risk analysis, controls review, and security operations support."
    },
    {
        icon: Radar,
        title: "Threat Intelligence Specialists",
        text: "Research, intelligence reporting, threat tracking, and adversary behavior analysis."
    },
    {
        icon: Code2,
        title: "Security Engineers",
        text: "Secure architecture, automation, platform hardening, and technical delivery."
    },
    {
        icon: LockKeyhole,
        title: "Compliance & GRC Consultants",
        text: "ISO, NIST, SOC 2, privacy alignment, governance support, and audit readiness."
    }
];

const values = [
    "Mission-driven cyber security work",
    "Intelligence-led thinking",
    "Remote-ready and globally scalable operations",
    "Continuous learning and research culture",
    "Ethical, responsible, and client-focused delivery",
    "Future opportunities across technical and advisory tracks"
];

function Careers() {
    return (
        <>
            <Helmet>
                <title>Careers — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Careers at Cyber-Intel Online. No open jobs are available right now, but future opportunities are coming soon."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-careers-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={BriefcaseBusiness} dark>
                                Careers at Cyber-Intel Online
                            </AnimatedBadge>

                            <h1 className="ci-heading-xl">
                                Careers <span className="ci-gradient-text">Coming Soon</span>
                            </h1>

                            <p className="ci-lead">
                                We are not hiring for active roles right now. As Cyber-Intel Online grows, future opportunities will open across cyber security, intelligence, governance, engineering, research, and client delivery.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="mailto:business@cyberintel.online" className="ci-btn ci-btn-primary ci-shine">
                                    Register Interest <ArrowRight size={18} />
                                </a>
                                <Link to="/about" className="ci-btn ci-btn-outline">
                                    Learn About Us
                                </Link>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Clock size={17} /> No Open Jobs Now</span>
                                <span><Bell size={17} /> Hiring Updates Coming Soon</span>
                                <span><Globe2 size={17} /> Future Global Opportunities</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-careers-panel ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-careers-orbit">
                                <div className="ci-radar-sweep" />
                                <Rocket size={76} />
                            </div>

                            <div className="ci-careers-status">
                                <div>
                                    <span>Status</span>
                                    <strong>Coming Soon</strong>
                                </div>
                                <div>
                                    <span>Open Roles</span>
                                    <strong>0</strong>
                                </div>
                                <div>
                                    <span>Future Tracks</span>
                                    <strong>Security · Intelligence · GRC</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-trustbar">
                    <div className="ci-container ci-trust-grid">
                        {[
                            [Target, "Mission Focused", "Protecting critical digital environments"],
                            [GraduationCap, "Learning Culture", "Research and continuous improvement"],
                            [UsersRound, "Team Growth", "Future specialist career tracks"],
                            [HeartHandshake, "Responsible Work", "Ethical and client-focused delivery"]
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
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Current Hiring Status"
                            title="No active vacancies are available right now"
                            text="This careers page is prepared for future recruitment. When positions become available, they will be published here with role descriptions, requirements, and application instructions."
                        />

                        <motion.div
                            className="ci-coming-soon-card ci-mt-32"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="ci-coming-soon-icon">
                                <Sparkles size={42} />
                            </div>
                            <h2>Hiring updates will be announced soon</h2>
                            <p>
                                Cyber-Intel Online is building a future-ready cyber security and intelligence organization. We are preparing for long-term growth and will open opportunities when the next hiring phase begins.
                            </p>
                            <a href="mailto:business@cyberintel.online" className="ci-btn ci-btn-primary">
                                Send Future Interest <Mail size={18} />
                            </a>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container">
                        <div className="ci-section-row">
                            <SectionHeader
                                eyebrow="Future Career Tracks"
                                title="Potential roles we may open as the company grows"
                                text="These are not active vacancies. They represent future capability areas aligned with our cyber security and intelligence service model."
                            />
                            <Link to="/services" className="ci-btn ci-btn-light">
                                View Services <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="ci-grid-4 ci-mt-32">
                            {futureRoles.map((item, index) => (
                                <motion.div
                                    className="ci-card ci-career-track-card"
                                    key={item.title}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.55, delay: index * 0.07 }}
                                >
                  <span className="ci-icon-box">
                    <item.icon size={24} />
                  </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ci-section ci-section-dark">
                    <div className="ci-container ci-grid-2">
                        <div>
                            <SectionHeader
                                eyebrow="Culture Preview"
                                title="What future team members can expect"
                                text="Cyber-Intel Online is designed around mission-critical work, intelligence-led security, ethical execution, and scalable global service delivery."
                            />
                        </div>

                        <div className="ci-check-list ci-check-list-dark">
                            {values.map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45 }}
                                >
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
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
                                <span className="ci-mini-title">Stay Connected</span>
                                <h2>Future opportunities will be published here</h2>
                                <p>
                                    There are no jobs available now. You may still send your profile for future consideration.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <a href="mailto:business@cyberintel.online" className="ci-btn ci-btn-light">
                                    business@cyberintel.online
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

export default Careers;