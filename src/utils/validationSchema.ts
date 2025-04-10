import { useTranslation } from 'react-i18next'; 
import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required(() => useTranslation().t('form.fullName') + " " + useTranslation().t('form.required')),
  email: Yup.string().email(() => useTranslation().t('form.invalidEmail')).required(() => useTranslation().t('form.emailRequired')),
  message: Yup.string().required(() => useTranslation().t('form.messageRequired')),
  honeypot: Yup.string().max(0, () => useTranslation().t('form.spamDetected')),
});

export const clientQuestionValidationSchema = (t: (arg0: string) => string | Record<PropertyKey, unknown> | ((params: { regex: RegExp; } & Yup.MessageParams) => unknown) | undefined) => Yup.object({
  fullName: Yup.string().required(t("form.formErrors.required")),
  email: Yup.string().email(t("form.formErrors.invalidEmail")).required(t("form.formErrors.emailRequired")),
  phone: Yup.string().required(t("form.formErrors.required")),
  organization: Yup.string().required(t("form.formErrors.required")),
  currentWebsite: Yup.string().url(t("form.formErrors.invalidURL")).optional(),
  description: Yup.string().required(t("form.formErrors.required")),
  goal: Yup.string().required(t("form.formErrors.required")),
  mainAction: Yup.string().required(t("form.formErrors.required")),
  functionality: Yup.string().optional(),
  designInspo: Yup.string().optional(),
  deadline: Yup.string().required(t("form.formErrors.required")),
  budget: Yup.string().optional(),
  notes: Yup.string().optional(),
  honeypot: Yup.string().max(0),
});