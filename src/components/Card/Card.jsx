import styles from './Card.module.css';

const Card = ({ icon: Icon, title, description, highlights = [], className = '', children }) => {
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      {Icon && (
        <div className={styles.iconWrapper} aria-hidden="true">
          <Icon size={22} strokeWidth={2} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item} className={styles.highlight}>
              <span className={styles.bullet} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </article>
  );
};

export default Card;