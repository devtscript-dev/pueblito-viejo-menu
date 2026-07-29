import type { MenuCategory } from "./types";

// Contenido transcrito del menu fisico de Restaurante Pueblito Viejo ("Sabor y Tradicion").
export const menu: MenuCategory[] = [
  {
    id: "entradas",
    name: { es: "Entradas", en: "Starters" },
    items: [
      {
        id: "costilla-porcion",
        name: { es: "Costilla de cerdo", en: "Pork Ribs" },
        description: {
          es: "Costilla de cerdo jugosa, con el toque ahumado de la casa.",
          en: "Juicy pork ribs with our signature smoky touch.",
        },
        prices: [{ amount: 35000 }],
        image: "/images/costilla-porcion.jpg",
      },
      {
        id: "carne-porcion",
        name: { es: "Carne de cerdo", en: "Pork" },
        description: {
          es: "Carne de cerdo asada a la parrilla, tierna y bien sazonada.",
          en: "Grilled pork, tender and well-seasoned.",
        },
        prices: [{ amount: 30000 }],
        video: "/videos/carne-cerdo.mp4",
      },
      {
        id: "choriza-porcion",
        name: { es: "Choriza", en: "Chorizo" },
        description: {
          es: "Choriza sandoneña artesanal, asada en su punto.",
          en: "Handmade Sandoná-style pork sausage, grilled to perfection.",
        },
        prices: [{ amount: 31000 }],
        image: "/images/choriza-porcion.jpg",
      },
      {
        id: "chuleta-porcion",
        name: { es: "Chuleta", en: "Pork Chop" },
        description: {
          es: "Chuleta de cerdo apanada, dorada y crocante por fuera.",
          en: "Breaded pork chop, golden and crispy on the outside.",
        },
        prices: [{ amount: 32000 }],
        image: "/images/chuleta-porcion.jpg",
      },
      {
        id: "chicharron-porcion",
        name: { es: "Chicharrón", en: "Pork Crackling" },
        description: {
          es: "Chicharrón crocante de cerdo, una tradición en cada mesa.",
          en: "Crispy pork crackling, a tradition at every table.",
        },
        prices: [{ amount: 32000 }],
        image: "/images/chicharron-porcion.jpg",
      },
      {
        id: "arepa-porcion",
        name: { es: "Arepa", en: "Arepa" },
        description: {
          es: "Arepa de maíz asada, el infaltable acompañante colombiano.",
          en: "Grilled corn arepa, the essential Colombian side.",
        },
        prices: [{ amount: 6000 }],
        image: "/images/arepa-porcion.jpg",
      },
      {
        id: "crispetas-porcion",
        name: { es: "Crispetas", en: "Popcorn" },
        description: {
          es: "Crispetas caseras, crocantes y perfectas para picar.",
          en: "Homemade popcorn, crunchy and perfect for snacking.",
        },
        prices: [{ amount: 4000 }],
        image: "/images/crispetas-porcion.jpg",
      },
      {
        id: "papa-vapor-porcion",
        name: { es: "Papa al vapor", en: "Steamed Potato" },
        description: {
          es: "Papas criollas al vapor, suaves y con mantequilla.",
          en: "Steamed baby potatoes, soft and buttery.",
        },
        prices: [{ amount: 6000 }],
        image: "/images/papa-vapor-porcion.jpg",
      },
      {
        id: "sopa-porcion",
        name: { es: "Sopa", en: "Soup" },
        description: {
          es: "Sopa casera del día, calientita y llena de sabor.",
          en: "Homemade soup of the day, warm and full of flavor.",
        },
        prices: [{ amount: 6000 }],
        image: "/images/sopa-porcion.jpg",
      },
      {
        id: "papa-francesa-porcion",
        name: { es: "Papa a la francesa", en: "French Fries" },
        description: {
          es: "Papas a la francesa doradas y crocantes.",
          en: "Golden, crispy french fries.",
        },
        prices: [{ amount: 9000 }],
        image: "/images/papa-francesa-porcion.jpg",
      },
      {
        id: "patacon-porcion",
        name: { es: "Patacón", en: "Patacón" },
        description: {
          es: "Patacón de plátano verde, frito y crocante.",
          en: "Fried green plantain patty, crispy and delicious.",
        },
        prices: [{ amount: 7000 }],
        image: "/images/patacon-porcion.jpg",
      },
      {
        id: "arroz-porcion",
        name: { es: "Arroz", en: "Rice" },
        description: {
          es: "Arroz blanco suelto, el acompañante de siempre.",
          en: "Fluffy white rice, the classic side.",
        },
        prices: [{ amount: 5000 }],
        image: "/images/arroz-porcion.jpg",
      },
      {
        id: "maduro-porcion",
        name: { es: "Maduro", en: "Sweet Plantain" },
        description: {
          es: "Tajadas de plátano maduro, dulces y fritas.",
          en: "Sweet fried ripe plantain slices.",
        },
        prices: [{ amount: 7000 }],
        image: "/images/maduro-porcion.jpg",
      },
    ],
  },
  {
    id: "platos-fuertes",
    name: { es: "Platos Fuertes", en: "Main Dishes" },
    groups: [
      {
        id: "bandejas",
        name: { es: "Bandejas", en: "Platters" },
        items: [
          {
            id: "pollo-ahumado-bandeja",
            name: { es: "Pollo ahumado", en: "Smoked Chicken" },
            description: {
              es: "Arroz, tajada de maduro, papa, ensalada, frijol, 1/4 de pollo ahumado.",
              en: "Rice, sweet plantain, potato, salad, beans, 1/4 smoked chicken.",
            },
            prices: [{ amount: 32000 }],
            video: "/videos/pollo-ahumado.mp4",
          },
          {
            id: "carne-cerdo-bandeja",
            name: { es: "Carne de cerdo", en: "Grilled Pork" },
            description: {
              es: "Arroz, tajada de maduro, papa, ensalada, frijol, 180 grs. de carne de cerdo.",
              en: "Rice, sweet plantain, potato, salad, beans, 180 g of grilled pork.",
            },
            prices: [{ amount: 32000 }],
            video: "/videos/carne-cerdo.mp4",
          },
          {
            id: "gallina-bandeja",
            name: { es: "Gallina", en: "Hen" },
            description: {
              es: "Arroz, tajada de maduro, papa, ensalada, frijol, 1/4 de gallina con hogao.",
              en: "Rice, sweet plantain, potato, salad, beans, 1/4 hen with hogao sauce.",
            },
            prices: [{ amount: 32000 }],
            video: "/videos/gallina.mp4",
          },
          {
            id: "costilla-bandeja",
            name: { es: "Costilla de cerdo", en: "Pork Ribs" },
            description: {
              es: "Arroz, tajada de maduro, papa, ensalada, frijol, 170 grs. de costilla de cerdo.",
              en: "Rice, sweet plantain, potato, salad, beans, 170 g of pork ribs.",
            },
            prices: [{ amount: 37000 }],
            image: "/images/costilla-plato.jpg",
          },
          {
            id: "choriza-sandonena-bandeja",
            name: { es: "Choriza sandoneña", en: "Sandoná-style Chorizo" },
            description: {
              es: "Arroz, tajada de maduro, papa, ensalada, frijol, 170 grs. de choriza.",
              en: "Rice, sweet plantain, potato, salad, beans, 170 g of chorizo.",
            },
            prices: [{ amount: 33000 }],
            video: "/videos/choriza-sandonena.mp4",
          },
          {
            id: "chuleta-valluna-bandeja",
            name: { es: "Chuleta valluna", en: "Valluna-style Pork Chop" },
            description: {
              es: "170 grs. de chuleta de cerdo, arroz, papa a la francesa, tajada de maduro.",
              en: "170 g breaded pork chop, rice, french fries, sweet plantain.",
            },
            prices: [{ amount: 34000 }],
            image: "/images/chuleta-valluna-plato.jpg",
          },
          {
            id: "trucha-bandeja",
            name: { es: "Trucha", en: "Trout" },
            description: {
              es: "Arroz, patacón, 250 grs. de trucha, crispetas, papa al vapor.",
              en: "Rice, patacón, 250 g of trout, popcorn, steamed potato.",
            },
            prices: [{ amount: 34000 }],
            image: "/images/trucha-plato.jpg",
          },
          {
            id: "mojarra-bandeja",
            name: { es: "Mojarra", en: "Mojarra Fish" },
            description: {
              es: "Arroz, patacón, 350 grs. de mojarra, crispetas, papa al vapor.",
              en: "Rice, patacón, 350 g of mojarra fish, popcorn, steamed potato.",
            },
            prices: [{ amount: 34000 }],
            image: "/images/mojarra-plato.jpg",
          },
        ],
      },
      {
        id: "almuerzos",
        name: { es: "Almuerzos", en: "Lunch Specials" },
        subtitle: { es: "Incluyen sopa, jugo y postre", en: "Includes soup, juice and dessert" },
        items: [
          {
            id: "pollo-ahumado-almuerzo",
            name: { es: "Pollo ahumado", en: "Smoked Chicken" },
            description: {
              es: "Sopa, arroz, tajada de maduro, papa, ensalada, frijol, 1/4 de pollo ahumado, jugo y postre.",
              en: "Soup, rice, sweet plantain, potato, salad, beans, 1/4 smoked chicken, juice and dessert.",
            },
            prices: [{ amount: 37000 }],
            video: "/videos/pollo-ahumado.mp4",
          },
          {
            id: "carne-cerdo-almuerzo",
            name: { es: "Carne de cerdo", en: "Grilled Pork" },
            description: {
              es: "Sopa, arroz, tajada de maduro, papa, ensalada, frijol, 180 grs. de carne de cerdo, jugo y postre.",
              en: "Soup, rice, sweet plantain, potato, salad, beans, 180 g of grilled pork, juice and dessert.",
            },
            prices: [{ amount: 37000 }],
            video: "/videos/carne-cerdo.mp4",
          },
          {
            id: "gallina-almuerzo",
            name: { es: "Gallina", en: "Hen" },
            description: {
              es: "Sopa, arroz, tajada de maduro, papa, ensalada, frijol, 1/4 de gallina con hogao, jugo y postre.",
              en: "Soup, rice, sweet plantain, potato, salad, beans, 1/4 hen with hogao sauce, juice and dessert.",
            },
            prices: [{ amount: 37000 }],
            video: "/videos/gallina.mp4",
          },
          {
            id: "costilla-almuerzo",
            name: { es: "Costilla de cerdo", en: "Pork Ribs" },
            description: {
              es: "Sopa, arroz, tajada de maduro, papa, ensalada, frijol, 170 grs. de costilla de cerdo, jugo y postre.",
              en: "Soup, rice, sweet plantain, potato, salad, beans, 170 g of pork ribs, juice and dessert.",
            },
            prices: [{ amount: 39000 }],
            image: "/images/costilla-plato.jpg",
          },
          {
            id: "choriza-sandonena-almuerzo",
            name: { es: "Choriza sandoneña", en: "Sandoná-style Chorizo" },
            description: {
              es: "Sopa, arroz, tajada de maduro, papa, ensalada, frijol, 170 grs. de choriza, jugo y postre.",
              en: "Soup, rice, sweet plantain, potato, salad, beans, 170 g of chorizo, juice and dessert.",
            },
            prices: [{ amount: 38000 }],
            video: "/videos/choriza-sandonena.mp4",
            featured: true,
          },
          {
            id: "plato-mixto",
            name: { es: "Plato mixto", en: "Mixed Plate" },
            description: {
              es: "Dos porciones que usted elija + sopa, arroz, tajada de maduro, papa, ensalada, frijol, jugo y postre.",
              en: "Two portions of your choice + soup, rice, sweet plantain, potato, salad, beans, juice and dessert.",
            },
            prices: [{ amount: 59000 }],
            image: "/images/plato-mixto.jpg",
            featured: true,
          },
          {
            id: "chuleta-valluna-almuerzo",
            name: { es: "Chuleta valluna", en: "Valluna-style Pork Chop" },
            description: {
              es: "170 grs. de chuleta de cerdo, sopa, arroz, papa a la francesa, tajada de maduro, jugo y postre.",
              en: "170 g breaded pork chop, soup, rice, french fries, sweet plantain, juice and dessert.",
            },
            prices: [{ amount: 39000 }],
            image: "/images/chuleta-valluna-plato.jpg",
          },
          {
            id: "trucha-almuerzo",
            name: { es: "Trucha", en: "Trout" },
            description: {
              es: "Sopa, arroz, patacón, 250 grs. de trucha, crispetas, papa al vapor, jugo y postre.",
              en: "Soup, rice, patacón, 250 g of trout, popcorn, steamed potato, juice and dessert.",
            },
            prices: [{ amount: 39000 }],
            image: "/images/trucha-plato.jpg",
          },
          {
            id: "mojarra-almuerzo",
            name: { es: "Mojarra", en: "Mojarra Fish" },
            description: {
              es: "Sopa, arroz, patacón, 350 grs. de mojarra, crispetas, papa al vapor, jugo y postre.",
              en: "Soup, rice, patacón, 350 g of mojarra fish, popcorn, steamed potato, juice and dessert.",
            },
            prices: [{ amount: 39000 }],
            image: "/images/mojarra-plato.jpg",
          },
          {
            id: "bandeja-paisa",
            name: { es: "Bandeja paisa", en: "Bandeja Paisa" },
            description: {
              es: "Sopa, arroz, frijol, aguacate, tajada de maduro, chicharrón, huevo frito, choriza sandoneña, carne de cerdo asada, arepa, jugo y postre.",
              en: "Soup, rice, beans, avocado, sweet plantain, pork crackling, fried egg, chorizo, grilled pork, arepa, juice and dessert.",
            },
            prices: [{ amount: 43000 }],
            video: "/videos/bandeja-paisa.mp4",
            featured: true,
          },
        ],
      },
      {
        id: "recomendados",
        name: { es: "Recomendación de la casa", en: "House Recommendations" },
        subtitle: {
          es: "Los favoritos de siempre, los más pedidos por nuestros clientes",
          en: "The all-time favorites, our customers' most-ordered dishes",
        },
        banner: "/images/platos-variados.jpg",
        items: [
          {
            id: "bandeja-paisa-recomendado",
            name: { es: "Bandeja paisa", en: "Bandeja Paisa" },
            description: {
              es: "Sopa, arroz, frijol, aguacate, tajada de maduro, chicharrón, huevo frito, choriza sandoneña, carne de cerdo asada, arepa, jugo y postre.",
              en: "Soup, rice, beans, avocado, sweet plantain, pork crackling, fried egg, chorizo, grilled pork, arepa, juice and dessert.",
            },
            prices: [{ amount: 43000 }],
            video: "/videos/bandeja-paisa.mp4",
            featured: true,
          },
          {
            id: "choriza-sandonena-recomendado",
            name: { es: "Choriza sandoneña", en: "Sandoná-style Chorizo" },
            description: {
              es: "Sopa, arroz, tajada de maduro, papa, ensalada, frijol, 170 grs. de choriza, jugo y postre.",
              en: "Soup, rice, sweet plantain, potato, salad, beans, 170 g of chorizo, juice and dessert.",
            },
            prices: [{ amount: 38000 }],
            video: "/videos/choriza-sandonena.mp4",
            featured: true,
          },
          {
            id: "plato-mixto-recomendado",
            name: { es: "Plato mixto", en: "Mixed Plate" },
            description: {
              es: "Dos porciones que usted elija + sopa, arroz, tajada de maduro, papa, ensalada, frijol, jugo y postre.",
              en: "Two portions of your choice + soup, rice, sweet plantain, potato, salad, beans, juice and dessert.",
            },
            prices: [{ amount: 59000 }],
            image: "/images/plato-mixto.jpg",
            featured: true,
          },
        ],
      },
      {
        id: "comida-de-mar",
        name: { es: "Comida de Mar", en: "Seafood" },
        items: [
          {
            id: "cazuela-mariscos",
            name: { es: "Cazuela de mariscos", en: "Seafood Casserole" },
            description: {
              es: "Acompañado con arroz, patacón, ensalada, jugo del día y postre.",
              en: "Served with rice, patacón, salad, juice of the day and dessert.",
            },
            prices: [{ amount: 60000 }],
            image: "/images/cazuela-mariscos.jpg",
          },
          {
            id: "cazuela-camarones",
            name: { es: "Cazuela de camarones", en: "Shrimp Casserole" },
            description: {
              es: "Acompañado con arroz, patacón, ensalada, jugo del día y postre.",
              en: "Served with rice, patacón, salad, juice of the day and dessert.",
            },
            prices: [{ amount: 58000 }],
            image: "/images/cazuela-camarones.jpg",
          },
          {
            id: "langostinos-apanados",
            name: { es: "Langostinos apanados", en: "Breaded Prawns" },
            description: {
              es: "Acompañado con arroz, patacón, ensalada, jugo del día, postre y crema de mariscos.",
              en: "Served with rice, patacón, salad, juice of the day, dessert and seafood cream sauce.",
            },
            prices: [{ amount: 72000 }],
            image: "/images/langostinos-apanados.jpg",
          },
          {
            id: "fettuccine-langostinos",
            name: { es: "Fettuccine con langostinos", en: "Fettuccine with Prawns" },
            description: {
              es: "Acompañado con arroz, patacón, ensalada, jugo del día, postre y crema de mariscos.",
              en: "Served with rice, patacón, salad, juice of the day, dessert and seafood cream sauce.",
            },
            prices: [{ amount: 72000 }],
            video: "/videos/fettuccine-langostinos.mp4",
          },
        ],
      },
    ],
  },
  {
    id: "cervezas",
    name: { es: "Cervezas", en: "Beers" },
    items: [
      {
        id: "cerveza",
        name: { es: "Cerveza", en: "Beer" },
        description: {
          es: "Cerveza fría, vendida sola. Pide nuestro vaso michelado para prepararla al gusto.",
          en: "Cold beer, sold on its own. Ask for our michelada glass to prepare it your way.",
        },
        prices: [
          { amount: 10000, label: { es: "Poker / Club", en: "Poker / Club" } },
          { amount: 11000, label: { es: "Corona / Castiza", en: "Corona / Castiza" } },
        ],
        image: "/images/cerveza.jpg",
      },
      {
        id: "vaso-michelado",
        name: { es: "Vaso michelado", en: "Michelada Glass" },
        description: {
          es: "Vaso preparado con limón y sal para acompañar tu cerveza o soda y convertirla en michelada.",
          en: "Lime-and-salt-rimmed glass to go with your beer or soda and turn it into a michelada.",
        },
        prices: [{ amount: 3000 }],
        image: "/images/micheladas.jpg",
      },
    ],
  },
  {
    id: "otros",
    name: { es: "Otros", en: "Other" },
    groups: [
      {
        id: "desayunos",
        name: { es: "Desayunos", en: "Breakfast" },
        items: [
          {
            id: "corriente",
            name: { es: "Corriente", en: "Classic Breakfast" },
            description: {
              es: "Huevos al gusto, tajada de maduro, porción de arroz y café.",
              en: "Eggs your way, sweet plantain, rice and coffee.",
            },
            prices: [{ amount: 13000 }],
            image: "/images/desayuno-corriente.jpg",
          },
          {
            id: "ejecutivo",
            name: { es: "Ejecutivo", en: "Executive Breakfast" },
            description: {
              es: "Huevos al gusto, tajada de maduro, porción de arroz, carne de cerdo y café.",
              en: "Eggs your way, sweet plantain, rice, grilled pork and coffee.",
            },
            prices: [{ amount: 21000 }],
            image: "/images/desayuno-ejecutivo.jpg",
          },
          {
            id: "ranchero",
            name: { es: "Ranchero", en: "Ranchero Breakfast" },
            description: {
              es: "Huevos al gusto, salchicha ranchera, tajada de maduro, porción de arroz y café.",
              en: "Eggs your way, ranchero sausage, sweet plantain, rice and coffee.",
            },
            prices: [{ amount: 18000 }],
            image: "/images/desayuno-ranchero.jpg",
          },
          {
            id: "guaicoso",
            name: { es: "Guaicoso", en: "Guaicoso Breakfast" },
            description: {
              es: "Arepa, tajada de maduro, porción de arroz, choriza, huevos al gusto y café.",
              en: "Arepa, sweet plantain, rice, chorizo, eggs your way and coffee.",
            },
            prices: [{ amount: 25000 }],
            image: "/images/desayuno-guaicoso.jpg",
          },
          {
            id: "pueblito-viejo-desayuno",
            name: { es: "Pueblito Viejo", en: "Pueblito Viejo Breakfast" },
            description: {
              es: "Arepa, tajada de maduro, calentado de frijol, choriza, carne de cerdo, 1 huevo, chocolate, tajada de queso, café o jugo.",
              en: "Arepa, sweet plantain, warmed-up beans, chorizo, pork, 1 egg, hot chocolate, cheese, coffee or juice.",
            },
            prices: [{ amount: 32000 }],
            image: "/images/desayuno-pueblito-viejo.jpg",
          },
          {
            id: "saludable",
            name: { es: "Saludable", en: "Healthy Breakfast" },
            description: {
              es: "Huevos al gusto, pan integral con mantequilla, fruta picada, café o jugo.",
              en: "Eggs your way, whole-grain bread with butter, chopped fruit, coffee or juice.",
            },
            prices: [{ amount: 20000 }],
            image: "/images/desayuno-saludable.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    name: { es: "Bebidas", en: "Drinks" },
    items: [
      {
        id: "jugo-agua",
        name: { es: "Jugo natural en agua", en: "Fresh Juice (Water)" },
        description: {
          es: "Jugo de fruta natural preparado en agua.",
          en: "Fresh fruit juice made with water.",
        },
        prices: [{ amount: 8000 }],
        image: "/images/jugo-agua.jpg",
      },
      {
        id: "jugo-leche",
        name: { es: "Jugo natural en leche", en: "Fresh Juice (Milk)" },
        description: {
          es: "Jugo de fruta natural preparado con leche, cremoso y delicioso.",
          en: "Fresh fruit juice made with milk, creamy and delicious.",
        },
        prices: [{ amount: 10000 }],
        image: "/images/jugo-leche.jpg",
      },
      {
        id: "limonada",
        name: { es: "Limonada", en: "Lemonade" },
        description: {
          es: "Limonada natural bien fría, refrescante en cada sorbo.",
          en: "Ice-cold natural lemonade, refreshing in every sip.",
        },
        prices: [{ amount: 8000 }],
        image: "/images/limonada.jpg",
      },
      {
        id: "jarra-limonada",
        name: { es: "Jarra de limonada", en: "Lemonade Pitcher" },
        description: {
          es: "Jarra de limonada natural para compartir.",
          en: "Pitcher of natural lemonade to share.",
        },
        prices: [
          { amount: 14000, label: { es: "Jarra pequeña", en: "Small pitcher" } },
          { amount: 24000, label: { es: "Jarra 4-6 vasos aprox.", en: "Pitcher, approx. 4-6 glasses" } },
        ],
        image: "/images/jarra-limonada.jpg",
      },
      {
        id: "gaseosa",
        name: { es: "Gaseosa", en: "Soft Drink" },
        description: {
          es: "Coca-Cola normal o Zero, bien fría a tu elección.",
          en: "Coca-Cola regular or Zero, ice-cold, your choice.",
        },
        prices: [{ amount: 7000 }],
        image: "/images/gaseosa.jpg",
      },
      {
        id: "sodas",
        name: { es: "Sodas", en: "Sodas" },
        description: {
          es: "Soda Bretaña en botella de vidrio, bien helada.",
          en: "Bretaña soda in a glass bottle, ice-cold.",
        },
        prices: [{ amount: 7000 }],
        image: "/images/sodas.jpg",
      },
      {
        id: "jugos-hit",
        name: { es: "Jugos Hit", en: "Hit Juice Box" },
        description: {
          es: "Jugo de caja Hit, práctico y refrescante.",
          en: "Hit-brand boxed juice, convenient and refreshing.",
        },
        prices: [{ amount: 7000 }],
        image: "/images/jugos-hit.jpg",
      },
      {
        id: "botella-agua",
        name: { es: "Botella de agua", en: "Bottled Water" },
        description: {
          es: "Agua manantial embotellada, fría y lista para servir.",
          en: "Bottled spring water, chilled and ready to serve.",
        },
        prices: [{ amount: 6000 }],
        image: "/images/botella-agua.jpg",
      },
    ],
  },
];
