document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    const createTempleCard = (temple) => {
        const card = document.createElement('figure');
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            </figcaption>
        `;
        return card;
    };

    const cardsContainer = document.querySelector('.cards');

    // temples.forEach(temple => {
    //     const card = createTempleCard(temple);
    //     cardsContainer.appendChild(card);
    // });

    const displayTemples = (filteredTemples) => {
        cardsContainer.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = createTempleCard(temple);
            cardsContainer.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = [];
        switch(criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    };

    document.querySelector('a[href="#old"]').addEventListener('click', () => filterTemples('old'));
    document.querySelector('a[href="#new"]').addEventListener('click', () => filterTemples('new'));
    document.querySelector('a[href="#large"]').addEventListener('click', () => filterTemples('large'));
    document.querySelector('a[href="#small"]').addEventListener('click', () => filterTemples('small'));

    displayTemples(temples);
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/3840%2C/0/default"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 107688,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/4f1313d912b16ff535921025812d2332ca0f8e99/full/1920%2C/0/default"
    },
    {
        templeName: "Vernal Utah",
        location: "Vernal, Utah, United States",
        dedicated: "1997, November, 2",
        area: 38000,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/1a52c814fe0ebf7033de1414df9a45faa97a9f1b/full/1920%2C/0/default"
    }
];

