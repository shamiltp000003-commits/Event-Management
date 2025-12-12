//data.js
export const adminDashboard_data = {
  "Totalusers": 12,
  "Totalproviders": 3,
  "Totalbookings": 9,
  "registrations": 240,
  "feedbackReceived": 95
};

export const providerDashboard_data = {
  "BookingsRecieved": 55,
     "PaymentHistory": 55,
     "FeedbackReceived": 15
};

export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];


///////////////////////////////////////////////////////////
export const auditoriumServices = [
  {
    id: "aud1",
    auditoriumName: "Grand Palace Auditorium",
    description: "A premium auditorium perfect for weddings and corporate events.",
    location: "Kochi",
    ownerContact: "9876543210",
    capacity: 600,
    price: 55000,
    openingTime: "08:00",
    closingTime: "23:00",
    providerId: "p101",
    images: [
      "/auditoriums/aud1_1.jpg",
      "/auditoriums/aud1_2.jpg",
      "/auditoriums/aud1_3.jpg",
      "/auditoriums/aud1_4.jpg"
    ],
    category: "auditorium"
  },
  {
    id: "aud2",
    auditoriumName: "Royal Heritage Hall",
    description: "Luxury hall with modern lighting and premium seating arrangement.",
    location: "Thrissur",
    ownerContact: "9543217890",
    capacity: 450,
    price: 42000,
    openingTime: "09:00",
    closingTime: "22:00",
    providerId: "p102",
    images: [
      "/auditoriums/aud2_1.jpg",
      "/auditoriums/aud2_2.jpg",
      "/auditoriums/aud2_3.jpg",
      "/auditoriums/aud2_4.jpg"
    ],
    category: "auditorium"
  },
  {
    id: "aud3",
    auditoriumName: "Green Valley Convention Center",
    description: "Spacious hall ideal for receptions, engagements and exhibitions.",
    location: "Calicut",
    ownerContact: "9998887776",
    capacity: 700,
    price: 60000,
    openingTime: "07:00",
    closingTime: "23:30",
    providerId: "p103",
    images: [
      "/auditoriums/aud3_1.jpg",
      "/auditoriums/aud3_2.jpg",
      "/auditoriums/aud3_3.jpg",
      "/auditoriums/aud3_4.jpg"
    ],
    category: "auditorium"
  },
  {
    id: "aud4",
    auditoriumName: "Blue Lotus Hall",
    description: "Affordable auditorium suited for small to mid-sized events.",
    location: "Ernakulam",
    ownerContact: "9871236540",
    capacity: 300,
    price: 28000,
    openingTime: "09:00",
    closingTime: "21:00",
    providerId: "p104",
    images: [
      "/auditoriums/aud4_1.jpg",
      "/auditoriums/aud4_2.jpg",
      "/auditoriums/aud4_3.jpg",
      "/auditoriums/aud4_4.jpg"
    ],
    category: "auditorium"
  },
  {
    id: "aud5",
    auditoriumName: "Diamond Crown Convention Hall",
    description: "High-class auditorium with premium décor, sound system and parking.",
    location: "Trivandrum",
    ownerContact: "9080706050",
    capacity: 800,
    price: 75000,
    openingTime: "06:00",
    closingTime: "23:59",
    providerId: "p105",
    images: [
      "/auditoriums/aud5_1.jpg",
      "/auditoriums/aud5_2.jpg",
      "/auditoriums/aud5_3.jpg",
      "/auditoriums/aud5_4.jpg"
    ],
    category: "auditorium"
  }
];
//////////////////////////////////////////////////////////////////////////

export const cateringServices = [
  {
    id: "cat1",
    companyName: "Royal Feast Caterers",
    ownerName: "Arun Kumar",
    contactNumber: "9876543210",
    description: "Premium catering service offering veg & non-veg menu options.",
    cateringType: "both",
    openingTime: "08:00",
    closingTime: "22:00",
    images: [
      "/catering/cat1_1.jpg",
      "/catering/cat1_2.jpg",
      "/catering/cat1_3.jpg",
      "/catering/cat1_4.jpg"
    ],
    menu: [
      { name: "Chicken Biriyani", category: "Main Course", type: "non-veg", price: 180 },
      { name: "Paneer Tikka", category: "Starter", type: "veg", price: 120 },
      { name: "Gulab Jamun", category: "Dessert", type: "veg", price: 60 }
    ],
    providerId: "p201",
    category: "catering"
  },

  {
    id: "cat2",
    companyName: "Taste of Kerala Catering",
    ownerName: "Manoj Varma",
    contactNumber: "9445566778",
    description: "Traditional Kerala meals with authentic flavors.",
    cateringType: "veg",
    openingTime: "09:00",
    closingTime: "21:00",
    images: [
      "/catering/cat2_1.jpg",
      "/catering/cat2_2.jpg",
      "/catering/cat2_3.jpg",
      "/catering/cat2_4.jpg"
    ],
    menu: [
      { name: "Sadhya", category: "Main Course", type: "veg", price: 200 },
      { name: "Pachadi", category: "Side Dish", type: "veg", price: 40 },
      { name: "Payasam", category: "Dessert", type: "veg", price: 70 }
    ],
    providerId: "p202",
    category: "catering"
  },

  {
    id: "cat3",
    companyName: "Supreme Caterers",
    ownerName: "Rohit Menon",
    contactNumber: "9977886655",
    description: "Perfect choice for weddings & corporate functions.",
    cateringType: "non-veg",
    openingTime: "07:00",
    closingTime: "23:00",
    images: [
      "/catering/cat3_1.jpg",
      "/catering/cat3_2.jpg",
      "/catering/cat3_3.jpg",
      "/catering/cat3_4.jpg"
    ],
    menu: [
      { name: "Grilled Chicken", category: "Starter", type: "non-veg", price: 150 },
      { name: "Fish Curry", category: "Main Course", type: "non-veg", price: 170 },
      { name: "Ice Cream", category: "Dessert", type: "veg", price: 50 }
    ],
    providerId: "p203",
    category: "catering"
  },

  {
    id: "cat4",
    companyName: "Delight Caterers",
    ownerName: "Radhika Nair",
    contactNumber: "9090909090",
    description: "Affordable catering suitable for birthday parties & local events.",
    cateringType: "veg",
    openingTime: "10:00",
    closingTime: "20:00",
    images: [
      "/catering/cat4_1.jpg",
      "/catering/cat4_2.jpg",
      "/catering/cat4_3.jpg",
      "/catering/cat4_4.jpg"
    ],
    menu: [
      { name: "Vegetable Pulao", category: "Main Course", type: "veg", price: 120 },
      { name: "Samosa", category: "Starter", type: "veg", price: 20 },
      { name: "Jalebi", category: "Dessert", type: "veg", price: 40 }
    ],
    providerId: "p204",
    category: "catering"
  },

  {
    id: "cat5",
    companyName: "Five Star Banquets",
    ownerName: "Kiran Joseph",
    contactNumber: "9812345678",
    description: "Luxury buffet catering with premium international dishes.",
    cateringType: "both",
    openingTime: "06:00",
    closingTime: "23:59",
    images: [
      "/catering/cat5_1.jpg",
      "/catering/cat5_2.jpg",
      "/catering/cat5_3.jpg",
      "/catering/cat5_4.jpg"
    ],
    menu: [
      { name: "BBQ Chicken", category: "Starter", type: "non-veg", price: 250 },
      { name: "Pasta Alfredo", category: "Main Course", type: "veg", price: 180 },
      { name: "Brownie", category: "Dessert", type: "veg", price: 90 }
    ],
    providerId: "p205",
    category: "catering"
  }
];
/////////////////////////////////////////////////////////////////////////////////////

export const photographyServices = [
  {
    id: "photo1",
    studioName: "Skyline Photography",
    photographerName: "Arjun Nair",
    phone: "9876543210",
    email: "skyline@gmail.com",
    location: "Kochi",
    description: "Expert wedding and candid photography with 10+ years of experience.",
    openingTime: "08:00",
    closingTime: "22:00",
    pricePerDay: 15000,
    pricePerHour: 2000,

    serviceTypes: [
      "Wedding",
      "Candid",
      "Drone",
      "Video Coverage",
      "Engagement"
    ],

    packages: [
      { name: "Wedding Premium", description: "Full day coverage + album", price: 25000 },
      { name: "Candid Exclusive", description: "Creative candid photoshoot", price: 12000 }
    ],

    portfolioImages: [
      "/photography/photo1_1.jpg",
      "/photography/photo1_2.jpg",
      "/photography/photo1_3.jpg",
      "/photography/photo1_4.jpg"
    ],

    providerId: "p301",
    category: "photography"
  },

  {
    id: "photo2",
    studioName: "Golden Moments Studio",
    photographerName: "Meera Soman",
    phone: "9900776655",
    email: "goldenmoments@gmail.com",
    location: "Calicut",
    description: "Specialized in maternity, baby shoots and birthday photography.",
    openingTime: "09:00",
    closingTime: "20:00",
    pricePerDay: 12000,
    pricePerHour: 1800,

    serviceTypes: [
      "Baby Shoot",
      "Maternity",
      "Birthday",
      "Traditional"
    ],

    packages: [
      { name: "Baby Shoot Mini", description: "2 hours studio shoot", price: 6000 },
      { name: "Maternity Deluxe", description: "Outdoor + studio package", price: 14000 }
    ],

    portfolioImages: [
      "/photography/photo2_1.jpg",
      "/photography/photo2_2.jpg",
      "/photography/photo2_3.jpg"
    ],

    providerId: "p302",
    category: "photography"
  },

  {
    id: "photo3",
    studioName: "Royal Frame Productions",
    photographerName: "Sidharth Varma",
    phone: "9123456789",
    email: "royalframe@gmail.com",
    location: "Trivandrum",
    description: "High-end cinematic wedding films and drone videography.",
    openingTime: "07:00",
    closingTime: "23:59",
    pricePerDay: 28000,
    pricePerHour: 3500,

    serviceTypes: [
      "Wedding",
      "Drone",
      "Video Coverage",
      "Pre-Wedding",
      "Candid"
    ],

    packages: [
      { name: "Cinematic Wedding", description: "Drone + full day filming", price: 45000 },
      { name: "Pre-Wedding Shoot", description: "Outdoor cinematic shoot", price: 18000 }
    ],

    portfolioImages: [
      "/photography/photo3_1.jpg",
      "/photography/photo3_2.jpg",
      "/photography/photo3_3.jpg",
      "/photography/photo3_4.jpg"
    ],

    providerId: "p303",
    category: "photography"
  },

  {
    id: "photo4",
    studioName: "LensCraft Studio",
    photographerName: "Neha Krishnan",
    phone: "9988776655",
    email: "lenscraft@gmail.com",
    location: "Ernakulam",
    description: "Affordable photography packages for small events and parties.",
    openingTime: "10:00",
    closingTime: "21:00",
    pricePerDay: 9000,
    pricePerHour: 1200,

    serviceTypes: [
      "Birthday",
      "Engagement",
      "Traditional"
    ],

    packages: [
      { name: "Birthday Basic", description: "3 hours coverage", price: 5000 },
      { name: "Engagement Classic", description: "Event coverage + portraits", price: 9000 }
    ],

    portfolioImages: [
      "/photography/photo4_1.jpg",
      "/photography/photo4_2.jpg"
    ],

    providerId: "p304",
    category: "photography"
  },

  {
    id: "photo5",
    studioName: "DreamShots Media",
    photographerName: "Rahul Ramesh",
    phone: "9871122334",
    email: "dreamshots@gmail.com",
    location: "Kannur",
    description: "Professional cinematic videography and pre-wedding concepts.",
    openingTime: "06:00",
    closingTime: "23:00",
    pricePerDay: 20000,
    pricePerHour: 2500,

    serviceTypes: [
      "Pre-Wedding",
      "Drone",
      "Wedding",
      "Candid"
    ],

    packages: [
      { name: "Drone Package", description: "Drone photos + video", price: 15000 },
      { name: "Pre-Wedding Cinematic", description: "Concept shoot & film", price: 30000 }
    ],

    portfolioImages: [
      "/photography/photo5_1.jpg",
      "/photography/photo5_2.jpg",
      "/photography/photo5_3.jpg"
    ],

    providerId: "p305",
    category: "photography"
  }
];
//////////////////////////////////////////////////////////////////////////

export const decorationServices = [
  {
    id: "dec1",
    companyName: "Dream Decor Events",
    address: "Kochi, Kerala",
    phone: "9876543210",
    description: "Premium stage decorations for weddings, receptions and engagements.",

    decorations: [
      {
        title: "Royal Wedding Stage",
        description: "Golden theme with floral arch and LED backdrop.",
        price: 25000,
        image: "/decorations/dec1_1.jpg"
      },
      {
        title: "Elegant Flower Stage",
        description: "White floral stage setup with spotlighting.",
        price: 18000,
        image: "/decorations/dec1_2.jpg"
      }
    ],

    providerId: "p401",
    category: "decoration"
  },

  {
    id: "dec2",
    companyName: "Bloom & Glow Decorators",
    address: "Calicut, Kerala",
    phone: "9445566778",
    description: "Affordable decoration services for birthdays, weddings and corporate events.",

    decorations: [
      {
        title: "Birthday Balloon Theme",
        description: "Colorful balloons with LED name board.",
        price: 9000,
        image: "/decorations/dec2_1.jpg"
      },
      {
        title: "Corporate Blue Theme",
        description: "Elegant blue backdrop for events and seminars.",
        price: 15000,
        image: "/decorations/dec2_2.jpg"
      }
    ],

    providerId: "p402",
    category: "decoration"
  },

  {
    id: "dec3",
    companyName: "Royal Stage Makers",
    address: "Trivandrum, Kerala",
    phone: "9977886655",
    description: "High-end wedding and engagement stage setups designed by professionals.",

    decorations: [
      {
        title: "Crystal Stage Setup",
        description: "Glass floral walls with chandelier center stage.",
        price: 35000,
        image: "/decorations/dec3_1.jpg"
      },
      {
        title: "Traditional Kerala Stage",
        description: "Temple-style stage with flowers, lamps and wooden backdrop.",
        price: 22000,
        image: "/decorations/dec3_2.jpg"
      }
    ],

    providerId: "p403",
    category: "decoration"
  },

  {
    id: "dec4",
    companyName: "Happy Moments Decor",
    address: "Ernakulam, Kerala",
    phone: "9988776655",
    description: "Specialists in thematic decorations for parties and family events.",

    decorations: [
      {
        title: "Kids Cartoon Theme",
        description: "Mickey Mouse theme with props and balloon art.",
        price: 12000,
        image: "/decorations/dec4_1.jpg"
      },
      {
        title: "Garden Floral Stage",
        description: "Outdoor-themed floral backdrop with natural look.",
        price: 20000,
        image: "/decorations/dec4_2.jpg"
      }
    ],

    providerId: "p404",
    category: "decoration"
  },

  {
    id: "dec5",
    companyName: "Elite Décor Studio",
    address: "Kannur, Kerala",
    phone: "9812345678",
    description: "Luxury decor packages designed for premium weddings.",

    decorations: [
      {
        title: "Luxury White Stage",
        description: "White & gold theme with roses and pillar stands.",
        price: 40000,
        image: "/decorations/dec5_1.jpg"
      },
      {
        title: "Diamond Sheer Stage",
        description: "Sheer drapery design with LED shimmering lights.",
        price: 38000,
        image: "/decorations/dec5_2.jpg"
      }
    ],

    providerId: "p405",
    category: "decoration"
  }
];
//////////////////////////////////////////////