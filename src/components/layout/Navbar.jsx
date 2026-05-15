import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Send, Menu, X, ChevronDown } from "lucide-react";
import { navigationLinks } from "../../constants/navigation";
import { siteConfig } from "../../config/siteConfig";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="ci-navbar">
            <div className="ci-container ci-navbar-inner">
                <NavLink to="/" className="ci-brand" onClick={() => setOpen(false)}>
                    <div className="ci-brand-mark">CI</div>
                    <div>
                        <span className="ci-brand-title">{siteConfig.name}</span>
                        <span className="ci-brand-subtitle">{siteConfig.tagline}</span>
                    </div>
                </NavLink>

                <nav className={`ci-nav-links ${open ? "is-open" : ""}`}>
                    {navigationLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                item.cta
                                    ? `ci-nav-cta ${isActive ? "active" : ""}`
                                    : `ci-nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            {item.label === "Services" ? (
                                <>
                                    <span>{item.label}</span>
                                    <ChevronDown size={15} />
                                </>
                            ) : item.cta ? (
                                <>
                                    <Send size={17} />
                                    <span>{item.label}</span>
                                </>
                            ) : (
                                item.label
                            )}
                        </NavLink>
                    ))}
                </nav>

                <button className="ci-menu-btn" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
}

export default Navbar;