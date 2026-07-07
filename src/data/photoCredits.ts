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
    dish: { es: "Arepa", en: "Arepa" },
    author: "Jdvillalobos",
    license: "CC BY 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Barranquilla_arepas_asadas.jpg",
  },
  {
    dish: { es: "Papa al vapor", en: "Steamed Potato" },
    author: "Cristian Borquez",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Papa_criolla_colombiana.jpg",
  },
  {
    dish: { es: "Papa a la francesa", en: "French Fries" },
    author: "Thriving Vegetarian",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Perfect_French_Fries_-_11457817933.jpg",
  },
  {
    dish: { es: "Patacón", en: "Patacón" },
    author: "Arnold Gatilao",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Tostones_-_Arnold_Gatilao.jpg",
  },
  {
    dish: { es: "Arroz", en: "Rice" },
    author: "Calgary Reviews",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:White_rice_at_a_restaurant.jpg",
  },
  {
    dish: { es: "Micheladas", en: "Micheladas" },
    author: "Will Shenton",
    license: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Michelada_Cocktail.jpg",
  },
  {
    dish: { es: "Cerveza", en: "Beer" },
    author: "Erik Cleves Kristensen",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Cerveza_Poker_(6987986572).jpg",
  },
  {
    dish: { es: "Sodas", en: "Sodas" },
    author: "Jabbyjobber",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:San_Pellegrino_bottle_for_sparkling_water_.jpg",
  },
  {
    dish: { es: "Jugo natural en agua", en: "Fresh Juice (Water)" },
    author: "B722N",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Cocktail_of_passion_fruit_juice_and_watermelon_juice_in_a_glass.jpg",
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
