






const getTemples = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
      }
}


