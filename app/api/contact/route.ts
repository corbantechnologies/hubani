import { NextRequest, NextResponse } from "next/server";
import {
  sendInternalInquiryNotification,
  sendInquirerConfirmationEmail,
} from "@/lib/resend";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      organization,
      inquiryType,
      subject,
      message,
    } = body;

    if (!fullName || !email || !inquiryType || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Inquiry Type, Subject, Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 1. Send internal notification email to Hubani team
    await sendInternalInquiryNotification({
      fullName,
      email,
      phone,
      organization,
      inquiryType,
      subject,
      message,
    });

    // 2. Send confirmation receipt to the inquirer
    await sendInquirerConfirmationEmail({
      fullName,
      email,
      subject,
      inquiryType,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been successfully transmitted to Hubani Limited. A confirmation email has been sent to your address.",
    });
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    const errMessage =
      error instanceof Error ? error.message : "Unable to submit inquiry.";
    return NextResponse.json(
      { error: `Inquiry transmission error: ${errMessage}` },
      { status: 500 }
    );
  }
}
