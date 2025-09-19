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

    // Create transporter using port 465 (SSL)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST?.trim(), // "securemail.webnames.ca"
      port: 465,                             // SSL
      secure: true,                          // true for SSL
      auth: {
        user: process.env.EMAIL_USER?.trim(),
        pass: process.env.EMAIL_PASS?.trim(),
      },
      tls: {
        rejectUnauthorized: false,           // allow self-signed certs
      },
      logger: true,
      debug: true,
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER?.trim(),
      subject: `New Form Submission${source ? ` - ${source}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSource: ${
        source || "unknown"
      }`,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Server error, check console" },
      { status: 500 }
    );
  }
}