function AnimatedBadge({ icon: Icon, children, dark = false }) {
    return (
        <span className={`ci-eyebrow ${dark ? "ci-eyebrow-dark" : ""}`}>
      {Icon && <Icon size={16} />}
            {children}
    </span>
    );
}

export default AnimatedBadge;