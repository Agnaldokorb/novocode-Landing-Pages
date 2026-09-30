import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@components/Logo';
import ThemeToggle from '@components/ThemeToggle';
import Button from '@components/Button';
import { navLinks } from '@data/company';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (event, href) => {
    setIsOpen(false);
    if (!href.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.focus?.({ preventScroll: true });
    }
  };

  return (
    <header
      className={[styles.header, isScrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#"
          className={styles.logoLink}
          aria-label="NovoCode — página inicial"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo width={60} height={60} />
        </a>

        <nav className={styles.navDesktop} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className={styles.navLink} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => handleNavClick(e, '#contato')}
            className={styles.cta}
          >
            Quero meu site
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={[styles.mobileMenu, isOpen ? styles.mobileOpen : ''].filter(Boolean).join(' ')}
        hidden={!isOpen}
      >
        <nav aria-label="Navegação mobile">
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className={styles.mobileLink} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                fullWidth
                onClick={(e) => handleNavClick(e, '#contato')}
              >
                Quero meu site
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;