import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, source } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter for Webnames.ca SMTP (TLS / port 587)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST?.trim(),       // securemail.webnames.ca
      port: Number(process.env.EMAIL_PORT),       // 587
      secure: process.env.EMAIL_SECURE === "true", // false for 587
      auth: {
        user: process.env.EMAIL_USER?.trim(),
        pass: process.env.EMAIL_PASS?.trim(),
      },
      logger: true,
      debug: true,
    });

    // Send email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // From the form name
      to: process.env.EMAIL_RECEIVER?.trim(),       // Your email
      subject: `New Form Submission${source ? ` - ${source}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSource: ${
        source || "unknown"
      }`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
