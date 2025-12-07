// Import the event images
import event1 from '../assets/event-images/event-1.jpg';
import event2 from '../assets/event-images/event-2.jpg';

// Import Tote Bag Images
import toteBag1 from '../assets/images/product-images/tote-bags/Totebags/4.png';
import toteBag2 from '../assets/images/product-images/tote-bags/Totebags/5.png';
import toteBag3 from '../assets/images/product-images/tote-bags/Totebags/6.png';
import toteBag4 from '../assets/images/product-images/tote-bags/Totebags/7.png';
import toteBag5 from '../assets/images/product-images/tote-bags/Totebags/8.png';

// Import Tees Images
import tee1 from '../assets/images/product-images/tees/Tees clothing/9.png';
import tee2 from '../assets/images/product-images/tees/Tees clothing/10.png';
import tee3 from '../assets/images/product-images/tees/Tees clothing/11.png';
import tee4 from '../assets/images/product-images/tees/Tees clothing/12.png';

// Import Tumbler Images
import tumbler1 from '../assets/images/product-images/tumblers/Tumblers/1.png';
import tumbler2 from '../assets/images/product-images/tumblers/Tumblers/2.png';
import tumbler3 from '../assets/images/product-images/tumblers/Tumblers/3.png';
import tumbler4 from '../assets/images/product-images/tumblers/Tumblers/4.png';

// Tote Bags Collection Data
export const toteBagsData = [
  {
    id: 101,
    name: "Delulu Dreams Tote",
    tagline: "Manifest in style",
    price: "₹249.00",
    image: toteBag1,
    category: "tote-bags"
  },
  {
    id: 102,
    name: "Main character tote",
    tagline: "Your the main charcater",
    price: "₹249.00",
    image: toteBag2,
    category: "tote-bags"
  },
  {
    id: 103,
    name: "Iced Coffee Era Tote",
    tagline: "Less is more",
    price: "₹249.00",
    image: toteBag3,
    category: "tote-bags"
  },
  {
    id: 104,
    name: "Hot Girl Drama Tote",
    tagline: "Too glam to give a damn",
    price: "₹249.00",
    image: toteBag4,
    category: "tote-bags"
  },
  {
    id: 105,
    name: "XOXO Tote",
    tagline: "You know you love me, XOXO.",
    price: "₹249.00",
    image: toteBag5,
    category: "tote-bags"
  }
];

// Tees Collection Data
export const teesData = [
  {
    id: 201,
    name: "Certified Yapper Sweatshirt",
    tagline: "Own Your Spark!!",
    price: "₹799.00",
    image: tee1,
    category: "tees"
  },
  {
    id: 202,
    name: "Cute Chaos Tee",
    tagline: "Soft girl chaos",
    price: "₹399.00",
    image: tee2,
    category: "tees"
  },
  {
    id: 203,
    name: "I’m Just a Girl Tee",
    tagline: "Just a girl, doing it all",
    price: "₹399.00",
    image: tee3,
    category: "tees"
  },
  {
    id: 204,
    name: "Coastal Girl Tee",
    tagline: "Lost at sea",
    price: "₹399.00",
    image: tee4,
    category: "tees"
  }
];

// Tumblers Collection Data
export const tumblersData = [
  {
    id: 301,
    name: "Pink Bow Tumbler",
    tagline: "For the girl who loves pretty things",
    price: "₹599.00",
    image: tumbler1,
    category: "tumblers"
  },
  {
    id: 302,
    name: "Berry Bloom Tumbler",
    tagline: "Stay cute, stay hydrated",
    price: "₹599.00",
    image: tumbler2,
    category: "tumblers"
  },
  
  {
    id: 304,
    name: "Lavender Dream Tumbler",
    tagline: "Dream, sip, repeat",
    price: "₹599.00",
    image: tumbler4,
    category: "tumblers"
  }
];

// Shop All Products (combination of all categories - Tote Bags + Tees + Tumblers)
export const shopAllData = [
  ...toteBagsData,
  ...teesData,
  ...tumblersData
];

// Top Picks Data (for homepage - mix of best products from all categories)
export const topPicksData = [
  toteBagsData[0], // Delulu Dreams Tote
  teesData[0], // Certified Yapper Sweatshirt  
  tumblersData[0], // Pink Bow Tumbler
];

// Main Character Collection Products
export const mainCharacterCollectionData = [
  toteBagsData[1], // Main character tote (id: 102)
  teesData[3], // Coastal Girl Tee (id: 204)
  tumblersData[2], // Lavender Dream Tumbler (id: 304)
  toteBagsData[0], // Delulu Dreams Tote (id: 101)
];

// That Girl Collection Products
export const thatGirlCollectionData = [
  toteBagsData[3], // Hot Girl Drama Tote (id: 104)
  tumblersData[1], // Berry Bloom Tumbler (id: 302)
  teesData[2], // I'm Just a Girl Tee (id: 203)
  toteBagsData[2], // Iced Coffee Era Tote (id: 103)
];

// Self-Obsessed Collection Products
export const selfObsessedCollectionData = [
  toteBagsData[4], // XOXO Tote (id: 105)
  tumblersData[0], // Pink Bow Tumbler (id: 301)
  teesData[1], // Cute Chaos Tee (id: 202)
  teesData[0], // Certified Yapper Sweatshirt (id: 201)
];

export const communityEventsData = [
  {
    image: event1,
    alt: "People sitting at a table crafting.",
    description: "Community event 1 description.",
  },
  {
    quote: "We hosted our first Tote Bag Community Event — Brush & Brew at Big Owl Cafe, accompanied by a small live band.",
  },
  {
    quote: "Our second event, Summer I Turned Pretty, was a fan meet-up with the Scrble Girl community and mini influencers, featuring fun games and tote bag painting.",
  },
  {
    image: event2,
    alt: "Another group of people crafting.",
    description: "Community event 2 description.",
  },
];