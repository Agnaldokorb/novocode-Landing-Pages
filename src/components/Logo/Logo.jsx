import { useId } from 'react';
import { useTheme } from '@hooks/useTheme';
import styles from './Logo.module.css';

const Logo = ({ className = '', width = 180, height = 46, alt = 'NovoCode' }) => {
  const { theme } = useTheme();
  const id = useId();
  const isDark = theme === 'dark';
  const src = isDark ? '/assets/novocode-branco.png' : '/assets/novocode-preto.png';

  return (
    <span
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
        className={styles.img}
        data-theme={theme}
        data-testid={`logo-${id}`}
      />
    </span>
  );
};

export default Logo;