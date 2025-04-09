import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  organization: Yup.string().required("Required"),
  currentWebsite: Yup.string().url("Invalid URL").optional(),
  description: Yup.string().required("Required"),
  goal: Yup.string().required("Required"),
  mainAction: Yup.string().required("Required"),
  functionality: Yup.string().optional(),
  designInspo: Yup.string().optional(),
  deadline: Yup.string().required("Required"),
  budget: Yup.string().optional(),
  notes: Yup.string().optional(),
  honeypot: Yup.string().max(0), // must remain empty
});

const ClientQuestionForm = () => {
  return (
    <div className="p-10 ">
      <div className="flex flex-col items-center justify-between mb-6 mt-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-4">Client Questionnaire</h1>
          <p>Please fill out the form below to help us understand your needs better.</p>
          <p>All fields are required unless otherwise noted.</p>
          <p>We will get back to you within 1-2 business days.</p>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            organization: "",
            currentWebsite: "",
            description: "",
            goal: "",
            mainAction: "",
            functionality: "",
            designInspo: "",
            deadline: "",
            budget: "",
            notes: "",
            honeypot: "",
          }}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {() => (
            <Form method="POST" action={import.meta.env.VITE_PUBLIC_FORM_ACTION_URL} className="space-y-4">
              <Field type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label>Full Name</label>
                  <Field name="fullName" as={Input} />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>Email</label>
                  <Field name="email" as={Input} />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>Phone Number</label>
                  <Field name="phone" as={Input} />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>Organization / Business Name</label>
                  <Field name="organization" as={Input} />
                  <ErrorMessage name="organization" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label>Current Website (if any)</label>
                  <Field name="currentWebsite" as={Input} />
                  <ErrorMessage name="currentWebsite" component="div" className="text-red-500 text-sm" />
                </div>
              </div>
              <div>
                <label>Briefly describe your business/organization</label>
                <Field name="description" as={Textarea} rows={4} />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label>Main goal for your website</label>
                <Field name="goal" as={Textarea} rows={3} />
                <ErrorMessage name="goal" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label>What’s the one key action you want visitors to take?</label>
                <Field name="mainAction" as={Input} />
                <ErrorMessage name="mainAction" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label>Do you need any special functionality?</label>
                <Field name="functionality" as={Textarea} rows={3} />
              </div>
              <div>
                <label>Any websites you like/dislike for design?</label>
                <Field name="designInspo" as={Textarea} rows={3} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label>Ideal Launch Date</label>
                  <Field name="deadline" type="date" as={Input} />
                  <ErrorMessage name="deadline" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>Budget Range (Optional)</label>
                  <Field name="budget" as={Input} />
                </div>
              </div>
              <div>
                <label>Additional Notes</label>
                <Field name="notes" as={Textarea} rows={3} />
              </div>
              <Button type="submit" className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ClientQuestionForm;
