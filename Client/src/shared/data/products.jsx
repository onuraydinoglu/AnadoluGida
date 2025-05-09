const products = [
  {
    id: 1,
    title: "Ülker Dubai Schokolade",
    price: 1.99,
    image: "/images/products/dubai.png",
    categoryId: 8, // ✅ Süßigkeiten
    stock: 40,
    description: "Dubai-inspirierte köstliche Ülker Schokolade.",
    isNew: true,
    isDiscounted: false,
  },
  {
    id: 2,
    title: "Niğde Limonade (330 ml)",
    price: 0.89,
    image: "/images/products/nigde.png",
    categoryId: 10, // ✅ Limonade
    stock: 70,
    description: "Erfrischende klassische türkische Limonade.",
    isNew: true,
    isDiscounted: false,
  },
  {
    id: 3,
    title: "Indomie Scharfe Hähnchen-Nudeln",
    price: 0.75,
    image: "/images/products/noodle.png",
    categoryId: 18, // ✅ Hähnchen (Tavuk aromalı noodle)
    stock: 90,
    description: "Würzige Instantnudeln mit Hähnchengeschmack.",
    isNew: true,
    isDiscounted: false,
  },
  {
    id: 4,
    title: "Nestlé Damak Bitter mit Pistazien",
    price: 2.49,
    image: "/images/products/nestle.png",
    categoryId: 8, // ✅ Süßigkeiten
    stock: 30,
    description: "Intensiver Bittergeschmack mit Pistazien.",
    isNew: true,
    isDiscounted: false,
  },
  {
    id: 5,
    title: "Eti Wanted Karamellriegel",
    price: 1.15,
    image: "/images/products/wanted.png",
    categoryId: 8, // ✅ Süßigkeiten
    stock: 50,
    description: "Schokoriegel mit Karamellfüllung.",
    isNew: true,
    isDiscounted: false,
  },
  {
    id: 6,
    title: "Fuse Tea Pfirsich – Zuckerfrei",
    price: 0.99,
    image: "/images/products/fusetea.png",
    categoryId: 5, // ✅ Saft
    stock: 60,
    description: "Eistee mit Pfirsichgeschmack ohne Zucker.",
    isNew: true,
    isDiscounted: false,
  },
  {
    id: 7,
    title: "Frische Tomaten",
    price: 1.25,
    image: "/images/products/tomato.png",
    categoryId: 15, // ✅ Ernte
    stock: 100,
    description: "Saftige, sonnengereifte Tomaten.",
    isNew: false,
    isDiscounted: true,
  },
  {
    id: 8,
    title: "Grüne Paprika",
    price: 0.95,
    image: "/images/products/chili.png",
    categoryId: 15, // ✅ Ernte
    stock: 85,
    description: "Frische grüne Frühstückspaprika.",
    isNew: false,
    isDiscounted: true,
  },
  {
    id: 9,
    title: "Auberginen",
    price: 1.35,
    image: "/images/products/aubergine.png",
    categoryId: 15, // ✅ Ernte
    stock: 75,
    description: "Große Auberginen – ideal für gefüllte Gerichte.",
    isNew: false,
    isDiscounted: true,
  },
  {
    id: 10,
    title: "Kartoffel",
    price: 1.35,
    image: "/images/products/kartoffel.png",
    categoryId: 15, // ✅ Ernte
    stock: 55,
    description: "Vielseitige, festkochende Kartoffeln für alle Gerichte.",
    isNew: false,
    isDiscounted: true,
  },
  {
    id: 11,
    title: "Zwiebel",
    price: 1.35,
    image: "/images/products/zwiebel.png",
    categoryId: 15, // ✅ Ernte
    stock: 55,
    description: "Aromatische Zwiebeln – unverzichtbar für jede Küche.",
    isNew: false,
    isDiscounted: true,
  },
  {
    id: 12,
    title: "Spitzpaprika",
    price: 1.35,
    image: "/images/products/spitzpaprika.png",
    categoryId: 15, // ✅ Ernte
    stock: 55,
    description: "Süße, knackige Spitzpaprika – ideal zum Füllen oder Grillen.",
    isNew: false,
    isDiscounted: true,
  },
  {
    id: 13,
    title: "Gurken",
    price: 1.35,
    image: "/images/products/gurken.png",
    categoryId: 15, // ✅ Ernte
    stock: 55,
    description: "Erfrischende Gurken – perfekt für Salate und Snacks.",
    isNew: false,
    isDiscounted: true,
  },
];

export default products;
