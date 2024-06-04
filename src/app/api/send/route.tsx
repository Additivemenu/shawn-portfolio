// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL as string;

type EmailRequestBody = {
  email: string;
  subject: string;
  message: string;
};

// use resend to send a react-written email
// ! this is next.js route handler
export async function POST(req: NextRequest, res: NextResponse) {
  // const { body } = await req.json();
  // const { email, subject, message } = body;
  const { email, subject, message } = await req.json();
  // console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail, // my email
      to: [fromEmail, email], // visitor's email
      subject: subject,
      react: (
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </div>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
