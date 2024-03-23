/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templeElements = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // const img = new Image();
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        article.appendChild(h3);
        article.appendChild(img);
        templeElements.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
      }
}

console.log(templeList)

/* reset Function */

const reset = () => {
    templeElements.innerHTML = '';
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById('filtered').value;
    let filteredTemples;

    switch(filter) {
        case 'utah':
            filteredTemples = temples.filter(temple => temple.location.includes('Utah'));
            break;
        case 'notutah':
            filteredTemples = temples.filter(temple => !temple.location.includes('Utah'));
            break;
        case 'older':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case 'all':
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();