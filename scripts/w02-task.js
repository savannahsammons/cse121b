/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Savannah Sammons';

// let currentYear = date;

let profilePicture = 'images/IMG-9057.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

// nameElement.textContent = new Date().getFullYear();

imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of IMG-9057.jpg`)


/* Step 5 - Array */

let favoriteFoods = ["Rice","Chicken","Pasta","Tacos"]

foodElement.innerHTML += `<br>${favoriteFoods}`;


console.log(favoriteFoods[0]);

let newFavoriteFood = 'Potatoes'


favoriteFoods.push (newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;


let newCopyFirst = favoriteFoods.slice(1);

foodElement.innerHTML += `<br>${newCopyFirst}`;


let newCopyLast = favoriteFoods.slice(0, -1);

foodElement.innerHTML += `<br>${newCopyLast}`;

