/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Savannah Sammons';

let currentYear = '2024';

let profilePicture = 'images/IMG-9057.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of IMG-9057.jpg`)


/* Step 5 - Array */

let favoriteFoods = ["Rice","Chicken","Pasta","Tacos"]

console.log(favoriteFoods[0]);

let newFavoriteFood = 'Potatoes'

favoriteFoods.push (newFavoriteFood)


