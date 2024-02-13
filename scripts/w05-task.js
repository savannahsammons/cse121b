/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templeElements = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    templeList.forEach(temples => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
    
        h3.textContent = temples;
        
        let img = document.createElement('img');

        document.getElementById("photo").src = "images/IMG-9057.jpg";
        document.getElementById("photo").alt = "Photo of me";
        
        article.appendChild(h3, img);
        templeElements.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/


/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
