import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request) {
   try {
      const body = await request.json();
      const { name, email, message } = body;

      if (!name || !email || !message) {
         return NextResponse.json({
            success: false,
            msg: "Missing required fields ❌️"
         });
      }

      // Initialize Twilio client
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
      const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER;

      const client = twilio(accountSid, authToken);

      // ✅ Send SMS through Twilio
      await client.messages.create({
         body: `📩 New Message from Portfolio:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`,
         from: twilioPhoneNumber,
         to: yourPhoneNumber
      });

      return NextResponse.json({
         success: true,
         msg: "Message sent successfully ✅️"
      });
   } catch (error) {
      console.error("Twilio Error:", error);
      return NextResponse.json({
         success: false,
         msg: `Server error: ${error.message || "Unknown error"} ❌️`
      });
   }
}

export async function GET() {
   return NextResponse.json({
      success: true,
      msg: "Aman Portfolio API is running 🚀"
   });
}
