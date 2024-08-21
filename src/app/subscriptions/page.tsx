import React from 'react';
import SubscriptionForm from './components/SubscriptionForm';

const SubscriptionPage: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log('Subscription updated', data);
  };

  return (
    <div>
      <SubscriptionForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SubscriptionPage;


