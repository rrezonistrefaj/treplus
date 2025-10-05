'use client';

import React, { useState } from 'react';
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
        <div className="max-w-[467px] w-full">
            {/* Get in touch section */}
            <div className="mb-29">
              <div className="flex items-center mb-5">
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
              </div>
              <p className="text-base font-medium text-[#474D57] mb-4 leading-[20px]">
                {contactData.header.description[0]}
              </p>
              <p className="text-base font-medium text-[#474D57] leading-[20px]">
                {contactData.header.description[1]}
              </p>
            </div>

            {/* Trusted by Leaders section */}
            <div>
              <h2 className=" text-5xl font-semibold text-[#22252A] leading-[110%] mb-5 font-unbounded">
                {contactData.trustedSection.title}
              </h2>
              <p className="text-base font-medium text-[#474D57] mb-20.5 leading-[20px] !max-w-[467px]">
                {contactData.trustedSection.description}
              </p>
              
              {/* Company logos grid */}
              <div className="grid grid-cols-2 gap-6">
                {contactData.trustedCompanies.map((company, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={company.icon}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[#383B41] font-bold text-xl">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Right Column - Contact Form */}
        <div className="rounded-[25px] p-12.5 bg-[#F4F4F4] border border-[#E4E7E9] flex-1 max-w-[725px] w-full">
            <form onSubmit={handleSubmit}>
              {/* Full Name and Profile Link in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                {contactData.form.fields.slice(0, 2).map((field) => (
                  <div key={field.id}>
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
                  </div>
                ))}
              </div>

              {/* Remaining fields */}
              {contactData.form.fields.slice(2).map((field) => (
                <div key={field.id} className={field.id === 'query' ? "mb-8" : "mb-10"}>
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
                </div>
              ))}

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-3 mb-17.5">
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
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full bg-[#FF5F1F] hover:bg-orange-600 text-white font-medium py-5 px-6 rounded-[10px] transition-colors duration-200 font-sans text-lg"
              >
                {contactData.form.submitButton.text}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
