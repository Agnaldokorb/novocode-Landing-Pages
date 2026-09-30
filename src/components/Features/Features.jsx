import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Section from '@components/Section';
import Card from '@components/Card';
import { services } from '@data/services';
import styles from './Features.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  }),
};

const Features = () => {
  return (
    <Section
      id="servicos"
      eyebrow="O que entregamos"
      title="Serviços sob medida para o seu momento"
      subtitle="Da landing page que valida uma ideia ao site institucional que sustenta sua marca — tudo entregue com o modelo pague quanto achar justo."
    >
      <div className={styles.grid}>
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              custom={i}
            >
              <Card
                icon={Icon}
                title={service.title}
                description={service.description}
                highlights={service.highlights}
              >
                <span className={styles.delivery}>Prazo: {service.delivery}</span>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;