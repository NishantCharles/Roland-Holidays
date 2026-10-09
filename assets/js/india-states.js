var INDIA_STATES = [
    {
        slug: 'rajasthan', page: 'rajasthan.html', name: 'Rajasthan',
        desc: 'The land of kings, with forts, palaces and golden deserts. Explore Jaipur, Jodhpur, Udaipur and Jaisalmer, ride camels at Sam Sand Dunes and stay in heritage hotels.',
        img: 'photo-1477587458883-47145ed94245',
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
        img: 'photo-1512343879784-a960bf40e7f2',
        cities: [
            { name: 'North Goa', img: 'photo-1727499031382-407906c7e208' },
            { name: 'South Goa', img: 'photo-1736347505109-f02e0e5a0200' },
            { name: 'Panaji', img: 'photo-1567005753256-c0529035b300' },
            { name: 'Palolem', img: 'photo-1614082242765-7c98ca0f3df3' }
        ]
    },
    {
        slug: 'madhya-pradesh', page: 'madhya-pradesh.html', name: 'Madhya Pradesh',
        desc: 'The heart of India: the carved temples of Khajuraho, the riverside palaces of Orchha, the holy city of Ujjain and tiger safaris in Kanha.',
        img: 'photo-1549480017-d76466a4b7e8',
        cities: [
            { name: 'Khajuraho', img: 'photo-1606298855672-3efb63017be8' },
            { name: 'Orchha', img: 'photo-1629914509217-17ae2042f1d7' },
            { name: 'Ujjain', img: 'photo-1658730487395-dcc99f5d997c' },
            { name: 'Kanha', img: 'photo-1591824438708-ce405f36ba3d' }
        ]
    },
    {
        slug: 'kerala', page: 'kerala.html', name: 'Kerala',
        desc: 'Green and peaceful, with misty tea gardens in Munnar, houseboat stays on the Alleppey backwaters, historic Kochi and the spice-scented forests of Thekkady.',
        img: 'photo-1602216056096-3b40cc0c9944',
        cities: [
            { name: 'Munnar', img: 'photo-1658051161493-1d311c4c7b4d' },
            { name: 'Kochi', img: 'photo-1605955794720-651b9ae7f5e7' },
            { name: 'Alleppey', img: 'photo-1593693411515-c20261bcad6e' },
            { name: 'Thekkady', img: 'photo-1716404985743-8c0e007cb358' }
        ]
    },
    {
        slug: 'himachal-pradesh', page: 'himachal-pradesh.html', name: 'Himachal Pradesh',
        desc: "Snow-capped mountains and cosy hill towns: Shimla's colonial charm, Manali's snowy slopes, Tibetan culture in Dharamshala and the pine forests of Dalhousie.",
        img: 'photo-1626621341517-bbf3d9990a23',
        cities: [
            { name: 'Shimla', img: 'photo-1641735735000-c9719ac2740b' },
            { name: 'Manali', img: 'photo-1597167231350-d057a45dc868' },
            { name: 'Dharamshala', img: 'photo-1581321863389-ef7d7bfe4b75' },
            { name: 'Dalhousie', img: 'photo-1628699543232-dc241b48a4b3' }
        ]
    },
    {
        slug: 'uttarakhand', page: 'uttarakhand.html', name: 'Uttarakhand',
        desc: 'Mountain escapes and adventure: skiing in Auli, rafting and yoga in Rishikesh, and lake and hill views in Mussoorie and Nainital.',
        img: 'photo-1622308644420-b20142dc993c',
        cities: [
            { name: 'Auli', img: 'photo-1623727705498-51a6a4154384' },
            { name: 'Rishikesh', img: 'photo-1720819029162-8500607ae232' },
            { name: 'Mussoorie', img: 'photo-1547106365-bb4b17f50a15' },
            { name: 'Nainital', img: 'photo-1610715936287-6c2ad208cdbf' }
        ]
    },
    {
        slug: 'gujarat', page: 'gujarat.html', name: 'Gujarat',
        desc: 'The white salt desert of Kutch, the heritage old city of Ahmedabad, and the sacred coastal temples of Dwarka and Somnath.',
        img: 'photo-1710305983691-a3bd5e078da6',
        cities: [
            { name: 'Kutch', img: 'photo-1669015881702-951de590db31' },
            { name: 'Ahmedabad', img: 'photo-1651408451633-ff492f347ec1' },
            { name: 'Dwarka', img: 'photo-1717326630799-703fe906e283' },
            { name: 'Somnath', img: 'photo-1735192683809-3fcd83233e19' }
        ]
    },
    {
        slug: 'andaman', page: 'andaman.html', name: 'Andaman and Nicobar Islands',
        desc: 'Clear turquoise water and white-sand beaches. Snorkel at Swaraj Dweep, unwind on quiet Shaheed Dweep and discover history in Port Blair.',
        img: 'photo-1580910527739-556eb89f9d65',
        cities: [
            { name: 'Swaraj Dweep', img: 'photo-1586359716568-3e1907e4cf9f' },
            { name: 'Shaheed Dweep', img: 'photo-1579317344982-256c49ab1e0d' },
            { name: 'Port Blair', img: 'photo-1721231564051-3b44b8058a9e' }
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
