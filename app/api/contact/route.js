import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL_USER,
      to: process.env.CONTACT_EMAIL_USER,
      replyTo: email,
      subject: `Portfolio contact form: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error.message);
    return Response.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
