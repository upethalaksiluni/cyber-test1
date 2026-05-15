import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Camera,
    CheckCircle2,
    Cloud,
    DatabaseZap,
    FileCheck2,
    Fingerprint,
    Gavel,
    HardDrive,
    Scale,
    SearchCheck,
    Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: HardDrive,
        title: "Digital, Cyber, and Computer Forensics",
        text: "Digital, Cyber, and Computer Forensics involve the systematic identification, preservation, analysis, and presentation of electronic evidence related to cyber incidents, misuse, fraud, malware infections, insider threats, policy violations, data breaches, and criminal activity across endpoints, servers, networks, and storage systems."
    },
    {
        icon: Smartphone,
        title: "Cloud, Mobile, and Social Media Forensics",
        text: "Cloud, Mobile, and Social Media Forensics focus on identifying, preserving, and analyzing digital evidence stored or generated within cloud platforms, mobile devices, messaging platforms, virtualized environments, and social ecosystems while maintaining compliance with privacy, jurisdictional, and regulatory requirements."
    },
    {
        icon: Camera,
        title: "CCTV / IPTV Forensic and Investigation Services",
        text: "CCTV and IPTV Forensic and Investigation Services focus on forensic examination, validation, and analysis of video surveillance systems. Cyber-Intel supports extraction, authentication, metadata analysis, timeline reconstruction, tamper detection, and correlation with digital and physical access logs."
    }
];

const outcomes = [
    "Legally defensible investigation capabilities",
    "Systematic identification, preservation, analysis, and presentation of evidence",
    "Incident reconstruction and root-cause analysis",
    "Support for litigation, regulatory inquiries, insurance claims, and internal investigations",
    "Chain-of-custody enforcement and minimal-impact evidence acquisition",
    "Court-ready and audit-ready reporting"
];

const references = [
    ["NIST Digital Forensics Overview", "https://www.nist.gov/itl/ssd/digital-forensics"],
    ["SANS Digital Forensics and Incident Response", "https://www.sans.org/digital-forensics/"],
    ["NIST Cloud Computing and Digital Forensics", "https://www.nist.gov/itl/ssd/software-quality-group/cloud-computing"],
    ["Europol Digital and Social Media Evidence", "https://www.europol.europa.eu/publications-events/publications/handling-digital-evidence"],
    ["ENISA Video Surveillance and Security Systems", "https://www.enisa.europa.eu/topics/csirt-cert-services/video-surveillance"],
    ["INTERPOL Digital Forensics", "https://www.interpol.int/en/Crimes/Cybercrime/Digital-forensics"]
];

function DigitalForensics() {
    return (
        <>
            <Helmet>
                <title>Digital Forensics — Cyber-Intel Online</title>
                <meta
                    name="description"
                    content="Digital, cloud, mobile, social media, CCTV, IPTV, cyber, and computer forensic investigation services by Cyber-Intel Online."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-services-hero">
                    <div className="ci-hero-grid ci-container">
                        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                            <div className="ci-eyebrow ci-eyebrow-dark">
                                <Fingerprint size={16} />
                                Digital, Cloud, Mobile and Specialized Forensics
                            </div>

                            <h1 className="ci-heading-xl">
                                Defensible evidence for <span className="ci-gradient-text">complex digital investigations</span>
                            </h1>

                            <p className="ci-lead">
                                Digital, Cloud, Mobile and Specialized Forensics Services provide legally defensible investigation capabilities to support cyber incident response, litigation, regulatory inquiries, and internal investigations.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <Link to="/contact" className="ci-btn ci-btn-primary ci-shine">
                                    Request Forensic Support <ArrowRight size={18} />
                                </Link>
                                <a href="#forensics-overview" className="ci-btn ci-btn-outline">
                                    View Capabilities
                                </a>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Gavel size={17} /> Legally Defensible</span>
                                <span><FileCheck2 size={17} /> Evidence Integrity</span>
                                <span><SearchCheck size={17} /> Incident Reconstruction</span>
                            </div>
                        </motion.div>

                        <motion.div className="ci-services-command ci-scan-card" initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <div className="ci-services-orbit">
                                <div className="ci-radar-sweep" />
                                <SearchCheck size={78} />
                            </div>

                            <div className="ci-services-status">
                                <div>
                                    <span>Evidence Sources</span>
                                    <strong>Endpoint · Cloud · Mobile · CCTV</strong>
                                </div>
                                <div>
                                    <span>Use Cases</span>
                                    <strong>Incident · Legal · Regulatory</strong>
                                </div>
                                <div>
                                    <span>Outcome</span>
                                    <strong>Court-Ready Reporting</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft" id="forensics-overview">
                    <div className="ci-container ci-grid-2 ci-overview-grid">
                        <motion.div className="ci-security-visual" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <div className="ci-visual-card large ci-scan-card">
                                <DatabaseZap size={42} />
                                <h3>Evidence integrity across modern environments</h3>
                                <p>
                                    Cyber-Intel focuses on evidence preservation, analysis, transparency, and admissibility across traditional IT systems, cloud platforms, mobile devices, social ecosystems, and specialized technologies.
                                </p>
                            </div>

                            <div className="ci-floating-card card-a">
                                <Cloud size={18} />
                                Cloud Evidence
                            </div>

                            <div className="ci-floating-card card-b">
                                <Scale size={18} />
                                Chain of Custody
                            </div>
                        </motion.div>

                        <div>
                            <div className="ci-section-header">
                                <span className="ci-mini-title">Category Overview</span>
                                <h2 className="ci-heading-lg">Forensic clarity for incidents, disputes, and investigations</h2>
                                <p>
                                    By integrating forensic expertise with cyber security, legal, and compliance considerations, organizations gain accurate incident reconstruction, root-cause analysis, and actionable insight into digital misconduct or compromise.
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
                            <span className="ci-mini-title">Forensic Service Areas</span>
                            <h2 className="ci-heading-lg">Digital, cloud, mobile, social media, CCTV, and IPTV investigations</h2>
                            <p>
                                Cyber-Intel delivers forensic capabilities through structured, standards-aligned methodologies that ensure evidence integrity, admissibility, and transparency.
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
                                <span className="ci-mini-title">Investigation Methodology</span>
                                <h2 className="ci-heading-lg">Structured acquisition, analysis, and reporting</h2>
                                <p>
                                    Engagements begin with incident scoping and legal coordination, followed by forensic acquisition, timeline reconstruction, evidence validation, analysis, and court-ready reporting.
                                </p>
                            </div>
                        </div>

                        <motion.div className="ci-market-panel" initial={{ opacity: 0, x: 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            {[
                                "Scope definition and legal coordination",
                                "Secure evidence acquisition and preservation",
                                "Chain-of-custody enforcement",
                                "Timeline reconstruction and behavioral analysis",
                                "Authenticity validation and metadata analysis",
                                "Clear audit-ready and court-ready reporting"
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
                            <span className="ci-mini-title">Forensic References</span>
                            <h2 className="ci-heading-lg">Useful references for forensic awareness</h2>
                            <p>
                                These references can support forensic planning, client education, and evidence-handling awareness.
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
                                <span className="ci-mini-title">Investigation Support</span>
                                <h2>Preserve evidence, reconstruct events, and support defensible decisions</h2>
                                <p>
                                    Engage Cyber-Intel for digital forensics, cloud forensics, mobile forensics, social media investigations, CCTV/IPTV analysis, incident reconstruction, and expert reporting.
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

export default DigitalForensics;