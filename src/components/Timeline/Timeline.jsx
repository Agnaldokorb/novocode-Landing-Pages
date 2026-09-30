import { motion } from 'framer-motion';
import styles from './Timeline.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Timeline = ({ steps }) => {
  return (
    <ol className={styles.timeline}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.li
            key={step.id}
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={itemVariants}
            custom={index}
          >
            <span className={styles.bullet} aria-hidden="true">
              <Icon size={20} strokeWidth={2} />
            </span>
            <div className={styles.body}>
              <span className={styles.step}>Etapa {step.id}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
};

export default Timeline;