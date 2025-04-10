import axios from "axios";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  fullName: string;
  phone: string;
  organization: string;
  currentWebsite: string;
  description: string;
  goal: string;
  mainAction: string;
  functionality: string;
  designInspo: string;
  deadline: string;
  budget: string;
  notes: string;
}

interface FormikHelpers {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
}

export const handleQuestionFormSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers) => {
  const RECIPIENT_EMAILS = import.meta.env.VITE_RECIPIENT_EMAILS;

  try {
    // Generate the HTML content dynamically based on the form data
    const htmlContent = `
        <p><strong>Name:</strong> ${values.fullName}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Phone:</strong> ${values.phone}</p>
        <p><strong>Organization:</strong> ${values.organization}</p>
        <p><strong>Website:</strong> ${values.currentWebsite}</p>
        <p><strong>Description:</strong> ${values.description}</p>
        <p><strong>Goal:</strong> ${values.goal}</p>
        <p><strong>Main Action:</strong> ${values.mainAction}</p>
        <p><strong>Functionality:</strong> ${values.functionality}</p>
        <p><strong>Design Inspiration:</strong> ${values.designInspo}</p>
        <p><strong>Deadline:</strong> ${values.deadline}</p>
        <p><strong>Budget:</strong> ${values.budget}</p>
        <p><strong>Notes:</strong> ${values.notes}</p>
      `;

    const subject = `Nytt klient spørreskjema fra ${values.fullName}`;
    const recipients = RECIPIENT_EMAILS;

    // Send the form data to your Vercel function
    const response = await axios.post("/api/send", {
      htmlContent,
      subject,
      recipients,
    });

    if (response.status === 200) {
      toast.success("Form submitted successfully!");
      resetForm();
    }
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Failed to send form. Please try again later.");
  } finally {
    setSubmitting(false);
  }
};
