'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { contactData } from './contactData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    profileLink: '',
    email: '',
    phoneNumber: '',
    query: '',
    privacyPolicy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      privacyPolicy: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };


    return (
      <div className="max-w-[1260px] mx-auto px-4 md:px-0 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Column - Information Section */}
        <motion.div 
          className="max-w-[467px] w-full"
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
                  Get in <span className="relative inline-flex items-center">
                    touch
                    <div className="ml-2 w-12 h-12 relative">
                      <Image
                        src="/orangeIcon.svg"
                        alt="Orange icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </span> with our team
                </h1>
              </motion.div>
              <motion.p 
                className="text-base font-medium text-[#474D57] mb-4 leading-[20px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {contactData.header.description[0]}
              </motion.p>
              <motion.p 
                className="text-base font-medium text-[#474D57] leading-[20px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {contactData.header.description[1]}
              </motion.p>
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
                {contactData.trustedSection.title}
              </motion.h2>
              <motion.p 
                className="text-base font-medium text-[#474D57] mb-20.5 leading-[20px] !max-w-[467px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {contactData.trustedSection.description}
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

        {/* Right Column - Contact Form */}
        <motion.div 
          className="rounded-[25px] p-12.5 bg-[#F4F4F4] border border-[#E4E7E9] flex-1 max-w-[725px] w-full"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 }
                  }
                }}
              >
                {contactData.form.fields.slice(0, 2).map((field) => (
                  <motion.div 
                    key={field.id}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <label htmlFor={field.id} className="block text-base font-medium text-[#474D57] leading-[20px] mb-2.5 ml-[3px]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-5 py-[21px] bg-white border border-[#E4E7E9] rounded-[10px] text-base leading-[20px] font-light text-[#474D57] placeholder-[#474D57]"
                      required={field.required}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Remaining fields */}
              {contactData.form.fields.slice(2).map((field) => (
                <motion.div 
                  key={field.id} 
                  className={field.id === 'query' ? "mb-8" : "mb-10"}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-800 mb-2.5 font-sans ml-[3px]">
                      {field.label}
                    </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      className="w-full px-5 py-[21px] bg-white border border-[#E4E7E9] rounded-[10px] text-base leading-[20px] font-light text-[#474D57] placeholder-[#474D57]"
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-5 py-[21px] bg-white border border-[#E4E7E9] rounded-[10px] text-base leading-[20px] font-light text-[#474D57] placeholder-[#474D57]"
                      required={field.required}
                    />
                  )}
                </motion.div>
              ))}

              {/* Privacy Policy Checkbox */}
              <motion.div 
                className="flex items-center space-x-3 mb-17.5"
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
                  className="w-4 h-4 text-orange-500 bg-white border-orange-500 rounded"
                  required
                />
                <label htmlFor="privacyPolicy" className="text-sm text-gray-700 font-sans leading-4">
                  {contactData.form.privacyPolicy.text}{' '}
                  <a href={contactData.form.privacyPolicy.linkUrl} className="text-gray-800 font-bold hover:text-gray-900">
                    {contactData.form.privacyPolicy.linkText}
                  </a>
                  .
                </label>
              </motion.div>

              {/* Send Message Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#FF5F1F] hover:bg-orange-600 text-white font-medium py-5 px-6 rounded-[10px] transition-transform will-change-transform hover:-translate-y-[1px] font-sans text-lg"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {contactData.form.submitButton.text}
              </motion.button>
            </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
