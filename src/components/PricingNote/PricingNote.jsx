import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';
import Section from '@components/Section';
import styles from './PricingNote.module.css';

const PricingNote = () => {
  return (
    <Section
      id="modelo"
      eyebrow="Modelo comercial"
      title="Pague quanto achar justo"
      subtitle="Você avalia a entrega, decide o valor e paga apenas se fizer sentido."
    >
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.seal} aria-hidden="true">
          <Heart size={20} fill="currentColor" />
        </div>
        <h3 className={styles.title}>Sem mensalidade. Sem tabelas fixas.</h3>
        <p className={styles.description}>
          Após a entrega, você avalia o resultado e nos informa o valor que considera justo pagar.
          Pagamento único, via Pix ou transferência. Simples assim.
        </p>
        <div className={styles.points}>
          <div className={styles.point}>
            <ShieldCheck size={18} aria-hidden="true" />
            <div>
              <strong>Hospedagem e domínio não inclusos</strong>
              <p>
                Indicamos parceiros confiáveis, mas a contratação fica por sua conta — sem
                surpresas.
              </p>
            </div>
          </div>
          <div className={styles.point}>
            <Sparkles size={18} aria-hidden="true" />
            <div>
              <strong>2 rodadas de revisão inclusas</strong>
              <p>
                Você tem espaço para ajustes até o site ficar exatamente como imaginou.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default PricingNote;