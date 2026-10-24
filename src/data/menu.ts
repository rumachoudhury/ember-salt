export interface Dish {
  name: string;
  description: string;
  price: string;
  tag?: "signature" | "new" | "veg";
}

export interface MenuSection {
  id: string;
  title: string;
  note?: string;
  dishes: Dish[];
}

export const menu: MenuSection[] = [
  {
    id: "starters",
    title: "To start",
    dishes: [
      { name: "Charred flatbread", description: "Hearth-baked, whipped cultured butter, smoked salt", price: "$12" },
      { name: "Embered oysters", description: "Half shell, finished over coals, brown butter mignonette", price: "$22", tag: "signature" },
      { name: "Burnt carrot soup", description: "Brown butter, toasted seeds, crème fraîche", price: "$14", tag: "veg" },
      { name: "Hearth bread & lardo", description: "Daily loaf, cured lardo, sea salt", price: "$10" },
    ],
  },
  {
    id: "mains",
    title: "Over the fire",
    note: "Everything on this list touches the hearth before it touches your plate.",
    dishes: [
      { name: "Dry-aged ribeye", description: "28-day dry-aged, bone marrow butter, charred shallot", price: "$58", tag: "signature" },
      { name: "Whole branzino", description: "Citrus, fennel, embered lemon", price: "$36" },
      { name: "Spatchcock chicken", description: "Brined 24 hours, pan jus, hearth vegetables", price: "$29" },
      { name: "Smoked mushroom tart", description: "Puff pastry, fontina, thyme ash", price: "$24", tag: "veg" },
      { name: "Lamb shoulder", description: "Slow over embers, salsa verde, flatbread", price: "$34", tag: "new" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    dishes: [
      { name: "Embered potatoes", description: "Crushed, chili oil, herbs", price: "$11" },
      { name: "Charred broccolini", description: "Garlic, chili flake, lemon", price: "$12", tag: "veg" },
      { name: "Cast-iron cornbread", description: "Honey butter", price: "$9" },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    dishes: [
      { name: "Smoked chocolate tart", description: "Sea salt, crème fraîche", price: "$13" },
      { name: "Hearth-roasted pear", description: "Brown butter crumble, vanilla ice cream", price: "$12", tag: "veg" },
    ],
  },
];
