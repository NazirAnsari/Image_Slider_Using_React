import React, { useRef } from 'react';

const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  const handleImageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  let classNames = 'slide';

  if (current === slide.index) classNames += ' slide--current';
  else if (current - 1 === slide.index) classNames += ' slide--previous';
  else if (current + 1 === slide.index) classNames += ' slide--next';

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={() => handleSlideClick(slide.index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={slide.headline}
          src={slide.src}
          onLoad={handleImageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{slide.headline}</h2>
        <button className="slide__action btn">{slide.button}</button>
      </article>
    </li>
  );
};

export default Slide;
