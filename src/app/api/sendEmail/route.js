// app/api/sendEmail/route.js
import nodemailer from 'nodemailer'

export async function POST(request) {
  const { name, email, subject, message } = await request.json()

  // Configure the transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Feedback from ${name} - ${email}: ${subject}`,
      text: message,
    })

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Failed to send email', error }),
      { status: 500 }
    )
  }
}
