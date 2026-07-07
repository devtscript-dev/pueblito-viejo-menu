import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "es" | "en";

interface LanguageContextValue {
  language: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const value = useMemo(
    () => ({ language, toggle: () => setLanguage((l) => (l === "es" ? "en" : "es")) }),
    [language],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
