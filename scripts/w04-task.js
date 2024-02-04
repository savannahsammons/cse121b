/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Savannah Sammons",
    photo: "images/IMG-9057.jpg",
    favoriteFoods: [
        "Rice",
        "Chicken",
        "Pasta",
        "Tacos",
        "Potatoes"
    ],
    hobbies: [
        "Piano",
        "Video Games",
        "Soccer"
    ],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push (
    {
        place: 'Dallas, TX',
        length: '17 years'
    },
    {
        place: 'Salt Lake City, UT',
        length: '5 years'
    },
    {
        place: 'Bahia, Brazil',
        length: '18 months'
    },
)

/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

/* Name */

/* Photo with attributes */

document.getElementById("photo").src = "images/IMG-9057.jpg";
document.getElementById("photo").alt = "Photo of me";

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

console.log(myProfile.placesLived[0].place);

let dl = document.getElementById('places-lived')

myProfile.placesLived.forEach(items => {
    let dt = document.createElement('dt')
    let dd = document.createElement('dd')

    dt.textContent = items.place;
    dd.textContent = items.length;

    dl.appendChild(dt)
    dl.appendChild(dd)
})
