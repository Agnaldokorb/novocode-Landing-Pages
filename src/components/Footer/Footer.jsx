import { Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import Logo from '@components/Logo';
import { companyInfo, navLinks } from '@data/company';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo width={60} height={60} />
          <p className={styles.tagline}>
            Landing pages e sites institucionais com modelo pague quanto achar justo.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" className={styles.nav}>
          <h3 className={styles.title}>Navegação</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <h3 className={styles.title}>Contato</h3>
          <ul>
            <li>
              <a href={`mailto:${companyInfo.email}`}>
                <Mail size={16} aria-hidden="true" /> {companyInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <h3 className={styles.title}>Redes</h3>
          <div className={styles.socialLinks}>
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={companyInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} NovoCode Tecnologia. Todos os direitos reservados.</p>
        <p className={styles.disclaimer}>
          Hospedagem e domínio não inclusos — contratação à parte.
        </p>
      </div>
    </footer>
  );
};

export default Footer;