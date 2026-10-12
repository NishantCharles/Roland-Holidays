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
    'japan':        { name: 'Japan', type: 'country', img: 'photo-1522383225653-ed111181a951', page: null, regions: ['okinawa'],
                      desc: 'Temples and bullet trains, cherry blossom in spring and fiery maples in autumn. Tokyo, Kyoto and Osaka anchor most itineraries.' },
    'okinawa':      { name: 'Okinawa', type: 'region', parent: 'japan', img: null, page: null,
                      desc: 'Japan’s subtropical islands, with white sand, coral reefs and a culture distinct from the mainland. Mild even in midwinter.' },
    'india':        { name: 'India', type: 'country', img: 'photo-1477587458883-47145ed94245', page: 'india.html', regions: ['ladakh'],
                      desc: 'Forts and palaces, backwaters and Himalaya. Our most detailed programme, with state-by-state itineraries you can build yourself.' },
    'ladakh':       { name: 'Ladakh', type: 'region', parent: 'india', img: 'photo-1626621341517-bbf3d9990a23', page: null,
                      desc: 'High-altitude desert of monasteries, prayer flags and impossible passes. Open roughly June to September.' },
    'thailand':     { name: 'Thailand', type: 'country', img: 'photo-1508009603885-50cf7c579365', page: 'bangkok.html', regions: [],
                      desc: 'Bangkok’s temples and markets, the islands of the Andaman coast, and the cooler hills around Chiang Mai.' },
    'maldives':     { name: 'Maldives', type: 'country', img: 'photo-1514282401047-d79a71a590e8', page: 'maldives.html', regions: [],
                      desc: 'Overwater villas, house reefs and seaplane transfers. A short flight from India and reliably warm.' },
    'cambodia':     { name: 'Cambodia', type: 'country', img: 'photo-1599283787923-51b965a58b05', page: null, regions: [],
                      desc: 'Angkor Wat at sunrise, the river town of Siem Reap and a quiet southern coastline.' },
    'vietnam':      { name: 'Vietnam', type: 'country', img: 'photo-1528127269322-539801943592', page: null, regions: [],
                      desc: 'Ha Long Bay, the old quarter of Hanoi, lantern-lit Hoi An and the Mekong Delta.' },
    'sri-lanka':    { name: 'Sri Lanka', type: 'country', img: 'photo-1566296314736-6eaac1ca0cb9', page: null, regions: [],
                      desc: 'Tea country, ancient capitals, leopard safaris at Yala and beaches on both coasts.' },
    'bhutan':       { name: 'Bhutan', type: 'country', img: 'photo-1544735716-392fe2489ffa', page: null, regions: [],
                      desc: 'Himalayan kingdom of dzongs and valleys, with the Tiger’s Nest trek above Paro.' },
    'indonesia':    { name: 'Indonesia', type: 'country', img: 'photo-1537996194471-e657df975ab4', page: null, regions: [],
                      desc: 'Bali’s temples and rice terraces, Komodo’s dragons, and diving across the archipelago.' },
    'borneo':       { name: 'Borneo', type: 'region', parent: 'malaysia', img: null, page: null,
                      desc: 'Rainforest and river safaris, orangutan sanctuaries at Sepilok and the climb up Mount Kinabalu.' },
    'malaysia':     { name: 'Malaysia', type: 'country', img: null, page: null, regions: ['borneo'],
                      desc: 'Kuala Lumpur, the heritage streets of Penang and Melaka, and the rainforests of Borneo.' },
    'laos':         { name: 'Laos', type: 'country', img: null, page: null, regions: [],
                      desc: 'Luang Prabang’s monasteries, the Mekong by slow boat and the waterfalls at Kuang Si.' },
    'mongolia':     { name: 'Mongolia', type: 'country', img: null, page: null, regions: [],
                      desc: 'Steppe, ger camps and the Gobi. Short summer season with long days and wide skies.' },
    'china':        { name: 'China', type: 'country', img: null, page: null, regions: [],
                      desc: 'The Great Wall, Xi’an’s terracotta army, Shanghai’s skyline and the karst rivers of Guilin.' },
    'jordan':       { name: 'Jordan', type: 'country', img: null, page: null, regions: [],
                      desc: 'Petra, the desert camps of Wadi Rum and floating in the Dead Sea.' },

    /* ---- Africa & Middle East ------------------------------------------ */
    'tanzania':     { name: 'Tanzania', type: 'country', img: 'photo-1516426122078-c23e76319801', page: null, regions: [],
                      desc: 'The Serengeti and Ngorongoro Crater, Kilimanjaro, and Zanzibar’s beaches to finish.' },
    'kenya':        { name: 'Kenya', type: 'country', img: 'photo-1516426122078-c23e76319801', page: null, regions: [],
                      desc: 'The Masai Mara, Amboseli beneath Kilimanjaro, and the Rift Valley lakes.' },
    'egypt':        { name: 'Egypt', type: 'country', img: 'photo-1503177119275-0aa32b3a9368', page: null, regions: [],
                      desc: 'The Pyramids and Sphinx, a Nile cruise between Luxor and Aswan, and Abu Simbel.' },
    'morocco':      { name: 'Morocco', type: 'country', img: null, page: null, regions: [],
                      desc: 'The medinas of Marrakech and Fes, the Atlas Mountains and camps in the Sahara.' },
    'south-africa': { name: 'South Africa', type: 'country', img: null, page: null, regions: [],
                      desc: 'Cape Town and the Winelands, the Garden Route, and Big Five safaris in Kruger.' },
    'botswana':     { name: 'Botswana', type: 'country', img: null, page: null, regions: [],
                      desc: 'The Okavango Delta by mokoro, Chobe’s elephants and the Kalahari salt pans.' },
    'namibia':      { name: 'Namibia', type: 'country', img: null, page: null, regions: [],
                      desc: 'The red dunes of Sossusvlei, the Skeleton Coast and wildlife at Etosha.' },
    'zimbabwe':     { name: 'Zimbabwe', type: 'country', img: null, page: null, regions: [],
                      desc: 'Victoria Falls, walking safaris in Mana Pools and the ruins of Great Zimbabwe.' },
    'zambia':       { name: 'Zambia', type: 'country', img: null, page: null, regions: [],
                      desc: 'The other side of Victoria Falls, and South Luangwa, where the walking safari began.' },
    'rwanda':       { name: 'Rwanda', type: 'country', img: null, page: null, regions: [],
                      desc: 'Gorilla trekking in the Virunga volcanoes, and Lake Kivu for a few days afterwards.' },

    /* ---- Europe -------------------------------------------------------- */
    'iceland':      { name: 'Iceland', type: 'country', img: 'photo-1476514525535-07fb3b4ae5f1', page: null, regions: [],
                      desc: 'Waterfalls, glaciers and geothermal lagoons, with the Northern Lights through the dark months.' },
    'norway':       { name: 'Norway', type: 'country', img: 'photo-1520769945061-0a448c463865', page: null, regions: [],
                      desc: 'Fjords, coastal steamers and the midnight sun in summer; aurora and dog-sledding in winter.' },
    'finland':      { name: 'Finland', type: 'country', img: 'photo-1512389142860-9c449e58a543', page: null, regions: [],
                      desc: 'Lapland’s snow, reindeer and glass igloos, with the lakes and forests of the south.' },
    'switzerland':  { name: 'Switzerland', type: 'country', img: 'photo-1530122037265-a5f1f91d3b99', page: null, regions: [],
                      desc: 'Alpine railways, lakeside towns and high meadows. Reliable in both summer and ski season.' },
    'austria':      { name: 'Austria', type: 'country', img: null, page: null, regions: [],
                      desc: 'Vienna’s palaces and coffee houses, Salzburg, and the ski villages of the Tyrol.' },
    'italy':        { name: 'Italy', type: 'country', img: null, page: null, regions: [],
                      desc: 'Rome, Florence and Venice, the Amalfi coast, and the hill towns of Tuscany and Umbria.' },
    'spain':        { name: 'Spain', type: 'country', img: null, page: null, regions: [],
                      desc: 'Barcelona and Madrid, the Alhambra at Granada, and the white villages of Andalusia.' },
    'portugal':     { name: 'Portugal', type: 'country', img: null, page: null, regions: [],
                      desc: 'Lisbon and Porto, the Douro valley, and the beaches and cliffs of the Algarve.' },
    'france':       { name: 'France', type: 'country', img: null, page: null, regions: [],
                      desc: 'Paris, the Loire châteaux, Provence in lavender season and the Riviera.' },
    'germany':      { name: 'Germany', type: 'country', img: null, page: null, regions: [],
                      desc: 'Bavaria’s castles, the Rhine valley, Berlin, and Christmas markets in December.' },
    'greece':       { name: 'Greece', type: 'country', img: null, page: null, regions: [],
                      desc: 'Athens and the Acropolis, Santorini and Mykonos, and quieter islands in the Ionian.' },
    'croatia':      { name: 'Croatia', type: 'country', img: null, page: null, regions: [],
                      desc: 'Dubrovnik’s walls, the Dalmatian islands by boat and the lakes of Plitvice.' },
    'slovenia':     { name: 'Slovenia', type: 'country', img: null, page: null, regions: [],
                      desc: 'Lake Bled, the Julian Alps, the caves at Postojna and compact, walkable Ljubljana.' },
    'ireland':      { name: 'Ireland', type: 'country', img: null, page: null, regions: [],
                      desc: 'The Ring of Kerry, the Cliffs of Moher, Dublin, and the Causeway coast to the north.' },
    'uk':           { name: 'United Kingdom', type: 'country', img: null, page: null, regions: ['cotswolds', 'england', 'scotland'],
                      desc: 'London, the countryside of England, the Scottish Highlands and the castles of Wales.' },
    'england':      { name: 'England', type: 'region', parent: 'uk', img: null, page: null,
                      desc: 'London, Oxford and Cambridge, the Lake District and the villages of the south.' },
    'scotland':     { name: 'Scotland', type: 'region', parent: 'uk', img: null, page: null,
                      desc: 'Edinburgh, the Highlands and Skye, whisky distilleries and the North Coast 500.' },
    'cotswolds':    { name: 'The Cotswolds', type: 'region', parent: 'uk', img: null, page: null,
                      desc: 'Honey-coloured villages, country pubs and gentle walking, within easy reach of London.' },

    /* ---- The Americas -------------------------------------------------- */
    'usa':          { name: 'USA', type: 'country', img: null, page: null, regions: ['hawaii', 'utah', 'montana', 'new-england', 'florida', 'alaska'],
                      desc: 'From national parks to coastlines and cities. Most itineraries focus on one or two regions.' },
    'hawaii':       { name: 'Hawaii', type: 'region', parent: 'usa', img: null, page: null,
                      desc: 'Volcanoes, waterfalls and surf across O’ahu, Maui, Kaua’i and the Big Island.' },
    'utah':         { name: 'Utah', type: 'region', parent: 'usa', img: null, page: null,
                      desc: 'Red-rock country: Zion, Bryce, Arches and Canyonlands, best before the summer heat.' },
    'montana':      { name: 'Montana', type: 'region', parent: 'usa', img: null, page: null,
                      desc: 'Glacier National Park, big-sky ranch country and the northern gateway to Yellowstone.' },
    'new-england':  { name: 'New England', type: 'region', parent: 'usa', img: 'photo-1476820865390-c52aeebb9891', page: null,
                      desc: 'Vermont and New Hampshire in autumn colour, coastal Maine and the inns of the Berkshires.' },
    'florida':      { name: 'Florida', type: 'region', parent: 'usa', img: null, page: null,
                      desc: 'Winter sun, the Keys, the Everglades and the theme parks around Orlando.' },
    'alaska':       { name: 'Alaska', type: 'region', parent: 'usa', img: null, page: null,
                      desc: 'Glaciers, Denali, the Inside Passage by ship and aurora over Fairbanks in winter.' },
    'canada':       { name: 'Canada', type: 'country', img: 'photo-1506905925346-21bda4d32df4', page: null, regions: [],
                      desc: 'The Rockies at Banff and Jasper, Vancouver and Quebec, and aurora in the north.' },
    'mexico':       { name: 'Mexico', type: 'country', img: null, page: null, regions: [],
                      desc: 'Mayan ruins and cenotes in the Yucatán, colonial Oaxaca, and the beaches of the Riviera Maya.' },
    'costa-rica':   { name: 'Costa Rica', type: 'country', img: null, page: null, regions: [],
                      desc: 'Cloud forest at Monteverde, the Arenal volcano, and wildlife on both coasts.' },
    'guatemala':    { name: 'Guatemala', type: 'country', img: null, page: null, regions: [],
                      desc: 'Antigua’s colonial streets, Lake Atitlán and the jungle temples of Tikal.' },
    'belize':       { name: 'Belize', type: 'country', img: null, page: null, regions: [],
                      desc: 'The second-largest barrier reef, jungle lodges and Maya sites inland.' },
    'nicaragua':    { name: 'Nicaragua', type: 'country', img: null, page: null, regions: [],
                      desc: 'Colonial Granada, volcano hikes and the twin peaks of Ometepe in Lake Nicaragua.' },
    'cuba':         { name: 'Cuba', type: 'country', img: null, page: null, regions: [],
                      desc: 'Havana’s old town and classic cars, the tobacco valley of Viñales and Trinidad.' },
    'peru':         { name: 'Peru', type: 'country', img: 'photo-1526392060635-9d6019884377', page: null, regions: [],
                      desc: 'Machu Picchu and the Sacred Valley, Cusco, Lake Titicaca and the Nazca lines.' },
    'chile':        { name: 'Chile', type: 'country', img: null, page: null, regions: [],
                      desc: 'Torres del Paine in Patagonia, the Atacama desert and the vineyards near Santiago.' },
    'argentina':    { name: 'Argentina', type: 'country', img: null, page: null, regions: [],
                      desc: 'Buenos Aires and tango, the Iguazú falls, Mendoza’s wine and Patagonian glaciers.' },
    'brazil':       { name: 'Brazil', type: 'country', img: null, page: null, regions: [],
                      desc: 'Rio and its beaches, the Amazon, and the Iguazú falls from the Brazilian side.' },
    'ecuador':      { name: 'Ecuador', type: 'country', img: null, page: null, regions: ['galapagos'],
                      desc: 'Colonial Quito, the Avenue of Volcanoes and the cloud forest at Mindo.' },
    'galapagos':    { name: 'Galápagos', type: 'region', parent: 'ecuador', img: null, page: null,
                      desc: 'Wildlife with no fear of people, reached by small-ship cruise or island hopping.' },
    'colombia':     { name: 'Colombia', type: 'country', img: null, page: null, regions: [],
                      desc: 'Cartagena’s walled city, the coffee region, and Medellín’s hillside barrios.' },
    'uruguay':      { name: 'Uruguay', type: 'country', img: null, page: null, regions: [],
                      desc: 'Montevideo, the beaches at Punta del Este and the old quarter of Colonia.' },
    'antigua':      { name: 'Antigua', type: 'country', img: null, page: null, regions: [],
                      desc: 'A beach for every day of the year, sailing week in spring and reliable trade winds.' },
    'st-lucia':     { name: 'St Lucia', type: 'country', img: null, page: null, regions: [],
                      desc: 'The Pitons, rainforest and sulphur springs, with quiet bays on the west coast.' },

    /* ---- Oceania & Antarctic ------------------------------------------- */
    'australia':    { name: 'Australia', type: 'country', img: 'photo-1506973035872-a4ec16b8e8d9', page: null, regions: [],
                      desc: 'Sydney and the east coast, the Great Barrier Reef, and the Red Centre at Uluru.' },
    'new-zealand':  { name: 'New Zealand', type: 'country', img: null, page: null, regions: [],
                      desc: 'Fiordland and the Southern Alps, Queenstown, and geothermal Rotorua in the north.' },
    'french-polynesia': { name: 'French Polynesia', type: 'country', img: null, page: null, regions: [],
                      desc: 'Bora Bora and Moorea: lagoons, overwater bungalows and black-sand volcanic islands.' },
    'antarctica':   { name: 'Antarctica', type: 'continent', img: null, page: null, regions: [],
                      desc: 'Expedition cruising from Ushuaia across the Drake Passage. Penguins, whales and ice.' }
};

/* Resolve a slug to its record, or null. */
ROLAND_DESTINATIONS.get = function (slug) {
    return Object.prototype.hasOwnProperty.call(ROLAND_DESTINATIONS, slug) && slug !== 'get'
        ? ROLAND_DESTINATIONS[slug] : null;
};
