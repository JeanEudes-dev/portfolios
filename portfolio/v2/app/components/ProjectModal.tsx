import React, { useEffect } from "react";
import ReactDOM from "react-dom";

type ProjectModalProps = {
  url: string;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ url, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] h-[90vh] max-w-5xl rounded-xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-10 text-white hover:text-teal-300 bg-black/40 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <iframe
          src={url}
          title="Project Preview"
          className="w-full h-full border-none rounded-xl"
        />
      </div>
    </div>
  );

  return typeof window !== "undefined"
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
};

export default ProjectModal;
