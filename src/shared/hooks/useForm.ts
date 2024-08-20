import { useState, FormEvent } from 'react';

export const useForm = <T extends Record<string, any>>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, resetForm };
};


