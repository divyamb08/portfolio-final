import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { fromEmail, email, subject, message } = await req.json();
  console.log(fromEmail, email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,  // Dynamic sender's email
      to: 'divyambansal2025@u.northwestern.edu',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
