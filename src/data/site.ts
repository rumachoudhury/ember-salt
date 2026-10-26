export const site = {
  name: "Ember & Salt",
  tagline: "Fire, flavor, and candlelight.",
  description:
    "Modern American cooking over an open hearth — refined seasonal plates, warm hospitality, and an intimate dining room designed for slow evenings.",
  phone: "(212) 555-0148",
  email: "hello@emberandsalt.com",
  address: "214 Foundry Lane, Lower Mills",
  city: "New York, NY 10013",
  instagram: "https://instagram.com",
  mapQuery: "214 Foundry Lane, Lower Mills, New York, NY 10013",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=214+Foundry+Lane+Lower+Mills+New+York+NY+10013",
  mapEmbedUrl:
    "https://www.google.com/maps?q=214+Foundry+Lane+Lower+Mills+New+York+NY+10013&z=14&output=embed",
} as const;

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Thursday", time: "5:30 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "5:30 PM – 11:00 PM" },
  { day: "Sunday", time: "5:00 PM – 9:00 PM" },
];
