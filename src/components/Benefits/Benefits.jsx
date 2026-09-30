import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Section from '@components/Section';
import { benefits } from '@data/process';
import styles from './Benefits.module.css';

const Benefits = () => {
  return (
    <Section
      id="beneficios"
      eyebrow="Por que nos escolher"
      title="Um modelo que coloca você no centro"
      subtitle="Tudo que entregamos, mas também como trabalhamos."
      background="secondary"
    >
      <div className={styles.grid}>
        {benefits.map((benefit, i) => {
          const Icon = Icons[benefit.icon] || Icons.Sparkles;
          return (
            <motion.article
              key={benefit.id}
              className={styles.item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
};

export default Benefits;