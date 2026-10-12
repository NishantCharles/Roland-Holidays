/* ==========================================================================
   ROLAND HOLIDAYS — INDIA STATE DATA
   ==========================================================================
   One record per state. Drives three things:
     india.html            the state grid
     <state>.html          the hero, intro and the itinerary builder
     renderStateCitySpots  the selectable spot cards inside the builder

   Per state
     slug, page, name  identity and the page it owns
     img               Unsplash id for the card and hero
     desc              paragraph used on india.html
     tagline           one line under the page title
     season            the "Best Time to Visit" band
     bestFor           three short chips shown under the intro
     cities            the selectable spots in the builder

   Per city
     name, img         label and photo
     days              suggested length of stay
     places            what the spot covers, shown on the card

   Adding a state here gives it a builder automatically; run
   `npm run states` to generate its page.
   ========================================================================== */

var INDIA_STATES = [
    {
        slug: 'rajasthan', page: 'rajasthan.html', name: 'Rajasthan',
        desc: 'The land of kings, with forts, palaces and golden deserts. Explore Jaipur, Jodhpur, Udaipur and Jaisalmer, ride camels at Sam Sand Dunes and stay in heritage hotels.',
        tagline: 'Forts, palaces and the Thar desert',
        season: 'October – March',
        bestFor: ['Heritage & forts', 'Desert camps', 'Luxury palace stays'],
        img: 'photo-1477587458883-47145ed94245',
        hero: 'assets/img/rj.jpg',
        cities: [
            { name: 'Jaipur', img: 'photo-1706961121783-4ae6c933983a', days: '2–3 days', places: 'Hawa Mahal, Amber Fort, City Palace, Nahargarh Fort.' },
            { name: 'Jodhpur', img: 'photo-1686825780583-8be7c349a4b4', days: '1–2 days', places: 'Mehrangarh Fort, Jaswant Thada, Blue City, Toorji Ka Jhalra.' },
            { name: 'Udaipur', img: 'photo-1589901164570-f9de6556e1c1', days: '2–3 days', places: 'Lake Pichola, City Palace, Fateh Sagar Lake, Sajjangarh.' },
            { name: 'Jaisalmer', img: 'photo-1732022648903-737e66c18b08', days: '2–3 days', places: 'Jaisalmer Fort, Patwon Ki Haveli, Sam Sand Dunes, desert camp.' },
            { name: 'Mount Abu', img: 'photo-1611076763501-55d80ccc93cb', days: '1–2 days', places: 'Nakki Lake, Dilwara Temples, Guru Shikhar, Sunset Point.' },
            { name: 'Pushkar', img: 'photo-1715168931029-2949161ee406', days: '1 day', places: 'Pushkar Lake, Brahma Temple, Savitri Temple, local markets.' },
            { name: 'Ranthambore', img: 'photo-1679451289926-d421c3b5ff43', days: '1–2 days', places: 'Wildlife safari, Ranthambore Fort, nature photography.' },
            { name: 'Chittorgarh', img: 'photo-1684074463924-0535b3592491', days: '1 day', places: 'Chittorgarh Fort, Vijay Stambh, Kirti Stambh, historic palaces.' }
        ]
    },
    {
        slug: 'goa', page: 'goa.html', name: 'Goa',
        desc: 'Sun, sand and Portuguese charm. Lively beaches in North Goa, quiet coves in South Goa and Palolem, and the colourful churches and lanes of Panaji.',
        tagline: 'Beaches, shacks and Portuguese lanes',
        season: 'November – February',
        bestFor: ['Beaches & nightlife', 'Water sports', 'Heritage quarters'],
        img: 'photo-1512343879784-a960bf40e7f2',
        cities: [
            { name: 'North Goa', img: 'photo-1727499031382-407906c7e208', days: '2–3 days', places: 'Baga, Calangute and Anjuna beaches, Fort Aguada, the Saturday night market.' },
            { name: 'South Goa', img: 'photo-1736347505109-f02e0e5a0200', days: '2–3 days', places: 'Colva and Benaulim beaches, Cabo de Rama, quieter resorts and beach shacks.' },
            { name: 'Panaji', img: 'photo-1567005753256-c0529035b300', days: '1 day', places: 'Fontainhas Latin Quarter, Church of the Immaculate Conception, Mandovi cruise.' },
            { name: 'Palolem', img: 'photo-1614082242765-7c98ca0f3df3', days: '1–2 days', places: 'Crescent bay, kayaking, Butterfly Beach and the silent discos.' }
        ]
    },
    {
        slug: 'kerala', page: 'kerala.html', name: 'Kerala',
        desc: 'Backwaters, tea hills and the Arabian Sea. Houseboats at Alleppey, spice plantations at Thekkady, colonial Kochi and the green slopes of Munnar.',
        tagline: 'Backwaters, tea hills and Ayurveda',
        season: 'September – March',
        bestFor: ['Houseboat stays', 'Tea & spice country', 'Ayurvedic retreats'],
        img: 'photo-1602216056096-3b40cc0c9944',
        cities: [
            { name: 'Munnar', img: 'photo-1658051161493-1d311c4c7b4d', days: '2 days', places: 'Tea estates, Eravikulam National Park, Mattupetty Dam, Top Station.' },
            { name: 'Kochi', img: 'photo-1605955794720-651b9ae7f5e7', days: '1–2 days', places: 'Fort Kochi, the Chinese fishing nets, Mattancherry Palace, a Kathakali show.' },
            { name: 'Alleppey', img: 'photo-1593693411515-c20261bcad6e', days: '1–2 days', places: 'Overnight houseboat on the backwaters, village canals, Marari beach.' },
            { name: 'Thekkady', img: 'photo-1716404985743-8c0e007cb358', days: '1–2 days', places: 'Periyar Wildlife Sanctuary, spice plantation walks, bamboo rafting.' }
        ]
    },
    {
        slug: 'himachal-pradesh', page: 'himachal-pradesh.html', name: 'Himachal Pradesh',
        desc: 'Deodar forests, snow peaks and hill towns. Shimla and Manali for the classics, Dharamshala for Tibetan culture and Dalhousie for quiet pine walks.',
        tagline: 'Snow peaks, pine forests and hill towns',
        season: 'March – June, September – December',
        bestFor: ['Hill stations', 'Snow & adventure', 'Tibetan culture'],
        img: 'photo-1626621341517-bbf3d9990a23',
        cities: [
            { name: 'Shimla', img: 'photo-1641735735000-c9719ac2740b', days: '1–2 days', places: 'The Ridge and Mall Road, Jakhu Temple, the Kalka toy train.' },
            { name: 'Manali', img: 'photo-1597167231350-d057a45dc868', days: '2–3 days', places: 'Solang Valley, Rohtang Pass, Hadimba Temple, Old Manali cafés.' },
            { name: 'Dharamshala', img: 'photo-1581321863389-ef7d7bfe4b75', days: '1–2 days', places: 'McLeod Ganj, the Dalai Lama Temple, Bhagsu Falls, the Triund trek.' },
            { name: 'Dalhousie', img: 'photo-1628699543232-dc241b48a4b3', days: '1–2 days', places: 'Khajjiar meadows, Panchpula, colonial churches and pine walks.' }
        ]
    },
    {
        slug: 'uttarakhand', page: 'uttarakhand.html', name: 'Uttarakhand',
        desc: 'The Himalayan foothills: yoga and rafting at Rishikesh, lakes at Nainital, colonial Mussoorie and the ski slopes above Auli.',
        tagline: 'Himalayan lakes, rivers and ridges',
        season: 'March – June, September – November',
        bestFor: ['Yoga & wellness', 'Lakes & ridges', 'Skiing at Auli'],
        img: 'photo-1622308644420-b20142dc993c',
        cities: [
            { name: 'Auli', img: 'photo-1623727705498-51a6a4154384', days: '1–2 days', places: 'Skiing and the cable car, Nanda Devi views, the Gurso Bugyal meadow.' },
            { name: 'Rishikesh', img: 'photo-1720819029162-8500607ae232', days: '1–2 days', places: 'Ganga aarti at Triveni Ghat, Lakshman Jhula, rafting and yoga schools.' },
            { name: 'Mussoorie', img: 'photo-1547106365-bb4b17f50a15', days: '1–2 days', places: 'Camel’s Back Road, Kempty Falls, the Gun Hill ropeway.' },
            { name: 'Nainital', img: 'photo-1610715936287-6c2ad208cdbf', days: '1–2 days', places: 'Boating on Naini Lake, Snow View Point, Mall Road and Tiffin Top.' }
        ]
    },
    {
        slug: 'madhya-pradesh', page: 'madhya-pradesh.html', name: 'Madhya Pradesh',
        desc: 'The heart of India: the carved temples of Khajuraho, the riverside palaces of Orchha, the holy city of Ujjain and tiger safaris in Kanha.',
        tagline: 'Temples, river palaces and tiger country',
        season: 'October – March',
        bestFor: ['UNESCO temples', 'Tiger safaris', 'Pilgrimage'],
        img: 'photo-1549480017-d76466a4b7e8',
        cities: [
            { name: 'Khajuraho', img: 'photo-1606298855672-3efb63017be8', days: '1–2 days', places: 'The Western and Eastern temple groups, UNESCO carvings, evening light show.' },
            { name: 'Orchha', img: 'photo-1629914509217-17ae2042f1d7', days: '1 day', places: 'Jahangir Mahal, Raja Ram Temple, the cenotaphs along the Betwa river.' },
            { name: 'Ujjain', img: 'photo-1658730487395-dcc99f5d997c', days: '1 day', places: 'Mahakaleshwar Jyotirlinga, the Ram Ghat aarti, Kal Bhairav Temple.' },
            { name: 'Kanha', img: 'photo-1591824438708-ce405f36ba3d', days: '2 days', places: 'Tiger safaris, the barasingha grasslands, Bamni Dadar sunset point.' }
        ]
    },
    {
        slug: 'gujarat', page: 'gujarat.html', name: 'Gujarat',
        desc: 'The white salt desert of Kutch, the stepwells and old pols of Ahmedabad, and the coastal temples at Dwarka and Somnath.',
        tagline: 'Salt deserts, stepwells and coastal temples',
        season: 'October – March',
        bestFor: ['Rann of Kutch', 'Heritage & crafts', 'Temple circuit'],
        img: 'photo-1710305983691-a3bd5e078da6',
        cities: [
            { name: 'Kutch', img: 'photo-1669015881702-951de590db31', days: '2 days', places: 'The White Rann, Rann Utsav tents, Kala Dungar and handicraft villages.' },
            { name: 'Ahmedabad', img: 'photo-1651408451633-ff492f347ec1', days: '1–2 days', places: 'Sabarmati Ashram, Adalaj Stepwell, the old city pols, Manek Chowk at night.' },
            { name: 'Dwarka', img: 'photo-1717326630799-703fe906e283', days: '1 day', places: 'Dwarkadhish Temple, Bet Dwarka by boat, Rukmini Devi Temple.' },
            { name: 'Somnath', img: 'photo-1735192683809-3fcd83233e19', days: '1 day', places: 'The Somnath Jyotirlinga, Triveni Sangam, the evening sound and light show.' }
        ]
    },
    {
        slug: 'andaman', page: 'andaman.html', name: 'Andaman Islands',
        desc: 'Coral reefs, white sand and a slow island pace. Radhanagar Beach on Swaraj Dweep, snorkelling at Shaheed Dweep and the colonial history of Port Blair.',
        tagline: 'Coral reefs, white sand and island time',
        season: 'October – May',
        bestFor: ['Scuba & snorkelling', 'Island beaches', 'Colonial history'],
        img: 'photo-1580910527739-556eb89f9d65',
        cities: [
            { name: 'Swaraj Dweep', img: 'photo-1586359716568-3e1907e4cf9f', days: '2–3 days', places: 'Radhanagar Beach, snorkelling at Elephant Beach, scuba on the house reefs.' },
            { name: 'Shaheed Dweep', img: 'photo-1579317344982-256c49ab1e0d', days: '1–2 days', places: 'Bharatpur and Laxmanpur beaches, glass-bottom boats, the natural rock bridge.' },
            { name: 'Port Blair', img: 'photo-1721231564051-3b44b8058a9e', days: '1–2 days', places: 'Cellular Jail light and sound show, Ross Island, Corbyn’s Cove.' }
        ]
    }
];

function indiaStateImg(id, width) {
    return 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=' + (width || 600) + '&q=70';
}

// State cards grid (same card design as the state pages' city cards).
function renderIndiaStatesGrid(container) {
    container.innerHTML = INDIA_STATES.map(function (s) {
        return '<div class="col-md-6 col-lg-4">' +
            '<div class="routes-box">' +
                '<div class="routes-img"><img src="' + indiaStateImg(s.img) + '" alt="' + s.name + '" loading="lazy"></div>' +
                '<div class="routes-content">' +
                    '<div class="top-bar"><h5>' + s.name + '</h5></div>' +
                    '<p class="text-muted mb-3" style="font-size:13px;">' + s.desc + '</p>' +
                    '<a href="' + s.page + '" class="primary-button">' +
                        '<div class="button-item-main">' +
                            '<div class="button-text-pill">' +
                                '<div class="primay-button-text">View Cities</div>' +
                                '<div class="primay-button-text">View Cities</div>' +
                            '</div>' +
                            '<div class="button-arrow-pill"><div class="arrow-wrapper"><i class="fas fa-arrow-right button-arrow"></i></div></div>' +
                        '</div>' +
                    '</a>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

function renderStateCitiesGrid(container, slug) {
    var state = INDIA_STATES.filter(function (s) { return s.slug === slug; })[0];
    if (!state) return;
    container.innerHTML = state.cities.map(function (c) {
        var text = encodeURIComponent('Hi Roland Holidays! 👋\n\nI would like to enquire about a trip to ' + c.name + ', ' + state.name + '. Please share details and pricing.');
        return '<div class="col-md-6 col-lg-4">' +
            '<div class="routes-box">' +
                '<div class="routes-img"><img src="' + indiaStateImg(c.img) + '" alt="' + c.name + '" loading="lazy"></div>' +
                '<div class="routes-content">' +
                    '<div class="top-bar"><h5>' + c.name + (c.days ? ' <span class="ds-city-days">' + c.days + '</span>' : '') + '</h5></div>' +
                    (c.places
                        ? '<p class="text-muted mb-3" style="font-size:13px;">' + c.places + '</p>'
                        : '<p class="text-muted mb-3" style="font-size:13px;">' + state.name + ', India</p>') +
                    '<a href="https://api.whatsapp.com/send?phone=919769421051&text=' + text + '" target="_blank" class="primary-button ds-btn-wa-card">' +
                        '<div class="button-item-main">' +
                            '<div class="button-text-pill">' +
                                '<div class="primay-button-text">Enquire on WhatsApp</div>' +
                                '<div class="primay-button-text">Enquire on WhatsApp</div>' +
                            '</div>' +
                            '<div class="button-arrow-pill"><div class="arrow-wrapper"><i class="fab fa-whatsapp button-arrow"></i></div></div>' +
                        '</div>' +
                    '</a>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');

    // Only the WhatsApp button should act; block design-system.js's whole-card navigation.
    container.addEventListener('click', function (e) {
        if (!e.target.closest('a')) e.stopPropagation();
    }, true);
}

// Selectable city cards for a page's "Create Your Custom Travel Plan" builder (uses the page's toggleSpotSelection).
function renderStateCitySpots(container, slug) {
    var state = INDIA_STATES.filter(function (s) { return s.slug === slug; })[0];
    if (!state) return;
    container.innerHTML = state.cities.map(function (c) {
        return '<div class="col-md-6 col-lg-4">' +
            '<div class="ds-spot-card" onclick="toggleSpotSelection(this, \'' + c.name.replace(/'/g, "\'") + '\')">' +
                '<img class="ds-spot-img" src="' + indiaStateImg(c.img) + '" alt="' + c.name + '" loading="lazy">' +
                '<div class="ds-spot-content">' +
                    '<div class="ds-spot-checkbox"><i class="fas fa-check"></i></div>' +
                    '<div class="ds-spot-info">' +
                        '<div class="ds-spot-title">' + c.name + (c.days ? ' <span class="ds-city-days">' + c.days + '</span>' : '') + '</div>' +
                        '<div class="ds-spot-desc">' + (c.places || state.name + ', India') + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}
