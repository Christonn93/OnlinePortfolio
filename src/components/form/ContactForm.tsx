import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/utils/validationSchema";
import { useHandleFormSubmit } from "@/hooks/handlers/useHandleFormSubmit";
import { contactFormInitialValues } from "@/utils/formInitialValues";

interface ContactFormProps {
 setIsOpen: (open: boolean) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ setIsOpen }) => {
 const { handleSubmit, isSubmitting } = useHandleFormSubmit({ setIsOpen });

 return (
  <Formik initialValues={contactFormInitialValues} validationSchema={contactFormSchema} onSubmit={handleSubmit}>
   {({ isValid }) => (
    <Form className="space-y-4">
     <Field type="text" name="honeypot" className="hidden" />
     <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
      <Field name="name" type="text" placeholder="Your name" className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" />
      <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
     </div>
     <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
      <Field
       name="email"
       type="email"
       placeholder="Your email"
       className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
      />
      <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
     </div>
     <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
      <Field
       name="message"
       as="textarea"
       placeholder="Your message"
       rows={4}
       className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
      />
      <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
     </div>
     <div className="flex justify-end gap-2">
      <Button type="submit" disabled={!isValid || isSubmitting} className="bg-emerald-500 hover:bg-emerald-600 text-white disabled:bg-gray-400">
       {isSubmitting ? "Sending..." : "Send"}
      </Button>
      <Button variant="outline" onClick={() => setIsOpen(false)}>
       Cancel
      </Button>
     </div>
    </Form>
   )}
  </Formik>
 );
};
