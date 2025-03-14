import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  cardNumber: z
    .string()
    .min(1, 'Card number is required')
    .regex(/^[0-9\s]{13,19}$/, 'Invalid card number format'),
  expiry: z
    .string()
    .min(1, 'Expiration date is required')
    .regex(/^(0[1-9]|1[0-2])\s?\/\s?([0-9]{2})$/, 'Expiry should be in MM/YY format'),
  cvc: z
    .string()
    .min(1, 'CVC is required')
    .regex(/^[0-9]{3,4}$/, 'CVC should be 3 or 4 digits'),
  cardholderName: z.string().min(1, 'Cardholder name is required'),
});

type FormValues = z.infer<typeof formSchema>;

const PaymentScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
      cardholderName: '',
    },
  });
  const navigator = useNavigate();
  const onSubmit = async (data: FormValues) => {
    console.log('Form submitted:', data);
    // Add your submission logic here
    
    // Simulate API request
    try {
      // You can add actual API call here
      toast.loading("Purchasing...");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.remove();
      toast.success("Successfully Purchased!");
      navigator('/products')

    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Plan Details */}
      <div className="w-full lg:w-2/5 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <div className='flex items-center gap-4'>
            <button onClick={() => navigator('/products')} className='w-[40px] aspect-square flex items-center justify-center text-[18px] rounded-full bg-zinc-100'><FiArrowLeft /></button>
            <h2 className="text-xl font-bold mb-1">AI Solution</h2>
          </div>
          
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-1">Basic Plan</h3>
            <p className="text-blue-500 text-sm mb-2">Customers' choice</p>
            <p className="mb-6">For small businesses</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold">$15.99</span>
              <span className="text-gray-500">/m</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>20,000 Requests per month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Customize with your company information</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalize tones and responses</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>200 words for a message</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI knowledge assistant</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI Solution mini</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Payment Form */}
      <div className="w-full lg:w-3/5 bg-blue-50 p-8 flex items-center justify-center">
        <div className="w-full max-w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  id="firstName"
                  placeholder="First name"
                  className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.firstName ? 'border-red-500' : ''}`}
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  id="lastName"
                  placeholder="Last name"
                  className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.lastName ? 'border-red-500' : ''}`}
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="youremail@gmail.com"
                className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Payment Method</h3>
              
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Information
                </label>
                <div className="relative">
                  <input
                    id="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.cardNumber ? 'border-red-500' : ''}`}
                    {...register('cardNumber')}
                  />
                  <div className="absolute right-3 top-3 flex space-x-2">
                    <img src="/assets/images/visa.png" alt="Visa" className="h-6" />
                    <img src="/assets/images/master.png" alt="Mastercard" className="h-6" />
                  </div>
                </div>
                {errors.cardNumber && (
                  <p className="mt-1 text-xs text-red-600">{errors.cardNumber.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <input
                    id="expiry"
                    placeholder="MM / YY"
                    className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.expiry ? 'border-red-500' : ''}`}
                    {...register('expiry')}
                  />
                  {errors.expiry && (
                    <p className="mt-1 text-xs text-red-600">{errors.expiry.message}</p>
                  )}
                </div>
                <div>
                  <input
                    id="cvc"
                    placeholder="CVC"
                    className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.cvc ? 'border-red-500' : ''}`}
                    {...register('cvc')}
                  />
                  {errors.cvc && (
                    <p className="mt-1 text-xs text-red-600">{errors.cvc.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                id="cardholderName"
                placeholder="Your full name on card"
                className={`w-full px-3 py-2 text-[14px] border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.cardholderName ? 'border-red-500' : ''}`}
                {...register('cardholderName')}
              />
              {errors.cardholderName && (
                <p className="mt-1 text-xs text-red-600">{errors.cardholderName.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;