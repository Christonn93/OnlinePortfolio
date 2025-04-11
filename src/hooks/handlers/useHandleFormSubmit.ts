import { useState } from "react";
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



export const useHandleFormSubmit = ({ setIsOpen }: UseHandleFormSubmitProps) => {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
  if (values.honeypot) return; // Block spam if honeypot has value
  setIsSubmitting(true);

  try {
   

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
