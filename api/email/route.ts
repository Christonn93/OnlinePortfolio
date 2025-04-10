import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const sendEmail = async (html: string, subject: string, to: string[]) => {
  try {
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: "Acme <onboarding@resend.dev>",
        to,
        subject,
        html,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Email sending failed:", error.response?.data || error.message);
    throw new Error("Failed to send email");
  }
};

// Main handler function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("Request method:", req.method);
  console.log("Request body:", req.body);

  if (req.method === "POST") {
    const { htmlContent, subject, recipients } = req.body;

    if (!htmlContent || !subject || !recipients) {
      console.error("Missing required parameters:", { htmlContent, subject, recipients });
      return res.status(400).json({ error: "Missing required parameters" });
    }

    try {
      const response = await sendEmail(htmlContent, subject, recipients);
      return res.status(200).json(response);
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(500).json({ error: errorMessage });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}