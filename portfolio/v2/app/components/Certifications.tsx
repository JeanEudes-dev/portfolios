import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCertificate, FaDownload, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const Certifications = () => {
  const { t } = useTranslation();
  const [openCertificateUrl, setOpenCertificateUrl] = useState<string | null>(null);
  
  const certifications = [
    {
      title: "IBM Full Stack Developer Professional Certificate",
      issuer: "IBM via Coursera",
      date: "2024",
      description: t('certifications.ibm.description', { 
        defaultValue: "Comprehensive full-stack development program covering React, Python, Django, Flask, Docker, and cloud deployment. Completed 100+ hours of hands-on projects and real-world applications."
      }),
      skills: ["React", "Python", "Django", "Flask", "Docker", "CI/CD", "Cloud Computing", "REST APIs", "Microservices"],
      certificateUrl: "/IBM Full Stack developper.pdf",
      verificationUrl: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
      icon: "🎓",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "AI Engineer Professional Certificate",
      issuer: "Professional Certification",
      date: "2024",
      description: t('certifications.ai.description', { 
        defaultValue: "Advanced AI engineering certification focusing on machine learning, deep learning, and AI application development. Specialized in building production-ready AI systems and integrating AI APIs."
      }),
      skills: ["Machine Learning", "AI APIs", "Python", "TensorFlow", "OpenAI", "Prompt Engineering", "AI Integration", "Model Deployment"],
      certificateUrl: "/ai-engineer.pdf",
      verificationUrl: "#",
      icon: "🤖",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg border border-slate-200/10 bg-slate-800/20 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300"
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${cert.color}`}></div>
          
          <div className="relative p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{cert.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <FaCertificate className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setOpenCertificateUrl(cert.certificateUrl)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-purple-400/10 hover:bg-purple-400/20 text-purple-300 text-xs font-medium rounded-md transition-colors"
                  title={t('certifications.view', { defaultValue: 'View Certificate' })}
                >
                  <FaEye className="w-3 h-3" />
                  <span className="hidden sm:inline">
                    {t('certifications.view', { defaultValue: 'View' })}
                  </span>
                </button>
                
                <button
                  onClick={() => handleDownload(cert.certificateUrl, `${cert.title.replace(/\s+/g, '_')}.pdf`)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 text-xs font-medium rounded-md transition-colors"
                  title={t('certifications.download', { defaultValue: 'Download Certificate' })}
                >
                  <FaDownload className="w-3 h-3" />
                  <span className="hidden sm:inline">
                    {t('certifications.download', { defaultValue: 'Download' })}
                  </span>
                </button>
                
                {cert.verificationUrl !== "#" && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 bg-blue-400/10 hover:bg-blue-400/20 text-blue-300 text-xs font-medium rounded-md transition-colors"
                    title={t('certifications.verify', { defaultValue: 'Verify Certificate' })}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span className="hidden sm:inline">
                      {t('certifications.verify', { defaultValue: 'Verify' })}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {cert.description}
            </p>

            {/* Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                {t('certifications.skills', { defaultValue: 'Skills Covered' })}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-md border border-slate-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Call to action */}
      <div className="text-center pt-6">
        <p className="text-sm text-slate-400 mb-4">
          {t('certifications.cta', { 
            defaultValue: 'Continuously expanding my expertise through professional development and certification programs.'
          })}
        </p>
        <a
          href="https://www.linkedin.com/in/jean-eudes-assogba/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 font-medium rounded-lg transition-colors"
        >
          <span>{t('certifications.viewLinkedIn', { defaultValue: 'View More on LinkedIn' })}</span>
          <FaExternalLinkAlt className="w-4 h-4" />
        </a>
      </div>

      {/* Modal for certificate viewing */}
      {openCertificateUrl && (
        <ProjectModal
          url={openCertificateUrl}
          onClose={() => setOpenCertificateUrl(null)}
        />
      )}
    </div>
  );
};

export default Certifications;