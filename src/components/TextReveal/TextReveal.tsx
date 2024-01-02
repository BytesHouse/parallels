"use client";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function TextReveal() {
  const { t } = useTranslation();
  return <p  id="animateted-text" aria-label="CodePen">
  <span data-text="P">P</span>
  <span data-text="A">A</span>
  <span data-text="R">R</span>
  <span data-text="A">A</span>
  <span data-text="L">L</span>
  <span data-text="L">L</span>
  <span data-text="E">E</span>
  <span data-text="L">L</span>
  <span data-text="S">S</span>
</p>   
}

export default TextReveal;
