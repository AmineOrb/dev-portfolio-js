
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech = [],
  certificate,
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!showCertificate) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowCertificate(false);
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [showCertificate]);

  return (
    <div className="mb-6 border-b border-zinc-700 pb-6">
      {/* Experience heading */}
      <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Reveal>
          <span className="text-xl font-bold">{title}</span>
        </Reveal>

        <Reveal>
          <span className="text-sm text-zinc-400 sm:text-base">
            {time}
          </span>
        </Reveal>
      </div>

      {/* Position and location */}
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Reveal>
          <span className="font-bold text-indigo-300">
            {position}
          </span>
        </Reveal>

        <Reveal>
          <span className="text-sm text-zinc-400 sm:text-base">
            {location}
          </span>
        </Reveal>
      </div>

      {/* Description and certificate */}
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <div className="min-w-0 flex-1">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              {description}
            </p>
          </Reveal>
        </div>

        {certificate && (
          <div className="w-full shrink-0 sm:w-52 md:w-60">
            <Reveal>
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setShowCertificate(true)}
                aria-label={`Enlarge ${title} certificate`}
                aria-haspopup="dialog"
                className="group block w-full cursor-zoom-in rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-700 bg-white shadow-lg transition-all duration-300 group-hover:border-indigo-400 group-hover:shadow-xl group-hover:shadow-indigo-500/20">
                  <Image
                    src={certificate}
                    alt={`${title} ${position} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            </Reveal>
          </div>
        )}
      </div>

      {/* Skills */}
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>

      {/* Certificate popup */}
      {certificate &&
        showCertificate &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowCertificate(false);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${title} certificate`}
              className="relative w-full max-w-2xl rounded-xl border border-zinc-700 bg-zinc-900 p-3 shadow-2xl sm:p-4"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setShowCertificate(false)}
                aria-label="Close certificate"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/90 text-xl text-white shadow-lg transition-colors hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
              >
                ×
              </button>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={certificate}
                  alt={`${title} certificate enlarged`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
