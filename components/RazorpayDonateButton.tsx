import React, { useEffect, useRef } from 'react';

const RAZORPAY_PAYMENT_BUTTON_ID = 'pl_TSS247xaY9JNEm';

const RazorpayDonateButton: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form || form.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = RAZORPAY_PAYMENT_BUTTON_ID;
    form.appendChild(script);
  }, []);

  return <form ref={formRef} />;
};

export default RazorpayDonateButton;
