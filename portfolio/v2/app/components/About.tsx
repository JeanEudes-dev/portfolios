import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-gray-300">
      {/* <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2> */}
      <div className="space-y-5 leading-relaxed text-lg">
        <p dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
        <p>{t('about.approach')}</p>
        <p dangerouslySetInnerHTML={{ __html: t('about.experience') }} />
      </div>
    </section>
  );
};

export default About;
