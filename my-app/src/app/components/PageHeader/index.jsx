import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl md:text-5xl font-light mb-4">
        {title}
      </h1>
      <p className="text-neutral-400">
        {subtitle}
      </p>
    </motion.div>
  );
} 