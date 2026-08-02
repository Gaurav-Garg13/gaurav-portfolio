import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Reveal({ children, className = "", delay = 0, style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: defaultVariants.hidden,
        show: {
          ...defaultVariants.show,
          transition: {
            ...defaultVariants.show.transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
