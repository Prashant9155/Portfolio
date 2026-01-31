import { useEffect, useState } from "react";

export default function ScreenshotModal({ images, onClose }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + total) % total);

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % total);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl hover:opacity-80"
      >
        ✕
      </button>

      {/* Left Arrow */}
      {total > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-6 md:left-12 text-white text-4xl hover:opacity-80"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div className="max-w-5xl max-h-[80vh] px-6">
        <img
          src={images[current]}
          alt="Project Screenshot"
          className="rounded-xl shadow-2xl max-h-[80vh] object-contain transition-opacity duration-300"
        />
      </div>

      {/* Right Arrow */}
      {total > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-6 md:right-12 text-white text-4xl hover:opacity-80"
        >
          ›
        </button>
      )}

      {/* Indicator */}
      <div className="absolute bottom-6 text-sm text-gray-300">
        {current + 1} / {total}
      </div>
    </div>
  );
}
