import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem } from "../data/types";

interface MenuModalContextValue {
  activeItem: MenuItem | null;
  openItem: (item: MenuItem) => void;
  closeItem: () => void;
}

const MenuModalContext = createContext<MenuModalContextValue | undefined>(undefined);

export function MenuModalProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  return (
    <MenuModalContext.Provider value={{ activeItem, openItem: setActiveItem, closeItem: () => setActiveItem(null) }}>
      {children}
    </MenuModalContext.Provider>
  );
}

export function useMenuModal() {
  const ctx = useContext(MenuModalContext);
  if (!ctx) throw new Error("useMenuModal must be used within MenuModalProvider");
  return ctx;
}
