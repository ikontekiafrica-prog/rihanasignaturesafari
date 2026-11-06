/**
 * RIHANA SIGNATURE SAFARI - OFFICIAL LUXURY EXPEDITIONS DATASET
 * 35 Curated Luxury Packages: 20 Tanzania Packages & 15 Kenya Packages
 * All pricing in USD per person sharing based on private 5-star operations.
 */

const SAFARI_PACKAGES = [
  // =========================================================================
  // TANZANIA: 20 LUXURY SAFARI & BEACH ESCAPE PACKAGES
  // =========================================================================
  {
    id: 1,
    title: "10-Day Signature Serengeti, Ngorongoro & Zanzibar Villa Retreat",
    slug: "10-day-signature-serengeti-ngorongoro-zanzibar-villa-retreat",
    days: 10,
    price: 9590,
    priceFormatted: "$9,590",
    country: "Tanzania",
    category: "Bush-to-Beach",
    image: "images/tanzania-serengeti-migration.jpg",
    destinations: ["Arusha", "Tarangire National Park", "Ngorongoro Crater", "Serengeti National Park", "Zanzibar (Kendwa/Nungwi)"],
    accommodations: [
      "Gran Meliá Arusha",
      "Sanctuary Swala Camp",
      "Ngorongoro Crater Lodge",
      "Four Seasons Safari Lodge Serengeti",
      "Zuri Zanzibar (Ocean Front Villa)"
    ],
    overview: "The quintessential Tanzanian odyssey. Witness the raw spectacle of the Great Migration and the volcanic amphitheater of Ngorongoro before flying to the spice island of Zanzibar for barefoot luxury in an oceanfront private villa.",
    highlights: [
      "Descend 600m to the floor of Ngorongoro Crater for Big Five tracking",
      "Dawn hot air balloon flight over the Serengeti with champagne breakfast",
      "Stay in an Ocean Front Villa at Zuri Zanzibar on non-tidal turquoise shores",
      "Scenic light aircraft flights minimizing overland transit time"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "VIP Arrival & Mount Meru Foothills",
        description: "VIP meet-and-greet service at Kilimanjaro International Airport (JRO). Fast-track immigration clearance and private luxury transfer to Gran Meliá Arusha, surrounded by lush coffee plantations with views of Mount Meru.",
        lodging: "Gran Meliá Arusha",
        meals: "Dinner Included"
      },
      {
        day: "Day 2",
        title: "Tarangire National Park & The Baobab Sanctuary",
        description: "Private drive in a custom 4x4 safari cruiser to Tarangire National Park, famous for colossal elephant herds and ancient baobab trees. Afternoon game drive seeking tree-climbing lions. Overnight in the secluded heart of the park.",
        lodging: "Sanctuary Swala Camp",
        meals: "Full Board & Selected House Drinks"
      },
      {
        day: "Day 3",
        title: "Tarangire Morning Safari & Ngorongoro Caldera Rim",
        description: "Early morning golden-hour game drive following the Tarangire River. Scenic transfer ascending into the misty rainforest canopy of the Ngorongoro Conservation Area rim. Evening rim walk accompanied by Maasai naturalists.",
        lodging: "Ngorongoro Crater Lodge",
        meals: "Full Board & Luxury Amenities"
      },
      {
        day: "Day 4",
        title: "Ngorongoro Crater Floor Big Five Expedition",
        description: "Full-day descent into the UNESCO World Heritage caldera floor. Track endangered black rhinos, pride of lions, and flamingos on Lake Magadi. Enjoy a silver-service private white-linen bush picnic beside the hippo pool.",
        lodging: "Ngorongoro Crater Lodge",
        meals: "Full Board & Gourmet Bush Picnic"
      },
      {
        day: "Day 5",
        title: "Scenic Bush Flight to Central Serengeti",
        description: "Board a scenic light aircraft flight to Central Serengeti (Seronera). Aerial views of the Rift Valley escarpment. Afternoon game drive targeting cheetahs and leopards roaming the iconic granite kopjes.",
        lodging: "Four Seasons Safari Lodge Serengeti",
        meals: "Full Board & Safari Activities"
      },
      {
        day: "Day 6",
        title: "Dawn Balloon Safari & Seronera Valley Exploration",
        description: "Float silently above the waking savannah at sunrise in a hot air balloon. Land amidst the wild plains for an English champagne bush breakfast. Continue with a full afternoon game drive exploring migration corridors.",
        lodging: "Four Seasons Safari Lodge Serengeti",
        meals: "Champagne Breakfast & Full Board"
      },
      {
        day: "Day 7",
        title: "Flight from Savannah to the Spice Isle of Zanzibar",
        description: "Morning bush flight from the Serengeti airstrip directly to Zanzibar (Abeid Amani Karume Airport). Private chauffeur transfer to Zuri Zanzibar on the pristine, non-tidal beaches of Kendwa. Check into your Ocean Front Villa.",
        lodging: "Zuri Zanzibar (Ocean Front Villa)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 8–9",
        title: "Indian Ocean Serenity, Private Dhow & Coral Reefs",
        description: "Two full days of barefoot ocean elegance. Embark on a private sunset dhow cruise along the northwest coast, indulge in spa treatments infused with local cloves and vanilla, and snorkel untouched coral atolls.",
        lodging: "Zuri Zanzibar (Ocean Front Villa)",
        meals: "All-Inclusive Luxury & Private Dhow"
      },
      {
        day: "Day 10",
        title: "Stone Town Farewell & International Departure",
        description: "Savor a leisurely oceanfront tropical breakfast. Private transfer to Abeid Amani Karume International Airport (ZNZ) for your scheduled onward international flight connection.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 2,
    title: "8-Day Classic Bush-to-Beach: Tarangire, Ngorongoro & Stone Town",
    slug: "8-day-classic-bush-to-beach-tarangire-ngorongoro-stone-town",
    days: 8,
    price: 7800,
    priceFormatted: "$7,800",
    country: "Tanzania",
    category: "Bush-to-Beach",
    image: "images/tanzania-tarangire-elephants.jpg",
    destinations: ["Arusha", "Tarangire National Park", "Ngorongoro Crater", "Zanzibar (Stone Town & Matemwe)"],
    accommodations: [
      "Arusha Coffee Lodge",
      "Chem Chem Lodge",
      "Neptune Ngorongoro Luxury Lodge",
      "The Residence Zanzibar"
    ],
    overview: "A balanced week-long luxury journey pairing Chem Chem's exclusive wildlife conservation corridor with Ngorongoro's natural wonder and Zanzibar's spice-scented coastal splendour.",
    highlights: [
      "Private concession game viewing at Chem Chem away from public vehicles",
      "Guided walking safari with authentic Maasai trackers",
      "Historical VIP walking tour through UNESCO Stone Town alleyways",
      "Dolphin excursion off the private Mnemba marine atoll"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Arusha Coffee Plantation",
        description: "Arrive at Kilimanjaro Airport; private transfer to Arusha Coffee Lodge. Relax in plantation suites nestled among evergreen coffee bushes. Afternoon artisan coffee roasting tour and fine garden dining.",
        lodging: "Arusha Coffee Lodge",
        meals: "Dinner Included"
      },
      {
        day: "Day 2",
        title: "Tarangire Private Wildlife Concession",
        description: "Full-day private safari exploring Tarangire's elephant migration routes. Settle into the ultra-exclusive Chem Chem Lodge on its private conservancy between Tarangire and Lake Manyara.",
        lodging: "Chem Chem Lodge",
        meals: "Full Board & Concession Activities"
      },
      {
        day: "Day 3",
        title: "Maasai Guided Walking Safari & Karatu Highlands",
        description: "Set out on foot at dawn with Maasai trackers to read animal tracks and observe wildlife intimately. Midday transfer into the cool Karatu highlands overlooking coffee estates.",
        lodging: "Neptune Ngorongoro Luxury Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 4",
        title: "Ngorongoro Crater Safari & Rim Sundowners",
        description: "Morning descent into Ngorongoro Crater for thrilling predator action and hippo pools. Ascend in late afternoon to enjoy signature sundowners on the volcanic ridgeline.",
        lodging: "Neptune Ngorongoro Luxury Lodge",
        meals: "Full Board & Picnic Lunch"
      },
      {
        day: "Day 5",
        title: "Flight to Zanzibar & Stone Town Heritage",
        description: "Fly from Lake Manyara airstrip directly to Zanzibar. Private guided historical walking tour through the Sultans' palaces, carved doorways, and bazaar streets of Stone Town before transferring to Matemwe.",
        lodging: "The Residence Zanzibar",
        meals: "Half Board"
      },
      {
        day: "Days 6–7",
        title: "Mnemba Atoll Excursion & Private Villa Relaxation",
        description: "Relax by your private plunge pool overlooking the turquoise sea. Enjoy holistic spa treatments and a private speed boat excursion to Mnemba Atoll for marine turtle and dolphin watching.",
        lodging: "The Residence Zanzibar",
        meals: "Full Board"
      },
      {
        day: "Day 8",
        title: "Oceanfront Brunch & Departure",
        description: "Leisurely beachfront morning brunch followed by private chauffeur transfer to Stone Town airport for international flights.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 3,
    title: "12-Day Ultra-Luxe Great Migration & Private Island Escape",
    slug: "12-day-ultra-luxe-great-migration-private-island-escape",
    days: 12,
    price: 14200,
    priceFormatted: "$14,200",
    country: "Tanzania",
    category: "Great Migration",
    image: "images/tanzania-hero.jpg",
    destinations: ["Arusha", "North Serengeti (Kogatende)", "Ngorongoro", "Mnemba Island (Zanzibar Archipelago)"],
    accommodations: [
      "Legendary Lodge Arusha",
      "Singita Mara River Tented Camp",
      "andBeyond Ngorongoro Crater Lodge",
      "andBeyond Mnemba Island Lodge"
    ],
    overview: "An elite combination of the world's finest eco-luxury properties: Singita's front-row seats to the Mara River crossings paired with the private island paradise of andBeyond Mnemba Island.",
    highlights: [
      "Front-row views of thrilling Mara River wildebeest and zebra crossings",
      "Singita's off-grid sustainable luxury and Michelin-standard bush cuisine",
      "Private charter flight directly onto Mnemba Island's exclusive coral atoll",
      "PADI scuba diving and private candlelight dining directly on the sand"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Tanzania - Legendary Lodge",
        description: "Arrive at Kilimanjaro International Airport. Chauffeur transfer to Legendary Lodge on a working coffee estate in Arusha. Relax in tranquil colonial-style garden cottages.",
        lodging: "Legendary Lodge Arusha",
        meals: "Dinner Included"
      },
      {
        day: "Day 2",
        title: "Fly to Kogatende & Mara River Crossing Point",
        description: "Board a private bush charter direct to Kogatende airstrip in the Northern Serengeti. Begin immediate game drives tracking wildebeest staging points along the Mara River.",
        lodging: "Singita Mara River Tented Camp",
        meals: "All-Inclusive Singita Luxury"
      },
      {
        day: "Days 3–4",
        title: "Mara River Crossings & Predator Dynamics",
        description: "Two comprehensive days dedicated to tracking crocodile river ambushes, lion prides, and stealthy leopards. Relish bespoke bush dinners under canvas beneath the African celestial stars.",
        lodging: "Singita Mara River Tented Camp",
        meals: "All-Inclusive Singita Luxury"
      },
      {
        day: "Day 5",
        title: "Aviation Hop to Lake Manyara & Ngorongoro",
        description: "Flight to Lake Manyara; transfer to andBeyond Ngorongoro Crater Lodge, famous for Versailles-meets-Maasai architecture perched dramatically on the crater rim.",
        lodging: "andBeyond Ngorongoro Crater Lodge",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 6",
        title: "Black Rhino Tracking in Ngorongoro Caldera",
        description: "Pre-dawn descent into the crater floor for an exclusive game tracking session targeting the elusive black rhinoceros. Savor butler-serviced dining in your suite in the evening.",
        lodging: "andBeyond Ngorongoro Crater Lodge",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 7",
        title: "Private Charter to Mnemba Island Sanctuary",
        description: "Direct charter flight to Zanzibar followed by private boat transfer to Mnemba Island, an exclusive private marine atoll reserved for only 24 guests at a time.",
        lodging: "andBeyond Mnemba Island Lodge",
        meals: "All-Inclusive Private Island"
      },
      {
        day: "Days 8–11",
        title: "Barefoot Island Luxury & Coral Reef Exclusivity",
        description: "Four days of pure barefoot seclusion. Enjoy complimentary PADI diving, sea kayaking, dhow excursions, massage treatments, and fresh seafood grilled over open coconut coals.",
        lodging: "andBeyond Mnemba Island Lodge",
        meals: "All-Inclusive Private Island"
      },
      {
        day: "Day 12",
        title: "Boat Transfer & International Flight Connection",
        description: "Boat transfer to mainland Zanzibar followed by private transfer to the international departures terminal.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 4,
    title: "7-Day Southern Circuit Fly-In: Nyerere (Selous) & Fanjove Island",
    slug: "7-day-southern-circuit-fly-in-nyerere-selous-fanjove-island",
    days: 7,
    price: 6950,
    priceFormatted: "$6,950",
    country: "Tanzania",
    category: "Wilderness & Coast",
    image: "images/tanzania-nyerere-selous.jpg",
    destinations: ["Dar es Salaam", "Nyerere National Park (Selous)", "Fanjove Island (Songosongo Archipelago)"],
    accommodations: [
      "The Oyster Bay Hotel",
      "Roho ya Selous (Asilia Africa)",
      "Fanjove Island Eco-Lodge"
    ],
    overview: "Explore the wild, untamed riverways of Nyerere National Park—Africa's largest wilderness reserve—paired with the remote Robinson Crusoe-style elegance of private Fanjove Island.",
    highlights: [
      "Rufiji River boat safari with close-up hippo and crocodile encounters",
      "Tracking African wild dog packs across vast, crowd-free reserves",
      "Private boat transfer to secluded Fanjove Island with historic 19th-century lighthouse",
      "Untouched coral reef snorkeling in a marine protected sanctuary"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Land in Coastal Dar es Salaam",
        description: "Arrival at Julius Nyerere International Airport in Dar es Salaam. Transfer to the boutique luxury Oyster Bay Hotel for an evening of coastal hospitality and ocean breezes.",
        lodging: "The Oyster Bay Hotel",
        meals: "Dinner"
      },
      {
        day: "Day 2",
        title: "Bush Flight to Nyerere & Rufiji River Boat Safari",
        description: "Scheduled morning bush flight into Nyerere National Park. Afternoon boat safari on the Rufiji River watching elephants drinking at sunset and pods of hippos playing.",
        lodging: "Roho ya Selous (Asilia Africa)",
        meals: "Full Board & River Activities"
      },
      {
        day: "Day 3",
        title: "African Wild Dog Tracking & Wilderness Drive",
        description: "Full-day game drive through pristine miombo woodland. Track rare African painted wild dogs and observe giant lion prides hunting around the oxbow lakes.",
        lodging: "Roho ya Selous (Asilia Africa)",
        meals: "Full Board & Bush Picnic"
      },
      {
        day: "Day 4",
        title: "Walking Safari & Flight to Fanjove Island",
        description: "Morning guided walking safari learning bush survival lore. Catch a scenic coastal bush flight via Dar es Salaam to Songosongo airstrip, followed by traditional dhow transfer to Fanjove Island.",
        lodging: "Fanjove Island Eco-Lodge",
        meals: "All-Inclusive Eco-Luxe"
      },
      {
        day: "Days 5–6",
        title: "Marine Sanctuary Snorkeling & Deserted Sandbanks",
        description: "Explore crystal-clear waters teeming with green turtles and tropical fish. Walk along deserted sandbanks revealed at low tide and dine under the stars beside the historic lighthouse.",
        lodging: "Fanjove Island Eco-Lodge",
        meals: "All-Inclusive Eco-Luxe"
      },
      {
        day: "Day 7",
        title: "Dhow Transfer & Return Flight to Dar es Salaam",
        description: "Dhow transfer to Songosongo and return flight to Dar es Salaam for ongoing international connections.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 5,
    title: "9-Day Ruaha Wilderness & Mafia Island Whale Shark Expedition",
    slug: "9-day-ruaha-wilderness-mafia-island-whale-shark-expedition",
    days: 9,
    price: 8100,
    priceFormatted: "$8,100",
    country: "Tanzania",
    category: "Wilderness & Marine",
    image: "images/tanzania-ruaha.jpg",
    destinations: ["Ruaha National Park", "Mafia Island Marine Park"],
    accommodations: [
      "Jabali Ridge",
      "Pole Pole Resort (Mafia Island)"
    ],
    overview: "Raw predator wilderness meets world-class marine biology. Encounter Ruaha's famed mega-prides of lions among granite boulders and swim with gentle whale sharks in Mafia Island's turquoise waters.",
    highlights: [
      "Architectural mastery perched atop giant boulders at Jabali Ridge",
      "Tracking lion prides that specialize in hunting Cape buffalo",
      "Swimming alongside gentle giant whale sharks in Chole Bay",
      "Barefoot luxury at Pole Pole Resort, an eco-chic Italian hideaway"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly to Ruaha & Settle into Jabali Ridge",
        description: "Board a light aircraft from Dar es Salaam deep into the rugged heart of Ruaha National Park. Check into Jabali Ridge, boasting infinity views across the baobab-studded landscape.",
        lodging: "Jabali Ridge",
        meals: "Dinner & House Drinks"
      },
      {
        day: "Days 2–3",
        title: "Extreme Wilderness & Mega-Pride Tracking",
        description: "Two days exploring Ruaha's dramatic riverbeds. Track 20-strong lion prides, rare greater kudu, and endangered wild dogs. Enjoy night drives seeking elusive leopards.",
        lodging: "Jabali Ridge",
        meals: "Full Board & Night Safaris"
      },
      {
        day: "Day 4",
        title: "Walking Safari & Aircraft Charter to Mafia Island",
        description: "Morning walking safari through the riverine forests. Board a private charter flight over the Swahili coastline to Mafia Island. Check into the serene bungalows of Pole Pole Resort.",
        lodging: "Pole Pole Resort",
        meals: "Full Board"
      },
      {
        day: "Days 5–8",
        title: "Whale Shark Encounters & Chole Bay Coral Diving",
        description: "Seasonal swimming expeditions alongside whale sharks, scuba diving in Chole Bay Marine Park, guided historical walks through Arabic ruins on Chole Island, and dhow sunset cruises.",
        lodging: "Pole Pole Resort",
        meals: "Full Board & Excursions"
      },
      {
        day: "Day 9",
        title: "Return Flight to Dar es Salaam",
        description: "Scenic return flight to Dar es Salaam International Airport for departure.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 6,
    title: "11-Day Lake Manyara Treehouse, Central Serengeti & Baraza Palace",
    slug: "11-day-lake-manyara-treehouse-central-serengeti-baraza-palace",
    days: 11,
    price: 10450,
    priceFormatted: "$10,450",
    country: "Tanzania",
    category: "Bush-to-Beach",
    image: "images/tanzania-manyara-flamingos.jpg",
    destinations: ["Lake Manyara", "Serengeti (Seronera)", "Zanzibar (Bwejuu-Paje Beach)"],
    accommodations: [
      "andBeyond Lake Manyara Tree Lodge",
      "Lemala Nanyukie Serengeti",
      "Baraza Resort & Spa Zanzibar"
    ],
    overview: "Stay in mahogany stilted treehouses in Lake Manyara, luxury tented pavilions in the Serengeti, and finish with royal Swahili-Arabic palace indulgence along Zanzibar's Bwejuu coast.",
    highlights: [
      "Sleep in luxury stilted treehouse suites deep within mahogany forests",
      "Treetop canopy walk and night game drive in Lake Manyara",
      "Unrivaled big cat density in Seronera from Lemala Nanyukie",
      "All-inclusive Arabic-Swahili Sultan palace pampering at Baraza Resort"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Lake Manyara Treehouse Haven",
        description: "Meet your safari director in Arusha; drive through the Great Rift Valley to Lake Manyara. Check into luxury stilted treehouses tucked into an ancient mahogany forest.",
        lodging: "andBeyond Lake Manyara Tree Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Canopy Walkway & Night Game Drive",
        description: "Walk suspended 18 meters above the forest floor on the treetop canopy walkway observing baboons and hornbills. In the evening, embark on a rare night game drive searching for nocturnal civets and leopards.",
        lodging: "andBeyond Lake Manyara Tree Lodge",
        meals: "Full Board & Night Drive"
      },
      {
        day: "Day 3",
        title: "Aviation Transfer to Central Serengeti Kopjes",
        description: "Bush flight from Lake Manyara to Seronera. Afternoon tracking leopards resting among giant granite kopjes. Arrive at Lemala Nanyukie with private plunge pools overlooking the savannah.",
        lodging: "Lemala Nanyukie Serengeti",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 4–5",
        title: "Infinite Serengeti Plains & Open Cruiser Safaris",
        description: "Two full days in open-sided 4x4 vehicles exploring migration trails, lion prides, and cheetah speed hunts. Dine on chef-curated cuisine by the fire pit under the African sky.",
        lodging: "Lemala Nanyukie Serengeti",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 6",
        title: "Serengeti Flight to Baraza Palace Zanzibar",
        description: "Flight from Seronera directly to Zanzibar. Private transfer to the opulent Arabic-Swahili palace resort of Baraza on the white sands of Bwejuu Beach.",
        lodging: "Baraza Resort & Spa Zanzibar",
        meals: "All-Inclusive Palace Luxury"
      },
      {
        day: "Days 7–10",
        title: "Palace Pampering, Plunge Pools & Coral Reef Walks",
        description: "Enjoy private villa plunge pools, traditional hammam spa rituals, kitesurfing on turquoise lagoons, and guided low-tide coral reef nature walks.",
        lodging: "Baraza Resort & Spa Zanzibar",
        meals: "All-Inclusive Palace Luxury"
      },
      {
        day: "Day 11",
        title: "Airport Transfer & Departure",
        description: "Private chauffeur transfer to Zanzibar International Airport for return journey.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 7,
    title: "14-Day Grand Tanzanian Northern Circuit & Thanda Island Ultra-Luxe",
    slug: "14-day-grand-tanzanian-northern-circuit-thanda-island-ultra-luxe",
    days: 14,
    price: 24500,
    priceFormatted: "$24,500",
    country: "Tanzania",
    category: "Ultra-Luxe",
    image: "images/tanzania-serengeti-kopje.jpg",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti (Grumeti)", "Thanda Island Private Marine Reserve"],
    accommodations: [
      "Sanctuary Swala",
      "The Highlands Ngorongoro",
      "Singita Sasakwa Lodge",
      "Thanda Island (Private Villa)"
    ],
    overview: "The pinnacle of East African opulence. Featuring helicopter transfers, Singita's private Grumeti concession, geodesic dome suites at The Highlands, and an exclusive buyout of Thanda Island with superyacht access.",
    highlights: [
      "Private helicopter transfers directly from Kilimanjaro to the wilderness",
      "Stay in futuristic geodesic mountain domes atop Olmoti Volcano",
      "Equestrian safaris and private tennis courts at Singita Sasakwa",
      "Exclusive private island buyout of Thanda Island with private superyacht"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Private Helicopter to Tarangire Silale Swamps",
        description: "VIP arrival at Kilimanjaro; board a private Airbus helicopter transferring directly into Tarangire. Check in to Sanctuary Swala facing private waterholes.",
        lodging: "Sanctuary Swala",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 2",
        title: "Remote Silale Swamps Game Exploration",
        description: "Explore the vast Silale marshes where hundreds of elephants gather. Enjoy private bush sundowners and nocturnal game spotting.",
        lodging: "Sanctuary Swala",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 3",
        title: "Transfer to The Highlands & Olmoti Hike",
        description: "Helicopter transfer to The Highlands Ngorongoro, featuring glass geodesic domes high on the volcano slopes. Private guided trek into the crater floor of Olmoti.",
        lodging: "The Highlands Ngorongoro",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 4",
        title: "Private Ngorongoro Crater Exploration",
        description: "Descent into the caldera for exclusive wildlife photography. Champagne lunch served inside the reserve followed by fireside single malts at The Highlands.",
        lodging: "The Highlands Ngorongoro",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 5–7",
        title: "Singita Sasakwa & Grumeti Private Concession",
        description: "Direct flight to the 350,000-acre private Singita Grumeti reserve. Enjoy horseback safaris alongside zebras, fine wine cellar tastings, and night spotlight tracking.",
        lodging: "Singita Sasakwa Lodge",
        meals: "All-Inclusive Singita Luxury"
      },
      {
        day: "Day 8",
        title: "Helicopter Charter to Private Thanda Island",
        description: "Private helicopter flight over mainland Tanzania and across the ocean to land on Thanda Island, an exclusive private marine sanctuary in the Shungimbili Marine Reserve.",
        lodging: "Thanda Island (Private Buyout)",
        meals: "Private Chef & Butler Service"
      },
      {
        day: "Days 9–13",
        title: "Private Superyacht, Deep-Sea Diving & Coral Reefs",
        description: "Complete private island freedom. Explore on the 39-foot deep-sea catamaran, swim with whale sharks, enjoy jet skis, and dine on seafood caught fresh daily by your private chef.",
        lodging: "Thanda Island (Private Buyout)",
        meals: "Private Chef & Butler Service"
      },
      {
        day: "Day 14",
        title: "Helicopter to Dar es Salaam Airport",
        description: "Helicopter flight to Dar es Salaam International Airport for VIP onward private or commercial departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 8,
    title: "6-Day Quick Escape: Fly-in Serengeti Big Cats & Nungwi Beach",
    slug: "6-day-quick-escape-fly-in-serengeti-big-cats-nungwi-beach",
    days: 6,
    price: 5600,
    priceFormatted: "$5,600",
    country: "Tanzania",
    category: "Fly-In & Beach",
    image: "images/tanzania-zanzibar-beach.jpg",
    destinations: ["Serengeti National Park", "Zanzibar (Nungwi)"],
    accommodations: [
      "Melia Serengeti Lodge",
      "Royal Zanzibar Beach Resort"
    ],
    overview: "Designed for time-pressed luxury travelers. Hop seamlessly between the Serengeti's thrilling predator action and Zanzibar's turquoise waves with zero long overland drives.",
    highlights: [
      "Light aircraft flights straight into the central Serengeti plains",
      "Intensive Big Five game tracking with experienced private guides",
      "Direct flight to Zanzibar's northern tip for sunset infinity pools",
      "Maximum comfort and leisure in a compact 6-day timeframe"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly from Arusha to Serengeti Seronera",
        description: "Morning flight from Arusha Airport directly into Serengeti Seronera airstrip. Afternoon game drive tracking lions and giraffes. Check into the elegant Melia Serengeti Lodge.",
        lodging: "Melia Serengeti Lodge",
        meals: "All-Inclusive"
      },
      {
        day: "Day 2",
        title: "Full-Day Serengeti Big Five Safari",
        description: "Full-day game drive across the Seronera River valley and Moru Kopjes. Spot tree-climbing lions, cheetah coalitions, and vast herds of plains game.",
        lodging: "Melia Serengeti Lodge",
        meals: "All-Inclusive & Bush Lunch"
      },
      {
        day: "Day 3",
        title: "Sunrise Game Drive & Flight to Zanzibar",
        description: "Sunrise safari drive in the golden savannah light. Fly directly to Zanzibar and take a private chauffeur transfer to Royal Zanzibar Beach Resort on Nungwi's warm coast.",
        lodging: "Royal Zanzibar Beach Resort",
        meals: "All-Inclusive"
      },
      {
        day: "Days 4–5",
        title: "Nungwi Beach Downtime & Ocean Watersports",
        description: "Relax on powder-white sand, enjoy swim-up bars, catamaran sailing, paddleboarding, and evening fresh seafood dinners with local Swahili acoustic music.",
        lodging: "Royal Zanzibar Beach Resort",
        meals: "All-Inclusive"
      },
      {
        day: "Day 6",
        title: "Transfer to Zanzibar Airport",
        description: "Morning tropical breakfast and transfer to Zanzibar International Airport for your return flight.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 9,
    title: "10-Day Western Circuit Odyssey: Mahale Chimpanzees & Zanzibar Coast",
    slug: "10-day-western-circuit-odyssey-mahale-chimpanzees-zanzibar-coast",
    days: 10,
    price: 15800,
    priceFormatted: "$15,800",
    country: "Tanzania",
    category: "Chimpanzee Trekking",
    image: "images/tanzania-mahale-chimpanzees.jpg",
    destinations: ["Lake Tanganyika", "Mahale Mountains National Park", "Zanzibar (Pongwe Beach)"],
    accommodations: [
      "Greystoke Mahale",
      "Tulia Zanzibar Unique Beach Resort"
    ],
    overview: "An exclusive journey to one of Africa's most remote and magical settings: trekking wild habituated chimpanzees along the forested shores of Lake Tanganyika, followed by boutique coastal opulence at Tulia Zanzibar.",
    highlights: [
      "Fly-in access to the inaccessible Mahale Mountains National Park",
      "On-foot encounters with wild habituated chimpanzee communities",
      "Sunset sailing on Lake Tanganyika in an authentic hardwood dhow",
      "Stay at Tulia Zanzibar, voted Best Luxury Romantic Beach Resort"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Charter Flight to Mahale & Dhow Boat Transfer",
        description: "Board a private shared safari charter flight from Arusha over the Great Rift Valley to Mahale airstrip. Transfer by wooden dhow across the crystalline waters of Lake Tanganyika to Greystoke Mahale.",
        lodging: "Greystoke Mahale",
        meals: "Full Board & Beach Dining"
      },
      {
        day: "Days 2–4",
        title: "Chimpanzee Trekking & Forest Exploration",
        description: "Daily guided walks into the dense mountain forests tracking habituated chimpanzee clans. Watch them groom, forage, and play. Afternoons spent kayaking, snorkeling, and dhow cruising.",
        lodging: "Greystoke Mahale",
        meals: "Full Board & Trekking Permits"
      },
      {
        day: "Day 5",
        title: "Charter Flight to Zanzibar Pongwe Coast",
        description: "Charter flight from Mahale across Tanzania directly to Zanzibar. Private limousine transfer to the five-star boutique retreat of Tulia Zanzibar.",
        lodging: "Tulia Zanzibar Unique Beach Resort",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 6–9",
        title: "Private Beachfront Indulgence & Reef Coves",
        description: "Unwind with customized holistic spa rituals, private candlelit dinners on the beach, stand-up paddleboarding in tranquil lagoon coves, and gourmet fine dining.",
        lodging: "Tulia Zanzibar Unique Beach Resort",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 10",
        title: "Private Airport Chauffeur & Departure",
        description: "Chauffeur transfer to Zanzibar Airport for scheduled international departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 10,
    title: "8-Day Tarangire Treetops & Pemba Island Underwater Retreat",
    slug: "8-day-tarangire-treetops-pemba-island-underwater-retreat",
    days: 8,
    price: 8900,
    priceFormatted: "$8,900",
    country: "Tanzania",
    category: "Unique Escapes",
    image: "images/tanzania-tarangire-elephants.jpg",
    destinations: ["Tarangire National Park", "Pemba Island"],
    accommodations: [
      "Elewana Tarangire Treetops",
      "The Manta Resort (Underwater Room)"
    ],
    overview: "Two extraordinary bucket-list experiences: elevated luxury treehouses perched high in ancient baobabs at Tarangire, combined with an overnight stay in the famous floating Underwater Room on Pemba Island.",
    highlights: [
      "Sleep in baobab treehouses overlooking private wildlife watering holes",
      "Bush walking safari and night spotlight game drive in Tarangire",
      "Sleep submerged beneath the ocean surface in the iconic Underwater Room",
      "Pure seclusion on the untouched, lush spice island of Pemba"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Tarangire Baobab Treetops",
        description: "Depart Arusha for Elewana Tarangire Treetops in a private game conservancy. Check into luxurious open-front treehouses built around giant baobabs.",
        lodging: "Elewana Tarangire Treetops",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Bush Walking & Night Spotlight Safaris",
        description: "Morning guided walking safari reading wildlife tracks. Afternoon game drive followed by sunset cocktails on a baobab viewing platform and a nocturnal game drive.",
        lodging: "Elewana Tarangire Treetops",
        meals: "Full Board & Night Drive"
      },
      {
        day: "Day 3",
        title: "Flight via Zanzibar to Secluded Pemba Island",
        description: "Fly from Lake Manyara airstrip via Zanzibar to Pemba Island. Scenic boat ride to The Manta Resort situated on the untamed northern coast.",
        lodging: "The Manta Resort",
        meals: "All-Inclusive"
      },
      {
        day: "Days 4–7",
        title: "The Underwater Room Experience & Marine Haven",
        description: "Spend an unforgettable night in the floating Underwater Room with 360-degree views of coral fish from your submerged glass bedroom. Forest walks and sandbank dining on remaining days.",
        lodging: "The Manta Resort (Underwater Room Included)",
        meals: "All-Inclusive & Marine Excursions"
      },
      {
        day: "Day 8",
        title: "Return Flight Connection",
        description: "Light aircraft flight to Zanzibar or Dar es Salaam for international flights home.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 11,
    title: "9-Day Ndutu Calving Safari & Matemwe Beach Escape",
    slug: "9-day-ndutu-calving-safari-matemwe-beach-escape",
    days: 9,
    price: 7900,
    priceFormatted: "$7,900",
    country: "Tanzania",
    category: "Great Migration",
    image: "images/tanzania-serengeti-migration.jpg",
    destinations: ["Southern Serengeti (Ndutu)", "Ngorongoro", "Zanzibar (Matemwe)"],
    accommodations: [
      "Lake Ndutu Luxury Tented Lodge",
      "Gibbs Farm",
      "Matemwe Lodge (Asilia)"
    ],
    overview: "Witness the miracle of life during the Great Migration calving season (December to March) across the Southern Serengeti plains, paired with organic farm living at Gibbs Farm and cliffside relaxation in Matemwe.",
    highlights: [
      "Off-road driving privileges in Ndutu to track cheetah hunts and newborn calves",
      "Farm-to-fork culinary excellence and garden cottage comfort at Gibbs Farm",
      "Ngorongoro Crater descent tracking resident black rhinos",
      "Private verandas with hammocks overlooking Mnemba Atoll in Zanzibar"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Flight into Ndutu Plains Calving Grounds",
        description: "Fly directly into Ndutu airstrip in the southern Serengeti ecosystem. Immediate off-road safari tracking thousands of wildebeest and hunting cheetahs.",
        lodging: "Lake Ndutu Luxury Tented Lodge",
        meals: "Full Board"
      },
      {
        day: "Days 2–3",
        title: "Predator Action & Calving Phenomenon",
        description: "Two immersive days following the 8,000 wildebeest births per day. Watch lion prides, leopards, and hyenas competing across the open acacia plains.",
        lodging: "Lake Ndutu Luxury Tented Lodge",
        meals: "Full Board & Bush Picnic"
      },
      {
        day: "Day 4",
        title: "Transfer to Historic Gibbs Farm Karatu",
        description: "Scenic drive to Gibbs Farm on the slopes of Ngorongoro. Tour the historic coffee estate, pick fresh organic vegetables, and enjoy an artisanal five-course farm dinner.",
        lodging: "Gibbs Farm",
        meals: "Farm-to-Table Full Board"
      },
      {
        day: "Day 5",
        title: "Ngorongoro Crater Safari & Flight to Zanzibar",
        description: "Early morning descent to the crater floor. Mid-afternoon transfer to Lake Manyara airstrip for a direct flight to Zanzibar. Check into Matemwe Lodge.",
        lodging: "Matemwe Lodge (Asilia)",
        meals: "Full Board"
      },
      {
        day: "Days 6–8",
        title: "Clifftop Solitude Overlooking Mnemba Atoll",
        description: "Relax in open-timber suites, snorkel the pristine reefs of Mnemba Atoll, stroll through Matemwe fishing village, and indulge in ocean-side massages.",
        lodging: "Matemwe Lodge (Asilia)",
        meals: "Full Board"
      },
      {
        day: "Day 9",
        title: "Airport Chauffeur to Stone Town",
        description: "Transfer to Stone Town Airport for onward international flights.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 12,
    title: "10-Day Selous River Cruiser & Kilwa Cultural Sands",
    slug: "10-day-selous-river-cruiser-kilwa-cultural-sands",
    days: 10,
    price: 6400,
    priceFormatted: "$6,400",
    country: "Tanzania",
    category: "Culture & Coast",
    image: "images/tanzania-nyerere-selous.jpg",
    destinations: ["Nyerere National Park", "Kilwa Kisiwani Ruins", "Kilwa Beach"],
    accommodations: [
      "Beho Beho Camp",
      "Kimbilio Lindi & Kilwa Beach Lodge"
    ],
    overview: "A refined journey blending high-end river safaris in Nyerere with the medieval Swahili civilization ruins of UNESCO World Heritage Kilwa Kisiwani along empty tropical shores.",
    highlights: [
      "Panoramic hilltop stone bandas with open fronts at legendary Beho Beho",
      "Natural thermal hot spring baths in the Beho Beho hills",
      "Private dhow excursion to 14th-century Sultan palaces of Kilwa Kisiwani",
      "Fresh grilled Indian Ocean lobsters on quiet, crowd-free beaches"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Flight from Dar es Salaam to Beho Beho",
        description: "Fly from Dar es Salaam into the Beho Beho airstrip. Settle into the pioneering stone cottages of Beho Beho Camp with sweeping views over the reserve.",
        lodging: "Beho Beho Camp",
        meals: "Full Board & House Wines"
      },
      {
        day: "Days 2–3",
        title: "River Tracking & Natural Hot Springs",
        description: "Explore the Lake Tagalala channels by open 4x4 and motorized boat. Hike through gorges to bathe in natural volcanic sulfur springs.",
        lodging: "Beho Beho Camp",
        meals: "Full Board & Guided Excursions"
      },
      {
        day: "Day 4",
        title: "Bush Flight to Historical Kilwa Coast",
        description: "Board a light bush aircraft south to Kilwa. Private transfer to Kilwa Beach Lodge situated along secluded golden sands.",
        lodging: "Kilwa Beach Lodge",
        meals: "Full Board"
      },
      {
        day: "Days 5–9",
        title: "UNESCO Swahili Ruins & Deserted Beach Living",
        description: "Explore the Great Mosque and Palace of Husuni Kubwa on Kilwa Kisiwani. Sail across protected mangrove lagoons, snorkel untouched reefs, and relish daily lobster dinners.",
        lodging: "Kilwa Beach Lodge",
        meals: "Full Board & Historical Tours"
      },
      {
        day: "Day 10",
        title: "Return Flight to Dar es Salaam",
        description: "Morning light aircraft flight back to Dar es Salaam for international departure.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 13,
    title: "11-Day Grumeti Private Reserve & Chumbe Island Eco-Luxury",
    slug: "11-day-grumeti-private-reserve-chumbe-island-eco-luxury",
    days: 11,
    price: 13600,
    priceFormatted: "$13,600",
    country: "Tanzania",
    category: "Private Reserve",
    image: "images/tanzania-serengeti-camp.jpg",
    destinations: ["Western Serengeti (Grumeti Reserve)", "Chumbe Island Coral Park", "Zanzibar"],
    accommodations: [
      "Singita Faru Faru Lodge",
      "Chumbe Island Eco-Bungalows",
      "Park Hyatt Zanzibar"
    ],
    overview: "Uncompromising exclusivity in Singita's private 350,000-acre Grumeti reserve, followed by a world-renowned eco-sanctuary on Chumbe Island and five-star heritage at Park Hyatt Zanzibar.",
    highlights: [
      "Complete off-road traversing rights in Singita Grumeti with zero public vehicles",
      "Private riverbank tracking for colossal Nile crocodiles and river crossings",
      "World-class private marine reserve snorkeling at award-winning Chumbe Island",
      "Beachfront oceanfront suites at Park Hyatt Zanzibar in the heart of Stone Town"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly to Grumeti & Singita Faru Faru",
        description: "Fly from Arusha directly to the Singita Grumeti concession. Check in to Singita Faru Faru Lodge, a contemporary masterpiece beside a busy waterhole.",
        lodging: "Singita Faru Faru Lodge",
        meals: "All-Inclusive Singita Luxury"
      },
      {
        day: "Days 2–4",
        title: "Exclusive Grumeti Reserve Game Tracking",
        description: "Experience night drives with thermal cameras, off-road cheetah tracking, walking safaris along the Grumeti River, and wine pairings from Singita's sommelier collection.",
        lodging: "Singita Faru Faru Lodge",
        meals: "All-Inclusive Singita Luxury"
      },
      {
        day: "Day 5",
        title: "Flight to Zanzibar & Boat to Chumbe Island",
        description: "Scenic flight to Zanzibar followed by private boat transfer to Chumbe Island Coral Park, an internationally recognized private marine protected sanctuary.",
        lodging: "Chumbe Island Eco-Bungalows",
        meals: "All-Inclusive Eco-Stay"
      },
      {
        day: "Days 6–7",
        title: "Protected Coral Reefs & Giant Coconut Crabs",
        description: "Snorkel in zero-impact coral gardens with 400 species of reef fish. Night walks through the baobab forest to view giant nocturnal coconut crabs.",
        lodging: "Chumbe Island Eco-Bungalows",
        meals: "All-Inclusive Eco-Stay"
      },
      {
        day: "Days 8–10",
        title: "Park Hyatt Zanzibar & Stone Town Culture",
        description: "Boat transfer to mainland Zanzibar; check into Park Hyatt Zanzibar on Stone Town beachfront. Private historical tours, rooftop cocktails, and private dhow sailing.",
        lodging: "Park Hyatt Zanzibar",
        meals: "Bed & Breakfast with Gourmet Dining"
      },
      {
        day: "Day 11",
        title: "Airport Drop-off & Departure",
        description: "Private chauffeur transfer to Zanzibar International Airport.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 14,
    title: "8-Day Katavi Wilderness & Kipili Beach Escape",
    slug: "8-day-katavi-wilderness-kipili-beach-escape",
    days: 8,
    price: 11500,
    priceFormatted: "$11,500",
    country: "Tanzania",
    category: "Western Wilderness",
    image: "images/tanzania-safari-cruiser.jpg",
    destinations: ["Katavi National Park", "Lake Tanganyika (Shoreline/Kipili)"],
    accommodations: [
      "Chada Katavi (Nomad Tanzania)",
      "Lake Shore Lodge Kipili"
    ],
    overview: "For adventurous safari connoisseurs seeking Tanzania as it was 50 years ago. Witness dramatic buffalo-lion clashes in remote Katavi before relaxing in beach chalets on the shores of Lake Tanganyika.",
    highlights: [
      "One of Africa's lowest tourist-to-wildlife ratios in remote Katavi",
      "Epic concentrations of up to 200 hippos crammed into Katuma River mud pools",
      "Private beachfront chalet right on the sand at Lake Shore Lodge",
      "Freshwater scuba diving among endemic cichlids in crystal-clear waters"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Safari Charter to Remote Katavi",
        description: "Board a twice-weekly safari aircraft charter deep into Western Tanzania. Land at Chada Katavi, an authentic luxury tented bush outpost.",
        lodging: "Chada Katavi (Nomad Tanzania)",
        meals: "Full Board & Bush Drinks"
      },
      {
        day: "Days 2–4",
        title: "Raw Katuma River Wildlife Dramas",
        description: "Watch enormous herds of thousands of buffalo stalked by apex lion prides. Observe raw hippo territorial battles and massive Nile crocodiles aestivating in mud caves.",
        lodging: "Chada Katavi (Nomad Tanzania)",
        meals: "Full Board & Game Drives"
      },
      {
        day: "Day 5",
        title: "Transfer to Lake Tanganyika at Kipili",
        description: "Scenic transfer west to the shores of Lake Tanganyika. Check into private stone beach chalets on the water's edge at Lake Shore Lodge Kipili.",
        lodging: "Lake Shore Lodge Kipili",
        meals: "Full Board"
      },
      {
        day: "Days 6–7",
        title: "Freshwater Beach Relaxation & Sunset Cruising",
        description: "Enjoy clear fresh-water swimming with zero currents, boat sunset tours with chilled wine, kayaking along rocky coves, and beach dinners beside campfire coals.",
        lodging: "Lake Shore Lodge Kipili",
        meals: "Full Board"
      },
      {
        day: "Day 8",
        title: "Return Flight to Arusha or Dar es Salaam",
        description: "Charter flight back to Arusha/Dar es Salaam for international departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 15,
    title: "10-Day Northern Highlights & Kiwengwa Beach Romance",
    slug: "10-day-northern-highlights-kiwengwa-beach-romance",
    days: 10,
    price: 8400,
    priceFormatted: "$8,400",
    country: "Tanzania",
    category: "Romantic",
    image: "images/tanzania-ngorongoro-crater.jpg",
    destinations: ["Tarangire", "Ngorongoro", "Central Serengeti", "Zanzibar (Kiwengwa)"],
    accommodations: [
      "Nimali Tarangire",
      "Sanctuary Ngorongoro Crater Camp",
      "Kubu Kubu Tented Lodge",
      "Melia Zanzibar (Level Ocean Front Villa)"
    ],
    overview: "A dream honeymoon and couples' itinerary featuring night safaris in Tarangire, crater floor exclusivity, Serengeti luxury canvas, and VIP 'The Level' cliffside villa privileges in Zanzibar.",
    highlights: [
      "Night game drives exploring Tarangire's nocturnal wildlife",
      "Private white-tablecloth crater floor champagne lunch",
      "Infinite horizon pool views over Serengeti plains at Kubu Kubu",
      "The Level exclusive oceanfront villa with private beach lounge and pier dining"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Tarangire & Night Safari",
        description: "Chauffeur transfer from Arusha to Nimali Tarangire. Afternoon game drive followed by sunset cocktails and an exciting night drive seeking leopards and aardvarks.",
        lodging: "Nimali Tarangire",
        meals: "Full Board & Night Safari"
      },
      {
        day: "Day 2",
        title: "Scenic Transfer to Ngorongoro Conservation Area",
        description: "Morning game drive past towering baobabs. Scenic drive into the Ngorongoro Conservation Area rim. Settle into luxury tented suites at Sanctuary Ngorongoro.",
        lodging: "Sanctuary Ngorongoro Crater Camp",
        meals: "Full Board"
      },
      {
        day: "Day 3",
        title: "Crater Floor Safari & Drive to Serengeti",
        description: "Descent into the caldera for Big Five sightings. Enjoy a private romantic bush lunch before continuing across the Malanja depression into the Central Serengeti.",
        lodging: "Kubu Kubu Tented Lodge",
        meals: "Full Board & Bush Lunch"
      },
      {
        day: "Days 4–5",
        title: "Central Serengeti Predator Safaris",
        description: "Two full days tracking resident cheetah coalitions and lion prides. Return to the lodge for infinity pool relaxation and candlelit gourmet dining under the stars.",
        lodging: "Kubu Kubu Tented Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 6",
        title: "Flight to Zanzibar & Melia Level Villa",
        description: "Morning flight from Seronera airstrip directly to Zanzibar. Check into The Level Ocean Front Villa at Melia Zanzibar with private infinity pool access.",
        lodging: "Melia Zanzibar (Level Ocean Front Villa)",
        meals: "The Level All-Inclusive"
      },
      {
        day: "Days 7–9",
        title: "Gabi Beach Club, Romantic Pier & Infinity Pools",
        description: "Enjoy private cabanas at Gabi Beach, romantic dinners over the water at the iconic jetty restaurant, spa massages for two, and ocean sunset cruises.",
        lodging: "Melia Zanzibar (Level Ocean Front Villa)",
        meals: "The Level All-Inclusive"
      },
      {
        day: "Day 10",
        title: "Stone Town Transfer & International Flight",
        description: "Private chauffeur transfer to Stone Town Airport for international departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 16,
    title: "7-Day Romantic Safari Hideaway: Lake Manyara & Pongwe Beach",
    slug: "7-day-romantic-safari-hideaway-lake-manyara-pongwe-beach",
    days: 7,
    price: 5250,
    priceFormatted: "$5,250",
    country: "Tanzania",
    category: "Romantic",
    image: "images/tanzania-manyara-flamingos.jpg",
    destinations: ["Lake Manyara National Park", "Zanzibar (Pongwe)"],
    accommodations: [
      "Escarpment Luxury Lodge Manyara",
      "Pongwe Beach Hotel (Seafront Suite)"
    ],
    overview: "A romantic one-week hideaway pairing breathtaking views over the Rift Valley lake escarpment with quiet tropical cove relaxation at Pongwe Beach Hotel.",
    highlights: [
      "Chalet perches overlooking Lake Manyara and the Great Rift Valley",
      "Game drives tracking tree-climbing lions and flamingo colonies",
      "Stay in a secluded Seafront Suite on one of Zanzibar's finest swimming beaches",
      "Fresh seafood barbecues on the beach under coconut palms"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Escarpment Luxury Lodge",
        description: "Private road transfer from Arusha to Escarpment Luxury Lodge overlooking the Rift Valley basin. Afternoon game drive in Lake Manyara tracking baboons and elephants.",
        lodging: "Escarpment Luxury Lodge Manyara",
        meals: "Dinner Included"
      },
      {
        day: "Day 2",
        title: "Rift Valley Rim Walk & Flight to Zanzibar",
        description: "Morning guided nature walk along the escarpment rim with scenic lookout points. Midday transfer to Manyara airstrip for a direct flight to Zanzibar. Arrive at Pongwe.",
        lodging: "Pongwe Beach Hotel (Seafront Suite)",
        meals: "Half Board"
      },
      {
        day: "Days 3–6",
        title: "Pongwe's Calm Lagoon Cove & Beach Barbecues",
        description: "Four days of pure tropical downtime. Swim in calm waters sheltered by an offshore reef, relax in hammocks under shade palms, and enjoy private seafood beach barbecues.",
        lodging: "Pongwe Beach Hotel (Seafront Suite)",
        meals: "Half Board & Candlelit Dinners"
      },
      {
        day: "Day 7",
        title: "Checkout & Transfer to Zanzibar Airport",
        description: "Private chauffeur transfer to Zanzibar International Airport.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 17,
    title: "13-Day Tanzania Complete Circuit & Zanzibar All-Suite Sanctuary",
    slug: "13-day-tanzania-complete-circuit-zanzibar-all-suite-sanctuary",
    days: 13,
    price: 12900,
    priceFormatted: "$12,900",
    country: "Tanzania",
    category: "Complete Circuit",
    image: "images/tanzania-ngorongoro-lodge.jpg",
    destinations: ["Tarangire", "Manyara", "Ngorongoro", "Serengeti", "Zanzibar (Michamvi Peninsula)"],
    accommodations: [
      "Lemala Mpingo Ridge",
      "Elewana The Manor at Ngorongoro",
      "Elewana Serengeti Pioneer Camp",
      "Zawadi Hotel Zanzibar"
    ],
    overview: "The exhaustive Northern Tanzania safari: expansive Tarangire vistas, Cape-Dutch elegance at The Manor, vintage Serengeti luxury, and cliff-edge serenity at adults-only Zawadi Hotel Zanzibar.",
    highlights: [
      "Panoramic Tarangire views from sunken private bathtubs at Mpingo Ridge",
      "Horseback riding and coffee estate tours at Elewana The Manor",
      "1930s explorer-style vintage luxury at Serengeti Pioneer Camp",
      "Adults-only private cove retreat at Zawadi Hotel on the Michamvi Peninsula"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Lemala Mpingo Ridge Tarangire",
        description: "Arrive in Arusha; private transfer to Tarangire. Check in to Lemala Mpingo Ridge high on an escarpment with commanding valley panoramas.",
        lodging: "Lemala Mpingo Ridge",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Tarangire Game Drive & Baobab Walk",
        description: "Game drive tracking large elephant herds and elusive leopards. Afternoon walking safari amidst monumental baobabs with Maasai guides.",
        lodging: "Lemala Mpingo Ridge",
        meals: "Full Board"
      },
      {
        day: "Day 3",
        title: "Drive to The Manor at Ngorongoro",
        description: "Transfer through the Karatu highlands to Elewana The Manor. Enjoy horseback riding through adjacent coffee estates and fine wine tastings.",
        lodging: "Elewana The Manor at Ngorongoro",
        meals: "Full Board"
      },
      {
        day: "Day 4",
        title: "Full-Day Ngorongoro Crater Floor Safari",
        description: "Early descent into the crater floor for a 6-hour safari expedition tracking black rhinos and lion prides. Savor a silver-service lunch beside Lake Magadi.",
        lodging: "Elewana The Manor at Ngorongoro",
        meals: "Full Board & Crater Lunch"
      },
      {
        day: "Days 5–7",
        title: "Elewana Serengeti Pioneer Camp",
        description: "Transfer to South-Central Serengeti. Stay in classic 1930s-inspired canvas pavilions perched on a rocky kopje. Daily game drives exploring endless plains.",
        lodging: "Elewana Serengeti Pioneer Camp",
        meals: "Full Board"
      },
      {
        day: "Day 8",
        title: "Direct Flight from Serengeti to Zanzibar",
        description: "Fly from Serengeti airstrip directly to Zanzibar. Private transfer across the island to Zawadi Hotel perched on a cliff-edge on the Michamvi Peninsula.",
        lodging: "Zawadi Hotel Zanzibar",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 9–12",
        title: "Adults-Only Cove Retreat & Snorkeling",
        description: "Relax in an exclusive 9-villa private sanctuary. Snorkel along the fringing reef right in front of your villa, paddleboard across the lagoon, and indulge in Swahili gastronomy.",
        lodging: "Zawadi Hotel Zanzibar",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 13",
        title: "Private Chauffeur to Zanzibar Airport",
        description: "Private transfer to the airport for your onward international journey.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 18,
    title: "9-Day Eastern Arc & Pangani Coast Bush-to-Beach",
    slug: "9-day-eastern-arc-pangani-coast-bush-to-beach",
    days: 9,
    price: 5900,
    priceFormatted: "$5,900",
    country: "Tanzania",
    category: "Coast & Wildlife",
    image: "images/tanzania-zanzibar-beach.jpg",
    destinations: ["Saadani National Park", "Pangani Coast", "Ushongo Beach"],
    accommodations: [
      "Sanctuary Saadani River Lodge",
      "The Tides Lodge Pangani"
    ],
    overview: "Where the African bush truly meets the Indian Ocean. Track lions and elephants along coastal beaches in Saadani, then relax on the pristine, quiet sands of Ushongo Beach in Pangani.",
    highlights: [
      "Game drives right onto the Indian Ocean beaches where lions roam",
      "Boat safari along the Wami River spotting river dolphins and kingfishers",
      "Secluded Swahili-style palm-thatched cottages at The Tides Lodge",
      "Snorkeling expedition to Maziwe Island Marine Reserve"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dar es Salaam to Saadani National Park",
        description: "Scenic private drive or short flight from Dar es Salaam north into Saadani National Park. Settle into luxury stilted chalets beside the river at Sanctuary Saadani.",
        lodging: "Sanctuary Saadani River Lodge",
        meals: "Full Board"
      },
      {
        day: "Days 2–3",
        title: "Wami River Boat Safari & Coastal Game Drives",
        description: "Glide down the Wami River watching hippos and rare mangrove birdlife. Track elephants walking along sandy coastlines where the jungle meets the sea.",
        lodging: "Sanctuary Saadani River Lodge",
        meals: "Full Board & Boat Safaris"
      },
      {
        day: "Day 4",
        title: "Coastal Transfer to Ushongo Beach Pangani",
        description: "Scenic coastal road transfer north along the historical Swahili coast past coconut plantations to Ushongo Beach. Check into The Tides Lodge.",
        lodging: "The Tides Lodge Pangani",
        meals: "Full Board"
      },
      {
        day: "Days 5–8",
        title: "Maziwe Island Snorkeling & Swahili Heritage",
        description: "Take a private boat trip to the uninhabited sandbar of Maziwe Island Marine Reserve for coral reef snorkeling. Tour historic Pangani town and relax in beach hammocks.",
        lodging: "The Tides Lodge Pangani",
        meals: "Full Board & Boat Trips"
      },
      {
        day: "Day 9",
        title: "Transfer to Zanzibar or Dar es Salaam",
        description: "Transfer to Zanzibar via private speedboat or light aircraft connection back to Dar es Salaam.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 19,
    title: "12-Day Serengeti Fly-Camping Adventure & Ras Kutani Coastal Serenity",
    slug: "12-day-serengeti-fly-camping-adventure-ras-kutani-coastal-serenity",
    days: 12,
    price: 11800,
    priceFormatted: "$11,800",
    country: "Tanzania",
    category: "Adventure & Coast",
    image: "images/tanzania-hero.jpg",
    destinations: ["Serengeti National Park", "South Coast Dar es Salaam (Ras Kutani)"],
    accommodations: [
      "Sayari Camp (Northern Serengeti)",
      "Serengeti Mobile Walking Fly-Camps",
      "Ras Kutani Lodge"
    ],
    overview: "An adventurous yet ultra-luxurious blend of private walking fly-camping under African stars in the Northern Serengeti, followed by barefoot Indian Ocean sophistication at Ras Kutani.",
    highlights: [
      "Walking safaris with armed park rangers tracking game completely on foot",
      "Exclusive fly-camping under the stars with bucket showers and bush chefs",
      "Sayari Camp's rim-flow pool set into the natural rock facing the plains",
      "Castaway barefoot luxury nestled between a coastal lagoon and virgin beach"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly to Northern Serengeti - Sayari Camp",
        description: "Fly from Kilimanjaro into Kogatende in Northern Serengeti. Check into the legendary Sayari Camp, acclaimed for its dramatic architecture near the Mara River.",
        lodging: "Sayari Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 2–3",
        title: "Mara River Game Viewing & Predator Tracking",
        description: "High-end vehicle game viewing along the Mara River looking for lion prides and river crossing action. Return to camp for bush dinners and campfire stories.",
        lodging: "Sayari Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 4–5",
        title: "Guided Walking Expedition & Star Fly-Camping",
        description: "Step onto the savannah on foot with master naturalist guides. Walk through untamed wilderness and sleep in private lightweight fly-camps beneath a canopy of stars.",
        lodging: "Serengeti Mobile Walking Fly-Camp",
        meals: "Camp Chef Gourmet Dining"
      },
      {
        day: "Day 6",
        title: "Bush Flight to Dar es Salaam & Ras Kutani",
        description: "Fly from Kogatende to Dar es Salaam. Short coastal hop or road transfer south to Ras Kutani, set along an idyllic freshwater lagoon and deserted white beach.",
        lodging: "Ras Kutani Lodge",
        meals: "Full Board"
      },
      {
        day: "Days 7–11",
        title: "Lagoon Kayaking, Forest Walks & Ocean Solitude",
        description: "Glide in wooden canoes through coastal lagoons, explore lush coastal forests with colobus monkeys, indulge in beach picnics, and unwind in open-air ocean suites.",
        lodging: "Ras Kutani Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 12",
        title: "Private Transfer to Dar es Salaam Airport",
        description: "Private transfer back to Dar es Salaam International Airport for departure.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 20,
    title: "8-Day Tarangire, Ngorongoro & Private Villa Jambiani Escape",
    slug: "8-day-tarangire-ngorongoro-private-villa-jambiani-escape",
    days: 8,
    price: 6850,
    priceFormatted: "$6,850",
    country: "Tanzania",
    category: "Bush-to-Beach",
    image: "images/tanzania-zanzibar-beach.jpg",
    destinations: ["Tarangire", "Ngorongoro", "Zanzibar (Jambiani)"],
    accommodations: [
      "Maramboi Tented Lodge (Suite)",
      "Ngorongoro Serena Safari Lodge",
      "White Sand Luxury Villas & Spa (Jambiani)"
    ],
    overview: "A seamless 8-day expedition connecting Tarangire's flamingo shores, Ngorongoro Crater's Big Five amphitheater, and Relais & Châteaux villa opulence on the turquoise sands of Jambiani.",
    highlights: [
      "Sweeping views across Lake Manyara palm fringes from Maramboi suites",
      "Ngorongoro Serena built into the crater rim using local river stone",
      "Stay at Relais & Châteaux White Sand Luxury Villas with private plunge pools",
      "World-class kitesurfing and hydrofoil surfing in Jambiani lagoon"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Tarangire Maramboi Suites",
        description: "Depart Arusha for Tarangire. Check into luxury suites at Maramboi Tented Lodge with wildlife often grazing right outside your deck. Afternoon game drive.",
        lodging: "Maramboi Tented Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Rift Valley Drive to Ngorongoro Serena",
        description: "Morning Rift Valley drive ascending through lush high-altitude forest to Ngorongoro Serena Safari Lodge perched on the crater rim with panoramic views.",
        lodging: "Ngorongoro Serena Safari Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 3",
        title: "Ngorongoro Crater Floor & Hippo Pool Picnic",
        description: "Full-day crater floor exploration tracking black rhinos, zebras, and hyenas. Enjoy a fresh picnic lunch by the scenic hippo pool before ascending.",
        lodging: "Ngorongoro Serena Safari Lodge",
        meals: "Full Board & Picnic Lunch"
      },
      {
        day: "Day 4",
        title: "Flight from Manyara to Zanzibar Jambiani",
        description: "Flight from Lake Manyara airstrip to Zanzibar. Private transfer to Relais & Châteaux White Sand Luxury Villas & Spa on the southeast coast at Jambiani.",
        lodging: "White Sand Luxury Villas (Private Villa)",
        meals: "Half Board & Luxury Amenities"
      },
      {
        day: "Days 5–7",
        title: "Private Villa Pools, Hydrofoil & Gourmet Dining",
        description: "Enjoy your private 500m² villa plot with pool, experience the premium kitesurfing and hydrofoil school, and savor Michelin-inspired coastal dining.",
        lodging: "White Sand Luxury Villas (Private Villa)",
        meals: "Half Board & Fine Dining"
      },
      {
        day: "Day 8",
        title: "Chauffeur Drive to Stone Town Airport",
        description: "Private chauffeur transfer to Stone Town Airport for international departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },

  // =========================================================================
  // KENYA: 15 PREMIER LUXURY SAFARI PACKAGES
  // =========================================================================
  {
    id: 21,
    title: "8-Day Quintessential Kenya: Amboseli, Samburu & Masai Mara",
    slug: "8-day-quintessential-kenya-amboseli-samburu-masai-mara",
    days: 8,
    price: 8200,
    priceFormatted: "$8,200",
    country: "Kenya",
    category: "Classic Safari",
    image: "images/kenya-masai-mara.jpg",
    destinations: ["Nairobi", "Amboseli National Park", "Samburu National Reserve", "Masai Mara National Reserve"],
    accommodations: [
      "Hemingways Nairobi",
      "Ol Tukai Lodge / Tortilis Camp",
      "Elephant Bedroom Camp",
      "Governors' Il Moran Camp"
    ],
    overview: "Kenya's iconic golden triangle: majestic Mount Kilimanjaro views in Amboseli, rare endemic wildlife in arid Samburu, and legendary big cat drama in the Masai Mara.",
    highlights: [
      "Colossal super-tusker elephant bulls framed against snow-capped Mount Kilimanjaro",
      "Tracking the unique 'Samburu Special Five' species",
      "Dawn hot air balloon safari over the Mara Triangle plains",
      "VIP flight transfers between all parks avoiding long roads"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "VIP Arrival in Nairobi - Hemingways",
        description: "VIP meet-and-greet at Jomo Kenyatta International Airport (NBO). Transfer to Hemingways Nairobi in leafy Karen for personalized butler service and gourmet dining.",
        lodging: "Hemingways Nairobi",
        meals: "Dinner Included"
      },
      {
        day: "Day 2",
        title: "Bush Flight to Amboseli & Kilimanjaro Views",
        description: "Scheduled bush flight to Amboseli. Enjoy dramatic views of Mount Kilimanjaro towering above the acacia plains. Afternoon game drive among famous elephant clans.",
        lodging: "Tortilis Camp / Ol Tukai Lodge",
        meals: "Full Board & Game Drives"
      },
      {
        day: "Day 3",
        title: "Amboseli Morning Safari & Flight North to Samburu",
        description: "Early morning photography session with elephants beneath Kilimanjaro. Board a scenic flight north across Mount Kenya's peaks into the arid Samburu Reserve.",
        lodging: "Elephant Bedroom Camp",
        meals: "Full Board"
      },
      {
        day: "Day 4",
        title: "Tracking the Samburu Special Five",
        description: "Full day tracking Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk, and Somali ostrich along the Ewaso Nyiro River. Spot leopards resting in doum palms.",
        lodging: "Elephant Bedroom Camp",
        meals: "Full Board & Bush Sundowners"
      },
      {
        day: "Day 5",
        title: "Charter Flight to the Masai Mara",
        description: "Scheduled charter flight landing in the heart of the Masai Mara. Check into Governors' Il Moran Camp along the Mara River. Evening predator drive.",
        lodging: "Governors' Il Moran Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 6–7",
        title: "Dawn Balloon Safari & Mara Triangle Game Viewing",
        description: "Take to the skies in a sunrise hot air balloon followed by champagne breakfast. Spend two full days tracking lion prides, cheetahs, and seasonal river crossings.",
        lodging: "Governors' Il Moran Camp",
        meals: "All-Inclusive & Balloon Safari"
      },
      {
        day: "Day 8",
        title: "Bush Breakfast & Flight to Nairobi",
        description: "Morning bush breakfast and scenic flight back to Wilson Airport in Nairobi. Day room or transfer to JKIA for onward international flights.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 22,
    title: "7-Day Ultra-Luxe Masai Mara Private Conservancies",
    slug: "7-day-ultra-luxe-masai-mara-private-conservancies",
    days: 7,
    price: 11900,
    priceFormatted: "$11,900",
    country: "Kenya",
    category: "Private Conservancies",
    image: "images/kenya-safari-lion.webp",
    destinations: ["Mara North Conservancy", "Olare Motorogi Conservancy"],
    accommodations: [
      "Mara Plains Camp",
      "Mahali Mzuri (Virgin Limited Edition)"
    ],
    overview: "Kenya's most prestigious private conservancies. Complete off-road access, night spotlight tracking, and world-class hospitality at Great Plains' Mara Plains Camp and Sir Richard Branson's Mahali Mzuri.",
    highlights: [
      "Strict vehicle limits and complete off-road tracking freedom",
      "Nocturnal predator drives using red-filtered spotlights",
      "Stay at Sir Richard Branson's award-winning tented camp Mahali Mzuri",
      "Direct partnership and cultural walks with local Maasai landowners"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi Wilson to Mara North",
        description: "Board a light aircraft from Nairobi Wilson to Mara North. Check in to Great Plains Conservation’s flagship Mara Plains Camp on the bend of the Ntiakitiak River.",
        lodging: "Mara Plains Camp",
        meals: "All-Inclusive Relais & Châteaux"
      },
      {
        day: "Days 2–3",
        title: "Off-Road Tracking & Nocturnal Game Drives",
        description: "Enjoy open-sided custom photographic 4x4 safaris with off-roading permissions. Track big cats hunting at night using infrared spotlights and dine by lanterns.",
        lodging: "Mara Plains Camp",
        meals: "All-Inclusive Relais & Châteaux"
      },
      {
        day: "Day 4",
        title: "Transfer to Sir Richard Branson's Mahali Mzuri",
        description: "Scenic game drive transfer across the conservancy into Olare Motorogi. Check into the futuristic curved canvas suites of Mahali Mzuri perched on a cliffside.",
        lodging: "Mahali Mzuri (Virgin Limited Edition)",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Days 5–6",
        title: "Valley Infinity Pools & Maasai Partnerships",
        description: "Watch wildlife grazing in the valley below from the infinity pool. Experience guided walking safaris with Maasai elders, bush dinners, and exceptional predator sightings.",
        lodging: "Mahali Mzuri (Virgin Limited Edition)",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Day 7",
        title: "Morning Wildlife Drive & Flight to Nairobi",
        description: "Final sunrise wildlife drive followed by a scheduled flight back to Nairobi Wilson for international departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 23,
    title: "10-Day Kenya Conservation Safari: Lewa, Ol Pejeta & Masai Mara",
    slug: "10-day-kenya-conservation-safari-lewa-ol-pejeta-masai-mara",
    days: 10,
    price: 10400,
    priceFormatted: "$10,400",
    country: "Kenya",
    category: "Conservation",
    image: "images/kenya-lewa-rhinos.jpg",
    destinations: ["Laikipia Plateau (Ol Pejeta)", "Lewa Wildlife Conservancy", "Masai Mara"],
    accommodations: [
      "Ol Pejeta Bush Camp",
      "Sirikoi Lodge (Lewa)",
      "Angama Mara"
    ],
    overview: "A purpose-driven luxury safari supporting world-renowned conservation initiatives: see the world's last two northern white rhinos, track black rhinos on foot in Lewa, and gaze over the Mara from clifftop Angama Mara.",
    highlights: [
      "Exclusive private audience with the world's last two surviving northern white rhinos",
      "Stay at Sirikoi Lodge, consistently ranked among Africa's finest safari lodges",
      "Horseback riding alongside giraffes on the Laikipia Plateau",
      "Panoramic glass-fronted suites hovering 300m above the Mara at Angama"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi to Ol Pejeta Conservancy",
        description: "Fly or private transfer from Nairobi to Ol Pejeta on the Laikipia Plateau. Settle into the eco-luxury Ol Pejeta Bush Camp along the Ewaso Nyiro River.",
        lodging: "Ol Pejeta Bush Camp",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Last Northern White Rhinos & Chimpanzees",
        description: "Visit the secure sanctuary protecting Najin and Fatu—the last two northern white rhinos on Earth. Tour Sweetwaters Chimpanzee Sanctuary and enjoy night game drives.",
        lodging: "Ol Pejeta Bush Camp",
        meals: "Full Board & Conservation Tour"
      },
      {
        day: "Day 3",
        title: "Transfer to Sirikoi Lodge Lewa",
        description: "Short road transfer into the UNESCO-listed Lewa Wildlife Conservancy. Check into Sirikoi Lodge, overlooking a thriving spring that draws daily wildlife.",
        lodging: "Sirikoi Lodge (Lewa)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 4–5",
        title: "Black Rhino Tracking & Horseback Safaris",
        description: "Track black and white rhinos on foot with anti-poaching rangers. Embark on horseback safaris alongside plains zebras and enjoy organic meals picked from Sirikoi's gardens.",
        lodging: "Sirikoi Lodge (Lewa)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 6",
        title: "Fly Lewa to Clifftop Angama Mara",
        description: "Fly from Lewa directly into the Masai Mara. Transfer to Angama Mara, suspended high on the edge of the Great Rift Valley where 'Out of Africa' was filmed.",
        lodging: "Angama Mara",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 7–9",
        title: "Out of Africa Picnics & Mara River Safaris",
        description: "Enjoy private 'Out of Africa' kopje picnics, game drives through the Mara Triangle, photography studio sessions with master editors, and Maasai warrior dances.",
        lodging: "Angama Mara",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 10",
        title: "Bush Flight to Nairobi Wilson",
        description: "Morning flight to Nairobi Wilson Airport followed by transfer to JKIA for onward journeys.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 24,
    title: "6-Day Amboseli Big Tuskers & Tsavo West Chyulu Hills",
    slug: "6-day-amboseli-big-tuskers-tsavo-west-chyulu-hills",
    days: 6,
    price: 6750,
    priceFormatted: "$6,750",
    country: "Kenya",
    category: "Big Tuskers & Hills",
    image: "images/kenya-amboseli-elephants.jpg",
    destinations: ["Amboseli National Park", "Chyulu Hills / Tsavo West"],
    accommodations: [
      "Tortilis Camp Amboseli",
      "Ol Donyo Lodge (Great Plains)"
    ],
    overview: "Focus on East Africa's rare iconic 'super-tuskers'—elephants whose tusks sweep the ground—set against Mount Kilimanjaro, followed by horseback safaris and star beds in the green volcanic Chyulu Hills.",
    highlights: [
      "Observe some of the world's last remaining super-tusker elephant bulls",
      "Private views of Mount Kilimanjaro from your tent veranda at Tortilis",
      "Sleep under the open African night sky on a private rooftop star bed at Ol Donyo",
      "Horseback riding alongside wild herds in the private Mbirikani conservancy"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi Wilson to Amboseli",
        description: "Morning flight from Wilson Airport to Amboseli. Check into Tortilis Camp in an exclusive private conservancy. Afternoon drive tracking large elephant matriarchs.",
        lodging: "Tortilis Camp Amboseli",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Full Day with Amboseli Super-Tuskers",
        description: "Full-day game drive across Amboseli's freshwater swamps and acacia woodlands. Focus on identifying celebrated super-tuskers and flamingos on Lake Amboseli.",
        lodging: "Tortilis Camp Amboseli",
        meals: "Full Board & Swampland Picnic"
      },
      {
        day: "Day 3",
        title: "Transfer into the Chyulu Hills - Ol Donyo",
        description: "Short bush flight into the Chyulu Hills. Settle into the stone and thatch villas of Ol Donyo Lodge, nestled between Tsavo and Amboseli on a private 275,000-acre conservancy.",
        lodging: "Ol Donyo Lodge (Great Plains)",
        meals: "All-Inclusive Relais & Châteaux"
      },
      {
        day: "Days 4–5",
        title: "Horseback Safaris, Mountain Bikes & Star Beds",
        description: "Ride horses alongside giraffes and zebras, mountain bike across volcanic lava flows, shoot from a sunken wildlife hide, and sleep on your villa's rooftop star bed under the Milky Way.",
        lodging: "Ol Donyo Lodge (Great Plains)",
        meals: "All-Inclusive Relais & Châteaux"
      },
      {
        day: "Day 6",
        title: "Bush Flight to Nairobi",
        description: "Morning scenic flight back to Nairobi Wilson Airport for departure.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 25,
    title: "5-Day Exclusive Great Rift Valley: Lake Naivasha & Lake Nakuru",
    slug: "5-day-exclusive-great-rift-valley-lake-naivasha-lake-nakuru",
    days: 5,
    price: 3200,
    priceFormatted: "$3,200",
    country: "Kenya",
    category: "Rift Valley",
    image: "images/tanzania-manyara-flamingos.jpg",
    destinations: ["Lake Naivasha", "Lake Nakuru National Park"],
    accommodations: [
      "Chui Lodge (Oserengoni Wildlife Sanctuary)",
      "The Cliff Nakuru"
    ],
    overview: "A tranquil 5-day escape through the Great Rift Valley. Walk with zebras on Crescent Island, track black and white rhinos on Lake Nakuru, and stay at luxury boutique cliffside tented camp The Cliff.",
    highlights: [
      "Private boat safaris on freshwater Lake Naivasha amidst pods of hippos",
      "Walking safari freely alongside wildlife on Crescent Island Sanctuary",
      "Stay at The Cliff, perched 100 meters above Lake Nakuru with panoramic views",
      "High concentration of protected black and white rhinos"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi to Naivasha Sanctuary - Chui Lodge",
        description: "Scenic private transfer from Nairobi down the Great Rift Valley escarpment. Arrive at Chui Lodge set inside the 18,000-acre Oserengoni Wildlife Sanctuary.",
        lodging: "Chui Lodge",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Lake Naivasha Boat Safari & Crescent Island",
        description: "Morning boat cruise on Lake Naivasha past feeding fish eagles. Disembark on Crescent Island for a walking safari with giraffes and zebras. Night game drive in the conservancy.",
        lodging: "Chui Lodge",
        meals: "Full Board & Night Drive"
      },
      {
        day: "Day 3",
        title: "Transfer to Lake Nakuru - The Cliff",
        description: "Drive north along the Rift floor to Lake Nakuru National Park. Check into The Cliff, an architectural luxury boutique camp cantilevered over a high cliff.",
        lodging: "The Cliff Nakuru",
        meals: "Full Board"
      },
      {
        day: "Day 4",
        title: "Rhino Tracking & Alkaline Lake Shores",
        description: "Morning and afternoon game drives tracking both endangered black and white rhinos, Rothschild's giraffes, and tree-climbing lions along the lake shores.",
        lodging: "The Cliff Nakuru",
        meals: "Full Board"
      },
      {
        day: "Day 5",
        title: "Clifftop Spa & Return to Nairobi",
        description: "Morning spa treatment with panoramic views over the lake followed by private road transfer back to Nairobi.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 26,
    title: "9-Day Northern Frontier & Samburu Wilderness Exploration",
    slug: "9-day-northern-frontier-samburu-wilderness-exploration",
    days: 9,
    price: 9150,
    priceFormatted: "$9,150",
    country: "Kenya",
    category: "Northern Frontier",
    image: "images/kenya-samburu.jpg",
    destinations: ["Samburu National Reserve", "Kalama Conservancy", "Sera Conservancy"],
    accommodations: [
      "Sasaab (The Safari Collection)",
      "Saruni Samburu",
      "Saruni Rhino Camp"
    ],
    overview: "Venture deep into Kenya's raw northern frontier. Moroccan-Swahili luxury along the river at Sasaab, panoramic granite kopjes at Saruni Samburu, and on-foot black rhino tracking in Sera Conservancy.",
    highlights: [
      "Moroccan-inspired luxury suites with private plunge pools at Sasaab",
      "Cultural interaction with authentic Samburu pastoralist communities",
      "Vast open landscapes from Saruni Samburu perched on granite rocks",
      "First on-foot black rhino tracking experience in East Africa at Sera"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi to Samburu - Sasaab",
        description: "Fly from Nairobi Wilson Airport to Samburu. Check in to Sasaab, situated on a high cliff overlooking the Ewaso Nyiro River with private plunge pools.",
        lodging: "Sasaab (The Safari Collection)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 2–3",
        title: "Ewaso Nyiro Elephant Tracking & Culture",
        description: "Track elephant families wading in the river. Visit a traditional Samburu manyatta (village) and learn ancient survival lore from local elders.",
        lodging: "Sasaab (The Safari Collection)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 4",
        title: "Transfer to Saruni Samburu Kalama",
        description: "Transfer into the private Kalama Conservancy. Check into Saruni Samburu, renowned for eco-chic villas perched atop giant granite rock formations.",
        lodging: "Saruni Samburu",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 5",
        title: "Ancient Rock Art & Panoramic Game Drives",
        description: "Visit prehistoric rock art caves, enjoy open vehicle tracking across private conservancies, and watch wildlife from a subterranean photography hide.",
        lodging: "Saruni Samburu",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 6–8",
        title: "Sera Conservancy On-Foot Black Rhino Tracking",
        description: "Transfer north to Sera Conservancy. Participate in on-foot black rhino tracking alongside trained Samburu community rangers using electronic telemetry.",
        lodging: "Saruni Rhino Camp",
        meals: "All-Inclusive & Rhino Tracking"
      },
      {
        day: "Day 9",
        title: "Scheduled Flight to Nairobi Wilson",
        description: "Flight from Samburu/Kalama back to Nairobi Wilson for international departure.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 27,
    title: "4-Day Quick Masai Mara Flying Safari",
    slug: "4-day-quick-masai-mara-flying-safari",
    days: 4,
    price: 3450,
    priceFormatted: "$3,450",
    country: "Kenya",
    category: "Flying Safari",
    image: "images/kenya-safari-lion.webp",
    destinations: ["Masai Mara National Reserve"],
    accommodations: [
      "Sanctuary Olonana"
    ],
    overview: "A rapid high-intensity luxury safari. Touch down in the Masai Mara within 45 minutes of departing Nairobi and immerse yourself in glass-sided river suites along the Mara River.",
    highlights: [
      "Ultra-convenient 45-minute flight from Nairobi directly to the Mara",
      "Stay in glass-sided luxury riverfront suites at Sanctuary Olonana",
      "Intensive big cat tracking with professional silver-level guides",
      "Bush walks along the river with armed Maasai naturalists"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi Wilson into Masai Mara",
        description: "Board a 45-minute flight from Nairobi Wilson into the Mara. Check into an architecturally stunning glass-sided river suite at Sanctuary Olonana. Afternoon game drive.",
        lodging: "Sanctuary Olonana",
        meals: "All-Inclusive"
      },
      {
        day: "Days 2–3",
        title: "Twice-Daily Big Cat Safaris & Mara River Drives",
        description: "Twice-daily game drives tracking cheetah speed hunts, riverbanks populated by hippos, and pride of lions. Sip sundowners on lookout hills over the Mara River.",
        lodging: "Sanctuary Olonana",
        meals: "All-Inclusive & Bush Lunches"
      },
      {
        day: "Day 4",
        title: "Morning Bush Walk & Return Flight",
        description: "Early morning guided bush walk discovering animal tracks and flora. Fly back to Nairobi Wilson Airport for connection home.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 28,
    title: "11-Day Grand Kenya Odyssey: Samburu, Meru, Laikipia & Mara",
    slug: "11-day-grand-kenya-odyssey-samburu-meru-laikipia-mara",
    days: 11,
    price: 13500,
    priceFormatted: "$13,500",
    country: "Kenya",
    category: "Grand Odyssey",
    image: "images/kenya-masai-mara.jpg",
    destinations: ["Samburu", "Meru National Park", "Laikipia", "Masai Mara"],
    accommodations: [
      "Elephant Watch Camp",
      "Elsa's Kopje (Meru)",
      "Segera Retreat (Laikipia)",
      "Cottar's 1920s Safari Camp (Mara)"
    ],
    overview: "The definitive Kenya journey across four distinct landscapes: intimate elephant encounters in Samburu, Elsa the lioness's rugged Meru, art and wellness at Segera, and 1920s vintage safari romance in the Mara.",
    highlights: [
      "Elephant behavioral research insights with Saba Douglas-Hamilton's camp",
      "Stay at Elsa's Kopje, carved into the granite rock above the Meru plains",
      "Contemporary African art collection and private villa living at Segera Retreat",
      "Classic 1920s vintage tented safari with canvas baths at Cottar's Camp"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi to Samburu - Elephant Watch",
        description: "Fly from Nairobi into Samburu. Arrive at Elephant Watch Camp, dedicated to the study and conservation of wild elephant family groups.",
        lodging: "Elephant Watch Camp",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Full-Day Elephant Behavioral Tracking",
        description: "Join resident researchers on game drives reading intricate elephant behavioral dynamics, greeting ceremonies, and individual trunk signals.",
        lodging: "Elephant Watch Camp",
        meals: "Full Board"
      },
      {
        day: "Day 3",
        title: "Hop Flight to Meru National Park",
        description: "Short aircraft hop south to Meru National Park. Check into award-winning Elsa’s Kopje, built into the rocky slopes of Mughwango Hill.",
        lodging: "Elsa's Kopje (Meru)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 4",
        title: "Rugged Wilderness & Born Free History",
        description: "Explore the wild streams and baobabs where George and Joy Adamson raised Elsa the lioness. Track rhinos in Meru's dedicated rhino sanctuary.",
        lodging: "Elsa's Kopje (Meru)",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 5–6",
        title: "Aviation Hop to Segera Retreat Laikipia",
        description: "Fly to the Laikipia Plateau; check into Segera Retreat. Enjoy wellness spas, solar-powered luxury villas, and viewing one of Africa's foremost private art collections.",
        lodging: "Segera Retreat (Laikipia)",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Days 7–10",
        title: "Cottar's 1920s Camp in Olderkesi Mara",
        description: "Private charter to Olderkesi Conservancy bordering the Serengeti. Relish antique gramophones, canvas bush baths, night game drives, and migration tracking.",
        lodging: "Cottar's 1920s Safari Camp",
        meals: "All-Inclusive Vintage Luxury"
      },
      {
        day: "Day 11",
        title: "Return Flight to Nairobi",
        description: "Fly from Keekorok airstrip back to Wilson Airport for international departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 29,
    title: "7-Day Great Migration River Focus: Mara Triangle Safari",
    slug: "7-day-great-migration-river-focus-mara-triangle-safari",
    days: 7,
    price: 8900,
    priceFormatted: "$8,900",
    country: "Kenya",
    category: "Great Migration",
    image: "images/tanzania-serengeti-migration.jpg",
    destinations: ["Masai Mara (Mara Triangle & Serena Sector)"],
    accommodations: [
      "Little Governors' Camp",
      "&Beyond Bateleur Camp"
    ],
    overview: "Front-row focus on the Mara River's dramatic wildebeest crossings. Split your stay between riverside Little Governors' Camp and the glamorous 1920s butler-serviced &Beyond Bateleur Camp.",
    highlights: [
      "Cross the Mara River on a private wooden boat to access Little Governors'",
      "High concentration of river crossing choke points in the Mara Triangle",
      "Personal butler service and silver dining under candlelit trees at Bateleur",
      "Unrestricted game viewing below the dramatic Oloololo Escarpment"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Flight to Musiara Airstrip & River Crossing",
        description: "Fly from Nairobi into Musiara airstrip. Cross the Mara River by private pulling boat to arrive at intimate Little Governors' Camp. Afternoon wildlife drive.",
        lodging: "Little Governors' Camp",
        meals: "All-Inclusive"
      },
      {
        day: "Days 2–3",
        title: "Mara Marsh & Riverbank Predator Dramas",
        description: "Explore the Musiara swamp where lions, elephants, and leopards congregate. Track migration herds assembling on the cliff banks ready to plunge into the river.",
        lodging: "Little Governors' Camp",
        meals: "All-Inclusive & Bush Lunches"
      },
      {
        day: "Day 4",
        title: "Transfer to &Beyond Bateleur Camp",
        description: "Transfer to the foot of the Oloololo Escarpment to check into &Beyond Bateleur Camp. Enjoy copper bathtubs, leather steamer trunks, and personal butlers.",
        lodging: "&Beyond Bateleur Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 5–6",
        title: "Silver-Service Dining & Escarpment Leopard Tracking",
        description: "Game drives exploring the western Mara Triangle. Savor silver-service bush dinners under lanterns, track leopards along the forested ridge, and relax by the lap pool.",
        lodging: "&Beyond Bateleur Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 7",
        title: "Morning Safari & Flight to Nairobi",
        description: "Morning game drive, farewell bush breakfast, and flight back to Nairobi Wilson.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 30,
    title: "8-Day Family Luxury: Nairobi Giraffe Manor, Solio Ranch & Mara",
    slug: "8-day-family-luxury-nairobi-giraffe-manor-solio-ranch-mara",
    days: 8,
    price: 12400,
    priceFormatted: "$12,400",
    country: "Kenya",
    category: "Family Luxury",
    image: "images/kenya-masai-mara.jpg",
    destinations: ["Nairobi (Langata)", "Solio Game Reserve", "Masai Mara"],
    accommodations: [
      "The Safari Collection's Giraffe Manor",
      "Solio Lodge",
      "Sala's Camp"
    ],
    overview: "The ultimate family luxury safari in East Africa: feeding Rothschild giraffes through your breakfast window at Giraffe Manor, rhino tracking on Solio Ranch, and riverside family suites at Sala's Camp.",
    highlights: [
      "Breakfast and afternoon high tea with resident endangered Rothschild giraffes",
      "Guaranteed encounters with dozens of rhinos at Solio rhino breeding sanctuary",
      "Horse riding, mountain biking, and trout fishing at Solio Lodge",
      "Private family 4x4 vehicles and plunge pools along the Sand River at Sala's Camp"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Land in Nairobi - Giraffe Manor",
        description: "VIP arrival in Nairobi. Transfer to the world-famous Giraffe Manor in Langata. Enjoy afternoon tea on the lawn as resident Rothschild giraffes join you for treats.",
        lodging: "Giraffe Manor",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 2",
        title: "Breakfast with Giraffes & Flight to Solio",
        description: "Iconic breakfast as giraffes poke their long necks through open windows. Mid-morning bush flight to Solio Ranch nestled between Mount Kenya and the Aberdare Mountains.",
        lodging: "Solio Lodge",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 3–4",
        title: "Rhino Breeding Sanctuary & Horse Riding",
        description: "Witness up to 40 black and white rhinos grazing together in one meadow. Enjoy family horseback rides, mountain biking, and evening sundowners.",
        lodging: "Solio Lodge",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 5",
        title: "Fly to Southern Masai Mara - Sala's Camp",
        description: "Scenic flight to the southern corner of the Masai Mara near the Tanzania border. Check into Sala's Camp overlooking the Sand River.",
        lodging: "Sala's Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Days 6–7",
        title: "Migration Corridors & Private Family Safaris",
        description: "Private open-sided 4x4 safaris tailored to family pace. Spot lions, cheetahs, and migrating herds. Kids enjoy Maasai warrior bush survival school.",
        lodging: "Sala's Camp",
        meals: "All-Inclusive Luxury"
      },
      {
        day: "Day 8",
        title: "Charter Flight to Nairobi Wilson",
        description: "Morning safari drive and return flight to Nairobi Wilson Airport for departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 31,
    title: "6-Day Tsavo East, Tsavo West & Chyulu Hills Safari",
    slug: "6-day-tsavo-east-tsavo-west-chyulu-hills-safari",
    days: 6,
    price: 5400,
    priceFormatted: "$5,400",
    country: "Kenya",
    category: "Wilderness & Hills",
    image: "images/kenya-tsavo.jpg",
    destinations: ["Tsavo East", "Tsavo West National Parks", "Chyulu Hills"],
    accommodations: [
      "Galdessa Camp (Tsavo East)",
      "Finch Hattons Luxury Tented Camp (Tsavo West)"
    ],
    overview: "Explore Kenya's immense Tsavo wilderness: red dust elephants bathing in the Galana River at Galdessa, paired with five-star luxury and Mount Kilimanjaro panoramas at Finch Hattons.",
    highlights: [
      "Famous red-dust-coated elephants along the banks of the Galana River",
      "View the Yatta Plateau, the world's longest lava flow",
      "Stay at Finch Hattons with private natural spring pools and wellness spa",
      "Underwater glass viewing chamber for hippos at Mzima Springs"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi to Tsavo East - Galdessa Camp",
        description: "Fly from Nairobi Wilson Airport to Tsavo East. Arrive at Galdessa Camp nestled along the Galana River. Afternoon game drive tracking red elephants.",
        lodging: "Galdessa Camp",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Yatta Plateau & Lugard Falls",
        description: "Full day exploring the immense 300km-long Yatta Plateau. Visit the carved rapids of Lugard Falls and crocodile pools.",
        lodging: "Galdessa Camp",
        meals: "Full Board & Bush Picnic"
      },
      {
        day: "Day 3",
        title: "Air Transfer to Finch Hattons Tsavo West",
        description: "Short air hop to Tsavo West. Check into Finch Hattons, featuring chandelier-lit luxury tents facing natural freshwater hippos pools with Kilimanjaro views.",
        lodging: "Finch Hattons Luxury Tented Camp",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Days 4–5",
        title: "Mzima Springs Hippo Hide & Shetani Lava Flows",
        description: "Walk inside the underwater glass hide at Mzima Springs watching hippos and fish swim. Explore the Shetani black lava flows and unwind at the Chyulu Spa.",
        lodging: "Finch Hattons Luxury Tented Camp",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Day 6",
        title: "Morning Safari & Flight to Nairobi",
        description: "Morning game drive and scheduled flight back to Nairobi for international departure.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 32,
    title: "10-Day Bush & Stars: Samburu, Lewa & Shaba Reserves",
    slug: "10-day-bush-stars-samburu-lewa-shaba-reserves",
    days: 10,
    price: 9800,
    priceFormatted: "$9,800",
    country: "Kenya",
    category: "Wilderness & Biplane",
    image: "images/kenya-samburu.jpg",
    destinations: ["Samburu", "Shaba National Reserve", "Lewa Conservancy"],
    accommodations: [
      "Saruni Samburu",
      "Joy's Camp (Shaba)",
      "Lewa Wilderness Lodge"
    ],
    overview: "A journey through Kenya's dramatic northern drylands: sheer granite viewpoints at Saruni Samburu, the natural oasis springs of Joy's Camp in Shaba, and vintage open-cockpit biplane safaris at Lewa Wilderness.",
    highlights: [
      "Scenic flights in a vintage open-cockpit Waco biplane over Lewa",
      "Stay at Joy's Camp, built on the historic site where Joy Adamson lived",
      "Track endangered black rhinos on foot and horseback at Lewa Wilderness",
      "Unrivaled night stargazing through pristine desert skies"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi to Samburu Kalama - Saruni",
        description: "Fly from Nairobi to Samburu. Check into cliffside stone villas at Saruni Samburu. Afternoon wildlife tracking across Kalama Conservancy.",
        lodging: "Saruni Samburu",
        meals: "All-Inclusive"
      },
      {
        day: "Days 2–3",
        title: "Open Rock-Face Panoramas & Special Five",
        description: "Track gerenuks, Grevy's zebras, and leopards. Enjoy bush dinners on private rock lookouts and night star-gazing sessions.",
        lodging: "Saruni Samburu",
        meals: "All-Inclusive"
      },
      {
        day: "Day 4",
        title: "Transfer to Joy's Camp in Shaba Reserve",
        description: "Scenic transfer east to Shaba National Reserve. Check in to the elegant tented pavilions of Joy's Camp, set around natural springs where game gathers.",
        lodging: "Joy's Camp (Shaba)",
        meals: "Full Board"
      },
      {
        day: "Day 5",
        title: "Volcanic Gorges & Springs of Shaba",
        description: "Discover Shaba's rugged volcanic gorges, natural river springs, and dry scrub landscapes made famous by the film 'Born Free'.",
        lodging: "Joy's Camp (Shaba)",
        meals: "Full Board"
      },
      {
        day: "Days 6–9",
        title: "Lewa Wilderness: Biplane & Horseback Safaris",
        description: "Transfer to Lewa Wilderness, one of Kenya's oldest family-run ranches. Experience vintage biplane flying, horseback tracking with rhinos, and tennis.",
        lodging: "Lewa Wilderness Lodge",
        meals: "Full Board & Biplane Activity"
      },
      {
        day: "Day 10",
        title: "Flight to Nairobi Wilson Airport",
        description: "Scheduled flight to Nairobi Wilson Airport for connection home.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 33,
    title: "7-Day Rift Valley Escarpment & Lake Baringo Avi-Safari",
    slug: "7-day-rift-valley-escarpment-lake-baringo-avi-safari",
    days: 7,
    price: 5100,
    priceFormatted: "$5,100",
    country: "Kenya",
    category: "Avi-Safari & Lakes",
    image: "images/tanzania-manyara-flamingos.jpg",
    destinations: ["Lake Bogoria", "Lake Baringo", "Great Rift Valley"],
    accommodations: [
      "Loldia House",
      "Samatian Island Camp (Lake Baringo)"
    ],
    overview: "A specialized birding and scenic lake retreat: historical settler living at Loldia House on Lake Naivasha paired with private island seclusion at Samatian Island Camp on Lake Baringo.",
    highlights: [
      "Over 470 avian species including African fish eagles and Verreaux's eagles",
      "Boat excursions past feeding fish eagles and Nile crocodiles",
      "Day excursion to Lake Bogoria's boiling geysers and million-strong flamingo flocks",
      "Stay on a private island in the middle of Lake Baringo with 360-degree views"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi to Loldia House Lake Naivasha",
        description: "Private road transfer from Nairobi down the Rift Valley to Loldia House, an authentic 1920s settler farm on the shores of Lake Naivasha.",
        lodging: "Loldia House",
        meals: "Full Board"
      },
      {
        day: "Day 2",
        title: "Excursion to Lake Nakuru & Hell's Gate",
        description: "Day excursion to Hell's Gate canyon and Lake Nakuru National Park for rhino tracking. Return to Loldia for afternoon garden tea.",
        lodging: "Loldia House",
        meals: "Full Board"
      },
      {
        day: "Day 3",
        title: "Scenic Flight North to Lake Baringo",
        description: "Board a light aircraft flight north over the volcanic rift to Lake Baringo. Boat transfer to private island stay at Samatian Island Camp.",
        lodging: "Samatian Island Camp",
        meals: "Full Board"
      },
      {
        day: "Days 4–6",
        title: "Boat Safaris, Fish Eagles & Geysers",
        description: "Guided birding with ornithologist naturalists, sunrise boat rides photographing fish eagles, and a day trip to the hot springs and flamingos of Lake Bogoria.",
        lodging: "Samatian Island Camp",
        meals: "Full Board & Boat Tours"
      },
      {
        day: "Day 7",
        title: "Flight Back to Nairobi Wilson",
        description: "Light aircraft flight back to Nairobi Wilson Airport for ongoing travel.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 34,
    title: "8-Day Private Wildlife Photography Safari: Mara & Olare Motorogi",
    slug: "8-day-private-wildlife-photography-safari-mara-olare-motorogi",
    days: 8,
    price: 10800,
    priceFormatted: "$10,800",
    country: "Kenya",
    category: "Photography Safari",
    image: "images/kenya-safari-lion.webp",
    destinations: ["Masai Mara National Reserve", "Olare Motorogi Conservancy"],
    accommodations: [
      "Kicheche Bush Camp",
      "Mara Expedition Camp"
    ],
    overview: "Engineered specifically for wildlife photographers. Custom open-sided 4x4 vehicles with swivel seats, beanbags, camera mounts, expert photo guides, and priority golden-hour positioning.",
    highlights: [
      "Specially modified 4x4 vehicles with 360-degree swivel photography seats",
      "Guaranteed low angle perspectives for big cat and action captures",
      "Evening digital post-processing and Lightroom review sessions in camp",
      "Unrestricted off-road tracking in premier predator territory"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi to Mara Olkiombo - Kicheche",
        description: "Fly from Wilson Airport into Olkiombo airstrip. Transfer to Kicheche Bush Camp in Olare Motorogi Conservancy, renowned for photographic excellence.",
        lodging: "Kicheche Bush Camp",
        meals: "All-Inclusive Photographic Safari"
      },
      {
        day: "Days 2–4",
        title: "Custom Photo Vehicles & Dawn Light Drives",
        description: "Full days with custom photographic vehicles. Position vehicles for golden dawn backlighting, panning shots of running cheetahs, and low-angle lion portraits.",
        lodging: "Kicheche Bush Camp",
        meals: "All-Inclusive Photographic Safari"
      },
      {
        day: "Day 5",
        title: "Relocate to Mara Expedition Camp",
        description: "Move camp to Great Plains' Mara Expedition Camp. Focus on private conservancy leopard territories and acacia tree silhouettes at sunset.",
        lodging: "Mara Expedition Camp",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Days 6–7",
        title: "Action Tracking, Sundowners & Critique",
        description: "Full days dedicated to wildlife action sequences. Review images in the editing tent with professional photography guides and enjoy sundowners.",
        lodging: "Mara Expedition Camp",
        meals: "All-Inclusive Ultra-Luxe"
      },
      {
        day: "Day 8",
        title: "Morning Shoot & Flight to Nairobi",
        description: "Final sunrise photography session followed by flight to Nairobi Wilson Airport.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  },
  {
    id: 35,
    title: "6-Day Amboseli Elephant Research & Chyulu Hills Luxury",
    slug: "6-day-amboseli-elephant-research-chyulu-hills-luxury",
    days: 6,
    price: 6200,
    priceFormatted: "$6,200",
    country: "Kenya",
    category: "Elephant Research",
    image: "images/kenya-amboseli-elephants.jpg",
    destinations: ["Amboseli National Park", "Chyulu Hills"],
    accommodations: [
      "Porini Amboseli Camp (Selenkay Conservancy)",
      "Campi ya Kanzi"
    ],
    overview: "A deeply authentic conservation experience: stay at Porini Amboseli in private Selenkay Conservancy, followed by the classic Italian-influenced eco-splendor of Campi ya Kanzi under Kilimanjaro.",
    highlights: [
      "Private Selenkay Conservancy game drives away from crowds",
      "Full day inside Amboseli observing elephant clan dynamics with researchers",
      "Stay at Campi ya Kanzi, an iconic community-owned eco-luxury lodge",
      "Guided forest walks with Maasai warriors in the sacred Chyulu cloud forests"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Nairobi to Selenkay - Porini Amboseli",
        description: "Fly from Nairobi Wilson into Selenkay Conservancy airstrip. Check into Porini Amboseli Camp, an authentic eco-tented camp. Afternoon walking safari.",
        lodging: "Porini Amboseli Camp",
        meals: "All-Inclusive"
      },
      {
        day: "Day 2",
        title: "Full-Day Amboseli National Park Safari",
        description: "Full-day game drive in Amboseli beneath Kilimanjaro's snowy dome. Observe elephant family groups, cheetahs, and plains game. Picnic lunch in the park.",
        lodging: "Porini Amboseli Camp",
        meals: "All-Inclusive & Park Picnic"
      },
      {
        day: "Day 3",
        title: "Air Transfer to Campi ya Kanzi Chyulu",
        description: "Short scenic flight to Campi ya Kanzi in the Chyulu Hills. Settle into classic Italian-influenced luxury cottages built from local lava rock and fallen wood.",
        lodging: "Campi ya Kanzi",
        meals: "All-Inclusive Eco-Luxe"
      },
      {
        day: "Days 4–5",
        title: "Maasai Cloud Forest Treks & Star-Gazing",
        description: "Hike through misty cloud forests with Maasai warriors, track game on foot, explore volcanic caves, and enjoy homemade Italian pasta dinners.",
        lodging: "Campi ya Kanzi",
        meals: "All-Inclusive Eco-Luxe"
      },
      {
        day: "Day 6",
        title: "Scenic Flight to Nairobi Wilson",
        description: "Scenic flight over the Chyulu Hills back to Nairobi Wilson Airport for departures.",
        lodging: "Departure",
        meals: "Breakfast"
      }
    ]
  }
];

// Helper functions for filtering and querying
if (typeof window !== "undefined") {
  window.SAFARI_PACKAGES = SAFARI_PACKAGES;

  window.getPackageById = function(id) {
    const numId = parseInt(id, 10);
    return SAFARI_PACKAGES.find(p => p.id === numId) || null;
  };

  window.getPackageBySlug = function(slug) {
    return SAFARI_PACKAGES.find(p => p.slug === slug) || null;
  };
}
