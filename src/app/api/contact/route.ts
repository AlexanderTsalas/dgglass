import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { name, email, interest, message } = await req.json()

        // Fetch Global Settings to get recipient email
        const recipientEmail = 'info@dodekanisaglass.gr'

        console.log(`Sending email to ${recipientEmail} from ${email} regarding ${interest}`)
        console.log(`Message: ${message}`)

        // Here you would integrate Nodemailer, Resend, or Payload's email service
        // await payload.sendEmail({ ... })

        return NextResponse.json({ success: true, message: 'Inquiry received' })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 })
    }
}
