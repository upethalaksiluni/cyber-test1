import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, text, align = "left" }) {
    return (
        <motion.div
            className={`ci-section-header ${align === "center" ? "text-center mx-auto" : ""}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {eyebrow && <span className="ci-mini-title">{eyebrow}</span>}
            <h2 className="ci-heading-lg">{title}</h2>
            {text && <p>{text}</p>}
        </motion.div>
    );
}

export default SectionHeader;