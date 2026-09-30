import { motion } from 'framer-motion';
import Section from '@components/Section';
import Timeline from '@components/Timeline';
import { processSteps } from '@data/process';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Do briefing à entrega em 4 etapas"
      subtitle="Sem surpresas, sem letras miúdas. Você acompanha cada passo e decide o valor só no final."
      background="secondary"
    >
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <Timeline steps={processSteps} />
      </motion.div>
    </Section>
  );
};

export default HowItWorks;