import { useState } from "react";
import { Resend } from "resend";
import { FormikHelpers } from "formik";
import { toast } from "react-toastify";

export interface FormValues {
 name: string;
 email: string;
 message: string;
 honeypot: string;
}

interface UseHandleFormSubmitProps {
 setIsOpen: (open: boolean) => void;
}

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY as string);

export const useHandleFormSubmit = ({ setIsOpen }: UseHandleFormSubmitProps) => {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
  if (values.honeypot) return; // Block spam if honeypot has value
  setIsSubmitting(true);

  try {
   await resend.emails.send({
    from: "no-reply@yourdomain.com", // Replace with your sender email
    to: "projects@christopher-tonnesland.no",
    subject: `New Contact Message from ${values.name}`,
    text: `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
   });

   resetForm();
   toast.success("Thanks for reaching out!");
   setIsOpen(false);
  } catch (error: unknown) {
   alert("Failed to send message. Try again later.");
   console.error(error);
  } finally {
   setIsSubmitting(false);
  }
 };

 return { handleSubmit, isSubmitting };
};
