import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Button from '@components/Button';
import { contactSchema, defaultContactValues } from '@schemas/contactSchema';
import { useContactForm } from '@hooks/useContactForm';
import styles from './ContactForm.module.css';

const projectTypes = [
  { value: 'landing-page', label: 'Landing Page' },
  { value: 'site-institucional', label: 'Site Institucional' },
  { value: 'outro', label: 'Outro' },
];

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const ContactForm = () => {
  const { submit } = useContactForm();
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultContactValues,
    mode: 'onBlur',
  });

  const phoneValue = watch('phone');

  const onPhoneChange = (event) => {
    const formatted = formatPhone(event.target.value);
    setValue('phone', formatted, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (data) => {
    setStatus('idle');
    setErrorMessage('');
    try {
      await submit(data);
      setStatus('success');
      reset(defaultContactValues);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Não foi possível enviar agora. Tente pelo WhatsApp.');
    }
  };

  const messageLength = watch('message')?.length || 0;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name">Nome completo</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <span id="name-error" className={styles.error} role="alert">
              <AlertCircle size={14} aria-hidden="true" /> {errors.name.message}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <span id="email-error" className={styles.error} role="alert">
              <AlertCircle size={14} aria-hidden="true" /> {errors.email.message}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefone (WhatsApp)</label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(11) 91234-5678"
            value={phoneValue ?? ''}
            onChange={onPhoneChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className={styles.error} role="alert">
              <AlertCircle size={14} aria-hidden="true" /> {errors.phone.message}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="projectType">Tipo de projeto</label>
          <select
            id="projectType"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            {...register('projectType')}
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <span id="projectType-error" className={styles.error} role="alert">
              <AlertCircle size={14} aria-hidden="true" /> {errors.projectType.message}
            </span>
          )}
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="message">
            Conte sobre o projeto{' '}
            <span className={styles.counter} aria-live="polite">
              {messageLength}/1000
            </span>
          </label>
          <textarea
            id="message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
          {errors.message && (
            <span id="message-error" className={styles.error} role="alert">
              <AlertCircle size={14} aria-hidden="true" /> {errors.message.message}
            </span>
          )}
        </div>

        <div className={`${styles.field} ${styles.full} ${styles.checkboxField}`}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('acceptTerms')} />
            <span>
              Estou de acordo com o tratamento dos meus dados conforme a LGPD para receber o
              contato da NovoCode.
            </span>
          </label>
          {errors.acceptTerms && (
            <span className={styles.error} role="alert">
              <AlertCircle size={14} aria-hidden="true" /> {errors.acceptTerms.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.submitRow}>
        <Button type="submit" size="lg" disabled={isSubmitting} iconLeft={isSubmitting ? <Loader2 size={18} className="spin" /> : <Send size={18} />}>
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
        <p className={styles.note}>
          Ao enviar, abriremos o WhatsApp com a mensagem formatada.
        </p>
      </div>

      {status === 'success' && (
        <div className={`${styles.banner} ${styles.success}`} role="status">
          <CheckCircle2 size={18} aria-hidden="true" />
          Pronto! Sua mensagem foi enviada. Em breve retornaremos o contato.
        </div>
      )}

      {status === 'error' && (
        <div className={`${styles.banner} ${styles.errorBanner}`} role="alert">
          <AlertCircle size={18} aria-hidden="true" />
          {errorMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;