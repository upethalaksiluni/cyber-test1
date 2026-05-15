import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function InsightCard({ type, title, text, to = "/insights", index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
        >
            <Link to={to} className="ci-card ci-insight-card">
                <span className="ci-tag">{type}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="ci-card-link">
          Read more <ArrowRight size={17} />
        </span>
            </Link>
        </motion.div>
    );
}

export default InsightCard;