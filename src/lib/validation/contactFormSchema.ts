// Contact form validation schema
// Can be easily replaced with Strapi validation when migrating

import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .trim(),
  profileLink: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase()
    .trim(),
  phoneNumber: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Please enter a valid phone number"
    )
    .optional()
    .or(z.literal("")),
  query: z
    .string()
    .min(10, "Query must be at least 10 characters")
    .max(2000, "Query must be less than 2000 characters")
    .trim(),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

