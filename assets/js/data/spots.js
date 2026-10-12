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
        { name: 'Tokyo', days: '3 days', places: 'Shibuya and Shinjuku, Senso-ji at Asakusa, Meiji Shrine, teamLab.' },
        { name: 'Kyoto', days: '2–3 days', places: 'Fushimi Inari, Kinkaku-ji, Arashiyama bamboo grove, Gion.' },
        { name: 'Osaka', days: '1–2 days', places: 'Dotonbori, Osaka Castle, Kuromon market, day trip to Nara.' },
        { name: 'Hakone', days: '1 day', places: 'Lake Ashi, open-air museum, onsen ryokan and Mount Fuji views.' },
        { name: 'Hiroshima', days: '1 day', places: 'Peace Memorial Park, Miyajima island and the floating torii.' }
    ],
    'okinawa': [
        { name: 'Naha', days: '1–2 days', places: 'Shuri Castle, Kokusai-dori, Tsuboya pottery district.' },
        { name: 'Churaumi', days: '1 day', places: 'Churaumi Aquarium, Emerald Beach, Bise fukugi tree lane.' },
        { name: 'Kerama Islands', days: '1–2 days', places: 'Snorkelling and diving, Zamami beaches, whale watching in winter.' }
    ],
    'cambodia': [
        { name: 'Siem Reap', days: '2–3 days', places: 'Angkor Wat at sunrise, Bayon, Ta Prohm, Tonle Sap floating villages.' },
        { name: 'Phnom Penh', days: '1–2 days', places: 'Royal Palace, Silver Pagoda, National Museum, riverfront.' },
        { name: 'Koh Rong', days: '2 days', places: 'White-sand bays, snorkelling and bioluminescent plankton.' },
        { name: 'Battambang', days: '1 day', places: 'Bamboo train, colonial shophouses, Phnom Sampeau at dusk.' }
    ],
    'vietnam': [
        { name: 'Hanoi', days: '2 days', places: 'Old Quarter, Hoan Kiem Lake, Temple of Literature, street food tour.' },
        { name: 'Ha Long Bay', days: '1–2 days', places: 'Overnight cruise among the karsts, kayaking, Sung Sot cave.' },
        { name: 'Hoi An', days: '2 days', places: 'Lantern-lit old town, Japanese bridge, tailors, An Bang beach.' },
        { name: 'Ho Chi Minh City', days: '1–2 days', places: 'Reunification Palace, War Remnants Museum, Cu Chi tunnels.' },
        { name: 'Mekong Delta', days: '1 day', places: 'Floating markets, sampan canals and fruit orchards.' }
    ],
    'sri-lanka': [
        { name: 'Kandy', days: '1–2 days', places: 'Temple of the Tooth, botanical gardens, cultural dance show.' },
        { name: 'Ella', days: '1–2 days', places: 'Nine Arch Bridge, Little Adam’s Peak, the train from Nuwara Eliya.' },
        { name: 'Sigiriya', days: '1 day', places: 'Lion Rock fortress, Dambulla cave temples, village safari.' },
        { name: 'Yala', days: '1–2 days', places: 'Leopard safaris, elephants and the coastal lagoons.' },
        { name: 'Galle', days: '1–2 days', places: 'Dutch fort ramparts, Unawatuna beach, whale watching at Mirissa.' }
    ],
    'bhutan': [
        { name: 'Paro', days: '2 days', places: 'Tiger’s Nest monastery, Rinpung Dzong, the national museum.' },
        { name: 'Thimphu', days: '1–2 days', places: 'Buddha Dordenma, Tashichho Dzong, the weekend market.' },
        { name: 'Punakha', days: '1–2 days', places: 'Punakha Dzong at the river confluence, the suspension bridge.' },
        { name: 'Phobjikha', days: '1 day', places: 'Glacial valley, Gangtey monastery and black-necked cranes in winter.' }
    ],
    'indonesia': [
        { name: 'Ubud', days: '2–3 days', places: 'Rice terraces, Monkey Forest, Tirta Empul, art and craft villages.' },
        { name: 'Seminyak & Canggu', days: '2 days', places: 'Beach clubs, surf breaks, sunset at Tanah Lot.' },
        { name: 'Nusa Penida', days: '1–2 days', places: 'Kelingking Beach, Angel’s Billabong, Crystal Bay snorkelling.' },
        { name: 'Komodo', days: '2–3 days', places: 'Komodo dragons, Padar viewpoint, Pink Beach and Manta Point.' },
        { name: 'Yogyakarta', days: '1–2 days', places: 'Borobudur at sunrise, Prambanan, the Kraton and batik workshops.' }
    ],
    'malaysia': [
        { name: 'Kuala Lumpur', days: '1–2 days', places: 'Petronas Towers, Batu Caves, Merdeka Square, Jalan Alor.' },
        { name: 'Penang', days: '2 days', places: 'George Town street art, Peranakan mansions, Penang Hill, hawker food.' },
        { name: 'Langkawi', days: '2 days', places: 'Sky Bridge cable car, island hopping, Datai Bay beaches.' },
        { name: 'Melaka', days: '1 day', places: 'Jonker Street, Dutch Square, the river cruise.' }
    ],
    'borneo': [
        { name: 'Sepilok', days: '1 day', places: 'Orangutan rehabilitation centre and the sun bear sanctuary.' },
        { name: 'Kinabatangan', days: '2 days', places: 'River safaris for proboscis monkeys, pygmy elephants and hornbills.' },
        { name: 'Mount Kinabalu', days: '2 days', places: 'Summit climb or the national park trails and Poring hot springs.' },
        { name: 'Sipadan', days: '2–3 days', places: 'World-class wall diving, turtles and barracuda tornadoes.' }
    ],
    'laos': [
        { name: 'Luang Prabang', days: '2–3 days', places: 'Morning alms, Mount Phousi, Kuang Si falls, the night market.' },
        { name: 'Vang Vieng', days: '1–2 days', places: 'Limestone karsts, blue lagoons, caves and hot-air balloons.' },
        { name: 'Vientiane', days: '1 day', places: 'Pha That Luang, Patuxai, the riverside night market.' },
        { name: '4000 Islands', days: '2 days', places: 'Mekong hammocks, Khone Phapheng falls and Irrawaddy dolphins.' }
    ],
    'mongolia': [
        { name: 'Ulaanbaatar', days: '1 day', places: 'Gandan monastery, the National Museum, Zaisan hill.' },
        { name: 'Terelj', days: '1–2 days', places: 'Ger camp stay, Turtle Rock, Chinggis Khaan statue complex.' },
        { name: 'Gobi Desert', days: '3 days', places: 'Khongoryn Els dunes, Yolyn Am gorge, the Flaming Cliffs.' },
        { name: 'Orkhon Valley', days: '2 days', places: 'Nomad families, Orkhon waterfall, Kharkhorin and Erdene Zuu.' }
    ],
    'china': [
        { name: 'Beijing', days: '3 days', places: 'The Great Wall at Mutianyu, Forbidden City, Temple of Heaven.' },
        { name: 'Xi’an', days: '1–2 days', places: 'Terracotta Army, the city walls by bicycle, the Muslim Quarter.' },
        { name: 'Shanghai', days: '2 days', places: 'The Bund, Yu Garden, the French Concession, Pudong skyline.' },
        { name: 'Guilin & Yangshuo', days: '2 days', places: 'Li River cruise, karst peaks, rice terraces at Longji.' },
        { name: 'Chengdu', days: '1–2 days', places: 'Giant panda base, Leshan Buddha, teahouses and hotpot.' }
    ],
    'jordan': [
        { name: 'Petra', days: '2 days', places: 'The Siq and Treasury, the Monastery climb, Petra by Night.' },
        { name: 'Wadi Rum', days: '1–2 days', places: 'Jeep safari, Bedouin camp, sandstone arches and stargazing.' },
        { name: 'Dead Sea', days: '1 day', places: 'Floating in the salt water, mud treatments, spa resorts.' },
        { name: 'Amman & Jerash', days: '1–2 days', places: 'The Citadel, Roman theatre, and the colonnades of Jerash.' }
    ],

    'ladakh': [
        { name: 'Leh', days: '2 days', places: 'Leh Palace, Shanti Stupa, the old bazaar, acclimatisation days.' },
        { name: 'Pangong Tso', days: '1\u20132 days', places: 'The high-altitude lake, Chang La pass, lakeside camps.' },
        { name: 'Nubra Valley', days: '1\u20132 days', places: 'Khardung La, Hunder sand dunes, double-humped camels, Diskit monastery.' },
        { name: 'Monasteries', days: '1 day', places: 'Thiksey, Hemis and Alchi, with morning prayers at Thiksey.' },
        { name: 'Tso Moriri', days: '1\u20132 days', places: 'Remote high lake, Korzok village, migratory birds in summer.' }
    ],

    /* ---- Africa & Middle East ------------------------------------------ */
    'tanzania': [
        { name: 'Serengeti', days: '3 days', places: 'The migration herds, big cats on the plains, balloon safari at dawn.' },
        { name: 'Ngorongoro Crater', days: '1–2 days', places: 'Crater floor game drive, black rhino, flamingos on the soda lake.' },
        { name: 'Zanzibar', days: '2–3 days', places: 'Stone Town, spice farms, Nungwi and Kendwa beaches.' },
        { name: 'Tarangire', days: '1 day', places: 'Baobab country, large elephant herds and the river circuit.' },
        { name: 'Kilimanjaro', days: '6–8 days', places: 'Machame or Lemosho route to Uhuru Peak with full support.' }
    ],
    'kenya': [
        { name: 'Masai Mara', days: '3 days', places: 'Mara River crossings, big cats, Maasai village visit.' },
        { name: 'Amboseli', days: '1–2 days', places: 'Elephant herds beneath Kilimanjaro, Observation Hill.' },
        { name: 'Lake Nakuru', days: '1 day', places: 'Flamingos, rhino sanctuary and Rothschild giraffe.' },
        { name: 'Diani Beach', days: '2 days', places: 'White sand on the Indian Ocean, reef snorkelling, dhow trips.' }
    ],
    'egypt': [
        { name: 'Cairo & Giza', days: '2 days', places: 'The Pyramids and Sphinx, the Grand Egyptian Museum, Khan el-Khalili.' },
        { name: 'Luxor', days: '2 days', places: 'Karnak, Valley of the Kings, Hatshepsut, balloon over the West Bank.' },
        { name: 'Aswan & Abu Simbel', days: '2 days', places: 'Philae Temple, a felucca on the Nile, the temples of Ramses II.' },
        { name: 'Nile Cruise', days: '3–4 days', places: 'Luxor to Aswan by river, stopping at Edfu and Kom Ombo.' },
        { name: 'Hurghada', days: '2 days', places: 'Red Sea diving, reef snorkelling and desert quad safaris.' }
    ],
    'morocco': [
        { name: 'Marrakech', days: '2 days', places: 'Jemaa el-Fnaa, Bahia Palace, the souks, Majorelle Garden.' },
        { name: 'Fes', days: '1–2 days', places: 'The medina and tanneries, Al-Qarawiyyin, Bou Inania madrasa.' },
        { name: 'Sahara (Merzouga)', days: '2 days', places: 'Camel trek into Erg Chebbi, desert camp, sunrise over the dunes.' },
        { name: 'Chefchaouen', days: '1 day', places: 'The blue-washed old town and the Rif mountain viewpoints.' },
        { name: 'Atlas Mountains', days: '1–2 days', places: 'Berber villages, Ourika valley, Toubkal foothill treks.' }
    ],
    'south-africa': [
        { name: 'Cape Town', days: '3 days', places: 'Table Mountain, Cape Point, Boulders penguins, V&A Waterfront.' },
        { name: 'Kruger', days: '2–3 days', places: 'Big Five game drives, private reserve lodges, bush walks.' },
        { name: 'Winelands', days: '1–2 days', places: 'Stellenbosch and Franschhoek estates, the wine tram.' },
        { name: 'Garden Route', days: '2–3 days', places: 'Knysna lagoon, Tsitsikamma, Plettenberg Bay.' },
        { name: 'Hermanus', days: '1 day', places: 'Land-based whale watching between June and November.' }
    ],
    'botswana': [
        { name: 'Okavango Delta', days: '3 days', places: 'Mokoro canoe safaris, water-channel game viewing, island camps.' },
        { name: 'Chobe', days: '2 days', places: 'Elephant herds on the river, sunset boat cruise.' },
        { name: 'Moremi', days: '2 days', places: 'Predator-rich floodplains, Khwai river crossings.' },
        { name: 'Makgadikgadi Pans', days: '1–2 days', places: 'Salt pans, meerkats and quad biking across the crust.' }
    ],
    'namibia': [
        { name: 'Sossusvlei', days: '1–2 days', places: 'Red dunes at sunrise, Deadvlei, Sesriem canyon.' },
        { name: 'Etosha', days: '2 days', places: 'Waterhole game viewing, the salt pan, floodlit night hides.' },
        { name: 'Swakopmund', days: '1–2 days', places: 'Dune quad biking, Sandwich Harbour, seals at Walvis Bay.' },
        { name: 'Damaraland', days: '1–2 days', places: 'Desert elephants, Twyfelfontein rock art, Spitzkoppe.' }
    ],
    'zimbabwe': [
        { name: 'Victoria Falls', days: '2 days', places: 'The falls circuit, Zambezi sunset cruise, bungee and helicopter.' },
        { name: 'Hwange', days: '2 days', places: 'Huge elephant populations, waterhole hides, night drives.' },
        { name: 'Mana Pools', days: '2–3 days', places: 'Walking safaris, canoeing the Zambezi, albida forests.' },
        { name: 'Great Zimbabwe', days: '1 day', places: 'The stone ruins of the medieval capital and its hill complex.' }
    ],
    'zambia': [
        { name: 'South Luangwa', days: '3 days', places: 'The home of the walking safari, leopards, hippo-filled river.' },
        { name: 'Victoria Falls (Livingstone)', days: '2 days', places: 'Knife-edge bridge, Devil\u2019s Pool in season, microlight flights.' },
        { name: 'Lower Zambezi', days: '2 days', places: 'Canoe safaris, tiger fishing, elephants crossing the channels.' },
        { name: 'Kafue', days: '2 days', places: 'Busanga Plains, lion prides and vast open floodplains.' }
    ],
    'rwanda': [
        { name: 'Volcanoes National Park', days: '2 days', places: 'Mountain gorilla trek, golden monkeys, Dian Fossey\u2019s grave.' },
        { name: 'Kigali', days: '1 day', places: 'Genocide Memorial, craft markets and the hillside city views.' },
        { name: 'Lake Kivu', days: '1–2 days', places: 'Lakeside beaches at Gisenyi, coffee tours and kayaking.' },
        { name: 'Nyungwe Forest', days: '1–2 days', places: 'Canopy walkway, chimpanzee tracking and tea estates.' }
    ],

    /* ---- Europe -------------------------------------------------------- */
    'iceland': [
        { name: 'Reykjavik', days: '1–2 days', places: 'Hallgrimskirkja, Harpa, the old harbour and Sky Lagoon.' },
        { name: 'Golden Circle', days: '1 day', places: 'Thingvellir rift, Geysir, Gullfoss waterfall.' },
        { name: 'South Coast', days: '1–2 days', places: 'Seljalandsfoss, Skogafoss, the black sand at Reynisfjara.' },
        { name: 'Jokulsarlon', days: '1 day', places: 'Glacier lagoon, Diamond Beach and ice cave tours in winter.' },
        { name: 'Blue Lagoon', days: '1 day', places: 'Geothermal bathing in the lava field near Keflavik.' }
    ],
    'norway': [
        { name: 'Bergen', days: '1–2 days', places: 'Bryggen wharf, the funicular to Floyen, the fish market.' },
        { name: 'Geirangerfjord', days: '1–2 days', places: 'Fjord cruise, the Seven Sisters falls, Dalsnibba viewpoint.' },
        { name: 'Troms\u00f8', days: '2 days', places: 'Northern Lights chases, dog sledding, the Arctic Cathedral.' },
        { name: 'Lofoten', days: '2–3 days', places: 'Fishing villages, Reine, white beaches under sharp peaks.' },
        { name: 'Oslo', days: '1–2 days', places: 'The Fram and Munch museums, Vigeland Park, the Opera House.' }
    ],
    'finland': [
        { name: 'Rovaniemi', days: '2 days', places: 'Santa Claus Village, reindeer and husky sledding, the Arctic Circle.' },
        { name: 'Saariselk\u00e4', days: '1–2 days', places: 'Glass igloos, aurora watching and snowmobile safaris.' },
        { name: 'Helsinki', days: '1–2 days', places: 'Suomenlinna fortress, the Rock Church, design district and saunas.' },
        { name: 'Lakeland', days: '1–2 days', places: 'Lakeside cabins, Savonlinna castle and summer midnight sun.' }
    ],
    'switzerland': [
        { name: 'Zermatt', days: '2 days', places: 'The Matterhorn, Gornergrat railway, car-free alpine village.' },
        { name: 'Interlaken & Jungfrau', days: '2 days', places: 'Jungfraujoch, Lauterbrunnen valley, Grindelwald First.' },
        { name: 'Lucerne', days: '1 day', places: 'Chapel Bridge, Mount Pilatus, a cruise on the lake.' },
        { name: 'Glacier Express', days: '1 day', places: 'The panoramic rail journey between Zermatt and St Moritz.' },
        { name: 'Geneva & Montreux', days: '1–2 days', places: 'Lake Geneva, Chillon Castle, the Lavaux vineyard terraces.' }
    ],
    'austria': [
        { name: 'Vienna', days: '2 days', places: 'Sch\u00f6nbrunn, the Hofburg, St Stephen\u2019s, coffee houses and the opera.' },
        { name: 'Salzburg', days: '1–2 days', places: 'The old town, Hohensalzburg fortress, Mozart\u2019s birthplace, Mirabell.' },
        { name: 'Hallstatt', days: '1 day', places: 'The lakeside village, salt mine and the skywalk viewpoint.' },
        { name: 'Tyrol', days: '2 days', places: 'Innsbruck, alpine villages and the ski slopes above the valley.' }
    ],
    'italy': [
        { name: 'Rome', days: '3 days', places: 'Colosseum, Vatican Museums, Pantheon, Trastevere.' },
        { name: 'Florence', days: '2 days', places: 'The Duomo, Uffizi, Ponte Vecchio, day trips into Chianti.' },
        { name: 'Venice', days: '1–2 days', places: 'St Mark\u2019s, the Grand Canal, Murano and Burano.' },
        { name: 'Amalfi Coast', days: '2–3 days', places: 'Positano, Ravello, Capri by boat, the Path of the Gods.' },
        { name: 'Tuscany', days: '2 days', places: 'Siena, San Gimignano, Val d\u2019Orcia, wine estates.' }
    ],
    'spain': [
        { name: 'Barcelona', days: '2–3 days', places: 'Sagrada Familia, Park G\u00fcell, the Gothic Quarter, Barceloneta.' },
        { name: 'Madrid', days: '2 days', places: 'The Prado, Retiro Park, the Royal Palace, tapas in La Latina.' },
        { name: 'Granada', days: '1–2 days', places: 'The Alhambra and Generalife, the Albaic\u00edn, flamenco in Sacromonte.' },
        { name: 'Seville', days: '1–2 days', places: 'The Alc\u00e1zar, the cathedral and Giralda, Plaza de Espa\u00f1a.' },
        { name: 'San Sebasti\u00e1n', days: '1–2 days', places: 'La Concha beach, pintxos bars, Monte Igueldo.' }
    ],
    'portugal': [
        { name: 'Lisbon', days: '2–3 days', places: 'Alfama and the trams, Bel\u00e9m tower, Jer\u00f3nimos, fado evenings.' },
        { name: 'Porto', days: '2 days', places: 'Ribeira, the port lodges of Gaia, Livraria Lello, S\u00e3o Bento.' },
        { name: 'Douro Valley', days: '1–2 days', places: 'Terraced vineyards, quinta tastings, the river by boat or train.' },
        { name: 'Sintra', days: '1 day', places: 'Pena Palace, Quinta da Regaleira, the Moorish castle.' },
        { name: 'Algarve', days: '2 days', places: 'Lagos cliffs, Benagil cave, Praia da Marinha.' }
    ],
    'france': [
        { name: 'Paris', days: '3 days', places: 'The Louvre, Eiffel Tower, Montmartre, a Seine cruise.' },
        { name: 'Loire Valley', days: '1–2 days', places: 'Chambord, Chenonceau and Amboise, with vineyard stops.' },
        { name: 'Provence', days: '2 days', places: 'Lavender fields in season, Avignon, Gordes, the Luberon villages.' },
        { name: 'French Riviera', days: '2 days', places: 'Nice, \u00c8ze, Antibes and Monaco along the Corniche.' },
        { name: 'Mont Saint-Michel', days: '1 day', places: 'The abbey on the tidal island and its causeway approach.' }
    ],
    'germany': [
        { name: 'Berlin', days: '2 days', places: 'Brandenburg Gate, Museum Island, the Wall memorial, Reichstag.' },
        { name: 'Bavaria & Neuschwanstein', days: '1–2 days', places: 'The fairytale castle, Hohenschwangau and alpine lakes.' },
        { name: 'Munich', days: '1–2 days', places: 'Marienplatz, the Residenz, beer halls and the English Garden.' },
        { name: 'Romantic Road', days: '2 days', places: 'Rothenburg ob der Tauber, W\u00fcrzburg and walled medieval towns.' },
        { name: 'Rhine Valley', days: '1 day', places: 'Castle-topped gorge, river cruise and Rudesheim wine taverns.' }
    ],
    'greece': [
        { name: 'Athens', days: '2 days', places: 'The Acropolis and its museum, Plaka, the Ancient Agora.' },
        { name: 'Santorini', days: '2 days', places: 'Oia sunsets, the caldera cruise, Red Beach and wineries.' },
        { name: 'Mykonos', days: '1–2 days', places: 'Little Venice, the windmills, Paradise and Super Paradise beaches.' },
        { name: 'Crete', days: '2–3 days', places: 'Knossos, Chania old town, Samaria gorge, Elafonissi.' },
        { name: 'Meteora', days: '1 day', places: 'Monasteries perched on sandstone pillars, sunset viewpoints.' }
    ],
    'croatia': [
        { name: 'Dubrovnik', days: '2 days', places: 'The city walls, Stradun, the Lokrum ferry, Mount Srd cable car.' },
        { name: 'Split', days: '1–2 days', places: 'Diocletian\u2019s Palace, the Riva, Marjan hill.' },
        { name: 'Hvar', days: '1–2 days', places: 'The Spanish fortress, Pakleni islands, lavender fields.' },
        { name: 'Plitvice Lakes', days: '1 day', places: 'Sixteen terraced lakes, boardwalks and waterfalls.' },
        { name: 'Istria', days: '1–2 days', places: 'Rovinj, Pula\u2019s Roman arena, truffle country around Motovun.' }
    ],
    'slovenia': [
        { name: 'Lake Bled', days: '1–2 days', places: 'The island church by pletna, the castle, Vintgar gorge.' },
        { name: 'Ljubljana', days: '1 day', places: 'The castle, Triple Bridge, the riverside cafés and market.' },
        { name: 'Postojna & Predjama', days: '1 day', places: 'The cave railway and the castle built into a cliff face.' },
        { name: 'Triglav & Soca Valley', days: '1–2 days', places: 'Alpine trails, the turquoise Soca river, Vrsic pass.' }
    ],
    'ireland': [
        { name: 'Dublin', days: '1–2 days', places: 'Trinity College and the Book of Kells, Guinness Storehouse, Temple Bar.' },
        { name: 'Ring of Kerry', days: '1–2 days', places: 'Killarney National Park, Skellig views, mountain passes.' },
        { name: 'Cliffs of Moher', days: '1 day', places: 'The cliff walk, the Burren limestone pavement, Doolin music pubs.' },
        { name: 'Galway & Connemara', days: '1–2 days', places: 'Latin Quarter, Kylemore Abbey, the Twelve Bens.' },
        { name: 'Causeway Coast', days: '1 day', places: 'Giant\u2019s Causeway, Carrick-a-Rede rope bridge, Dark Hedges.' }
    ],
    'uk': [
        { name: 'London', days: '3 days', places: 'The Tower, Westminster, the British Museum, the West End.' },
        { name: 'Edinburgh', days: '2 days', places: 'The castle, the Royal Mile, Arthur\u2019s Seat, Holyrood.' },
        { name: 'The Cotswolds', days: '1–2 days', places: 'Bibury, Bourton-on-the-Water, Castle Combe, country pubs.' },
        { name: 'Lake District', days: '1–2 days', places: 'Windermere, Grasmere, fell walks and lake cruises.' },
        { name: 'Scottish Highlands', days: '2–3 days', places: 'Glencoe, Loch Ness, Isle of Skye, whisky distilleries.' }
    ],
    'england': [
        { name: 'London', days: '3 days', places: 'The Tower, Westminster, the British Museum, the West End.' },
        { name: 'Oxford & Cambridge', days: '1–2 days', places: 'College quads, punting on the Cherwell and the Cam.' },
        { name: 'Bath & Stonehenge', days: '1 day', places: 'The Roman Baths, Royal Crescent, the standing stones.' },
        { name: 'Lake District', days: '1–2 days', places: 'Windermere, Grasmere, fell walks and lake cruises.' },
        { name: 'York', days: '1 day', places: 'The Minster, the Shambles, the medieval city walls.' }
    ],
    'scotland': [
        { name: 'Edinburgh', days: '2 days', places: 'The castle, the Royal Mile, Arthur\u2019s Seat, Holyrood.' },
        { name: 'Isle of Skye', days: '2 days', places: 'The Quiraing, Old Man of Storr, Fairy Pools, Neist Point.' },
        { name: 'Glencoe', days: '1 day', places: 'The glen, Three Sisters, Buachaille Etive Mor.' },
        { name: 'Loch Ness & Inverness', days: '1 day', places: 'Urquhart Castle, the loch cruise, Culloden battlefield.' },
        { name: 'Speyside', days: '1 day', places: 'Whisky distillery tours along the malt trail.' }
    ],
    'cotswolds': [
        { name: 'Bourton-on-the-Water', days: '1 day', places: 'The low bridges over the Windrush, the model village.' },
        { name: 'Bibury', days: '1 day', places: 'Arlington Row weavers\u2019 cottages and the trout farm.' },
        { name: 'Castle Combe', days: '1 day', places: 'The market cross, the by-brook and the church.' },
        { name: 'Stow-on-the-Wold', days: '1 day', places: 'Antique shops, the market square, the yew-framed church door.' }
    ],

    /* ---- The Americas -------------------------------------------------- */
    'usa': [
        { name: 'New York', days: '3 days', places: 'Central Park, the Met, Times Square, the Brooklyn Bridge.' },
        { name: 'Grand Canyon', days: '1–2 days', places: 'South Rim viewpoints, the rim trail, helicopter flights.' },
        { name: 'San Francisco', days: '2 days', places: 'Golden Gate, Alcatraz, the cable cars, Muir Woods.' },
        { name: 'Yellowstone', days: '2–3 days', places: 'Old Faithful, Grand Prismatic, Lamar Valley wildlife.' },
        { name: 'Las Vegas', days: '1–2 days', places: 'The Strip, shows, and the drive out to Red Rock Canyon.' }
    ],
    'hawaii': [
        { name: 'Oahu', days: '2–3 days', places: 'Waikiki, Pearl Harbor, Diamond Head, the North Shore.' },
        { name: 'Maui', days: '2–3 days', places: 'Road to Hana, Haleakala sunrise, Molokini snorkelling.' },
        { name: 'Kauai', days: '2 days', places: 'Na Pali coast, Waimea Canyon, Hanalei Bay.' },
        { name: 'Big Island', days: '2 days', places: 'Volcanoes National Park, Mauna Kea stargazing, black sand beaches.' }
    ],
    'utah': [
        { name: 'Zion', days: '1–2 days', places: 'Angels Landing, the Narrows, Canyon Overlook.' },
        { name: 'Bryce Canyon', days: '1 day', places: 'Sunrise Point, the hoodoos, the Navajo Loop.' },
        { name: 'Arches', days: '1 day', places: 'Delicate Arch, Landscape Arch, Devils Garden.' },
        { name: 'Monument Valley', days: '1 day', places: 'The valley drive, Mitten buttes, Navajo-guided tours.' }
    ],
    'montana': [
        { name: 'Glacier National Park', days: '2–3 days', places: 'Going-to-the-Sun Road, Grinnell Glacier, Lake McDonald.' },
        { name: 'Bozeman', days: '1 day', places: 'Museum of the Rockies, hot springs, the Gallatin valley.' },
        { name: 'Yellowstone North', days: '2 days', places: 'Mammoth Hot Springs, Lamar Valley wolves and bison.' }
    ],
    'new-england': [
        { name: 'Vermont', days: '2 days', places: 'Stowe, covered bridges, maple farms, peak foliage drives.' },
        { name: 'Boston', days: '1–2 days', places: 'The Freedom Trail, Beacon Hill, Harvard across the river.' },
        { name: 'Acadia & Maine', days: '1–2 days', places: 'Cadillac Mountain, Bar Harbor, lobster shacks on the coast.' },
        { name: 'The Berkshires', days: '1 day', places: 'Country inns, Norman Rockwell Museum, autumn backroads.' }
    ],
    'florida': [
        { name: 'Orlando', days: '2–3 days', places: 'The theme parks and water parks around International Drive.' },
        { name: 'Miami & South Beach', days: '2 days', places: 'Art Deco district, Little Havana, Wynwood murals.' },
        { name: 'Florida Keys', days: '1–2 days', places: 'The Overseas Highway, Key West sunsets, snorkelling at Key Largo.' },
        { name: 'Everglades', days: '1 day', places: 'Airboat trips, alligators and the mangrove trails.' }
    ],
    'alaska': [
        { name: 'Denali', days: '2 days', places: 'The park road, grizzly and moose spotting, flightseeing the peak.' },
        { name: 'Anchorage', days: '1 day', places: 'Turnagain Arm, the coastal trail, wildlife conservation centre.' },
        { name: 'Inside Passage', days: '2–3 days', places: 'Glacier Bay, Juneau, Mendenhall Glacier, whale watching.' },
        { name: 'Fairbanks', days: '1–2 days', places: 'Aurora viewing, Chena hot springs, dog sledding in winter.' }
    ],
    'canada': [
        { name: 'Banff & Lake Louise', days: '2–3 days', places: 'Moraine Lake, the gondola, Johnston Canyon, hot springs.' },
        { name: 'Jasper', days: '1–2 days', places: 'The Icefields Parkway, Athabasca Glacier, Maligne Lake.' },
        { name: 'Vancouver', days: '1–2 days', places: 'Stanley Park, Granville Island, Capilano suspension bridge.' },
        { name: 'Quebec City', days: '1–2 days', places: 'Old Quebec, Château Frontenac, Montmorency Falls.' },
        { name: 'Niagara Falls', days: '1 day', places: 'The Horseshoe Falls, Journey Behind the Falls, the boat trip.' }
    ],
    'mexico': [
        { name: 'Riviera Maya', days: '2–3 days', places: 'Playa del Carmen, Tulum ruins above the sea, beach clubs.' },
        { name: 'Chichén Itzá', days: '1 day', places: 'El Castillo, the ball court, the cenote at Ik Kil.' },
        { name: 'Mexico City', days: '2 days', places: 'Zocalo, Frida Kahlo museum, Teotihuacan pyramids.' },
        { name: 'Oaxaca', days: '1–2 days', places: 'Monte Albán, the markets, mezcal palenques.' },
        { name: 'Los Cabos', days: '2 days', places: 'El Arco, whale watching, the Baja beaches and golf.' }
    ],
    'costa-rica': [
        { name: 'Arenal & La Fortuna', days: '2 days', places: 'The volcano, hanging bridges, hot springs, waterfall hikes.' },
        { name: 'Monteverde', days: '1–2 days', places: 'Cloud forest reserve, canopy zip lines, night walks.' },
        { name: 'Manuel Antonio', days: '1–2 days', places: 'Rainforest meeting the beach, sloths and capuchins.' },
        { name: 'Tortuguero', days: '1–2 days', places: 'Canal boat safaris and turtle nesting in season.' }
    ],
    'guatemala': [
        { name: 'Antigua', days: '1–2 days', places: 'Colonial streets, Santa Catalina arch, the volcano viewpoints.' },
        { name: 'Lake Atitlán', days: '2 days', places: 'Panajachel, the Mayan villages by boat, San Juan weavers.' },
        { name: 'Tikal', days: '1–2 days', places: 'Temple pyramids above the jungle canopy, howler monkeys.' },
        { name: 'Semuc Champey', days: '1 day', places: 'Turquoise limestone pools and the river caves.' }
    ],
    'belize': [
        { name: 'Ambergris Caye', days: '2 days', places: 'Hol Chan reserve, Shark Ray Alley, San Pedro.' },
        { name: 'Blue Hole', days: '1 day', places: 'The famous dive or a scenic flight over the atoll.' },
        { name: 'San Ignacio', days: '1–2 days', places: 'ATM cave, Xunantunich ruins, jungle lodges.' },
        { name: 'Placencia', days: '1–2 days', places: 'Beach village, snorkelling and whale shark season.' }
    ],
    'nicaragua': [
        { name: 'Granada', days: '1–2 days', places: 'Colonial streets, Las Isletas by boat, Mombacho volcano.' },
        { name: 'Ometepe', days: '1–2 days', places: 'Twin volcanoes in the lake, Ojo de Agua, petroglyphs.' },
        { name: 'León', days: '1 day', places: 'The cathedral roof, volcano boarding on Cerro Negro.' },
        { name: 'San Juan del Sur', days: '1–2 days', places: 'Surf beaches, the Christ statue viewpoint, sunset bars.' }
    ],
    'cuba': [
        { name: 'Havana', days: '2–3 days', places: 'Habana Vieja, the Malecón, classic car tour, Buena Vista music.' },
        { name: 'Viñales', days: '1–2 days', places: 'Tobacco farms, limestone mogotes, horseback through the valley.' },
        { name: 'Trinidad', days: '1–2 days', places: 'Cobbled plazas, Valle de los Ingenios, Playa Ancón.' },
        { name: 'Varadero', days: '2 days', places: 'White-sand resort strip on the peninsula.' }
    ],
    'peru': [
        { name: 'Machu Picchu', days: '1–2 days', places: 'The citadel, Huayna Picchu, the train through the valley.' },
        { name: 'Cusco', days: '2 days', places: 'Plaza de Armas, Sacsayhuaman, San Pedro market, Qorikancha.' },
        { name: 'Sacred Valley', days: '1–2 days', places: 'Pisac, Ollantaytambo, Maras salt pans and Moray.' },
        { name: 'Lake Titicaca', days: '1–2 days', places: 'Uros floating islands, Taquile, homestays on Amantani.' },
        { name: 'Lima', days: '1 day', places: 'Miraflores, Barranco, the catacombs and the food scene.' }
    ],
    'chile': [
        { name: 'Torres del Paine', days: '3 days', places: 'The W trek or day hikes, Grey Glacier, guanaco plains.' },
        { name: 'Atacama Desert', days: '2 days', places: 'Moon Valley, El Tatio geysers, salt flats and stargazing.' },
        { name: 'Santiago', days: '1–2 days', places: 'Cerro San Cristóbal, Bellavista, Maipo valley wineries.' },
        { name: 'Valparaíso', days: '1 day', places: 'The painted hills, funiculars, street art and the port.' }
    ],
    'argentina': [
        { name: 'Buenos Aires', days: '2–3 days', places: 'Recoleta, La Boca, San Telmo market, a tango evening.' },
        { name: 'Iguazú Falls', days: '1–2 days', places: 'Devil’s Throat, the upper and lower circuits, boat ride.' },
        { name: 'El Calafate', days: '1–2 days', places: 'Perito Moreno glacier, ice trekking, Lago Argentino.' },
        { name: 'El Chaltén', days: '1–2 days', places: 'Fitz Roy and Laguna de los Tres, Cerro Torre viewpoints.' },
        { name: 'Mendoza', days: '1–2 days', places: 'Malbec estates, Andean foothills, high-altitude vineyards.' }
    ],
    'brazil': [
        { name: 'Rio de Janeiro', days: '2–3 days', places: 'Christ the Redeemer, Sugarloaf, Copacabana and Ipanema.' },
        { name: 'Iguazú (Brazil side)', days: '1 day', places: 'The panoramic falls walkway and helicopter flights.' },
        { name: 'Amazon (Manaus)', days: '2–3 days', places: 'Jungle lodge, the meeting of the waters, canoe trips.' },
        { name: 'Salvador', days: '1–2 days', places: 'Pelourinho, Afro-Brazilian culture, capoeira and drumming.' }
    ],
    'ecuador': [
        { name: 'Quito', days: '1–2 days', places: 'The colonial old town, TelefriQo, the equator monument.' },
        { name: 'Baños', days: '1–2 days', places: 'Waterfall route, swing at the end of the world, hot springs.' },
        { name: 'Cotopaxi', days: '1 day', places: 'The volcano, Limpiopungo lagoon and the Avenue of Volcanoes.' },
        { name: 'Mindo', days: '1 day', places: 'Cloud forest, hummingbirds, chocolate and the canopy.' }
    ],
    'galapagos': [
        { name: 'Santa Cruz', days: '2 days', places: 'Charles Darwin Station, Tortuga Bay, giant tortoise reserve.' },
        { name: 'Isabela', days: '2 days', places: 'Sierra Negra volcano, Las Tintoreras, penguins and flamingos.' },
        { name: 'San Cristóbal', days: '1–2 days', places: 'Kicker Rock snorkelling, sea lion colonies, Interpretation Centre.' },
        { name: 'Española', days: '1 day', places: 'Waved albatross colony, blue-footed boobies, Gardner Bay.' }
    ],
    'colombia': [
        { name: 'Cartagena', days: '2 days', places: 'The walled city, Getsemaní, Rosario Islands by boat.' },
        { name: 'Medellín', days: '1–2 days', places: 'Comuna 13, the metrocable, Guatapé and El Peñol.' },
        { name: 'Coffee Region', days: '1–2 days', places: 'Salento, Cocora valley wax palms, finca coffee tours.' },
        { name: 'Bogotá', days: '1 day', places: 'La Candelaria, the Gold Museum, Monserrate.' }
    ],
    'uruguay': [
        { name: 'Montevideo', days: '1–2 days', places: 'Ciudad Vieja, the rambla, Mercado del Puerto.' },
        { name: 'Punta del Este', days: '2 days', places: 'La Mano sculpture, Casapueblo sunsets, the beaches.' },
        { name: 'Colonia del Sacramento', days: '1 day', places: 'Portuguese old town, the lighthouse, cobbled streets.' },
        { name: 'José Ignacio', days: '1–2 days', places: 'Quiet beaches, boutique lodges and seaside restaurants.' }
    ],
    'antigua': [
        { name: 'English Harbour', days: '1 day', places: 'Nelson’s Dockyard, Shirley Heights sunset party.' },
        { name: 'Dickenson Bay', days: '1–2 days', places: 'Calm west-coast swimming and water sports.' },
        { name: 'Stingray City', days: '1 day', places: 'Snorkelling with rays on the shallow sandbar.' },
        { name: 'Barbuda', days: '1 day', places: 'Pink sand beaches and the frigate bird sanctuary.' }
    ],
    'st-lucia': [
        { name: 'Soufrière & the Pitons', days: '2 days', places: 'Gros Piton hike, the drive-in volcano, sulphur springs.' },
        { name: 'Rodney Bay', days: '1–2 days', places: 'Reduit Beach, Pigeon Island, the marina restaurants.' },
        { name: 'Marigot Bay', days: '1 day', places: 'The sheltered yacht harbour and hillside viewpoints.' },
        { name: 'Rainforest & Tet Paul', days: '1 day', places: 'Canopy zip lines, nature trail with Piton views.' }
    ],

    /* ---- Oceania & Antarctic ------------------------------------------- */
    'australia': [
        { name: 'Sydney', days: '2–3 days', places: 'The Opera House, Harbour Bridge climb, Bondi to Coogee walk.' },
        { name: 'Great Barrier Reef', days: '2 days', places: 'Cairns or Port Douglas, snorkelling and diving the outer reef.' },
        { name: 'Uluru', days: '1–2 days', places: 'Sunrise and sunset at the rock, Kata Tjuta, Field of Light.' },
        { name: 'Melbourne', days: '1–2 days', places: 'Laneway cafés, the Great Ocean Road, Phillip Island penguins.' },
        { name: 'Whitsundays', days: '2 days', places: 'Whitehaven Beach, sailing the islands, Heart Reef flights.' }
    ],
    'new-zealand': [
        { name: 'Queenstown', days: '2–3 days', places: 'Adventure sports, Lake Wakatipu, the Remarkables, wineries.' },
        { name: 'Milford Sound', days: '1 day', places: 'The fiord cruise, Mitre Peak, waterfalls and seals.' },
        { name: 'Rotorua', days: '1–2 days', places: 'Geothermal parks, Maori cultural evening, Redwoods walk.' },
        { name: 'Franz Josef', days: '1 day', places: 'Glacier heli-hike and the rainforest valley walks.' },
        { name: 'Auckland & Bay of Islands', days: '2 days', places: 'Sky Tower, Waiheke wine, dolphin cruises up north.' }
    ],
    'french-polynesia': [
        { name: 'Bora Bora', days: '3 days', places: 'Overwater bungalows, lagoon tours, Mount Otemanu.' },
        { name: 'Moorea', days: '2 days', places: 'Opunohu Bay, Belvedere lookout, snorkelling with rays.' },
        { name: 'Tahiti', days: '1–2 days', places: 'Papeete market, black sand beaches, the island circle road.' },
        { name: 'Rangiroa', days: '2 days', places: 'Drift diving the Tiputa Pass, the Blue Lagoon, pearl farms.' }
    ],
    'antarctica': [
        { name: 'Drake Passage', days: '2 days', places: 'The crossing from Ushuaia, albatross and petrel watching.' },
        { name: 'Antarctic Peninsula', days: '4–5 days', places: 'Zodiac landings, gentoo colonies, Lemaire Channel.' },
        { name: 'South Shetlands', days: '1–2 days', places: 'Deception Island caldera, chinstrap penguins, whalers’ bay.' },
        { name: 'Ushuaia', days: '1 day', places: 'Tierra del Fuego park, the Beagle Channel before sailing.' }
    ]

};
