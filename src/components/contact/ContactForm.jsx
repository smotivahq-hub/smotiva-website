// src/components/contact/ContactForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

// Data for dropdowns
const projectTypes = [
  'Brand Identity & Design', 
  'Digital Solutions', 
  'Content & Media', 
  'Training & Consultancy'
];
const budgetRanges = [
  'Under $5,000', 
  '$5,000 - $15,000', 
  '$15,000 - $50,000', 
  'Over $50,000'
];

// Framer Motion Variants for inputs
const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  // Placeholder for submission logic
  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Thank you! Your message has been sent.");
    // In a real app, you would reset the form here
  };

  const getErrorMessage = (field) => {
    if (errors[field]) {
      return (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-sm text-red-500 font-body mt-1"
        >
          {errors[field].message}
        </motion.p>
      );
    }
    return null;
  };

  // List of input fields for sequencing animation
  const formFields = [
    { name: 'fullName', placeholder: 'Full Name', required: 'Full Name is required', type: 'text', span: 'sm:col-span-2' },
    { name: 'emailAddress', placeholder: 'Email Address', required: 'Email Address is required', type: 'email', span: 'sm:col-span-2', pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } },
    { name: 'projectType', placeholder: 'Project Type', required: 'Please select a Project Type', type: 'select', options: projectTypes, span: 'sm:col-span-2' },
    { name: 'budgetRange', placeholder: 'Budget Range', required: 'Please select your Budget Range', type: 'select', options: budgetRanges, span: 'sm:col-span-2' },
    { name: 'message', placeholder: 'Message', required: 'Message is required', type: 'textarea', span: 'sm:col-span-4' },
  ];
  
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      className="py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-extrabold text-primary-dark mb-2">
            Send Us a Message
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            Tell us about your project or inquiry—we'll respond as soon as possible
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-4 gap-6">
          
          {formFields.map((field, index) => (
            <motion.div key={field.name} variants={inputVariants} custom={index} className={field.span}>
              
              {field.type === 'select' ? (
                <>
                  <select
                    {...register(field.name, { required: field.required })}
                    className={`w-full p-4 font-body border-2 rounded-lg text-neutral-dark focus:border-accent-teal focus:ring-accent-teal transition duration-200 
                      ${errors[field.name] ? 'border-red-500' : 'border-neutral-gray/30'}
                    `}
                    defaultValue="" // Forces the placeholder option to be selected initially
                  >
                    <option value="" disabled>{field.placeholder}</option>
                    {field.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {getErrorMessage(field.name)}
                </>
              ) : field.type === 'textarea' ? (
                <>
                  <textarea
                    {...register(field.name, { required: field.required, pattern: field.pattern })}
                    placeholder={field.placeholder}
                    rows="6"
                    className={`w-full p-4 font-body border-2 rounded-lg text-neutral-dark focus:border-accent-teal focus:ring-accent-teal transition duration-200 
                      ${errors[field.name] ? 'border-red-500' : 'border-neutral-gray/30'}
                    `}
                  />
                  {getErrorMessage(field.name)}
                </>
              ) : (
                <>
                  <input
                    {...register(field.name, { required: field.required, pattern: field.pattern })}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full p-4 font-body border-2 rounded-lg text-neutral-dark focus:border-accent-teal focus:ring-accent-teal transition duration-200 
                      ${errors[field.name] ? 'border-red-500' : 'border-neutral-gray/30'}
                    `}
                  />
                  {getErrorMessage(field.name)}
                </>
              )}
            </motion.div>
          ))}
          
          {/* Submit Button (Full width on mobile, spans 4 columns on desktop) */}
          <motion.div variants={inputVariants} custom={formFields.length} className="sm:col-span-4 flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary-dark hover:bg-secondary-dark text-white font-heading font-bold py-3 px-12 rounded-lg transition duration-300 shadow-xl text-lg 
                ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:-translate-y-0.5'}
              `}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </motion.div>

        </form>
      </div>
    </motion.section>
  );
}