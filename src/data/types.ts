export interface PriceOption {
  amount: number;
  label?: string;
}

export interface LocalizedText {
  es: string;
  en: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description?: LocalizedText;
  prices: PriceOption[];
  image?: string;
  video?: string;
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  subtitle?: LocalizedText;
  items: MenuItem[];
}
