'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { contactData } from './contactData';
import { useTranslations } from 'next-intl';
import { contactFormSchema, type ContactFormData } from '@/lib/validation/contactFormSchema';
import { z } from 'zod';

interface FormErrors {
  [key: string]: string | undefined;
}

const ContactSection = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    profileLink: '',
    email: '',
    phoneNumber: '',
    query: '',
    privacyPolicy: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Get form field structure from data file, labels/placeholders from translations
  const formFields = contactData.form.fields.map((field) => ({
    ...field,
    label: t(`form.fields.${field.id}.label`),
    placeholder: t(`form.fields.${field.id}.placeholder`),
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    // Clear error for this field when user checks/unchecks
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: FormErrors = {};
        error.issues.forEach((err) => {
          const fieldName = err.path[0] as string;
          fieldErrors[fieldName] = err.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setSubmitMessage('');

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage(t('form.errors.validation'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || t('form.errors.submission'));
      }

      // Success
      setSubmitStatus('success');
      setSubmitMessage(data.message || t('form.success'));
      
      // Reset form
      setFormData({
        fullName: '',
        profileLink: '',
        email: '',
        phoneNumber: '',
        query: '',
        privacyPolicy: false
      });
      setErrors({});

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error 
          ? error.message 
          : t('form.errors.submission')
      );
    } finally {
      setIsSubmitting(false);
    }
  };


    return (
      <div className="max-w-[1260px] mx-auto px-0 lg:px-4 py-12 md:py-16 lg:py-20 overflow-x-clip">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
        {/* Left Column - Information Section */}
        <motion.div 
          className="max-w-[467px] w-full hidden lg:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
            {/* Get in touch section */}
            <motion.div 
              className="mb-29"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div 
                className="flex items-center mb-5"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-5xl font-semibold text-[#22252A] leading-[110%] font-unbounded">
                  {t("header.title")}
                </h1>
              </motion.div>
              {t.raw("header.description").map((desc: string, idx: number) => (
              <motion.p 
                  key={idx}
                  className={idx === 0 ? "text-base font-medium text-[#474D57] mb-4 leading-[20px]" : "text-base font-medium text-[#474D57] leading-[20px]"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                  {desc}
              </motion.p>
              ))}
            </motion.div>

            {/* Trusted by Leaders section */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.h2 
                className=" text-5xl font-semibold text-[#22252A] leading-[110%] mb-5 font-unbounded"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {t("trustedSection.title")}
              </motion.h2>
              <motion.p 
                className="text-base font-medium text-[#474D57] mb-20.5 leading-[20px] !max-w-[467px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {t("trustedSection.description")}
              </motion.p>
              
              {/* Company logos grid */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 }
                  }
                }}
              >
                {contactData.trustedCompanies.map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="w-8 h-8 relative">
                      <Image
                        src={company.icon}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[#383B41] font-bold text-xl">{company.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        {/* Mobile - Get in touch header (only visible on mobile) */}
        <motion.div 
          className="w-full lg:hidden px-[46px] mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div 
            className="flex items-center justify-center mb-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-[28px] sm:text-3xl font-semibold text-[#22252A] leading-[110%] tracking-[0%] font-unbounded">
              {t("header.title")}
            </h1>
          </motion.div>
          <motion.p 
            className="text-base font-regular text-[#474D57] leading-[20px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t.raw("header.description")[0]}
          </motion.p>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div 
          className="rounded-none lg:rounded-[25px] -mx-4 lg:mx-0 px-0 lg:px-12.5 py-8 lg:py-12.5 bg-[#F4F4F4] border-t border-b lg:border border-[#E4E7E9] flex-1 max-w-full lg:max-w-[725px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.5, 
                ease: "easeOut",
                staggerChildren: 0.08 
              }
            }
          }}
        >
            <motion.form 
              onSubmit={handleSubmit}
              className="px-4 lg:px-0"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
            >
              {/* Full Name and Profile Link in a row */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-6 md:mb-10"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 }
                  }
                }}
              >
                {formFields.slice(0, 2).map((field) => (
                  <motion.div 
                    key={field.id}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <label htmlFor={field.id} className="block text-sm md:text-base font-medium text-[#474D57] leading-[20px] mb-2 md:mb-2.5 ml-[3px]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      value={formData[field.name as keyof ContactFormData] as string}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`w-full px-4 md:px-5 py-4 md:py-[21px] bg-white border rounded-[10px] text-sm md:text-base leading-[20px] font-light text-[#474D57] placeholder-[#474D57] ${
                        errors[field.name] 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-[#E4E7E9] focus:border-[#FF5F1F] focus:ring-[#FF5F1F]'
                      } focus:outline-none focus:ring-1`}
                      required={field.required}
                      disabled={isSubmitting}
                      aria-invalid={errors[field.name] ? 'true' : 'false'}
                      aria-describedby={errors[field.name] ? `${field.id}-error` : undefined}
                    />
                    {errors[field.name] && (
                      <p id={`${field.id}-error`} className="mt-1 text-sm text-red-600" role="alert">
                        {errors[field.name]}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Remaining fields */}
              {formFields.slice(2).map((field) => (
                <motion.div 
                  key={field.id} 
                  className={field.id === 'query' ? "mb-6 md:mb-8" : "mb-6 md:mb-10"}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <label htmlFor={field.id} className="block text-sm md:text-base font-medium text-[#474D57] mb-2 md:mb-2.5 font-sans ml-[3px]">
                      {field.label}
                    </label>
                  {field.type === 'textarea' ? (
                    <>
                      <textarea
                        id={field.id}
                        name={field.name}
                        value={formData[field.name as keyof ContactFormData] as string}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        rows={field.rows}
                        className={`w-full px-4 md:px-5 py-4 md:py-[21px] bg-white border rounded-[10px] text-sm md:text-base leading-[20px] font-light text-[#474D57] placeholder-[#474D57] ${
                          errors[field.name] 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-[#E4E7E9] focus:border-[#FF5F1F] focus:ring-[#FF5F1F]'
                        } focus:outline-none focus:ring-1`}
                        required={field.required}
                        disabled={isSubmitting}
                        aria-invalid={errors[field.name] ? 'true' : 'false'}
                        aria-describedby={errors[field.name] ? `${field.id}-error` : undefined}
                      />
                      {errors[field.name] && (
                        <p id={`${field.id}-error`} className="mt-1 text-sm text-red-600" role="alert">
                          {errors[field.name]}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name as keyof ContactFormData] as string}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className={`w-full px-4 md:px-5 py-4 md:py-[21px] bg-white border rounded-[10px] text-sm md:text-base leading-[20px] font-light text-[#474D57] placeholder-[#474D57] ${
                          errors[field.name] 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-[#E4E7E9] focus:border-[#FF5F1F] focus:ring-[#FF5F1F]'
                        } focus:outline-none focus:ring-1`}
                        required={field.required}
                        disabled={isSubmitting}
                        aria-invalid={errors[field.name] ? 'true' : 'false'}
                        aria-describedby={errors[field.name] ? `${field.id}-error` : undefined}
                      />
                      {errors[field.name] && (
                        <p id={`${field.id}-error`} className="mt-1 text-sm text-red-600" role="alert">
                          {errors[field.name]}
                        </p>
                      )}
                    </>
                  )}
                </motion.div>
              ))}

              {/* Privacy Policy Checkbox */}
              <motion.div 
                className="flex items-start space-x-2 md:space-x-3 mb-12 md:mb-17.5"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleCheckboxChange}
                  className={`w-4 h-4 mt-0.5 text-orange-500 bg-white border rounded flex-shrink-0 ${
                    errors.privacyPolicy 
                      ? 'border-red-500' 
                      : 'border-orange-500'
                  }`}
                  required
                  disabled={isSubmitting}
                  aria-invalid={errors.privacyPolicy ? 'true' : 'false'}
                  aria-describedby={errors.privacyPolicy ? 'privacyPolicy-error' : undefined}
                />
                <div className="flex-1">
                  <label htmlFor="privacyPolicy" className="text-xs md:text-sm text-gray-700 font-sans leading-relaxed md:leading-4">
                    {t("form.privacyPolicy.text")}{' '}
                    <a href={contactData.form.privacyPolicy.linkUrl} className="text-gray-800 font-bold hover:text-gray-900">
                      {t("form.privacyPolicy.linkText")}
                    </a>
                    .
                  </label>
                  {errors.privacyPolicy && (
                    <p id="privacyPolicy-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.privacyPolicy}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Status Messages */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-4 rounded-[10px] ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  <p className="text-sm md:text-base font-medium">{submitMessage}</p>
                </motion.div>
              )}

              {/* Send Message Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-medium py-4 md:py-5 px-6 rounded-[10px] transition-all will-change-transform font-sans text-base md:text-lg ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-[#FF5F1F] hover:bg-orange-600 text-white hover:-translate-y-[1px]'
                }`}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? t("form.submitButton.submitting") : t("form.submitButton.text")}
              </motion.button>
            </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
