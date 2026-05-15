import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

function Footer() {
    return (
        <footer className="ci-footer">
            <div className="ci-container">
                <div className="ci-footer-grid">
                    <div>
                        <div className="ci-footer-brand">
                            <div className="ci-brand-mark">CI</div>
                            <div>
                                <strong>{siteConfig.name}</strong>
                                <span>Cyber Security & Intelligence</span>
                            </div>
                        </div>

                        <p className="ci-footer-text">{siteConfig.description}</p>

                        <div className="ci-socials">
                            <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href={siteConfig.socials.x} target="_blank" rel="noreferrer" aria-label="X">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <div className="ci-footer-links">
                            <Link to="/about">About</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/insights">Insights</Link>
                        </div>
                    </div>

                    <div>
                        <h4>Quick Access</h4>
                        <div className="ci-footer-links">
                            <Link to="/services">Services Hub</Link>
                            <Link to="/industries">Industries Hub</Link>
                            <Link to="/frameworks">Frameworks Hub</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms & Conditions</Link>
                        </div>
                    </div>

                    <div>
                        <h4>Investor Relations</h4>
                        <div className="ci-footer-contact">
                            <ShieldCheck size={20} />
                            <span>Strategic investor and partner engagement</span>
                        </div>
                        <a className="ci-footer-contact" href="mailto:investor.relations@cyberintel.online">
                            <Mail size={20} />
                            <span>investor.relations@cyberintel.online</span>
                        </a>
                    </div>
                </div>

                <div className="ci-footer-bottom">
                    <p>© 2025 {siteConfig.legalName}. All rights reserved.</p>
                    <div>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;