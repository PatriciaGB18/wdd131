document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
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
            templeName: "Salt Lake Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "6–24 April 1893",
            area: 382207, 
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-6813.jpg"
        },
        {
            templeName: "São Paulo Brazil",
            location: "São Paulo, Brazil",
            dedicated: "30 October–2 November 1978",
            area: 59246, 
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"
        },
        {
            templeName: "San Diego California",
            location: "San Diego, California, United States",
            dedicated: "25–30 April 1993 ",
            area: 72000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-58413.jpg"
        }
        
          
          
    ];

    function displayTemples(templesArray) {
        const container = document.getElementById("temples-container");
        container.innerHTML = ""; 

        templesArray.forEach(temple => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");

            templeCard.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            container.appendChild(templeCard);
        });
    }

    
    displayTemples(temples);

    document.getElementById("all").addEventListener("click", () => displayTemples(temples));

    document.getElementById("old").addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year < 1900;
        });
        displayTemples(filteredTemples);
    });

    document.getElementById("new").addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year > 2000;
        });
        displayTemples(filteredTemples);
    });

    document.getElementById("large").addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(filteredTemples);
    });

    document.getElementById("small").addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(filteredTemples);
    });
    
document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;

function displayTemples(templesArray) {
    const container = document.getElementById("temples-container");
    container.innerHTML = ""; 

    templesArray.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" style="width: 400px; height: 250px; object-fit: cover;">
        `;

        container.appendChild(templeCard);
    });
}


});

