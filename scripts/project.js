
const catElement = document.getElementById('catFact');

let catList = [];

const displayFacts = (cats) => {
    cats.farEach(cat => {
        const h3 = document.createElement('h3');
        h3.textContent = cat.text;
        catElement.appendChild(h3);
    })
}

const getCatFacts = async () => {
    const response = await fetch("catFacts.json");
    if (response.ok) {
        catList = await response.json();
        displayFacts(catList);
      }
}

const reset = () => {
    catElement.innerHTML = '';
}

const buttons = document.getElementById('getFact').value;

document.getElementById("getFact").addEventListener("click", () => { displayFacts(catList) });

displayFacts();