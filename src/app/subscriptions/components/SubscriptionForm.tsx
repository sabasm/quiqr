import React from 'react';
import { useForm } from 'react-hook-form';
import { InputProps } from '../../../types/InputProps';

interface SubscriptionFormProps {
  onSubmit: (data: any) => void;
  initialValues?: any;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputProps
        error={errors.plan}
        onChange={register('plan').onChange}
        onBlur={register('plan').onBlur}
        ref={register('plan').ref}
        name="plan"
        label="Plan"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubscriptionForm;


