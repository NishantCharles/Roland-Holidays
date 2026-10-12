/* ==========================================================================
   ROLAND HOLIDAYS — DESTINATION DATA
   ==========================================================================
   One record per unique destination, keyed by slug. Months reference these
   slugs rather than repeating the data: 30 of these appear in more than one
   month, so this is the single source of truth for each place.

   Fields
     name    Display name.
     type    'country' | 'region' | 'continent'.
     parent  For a region, the slug of the country it belongs to.
     regions For a country, slugs of its regions that appear in the data.
     img     Unsplash photo id. null means no photo sourced yet — the card
             falls back to a branded gradient, so nothing 404s. Fill this in
             to upgrade a card; no other change is needed.
     page    A real page for this destination, or null. When null the month
             card offers a WhatsApp enquiry instead of a dead link.
   ========================================================================== */

var ROLAND_DESTINATIONS = {

    /* ---- Asia ---------------------------------------------------------- */
    'japan':        { name: 'Japan', type: 'country', img: 'photo-1522383225653-ed111181a951', page: 'japan.html', regions: ['okinawa'],
                      desc: 'Temples and bullet trains, cherry blossom in spring and fiery maples in autumn. Tokyo, Kyoto and Osaka anchor most itineraries.' },
    'okinawa':      { name: 'Okinawa', type: 'region', parent: 'japan', img: 'photo-1651422589451-db2ae2140b04', page: 'okinawa.html',
                      desc: 'Japan’s subtropical islands, with white sand, coral reefs and a culture distinct from the mainland. Mild even in midwinter.' },
    'india':        { name: 'India', type: 'country', img: 'photo-1477587458883-47145ed94245', page: 'india.html', regions: ['ladakh'],
                      desc: 'Forts and palaces, backwaters and Himalaya. Our most detailed programme, with state-by-state itineraries you can build yourself.' },
    'ladakh':       { name: 'Ladakh', type: 'region', parent: 'india', img: 'photo-1626621341517-bbf3d9990a23', page: 'ladakh.html',
                      desc: 'High-altitude desert of monasteries, prayer flags and impossible passes. Open roughly June to September.' },
    'thailand':     { name: 'Thailand', type: 'country', img: 'photo-1508009603885-50cf7c579365', page: 'bangkok.html', regions: [],
                      desc: 'Bangkok’s temples and markets, the islands of the Andaman coast, and the cooler hills around Chiang Mai.' },
    'maldives':     { name: 'Maldives', type: 'country', img: 'photo-1514282401047-d79a71a590e8', page: 'maldives.html', regions: [],
                      desc: 'Overwater villas, house reefs and seaplane transfers. A short flight from India and reliably warm.' },
    'cambodia':     { name: 'Cambodia', type: 'country', img: 'photo-1599283787923-51b965a58b05', page: 'cambodia.html', regions: [],
                      desc: 'Angkor Wat at sunrise, the river town of Siem Reap and a quiet southern coastline.' },
    'vietnam':      { name: 'Vietnam', type: 'country', img: 'photo-1528127269322-539801943592', page: 'vietnam.html', regions: [],
                      desc: 'Ha Long Bay, the old quarter of Hanoi, lantern-lit Hoi An and the Mekong Delta.' },
    'sri-lanka':    { name: 'Sri Lanka', type: 'country', img: 'photo-1566296314736-6eaac1ca0cb9', page: 'sri-lanka.html', regions: [],
                      desc: 'Tea country, ancient capitals, leopard safaris at Yala and beaches on both coasts.' },
    'bhutan':       { name: 'Bhutan', type: 'country', img: 'photo-1544735716-392fe2489ffa', page: 'bhutan.html', regions: [],
                      desc: 'Himalayan kingdom of dzongs and valleys, with the Tiger’s Nest trek above Paro.' },
    'indonesia':    { name: 'Indonesia', type: 'country', img: 'photo-1537996194471-e657df975ab4', page: 'indonesia.html', regions: [],
                      desc: 'Bali’s temples and rice terraces, Komodo’s dragons, and diving across the archipelago.' },
    'borneo':       { name: 'Borneo', type: 'region', parent: 'malaysia', img: 'photo-1654180680389-4141e2912ef6', page: 'borneo.html',
                      desc: 'Rainforest and river safaris, orangutan sanctuaries at Sepilok and the climb up Mount Kinabalu.' },
    'malaysia':     { name: 'Malaysia', type: 'country', img: 'photo-1592723905426-1181bf431d3a', page: 'malaysia.html', regions: ['borneo'],
                      desc: 'Kuala Lumpur, the heritage streets of Penang and Melaka, and the rainforests of Borneo.' },
    'laos':         { name: 'Laos', type: 'country', img: 'photo-1686120552846-7caf1a345876', page: 'laos.html', regions: [],
                      desc: 'Luang Prabang’s monasteries, the Mekong by slow boat and the waterfalls at Kuang Si.' },
    'mongolia':     { name: 'Mongolia', type: 'country', img: 'photo-1575415868394-e3b78f3e9b3f', page: 'mongolia.html', regions: [],
                      desc: 'Steppe, ger camps and the Gobi. Short summer season with long days and wide skies.' },
    'china':        { name: 'China', type: 'country', img: 'photo-1508804185872-d7badad00f7d', page: 'china.html', regions: [],
                      desc: 'The Great Wall, Xi’an’s terracotta army, Shanghai’s skyline and the karst rivers of Guilin.' },
    'jordan':       { name: 'Jordan', type: 'country', img: 'photo-1580834341580-8c17a3a630ca', page: 'jordan.html', regions: [],
                      desc: 'Petra, the desert camps of Wadi Rum and floating in the Dead Sea.' },

    /* ---- Africa & Middle East ------------------------------------------ */
    'tanzania':     { name: 'Tanzania', type: 'country', img: 'photo-1516426122078-c23e76319801', page: 'tanzania.html', regions: [],
                      desc: 'The Serengeti and Ngorongoro Crater, Kilimanjaro, and Zanzibar’s beaches to finish.' },
    'kenya':        { name: 'Kenya', type: 'country', img: 'photo-1516426122078-c23e76319801', page: 'kenya.html', regions: [],
                      desc: 'The Masai Mara, Amboseli beneath Kilimanjaro, and the Rift Valley lakes.' },
    'egypt':        { name: 'Egypt', type: 'country', img: 'photo-1503177119275-0aa32b3a9368', page: 'egypt.html', regions: [],
                      desc: 'The Pyramids and Sphinx, a Nile cruise between Luxor and Aswan, and Abu Simbel.' },
    'morocco':      { name: 'Morocco', type: 'country', img: 'photo-1489749798305-4fea3ae63d43', page: 'morocco.html', regions: [],
                      desc: 'The medinas of Marrakech and Fes, the Atlas Mountains and camps in the Sahara.' },
    'south-africa': { name: 'South Africa', type: 'country', img: 'photo-1519941459598-a1588781b56e', page: 'south-africa.html', regions: [],
                      desc: 'Cape Town and the Winelands, the Garden Route, and Big Five safaris in Kruger.' },
    'botswana':     { name: 'Botswana', type: 'country', img: 'photo-1711092020310-93f62fa1abb2', page: 'botswana.html', regions: [],
                      desc: 'The Okavango Delta by mokoro, Chobe’s elephants and the Kalahari salt pans.' },
    'namibia':      { name: 'Namibia', type: 'country', img: 'photo-1645340862502-1ae6be0b57a4', page: 'namibia.html', regions: [],
                      desc: 'The red dunes of Sossusvlei, the Skeleton Coast and wildlife at Etosha.' },
    'zimbabwe':     { name: 'Zimbabwe', type: 'country', img: 'photo-1627347456206-d3df7d8484b0', page: 'zimbabwe.html', regions: [],
                      desc: 'Victoria Falls, walking safaris in Mana Pools and the ruins of Great Zimbabwe.' },
    'zambia':       { name: 'Zambia', type: 'country', img: 'photo-1627347456206-d3df7d8484b0', page: 'zambia.html', regions: [],
                      desc: 'The other side of Victoria Falls, and South Luangwa, where the walking safari began.' },
    'rwanda':       { name: 'Rwanda', type: 'country', img: 'photo-1722291731448-3afe029611a6', page: 'rwanda.html', regions: [],
                      desc: 'Gorilla trekking in the Virunga volcanoes, and Lake Kivu for a few days afterwards.' },

    /* ---- Europe -------------------------------------------------------- */
    'iceland':      { name: 'Iceland', type: 'country', img: 'photo-1476514525535-07fb3b4ae5f1', page: 'iceland.html', regions: [],
                      desc: 'Waterfalls, glaciers and geothermal lagoons, with the Northern Lights through the dark months.' },
    'norway':       { name: 'Norway', type: 'country', img: 'photo-1520769945061-0a448c463865', page: 'norway.html', regions: [],
                      desc: 'Fjords, coastal steamers and the midnight sun in summer; aurora and dog-sledding in winter.' },
    'finland':      { name: 'Finland', type: 'country', img: 'photo-1512389142860-9c449e58a543', page: 'finland.html', regions: [],
                      desc: 'Lapland’s snow, reindeer and glass igloos, with the lakes and forests of the south.' },
    'switzerland':  { name: 'Switzerland', type: 'country', img: 'photo-1530122037265-a5f1f91d3b99', page: 'switzerland.html', regions: [],
                      desc: 'Alpine railways, lakeside towns and high meadows. Reliable in both summer and ski season.' },
    'austria':      { name: 'Austria', type: 'country', img: 'photo-1485081669829-bacb8c7bb1f3', page: 'austria.html', regions: [],
                      desc: 'Vienna’s palaces and coffee houses, Salzburg, and the ski villages of the Tyrol.' },
    'italy':        { name: 'Italy', type: 'country', img: 'photo-1552598715-7eeb9232a2ac', page: 'italy.html', regions: [],
                      desc: 'Rome, Florence and Venice, the Amalfi coast, and the hill towns of Tuscany and Umbria.' },
    'spain':        { name: 'Spain', type: 'country', img: 'photo-1437652633673-cc02b9c67a1b', page: 'spain.html', regions: [],
                      desc: 'Barcelona and Madrid, the Alhambra at Granada, and the white villages of Andalusia.' },
    'portugal':     { name: 'Portugal', type: 'country', img: 'photo-1531772337062-9d94547f333f', page: 'portugal.html', regions: [],
                      desc: 'Lisbon and Porto, the Douro valley, and the beaches and cliffs of the Algarve.' },
    'france':       { name: 'France', type: 'country', img: 'photo-1569506129577-a1345ae7ef87', page: 'france.html', regions: [],
                      desc: 'Paris, the Loire châteaux, Provence in lavender season and the Riviera.' },
    'germany':      { name: 'Germany', type: 'country', img: 'photo-1467269204594-9661b134dd2b', page: 'germany.html', regions: [],
                      desc: 'Bavaria’s castles, the Rhine valley, Berlin, and Christmas markets in December.' },
    'greece':       { name: 'Greece', type: 'country', img: 'photo-1601581875309-fafbf2d3ed3a', page: 'greece.html', regions: [],
                      desc: 'Athens and the Acropolis, Santorini and Mykonos, and quieter islands in the Ionian.' },
    'croatia':      { name: 'Croatia', type: 'country', img: 'photo-1575540291670-8d3b26f7d327', page: 'croatia.html', regions: [],
                      desc: 'Dubrovnik’s walls, the Dalmatian islands by boat and the lakes of Plitvice.' },
    'slovenia':     { name: 'Slovenia', type: 'country', img: 'photo-1608592077365-c6399182e63c', page: 'slovenia.html', regions: [],
                      desc: 'Lake Bled, the Julian Alps, the caves at Postojna and compact, walkable Ljubljana.' },
    'ireland':      { name: 'Ireland', type: 'country', img: 'photo-1602354817989-b9664561ae84', page: 'ireland.html', regions: [],
                      desc: 'The Ring of Kerry, the Cliffs of Moher, Dublin, and the Causeway coast to the north.' },
    'uk':           { name: 'United Kingdom', type: 'country', img: 'photo-1681407979872-0a4cbde28391', page: 'uk.html', regions: ['cotswolds', 'england', 'scotland'],
                      desc: 'London, the countryside of England, the Scottish Highlands and the castles of Wales.' },
    'england':      { name: 'England', type: 'region', parent: 'uk', img: 'photo-1578301996581-bf7caec556c0', page: 'england.html',
                      desc: 'London, Oxford and Cambridge, the Lake District and the villages of the south.' },
    'scotland':     { name: 'Scotland', type: 'region', parent: 'uk', img: 'photo-1574428512652-01ca1eb6f1ed', page: 'scotland.html',
                      desc: 'Edinburgh, the Highlands and Skye, whisky distilleries and the North Coast 500.' },
    'cotswolds':    { name: 'The Cotswolds', type: 'region', parent: 'uk', img: 'photo-1670620800615-4225fe6ecb75', page: 'cotswolds.html',
                      desc: 'Honey-coloured villages, country pubs and gentle walking, within easy reach of London.' },

    /* ---- The Americas -------------------------------------------------- */
    'usa':          { name: 'USA', type: 'country', img: 'photo-1535044243240-144dc3ae56a5', page: 'usa.html', regions: ['hawaii', 'utah', 'montana', 'new-england', 'florida', 'alaska'],
                      desc: 'From national parks to coastlines and cities. Most itineraries focus on one or two regions.' },
    'hawaii':       { name: 'Hawaii', type: 'region', parent: 'usa', img: 'photo-1553301139-3c610dd5b1cb', page: 'hawaii.html',
                      desc: 'Volcanoes, waterfalls and surf across O’ahu, Maui, Kaua’i and the Big Island.' },
    'utah':         { name: 'Utah', type: 'region', parent: 'usa', img: 'photo-1616699058158-30a2f322f698', page: 'utah.html',
                      desc: 'Red-rock country: Zion, Bryce, Arches and Canyonlands, best before the summer heat.' },
    'montana':      { name: 'Montana', type: 'region', parent: 'usa', img: 'photo-1579368135505-baeb6899fd69', page: 'montana.html',
                      desc: 'Glacier National Park, big-sky ranch country and the northern gateway to Yellowstone.' },
    'new-england':  { name: 'New England', type: 'region', parent: 'usa', img: 'photo-1476820865390-c52aeebb9891', page: 'new-england.html',
                      desc: 'Vermont and New Hampshire in autumn colour, coastal Maine and the inns of the Berkshires.' },
    'florida':      { name: 'Florida', type: 'region', parent: 'usa', img: 'photo-1520520731457-9283dd14aa66', page: 'florida.html',
                      desc: 'Winter sun, the Keys, the Everglades and the theme parks around Orlando.' },
    'alaska':       { name: 'Alaska', type: 'region', parent: 'usa', img: 'photo-1704746374839-8b44242daba7', page: 'alaska.html',
                      desc: 'Glaciers, Denali, the Inside Passage by ship and aurora over Fairbanks in winter.' },
    'canada':       { name: 'Canada', type: 'country', img: 'photo-1506905925346-21bda4d32df4', page: 'canada.html', regions: [],
                      desc: 'The Rockies at Banff and Jasper, Vancouver and Quebec, and aurora in the north.' },
    'mexico':       { name: 'Mexico', type: 'country', img: 'photo-1665618030297-4c3f13d34ca1', page: 'mexico.html', regions: [],
                      desc: 'Mayan ruins and cenotes in the Yucatán, colonial Oaxaca, and the beaches of the Riviera Maya.' },
    'costa-rica':   { name: 'Costa Rica', type: 'country', img: 'photo-1580259679654-9276b39fd2d5', page: 'costa-rica.html', regions: [],
                      desc: 'Cloud forest at Monteverde, the Arenal volcano, and wildlife on both coasts.' },
    'guatemala':    { name: 'Guatemala', type: 'country', img: 'photo-1563442744-3e17a3bf4932', page: 'guatemala.html', regions: [],
                      desc: 'Antigua’s colonial streets, Lake Atitlán and the jungle temples of Tikal.' },
    'belize':       { name: 'Belize', type: 'country', img: 'photo-1584763829754-8dd6c5e1ade4', page: 'belize.html', regions: [],
                      desc: 'The second-largest barrier reef, jungle lodges and Maya sites inland.' },
    'nicaragua':    { name: 'Nicaragua', type: 'country', img: 'photo-1775497403139-4b7f9fd25618', page: 'nicaragua.html', regions: [],
                      desc: 'Colonial Granada, volcano hikes and the twin peaks of Ometepe in Lake Nicaragua.' },
    'cuba':         { name: 'Cuba', type: 'country', img: 'photo-1570299437488-d430e1e677c7', page: 'cuba.html', regions: [],
                      desc: 'Havana’s old town and classic cars, the tobacco valley of Viñales and Trinidad.' },
    'peru':         { name: 'Peru', type: 'country', img: 'photo-1526392060635-9d6019884377', page: 'peru.html', regions: [],
                      desc: 'Machu Picchu and the Sacred Valley, Cusco, Lake Titicaca and the Nazca lines.' },
    'chile':        { name: 'Chile', type: 'country', img: 'photo-1558517286-6b7b81953cb5', page: 'chile.html', regions: [],
                      desc: 'Torres del Paine in Patagonia, the Atacama desert and the vineyards near Santiago.' },
    'argentina':    { name: 'Argentina', type: 'country', img: 'photo-1599094792743-7df3e8870800', page: 'argentina.html', regions: [],
                      desc: 'Buenos Aires and tango, the Iguazú falls, Mendoza’s wine and Patagonian glaciers.' },
    'brazil':       { name: 'Brazil', type: 'country', img: 'photo-1483729558449-99ef09a8c325', page: 'brazil.html', regions: [],
                      desc: 'Rio and its beaches, the Amazon, and the Iguazú falls from the Brazilian side.' },
    'ecuador':      { name: 'Ecuador', type: 'country', img: 'photo-1564394232860-52605aab6780', page: 'ecuador.html', regions: ['galapagos'],
                      desc: 'Colonial Quito, the Avenue of Volcanoes and the cloud forest at Mindo.' },
    'galapagos':    { name: 'Galápagos', type: 'region', parent: 'ecuador', img: 'photo-1748212173568-35d72e93e57e', page: 'galapagos.html',
                      desc: 'Wildlife with no fear of people, reached by small-ship cruise or island hopping.' },
    'colombia':     { name: 'Colombia', type: 'country', img: 'photo-1532443603613-61fa154742cd', page: 'colombia.html', regions: [],
                      desc: 'Cartagena’s walled city, the coffee region, and Medellín’s hillside barrios.' },
    'uruguay':      { name: 'Uruguay', type: 'country', img: 'photo-1646420890000-f5185ccbec82', page: 'uruguay.html', regions: [],
                      desc: 'Montevideo, the beaches at Punta del Este and the old quarter of Colonia.' },
    'antigua':      { name: 'Antigua', type: 'country', img: 'photo-1637966201771-b0b251baa2ef', page: 'antigua.html', regions: [],
                      desc: 'A beach for every day of the year, sailing week in spring and reliable trade winds.' },
    'st-lucia':     { name: 'St Lucia', type: 'country', img: 'photo-1450380412196-4e27fb7d2270', page: 'st-lucia.html', regions: [],
                      desc: 'The Pitons, rainforest and sulphur springs, with quiet bays on the west coast.' },

    'mauritius':    { name: 'Mauritius', type: 'country', img: 'photo-1513415277900-a62401e19be4', page: 'mauritius.html', regions: [],
                      desc: 'Lagoon beaches, sugarcane hills and a mix of Creole, Indian and French culture in the Indian Ocean.' },
    'seychelles':   { name: 'Seychelles', type: 'country', img: 'photo-1553829176-61484f865ac3', page: 'seychelles.html', regions: [],
                      desc: 'Granite boulders over white sand across Mah\u00e9, Praslin and La Digue, with reefs a few steps offshore.' },
    'turkey':       { name: 'Turkey', type: 'country', img: 'photo-1589561454226-796a8aa89b05', page: 'turkey.html', regions: [],
                      desc: 'Istanbul astride two continents, the balloons of Cappadocia and the turquoise Aegean coast.' },

    /* ---- Oceania & Antarctic ------------------------------------------- */
    'australia':    { name: 'Australia', type: 'country', img: 'photo-1506973035872-a4ec16b8e8d9', page: 'australia.html', regions: [],
                      desc: 'Sydney and the east coast, the Great Barrier Reef, and the Red Centre at Uluru.' },
    'new-zealand':  { name: 'New Zealand', type: 'country', img: 'photo-1547314283-befb6cc5cf29', page: 'new-zealand.html', regions: [],
                      desc: 'Fiordland and the Southern Alps, Queenstown, and geothermal Rotorua in the north.' },
    'french-polynesia': { name: 'French Polynesia', type: 'country', img: 'photo-1652842183703-47c2f7bb8c3c', page: 'french-polynesia.html', regions: [],
                      desc: 'Bora Bora and Moorea: lagoons, overwater bungalows and black-sand volcanic islands.' },
    'antarctica':   { name: 'Antarctica', type: 'continent', img: 'photo-1670595441992-19edcb97700c', page: 'antarctica.html', regions: [],
                      desc: 'Expedition cruising from Ushuaia across the Drake Passage. Penguins, whales and ice.' }
};

/* Resolve a slug to its record, or null. */
ROLAND_DESTINATIONS.get = function (slug) {
    return Object.prototype.hasOwnProperty.call(ROLAND_DESTINATIONS, slug) && slug !== 'get'
        ? ROLAND_DESTINATIONS[slug] : null;
};
