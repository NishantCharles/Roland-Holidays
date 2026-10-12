/* ==========================================================================
   ROLAND HOLIDAYS — MONTH DATA
   ==========================================================================
   Twelve months, each listing the destinations we recommend for it. Months
   reference destination slugs from data/destinations.js rather than carrying
   their own copy, so a place that appears in five months is described once.

   Fields
     name    Display name.
     theme   Short editorial line under the page title.
     season  The "Best Time to Visit" band on the hero.
     hero    Unsplash photo id for the hero background.
     intro   One paragraph introducing the month.
     list    [{ slug, why }] — why is the reason for THIS month specifically.
     groups  December only: the same shape, split into labelled sections.
   ========================================================================== */

var ROLAND_MONTHS = {

    january: {
        name: 'January', season: 'November – February',
        theme: 'Southern Summers & Winter Escapes',
        hero: 'photo-1506973035872-a4ec16b8e8d9',
        intro: 'January splits the world neatly in two. The southern hemisphere is at the height of its summer, while the far north trades daylight for snow and the aurora. In between, Southeast Asia and Egypt sit in their driest, kindest months.',
        list: [
            { slug: 'okinawa',    why: 'Mild and subtropical while the rest of Japan is under snow, with quiet beaches and whale watching offshore.' },
            { slug: 'australia',  why: 'Peak summer. Long beach days in Sydney, warm nights, and the Red Centre best visited early in the morning.' },
            { slug: 'tanzania',   why: 'Calving season on the southern Serengeti, when the herds gather and predators follow.' },
            { slug: 'argentina',  why: 'High summer in Patagonia, with the trekking season open at El Chaltén and the glaciers at their most dramatic.' },
            { slug: 'india',      why: 'The coolest, clearest month across Rajasthan and the north — ideal for forts, palaces and desert camps.' },
            { slug: 'cambodia',   why: 'Dry season at Angkor, with comfortable temperatures for sunrise temple visits.' },
            { slug: 'egypt',      why: 'Cool enough to walk the Giza plateau and Luxor’s temples without the summer heat.' },
            { slug: 'finland',    why: 'Deep Lapland winter: reindeer sleighs, glass igloos and the best odds for the Northern Lights.' },
            { slug: 'antarctica', why: 'The heart of the expedition season, with penguin chicks hatching and near round-the-clock light.' },
            { slug: 'vietnam',    why: 'Dry and bright in the south, with Ha Long Bay calm and cool in the north.' }
        ]
    },

    february: {
        name: 'February', season: 'November – February',
        theme: 'Romantic Escapes & Winter Wonders',
        hero: 'photo-1523906834658-6e24ef2386f9',
        intro: 'A short month that rewards going far. Patagonia and the Pacific coast of Central America are at their best, while the Arctic still holds enough darkness for the lights and enough snow for the sledges.',
        list: [
            { slug: 'chile',       why: 'Patagonia’s summer window — Torres del Paine is open, warm and walkable.' },
            { slug: 'mexico',      why: 'Dry, warm and clear across the Yucatán, with whale sharks and cenotes at their best.' },
            { slug: 'jordan',      why: 'Cool, quiet days at Petra before the spring coach parties arrive.' },
            { slug: 'iceland',     why: 'Still dark enough for aurora, with ice caves under Vatnajökull only accessible in winter.' },
            { slug: 'costa-rica',  why: 'The dry season peak on the Pacific coast, with reliable sun and easy wildlife spotting.' },
            { slug: 'norway',      why: 'Aurora season in Tromsø, with dog-sledding and whales in the fjords.' },
            { slug: 'nicaragua',   why: 'Dry, warm and far less crowded than its neighbours, with volcano hikes at their most comfortable.' },
            { slug: 'new-zealand', why: 'Late summer: the warmest seas, settled weather in Fiordland and the Central Otago harvest.' },
            { slug: 'cuba',        why: 'Dry season in Havana, with comfortable temperatures and the music season in full swing.' }
        ]
    },

    march: {
        name: 'March', season: 'March – October',
        theme: 'Spring Blossoms & Cultural Heritage',
        hero: 'photo-1522383225653-ed111181a951',
        intro: 'The month the northern hemisphere wakes up. Japan’s blossom moves north, Morocco and Spain warm into their best walking weather, and southern Africa comes out of the rains green and full.',
        list: [
            { slug: 'south-africa', why: 'The end of summer: Cape Town is warm and dry, and the Winelands are into harvest.' },
            { slug: 'guatemala',    why: 'Dry season with Semana Santa processions filling the streets of Antigua.' },
            { slug: 'mexico',       why: 'Still dry and warm, with spring equinox crowds at Chichén Itzá worth timing around.' },
            { slug: 'japan',        why: 'Cherry blossom begins in the south and moves north — the most-booked window of the year.' },
            { slug: 'antigua',      why: 'The tail of the dry season, with steady trade winds and sailing week approaching.' },
            { slug: 'morocco',      why: 'Warm days and cool evenings, before the summer heat makes the medinas hard work.' },
            { slug: 'spain',        why: 'Andalusia in spring: orange blossom in Seville and Semana Santa processions.' },
            { slug: 'sri-lanka',    why: 'Dry on the south and west coasts, with good conditions for the Cultural Triangle.' },
            { slug: 'usa',          why: 'Desert spring in the southwest, with wildflowers and comfortable hiking before the heat.' }
        ]
    },

    april: {
        name: 'April', season: 'March – October',
        theme: 'Pleasant Horizons & Valley Retreats',
        hero: 'photo-1544735716-392fe2489ffa',
        intro: 'A genuinely good month almost everywhere. Europe is open but not yet busy, the Himalaya are clear, and Southeast Asia celebrates its new year before the rains.',
        list: [
            { slug: 'slovenia', why: 'Lake Bled thaws and the Julian Alps green up, with the trails quiet before summer.' },
            { slug: 'germany',  why: 'Spring in Bavaria and the Rhine, with castle grounds open and gardens coming into flower.' },
            { slug: 'bhutan',   why: 'Clear Himalayan views, rhododendrons in bloom and the spring festival season.' },
            { slug: 'thailand', why: 'Songkran, the Thai new year, turns the whole country into a water festival.' },
            { slug: 'belize',   why: 'End of the dry season — the best visibility of the year on the barrier reef.' },
            { slug: 'morocco',  why: 'The Atlas passes open as the snow retreats, ideal for trekking and desert nights.' },
            { slug: 'colombia', why: 'Between the rains, with the coffee region green and Cartagena still dry.' },
            { slug: 'japan',    why: 'Blossom reaches Tokyo and the north, and the Japanese Alps open up.' },
            { slug: 'hawaii',   why: 'Between the winter swell and the summer crowds, with whales still passing through early in the month.' }
        ]
    },

    may: {
        name: 'May', season: 'March – October',
        theme: 'Pre-Summer Explorations & Alpine Trails',
        hero: 'photo-1530122037265-a5f1f91d3b99',
        intro: 'The best of Europe before the crowds, and the short window when Mongolia and the American desert are both comfortable. Long days, open passes, shoulder-season prices.',
        list: [
            { slug: 'mongolia',  why: 'The steppe turns green and the ger camps reopen after the winter.' },
            { slug: 'japan',     why: 'Golden Week aside, May brings fresh green, clear skies and comfortable walking.' },
            { slug: 'morocco',   why: 'The last comfortable month before summer, with the Sahara still bearable.' },
            { slug: 'italy',     why: 'Warm but not hot, with Tuscany green and the coast open ahead of the August rush.' },
            { slug: 'utah',      why: 'The sweet spot for red-rock country — warm days, cool nights, before the summer heat.' },
            { slug: 'england',   why: 'Gardens at their peak, long light evenings and the countryside at its greenest.' },
            { slug: 'france',    why: 'Provence before lavender season, the Loire in blossom and Paris at its most pleasant.' },
            { slug: 'australia', why: 'Autumn in the south, and the start of the dry season up north for Kakadu and the Kimberley.' },
            { slug: 'greece',    why: 'Warm seas without August prices, and the archaeological sites still cool enough to enjoy.' }
        ]
    },

    june: {
        name: 'June', season: 'March – October',
        theme: 'High-Altitude Escapes & Global Adventures',
        hero: 'photo-1506905925346-21bda4d32df4',
        intro: 'Midsummer light in the north and dry season in the Andes and southern Africa. The high passes of the Himalaya open, and the Galápagos settle into their calmer, cooler season.',
        list: [
            { slug: 'montana',   why: 'Glacier National Park’s Going-to-the-Sun Road clears, with wildflowers and long days.' },
            { slug: 'botswana',  why: 'Floodwaters reach the Okavango Delta just as the land dries — the best game viewing of the year.' },
            { slug: 'galapagos', why: 'Cooler, nutrient-rich water brings more marine life, and the albatross return to Española.' },
            { slug: 'italy',     why: 'Long evenings and warm seas, with the Dolomites open for walking.' },
            { slug: 'peru',      why: 'The dry season begins — clear skies over Machu Picchu and the Sacred Valley.' },
            { slug: 'ladakh',    why: 'The passes open and Leh becomes reachable by road, with clear high-altitude skies.' },
            { slug: 'portugal',  why: 'Warm and dry before the August peak, with the Douro green and the Algarve uncrowded.' },
            { slug: 'scotland',  why: 'The longest days of the year, with the Highlands at their greenest and the midges not yet at their worst.' }
        ]
    },

    july: {
        name: 'July', season: 'March – October',
        theme: 'Great Migrations & Northern Light',
        hero: 'photo-1602216056096-3b40cc0c9944',
        intro: 'The Great Migration reaches the Mara River, the Arctic barely gets dark, and the Alps are in full walking season. A good month to go a long way.',
        list: [
            { slug: 'tanzania',          why: 'The migration moves north toward the Mara River crossings — the headline wildlife event of the year.' },
            { slug: 'indonesia',         why: 'Dry season across Bali and Komodo, with the best diving visibility.' },
            { slug: 'rwanda',            why: 'The long dry season makes the gorilla trek through the Virungas far easier underfoot.' },
            { slug: 'ireland',           why: 'The warmest, longest days for the Wild Atlantic Way and the Ring of Kerry.' },
            { slug: 'canada',            why: 'The Rockies are fully open — glacier lakes, hiking and wildlife at Banff and Jasper.' },
            { slug: 'switzerland',       why: 'High meadows in flower, every mountain railway running and alpine huts open.' },
            { slug: 'norway',            why: 'The midnight sun over the fjords, with hiking and coastal voyages at their best.' },
            { slug: 'french-polynesia',  why: 'Dry season: calm lagoons, lower humidity and humpback whales arriving.' },
            { slug: 'peru',              why: 'Peak dry season in the Andes — the most reliable weather for the Inca Trail.' }
        ]
    },

    august: {
        name: 'August', season: 'March – October',
        theme: 'Global Explorations & Scenic Wonders',
        hero: 'photo-1476514525535-07fb3b4ae5f1',
        intro: 'Southern Africa’s dry season concentrates wildlife around the last water, while the northern summer peaks. Busy in Europe, which makes the wilder options better value.',
        list: [
            { slug: 'norway',    why: 'Still long days, warmer water and the best of the fjord hiking season.' },
            { slug: 'indonesia', why: 'The driest, clearest month — ideal for Komodo, diving and the Bali highlands.' },
            { slug: 'croatia',   why: 'Peak Adriatic: warm seas, island hopping and long evenings in Dubrovnik and Hvar.' },
            { slug: 'iceland',   why: 'The mildest month, with the highland F-roads open and puffins still on the cliffs.' },
            { slug: 'ecuador',   why: 'Dry in the highlands, with clear views along the Avenue of Volcanoes.' },
            { slug: 'usa',       why: 'National park season in the north — Yellowstone, the Tetons and the Pacific Northwest.' },
            { slug: 'borneo',    why: 'Drier months make river safaris and the Kinabalu climb far more reliable.' },
            { slug: 'kenya',     why: 'The migration is in the Masai Mara, with river crossings through August and September.' },
            { slug: 'namibia',   why: 'Dry winter concentrates game at Etosha’s waterholes, with cool, clear desert nights.' },
            { slug: 'zimbabwe',  why: 'Prime walking-safari season in Mana Pools as the bush thins and animals head to the river.' }
        ]
    },

    september: {
        name: 'September', season: 'March – October',
        theme: 'Shoulder-Season Serenity',
        hero: 'photo-1537996194471-e657df975ab4',
        intro: 'Arguably the best month of the year to travel. Europe keeps its warmth but loses its crowds, East Africa stays dry, and the harvest season begins across the Mediterranean.',
        list: [
            { slug: 'canada',      why: 'Early autumn colour in the east, elk rutting in the Rockies and quiet trails.' },
            { slug: 'greece',      why: 'The sea is at its warmest and the islands empty out after the August peak.' },
            { slug: 'kenya',       why: 'The last of the Mara River crossings, with excellent game viewing throughout.' },
            { slug: 'portugal',    why: 'Harvest in the Douro, warm Atlantic water and Lisbon without the summer queues.' },
            { slug: 'indonesia',   why: 'Still dry and clear, with the shoulder season bringing better value in Bali.' },
            { slug: 'china',       why: 'Comfortable temperatures for the Great Wall and Beijing, with clearer skies than summer.' },
            { slug: 'spain',       why: 'The grape harvest in Rioja, and Andalusia cooling to a workable temperature.' },
            { slug: 'switzerland', why: 'Clear alpine air, cattle coming down from the high pastures and quiet trails.' },
            { slug: 'france',      why: 'Vendange across the wine regions, warm days and Paris back to its proper rhythm.' }
        ]
    },

    october: {
        name: 'October', season: 'March – October',
        theme: 'Golden Foliage & Festive Celebrations',
        hero: 'photo-1476820865390-c52aeebb9891',
        intro: 'Autumn colour from New England to Kyoto, the start of the southern African peak, and India’s festival season. A month of colour in almost every sense.',
        list: [
            { slug: 'japan',        why: 'Autumn leaves begin in the north and the temples of Kyoto start to turn.' },
            { slug: 'new-england',  why: 'Peak foliage through Vermont and New Hampshire — the classic leaf-peeping window.' },
            { slug: 'italy',        why: 'Truffle and wine season in Piedmont and Tuscany, with warm days and no queues.' },
            { slug: 'zambia',       why: 'The end of the dry season concentrates game along the Luangwa before the rains.' },
            { slug: 'chile',        why: 'Spring in Patagonia: wildflowers, newborn guanacos and far fewer walkers.' },
            { slug: 'brazil',       why: 'Shoulder season in Rio with warm, drier weather, and the Iguazú falls in good flow.' },
            { slug: 'cotswolds',    why: 'Autumn colour over the honey-stone villages, with pub fires lit and footpaths quiet.' },
            { slug: 'bhutan',       why: 'The clearest Himalayan views of the year, and the main season for tsechu festivals.' },
            { slug: 'croatia',      why: 'Still warm enough to swim, with Dubrovnik’s walls walkable in comfort again.' }
        ]
    },

    november: {
        name: 'November', season: 'November – February',
        theme: 'Early Winter Magic & Cosy Escapes',
        hero: 'photo-1543589077-47d81606c1bf',
        intro: 'The northern season turns while the tropics dry out. Southeast Asia enters its best months, southern Africa heads into summer, and the first Christmas markets open in Europe.',
        list: [
            { slug: 'morocco',      why: 'Cooler days return to Marrakech and the desert nights are crisp and clear.' },
            { slug: 'costa-rica',   why: 'The rains ease and the country is at its greenest, just before high season prices.' },
            { slug: 'egypt',        why: 'The ideal month — warm but not hot, for the Nile, Luxor and Abu Simbel.' },
            { slug: 'south-africa', why: 'Early summer in the Cape, with whales still off Hermanus and the Winelands in leaf.' },
            { slug: 'colombia',     why: 'Drier weather returns to Cartagena and the Caribbean coast.' },
            { slug: 'st-lucia',     why: 'The start of the dry season, with the Pitons clear and the sea settled.' },
            { slug: 'australia',    why: 'Spring into summer — excellent for the Great Barrier Reef before the wet.' },
            { slug: 'vietnam',      why: 'Dry and mild from north to south, one of the few months that suits the whole country.' },
            { slug: 'mexico',       why: 'Día de los Muertos in early November, then dry, warm weather across the country.' },
            { slug: 'thailand',     why: 'The cool season opens with Loy Krathong lanterns over Chiang Mai and calm island seas.' },
            { slug: 'japan',        why: 'Autumn colour peaks in Kyoto and Nara — the second great season after blossom.' },
            { slug: 'florida',      why: 'Hurricane season ends and the winter sun begins, with the Keys at their best.' }
        ]
    },

    december: {
        name: 'December', season: 'November – February',
        theme: 'Festive Finales & Year-End Celebrations',
        hero: 'photo-1512389142860-9c449e58a543',
        intro: 'December divides cleanly into two kinds of holiday: somewhere properly wintry, or somewhere the sun still reaches. We have grouped them accordingly.',
        groups: [
            {
                label: 'Wintry Escapes',
                note: 'Snow, firelight and the Northern Lights.',
                list: [
                    { slug: 'iceland',     why: 'The darkest weeks of the year give the longest aurora window, with ice caves open.' },
                    { slug: 'austria',     why: 'Christmas markets in Vienna and Salzburg, and the Tyrol opening for ski season.' },
                    { slug: 'canada',      why: 'Powder in Whistler and Banff, and aurora over the Yukon and Northwest Territories.' },
                    { slug: 'alaska',      why: 'Deep winter: dog-sledding, ice fishing and some of the strongest aurora anywhere.' },
                    { slug: 'switzerland', why: 'The Alps at full tilt, with Christmas markets in the valley towns below.' },
                    { slug: 'finland',     why: 'Lapland at Christmas — Santa’s village, reindeer sleighs and glass igloos.' },
                    { slug: 'norway',      why: 'Aurora over Tromsø, with the coastal voyage running through the polar night.' }
                ]
            },
            {
                label: 'Winter Sun',
                note: 'Where December still means warm seas and long days.',
                list: [
                    { slug: 'australia',    why: 'High summer and Christmas on the beach, with Sydney’s New Year fireworks to finish.' },
                    { slug: 'mexico',       why: 'Dry, warm and bright across the Yucatán and the Pacific coast.' },
                    { slug: 'egypt',        why: 'Cool, clear days for the Pyramids and a Nile cruise over the holidays.' },
                    { slug: 'maldives',     why: 'Peak season: calm seas, reliable sun and the best underwater visibility.' },
                    { slug: 'uruguay',      why: 'Summer on the Atlantic coast, with Punta del Este at its liveliest.' },
                    { slug: 'laos',         why: 'Cool, dry season along the Mekong and in Luang Prabang.' },
                    { slug: 'sri-lanka',    why: 'The west and south coasts enter their dry season just as Europe freezes.' },
                    { slug: 'thailand',     why: 'The best weather of the year — dry, cooler and calm across the islands.' },
                    { slug: 'south-africa', why: 'Full summer in the Cape, with long beach days and the Winelands in season.' },
                    { slug: 'cambodia',     why: 'Dry and comfortable at Angkor, the most pleasant month to walk the temples.' }
                ]
            }
        ]
    }
};

ROLAND_MONTHS.order = ['january','february','march','april','may','june',
                       'july','august','september','october','november','december'];
