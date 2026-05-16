import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    ChevronDown,
    Menu,
    Send,
    X,
    UserRoundCog,
    Network,
    ClipboardCheck,
    Crosshair,
    Fingerprint,
    Skull,
    Code2,
    UserLock,
    Gavel,
    Route
} from "lucide-react";
import { navigationLinks } from "../../constants/navigation";
import { siteConfig } from "../../config/siteConfig";

const serviceLinks = [
    {
        label: "Executive Cyber Leadership",
        path: "/services/executive-cyber-leadership",
        icon: UserRoundCog
    },
    {
        label: "Managed IT Services",
        path: "/services/managed-it-services",
        icon: Network
    },
    {
        label: "Cyber Compliance Assurance",
        path: "/services/cyber-compliance-assurance",
        icon: ClipboardCheck
    },
    {
        label: "Adversary Simulation & Testing",
        path: "/services/adversary-simulation-testing",
        icon: Crosshair
    },
    {
        label: "Digital Forensics",
        path: "/services/digital-forensics",
        icon: Fingerprint
    },
    {
        label: "Advanced Threat Defense",
        path: "/services/advanced-threat-defense",
        icon: Skull
    },
    {
        label: "Application & Infrastructure Security",
        path: "/services/application-infrastructure-security",
        icon: Code2
    },
    {
        label: "Data Protection & Privacy",
        path: "/services/data-protection-privacy",
        icon: UserLock
    },
    {
        label: "Cyber Legal & Financial Assurance",
        path: "/services/cyber-legal-financial-assurance",
        icon: Gavel
    },
    {
        label: "Specialized Security Architecture",
        path: "/services/specialized-security-architecture",
        icon: Route
    }
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const servicesRef = useRef(null);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
                setServicesOpen(false);
            }
        };

        const onPointerDown = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("pointerdown", onPointerDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle("ci-nav-open", open);
        return () => document.body.classList.remove("ci-nav-open");
    }, [open]);

    const closeMenus = () => {
        setOpen(false);
        setServicesOpen(false);
    };

    return (
        <header className="ci-navbar">
            <div className="ci-container ci-navbar-inner">
                <NavLink to="/" className="ci-brand" onClick={closeMenus} aria-label="Cyber-Intel Online home">
                    <div className="ci-brand-logo-wrap">
                        <img
                            src="/assets/images/logo-1.png"
                            alt="Cyber-Intel Online"
                            className="ci-brand-logo"
                            width="52"
                            height="52"
                        />
                    </div>

                    <div className="ci-brand-copy">
                        <span className="ci-brand-title">{siteConfig.name}</span>
                        <span className="ci-brand-subtitle">{siteConfig.tagline}</span>
                    </div>
                </NavLink>

                <nav id="primary-navigation" className={`ci-nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
                    {navigationLinks.map((item) => {
                        if (item.label === "Services") {
                            return (
                                <div
                                    className={`ci-nav-dropdown ${servicesOpen ? "is-open" : ""}`}
                                    key={item.path}
                                    ref={servicesRef}
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <NavLink
                                        to={item.path}
                                        onClick={() => setServicesOpen(false)}
                                        className={({ isActive }) => `ci-nav-link ci-nav-dropdown-trigger ${isActive ? "active" : ""}`}
                                    >
                                        <span>{item.label}</span>
                                        <button
                                            type="button"
                                            className="ci-nav-dropdown-toggle"
                                            aria-label={servicesOpen ? "Close services menu" : "Open services menu"}
                                            aria-expanded={servicesOpen}
                                            aria-controls="services-dropdown-menu"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                event.stopPropagation();
                                                setServicesOpen((value) => !value);
                                            }}
                                        >
                                            <ChevronDown size={15} aria-hidden="true" />
                                        </button>
                                    </NavLink>

                                    <div id="services-dropdown-menu" className="ci-services-dropdown" role="menu">
                                        <div className="ci-services-dropdown-head">
                                            <strong>Cyber-Intel Services</strong>
                                            <span>Choose a service pillar</span>
                                        </div>

                                        <div className="ci-services-dropdown-grid">
                                            {serviceLinks.map((service) => (
                                                <NavLink
                                                    key={service.path}
                                                    to={service.path}
                                                    className={({ isActive }) => `ci-services-dropdown-link ${isActive ? "active" : ""}`}
                                                    onClick={closeMenus}
                                                    role="menuitem"
                                                >
                                                    <span className="ci-services-dropdown-icon">
                                                        <service.icon size={18} aria-hidden="true" />
                                                    </span>
                                                    <span>{service.label}</span>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeMenus}
                                className={({ isActive }) =>
                                    item.cta
                                        ? `ci-nav-cta ${isActive ? "active" : ""}`
                                        : `ci-nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                {item.cta ? (
                                    <>
                                        <Send size={17} aria-hidden="true" />
                                        <span>{item.label}</span>
                                    </>
                                ) : (
                                    item.label
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                <button
                    className="ci-menu-btn"
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={open}
                    aria-controls="primary-navigation"
                >
                    {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </div>
        </header>
    );
}

export default Navbar;