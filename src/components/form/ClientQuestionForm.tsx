import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { clientQuestionValidationSchema } from "@/utils/validationSchema";
import { ClientQuestionFormInitialValues } from "@/utils/formInitialValues";
import { handleQuestionFormSubmit } from "@/utils/handleQuestionFormSubmit";
import WorkMelodics from "../WorkMethodics";

const ClientQuestionForm = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10">
      <div className="flex flex-col justify-between mb-6 mt-6 mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-4">{t("form.clientQuestionnaire")}</h1>
          <p>{t("form.instructions")}</p>

          <WorkMelodics />
        </div>

        <Formik initialValues={ClientQuestionFormInitialValues} validationSchema={clientQuestionValidationSchema(t)} onSubmit={handleQuestionFormSubmit}>
          {({ touched, errors, isValid }) => (
            <Form method="POST" className="space-y-4">
              <Field type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label>{t("form.fullName")}</label>
                  <Field name="fullName" as={Input} className={`${touched.fullName && errors.fullName ? "border-red-500" : ""}`} />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>{t("form.email")}</label>
                  <Field name="email" as={Input} className={`${touched.email && errors.email ? "border-red-500" : ""}`} />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>{t("form.phone")}</label>
                  <Field name="phone" as={Input} className={`${touched.phone && errors.phone ? "border-red-500" : ""}`} />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>{t("form.organization")}</label>
                  <Field name="organization" as={Input} className={`${touched.organization && errors.organization ? "border-red-500" : ""}`} />
                  <ErrorMessage name="organization" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label>{t("form.currentWebsite")}</label>
                  <Field name="currentWebsite" as={Input} className={`${touched.currentWebsite && errors.currentWebsite ? "border-red-500" : ""}`} />
                  <ErrorMessage name="currentWebsite" component="div" className="text-red-500 text-sm" />
                </div>
              </div>
              <div>
                <label>{t("form.description")}</label>
                <Field name="description" as={Textarea} rows={4} className={`${touched.description && errors.description ? "border-red-500" : ""}`} />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label>{t("form.goal")}</label>
                <Field name="goal" as={Textarea} rows={3} className={`${touched.goal && errors.goal ? "border-red-500" : ""}`} />
                <ErrorMessage name="goal" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label>{t("form.mainAction")}</label>
                <Field name="mainAction" as={Input} className={`${touched.mainAction && errors.mainAction ? "border-red-500" : ""}`} />
                <ErrorMessage name="mainAction" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label>{t("form.functionality")}</label>
                <Field name="functionality" as={Textarea} rows={3} className={`${touched.functionality && errors.functionality ? "border-red-500" : ""}`} />
              </div>
              <div>
                <label>{t("form.designInspo")}</label>
                <Field name="designInspo" as={Textarea} rows={3} className={`${touched.designInspo && errors.designInspo ? "border-red-500" : ""}`} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label>{t("form.deadline")}</label>
                  <Field name="deadline" type="date" as={Input} className={`${touched.deadline && errors.deadline ? "border-red-500" : ""}`} />
                  <ErrorMessage name="deadline" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label>{t("form.budget")}</label>
                  <Field name="budget" as={Input} className={`${touched.budget && errors.budget ? "border-red-500" : ""}`} />
                </div>
              </div>
              <div>
                <label>{t("form.notes")}</label>
                <Field name="notes" as={Textarea} rows={3} className={`${touched.notes && errors.notes ? "border-red-500" : ""}`} />
              </div>
              <Button type="submit" disabled={!isValid} className={`mt-4 w-full ${!isValid ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600"} text-white font-bold py-2 px-4 rounded`}>
                {t("form.submit")}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ClientQuestionForm;
