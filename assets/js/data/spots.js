/* ==========================================================================
   ROLAND HOLIDAYS — ITINERARY SPOTS
   ==========================================================================
   The selectable places that fill the itinerary builder on a destination
   page, keyed by the destination slug used in data/destinations.js.

   Per spot
     name    What the traveller selects; this is the text sent to WhatsApp.
     days    Suggested length of stay.
     places  What the spot covers, shown on the card.
     img     Unsplash photo id, or omitted — a card with no photo renders a
             branded gradient panel rather than a broken image.

   India's states live in assets/js/india-states.js, which predates this file
   and carries extra fields that india.html depends on.
   ========================================================================== */

var ROLAND_SPOTS = {

    /* ---- Asia ---------------------------------------------------------- */
    'japan': [
        { name: 'Tokyo', days: '3 days', places: 'Shibuya and Shinjuku, Senso-ji at Asakusa, Meiji Shrine, teamLab.' , img: 'photo-1545569341-9eb8b30979d9' },
        { name: 'Kyoto', days: '2–3 days', places: 'Fushimi Inari, Kinkaku-ji, Arashiyama bamboo grove, Gion.' , img: 'photo-1545569341-9eb8b30979d9' },
        { name: 'Osaka', days: '1–2 days', places: 'Dotonbori, Osaka Castle, Kuromon market, day trip to Nara.' , img: 'photo-1589452271712-64b8a66c7b71' },
        { name: 'Hakone', days: '1 day', places: 'Lake Ashi, open-air museum, onsen ryokan and Mount Fuji views.' , img: 'photo-1733413215296-958bc8ce2b42' },
        { name: 'Hiroshima', days: '1 day', places: 'Peace Memorial Park, Miyajima island and the floating torii.' , img: 'photo-1504109586057-7a2ae83d1338' }
    ],
    'okinawa': [
        { name: 'Naha', days: '1–2 days', places: 'Shuri Castle, Kokusai-dori, Tsuboya pottery district.' , img: 'photo-1647336963732-7446b9da7a6f' },
        { name: 'Churaumi', days: '1 day', places: 'Churaumi Aquarium, Emerald Beach, Bise fukugi tree lane.' , img: 'photo-1651422589451-db2ae2140b04' },
        { name: 'Kerama Islands', days: '1–2 days', places: 'Snorkelling and diving, Zamami beaches, whale watching in winter.' , img: 'photo-1625548894051-8ddd8650c6ab' }
    ],
    'cambodia': [
        { name: 'Siem Reap', days: '2–3 days', places: 'Angkor Wat at sunrise, Bayon, Ta Prohm, Tonle Sap floating villages.' , img: 'photo-1599283787923-51b965a58b05' },
        { name: 'Phnom Penh', days: '1–2 days', places: 'Royal Palace, Silver Pagoda, National Museum, riverfront.' , img: 'photo-1635167463041-00f6d9344cda' },
        { name: 'Koh Rong', days: '2 days', places: 'White-sand bays, snorkelling and bioluminescent plankton.' , img: 'photo-1616421310226-7453165b353e' },
        { name: 'Battambang', days: '1 day', places: 'Bamboo train, colonial shophouses, Phnom Sampeau at dusk.' , img: 'photo-1571579544731-ed0957f498da' }
    ],
    'vietnam': [
        { name: 'Hanoi', days: '2 days', places: 'Old Quarter, Hoan Kiem Lake, Temple of Literature, street food tour.' , img: 'photo-1726346234848-a6c0e78efd8c' },
        { name: 'Ha Long Bay', days: '1–2 days', places: 'Overnight cruise among the karsts, kayaking, Sung Sot cave.' , img: 'photo-1643029891412-92f9a81a8c16' },
        { name: 'Hoi An', days: '2 days', places: 'Lantern-lit old town, Japanese bridge, tailors, An Bang beach.' , img: 'photo-1526139334526-f591a54b477c' },
        { name: 'Ho Chi Minh City', days: '1–2 days', places: 'Reunification Palace, War Remnants Museum, Cu Chi tunnels.' , img: 'photo-1583417319070-4a69db38a482' },
        { name: 'Mekong Delta', days: '1 day', places: 'Floating markets, sampan canals and fruit orchards.' , img: 'photo-1543411789-1a67a2ac05c6' }
    ],
    'sri-lanka': [
        { name: 'Kandy', days: '1–2 days', places: 'Temple of the Tooth, botanical gardens, cultural dance show.' , img: 'photo-1642095012245-bda8033e8ee3' },
        { name: 'Ella', days: '1–2 days', places: 'Nine Arch Bridge, Little Adam’s Peak, the train from Nuwara Eliya.' , img: 'photo-1566296314736-6eaac1ca0cb9' },
        { name: 'Sigiriya', days: '1 day', places: 'Lion Rock fortress, Dambulla cave temples, village safari.' , img: 'photo-1612862862126-865765df2ded' },
        { name: 'Yala', days: '1–2 days', places: 'Leopard safaris, elephants and the coastal lagoons.' , img: 'photo-1566296314736-6eaac1ca0cb9' },
        { name: 'Galle', days: '1–2 days', places: 'Dutch fort ramparts, Unawatuna beach, whale watching at Mirissa.' , img: 'photo-1509982724584-2ce0d4366d8b' }
    ],
    'bhutan': [
        { name: 'Paro', days: '2 days', places: 'Tiger’s Nest monastery, Rinpung Dzong, the national museum.' , img: 'photo-1598869012638-f5351b49498f' },
        { name: 'Thimphu', days: '1–2 days', places: 'Buddha Dordenma, Tashichho Dzong, the weekend market.' , img: 'photo-1584003734930-b12779f66351' },
        { name: 'Punakha', days: '1–2 days', places: 'Punakha Dzong at the river confluence, the suspension bridge.' , img: 'photo-1602058033339-b9325bb3a6c3' },
        { name: 'Phobjikha', days: '1 day', places: 'Glacial valley, Gangtey monastery and black-necked cranes in winter.' , img: 'photo-1606077089615-e46a3491d931' }
    ],
    'indonesia': [
        { name: 'Ubud', days: '2–3 days', places: 'Rice terraces, Monkey Forest, Tirta Empul, art and craft villages.' , img: 'photo-1501179691627-eeaa65ea017c' },
        { name: 'Seminyak & Canggu', days: '2 days', places: 'Beach clubs, surf breaks, sunset at Tanah Lot.' , img: 'photo-1666261012387-3b8d48975c08' },
        { name: 'Nusa Penida', days: '1–2 days', places: 'Kelingking Beach, Angel’s Billabong, Crystal Bay snorkelling.' , img: 'photo-1566987827971-f2c40e748a54' },
        { name: 'Komodo', days: '2–3 days', places: 'Komodo dragons, Padar viewpoint, Pink Beach and Manta Point.' , img: 'photo-1607427225127-a4ae1d4b050c' },
        { name: 'Yogyakarta', days: '1–2 days', places: 'Borobudur at sunrise, Prambanan, the Kraton and batik workshops.' , img: 'photo-1578469550956-0e16b69c6a3d' }
    ],
    'malaysia': [
        { name: 'Kuala Lumpur', days: '1–2 days', places: 'Petronas Towers, Batu Caves, Merdeka Square, Jalan Alor.' , img: 'photo-1566914447826-bf04e54bf1be' },
        { name: 'Penang', days: '2 days', places: 'George Town street art, Peranakan mansions, Penang Hill, hawker food.' , img: 'photo-1620488212381-dea91f7dd69a' },
        { name: 'Langkawi', days: '2 days', places: 'Sky Bridge cable car, island hopping, Datai Bay beaches.' , img: 'photo-1665988945099-9cd7b622bbc6' },
        { name: 'Melaka', days: '1 day', places: 'Jonker Street, Dutch Square, the river cruise.' , img: 'photo-1589733000502-225e3f26fb8f' }
    ],
    'borneo': [
        { name: 'Sepilok', days: '1 day', places: 'Orangutan rehabilitation centre and the sun bear sanctuary.' , img: 'photo-1654180531860-83f73639e8bb' },
        { name: 'Kinabatangan', days: '2 days', places: 'River safaris for proboscis monkeys, pygmy elephants and hornbills.' , img: 'photo-1574657636552-d9ffadf92e4a' },
        { name: 'Mount Kinabalu', days: '2 days', places: 'Summit climb or the national park trails and Poring hot springs.' , img: 'photo-1602436578464-da0b3abbef9a' },
        { name: 'Sipadan', days: '2–3 days', places: 'World-class wall diving, turtles and barracuda tornadoes.' , img: 'photo-1654180639088-65f1bc3312d6' }
    ],
    'laos': [
        { name: 'Luang Prabang', days: '2–3 days', places: 'Morning alms, Mount Phousi, Kuang Si falls, the night market.' , img: 'photo-1686120552846-7caf1a345876' },
        { name: 'Vang Vieng', days: '1–2 days', places: 'Limestone karsts, blue lagoons, caves and hot-air balloons.' , img: 'photo-1718267104642-147a1373b3c6' },
        { name: 'Vientiane', days: '1 day', places: 'Pha That Luang, Patuxai, the riverside night market.' , img: 'photo-1704212685546-3086abc1e6a1' },
        { name: '4000 Islands', days: '2 days', places: 'Mekong hammocks, Khone Phapheng falls and Irrawaddy dolphins.' , img: 'photo-1745331568774-cc043277ac58' }
    ],
    'mongolia': [
        { name: 'Ulaanbaatar', days: '1 day', places: 'Gandan monastery, the National Museum, Zaisan hill.' , img: 'photo-1575415868394-e3b78f3e9b3f' },
        { name: 'Terelj', days: '1–2 days', places: 'Ger camp stay, Turtle Rock, Chinggis Khaan statue complex.' , img: 'photo-1575415868394-e3b78f3e9b3f' },
        { name: 'Gobi Desert', days: '3 days', places: 'Khongoryn Els dunes, Yolyn Am gorge, the Flaming Cliffs.' , img: 'photo-1561990768-fc6c571931cc' },
        { name: 'Orkhon Valley', days: '2 days', places: 'Nomad families, Orkhon waterfall, Kharkhorin and Erdene Zuu.' , img: 'photo-1765881775428-828bf6f60c7c' }
    ],
    'china': [
        { name: 'Beijing', days: '3 days', places: 'The Great Wall at Mutianyu, Forbidden City, Temple of Heaven.' , img: 'photo-1547981609-4b6bfe67ca0b' },
        { name: 'Xi’an', days: '1–2 days', places: 'Terracotta Army, the city walls by bicycle, the Muslim Quarter.' , img: 'photo-1527922891260-918d42a4efc8' },
        { name: 'Shanghai', days: '2 days', places: 'The Bund, Yu Garden, the French Concession, Pudong skyline.' , img: 'photo-1538428494232-9c0d8a3ab403' },
        { name: 'Guilin & Yangshuo', days: '2 days', places: 'Li River cruise, karst peaks, rice terraces at Longji.' , img: 'photo-1636964886908-7b28097bc746' },
        { name: 'Chengdu', days: '1–2 days', places: 'Giant panda base, Leshan Buddha, teahouses and hotpot.' , img: 'photo-1540126034813-121bf29033d2' }
    ],
    'jordan': [
        { name: 'Petra', days: '2 days', places: 'The Siq and Treasury, the Monastery climb, Petra by Night.' , img: 'photo-1580834341580-8c17a3a630ca' },
        { name: 'Wadi Rum', days: '1–2 days', places: 'Jeep safari, Bedouin camp, sandstone arches and stargazing.' , img: 'photo-1580204745408-9c18ddb64978' },
        { name: 'Dead Sea', days: '1 day', places: 'Floating in the salt water, mud treatments, spa resorts.' , img: 'photo-1743943932415-947f79353387' },
        { name: 'Amman & Jerash', days: '1–2 days', places: 'The Citadel, Roman theatre, and the colonnades of Jerash.' , img: 'photo-1709912152395-787679e56451' }
    ],

    'ladakh': [
        { name: 'Leh', days: '2 days', places: 'Leh Palace, Shanti Stupa, the old bazaar, acclimatisation days.' , img: 'photo-1581793745862-99fde7fa73d2' },
        { name: 'Pangong Tso', days: '1\u20132 days', places: 'The high-altitude lake, Chang La pass, lakeside camps.' , img: 'photo-1593118845043-359e5f628214' },
        { name: 'Nubra Valley', days: '1\u20132 days', places: 'Khardung La, Hunder sand dunes, double-humped camels, Diskit monastery.' , img: 'photo-1593118960299-4818285df788' },
        { name: 'Monasteries', days: '1 day', places: 'Thiksey, Hemis and Alchi, with morning prayers at Thiksey.' , img: 'photo-1592334934411-8c2b49989d29' },
        { name: 'Tso Moriri', days: '1\u20132 days', places: 'Remote high lake, Korzok village, migratory birds in summer.' , img: 'photo-1606857090627-27ca46667290' }
    ],

    /* ---- Africa & Middle East ------------------------------------------ */
    'tanzania': [
        { name: 'Serengeti', days: '3 days', places: 'The migration herds, big cats on the plains, balloon safari at dawn.' , img: 'photo-1613864309738-9102a9e22883' },
        { name: 'Ngorongoro Crater', days: '1–2 days', places: 'Crater floor game drive, black rhino, flamingos on the soda lake.' , img: 'photo-1745885979468-44a855f8a5fa' },
        { name: 'Zanzibar', days: '2–3 days', places: 'Stone Town, spice farms, Nungwi and Kendwa beaches.' , img: 'photo-1575999502951-4ab25b5ca889' },
        { name: 'Tarangire', days: '1 day', places: 'Baobab country, large elephant herds and the river circuit.' , img: 'photo-1613864309738-9102a9e22883' },
        { name: 'Kilimanjaro', days: '6–8 days', places: 'Machame or Lemosho route to Uhuru Peak with full support.' , img: 'photo-1650668302197-7f556c34cb91' }
    ],
    'kenya': [
        { name: 'Masai Mara', days: '3 days', places: 'Mara River crossings, big cats, Maasai village visit.' , img: 'photo-1624307844603-5a603dd96176' },
        { name: 'Amboseli', days: '1–2 days', places: 'Elephant herds beneath Kilimanjaro, Observation Hill.' , img: 'photo-1547471080-7cc2caa01a7e' },
        { name: 'Lake Nakuru', days: '1 day', places: 'Flamingos, rhino sanctuary and Rothschild giraffe.' , img: 'photo-1710136678658-a12caee832a7' },
        { name: 'Diani Beach', days: '2 days', places: 'White sand on the Indian Ocean, reef snorkelling, dhow trips.' , img: 'photo-1667935837291-1dc178866251' }
    ],
    'egypt': [
        { name: 'Cairo & Giza', days: '2 days', places: 'The Pyramids and Sphinx, the Grand Egyptian Museum, Khan el-Khalili.' , img: 'photo-1600520611035-84157ad4084d' },
        { name: 'Luxor', days: '2 days', places: 'Karnak, Valley of the Kings, Hatshepsut, balloon over the West Bank.' , img: 'photo-1632944398987-494eebe663be' },
        { name: 'Aswan & Abu Simbel', days: '2 days', places: 'Philae Temple, a felucca on the Nile, the temples of Ramses II.' , img: 'photo-1562679299-266edbefd6d7' },
        { name: 'Nile Cruise', days: '3–4 days', places: 'Luxor to Aswan by river, stopping at Edfu and Kom Ombo.' , img: 'photo-1644517270263-4112379d97ca' },
        { name: 'Hurghada', days: '2 days', places: 'Red Sea diving, reef snorkelling and desert quad safaris.' , img: 'photo-1738935457539-936fdb320c51' }
    ],
    'morocco': [
        { name: 'Marrakech', days: '2 days', places: 'Jemaa el-Fnaa, Bahia Palace, the souks, Majorelle Garden.' , img: 'photo-1597212618440-806262de4f6b' },
        { name: 'Fes', days: '1–2 days', places: 'The medina and tanneries, Al-Qarawiyyin, Bou Inania madrasa.' , img: 'photo-1597212618440-806262de4f6b' },
        { name: 'Sahara (Merzouga)', days: '2 days', places: 'Camel trek into Erg Chebbi, desert camp, sunrise over the dunes.' , img: 'photo-1592172578991-51bac865e437' },
        { name: 'Chefchaouen', days: '1 day', places: 'The blue-washed old town and the Rif mountain viewpoints.' , img: 'photo-1569383746724-6f1b882b8f46' },
        { name: 'Atlas Mountains', days: '1–2 days', places: 'Berber villages, Ourika valley, Toubkal foothill treks.' , img: 'photo-1560789590-ee4cc7125967' }
    ],
    'south-africa': [
        { name: 'Cape Town', days: '3 days', places: 'Table Mountain, Cape Point, Boulders penguins, V&A Waterfront.' , img: 'photo-1580060839134-75a5edca2e99' },
        { name: 'Kruger', days: '2–3 days', places: 'Big Five game drives, private reserve lodges, bush walks.' , img: 'photo-1496773589367-79ee06195d0b' },
        { name: 'Winelands', days: '1–2 days', places: 'Stellenbosch and Franschhoek estates, the wine tram.' , img: 'photo-1695237360879-4c1374ce1ce8' },
        { name: 'Garden Route', days: '2–3 days', places: 'Knysna lagoon, Tsitsikamma, Plettenberg Bay.' , img: 'photo-1548790630-2d0b42f5c956' },
        { name: 'Hermanus', days: '1 day', places: 'Land-based whale watching between June and November.' , img: 'photo-1541954902471-4503b47641a4' }
    ],
    'botswana': [
        { name: 'Okavango Delta', days: '3 days', places: 'Mokoro canoe safaris, water-channel game viewing, island camps.' , img: 'photo-1655981653211-339daa50e4c1' },
        { name: 'Chobe', days: '2 days', places: 'Elephant herds on the river, sunset boat cruise.' , img: 'photo-1595062889972-9c7125152cc0' },
        { name: 'Moremi', days: '2 days', places: 'Predator-rich floodplains, Khwai river crossings.' , img: 'photo-1642799587144-ce02c1d50a29' },
        { name: 'Makgadikgadi Pans', days: '1–2 days', places: 'Salt pans, meerkats and quad biking across the crust.' , img: 'photo-1759221947568-240243ee9b3a' }
    ],
    'namibia': [
        { name: 'Sossusvlei', days: '1–2 days', places: 'Red dunes at sunrise, Deadvlei, Sesriem canyon.' , img: 'photo-1497598315776-c2e30b55e4c5' },
        { name: 'Etosha', days: '2 days', places: 'Waterhole game viewing, the salt pan, floodlit night hides.' , img: 'photo-1497598315776-c2e30b55e4c5' },
        { name: 'Swakopmund', days: '1–2 days', places: 'Dune quad biking, Sandwich Harbour, seals at Walvis Bay.' , img: 'photo-1576599875928-56b40063f3cb' },
        { name: 'Damaraland', days: '1–2 days', places: 'Desert elephants, Twyfelfontein rock art, Spitzkoppe.' , img: 'photo-1595584745637-0b1a5a5ebfa2' }
    ],
    'zimbabwe': [
        { name: 'Victoria Falls', days: '2 days', places: 'The falls circuit, Zambezi sunset cruise, bungee and helicopter.' , img: 'photo-1627347456206-d3df7d8484b0' },
        { name: 'Hwange', days: '2 days', places: 'Huge elephant populations, waterhole hides, night drives.' , img: 'photo-1678059466227-d19beeff7557' },
        { name: 'Mana Pools', days: '2–3 days', places: 'Walking safaris, canoeing the Zambezi, albida forests.' , img: 'photo-1634179412263-19d96377c1a2' },
        { name: 'Great Zimbabwe', days: '1 day', places: 'The stone ruins of the medieval capital and its hill complex.' , img: 'photo-1642085732669-2b869acec5a1' }
    ],
    'zambia': [
        { name: 'South Luangwa', days: '3 days', places: 'The home of the walking safari, leopards, hippo-filled river.' , img: 'photo-1533631278779-d722ded4c7df' },
        { name: 'Victoria Falls (Livingstone)', days: '2 days', places: 'Knife-edge bridge, Devil\u2019s Pool in season, microlight flights.' , img: 'photo-1627347456206-d3df7d8484b0' },
        { name: 'Lower Zambezi', days: '2 days', places: 'Canoe safaris, tiger fishing, elephants crossing the channels.' , img: 'photo-1682284023696-3c69530fba8f' },
        { name: 'Kafue', days: '2 days', places: 'Busanga Plains, lion prides and vast open floodplains.' , img: 'photo-1533631278779-d722ded4c7df' }
    ],
    'rwanda': [
        { name: 'Volcanoes National Park', days: '2 days', places: 'Mountain gorilla trek, golden monkeys, Dian Fossey\u2019s grave.' , img: 'photo-1722291731448-3afe029611a6' },
        { name: 'Kigali', days: '1 day', places: 'Genocide Memorial, craft markets and the hillside city views.' , img: 'photo-1687986261123-b17f08f2796c' },
        { name: 'Lake Kivu', days: '1–2 days', places: 'Lakeside beaches at Gisenyi, coffee tours and kayaking.' , img: 'photo-1706977570024-fefa419c48c8' },
        { name: 'Nyungwe Forest', days: '1–2 days', places: 'Canopy walkway, chimpanzee tracking and tea estates.' , img: 'photo-1489640818597-89b1edc97db5' }
    ],

    /* ---- Europe -------------------------------------------------------- */
    'iceland': [
        { name: 'Reykjavik', days: '1–2 days', places: 'Hallgrimskirkja, Harpa, the old harbour and Sky Lagoon.' , img: 'photo-1606130503037-6a8ef67c9d2d' },
        { name: 'Golden Circle', days: '1 day', places: 'Thingvellir rift, Geysir, Gullfoss waterfall.' , img: 'photo-1476610182048-b716b8518aae' },
        { name: 'South Coast', days: '1–2 days', places: 'Seljalandsfoss, Skogafoss, the black sand at Reynisfjara.' , img: 'photo-1504829857797-ddff29c27927' },
        { name: 'Jokulsarlon', days: '1 day', places: 'Glacier lagoon, Diamond Beach and ice cave tours in winter.' , img: 'photo-1473654729523-203e25dfda10' },
        { name: 'Blue Lagoon', days: '1 day', places: 'Geothermal bathing in the lava field near Keflavik.' , img: 'photo-1462993340984-49bd9e0f32dd' }
    ],
    'norway': [
        { name: 'Bergen', days: '1–2 days', places: 'Bryggen wharf, the funicular to Floyen, the fish market.' , img: 'photo-1544085311-11a028465b03' },
        { name: 'Geirangerfjord', days: '1–2 days', places: 'Fjord cruise, the Seven Sisters falls, Dalsnibba viewpoint.' , img: 'photo-1664825381616-5cb8397fd9b1' },
        { name: 'Troms\u00f8', days: '2 days', places: 'Northern Lights chases, dog sledding, the Arctic Cathedral.' , img: 'photo-1531366936337-7c912a4589a7' },
        { name: 'Lofoten', days: '2–3 days', places: 'Fishing villages, Reine, white beaches under sharp peaks.' , img: 'photo-1663428520845-056989f8a664' },
        { name: 'Oslo', days: '1–2 days', places: 'The Fram and Munch museums, Vigeland Park, the Opera House.' , img: 'photo-1433757741270-94a3bcadc2f3' }
    ],
    'finland': [
        { name: 'Rovaniemi', days: '2 days', places: 'Santa Claus Village, reindeer and husky sledding, the Arctic Circle.' , img: 'photo-1645020456013-c4e693da0bbf' },
        { name: 'Saariselk\u00e4', days: '1–2 days', places: 'Glass igloos, aurora watching and snowmobile safaris.' , img: 'photo-1672643345017-a12bcce68cf5' },
        { name: 'Helsinki', days: '1–2 days', places: 'Suomenlinna fortress, the Rock Church, design district and saunas.' , img: 'photo-1538332576228-eb5b4c4de6f5' },
        { name: 'Lakeland', days: '1–2 days', places: 'Lakeside cabins, Savonlinna castle and summer midnight sun.' , img: 'photo-1562314415-f14cd8ff1535' }
    ],
    'switzerland': [
        { name: 'Zermatt', days: '2 days', places: 'The Matterhorn, Gornergrat railway, car-free alpine village.' , img: 'photo-1527668752968-14dc70a27c95' },
        { name: 'Interlaken & Jungfrau', days: '2 days', places: 'Jungfraujoch, Lauterbrunnen valley, Grindelwald First.' , img: 'photo-1618493075021-1bbe5deebedf' },
        { name: 'Lucerne', days: '1 day', places: 'Chapel Bridge, Mount Pilatus, a cruise on the lake.' , img: 'photo-1565182242096-16033e7f1260' },
        { name: 'Glacier Express', days: '1 day', places: 'The panoramic rail journey between Zermatt and St Moritz.' , img: 'photo-1629653403102-8033bbaff2bc' },
        { name: 'Geneva & Montreux', days: '1–2 days', places: 'Lake Geneva, Chillon Castle, the Lavaux vineyard terraces.' , img: 'photo-1609959023077-3f2f0a70d6c5' }
    ],
    'austria': [
        { name: 'Vienna', days: '2 days', places: 'Sch\u00f6nbrunn, the Hofburg, St Stephen\u2019s, coffee houses and the opera.' , img: 'photo-1516550893923-42d28e5677af' },
        { name: 'Salzburg', days: '1–2 days', places: 'The old town, Hohensalzburg fortress, Mozart\u2019s birthplace, Mirabell.' , img: 'photo-1603892710963-331039c8dc66' },
        { name: 'Hallstatt', days: '1 day', places: 'The lakeside village, salt mine and the skywalk viewpoint.' , img: 'photo-1597086831879-756db15e81d3' },
        { name: 'Tyrol', days: '2 days', places: 'Innsbruck, alpine villages and the ski slopes above the valley.' , img: 'photo-1597086831879-756db15e81d3' }
    ],
    'italy': [
        { name: 'Rome', days: '3 days', places: 'Colosseum, Vatican Museums, Pantheon, Trastevere.' , img: 'photo-1552832230-c0197dd311b5' },
        { name: 'Florence', days: '2 days', places: 'The Duomo, Uffizi, Ponte Vecchio, day trips into Chianti.' , img: 'photo-1476362174823-3a23f4aa6d76' },
        { name: 'Venice', days: '1–2 days', places: 'St Mark\u2019s, the Grand Canal, Murano and Burano.' , img: 'photo-1520175480921-4edfa2983e0f' },
        { name: 'Amalfi Coast', days: '2–3 days', places: 'Positano, Ravello, Capri by boat, the Path of the Gods.' , img: 'photo-1583844056361-4418a8f2a985' },
        { name: 'Tuscany', days: '2 days', places: 'Siena, San Gimignano, Val d\u2019Orcia, wine estates.' , img: 'photo-1518098268026-4e89f1a2cd8e' }
    ],
    'spain': [
        { name: 'Barcelona', days: '2–3 days', places: 'Sagrada Familia, Park G\u00fcell, the Gothic Quarter, Barceloneta.' , img: 'photo-1583422409516-2895a77efded' },
        { name: 'Madrid', days: '2 days', places: 'The Prado, Retiro Park, the Royal Palace, tapas in La Latina.' , img: 'photo-1543783207-ec64e4d95325' },
        { name: 'Granada', days: '1–2 days', places: 'The Alhambra and Generalife, the Albaic\u00edn, flamenco in Sacromonte.' , img: 'photo-1620677368158-32b1293fac36' },
        { name: 'Seville', days: '1–2 days', places: 'The Alc\u00e1zar, the cathedral and Giralda, Plaza de Espa\u00f1a.' , img: 'photo-1509840841025-9088ba78a826' },
        { name: 'San Sebasti\u00e1n', days: '1–2 days', places: 'La Concha beach, pintxos bars, Monte Igueldo.' , img: 'photo-1647526232039-6099babcca81' }
    ],
    'portugal': [
        { name: 'Lisbon', days: '2–3 days', places: 'Alfama and the trams, Bel\u00e9m tower, Jer\u00f3nimos, fado evenings.' , img: 'photo-1585208798174-6cedd86e019a' },
        { name: 'Porto', days: '2 days', places: 'Ribeira, the port lodges of Gaia, Livraria Lello, S\u00e3o Bento.' , img: 'photo-1555881400-74d7acaacd8b' },
        { name: 'Douro Valley', days: '1–2 days', places: 'Terraced vineyards, quinta tastings, the river by boat or train.' , img: 'photo-1638664370752-8188076afbab' },
        { name: 'Sintra', days: '1 day', places: 'Pena Palace, Quinta da Regaleira, the Moorish castle.' , img: 'photo-1697050303652-0b228f3f83df' },
        { name: 'Algarve', days: '2 days', places: 'Lagos cliffs, Benagil cave, Praia da Marinha.' , img: 'photo-1566988148642-343730e135bf' }
    ],
    'france': [
        { name: 'Paris', days: '3 days', places: 'The Louvre, Eiffel Tower, Montmartre, a Seine cruise.' , img: 'photo-1499856871958-5b9627545d1a' },
        { name: 'Loire Valley', days: '1–2 days', places: 'Chambord, Chenonceau and Amboise, with vineyard stops.' , img: 'photo-1650062908250-5a69ddebf470' },
        { name: 'Provence', days: '2 days', places: 'Lavender fields in season, Avignon, Gordes, the Luberon villages.' , img: 'photo-1600759487717-62bbb608106e' },
        { name: 'French Riviera', days: '2 days', places: 'Nice, \u00c8ze, Antibes and Monaco along the Corniche.' , img: 'photo-1643914729809-4aa59fdc4c17' },
        { name: 'Mont Saint-Michel', days: '1 day', places: 'The abbey on the tidal island and its causeway approach.' , img: 'photo-1671010496251-22eab06e3292' }
    ],
    'germany': [
        { name: 'Berlin', days: '2 days', places: 'Brandenburg Gate, Museum Island, the Wall memorial, Reichstag.' , img: 'photo-1599946347371-68eb71b16afc' },
        { name: 'Bavaria & Neuschwanstein', days: '1–2 days', places: 'The fairytale castle, Hohenschwangau and alpine lakes.' , img: 'photo-1449452198679-05c7fd30f416' },
        { name: 'Munich', days: '1–2 days', places: 'Marienplatz, the Residenz, beer halls and the English Garden.' , img: 'photo-1595867818082-083862f3d630' },
        { name: 'Romantic Road', days: '2 days', places: 'Rothenburg ob der Tauber, W\u00fcrzburg and walled medieval towns.' , img: 'photo-1467269204594-9661b134dd2b' },
        { name: 'Rhine Valley', days: '1 day', places: 'Castle-topped gorge, river cruise and Rudesheim wine taverns.' , img: 'photo-1640265225639-6cc10eddae74' }
    ],
    'greece': [
        { name: 'Athens', days: '2 days', places: 'The Acropolis and its museum, Plaka, the Ancient Agora.' , img: 'photo-1603565816030-6b389eeb23cb' },
        { name: 'Santorini', days: '2 days', places: 'Oia sunsets, the caldera cruise, Red Beach and wineries.' , img: 'photo-1580502304784-8985b7eb7260' },
        { name: 'Mykonos', days: '1–2 days', places: 'Little Venice, the windmills, Paradise and Super Paradise beaches.' , img: 'photo-1601581875309-fafbf2d3ed3a' },
        { name: 'Crete', days: '2–3 days', places: 'Knossos, Chania old town, Samaria gorge, Elafonissi.' , img: 'photo-1616763866684-b215941fae5e' },
        { name: 'Meteora', days: '1 day', places: 'Monasteries perched on sandstone pillars, sunset viewpoints.' , img: 'photo-1521491242559-c00e4eb2bb5c' }
    ],
    'croatia': [
        { name: 'Dubrovnik', days: '2 days', places: 'The city walls, Stradun, the Lokrum ferry, Mount Srd cable car.' , img: 'photo-1555990793-da11153b2473' },
        { name: 'Split', days: '1–2 days', places: 'Diocletian\u2019s Palace, the Riva, Marjan hill.' , img: 'photo-1575540291670-8d3b26f7d327' },
        { name: 'Hvar', days: '1–2 days', places: 'The Spanish fortress, Pakleni islands, lavender fields.' , img: 'photo-1626698393005-68c2937dd401' },
        { name: 'Plitvice Lakes', days: '1 day', places: 'Sixteen terraced lakes, boardwalks and waterfalls.' , img: 'photo-1589312133722-eab40c686ebb' },
        { name: 'Istria', days: '1–2 days', places: 'Rovinj, Pula\u2019s Roman arena, truffle country around Motovun.' , img: 'photo-1695634930611-111385105b53' }
    ],
    'slovenia': [
        { name: 'Lake Bled', days: '1–2 days', places: 'The island church by pletna, the castle, Vintgar gorge.' , img: 'photo-1562083589-3bf71182e9c2' },
        { name: 'Ljubljana', days: '1 day', places: 'The castle, Triple Bridge, the riverside cafés and market.' , img: 'photo-1602619025915-073b0594d662' },
        { name: 'Postojna & Predjama', days: '1 day', places: 'The cave railway and the castle built into a cliff face.' , img: 'photo-1726640897240-dce88471ac36' },
        { name: 'Triglav & Soca Valley', days: '1–2 days', places: 'Alpine trails, the turquoise Soca river, Vrsic pass.' , img: 'photo-1624200562245-f48444e25252' }
    ],
    'ireland': [
        { name: 'Dublin', days: '1–2 days', places: 'Trinity College and the Book of Kells, Guinness Storehouse, Temple Bar.' , img: 'photo-1549918864-48ac978761a4' },
        { name: 'Ring of Kerry', days: '1–2 days', places: 'Killarney National Park, Skellig views, mountain passes.' , img: 'photo-1557843961-b589ce207737' },
        { name: 'Cliffs of Moher', days: '1 day', places: 'The cliff walk, the Burren limestone pavement, Doolin music pubs.' , img: 'photo-1602354817989-b9664561ae84' },
        { name: 'Galway & Connemara', days: '1–2 days', places: 'Latin Quarter, Kylemore Abbey, the Twelve Bens.' , img: 'photo-1693342563508-75ff43f43198' },
        { name: 'Causeway Coast', days: '1 day', places: 'Giant\u2019s Causeway, Carrick-a-Rede rope bridge, Dark Hedges.' , img: 'photo-1595538853083-dc3160ca6881' }
    ],
    'uk': [
        { name: 'London', days: '3 days', places: 'The Tower, Westminster, the British Museum, the West End.' , img: 'photo-1513635269975-59663e0ac1ad' },
        { name: 'Edinburgh', days: '2 days', places: 'The castle, the Royal Mile, Arthur\u2019s Seat, Holyrood.' , img: 'photo-1506377585622-bedcbb027afc' },
        { name: 'The Cotswolds', days: '1–2 days', places: 'Bibury, Bourton-on-the-Water, Castle Combe, country pubs.' , img: 'photo-1670620800615-4225fe6ecb75' },
        { name: 'Lake District', days: '1–2 days', places: 'Windermere, Grasmere, fell walks and lake cruises.' , img: 'photo-1560710975-f45ff940f161' },
        { name: 'Scottish Highlands', days: '2–3 days', places: 'Glencoe, Loch Ness, Isle of Skye, whisky distilleries.' , img: 'photo-1589489873423-d1745278a8f4' }
    ],
    'england': [
        { name: 'London', days: '3 days', places: 'The Tower, Westminster, the British Museum, the West End.' , img: 'photo-1513635269975-59663e0ac1ad' },
        { name: 'Oxford & Cambridge', days: '1–2 days', places: 'College quads, punting on the Cherwell and the Cam.' , img: 'photo-1676759527273-c4398483f22f' },
        { name: 'Bath & Stonehenge', days: '1 day', places: 'The Roman Baths, Royal Crescent, the standing stones.' , img: 'photo-1503624945224-2b447278f400' },
        { name: 'Lake District', days: '1–2 days', places: 'Windermere, Grasmere, fell walks and lake cruises.' , img: 'photo-1560710975-f45ff940f161' },
        { name: 'York', days: '1 day', places: 'The Minster, the Shambles, the medieval city walls.' , img: 'photo-1576403378256-81286c72b771' }
    ],
    'scotland': [
        { name: 'Edinburgh', days: '2 days', places: 'The castle, the Royal Mile, Arthur\u2019s Seat, Holyrood.' , img: 'photo-1506377585622-bedcbb027afc' },
        { name: 'Isle of Skye', days: '2 days', places: 'The Quiraing, Old Man of Storr, Fairy Pools, Neist Point.' , img: 'photo-1546706872-9c90b8d0c94f' },
        { name: 'Glencoe', days: '1 day', places: 'The glen, Three Sisters, Buachaille Etive Mor.' , img: 'photo-1574428512652-01ca1eb6f1ed' },
        { name: 'Loch Ness & Inverness', days: '1 day', places: 'Urquhart Castle, the loch cruise, Culloden battlefield.' , img: 'photo-1607602274619-4503f0c2444c' },
        { name: 'Speyside', days: '1 day', places: 'Whisky distillery tours along the malt trail.' , img: 'photo-1722519228537-dd55e4ba78eb' }
    ],
    'cotswolds': [
        { name: 'Bourton-on-the-Water', days: '1 day', places: 'The low bridges over the Windrush, the model village.' , img: 'photo-1583070507206-a2a10f31cf42' },
        { name: 'Bibury', days: '1 day', places: 'Arlington Row weavers\u2019 cottages and the trout farm.' , img: 'photo-1568144510602-c4082cb85d43' },
        { name: 'Castle Combe', days: '1 day', places: 'The market cross, the by-brook and the church.' , img: 'photo-1670620800615-4225fe6ecb75' },
        { name: 'Stow-on-the-Wold', days: '1 day', places: 'Antique shops, the market square, the yew-framed church door.' , img: 'photo-1649182358791-b46d9cc6c0b5' }
    ],

    /* ---- The Americas -------------------------------------------------- */
    'usa': [
        { name: 'New York', days: '3 days', places: 'Central Park, the Met, Times Square, the Brooklyn Bridge.' , img: 'photo-1496588152823-86ff7695e68f' },
        { name: 'Grand Canyon', days: '1–2 days', places: 'South Rim viewpoints, the rim trail, helicopter flights.' , img: 'photo-1615551043360-33de8b5f410c' },
        { name: 'San Francisco', days: '2 days', places: 'Golden Gate, Alcatraz, the cable cars, Muir Woods.' , img: 'photo-1501594907352-04cda38ebc29' },
        { name: 'Yellowstone', days: '2–3 days', places: 'Old Faithful, Grand Prismatic, Lamar Valley wildlife.' , img: 'photo-1629985692757-48648f4f1fc1' },
        { name: 'Las Vegas', days: '1–2 days', places: 'The Strip, shows, and the drive out to Red Rock Canyon.' , img: 'photo-1581351721010-8cf859cb14a4' }
    ],
    'hawaii': [
        { name: 'Oahu', days: '2–3 days', places: 'Waikiki, Pearl Harbor, Diamond Head, the North Shore.' , img: 'photo-1505852679233-d9fd70aff56d' },
        { name: 'Maui', days: '2–3 days', places: 'Road to Hana, Haleakala sunrise, Molokini snorkelling.' , img: 'photo-1542259009477-d625272157b7' },
        { name: 'Kauai', days: '2 days', places: 'Na Pali coast, Waimea Canyon, Hanalei Bay.' , img: 'photo-1505852679233-d9fd70aff56d' },
        { name: 'Big Island', days: '2 days', places: 'Volcanoes National Park, Mauna Kea stargazing, black sand beaches.' , img: 'photo-1576941026827-bccc82341bdd' }
    ],
    'utah': [
        { name: 'Zion', days: '1–2 days', places: 'Angels Landing, the Narrows, Canyon Overlook.' , img: 'photo-1443632864897-14973fa006cf' },
        { name: 'Bryce Canyon', days: '1 day', places: 'Sunrise Point, the hoodoos, the Navajo Loop.' , img: 'photo-1513997759259-48cbd481c69c' },
        { name: 'Arches', days: '1 day', places: 'Delicate Arch, Landscape Arch, Devils Garden.' , img: 'photo-1614484564972-e37b65b5a573' },
        { name: 'Monument Valley', days: '1 day', places: 'The valley drive, Mitten buttes, Navajo-guided tours.' , img: 'photo-1480004902249-cdb28d6a01a4' }
    ],
    'montana': [
        { name: 'Glacier National Park', days: '2–3 days', places: 'Going-to-the-Sun Road, Grinnell Glacier, Lake McDonald.' , img: 'photo-1579368135505-baeb6899fd69' },
        { name: 'Bozeman', days: '1 day', places: 'Museum of the Rockies, hot springs, the Gallatin valley.' , img: 'photo-1608768557474-d4c5651d3230' },
        { name: 'Yellowstone North', days: '2 days', places: 'Mammoth Hot Springs, Lamar Valley wolves and bison.' , img: 'photo-1668278535123-73de3fecb59e' }
    ],
    'new-england': [
        { name: 'Vermont', days: '2 days', places: 'Stowe, covered bridges, maple farms, peak foliage drives.' , img: 'photo-1603331651359-86dd9d0a92c2' },
        { name: 'Boston', days: '1–2 days', places: 'The Freedom Trail, Beacon Hill, Harvard across the river.' , img: 'photo-1565127803082-69dd82351360' },
        { name: 'Acadia & Maine', days: '1–2 days', places: 'Cadillac Mountain, Bar Harbor, lobster shacks on the coast.' , img: 'photo-1693307481261-1725dbe5a61f' },
        { name: 'The Berkshires', days: '1 day', places: 'Country inns, Norman Rockwell Museum, autumn backroads.' , img: 'photo-1630284713798-1233e9d5f05d' }
    ],
    'florida': [
        { name: 'Orlando', days: '2–3 days', places: 'The theme parks and water parks around International Drive.' , img: 'photo-1605723517503-3cadb5818a0c' },
        { name: 'Miami & South Beach', days: '2 days', places: 'Art Deco district, Little Havana, Wynwood murals.' , img: 'photo-1543968332-f99478b1ebdc' },
        { name: 'Florida Keys', days: '1–2 days', places: 'The Overseas Highway, Key West sunsets, snorkelling at Key Largo.' , img: 'photo-1740990556921-6131d2a9d16c' },
        { name: 'Everglades', days: '1 day', places: 'Airboat trips, alligators and the mangrove trails.' , img: 'photo-1703658648505-96dbcf4f610c' }
    ],
    'alaska': [
        { name: 'Denali', days: '2 days', places: 'The park road, grizzly and moose spotting, flightseeing the peak.' , img: 'photo-1549517771-aa105e8da34f' },
        { name: 'Anchorage', days: '1 day', places: 'Turnagain Arm, the coastal trail, wildlife conservation centre.' , img: 'photo-1549517771-aa105e8da34f' },
        { name: 'Inside Passage', days: '2–3 days', places: 'Glacier Bay, Juneau, Mendenhall Glacier, whale watching.' , img: 'photo-1576814485347-8b4e9861e74d' },
        { name: 'Fairbanks', days: '1–2 days', places: 'Aurora viewing, Chena hot springs, dog sledding in winter.' , img: 'photo-1709339897669-d9ba65f60684' }
    ],
    'canada': [
        { name: 'Banff & Lake Louise', days: '2–3 days', places: 'Moraine Lake, the gondola, Johnston Canyon, hot springs.' , img: 'photo-1594741873407-c292ca075f8b' },
        { name: 'Jasper', days: '1–2 days', places: 'The Icefields Parkway, Athabasca Glacier, Maligne Lake.' , img: 'photo-1501979735065-dfe1580b4a49' },
        { name: 'Vancouver', days: '1–2 days', places: 'Stanley Park, Granville Island, Capilano suspension bridge.' , img: 'photo-1559511260-66a654ae982a' },
        { name: 'Quebec City', days: '1–2 days', places: 'Old Quebec, Château Frontenac, Montmorency Falls.' , img: 'photo-1576771304215-6d4d30f7bb63' },
        { name: 'Niagara Falls', days: '1 day', places: 'The Horseshoe Falls, Journey Behind the Falls, the boat trip.' , img: 'photo-1533094602577-198d3beab8ea' }
    ],
    'mexico': [
        { name: 'Riviera Maya', days: '2–3 days', places: 'Playa del Carmen, Tulum ruins above the sea, beach clubs.' , img: 'photo-1501855901885-8b29fa615daf' },
        { name: 'Chichén Itzá', days: '1 day', places: 'El Castillo, the ball court, the cenote at Ik Kil.' , img: 'photo-1561577101-aa749bffbb70' },
        { name: 'Mexico City', days: '2 days', places: 'Zocalo, Frida Kahlo museum, Teotihuacan pyramids.' , img: 'photo-1585464231875-d9ef1f5ad396' },
        { name: 'Oaxaca', days: '1–2 days', places: 'Monte Albán, the markets, mezcal palenques.' , img: 'photo-1660670173026-ec491dd3dd1a' },
        { name: 'Los Cabos', days: '2 days', places: 'El Arco, whale watching, the Baja beaches and golf.' , img: 'photo-1702593496618-68fa8af7b5e1' }
    ],
    'costa-rica': [
        { name: 'Arenal & La Fortuna', days: '2 days', places: 'The volcano, hanging bridges, hot springs, waterfall hikes.' , img: 'photo-1705351978871-2b3316c25e6d' },
        { name: 'Monteverde', days: '1–2 days', places: 'Cloud forest reserve, canopy zip lines, night walks.' , img: 'photo-1587493513878-d68611233b03' },
        { name: 'Manuel Antonio', days: '1–2 days', places: 'Rainforest meeting the beach, sloths and capuchins.' , img: 'photo-1536709017021-ce8f99c17e38' },
        { name: 'Tortuguero', days: '1–2 days', places: 'Canal boat safaris and turtle nesting in season.' , img: 'photo-1580182019279-9c9a88350737' }
    ],
    'guatemala': [
        { name: 'Antigua', days: '1–2 days', places: 'Colonial streets, Santa Catalina arch, the volcano viewpoints.' , img: 'photo-1637966201771-b0b251baa2ef' },
        { name: 'Lake Atitlán', days: '2 days', places: 'Panajachel, the Mayan villages by boat, San Juan weavers.' , img: 'photo-1669025467316-a1bff8696c36' },
        { name: 'Tikal', days: '1–2 days', places: 'Temple pyramids above the jungle canopy, howler monkeys.' , img: 'photo-1508035460735-91088c495500' },
        { name: 'Semuc Champey', days: '1 day', places: 'Turquoise limestone pools and the river caves.' , img: 'photo-1675185457371-aae4e3ea0270' }
    ],
    'belize': [
        { name: 'Ambergris Caye', days: '2 days', places: 'Hol Chan reserve, Shark Ray Alley, San Pedro.' , img: 'photo-1640556292354-b761738e4bc0' },
        { name: 'Blue Hole', days: '1 day', places: 'The famous dive or a scenic flight over the atoll.' , img: 'photo-1722761478075-720dc58e63d1' },
        { name: 'San Ignacio', days: '1–2 days', places: 'ATM cave, Xunantunich ruins, jungle lodges.' , img: 'photo-1585535284003-0483dbc54daa' },
        { name: 'Placencia', days: '1–2 days', places: 'Beach village, snorkelling and whale shark season.' , img: 'photo-1731020992821-6e01f2bf54d2' }
    ],
    'nicaragua': [
        { name: 'Granada', days: '1–2 days', places: 'Colonial streets, Las Isletas by boat, Mombacho volcano.' , img: 'photo-1630773899830-15ae96bbd777' },
        { name: 'Ometepe', days: '1–2 days', places: 'Twin volcanoes in the lake, Ojo de Agua, petroglyphs.' , img: 'photo-1501327825011-e83b7080b0f4' },
        { name: 'León', days: '1 day', places: 'The cathedral roof, volcano boarding on Cerro Negro.' , img: 'photo-1539735016193-2bfc5a8f6699' },
        { name: 'San Juan del Sur', days: '1–2 days', places: 'Surf beaches, the Christ statue viewpoint, sunset bars.' , img: 'photo-1576515382035-a29a18c88b2d' }
    ],
    'cuba': [
        { name: 'Havana', days: '2–3 days', places: 'Habana Vieja, the Malecón, classic car tour, Buena Vista music.' , img: 'photo-1570299437488-d430e1e677c7' },
        { name: 'Viñales', days: '1–2 days', places: 'Tobacco farms, limestone mogotes, horseback through the valley.' , img: 'photo-1621458036159-7291e0932296' },
        { name: 'Trinidad', days: '1–2 days', places: 'Cobbled plazas, Valle de los Ingenios, Playa Ancón.' , img: 'photo-1570299437488-d430e1e677c7' },
        { name: 'Varadero', days: '2 days', places: 'White-sand resort strip on the peninsula.' , img: 'photo-1711922729222-54107d20c970' }
    ],
    'peru': [
        { name: 'Machu Picchu', days: '1–2 days', places: 'The citadel, Huayna Picchu, the train through the valley.' , img: 'photo-1587595431973-160d0d94add1' },
        { name: 'Cusco', days: '2 days', places: 'Plaza de Armas, Sacsayhuaman, San Pedro market, Qorikancha.' , img: 'photo-1526392060635-9d6019884377' },
        { name: 'Sacred Valley', days: '1–2 days', places: 'Pisac, Ollantaytambo, Maras salt pans and Moray.' , img: 'photo-1568729670692-0d2de9a3c027' },
        { name: 'Lake Titicaca', days: '1–2 days', places: 'Uros floating islands, Taquile, homestays on Amantani.' , img: 'photo-1620417396507-9a57523d16a6' },
        { name: 'Lima', days: '1 day', places: 'Miraflores, Barranco, the catacombs and the food scene.' , img: 'photo-1577587230708-187fdbef4d91' }
    ],
    'chile': [
        { name: 'Torres del Paine', days: '3 days', places: 'The W trek or day hikes, Grey Glacier, guanaco plains.' , img: 'photo-1715356758153-6d58ae44e8fe' },
        { name: 'Atacama Desert', days: '2 days', places: 'Moon Valley, El Tatio geysers, salt flats and stargazing.' , img: 'photo-1494783435443-c15feee0a80a' },
        { name: 'Santiago', days: '1–2 days', places: 'Cerro San Cristóbal, Bellavista, Maipo valley wineries.' , img: 'photo-1689850543263-01a52ccc6943' },
        { name: 'Valparaíso', days: '1 day', places: 'The painted hills, funiculars, street art and the port.' , img: 'photo-1490782300182-697b80ad4293' }
    ],
    'argentina': [
        { name: 'Buenos Aires', days: '2–3 days', places: 'Recoleta, La Boca, San Telmo market, a tango evening.' , img: 'photo-1612294037637-ec328d0e075e' },
        { name: 'Iguazú Falls', days: '1–2 days', places: 'Devil’s Throat, the upper and lower circuits, boat ride.' , img: 'photo-1556918936-3e73b945d24f' },
        { name: 'El Calafate', days: '1–2 days', places: 'Perito Moreno glacier, ice trekking, Lago Argentino.' , img: 'photo-1552751753-0fc84ae5b6c8' },
        { name: 'El Chaltén', days: '1–2 days', places: 'Fitz Roy and Laguna de los Tres, Cerro Torre viewpoints.' , img: 'photo-1580411196492-027c480950c1' },
        { name: 'Mendoza', days: '1–2 days', places: 'Malbec estates, Andean foothills, high-altitude vineyards.' , img: 'photo-1765850260370-3c37eb0c9a32' }
    ],
    'brazil': [
        { name: 'Rio de Janeiro', days: '2–3 days', places: 'Christ the Redeemer, Sugarloaf, Copacabana and Ipanema.' , img: 'photo-1483729558449-99ef09a8c325' },
        { name: 'Iguazú (Brazil side)', days: '1 day', places: 'The panoramic falls walkway and helicopter flights.' , img: 'photo-1614949260630-1d8a27791215' },
        { name: 'Amazon (Manaus)', days: '2–3 days', places: 'Jungle lodge, the meeting of the waters, canoe trips.' , img: 'photo-1700753618948-79f177a3b19e' },
        { name: 'Salvador', days: '1–2 days', places: 'Pelourinho, Afro-Brazilian culture, capoeira and drumming.' , img: 'photo-1591233055842-a984961b71af' }
    ],
    'ecuador': [
        { name: 'Quito', days: '1–2 days', places: 'The colonial old town, TelefriQo, the equator monument.' , img: 'photo-1610226977124-9fd2755d09f2' },
        { name: 'Baños', days: '1–2 days', places: 'Waterfall route, swing at the end of the world, hot springs.' , img: 'photo-1616547141416-55227377a471' },
        { name: 'Cotopaxi', days: '1 day', places: 'The volcano, Limpiopungo lagoon and the Avenue of Volcanoes.' , img: 'photo-1643302408853-a0171accc39b' },
        { name: 'Mindo', days: '1 day', places: 'Cloud forest, hummingbirds, chocolate and the canopy.' , img: 'photo-1460078370929-3b28ad7313f7' }
    ],
    'galapagos': [
        { name: 'Santa Cruz', days: '2 days', places: 'Charles Darwin Station, Tortuga Bay, giant tortoise reserve.' , img: 'photo-1713633848785-1452bfbfc531' },
        { name: 'Isabela', days: '2 days', places: 'Sierra Negra volcano, Las Tintoreras, penguins and flamingos.' , img: 'photo-1706957614198-8d2e5f0ed6ea' },
        { name: 'San Cristóbal', days: '1–2 days', places: 'Kicker Rock snorkelling, sea lion colonies, Interpretation Centre.' , img: 'photo-1640734838079-6a09bc28aa02' },
        { name: 'Española', days: '1 day', places: 'Waved albatross colony, blue-footed boobies, Gardner Bay.' , img: 'photo-1676910914003-55a29db437cf' }
    ],
    'colombia': [
        { name: 'Cartagena', days: '2 days', places: 'The walled city, Getsemaní, Rosario Islands by boat.' , img: 'photo-1583531352515-8884af319dc1' },
        { name: 'Medellín', days: '1–2 days', places: 'Comuna 13, the metrocable, Guatapé and El Peñol.' , img: 'photo-1512250431446-d0b4b57b27ec' },
        { name: 'Coffee Region', days: '1–2 days', places: 'Salento, Cocora valley wax palms, finca coffee tours.' , img: 'photo-1672851613221-c56f31efce8c' },
        { name: 'Bogotá', days: '1 day', places: 'La Candelaria, the Gold Museum, Monserrate.' , img: 'photo-1533699224246-6dc3b3ed3304' }
    ],
    'uruguay': [
        { name: 'Montevideo', days: '1–2 days', places: 'Ciudad Vieja, the rambla, Mercado del Puerto.' , img: 'photo-1598289993193-5efe1657f971' },
        { name: 'Punta del Este', days: '2 days', places: 'La Mano sculpture, Casapueblo sunsets, the beaches.' , img: 'photo-1691441799387-722f8cfaa1d9' },
        { name: 'Colonia del Sacramento', days: '1 day', places: 'Portuguese old town, the lighthouse, cobbled streets.' , img: 'photo-1524168576969-c32baddd7006' },
        { name: 'José Ignacio', days: '1–2 days', places: 'Quiet beaches, boutique lodges and seaside restaurants.' , img: 'photo-1608052489286-160488ae5bee' }
    ],
    'antigua': [
        { name: 'English Harbour', days: '1 day', places: 'Nelson’s Dockyard, Shirley Heights sunset party.' , img: 'photo-1771373119629-8f73d660cb7d' },
        { name: 'Dickenson Bay', days: '1–2 days', places: 'Calm west-coast swimming and water sports.' , img: 'photo-1618064541372-289bdb6f5b7b' },
        { name: 'Stingray City', days: '1 day', places: 'Snorkelling with rays on the shallow sandbar.' , img: 'photo-1715349731027-308324de7155' },
        { name: 'Barbuda', days: '1 day', places: 'Pink sand beaches and the frigate bird sanctuary.' , img: 'photo-1654043621928-c29594c13336' }
    ],
    'st-lucia': [
        { name: 'Soufrière & the Pitons', days: '2 days', places: 'Gros Piton hike, the drive-in volcano, sulphur springs.' , img: 'photo-1710001222246-1c70c7feafe1' },
        { name: 'Rodney Bay', days: '1–2 days', places: 'Reduit Beach, Pigeon Island, the marina restaurants.' , img: 'photo-1691515894155-6c4df29d5177' },
        { name: 'Marigot Bay', days: '1 day', places: 'The sheltered yacht harbour and hillside viewpoints.' , img: 'photo-1676725011839-90795b42ffac' },
        { name: 'Rainforest & Tet Paul', days: '1 day', places: 'Canopy zip lines, nature trail with Piton views.' , img: 'photo-1605288132419-1aa5e25475b2' }
    ],

    'mauritius': [
        { name: 'Port Louis', days: '1 day', places: 'Caudan waterfront, the central market, Fort Adelaide.' , img: 'photo-1682734233143-19762757dcfd' },
        { name: 'Le Morne', days: '2 days', places: 'The UNESCO peninsula, kitesurfing, underwater waterfall flights.' , img: 'photo-1513415277900-a62401e19be4' },
        { name: 'Chamarel', days: '1 day', places: 'Seven Coloured Earths, the waterfall, rum distillery.' , img: 'photo-1513415277900-a62401e19be4' },
        { name: 'Ile aux Cerfs', days: '1 day', places: 'Lagoon day trip, water sports and beach barbecues.' , img: 'photo-1513415277900-a62401e19be4' }
    ],
    'seychelles': [
        { name: 'Mah\u00e9', days: '2 days', places: 'Beau Vallon, Victoria market, Morne Seychellois trails.' , img: 'photo-1553829176-61484f865ac3' },
        { name: 'Praslin', days: '2 days', places: 'Anse Lazio, Vall\u00e9e de Mai and the coco de mer palms.' , img: 'photo-1553829176-61484f865ac3' },
        { name: 'La Digue', days: '1\u20132 days', places: 'Anse Source d\u2019Argent, bicycles, granite boulder beaches.' , img: 'photo-1553829176-61484f865ac3' },
        { name: 'Island hopping', days: '1 day', places: 'Curieuse giant tortoises, St Pierre snorkelling.' , img: 'photo-1617362985992-d0b6814cacef' }
    ],
    'turkey': [
        { name: 'Istanbul', days: '3 days', places: 'Hagia Sophia, Blue Mosque, Topkapi, the Grand Bazaar, Bosphorus cruise.' , img: 'photo-1589561454226-796a8aa89b05' },
        { name: 'Cappadocia', days: '2 days', places: 'Hot-air balloons at dawn, G\u00f6reme valleys, underground cities, cave hotels.' , img: 'photo-1661159245219-f1768c7e98c3' },
        { name: 'Pamukkale', days: '1 day', places: 'The white travertine terraces and the ruins of Hierapolis.' , img: 'photo-1633282043211-e262bed3e321' },
        { name: 'Ephesus', days: '1 day', places: 'The Library of Celsus, the great theatre, the Temple of Artemis site.' , img: 'photo-1535916707207-35f97e715e1c' },
        { name: 'Antalya', days: '2 days', places: 'Kaleici old town, the turquoise coast, D\u00fcden falls, gulet cruising.' , img: 'photo-1648325129746-abcc1b872380' }
    ],

    /* ---- Oceania & Antarctic ------------------------------------------- */
    'australia': [
        { name: 'Sydney', days: '2–3 days', places: 'The Opera House, Harbour Bridge climb, Bondi to Coogee walk.' , img: 'photo-1624138784614-87fd1b6528f8' },
        { name: 'Great Barrier Reef', days: '2 days', places: 'Cairns or Port Douglas, snorkelling and diving the outer reef.' , img: 'photo-1789758612502-1ab95313594e' },
        { name: 'Uluru', days: '1–2 days', places: 'Sunrise and sunset at the rock, Kata Tjuta, Field of Light.' , img: 'photo-1529108190281-9a4f620bc2d8' },
        { name: 'Melbourne', days: '1–2 days', places: 'Laneway cafés, the Great Ocean Road, Phillip Island penguins.' , img: 'photo-1545044846-351ba102b6d5' },
        { name: 'Whitsundays', days: '2 days', places: 'Whitehaven Beach, sailing the islands, Heart Reef flights.' , img: 'photo-1590573124389-83f2133e0307' }
    ],
    'new-zealand': [
        { name: 'Queenstown', days: '2–3 days', places: 'Adventure sports, Lake Wakatipu, the Remarkables, wineries.' , img: 'photo-1547314283-befb6cc5cf29' },
        { name: 'Milford Sound', days: '1 day', places: 'The fiord cruise, Mitre Peak, waterfalls and seals.' , img: 'photo-1591640040362-f55d95a6b2bc' },
        { name: 'Rotorua', days: '1–2 days', places: 'Geothermal parks, Maori cultural evening, Redwoods walk.' , img: 'photo-1508971607899-a238a095d417' },
        { name: 'Franz Josef', days: '1 day', places: 'Glacier heli-hike and the rainforest valley walks.' , img: 'photo-1690053712268-2e6d0bc394ad' },
        { name: 'Auckland & Bay of Islands', days: '2 days', places: 'Sky Tower, Waiheke wine, dolphin cruises up north.' , img: 'photo-1595125990323-885cec5217ff' }
    ],
    'french-polynesia': [
        { name: 'Bora Bora', days: '3 days', places: 'Overwater bungalows, lagoon tours, Mount Otemanu.' , img: 'photo-1706461168280-da6986cd91ec' },
        { name: 'Moorea', days: '2 days', places: 'Opunohu Bay, Belvedere lookout, snorkelling with rays.' , img: 'photo-1665904457714-df18e8c142a1' },
        { name: 'Tahiti', days: '1–2 days', places: 'Papeete market, black sand beaches, the island circle road.' , img: 'photo-1706868957973-8b656c240dbc' },
        { name: 'Rangiroa', days: '2 days', places: 'Drift diving the Tiputa Pass, the Blue Lagoon, pearl farms.' , img: 'photo-1728042743603-e84b7f033050' }
    ],
    'antarctica': [
        { name: 'Drake Passage', days: '2 days', places: 'The crossing from Ushuaia, albatross and petrel watching.' , img: 'photo-1583539160611-f53daf5e5d31' },
        { name: 'Antarctic Peninsula', days: '4–5 days', places: 'Zodiac landings, gentoo colonies, Lemaire Channel.' , img: 'photo-1632347562052-83f2d630ac03' },
        { name: 'South Shetlands', days: '1–2 days', places: 'Deception Island caldera, chinstrap penguins, whalers’ bay.' , img: 'photo-1549381730-a64424a364f3' },
        { name: 'Ushuaia', days: '1 day', places: 'Tierra del Fuego park, the Beagle Channel before sailing.' , img: 'photo-1559061156-4a46ec29107d' }
    ]

};
