import { MessageCircle } from 'lucide-react';
import Section from '@components/Section';
import ContactForm from '@components/ContactForm';
import { companyInfo } from '@data/company';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}`;

  return (
    <Section
      id="contato"
      eyebrow="Vamos conversar"
      title="Conte sua ideia em 2 minutos"
      subtitle="Preenchendo o formulário ou chamando direto no WhatsApp — você escolhe como prefere iniciar."
    >
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          <h3 className={styles.title}>Por onde prefere começar?</h3>
          <p className={styles.text}>
            Responderemos em até 1 dia útil. Sem robôs, sem ligação insistente.
          </p>
          <a
            className={styles.whatsapp}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" /> Falar pelo WhatsApp
          </a>
          <ul className={styles.list}>
            <li>Resposta em até 1 dia útil</li>
            <li>Atendimento humano do início ao fim</li>
            <li>Briefing gratuito de 15 minutos</li>
          </ul>
        </div>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;