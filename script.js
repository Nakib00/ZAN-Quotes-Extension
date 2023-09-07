// Function to fetch a random quote and display it
function fetchRandomQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Get a random index to select a random quote
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex].text;

      // Display the random quote in the HTML element
      document.getElementById("Textquote").textContent = randomQuote;
    })
    .catch(function (error) {
      console.error("Error fetching data: " + error);
    });
}

// Call the function to fetch and display a random quote
fetchRandomQuote();
