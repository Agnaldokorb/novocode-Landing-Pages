import { useTheme } from '@hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? 'Trocar para tema claro' : 'Trocar para tema escuro';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={[styles.toggle, className].filter(Boolean).join(' ')}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <span className={styles.iconLight} aria-hidden="true">
        <Sun size={18} strokeWidth={2} />
      </span>
      <span className={styles.iconDark} aria-hidden="true">
        <Moon size={18} strokeWidth={2} />
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
};

export default ThemeToggle;