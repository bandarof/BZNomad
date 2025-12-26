import { useState } from 'react';

interface CertificateModalProps {
  certificateImage: string;
  title?: string;
}

export default function CertificateModal({ certificateImage, title = 'Business Certificate' }: CertificateModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {/* Thumbnail/Button */}
      <div 
        className="cursor-pointer overflow-hidden rounded-lg hover:shadow-glow-teal transition-all duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Click to view ${title}`}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        <img
          src={certificateImage}
          alt={title}
          className="w-full h-auto max-h-32 object-cover select-none pointer-events-none"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="relative bg-dark-900 rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden glow-border-lg">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white font-bold transition-colors"
              aria-label="Close certificate modal"
            >
              ✕
            </button>

            {/* Modal content */}
            <div className="p-6 md:p-12 overflow-auto max-h-[90vh]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 text-center">{title}</h2>
              <img
                src={certificateImage}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <p className="text-gray-400 text-center mt-6 text-sm">
                This document is protected and cannot be downloaded.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
