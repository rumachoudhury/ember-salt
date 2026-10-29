"use client";

import { useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85",
    alt: "Warmly lit dining room set for an evening service",
    caption: "A room made for lingering.",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85",
    alt: "Wood-fired main course plated for the table",
    caption: "From the hearth, with care.",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=85",
    alt: "Restaurant table prepared for a shared dinner",
    caption: "Gather close around the table.",
  },
];

export default function ImageSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section className="gallery-section" aria-label="A glimpse of Ember and Salt">
      <div className="gallery-wrap">
        <div className="gallery-heading">
          <span className="gallery-eyebrow">Around the table</span>
          <h2>Evenings at Ember &amp; Salt</h2>
        </div>

        <div className="gallery-carousel" aria-roledescription="carousel">
          <div className="gallery-photo" aria-live="polite" aria-atomic="true">
            <img key={activeSlide.src} src={activeSlide.src} alt={activeSlide.alt} />
            <div className="gallery-caption">{activeSlide.caption}</div>
            <button
              className="gallery-arrow gallery-previous"
              type="button"
              aria-label="Previous slide"
              onClick={() => showSlide(activeIndex - 1)}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              className="gallery-arrow gallery-next"
              type="button"
              aria-label="Next slide"
              onClick={() => showSlide(activeIndex + 1)}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="gallery-controls">
            <span className="gallery-count">{activeIndex + 1} <span aria-hidden="true">/</span> {slides.length}</span>
            <div className="gallery-dots" aria-label="Choose a slide">
              {slides.map((slide, index) => (
                <button
                  className={`gallery-dot${index === activeIndex ? " is-active" : ""}`}
                  key={slide.src}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.caption}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => showSlide(index)}
                />
              ))}
            </div>
            <span className="gallery-location">New York · Open hearth</span>
          </div>
        </div>
      </div>
    </section>
  );
}