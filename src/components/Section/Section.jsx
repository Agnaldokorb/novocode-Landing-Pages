import styles from './Section.module.css';

const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  background = 'primary',
  children,
  className = '',
  containerClassName = '',
}) => {
  const wrapperClasses = [
    styles.section,
    styles[`bg-${background}`],
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={wrapperClasses} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className={`container ${containerClassName}`}>
        {(eyebrow || title || subtitle) && (
          <header className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && (
              <h2 id={id ? `${id}-title` : undefined} className={styles.title}>
                {title}
              </h2>
            )}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;