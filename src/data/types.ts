export interface LocalizedText {
  es: string;
  en: string;
}

export interface PriceOption {
  amount: number;
  /** Ej. "Pequeña" / "Jarra 4 vasos aprox." para distinguir tamaños con precios distintos. */
  label?: LocalizedText;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description?: LocalizedText;
  prices: PriceOption[];
  image?: string;
  video?: string;
  /** Plato mas pedido / recomendado por la casa -> se muestra con 5 estrellas. */
  featured?: boolean;
}

export interface MenuGroup {
  id: string;
  name: LocalizedText;
  subtitle?: LocalizedText;
  /** Fondo opcional para destacar el grupo (ej. "Recomendacion de la casa"). */
  banner?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  subtitle?: LocalizedText;
  /** Categoria plana. */
  items?: MenuItem[];
  /** Categoria con subsecciones (ej. Platos Fuertes -> Almuerzos, Recomendados, Bandejas...). */
  groups?: MenuGroup[];
}
