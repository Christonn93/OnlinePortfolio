import { useTranslation } from "react-i18next";

const WorkMelodics = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-between mb-6 mt-6">
      <h1 className="text-2xl font-bold mb-4">{t("workMelodics.title")}</h1>
      <p className="mb-6">{t("workMelodics.workingMethod")}</p>
      <div className="mb-6">
        <div className="mb-4">
          <strong>{t("workMelodics.hostingOptions.domeneshop.title")}: </strong>
          <div className="ml-4">{t("workMelodics.hostingOptions.domeneshop.description")}</div>
        </div>
        <div className="mb-4">
          <strong>{t("workMelodics.hostingOptions.render.title")}: </strong>
          <div className="ml-4">{t("workMelodics.hostingOptions.render.description")}</div>
        </div>
        <div className="mb-4">
          <strong>{t("workMelodics.hostingOptions.vercel.title")}: </strong>
          <div className="ml-4">{t("workMelodics.hostingOptions.vercel.description")}</div>
        </div>
        <div className="mb-4">
          <strong>{t("workMelodics.hostingOptions.strapi.title")}: </strong>
          <div className="ml-4">{t("workMelodics.hostingOptions.strapi.description")}</div>
        </div>
      </div>
      <p className="mb-6">{t("workMelodics.techApproach")}</p>
      <p className="mb-6">{t("workMelodics.streamlinedSolution")}</p>

      <div className="mt-10">
        <p className="text-2xl font-signature">Christopher Tønnesland</p>
      </div>

    </div>
  );
};

export default WorkMelodics;