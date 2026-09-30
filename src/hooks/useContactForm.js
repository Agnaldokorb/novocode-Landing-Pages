import { useCallback, useRef } from 'react';
import { createContactService } from '@services/contact/ContactService';

const singletonService = createContactService();

export const useContactForm = () => {
  const serviceRef = useRef(singletonService);

  const submit = useCallback(async (data) => {
    return serviceRef.current.send(data);
  }, []);

  return { submit };
};