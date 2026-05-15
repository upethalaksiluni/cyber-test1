import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ icon: Icon, title, text, to = "/services", index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
        >
            <Link to={to} className="ci-card ci-service-card">
                <span className="ci-icon-box">{Icon && <Icon size={24} />}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="ci-card-link">
          Explore service <ArrowRight size={17} />
        </span>
            </Link>
        </motion.div>
    );
}

export default ServiceCard;