import type { LocalizedText } from "./types";

export interface PhotoCredit {
  dish: LocalizedText;
  author: string;
  license: string;
  url: string;
}

// Fotos tomadas de Wikimedia Commons bajo licencias CC BY / CC BY-SA que exigen
// atribucion. Las de dominio publico / CC0 no requieren credito y no estan aqui.
export const photoCredits: PhotoCredit[] = [
  {
    dish: { es: "Cerveza", en: "Beer" },
    author: "Erik Cleves Kristensen",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Cerveza_Poker_(6987986572).jpg",
  },
  {
    dish: { es: "Sodas", en: "Sodas" },
    author: "Beluwater",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Belu_Bottled_Mineral_Water.jpg",
  },
  {
    dish: { es: "Botella de agua", en: "Bottled Water" },
    author: "Beluwater",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Belu_Bottled_Mineral_Water.jpg",
  },
  {
    dish: { es: "Gaseosa", en: "Soft Drink" },
    author: "James Larrison",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Coca-Cola_Trio-_Zero_Sugar,_Original,_and_Diet_Coke.jpg",
  },
  {
    dish: { es: "Jugos Hit", en: "Hit Juice Box" },
    author: "Tamzin Hadasa Kelly",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Capri_Sun_pouch_standing.jpg",
  },
  {
    dish: { es: "Limonada", en: "Lemonade" },
    author: "JIP",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Homemade_lemonade_at_restaurant_Visums,_Riga.jpg",
  },
];
