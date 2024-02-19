/* W05: Programming Tasks */

/* Declare and initialize global variables */

const catElements = document.getElementById('catFact');

let catsList = [];

/* async displayTemples Function */

const displayFacts = (catFact) => {

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = 'catFact';

        const p = document.createElement('p');
        p.textContent = catFact.text;

        article.appendChild(h3);
        article.appendChild(p);
        catElements.appendChild(article);
}

/* async getFacts Function using fetch()*/
document.getElementById('getFact').addEventListener('click', getFacts);

const getFacts = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
    if (response.ok) {
        catsList = await response.json();
        displayFacts(catsList);
    }
}

console.log(catsList);

/* reset Function */

const reset = () => {
    catElements.innerHTML = '';
}

/* Event Listener */


getFacts();