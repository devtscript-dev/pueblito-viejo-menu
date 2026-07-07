export interface PriceOption {
  amount: number;
  label?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  prices: PriceOption[];
  image?: string;
  video?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle?: string;
  items: MenuItem[];
}
