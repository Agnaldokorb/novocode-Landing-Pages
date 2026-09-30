import { forwardRef } from 'react';
import styles from './Button.module.css';

const variantClasses = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  outline: styles.outline,
};

const sizeClasses = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    fullWidth = false,
    iconLeft,
    iconRight,
    className: customClass = '',
    ...rest
  },
  ref
) {
  const classes = [
    styles.button,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    fullWidth ? styles.fullWidth : '',
    customClass,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
});

export default Button;