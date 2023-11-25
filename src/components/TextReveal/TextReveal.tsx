"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";

function TextReveal() {
  const { t } = useTranslation();
  return (
    <svg className="svg md:absolute bottom-[130px]" viewBox="0 0 340 80" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="35" className="small">
      Parallels
      </text>
      <text x="80" y="35" className="heavy">
      Wears
      </text>
      <text x="20" y="50" className="small">
      {t('elevate')}
      </text>
      <text x="20" y="65" className="Rrrrr">
      {t('fashion')}
      </text>
    </svg>
  );
}

export default TextReveal;
