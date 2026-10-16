import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY || "";
export const resend = new Resend(apiKey);

export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Hubani Limited <info@hubani.org>";
export const INFO_EMAIL =
  process.env.INFO_NOTIFICATION_EMAIL || "info@hubani.org";

interface ContactInquiryData {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: string;
  subject: string;
  message: string;
}

/**
 * Sends notification email to Hubani Corporate team.
 */
export async function sendInternalInquiryNotification(data: ContactInquiryData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Corporate Inquiry</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #ffffff; color: #111827; margin: 0; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 4px; padding: 24px;">
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 20px;">
            <span style="display: inline-block; background-color: #000000; color: #ffffff; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 3px;">
              HUBANI CORPORATE INQUIRY
            </span>
            <h2 style="font-size: 18px; font-weight: 600; margin: 12px 0 4px 0; color: #000000;">
              ${data.subject}
            </h2>
            <p style="font-size: 13px; color: #6b7280; margin: 0;">
              Inquiry Type: <strong>${data.inquiryType}</strong> · Received on ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })} EAT
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #6b7280; width: 140px; font-weight: 600;">Contact Name:</td>
              <td style="padding: 6px 0; color: #111827; font-weight: 600;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Email Address:</td>
              <td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #000000;">${data.email}</a></td>
            </tr>
            ${
              data.phone
                ? `
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 6px 0; color: #111827;">${data.phone}</td>
            </tr>`
                : ""
            }
            ${
              data.organization
                ? `
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Company / Organization:</td>
              <td style="padding: 6px 0; color: #111827;">${data.organization}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 16px; margin-bottom: 20px;">
            <h4 style="font-size: 13px; font-weight: 600; margin: 0 0 8px 0; color: #111827;">
              Message Content:
            </h4>
            <p style="font-size: 13px; color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">
              ${data.message}
            </p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">
              You can reply directly to this email to contact <strong>${data.fullName}</strong> (${data.email}).
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  return resend.emails.send({
    from: FROM_EMAIL,
    to: INFO_EMAIL,
    replyTo: data.email,
    subject: `[Corporate Inquiry: ${data.inquiryType}] ${data.subject} - ${data.fullName}`,
    html,
  });
}

/**
 * Sends confirmation email to the person who submitted the inquiry.
 */
export async function sendInquirerConfirmationEmail(
  data: Pick<ContactInquiryData, "fullName" | "email" | "subject" | "inquiryType">
) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Inquiry Received - Hubani Limited</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #ffffff; color: #111827; margin: 0; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 4px; padding: 24px;">
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 20px;">
            <span style="display: inline-block; background-color: #000000; color: #ffffff; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 3px;">
              HUBANI LIMITED
            </span>
            <h2 style="font-size: 18px; font-weight: 600; margin: 12px 0 4px 0; color: #000000;">
              We Received Your Inquiry
            </h2>
            <p style="font-size: 13px; color: #6b7280; margin: 0;">
              Regarding: <strong>${data.subject}</strong> (${data.inquiryType})
            </p>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
            Dear ${data.fullName},
          </p>

          <p style="font-size: 13px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
            Thank you for reaching out to Hubani Limited. We have successfully received your inquiry.
          </p>

          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 16px; margin-bottom: 20px; font-size: 13px; line-height: 1.6; color: #4b5563;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #111827;">What happens next:</p>
            <p style="margin: 0;">
              Our corporate secretariat and relevant portfolio leadership review all inbound communications. If your inquiry relates to business partnerships, media synchronization, tournament operations, or general governance, a representative will respond directly.
            </p>
          </div>

          <p style="font-size: 13px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            For career inquiries and applications, please visit our official careers platform at <a href="https://careers.hubani.org" style="color: #000000; font-weight: 600;">careers.hubani.org</a>.
          </p>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #111827;">Hubani Limited · Executive Secretariat</p>
            <p style="margin: 0 0 4px 0;">Mombasa, Kenya · Global Remote Workspaces</p>
            <p style="margin: 0;"><a href="https://hubani.org" style="color: #6b7280;">hubani.org</a> · <a href="mailto:info@hubani.org" style="color: #6b7280;">info@hubani.org</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  return resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: `Inquiry Confirmation: ${data.subject} - Hubani Limited`,
    html,
  });
}
