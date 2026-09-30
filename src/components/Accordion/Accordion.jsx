import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

export const AccordionItem = ({ id, question, answer, isOpen, onToggle }) => {
  const headerId = `${id}-header`;
  const panelId = `${id}-panel`;

  return (
    <div className={[styles.item, isOpen ? styles.open : ''].filter(Boolean).join(' ')}>
      <h3 className={styles.heading}>
        <button
          id={headerId}
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{question}</span>
          <ChevronDown size={18} className={styles.chevron} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={styles.panel}
        hidden={!isOpen}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items, defaultOpenId }) => {
  const initialId = defaultOpenId !== undefined ? defaultOpenId : (items[0]?.id ?? null);
  const [openId, setOpenId] = useState(initialId);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.accordion} role="list">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;