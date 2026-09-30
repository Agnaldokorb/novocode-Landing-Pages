import Section from '@components/Section';
import Accordion from '@components/Accordion';
import { faqs } from '@data/faqs';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <Section
      id="faq"
      eyebrow="Tira-dúvidas"
      title="Perguntas frequentes"
      subtitle="As respostas mais comuns. Não encontrou a sua? Mande mensagem no formulário."
    >
      <div className={styles.wrapper}>
        <Accordion items={faqs} defaultOpenId="incluso" />
      </div>
    </Section>
  );
};

export default FAQ;