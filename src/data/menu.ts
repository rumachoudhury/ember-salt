export interface Dish {
  name: string;
  description: string;
  price: string;
  image: string;
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
      {
        name: "Charred flatbread",
        description: "Hearth-baked, whipped cultured butter, smoked salt",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82",
      },
      {
        name: "Embered oysters",
        description: "Half shell, finished over coals, brown butter mignonette",
        price: "$22",
        image:
          "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=82",
        tag: "signature",
      },
      {
        name: "Burnt carrot soup",
        description: "Brown butter, toasted seeds, crème fraîche",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
        tag: "veg",
      },
      {
        name: "Hearth bread & lardo",
        description: "Daily loaf, cured lardo, sea salt",
        price: "$10",
        image:
          "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=82",
      },
    ],
  },
  {
    id: "mains",
    title: "Over the fire",
    note: "Everything on this list touches the hearth before it touches your plate.",
    dishes: [
      {
        name: "Dry-aged ribeye",
        description: "28-day dry-aged, bone marrow butter, charred shallot",
        price: "$58",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82",
        tag: "signature",
      },
      {
        name: "Whole branzino",
        description: "Citrus, fennel, embered lemon",
        price: "$36",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=82",
      },
      {
        name: "Spatchcock chicken",
        description: "Brined 24 hours, pan jus, hearth vegetables",
        price: "$29",
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=82",
      },
      {
        name: "Smoked mushroom tart",
        description: "Puff pastry, fontina, thyme ash",
        price: "$24",
        image:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=82",
        tag: "veg",
      },
      {
        name: "Lamb shoulder",
        description: "Slow over embers, salsa verde, flatbread",
        price: "$34",
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=82",
        tag: "new",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    dishes: [
      {
        name: "Embered potatoes",
        description: "Crushed, chili oil, herbs",
        price: "$11",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=82",
      },
      {
        name: "Charred broccolini",
        description: "Garlic, chili flake, lemon",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82",
        tag: "veg",
      },
      {
        name: "Cast-iron cornbread",
        description: "Honey butter",
        price: "$9",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82",
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    dishes: [
      {
        name: "Smoked chocolate tart",
        description: "Sea salt, crème fraîche",
        price: "$13",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=82",
      },
      {
        name: "Hearth-roasted pear",
        description: "Brown butter crumble, vanilla ice cream",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=82",
        tag: "veg",
      },
    ],
  },
];
