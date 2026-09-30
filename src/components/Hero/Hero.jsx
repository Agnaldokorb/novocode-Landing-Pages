import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@components/Button';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const Hero = ({ onCtaClick }) => {
  const handleClick = (event) => {
    if (onCtaClick) onCtaClick(event, '#contato');
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className={styles.badge} variants={itemVariants}>
            <Sparkles size={14} aria-hidden="true" />
            Modelo Pague quanto achar justo
          </motion.span>

          <motion.h1 id="hero-title" className={styles.title} variants={itemVariants}>
            Seu site profissional pronto —{' '}
            <span className={styles.highlight}>você só paga quando entregar</span>, pelo valor que
            achar justo.
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Landing pages e sites institucionais criados por devs que entendem de conversão. Sem
            mensalidade, sem surpresa. Hospedagem e domínio à parte, com toda a transparência.
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <Button size="lg" iconRight={<ArrowRight size={18} />} onClick={handleClick}>
              Quero meu site
            </Button>
            <Button variant="ghost" size="lg" onClick={(e) => onCtaClick?.(e, '#como-funciona')}>
              Como funciona
            </Button>
          </motion.div>

          <motion.ul className={styles.usp} variants={itemVariants}>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" /> Sem mensalidade
            </li>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" /> 2 rodadas de revisão
            </li>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" /> Acessibilidade WCAG
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className={styles.mockupWrapper}
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          <div className={styles.mockup} role="img" aria-label="Pré-visualização de uma landing page criada pela NovoCode">
            <div className={styles.windowBar}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.url}>novosite.com.br</span>
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockHero}>
                <div className={styles.mockTitle} />
                <div className={styles.mockText} />
                <div className={styles.mockCta} />
              </div>
              <div className={styles.mockGrid}>
                <div className={styles.mockCard} />
                <div className={styles.mockCard} />
                <div className={styles.mockCard} />
              </div>
            </div>
          </div>
          <div className={styles.glow} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;