import { useEffect, useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 8500); // slow & calm

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden rounded-2xl border dark:border-neutral-800">
      <div
        className="flex transition-transform duration-1600 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="
              w-full shrink-0
              aspect-video
              object-cover
            "
          />
        ))}
      </div>
    </div>
  );
}

