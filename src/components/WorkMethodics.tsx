import { useTranslation } from "react-i18next";

const WorkMelodics = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between mx-auto max-w-7xl p-10">
      <h1 className="text-2xl font-bold mb-4">{t("workMelodics.title")}</h1>
      <p className="mb-6">{t("workMelodics.workingMethod")}</p>
      <p className="mb-6">{t("workMelodics.techApproach")}</p>
      <p className="mb-6">{t("workMelodics.streamlinedSolution")}</p>

      <div className="mt-10">
        <p className="text-2xl">Christopher Tønnesland</p>
      </div>
    </div>
  );
};

export default WorkMelodics;