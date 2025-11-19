// Email service - SMTP support
// Can be easily replaced with Strapi email plugin when migrating

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}

interface ContactFormEmailData {
  fullName: string;
  email: string;
  profileLink?: string;
  phoneNumber?: string;
  query: string;
}

/**
 * Send email using SMTP (Nodemailer) or email service (Resend)
 * 
 * For Strapi migration: Replace this with Strapi email plugin
 * Example: await strapi.plugins['email'].services.email.send({ ... })
 */
export async function sendContactEmail(data: ContactFormEmailData): Promise<void> {
  const emailService = process.env.EMAIL_SERVICE || "resend"; // 'resend' | 'smtp' | 'strapi'
  
  // When migrating to Strapi, uncomment this:
  // if (emailService === 'strapi') {
  //   return sendViaStrapi(data);
  // }
  
  if (emailService === "smtp") {
    return sendViaSMTP(data);
  }
  
  // Default: Use Resend (recommended for production)
  return sendViaResend(data);
}

/**
 * Send email via Resend (recommended - modern, reliable)
 */
async function sendViaResend(data: ContactFormEmailData): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  const recipientEmail = process.env.CONTACT_EMAIL || "info@treplus.com";
  const fromEmail = process.env.FROM_EMAIL || "noreply@treplus.com";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: data.email,
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: generateEmailHTML(data),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to send email: ${error.message || response.statusText}`);
  }
}

/**
 * Send email via SMTP (Nodemailer)
 */
async function sendViaSMTP(data: ContactFormEmailData): Promise<void> {
  // Dynamic import to avoid bundling nodemailer in client
  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const recipientEmail = process.env.CONTACT_EMAIL || "info@treplus.com";
  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "noreply@treplus.com";

  await transporter.sendMail({
    from: fromEmail,
    to: recipientEmail,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.fullName}`,
    html: generateEmailHTML(data),
  });
}

/**
 * Generate HTML email template
 */
function generateEmailHTML(data: ContactFormEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF5F1F;">New Contact Form Submission</h2>
        
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
          ${data.phoneNumber ? `<p><strong>Phone:</strong> ${escapeHtml(data.phoneNumber)}</p>` : ""}
          ${data.profileLink ? `<p><strong>Profile Link:</strong> <a href="${escapeHtml(data.profileLink)}" target="_blank">${escapeHtml(data.profileLink)}</a></p>` : ""}
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FF5F1F; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(data.query)}</p>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This email was sent from the contact form on treplus.com
        </p>
      </body>
    </html>
  `;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Future: Send via Strapi email plugin
 * Uncomment when migrating to Strapi
 */
// async function sendViaStrapi(data: ContactFormEmailData): Promise<void> {
//   // This will be implemented when migrating to Strapi
//   // const strapi = await getStrapiInstance();
//   // await strapi.plugins['email'].services.email.send({
//   //   to: process.env.CONTACT_EMAIL,
//   //   from: process.env.FROM_EMAIL,
//   //   replyTo: data.email,
//   //   subject: `New Contact Form Submission from ${data.fullName}`,
//   //   html: generateEmailHTML(data),
//   // });
// }

