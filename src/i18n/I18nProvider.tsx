"use client";

import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") {
      i18n.changeLanguage(stored);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
