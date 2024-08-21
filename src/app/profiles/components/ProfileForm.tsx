import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../shared/components/Input';

interface ProfileFormProps {
  onSubmit: (data: any) => void;
  initialValues?: any;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        {...register('name', { required: 'Name is required' })}
        errorMessage={errors.name?.message as string | undefined}
      />
      <Input
        label="Bio"
        {...register('bio')}
        errorMessage={errors.bio?.message as string | undefined}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;