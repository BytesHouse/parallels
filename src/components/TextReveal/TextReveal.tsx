"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";

function TextReveal() {
  const { t } = useTranslation();
  return (
    <svg id="ani-text" viewBox="0 0 800 600">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="60%" className="text--line">
          Parallels
        </text>
      </symbol>

      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg>
  );
}

export default TextReveal;
