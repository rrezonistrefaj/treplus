// API route for contact form submission
// Can be easily replaced with Strapi API when migrating

import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contactFormSchema";
import { sendContactEmail } from "@/lib/services/emailService";

/**
 * POST /api/contact
 * Handles contact form submissions
 * 
 * For Strapi migration: Replace with Strapi API endpoint
 * Example: POST to ${STRAPI_URL}/api/contact-submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Send email notification
    await sendContactEmail({
      fullName: formData.fullName,
      email: formData.email,
      profileLink: formData.profileLink || undefined,
      phoneNumber: formData.phoneNumber || undefined,
      query: formData.query,
    });

    // TODO: When migrating to Strapi, also save to Strapi:
    // await fetch(`${process.env.STRAPI_URL}/api/contact-submissions`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       fullName: formData.fullName,
    //       email: formData.email,
    //       profileLink: formData.profileLink,
    //       phoneNumber: formData.phoneNumber,
    //       query: formData.query,
    //     }
    //   })
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Don't expose internal errors to client
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

