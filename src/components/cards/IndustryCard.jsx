import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function IndustryCard({ icon: Icon, title, text, to = "/industries", index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
        >
            <Link to={to} className="ci-card ci-industry-card">
                <div>
                    <span className="ci-icon-box">{Icon && <Icon size={23} />}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <ArrowUpRight size={21} />
            </Link>
        </motion.div>
    );
}

export default IndustryCard;