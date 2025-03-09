import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
 name: Yup.string().required("Name is required"),
 email: Yup.string().email("Invalid email").required("Email is required"),
 message: Yup.string().required("Message is required"),
 honeypot: Yup.string().max(0, "Spam detected"),
});
