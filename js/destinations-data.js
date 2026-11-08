/**
 * RIHANNA SIGNATURE SAFARI - OFFICIAL SANCTUARY DESTINATIONS DATASET
 * Curated from our 35 Signature Safari Packages
 * Covers all prime wildlife sanctuaries and island escapes across Tanzania and Kenya.
 */

const SAFARI_DESTINATIONS = [
  // =========================================================================
  // TANZANIA SANCTUARIES
  // =========================================================================
  {
    id: "serengeti",
    slug: "destination-serengeti.html",
    name: "Serengeti National Park",
    country: "Tanzania",
    circuit: "Northern Safari Circuit • Tanzania",
    tagline: "The Endless Plains & World's Greatest Wildlife Theatre",
    image: "images/tanzania-serengeti-migration.jpg",
    heroImage: "images/tanzania-serengeti-kopje.jpg",
    galleryImages: [
      "images/tanzania-serengeti-migration.jpg",
      "images/tanzania-serengeti-camp.jpg"
    ],
    filterKey: "Serengeti",
    area: "14,763 sq km (5,700 sq mi)",
    climate: "Daytime 25°C to 28°C; crisp savannah mornings around 14°C.",
    governingAuthority: "TANAPA (Tanzania National Parks Authority) • UNESCO World Heritage Site",
    quickGlance: "Tanzania's oldest and most celebrated national park, world-renowned for the annual Great Migration of over 1.5 million wildebeest, dramatic Mara River crossings, and the densest concentration of apex predators on earth.",
    overview: "Spanning 14,763 square kilometers of untamed African savannah in northern Tanzania, the Serengeti represents one of the oldest and least disturbed ecosystems on earth. The word originates from the Maasai phrase 'Siringit'—the place where the land moves on forever. From the thundering river crossings of the Great Migration across the Mara and Grumeti rivers to resident big cat coalitions prowling ancient granite kopjes, this UNESCO World Heritage ecosystem delivers raw natural spectacle without equal.",
    signaturePhenomenon: {
      title: "The Great Wildebeest Migration & River Crossings",
      text: "Over 1.5 million wildebeest accompanied by 250,000 zebras and gazelles undertake an uninterrupted circular odyssey tracking seasonal rains and nutrient-dense grass. Depending on your travel dates, you can witness dramatic predator ambush crossings at the Mara and Grumeti rivers (July to October) or the explosive synchronized calving season across the southern Ndutu plains (January to March) where 8,000 calves are born daily."
    },
    authorityText: "Serengeti National Park is strictly conserved under the stewardship of TANAPA (Tanzania National Parks Authority) and protected as a UNESCO World Heritage Site. Rihanna Signature Safari operates fully licensed private safaris under TATO (Tanzania Association of Tour Operators) standards with 24/7 AMREF Flying Doctors evacuation coverage.",
    wildlifeHighlights: ["The Great Migration (1.5M Wildebeest & Zebras)", "Apex Lion Prides & Tree-Climbing Lions", "Leopards of Seronera Kopjes", "Cheetah Coalitions on the Open Plains", "Colossal Nile Crocodiles"],
    seasonalGuide: {
      drySeason: "June to October: Premier big game tracking. Grasses graze short, waterholes dry up, and herds gather tightly along permanent rivers. Optimal window for dramatic Mara River crossings.",
      calvingOrGreen: "January to March: Calving season in Southern Ndutu. Thousands of newborn calves attract extraordinary predator action from lion prides and cheetah coalitions.",
      weatherTip: "April to May brings the lush Green Season with dramatic emerald photography, migratory birds, and complete privacy at privileged lodge rates."
    },
    topActivities: [
      { title: "Dawn & Dusk 4x4 Game Tracking", desc: "Private game drives in customized Land Cruisers with 360-degree pop-up roofs to track big cats during active hunting windows.", icon: "fa-solid fa-binoculars" },
      { title: "Serengeti Sunrise Hot Air Ballooning", desc: "Float silently above the migration herds at dawn before touching down for a white-glove champagne bush breakfast.", icon: "fa-solid fa-plane-departure" },
      { title: "Granite Kopje Predator Tracking", desc: "Explore the ancient Moru and Simba Kopjes, favored vantage points for resting lion prides and elusive leopards.", icon: "fa-solid fa-paw" },
      { title: "Private Conservancy Night Drives", desc: "Off-road and spotlight night drives available exclusively in private adjoining concessions like Singita Grumeti and Mwiba.", icon: "fa-solid fa-moon" }
    ],
    howToReach: "Daily light aircraft bush flights connect directly from Kilimanjaro International Airport (JRO), Arusha (ARK), and Zanzibar (ZNZ) into secluded Serengeti airstrips (Seronera, Kogatende, Grumeti, Ndutu) in 45–75 minutes, eliminating exhausting highway transit.",
    faqs: [
      { q: "How many days are recommended for an immersive Serengeti safari?", a: "We recommend at least 3 to 4 nights inside the Serengeti to comfortably explore distinct sectors (Central Seronera, Western Corridor, or Northern Mara) without feeling rushed." },
      { q: "Are Big Five sightings frequent in the Serengeti?", a: "Yes. Lions, leopards, elephants, and cape buffalo are sighted in high densities daily. Endangered black rhinos are securely protected around the secluded Moru Kopjes and neighboring Ngorongoro caldera." },
      { q: "What should I pack for my Serengeti expedition?", a: "Neutral khaki/beige bush attire, a warm fleece for crisp sunrise drives, polarising sunglasses, broad-brimmed safari hat, and 8x42 binoculars. Soft luggage under 15kg is required for bush flights." }
    ],
    bestTimeToVisit: "Year-Round: July–October (Mara River Crossings), December–March (Southern Ndutu Calving Season), April–June (Western Grumeti Migration).",
    whyChooseUs: "At Rihanna Signature Safari, we do not subject our guests to grueling 8-hour highway transfers. We utilize private Cessna bush flights landing directly on secluded Serengeti airstrips (Seronera, Kogatende, Grumeti, Ndutu). Our customized 4x4 Land Cruisers feature 360-degree pop-up photographic roofs, private onboard refrigerated refreshments, and are captained by Gold-certified naturalist guides with over 15 years of tracking expertise.",
    ourPromise: "100% private, unhurried game viewing. We maintain off-road traversing privileges in premier private conservancies (such as Singita Grumeti and Mwiba) to position you away from tourist vehicle crowds. Every guest is covered with 24/7 AMREF Flying Doctors emergency medical evacuation, and our itineraries directly support anti-poaching ranger units and community education."
  },
  {
    id: "ngorongoro",
    slug: "destination-ngorongoro.html",
    name: "Ngorongoro Conservation Area & Crater",
    country: "Tanzania",
    circuit: "Northern Safari Circuit • UNESCO Biosphere",
    tagline: "The Eighth Wonder of the World & Volcanic Caldera Haven",
    image: "images/tanzania-ngorongoro-crater.jpg",
    heroImage: "images/tanzania-ngorongoro-lodge.jpg",
    galleryImages: [
      "images/tanzania-ngorongoro-crater.jpg",
      "images/tanzania-ngorongoro-lodge.jpg"
    ],
    filterKey: "Ngorongoro",
    area: "8,292 sq km (3,200 sq mi); Caldera floor 260 sq km",
    climate: "Caldera rim reaches 2,200m elevation with crisp mornings (10°C / 50°F); caldera floor warms to 26°C.",
    governingAuthority: "NCAA (Ngorongoro Conservation Area Authority) • UNESCO World Heritage Site",
    quickGlance: "The world's largest intact volcanic caldera, forming a self-contained natural wildlife amphitheater 600m deep. Home to permanent populations of over 25,000 large mammals, including endangered black rhinos and giant tuskers.",
    overview: "Formed millions of years ago when a massive volcano collapsed upon itself, the Ngorongoro Crater is the world's largest unbroken, unflooded volcanic caldera. Its sheer rim towers 600 meters (2,000 feet) above a 260-square-kilometer natural floor. Inside this UNESCO biosphere resides a permanent population of over 25,000 large mammals, including East Africa's most securely protected black rhinos, colossal tusked elephants, dense lion prides, and soda lakes shimmering pink with flamingos.",
    signaturePhenomenon: {
      title: "Africa's Eden & The High-Density Big Five Sanctuary",
      text: "Unlike open savannah parks where animals migrate away in dry seasons, the volcanic floor of Ngorongoro provides permanent freshwater springs, Lerai acacia forests, and fertile grazing year-round. This enables effortless Big Five tracking within a single morning descent."
    },
    authorityText: "Governed by the NCAA (Ngorongoro Conservation Area Authority) as a pioneer multiple-use conservation area where traditional Maasai pastoralists coexist alongside protected wildlife under strict UNESCO World Heritage protocols.",
    wildlifeHighlights: ["Critically Endangered Black Rhinos", "Caldera Lion Prides", "Flamingo Flocks on Lake Magadi", "Giant Golden Jackals", "Bat-Eared Foxes & Serval Cats"],
    seasonalGuide: {
      drySeason: "June to October: Vegetation is sparse, facilitating effortless spotting of black rhinos, cheetahs, and lion prides across the open grassland floor.",
      calvingOrGreen: "November to May: The caldera floor transforms into a vivid green carpet adorned with blooming wildflowers and thousands of lesser flamingos on Lake Magadi.",
      weatherTip: "Rim lodges sit high at 2,200 meters where evening temperatures drop sharply. Warm fleece layering is essential for dawn descent drives."
    },
    topActivities: [
      { title: "First-Gate Dawn Caldera Descent", desc: "Descend the forested walls at 06:30 AM before tourist crowds arrive, catching predators active in the cool morning mist.", icon: "fa-solid fa-mountain" },
      { title: "Private Ngoitoktok Springs Picnic", desc: "Enjoy a silver-service white-linen bush picnic beside the hippo pool, watching massive pods wallow just meters away.", icon: "fa-solid fa-utensils" },
      { title: "Highland Forest & Crater Rim Walks", desc: "Guided walking safaris along the crater rim forest accompanied by armed rangers and knowledgeable Maasai naturalists.", icon: "fa-solid fa-person-walking" },
      { title: "Empakaai & Olmoti Crater Trekking", desc: "Explore the secluded sister calderas of Empakaai and Olmoti for uncrowded hikes and flamingo-ringed crater lakes.", icon: "fa-solid fa-compass" }
    ],
    howToReach: "Conveniently located 3 to 3.5 hours overland from Arusha along well-paved tarmac, or a quick 25-minute flight into Lake Manyara airstrip followed by a 45-minute scenic highland transfer.",
    faqs: [
      { q: "Are vehicle descent permits time-limited inside Ngorongoro?", a: "Yes, NCAA environmental regulations limit crater floor game drives to a maximum 6-hour permit window to prevent vehicular congestion and preserve the fragile caldera floor." },
      { q: "Can giraffes be seen on the crater floor?", a: "No. Giraffes cannot negotiate the steep, 600-meter rocky caldera descent walls due to their leg anatomy, but they roam in abundance on the outer crater rim highlands." },
      { q: "Where do Rihanna guests stay when visiting Ngorongoro?", a: "We house our guests exclusively in premier rim lodges like andBeyond Ngorongoro Crater Lodge, The Highlands geodesic domes, or elegant Karatu private coffee estate villas." }
    ],
    bestTimeToVisit: "Outstanding year-round. Wildlife remains resident inside the caldera floor regardless of season.",
    whyChooseUs: "We secure exclusive early-morning first-gate descent permits, allowing you to reach the crater floor as the sun crests the rim before the day visitors arrive. We arrange silver-service white-linen bush picnics beside private hippo pools, and house our guests in world-renowned crater rim properties such as andBeyond Ngorongoro Crater Lodge and The Highlands geodesic domes.",
    ourPromise: "Dignified, ethical exploration honoring Maasai pastoralist co-existence. We ensure your crater descent is accompanied by master naturalists who know every resident rhino and predator territory intimately, while enforcing strict environmental protection protocols."
  },
  {
    id: "zanzibar",
    slug: "destination-zanzibar.html",
    name: "Zanzibar Archipelago & Private Islands",
    country: "Tanzania",
    circuit: "Swahili Coast & Private Atolls • Tanzania",
    tagline: "Turquoise Spice Atolls, Historic Stone Town & Barefoot Villas",
    image: "images/tanzania-zanzibar-beach.jpg",
    heroImage: "images/tanzania-zanzibar-dhow.jpg",
    galleryImages: [
      "images/tanzania-zanzibar-beach.jpg",
      "images/tanzania-zanzibar-dhow.jpg"
    ],
    filterKey: "Zanzibar",
    area: "2,462 sq km (Unguja, Pemba, Chumbe & Mnemba)",
    climate: "Warm tropical maritime climate; ocean temperatures average 27°C–29°C year-round.",
    governingAuthority: "Revolutionary Government of Zanzibar • Marine Conservation Areas Authority",
    quickGlance: "The ultimate Indian Ocean sanctuary to conclude a rugged wildlife safari. Powder-white sand beaches, coral reefs, private island villas, and centuries-old Swahili stone architecture.",
    overview: "Floating in the warm, azure waters of the Indian Ocean, the Zanzibar Archipelago—encompassing Unguja, Pemba, Chumbe, and exclusive private Mnemba Island—is the ultimate sensory conclusion to a rugged bush safari. Here, centuries-old Swahili and Arabic palace heritage in Stone Town merges with powder-white coral sands, offshore dolphin reefs, and private oceanfront villas.",
    signaturePhenomenon: {
      title: "Mnemba Atoll Coral Reefs & Private Island Villas",
      text: "Surrounded by a protected marine sanctuary, Mnemba Atoll offers world-class scuba diving and snorkeling with green sea turtles, bottlenose dolphins, and hundreds of tropical reef species, paired with total barefoot luxury."
    },
    authorityText: "Marine habitats around Mnemba, Chumbe, and Menai Bay are protected marine conservation reserves. Rihanna Signature Safari arranges certified ethical dolphin viewing and reef conservation excursions.",
    wildlifeHighlights: ["Green Sea Turtles & Bottlenose Dolphins", "Mnemba Atoll Coral Reef Marine Sanctuaries", "Giant Coconut Crabs of Chumbe", "Red Colobus Monkeys in Jozani Forest", "Humpback Whales (Seasonal)"],
    seasonalGuide: {
      drySeason: "June to October: Crystal-clear diving visibility, calm seas, and balmy breezes make this the quintessential beach holiday season.",
      calvingOrGreen: "December to March: Warmest tropical sunshine and glassy ocean conditions, ideal for dhow sailing and deep-sea game fishing.",
      weatherTip: "April to May experiences the long rains; we recommend private oceanfront pool villas for secluded relaxation."
    },
    topActivities: [
      { title: "Private Wooden Dhow Sunset Cruise", desc: "Sail across coastal atolls on a handcrafted wooden Swahili dhow while sipping chilled champagne and sampling fresh seafood canapés.", icon: "fa-solid fa-sailboat" },
      { title: "Mnemba Marine Atoll Snorkeling", desc: "Private speedboat excursion to pristine marine sanctuaries to swim alongside sea turtles and vibrant reef fish.", icon: "fa-solid fa-water" },
      { title: "Stone Town Historical Palace Walk", desc: "Privately guided exploration through the labyrinthine alleys, carved wooden doors, and sultans' palaces of UNESCO Stone Town.", icon: "fa-solid fa-landmark" },
      { title: "Indigenous Spice Plantation Tour", desc: "Sensory walk through organic spice groves of cloves, vanilla, nutmeg, and cardamom led by master herbalists.", icon: "fa-solid fa-leaf" }
    ],
    howToReach: "Direct 45-minute scheduled or private charter flights from Serengeti bush airstrips, Arusha, or Dar es Salaam land directly at Abeid Amani Karume International Airport (ZNZ).",
    faqs: [
      { q: "Is Zanzibar easily combined with a Serengeti safari?", a: "Yes, this is our most popular signature pairing. Guests can fly directly from a Serengeti bush airstrip to Zanzibar in under 2 hours with zero road hassle." },
      { q: "Which coast has the best beaches in Zanzibar?", a: "The northeast coast (Matemwe, Nungwi, Kendwa) offers deep turquoise water that is minimally affected by low tides, alongside ultra-private cliffside villas." },
      { q: "What luxury properties does Rihanna partner with in Zanzibar?", a: "We curate stays at Zuri Zanzibar, Zanzibar White Sand Luxury Villas (Relais & Châteaux), The Palms, and exclusive private island buyouts at Mnemba Island." }
    ],
    bestTimeToVisit: "June to March. Calm sea conditions, crystal-clear diving visibility, and warm tropical sunshine.",
    whyChooseUs: "We skip crowded tourist hotels and curate only five-star luxury sanctuaries: private oceanfront villas with plunge pools at Zuri Zanzibar and White Sand Villas, Relais & Châteaux barefoot luxury on private Mnemba Island, and underwater bedroom suites at The Manta Resort on Pemba. Transfers are executed via private air charter and handcrafted wooden dhow yachts.",
    ourPromise: "Seamless bush-to-beach coordination. We handle luggage transfers, direct light aircraft connections from Serengeti airstrips to Zanzibar runways, fast-tracked VIP airport clearance, and private chef dining featuring fresh-caught lobster and indigenous spices."
  },
  {
    id: "tarangire",
    slug: "destination-tarangire.html",
    name: "Tarangire National Park",
    country: "Tanzania",
    circuit: "Northern Safari Circuit • Elephant Corridor",
    tagline: "The Kingdom of Colossal Baobabs & Elephant Megafamilies",
    image: "images/tanzania-tarangire-elephants.jpg",
    heroImage: "images/tanzania-safari-cruiser.jpg",
    galleryImages: [
      "images/tanzania-tarangire-elephants.jpg",
      "images/tanzania-safari-cruiser.jpg"
    ],
    filterKey: "Tarangire",
    area: "2,850 sq km (1,100 sq mi)",
    climate: "Warm dry days averaging 27°C with cool breezes under ancient baobabs.",
    governingAuthority: "TANAPA (Tanzania National Parks Authority)",
    quickGlance: "Famed for monumental thousand-year-old baobab trees and the greatest concentration of African elephants on earth, with mega-herds gathering along the life-giving Tarangire River.",
    overview: "Characterized by monumental ancient baobab trees that have stood for over a millennium, Tarangire is famous for hosting the greatest concentration of African elephants in the world. During the dry season, the Tarangire River becomes the sole lifeblood for migratory herds of wildebeest, zebras, and buffalo, stalked by tree-climbing lions and leopards.",
    signaturePhenomenon: {
      title: "Dry Season River Concentration & Super-Herds",
      text: "From June to November, up to 3,000 elephants congregate along the Tarangire River corridor alongside tens of thousands of migratory zebras and wildebeest, creating dramatic predator hunting opportunities."
    },
    authorityText: "Protected under TANAPA conservation authority with bordering private wildlife management areas like Chem Chem protecting crucial migratory corridors between Tarangire and Lake Manyara.",
    wildlifeHighlights: ["Elephant Herds up to 300 Strong", "Tree-Climbing Lions", "Rare Fringe-Eared Oryx & Gerenuks", "Over 550 Bird Species", "Leopards Resting in Baobab Branches"],
    seasonalGuide: {
      drySeason: "June to November: Peak safari season. The Tarangire River dries to a narrow ribbon, drawing thousands of elephants and game right to the vehicle's track.",
      calvingOrGreen: "December to May: Lush emerald landscapes, newborn calves, dramatic skies, and exceptional birding with over 550 resident and migratory species.",
      weatherTip: "Tsetse flies can be present in wooded areas; we provide specialized repellent and long-sleeve safari shirts in all vehicles."
    },
    topActivities: [
      { title: "Silale Swamps Elephant Tracking", desc: "Explore the lush interior Silale Swamps where hundreds of elephants feed knee-deep in green reeds.", icon: "fa-solid fa-water" },
      { title: "Walking Safaris in Private Conservancies", desc: "Experience intimate on-foot bushcraft walks accompanied by armed scouts and authentic Maasai trackers.", icon: "fa-solid fa-shoe-prints" },
      { title: "Nocturnal Wildlife Spotlight Drives", desc: "Witness active nocturnal predators including leopards, aardvarks, and serval cats in private adjoining concessions.", icon: "fa-solid fa-moon" },
      { title: "Elevated Baobab Treehouse Sundowners", desc: "Savor vintage wines from an elevated wooden platform built into the boughs of a 1,000-year-old baobab.", icon: "fa-solid fa-wine-glass" }
    ],
    howToReach: "A scenic 2-hour drive (120 km) southwest from Arusha on paved highway, or a swift 20-minute bush flight into Kuro Airstrip in the heart of the park.",
    faqs: [
      { q: "Is Tarangire worth visiting outside the dry season?", a: "Yes! While dry season offers the densest elephant concentrations, the green season brings incredible birdlife, lush landscapes, and total exclusivity." },
      { q: "How many elephants can one see on a single game drive?", a: "During peak months (July to October), guests routinely encounter hundreds of elephants daily in mega-families drinking and bathing." },
      { q: "Where do Rihanna guests stay in Tarangire?", a: "We partner with sanctuary properties like Sanctuary Swala, Chem Chem Lodge, and Oliver's Camp for private concession traversing privileges." }
    ],
    bestTimeToVisit: "June to November (peak dry season concentration along the river), though green season offers spectacular emerald landscapes and newborn wildlife.",
    whyChooseUs: "We partner exclusively with private concession lodges like Chem Chem and Sanctuary Swala, granting our guests night game drive permissions, private walking safaris with authentic Maasai trackers, and sunrise champagne breakfasts elevated on private baobab platforms.",
    ourPromise: "Deep, unhurried immersion into Tarangire's remote Silale Swamps where standard tour operators rarely venture. 100% private safari vehicles with unlimited game tracking mileage."
  },
  {
    id: "manyara",
    slug: "destination-manyara.html",
    name: "Lake Manyara National Park",
    country: "Tanzania",
    circuit: "Great Rift Valley • Northern Circuit",
    tagline: "Rift Valley Escarpment, Mahogany Forests & Flamingos",
    image: "images/tanzania-manyara-flamingos.jpg",
    heroImage: "images/tanzania-manyara-flamingos.jpg",
    galleryImages: [
      "images/tanzania-manyara-flamingos.jpg",
      "images/tanzania-serengeti-camp.jpg"
    ],
    filterKey: "Lake Manyara",
    area: "330 sq km (127 sq mi), of which up to 200 sq km is lake",
    climate: "Lush tropical groundwater forest with moderate year-round temperatures.",
    governingAuthority: "TANAPA (Tanzania National Parks Authority)",
    quickGlance: "Tucked beneath the dramatic 600m Great Rift Valley escarpment, famous for tree-climbing lions, groundwater mahogany forests, and thousands of pink lesser flamingos.",
    overview: "Tucked beneath the dramatic 600-meter cliffs of the Great Rift Valley escarpment, Lake Manyara National Park is a jewel of ecological diversity. From lush groundwater mahogany forests fed by perennial underground springs to the vast shimmering alkaline lake alive with thousands of lesser flamingos, Manyara is an intimate Eden.",
    signaturePhenomenon: {
      title: "Tree-Climbing Lions & Treetop Canopy Walkway",
      text: "Manyara's famous lions have developed the rare habit of lounging across the horizontal limbs of umbrella acacia trees to escape biting flies and enjoy cooling breezes."
    },
    authorityText: "Managed under strict TANAPA conservation rules protecting the delicate Rift Valley water table and resident flamingo nesting colonies.",
    wildlifeHighlights: ["Tree-Climbing Lions", "Thousands of Pink Lesser Flamingos", "Giant Olive Baboon Troops", "Hippo Pools along Lake Shores", "Crowned Hornbills & Crested Guineafowl"],
    seasonalGuide: {
      drySeason: "July to October: Ideal for tracking large mammals including elephants, giraffes, and tree-climbing lions through the forest.",
      calvingOrGreen: "November to June: Optimal water levels for flamingo flocks, pelicans, and waterbird photography along the lake shoreline.",
      weatherTip: "Mornings in the mahogany forest are beautifully shaded and cool; midday on the open lake shore warms quickly."
    },
    topActivities: [
      { title: "Treetop Canopy Walk", desc: "Stroll along suspended bridges 18 meters above the forest floor for an extraordinary bird's-eye perspective of monkeys and hornbills.", icon: "fa-solid fa-tree" },
      { title: "Rift Valley Night Spotlight Drive", desc: "Track nocturnal porcupines, genets, and hunting leopards inside the park after dark with specialized spotlight naturalists.", icon: "fa-solid fa-moon" },
      { title: "Shoreline Flamingos & Birding Safari", desc: "Photographic drive along the alkaline lake edge tracking thousands of pink flamingos and storks.", icon: "fa-solid fa-feather" },
      { title: "Canoe Safari on Lake Manyara", desc: "When water levels permit, glide silently across the lake in two-person canoes alongside wallowing hippos.", icon: "fa-solid fa-ship" }
    ],
    howToReach: "Located 1.5 to 2 hours drive (126 km) west of Arusha, or a 25-minute flight into Lake Manyara airstrip on the escarpment rim.",
    faqs: [
      { q: "Can we visit Lake Manyara as a day trip?", a: "Yes, Manyara is an effortless scenic half-day or full-day expedition en route between Arusha and the Ngorongoro Crater highlands." },
      { q: "Are tree-climbing lions guaranteed?", a: "While wild sightings can never be 100% guaranteed, Manyara offers the highest probability in Tanzania alongside skilled naturalist trackers." },
      { q: "Where is the best place to stay near Manyara?", a: "andBeyond Lake Manyara Tree Lodge provides ultra-luxury stilted suites secluded deep inside the mahogany forest." }
    ],
    bestTimeToVisit: "Year-Round: November to June for birding and flamingos; July to October for big game tracking.",
    whyChooseUs: "We provide private treetop canopy walks suspended 18 meters above the forest floor, nocturnal spotlight drives inside the park, and stays at luxury stilted mahogany treehouses at andBeyond Lake Manyara Tree Lodge.",
    ourPromise: "Personalized naturalist storytelling detailing the geology of the Great Rift Valley, with guaranteed small-footprint eco-luxury accommodation supporting conservation."
  },
  {
    id: "kilimanjaro",
    slug: "destination-kilimanjaro.html",
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    circuit: "Summit of Africa • Northern Highlands",
    tagline: "The Crown of Africa & Snow-Capped Uhuru Peak",
    image: "images/tanzania-kilimanjaro.jpg",
    heroImage: "images/tanzania-hero.jpg",
    galleryImages: [
      "images/tanzania-kilimanjaro.jpg",
      "images/tanzania-safari-cruiser.jpg"
    ],
    filterKey: "Kilimanjaro",
    area: "1,688 sq km; Peak elevation 5,895m (19,341 ft)",
    climate: "Traverses 5 climate zones from tropical rainforest (25°C) to arctic glacier summit (-15°C).",
    governingAuthority: "KINAPA / TANAPA • UNESCO World Heritage Site",
    quickGlance: "Africa's highest peak and the world's tallest free-standing mountain. Five climate ecosystems culminate in snow-capped Uhuru Peak at 5,895 meters above the African savannah.",
    overview: "Rising majestically from the savannah plains to 5,895 meters (19,341 feet), Mount Kilimanjaro is the highest free-standing mountain on Earth and Africa's highest summit. Traversing five distinct climate ecosystems—from lush rainforest and heather moorlands to alpine desert and Arctic glaciers—standing atop Uhuru Peak at sunrise is a life-defining triumph.",
    signaturePhenomenon: {
      title: "Uhuru Peak Sunrise & Glacial Caldera",
      text: "Reaching the crater rim at Stella Point or Uhuru Peak as the equatorial sunrise breaks above the clouds reveals ancient glaciers and the boundless curve of Africa below."
    },
    authorityText: "Kilimanjaro National Park is protected under TANAPA and KINAPA. Rihanna Signature Safari adheres strictly to ethical porter standards certified by the Kilimanjaro Porters Assistance Project (KPAP).",
    wildlifeHighlights: ["Black & White Colobus Monkeys in Rainforest Zone", "Kilimanjaro Tree Hyrax", "Four-Striped Mice in Alpine Heath", "Abbott's Starlings", "Lammergeier Vultures"],
    seasonalGuide: {
      drySeason: "June to October: Clear skies, minimal precipitation, and outstanding summit conditions.",
      calvingOrGreen: "January to March: Warmest trekking months with clear skies and spectacular starry night skies.",
      weatherTip: "Proper high-altitude thermal gear is essential. We provide comprehensive pre-climb equipment checks."
    },
    topActivities: [
      { title: "Private Luxury Lemosho Route Climb", desc: "7 to 8-day private expedition offering the highest summit success rates, gradual acclimatization, and heated mess tents.", icon: "fa-solid fa-mountain" },
      { title: "Scenic Kilimanjaro Helicopter Flight", desc: "Soar above the rainforest canopy and circle Uhuru Peak's ice fields on a private scenic helicopter charter.", icon: "fa-solid fa-helicopter" },
      { title: "Shira Plateau Day Hike & Champagne Lunch", desc: "For non-climbers, drive to 3,500m on the Shira Plateau for a gentle high-altitude day hike with panoramic views.", icon: "fa-solid fa-person-hiking" },
      { title: "Chagga Cultural & Coffee Walk", desc: "Explore the fertile volcanic foothills of Mount Kilimanjaro visiting authentic Chagga villages, waterfalls, and coffee farms.", icon: "fa-solid fa-mug-hot" }
    ],
    howToReach: "Kilimanjaro International Airport (JRO) is located just 45 minutes from Moshi and Arusha trailheads, with direct international flights from Europe and the Middle East.",
    faqs: [
      { q: "What is the recommended route for summit success?", a: "We strongly recommend the 7 or 8-day Lemosho or Machame routes for optimal acclimatization and a 95%+ summit success rate." },
      { q: "What medical safety equipment is carried?", a: "Every Rihanna climb is equipped with hyperbaric chambers, emergency oxygen, pulse oximeters, and Wilderness First Responder certified chief guides." },
      { q: "What level of fitness is required?", a: "Kilimanjaro is a trekking peak requiring no technical mountaineering gear, but good cardiovascular stamina and mental endurance are required." }
    ],
    bestTimeToVisit: "January to March and June to October. Dry weather, clear skies, and optimum trekking safety.",
    whyChooseUs: "We offer private luxury climbs via scenic routes (Machame, Lemosho, Rongai) equipped with hyperbaric chambers, pulse oximeters, private heated mess tents with solar lighting, private chemical toilets, and a 1:4 guide-to-climber ratio led by Wilderness First Responder (WFR) certified chief guides.",
    ourPromise: "Uncompromising safety, ethical porter welfare certified by the Kilimanjaro Porters Assistance Project (KPAP), and custom gourmet menus cooked fresh by high-altitude camp chefs."
  },
  {
    id: "nyerere-selous",
    slug: "destination-nyerere.html",
    name: "Nyerere National Park (Selous) & Fanjove",
    country: "Tanzania",
    circuit: "Southern Wilderness Circuit • Rufiji Basin",
    tagline: "Africa's Largest Untamed River Wilderness",
    image: "images/tanzania-nyerere-selous.jpg",
    heroImage: "images/tanzania-safari-cruiser.jpg",
    galleryImages: [
      "images/tanzania-nyerere-selous.jpg",
      "images/tanzania-ruaha.jpg"
    ],
    filterKey: "Nyerere",
    area: "30,893 sq km (Africa's largest standalone national park)",
    climate: "Warm tropical river valley climate; riverbanks provide refreshing breezes.",
    governingAuthority: "TANAPA (Tanzania National Parks Authority) • UNESCO World Heritage Site",
    quickGlance: "Twice the size of Belgium, an immense unfenced wilderness sliced by the mighty Rufiji River. Famous for riverboat safaris, walking expeditions, and the endangered African wild dog.",
    overview: "Twice the size of Belgium, Nyerere National Park (formerly Selous Game Reserve) is an immense UNESCO wilderness sliced by the mighty Rufiji River. Unfenced, remote, and virtually devoid of tourist crowds, it offers one of the last remaining refuges for the highly endangered African painted wild dog, colossal hippo pods, and riverboat safaris.",
    signaturePhenomenon: {
      title: "Rufiji Riverboat Safaris & Endangered Wild Dogs",
      text: "Gliding quietly along the palm-fringed channels of the Rufiji River offers up-close encounters with giant Nile crocodiles, swimming elephants, and Africa's largest population of endangered painted wolves."
    },
    authorityText: "Designated as a UNESCO World Heritage wilderness managed under TANAPA conservation authority protecting vast miombo woodlands and oxbow river lakes.",
    wildlifeHighlights: ["Endangered African Wild Dogs (Painted Wolves)", "Mega Pods of Hippos in Rufiji River", "Giant Nile Crocodiles", "Puku Antelopes", "Pel's Fishing Owls"],
    seasonalGuide: {
      drySeason: "June to November: Prime wildlife viewing as thousands of animals concentrate around the Rufiji River lakes and dry sandbanks.",
      calvingOrGreen: "December to March: Exceptional migratory birding, lush green river channels, and intimate secluded safari experiences.",
      weatherTip: "Lightweight, breathable linen clothing is ideal for river safaris; evenings in riverside camps are warm and atmospheric."
    },
    topActivities: [
      { title: "Rufiji Riverboat Safari", desc: "Board custom flat-bottom boats to observe hippos, basking crocodiles, and elephants drinking at water's edge at sunset.", icon: "fa-solid fa-ship" },
      { title: "Authentic Wilderness Walking Safari", desc: "Trek through remote miombo forests accompanied by armed rangers, learning animal tracking and ancient bushcraft.", icon: "fa-solid fa-person-walking" },
      { title: "Lake Tagalala & Hot Springs Bathing", desc: "Visit natural volcanic hot springs hidden deep in the bush for private bathing in warm, mineral-rich thermal pools.", icon: "fa-solid fa-spa" },
      { title: "Fanjove Private Island Extension", desc: "Fly directly to the untouched private island of Fanjove for marine snorkeling with dolphins and barefoot villa stays.", icon: "fa-solid fa-umbrella-beach" }
    ],
    howToReach: "A short 45-minute flight from Dar es Salaam or Zanzibar directly into Siwandu, Beho Beho, or Mtemere bush airstrips.",
    faqs: [
      { q: "How is Nyerere different from the Serengeti?", a: "Nyerere is far wilder and less crowded, allowing riverboat safaris, off-road tracking, and foot walking safaris not permitted in standard northern parks." },
      { q: "Can we see African wild dogs here?", a: "Yes, Nyerere protects one of the strongest populations of endangered wild dogs (painted wolves) in Africa." },
      { q: "Where do guests stay in Nyerere?", a: "We place our guests in premier riverside camps like Roho ya Selous, Beho Beho, and Sand Rivers Selous." }
    ],
    bestTimeToVisit: "June to November. Animals concentrate densely around the river lakes and oxbow lagoons.",
    whyChooseUs: "We fly guests directly into riverside camps like Roho ya Selous and Beho Beho. We combine riverboat safaris, thermal volcanic hot spring bathing, and on-foot walking safaris with armed rangers, connecting seamlessly to castaway private Fanjove Island.",
    ourPromise: "A raw, unfiltered African safari as it existed generations ago, with total privacy, zero vehicle queues, and deep conservation respect."
  },
  {
    id: "ruaha",
    slug: "destination-ruaha.html",
    name: "Ruaha National Park & Mafia Island",
    country: "Tanzania",
    circuit: "Southern Predator Frontier • Great Ruaha Basin",
    tagline: "Wild Predator Frontier, Ancient Baobabs & Whale Sharks",
    image: "images/tanzania-ruaha.jpg",
    heroImage: "images/kenya-safari-lion.webp",
    galleryImages: [
      "images/tanzania-ruaha.jpg",
      "images/tanzania-safari-cruiser.jpg"
    ],
    filterKey: "Ruaha",
    area: "20,226 sq km (Tanzania's 2nd largest national park)",
    climate: "Warm, dry savannah climate with rugged granite kopjes and baobab landscapes.",
    governingAuthority: "TANAPA (Tanzania National Parks Authority)",
    quickGlance: "Tanzania's best-kept predator secret. Rugged, wild, and untamed, home to 10% of the world's remaining lions, massive buffalo clashes, and pairable with whale shark diving on Mafia Island.",
    overview: "Rugged, hot, and wild, Ruaha is Tanzania's second-largest park and arguably its best-kept predator secret. Home to 10% of the world's remaining wild lions, Ruaha's mega-prides hunt Cape buffalo across dry sandy riverbeds bordered by dramatic baobabs. We pair this with Mafia Island, an untouched marine park where travelers swim alongside gentle giant whale sharks.",
    signaturePhenomenon: {
      title: "Super Lion Prides & Mega Predator Density",
      text: "Ruaha boasts mega-prides numbering 20 or more lions that specialize in hunting Cape buffalo along the dry sandy beds of the Great Ruaha River, alongside leopards, cheetahs, and wild dogs."
    },
    authorityText: "Protected under TANAPA authority, preserving essential river catchment systems and critical predator breeding corridors in southern Tanzania.",
    wildlifeHighlights: ["Mega Lion Prides (up to 20+ members)", "Greater and Lesser Kudu", "African Wild Dogs", "Whale Sharks in Chole Bay (Seasonal)", "Pristine Coral Reef Atolls"],
    seasonalGuide: {
      drySeason: "June to October: Riverbeds dry up, forcing thousands of buffalo, elephants, and antelope into the Great Ruaha River channels where lions lie in wait.",
      calvingOrGreen: "October to March: The premier season for swimming with gentle giant whale sharks in the crystalline waters of Mafia Island Marine Park.",
      weatherTip: "Ruaha is warm during midday; early morning and late afternoon game drives offer dramatic photographic golden hour lighting."
    },
    topActivities: [
      { title: "Great Ruaha River Predator Drives", desc: "Track super-prides of lions and solitary leopards along the sandy channels and ancient baobab groves.", icon: "fa-solid fa-paw" },
      { title: "Granite Kopje Walking Safaris", desc: "Traverse rugged wilderness on foot with master trackers, inspecting tracks, medicinal flora, and birdlife.", icon: "fa-solid fa-person-walking" },
      { title: "Whale Shark Swimming (Mafia Island)", desc: "Sail out in wooden dhows across Chole Bay to snorkel alongside majestic 10-meter whale sharks.", icon: "fa-solid fa-fish" },
      { title: "Boutique Stargazing Bush Dinners", desc: "Private candlelit dining atop ancient granite ridges with zero light pollution under the southern night sky.", icon: "fa-solid fa-star" }
    ],
    howToReach: "Daily light aircraft flights link Ruaha's Jongomero or Msembe airstrips with Dar es Salaam, Arusha, and Mafia Island in 1.5 to 2 hours.",
    faqs: [
      { q: "Why choose Ruaha over other parks?", a: "Ruaha offers unrivaled solitude. With fewer than 30 safari vehicles in a park the size of New Jersey, you will rarely see another vehicle all day." },
      { q: "Is Mafia Island easy to combine with Ruaha?", a: "Yes, our private bush-to-beach charters connect Ruaha airstrips directly to Mafia Island runways in approximately 90 minutes." },
      { q: "What luxury lodges does Rihanna recommend?", a: "We host guests at Jabali Ridge (perched on granite kopjes), Kwihala Camp, and Pole Pole eco-lodge on Mafia Island." }
    ],
    bestTimeToVisit: "June to October for Ruaha's predator drama; October to March for Mafia Island's whale shark swimming season.",
    whyChooseUs: "We curate architectural luxury at Jabali Ridge, perched dramatically on massive granite boulders, paired with the barefoot Italian-run eco-resort Pole Pole on Mafia Island. Private air charters link the bush to the ocean with zero road transit.",
    ourPromise: "Connoisseur-level wildlife tracking with zero commercialization. Intimate encounters with apex predators and marine life guided by professional marine biologists and bush guides."
  },

  // =========================================================================
  // KENYA PREMIER RESERVES
  // =========================================================================
  {
    id: "masai-mara",
    slug: "destination-masai-mara.html",
    name: "Maasai Mara National Reserve & Conservancies",
    country: "Kenya",
    circuit: "Great Rift Valley • Southwestern Kenya",
    tagline: "The Jewel of Kenya, Mara River Dramas & Private Conservancies",
    image: "images/kenya-masai-mara.jpg",
    heroImage: "images/kenya-safari-lion.webp",
    galleryImages: [
      "images/kenya-masai-mara.jpg",
      "images/kenya-safari-lion.webp"
    ],
    filterKey: "Masai Mara",
    area: "1,510 sq km Reserve + 1,400 sq km Private Conservancies",
    climate: "Temperate highland savannah (1,500m elevation); warm days (26°C) and cool starry nights (12°C).",
    governingAuthority: "Narok County Government & Maasai Community Conservancies",
    quickGlance: "Globally celebrated stage for dramatic Mara River crossings during the Great Migration, legendary big cats, and exclusive private conservancies where public tour minibuses are strictly banned.",
    overview: "Globally renowned as the stage for the dramatic Mara River wildebeest crossings during the Great Migration, the Masai Mara ecosystem delivers the world's most intense predator action. Rolling green savannas dotted with flat-topped acacia trees are home to the legendary Marsh Pride of lions, cheetahs hunting across the plains, and leopards along the riverbanks.",
    signaturePhenomenon: {
      title: "Mara River Crossings & The Great Migration",
      text: "From July to October, millions of wildebeest and zebras mass along the banks of the Mara River, plunging into torrential currents teeming with giant Nile crocodiles while lions and leopards stalk the riverbanks."
    },
    authorityText: "Managed through collaborative partnerships between Narok County and Maasai landowner conservancies (Mara North, Olare Motorogi, Naboisho) providing pioneering community benefit and eco-tourism models.",
    wildlifeHighlights: ["Mara River Migration Crossings", "The Big Five (Lions, Leopards, Elephants, Buffalo, Rhinos)", "Cheetah Speed Hunts in Mara Triangle", "Spotted Hyenas & Vulture Feasts", "Maasai Giraffes"],
    seasonalGuide: {
      drySeason: "July to October: Peak Great Migration season with heart-stopping river crossings and unmatched predator action.",
      calvingOrGreen: "November to June: Exceptional resident predator viewing in private conservancies with emerald plains, baby gazelles, and no tourist crowds.",
      weatherTip: "The Mara sits at 1,500m altitude. Early morning balloon flights and game drives require warm fleece layers."
    },
    topActivities: [
      { title: "Mara River Crossing Tracking", desc: "Position your private 4x4 cruiser alongside experienced guides to witness the drama of thousands of wildebeest braving the river.", icon: "fa-solid fa-water" },
      { title: "Maasai Mara Sunrise Balloon Safari", desc: "Drift above the golden savannah as the sun rises, followed by a full champagne breakfast in the wild bush.", icon: "fa-solid fa-plane-departure" },
      { title: "Off-Road Tracking & Night Game Drives", desc: "Permitted exclusively inside private conservancies, track predators on nocturnal hunts with red-filtered spotlights.", icon: "fa-solid fa-moon" },
      { title: "Maasai Warrior Cultural Immersion", desc: "Authentic visits to traditional community villages to learn ancient tracking, fire-making, and beadwork traditions.", icon: "fa-solid fa-people-group" }
    ],
    howToReach: "Multiple daily scheduled bush flights from Nairobi Wilson Airport (WIL) land directly at private conservancy airstrips (Mara North, Ol Kiombo, Musiara) in just 45 minutes.",
    faqs: [
      { q: "What is the advantage of private conservancies over the main reserve?", a: "Private conservancies (Mara North, Olare Motorogi) strictly ban public minibuses, enforce low vehicle-to-acreage ratios, and permit off-roading and night game drives." },
      { q: "When is the best time to see the Mara river crossings?", a: "Typically July through October, with August and September offering peak crossing frequency across the Mara and Talek rivers." },
      { q: "Where do Rihanna Signature Safari guests stay?", a: "We curate stays at world-class camps including Sir Richard Branson's Mahali Mzuri, Mara Plains Camp (Great Plains Conservation), and Angama Mara." }
    ],
    bestTimeToVisit: "July to October for Great Migration crossings; January to March for exceptional predator tracking in private conservancies.",
    whyChooseUs: "We locate our guests inside exclusive private conservancies (Mara North, Olare Motorogi, Olderkesi) where public tour vans are prohibited. Enjoy off-road tracking, night spotlight game drives, dawn hot air balloon flights with champagne breakfasts, and stays at world-class camps like Sir Richard Branson's Mahali Mzuri and Great Plains' Mara Plains Camp.",
    ourPromise: "No overcrowding. Strict vehicle-to-acreage ratios guarantee that your lion and cheetah sightings are shared with no more than 2–3 vehicles, rather than dozens. Direct conservancy fees empower local Maasai landowner families."
  },
  {
    id: "amboseli",
    slug: "destination-amboseli.html",
    name: "Amboseli National Park",
    country: "Kenya",
    circuit: "Southern Kenya • Mount Kilimanjaro Biosphere",
    tagline: "Super-Tusker Giants Beneath Snow-Capped Kilimanjaro",
    image: "images/kenya-amboseli-elephants.jpg",
    heroImage: "images/tanzania-tarangire-elephants.jpg",
    galleryImages: [
      "images/kenya-amboseli-elephants.jpg",
      "images/tanzania-tarangire-elephants.jpg"
    ],
    filterKey: "Amboseli",
    area: "392 sq km (Core Park) + surrounding Maasai Conservancies",
    climate: "Arid plains with underground springs; crystal-clear morning views of Kilimanjaro.",
    governingAuthority: "KWS (Kenya Wildlife Service) & Amboseli Community Conservancies",
    quickGlance: "The iconic theatre of Africa: massive super-tusker elephants roaming across dusty acacia plains with the snow-capped dome of Mount Kilimanjaro rising directly behind.",
    overview: "Nowhere else on Earth can you photograph herds of colossal African elephants walking across open acacia plains with the snow-capped dome of Mount Kilimanjaro rising directly behind them. Fed by underground springs from Kilimanjaro, Amboseli's lush freshwater swamps attract hundreds of bird species and resident super-tuskers with tusks that touch the ground.",
    signaturePhenomenon: {
      title: "Super-Tuskers & The Kilimanjaro Backdrop",
      text: "Amboseli is home to Africa's longest-studied wild elephant population, including rare super-tuskers carrying ivory exceeding 100 pounds per tusk, set against snow-capped Kilimanjaro."
    },
    authorityText: "Protected by KWS (Kenya Wildlife Service) with adjoining community conservancies like Kitirua and Selenkay preserving wildlife dispersal corridors.",
    wildlifeHighlights: ["Legendary Super-Tusker Elephant Bulls", "Mount Kilimanjaro Scenic Backdrops", "Cheetahs & Serval Cats", "Yellow Baboons & Vervet Monkeys", "Pelicans & Crowned Cranes in Swamps"],
    seasonalGuide: {
      drySeason: "June to October: Clearest skies for photographing Kilimanjaro at sunrise and sunset; wildlife congregates in the central Enkongo Narok swamps.",
      calvingOrGreen: "November to May: Emerald plains, hundreds of migratory birds and waterbirds, and dramatic cloud formations framing the mountain.",
      weatherTip: "The best mountain photography occurs from 06:00 to 09:00 AM before afternoon clouds form over the peak."
    },
    topActivities: [
      { title: "Kilimanjaro Sunrise Elephant Photography", desc: "Early morning positioning to capture herds of elephants silhouetted against the pink-tinted glaciers of Mount Kilimanjaro.", icon: "fa-solid fa-camera" },
      { title: "Enkongo Narok Swamp Game Drives", desc: "Drive along the lush freshwater swamps watching elephants and hippos submerged neck-deep in cool spring water.", icon: "fa-solid fa-water" },
      { title: "Private Conservancy Walking & Horse Riding", desc: "Experience intimate walking safaris and horseback excursions in adjoining private conservancies.", icon: "fa-solid fa-horse" },
      { title: "Rooftop Star-Bed Sleepouts", desc: "Sleep under the African night sky on private open-air rooftop star-beds at luxury lodges like Ol Donyo.", icon: "fa-solid fa-bed" }
    ],
    howToReach: "A quick 40-minute scheduled flight from Nairobi Wilson Airport (WIL) directly into Amboseli Airstrip, avoiding the congested 4-hour highway.",
    faqs: [
      { q: "Is Mount Kilimanjaro visible every day?", a: "Kilimanjaro is visible during early mornings and late afternoons on most dry season days before thermal cloud cover forms midday." },
      { q: "Can we see the Big Five in Amboseli?", a: "Elephants, lions, leopards, and buffalo are present. Rhinos are not resident in Amboseli and are tracked in neighboring Tsavo or Lewa." },
      { q: "Where do Rihanna guests stay in Amboseli?", a: "We curate stays at Tortilis Camp (private conservancy), Ol Donyo Lodge (Chyulu Hills), and Tawi Lodge." }
    ],
    bestTimeToVisit: "June to October and January to February (clear mountain views early morning and evening).",
    whyChooseUs: "We fly directly from Nairobi Wilson to private conservancy airstrips, avoiding the busy highway. Stay at Tortilis Camp or Ol Donyo Lodge in private conservancies where walking safaris, horseback riding, and rooftop star bed sleeping under the African sky await.",
    ourPromise: "Iconic photographic positioning. Our guides understand lighting and angle composition to deliver the award-winning Kilimanjaro-elephant portrait of your dreams."
  },
  {
    id: "samburu",
    slug: "destination-samburu.html",
    name: "Samburu National Reserve & Northern Frontier",
    country: "Kenya",
    circuit: "Northern Frontier District • Ewaso Nyiro Basin",
    tagline: "Arid Red-Earth Wilderness & The Samburu Special Five",
    image: "images/kenya-samburu.jpg",
    heroImage: "images/kenya-masai-mara.jpg",
    galleryImages: [
      "images/kenya-samburu.jpg",
      "images/kenya-tsavo.jpg"
    ],
    filterKey: "Samburu",
    area: "165 sq km Reserve + surrounding Sera & Kalama Conservancies",
    climate: "Semi-arid red-earth desert with palm-fringed riverbanks; warm year-round.",
    governingAuthority: "Samburu County Council & Northern Rangelands Trust (NRT)",
    quickGlance: "Set in Kenya's rugged northern desert along the palm-fringed Ewaso Nyiro River. Home to the famed 'Samburu Special Five' found nowhere else in southern Kenya.",
    overview: "Set in Kenya's rugged northern drylands along the palm-fringed banks of the Ewaso Nyiro River, Samburu offers a dramatic contrast to the southern savannahs. Here, beneath red granite mountains and amidst doum palms, roam species found nowhere else in southern Kenya—the famed Samburu Special Five.",
    signaturePhenomenon: {
      title: "The Samburu Special Five & Sera Rhino Sanctuary",
      text: "Samburu is the only place in East Africa where you can track the Special Five (Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk, and Somali ostrich), alongside on-foot black rhino tracking in Sera Conservancy."
    },
    authorityText: "Preserved under Samburu local community management and the Northern Rangelands Trust (NRT), ensuring ethical tourism directly funds indigenous education and anti-poaching ranger units.",
    wildlifeHighlights: ["Grevy's Zebra (Narrow Stripes)", "Reticulated Giraffe (Geometric Patterns)", "Beisa Oryx with Scimitar Horns", "Gerenuk (Long-Necked Antelope)", "Somali Ostrich with Blue Necks"],
    seasonalGuide: {
      drySeason: "June to October & December to March: Arid conditions force wildlife into the doum palm forest bordering the Ewaso Nyiro River for dramatic game viewing.",
      calvingOrGreen: "April to May & November: Brief greening of the desert with spectacular wildflowers and newborn antelopes.",
      weatherTip: "Samburu is warm and dry. Midday hours are ideal for relaxing in cliffside lodge plunge pools."
    },
    topActivities: [
      { title: "Special Five Wildlife Tracking", desc: "Track species unique to Kenya's northern frontier with master Samburu warriors.", icon: "fa-solid fa-paw" },
      { title: "On-Foot Black Rhino Tracking at Sera", desc: "The only place in East Africa where guests can track wild black rhinos on foot with state-of-the-art telemetry gear.", icon: "fa-solid fa-shield-halved" },
      { title: "Ewaso Nyiro River Sundowners", desc: "Relax with chilled drinks on sandy riverbanks watching elephant families cross the shallow waters.", icon: "fa-solid fa-glass-water" },
      { title: "Samburu Warrior Cultural Exchange", desc: "Intimate cultural visits to ancestral singing wells and villages guided by elder warriors.", icon: "fa-solid fa-people-arrows" }
    ],
    howToReach: "A scenic 60-minute flight from Nairobi Wilson Airport (WIL) directly into Samburu, Kalama, or Buffalo Springs airstrips.",
    faqs: [
      { q: "What makes the Special Five unique?", a: "These 5 species have evolved specifically to thrive in northern Kenya's arid desert climates and are not found in the Maasai Mara or Serengeti." },
      { q: "Is on-foot rhino tracking safe?", a: "Yes. Guided by highly trained armed community rangers from the Northern Rangelands Trust with strict safety protocols." },
      { q: "Where do Rihanna guests stay in Samburu?", a: "We curate Moroccan-Swahili luxury suites at Sasaab (with private plunge pools) and Saruni Samburu perched on monumental granite kopjes." }
    ],
    bestTimeToVisit: "June to October and December to March. Dry weather forces wildlife to gather densely along the river.",
    whyChooseUs: "We feature Moroccan-Swahili luxury at Sasaab with private cliffside plunge pools, panoramic suites on granite kopjes at Saruni Samburu, and exclusive access to Sera Conservancy for the only on-foot black rhino tracking experience in East Africa.",
    ourPromise: "Authentic, respectful partnerships with Samburu elders and warriors who guide our guests with ancestral knowledge, song, and bushcraft."
  },
  {
    id: "tsavo",
    slug: "destination-tsavo.html",
    name: "Tsavo East & Tsavo West National Parks",
    country: "Kenya",
    circuit: "Southern Coastal Hinterland • Tsavo Ecosystem",
    tagline: "Red-Dust Elephants, Lava Flows & Mzima Springs",
    image: "images/kenya-tsavo.jpg",
    heroImage: "images/tanzania-tarangire-elephants.jpg",
    galleryImages: [
      "images/kenya-tsavo.jpg",
      "images/kenya-amboseli-elephants.jpg"
    ],
    filterKey: "Tsavo",
    area: "22,000 sq km (Kenya's largest protected wilderness)",
    climate: "Dramatic semi-arid red-soil plains; lush natural spring oases.",
    governingAuthority: "KWS (Kenya Wildlife Service)",
    quickGlance: "Kenya's largest wilderness, famous for legendary red-dust elephants, the world's longest lava flow at Yatta Plateau, and underwater hippo viewing at crystal-clear Mzima Springs.",
    overview: "Spanning nearly 22,000 square kilometers, Tsavo is Kenya's largest and most storied national park. Sliced into Tsavo East and Tsavo West, it features red-earth savannahs, volcanic black lava fields at Shetani, and lush natural spring oases at Mzima Springs where hundreds of millions of gallons of crystal-clear water gush daily from the volcanic Chyulu Hills.",
    signaturePhenomenon: {
      title: "Red Elephants & Mzima Springs Underwater Viewing",
      text: "Tsavo's elephants dust-bathe in the vibrant red volcanic soil, creating iconic crimson-colored giants. At Mzima Springs, a submerged glass viewing tank allows guests to watch hippos swimming underwater."
    },
    authorityText: "Conserved under KWS (Kenya Wildlife Service) with dedicated anti-poaching security protecting the Ngulia Rhino Sanctuary.",
    wildlifeHighlights: ["Red-Dust-Coated Elephants", "Underwater Hippo Viewing at Mzima Springs", "Cheetahs & Lions of Tsavo", "Lesser Kudu & Fringe-Eared Oryx", "Shetani Volcanic Black Lava Flows"],
    seasonalGuide: {
      drySeason: "June to October & January to February: Best visibility for game drives and clear Kilimanjaro views across Tsavo West.",
      calvingOrGreen: "November & April to May: Emerald bush with blooming desert wildflowers and exceptional migratory bird sightings.",
      weatherTip: "Tsavo is vast; we utilize private 4x4 Land Cruisers with long-range radio and GPS tracking."
    },
    topActivities: [
      { title: "Mzima Springs Underwater Hippo Viewing", desc: "Descend into an underwater glass viewing chamber to watch hippos and large barbel fish swimming in crystal-clear spring water.", icon: "fa-solid fa-water" },
      { title: "Shetani Lava Flow Exploration", desc: "Walk across the black volcanic lava flows formed by eruptions just 200 years ago.", icon: "fa-solid fa-volcano" },
      { title: "Ngulia Rhino Sanctuary Game Drives", desc: "Search for rare nocturnal black rhinos securely protected inside the fenced 90 sq km Ngulia Sanctuary.", icon: "fa-solid fa-shield-halved" },
      { title: "Yatta Plateau Sunset Cocktails", desc: "Enjoy sundowners overlooking the 300-km-long Yatta Plateau, the longest prehistoric lava flow on Earth.", icon: "fa-solid fa-mountain" }
    ],
    howToReach: "A 45-minute flight from Nairobi Wilson Airport (WIL) or Mombasa to Kilaguni or Finch Hattons airstrips.",
    faqs: [
      { q: "Why are the elephants red in Tsavo?", a: "They dust-bathe in Tsavo's iron-rich red volcanic soil to protect their skin from the sun and insect bites." },
      { q: "How are Tsavo East and Tsavo West different?", a: "Tsavo West is rugged and volcanic with springs and lava flows; Tsavo East is flatter with vast savannah plains and the Galana River." },
      { q: "Where do Rihanna guests stay in Tsavo?", a: "We house our guests at Finch Hattons Luxury Tented Camp and Ol Donyo Lodge in the adjacent Chyulu Hills." }
    ],
    bestTimeToVisit: "June to October and January to February. Crisp clear mornings with spectacular Mount Kilimanjaro vistas.",
    whyChooseUs: "Luxury tented palaces at Finch Hattons and Relais & Châteaux villa opulence at Ol Donyo Lodge. Experience horseback riding alongside giraffes, guided mountain biking, sunken photography hides, and private candlelit dinners beside natural hippo pools.",
    ourPromise: "Pure sanctuary and space. Tsavo and Chyulu provide the grandest scale of untouched African landscape, delivered with five-star white glove hospitality."
  },
  {
    id: "lewa",
    slug: "destination-lewa.html",
    name: "Lewa Wildlife Conservancy & Laikipia",
    country: "Kenya",
    circuit: "Laikipia Plateau • Mount Kenya Foothills",
    tagline: "World-Renowned Rhino Sanctuaries & Conservation Pioneers",
    image: "images/kenya-lewa-rhinos.jpg",
    heroImage: "images/kenya-masai-mara.jpg",
    galleryImages: [
      "images/kenya-lewa-rhinos.jpg",
      "images/kenya-amboseli-elephants.jpg"
    ],
    filterKey: "Lewa",
    area: "250 sq km (62,000 acres) UNESCO World Heritage Site",
    climate: "Temperate high-plateau climate (1,700m); sunny days (24°C) and refreshing nights.",
    governingAuthority: "Lewa Wildlife Conservancy & UNESCO World Heritage",
    quickGlance: "Africa's greatest rhino conservation success story. Home to over 200 black and white rhinos, the last northern white rhinos on earth at Ol Pejeta, and luxury private wilderness estates.",
    overview: "Sprawled across the high-altitude Laikipia Plateau in the shadow of Mount Kenya, Lewa Wildlife Conservancy and neighboring Ol Pejeta represent Africa's foremost conservation success stories. Together, they safeguard the highest concentration of critically endangered black and white rhinos in East Africa, including the last two northern white rhinos on Earth.",
    signaturePhenomenon: {
      title: "The Rhino Sanctuary of East Africa",
      text: "Lewa safeguards 14% of Kenya's entire black rhino population. Guests encounter wild black and white rhinos grazing peacefully on open rolling hills with Mount Kenya as a dramatic backdrop."
    },
    authorityText: "Inscribed as a UNESCO World Heritage Site in recognition of pioneer conservation management, community healthcare, and zero-poaching security operations.",
    wildlifeHighlights: ["The Last Two Northern White Rhinos (Najin & Fatu)", "Over 200 Black & White Rhinos", "Jackson's Hartebeests & Grevy's Zebras", "Healthy Lion and Leopard Populations", "Sweetwaters Chimpanzee Sanctuary"],
    seasonalGuide: {
      drySeason: "June to October & December to March: Superb game tracking weather across the open Laikipia grasslands.",
      calvingOrGreen: "April to May & November: Greening of the plateau with dramatic cloud formations around Mount Kenya.",
      weatherTip: "The high altitude provides crisp, bug-free evenings perfect for open fire pits and stargazing."
    },
    topActivities: [
      { title: "Behind-the-Scenes Rhino Tracking", desc: "Ride in private 4x4s alongside tracker scouts monitoring endangered black and white rhinos.", icon: "fa-solid fa-shield-halved" },
      { title: "Horseback Safaris Alongside Zebras", desc: "Experience horseback riding across open plains, approaching wildlife that show no fear of horses.", icon: "fa-solid fa-horse" },
      { title: "Vintage Open-Cockpit Biplane Flights", desc: "Fly in an authentic open-cockpit biplane for a breathtaking low-altitude flight across rivers and gorges.", icon: "fa-solid fa-plane" },
      { title: "Sweetwaters Chimpanzee Sanctuary Visit", desc: "Meet rescued orphaned chimpanzees rehabilitated in lush natural enclosures at neighboring Ol Pejeta.", icon: "fa-solid fa-paw" }
    ],
    howToReach: "A 45-minute flight from Nairobi Wilson Airport (WIL) directly into Lewa Downs Airstrip.",
    faqs: [
      { q: "Can we see both black and white rhinos in Lewa?", a: "Yes! Lewa is one of the few places in Africa where both black and white rhinos roam together in high numbers." },
      { q: "Is horse riding suitable for beginners?", a: "Yes, expert equestrian guides match horses to each guest's skill level, from gentle walking rides to advanced canters." },
      { q: "What luxury properties are available in Lewa?", a: "We curate stays at Sirikoi Lodge, Lewa Wilderness, and Elewana Lewa Safari Camp." }
    ],
    bestTimeToVisit: "Year-Round. The high elevation provides a pleasant, temperate climate throughout the year.",
    whyChooseUs: "Private access behind the scenes: meet the dedicated armed rangers protecting the northern white rhinos, fly in a vintage open-cockpit biplane over the plateau, ride horses alongside wild zebras, and stay at Sirikoi Lodge and Angama Mara.",
    ourPromise: "100% of your conservation entry fees directly support anti-poaching security, wildlife veterinary operations, and community healthcare initiatives across the plateau."
  }
];

if (typeof window !== "undefined") {
  window.SAFARI_DESTINATIONS = SAFARI_DESTINATIONS;

  window.getDestinationById = function(id) {
    if (!id) return null;
    const cleanId = id.toLowerCase().trim().replace("destination-", "").replace(".html", "");
    return SAFARI_DESTINATIONS.find(d => 
      d.id === cleanId || 
      d.slug.toLowerCase().includes(cleanId) ||
      d.name.toLowerCase().includes(cleanId) || 
      d.filterKey.toLowerCase().includes(cleanId)
    ) || null;
  };
}
