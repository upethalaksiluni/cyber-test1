import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Clock,
    Headphones,
    Lock,
    Mail,
    MessageSquareText,
    Phone,
    Send,
    ShieldCheck,
    UserRoundCheck,
    Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBadge from "../components/common/AnimatedBadge";
import SectionHeader from "../components/common/SectionHeader";
import { siteConfig } from "../config/siteConfig";

const reasons = [
    {
        icon: Zap,
        title: "Quick Response",
        text: "We typically respond to inquiries within 24 hours."
    },
    {
        icon: UserRoundCheck,
        title: "Expert Support",
        text: "Access cybersecurity specialists with strong operational experience."
    },
    {
        icon: Lock,
        title: "Confidential",
        text: "Your information is handled with strict confidentiality."
    }
];

function Contact() {
    const [alert, setAlert] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            setAlert("Please fill in all required fields correctly.");
            return;
        }

        const formData = new FormData(form);
        const subject = formData.get("subject");

        setAlert(
            subject === "incident"
                ? "Thanks! Your message looks urgent. Our team will prioritize it and respond as soon as possible."
                : "Thanks! Your message has been received. We typically respond within 24 hours."
        );

        form.reset();
    };

    return (
        <>
            <Helmet>
                <title>Contact Cyber-Intel Online — Talk to a Cybersecurity Specialist</title>
                <meta
                    name="description"
                    content="Contact Cyber-Intel Online for cybersecurity consultation, penetration testing, digital forensics, incident response, compliance assurance, and threat intelligence."
                />
            </Helmet>

            <main>
                <section className="ci-hero ci-contact-hero">
                    <div className="ci-hero-orb one" />
                    <div className="ci-hero-orb two" />

                    <div className="ci-hero-grid ci-container">
                        <motion.div
                            className="ci-hero-content"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                        >
                            <AnimatedBadge icon={Headphones} dark>
                                Contact Us
                            </AnimatedBadge>

                            <h1 className="ci-heading-xl">
                                Write to us <span className="ci-gradient-text">anytime</span>
                            </h1>

                            <p className="ci-lead">
                                Fill out the form and our team will respond within 24 hours. For urgent needs, call us directly or send a message with clear urgency details.
                            </p>

                            <div className="ci-hero-actions ci-mt-28">
                                <a href="tel:+94112915504" className="ci-btn ci-btn-primary ci-shine">
                                    Call Now <Phone size={18} />
                                </a>
                                <Link to="/services" className="ci-btn ci-btn-outline">
                                    Browse Services <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div className="ci-hero-badges">
                                <span><Clock size={17} /> 24 Hour Response</span>
                                <span><ShieldCheck size={17} /> Confidential Handling</span>
                                <span><MessageSquareText size={17} /> Specialist Routing</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="ci-contact-hero-panel ci-scan-card"
                            initial={{ opacity: 0, x: 44 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                        >
                            <div className="ci-contact-orbit">
                                <div className="ci-radar-sweep" />
                                <Send size={72} />
                            </div>

                            <div className="ci-contact-status">
                                <div>
                                    <span>Response Time</span>
                                    <strong>Within 24 Hours</strong>
                                </div>
                                <div>
                                    <span>Office Hours</span>
                                    <strong>8:00 AM – 5:00 PM</strong>
                                </div>
                                <div>
                                    <span>Coverage</span>
                                    <strong>Sri Lanka + Global Clients</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="ci-section ci-section-soft">
                    <div className="ci-container ci-contact-grid">
                        <motion.div
                            className="ci-contact-form-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65 }}
                        >
                            <SectionHeader
                                eyebrow="Send a Message"
                                title="Tell us your goal, urgency, and environment"
                                text="The fastest way to get help is to share your objective, business context, urgency, and whether your environment is cloud, on-premise, or hybrid."
                            />

                            <form className="ci-contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="ci-form-grid">
                                    <div className="ci-field">
                                        <label htmlFor="name">Your Name</label>
                                        <input id="name" name="name" type="text" placeholder="Enter your full name" required />
                                        <small>Example: John Silva</small>
                                    </div>

                                    <div className="ci-field">
                                        <label htmlFor="email">Your Email</label>
                                        <input id="email" name="email" type="email" placeholder="Enter your email address" required />
                                        <small>We will reply to this email.</small>
                                    </div>
                                </div>

                                <div className="ci-form-grid">
                                    <div className="ci-field">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                                        <small>Include country code if possible.</small>
                                    </div>

                                    <div className="ci-field">
                                        <label htmlFor="subject">Subject</label>
                                        <select id="subject" name="subject" required defaultValue="">
                                            <option value="" disabled>Select a subject</option>
                                            <option value="security">Security Consultation</option>
                                            <option value="penetration">Penetration Testing</option>
                                            <option value="forensics">Cyber Forensics</option>
                                            <option value="incident">Incident Response</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                        <small>Helps us route you to the right specialist.</small>
                                    </div>
                                </div>

                                <div className="ci-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Write your message here..." required />
                                    <small>Tip: mention urgency and your environment.</small>
                                </div>

                                <button className="ci-btn ci-btn-primary ci-contact-submit" type="submit">
                                    Send Message <Send size={18} />
                                </button>

                                {alert && <div className="ci-form-alert">{alert}</div>}
                            </form>
                        </motion.div>

                        <motion.aside
                            className="ci-contact-info-panel"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65, delay: 0.1 }}
                        >
                            <h3>Contact Information</h3>

                            <div className="ci-contact-info-item">
                                <div><Phone size={21} /></div>
                                <section>
                                    <strong>Call Us</strong>
                                    <a href="tel:+94112915504">(94) 112 915 504</a>
                                    <span>Voice Only</span>
                                    <a href="tel:+94764456615">(94) 764 456 615</a>
                                </section>
                            </div>

                            <div className="ci-contact-info-item">
                                <div><Mail size={21} /></div>
                                <section>
                                    <strong>Send Email</strong>
                                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                                    <span>Typical response within 24 hours</span>
                                </section>
                            </div>

                            <div className="ci-contact-info-item">
                                <div><Clock size={21} /></div>
                                <section>
                                    <strong>Office Hours</strong>
                                    <p>8:00 AM – 5:00 PM</p>
                                    <span>Monday to Friday, Sri Lanka Time</span>
                                </section>
                            </div>

                            <div className="ci-contact-socials">
                                <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">
                                    <i className="bi bi-facebook"></i>
                                    Facebook
                                </a>
                                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                    LinkedIn
                                </a>
                            </div>
                        </motion.aside>
                    </div>
                </section>

                <section className="ci-section">
                    <div className="ci-container">
                        <SectionHeader
                            align="center"
                            eyebrow="Why Contact Us"
                            title="Fast routing, specialist support, and confidential handling"
                            text="Our dedicated team can help you evaluate risk quickly, recommend the right service, and move to action without delays."
                        />

                        <div className="ci-grid-3 ci-mt-32">
                            {reasons.map((item, index) => (
                                <motion.div
                                    className="ci-card ci-contact-reason-card"
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
                                <span className="ci-mini-title">Urgent Support</span>
                                <h2>Need urgent incident response?</h2>
                                <p>
                                    Call us now or send a message with incident response selected. We will prioritize your request.
                                </p>
                            </div>

                            <div className="ci-hero-actions">
                                <a href="tel:+94112915504" className="ci-btn ci-btn-light">
                                    Call Now
                                </a>
                                <Link to="/services" className="ci-btn ci-btn-outline">
                                    Browse Services
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Contact;