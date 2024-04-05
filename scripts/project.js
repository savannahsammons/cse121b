document.addEventListener('DOMContentLoaded', function getCatFact() {
    let catsButton = document.getElementById('getFact');
    let factDisplay = document.getElementById('factDisplay');

    catsButton.addEventListener('click', function whenButtonClicked() {
        fetch('https://meowfacts.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    // Use of template literal and array method (map)
                    const facts = data.data.map((fact, index) => `Fact ${index + 1}: ${fact}`).join('\n');
                    factDisplay.textContent = facts;
                } else {
                    // Conditional branching
                    factDisplay.textContent = "No cat facts available right now.";
                }
            })
    });
});
