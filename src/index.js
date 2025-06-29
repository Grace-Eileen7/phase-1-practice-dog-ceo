console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imageContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const dropdown = document.getElementById("breed-dropdown");

  let allBreeds = [];

  // Challenge 1: Fetch and display dog images
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((imgUrl) => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "A cute dog";
        img.style.width = "200px";
        img.style.margin = "10px";
        imageContainer.appendChild(img);
      });
    });

  // Challenge 2: Fetch and display dog breeds
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  // Helper to render breeds
  function renderBreeds(breeds) {
    breedList.innerHTML = "";
    breeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;
      li.style.cursor = "pointer";

      // Challenge 3: Change color on click
      li.addEventListener("click", () => {
        li.style.color = "blue"; // you can pick any color
      });

      breedList.appendChild(li);
    });
  }

  // Challenge 4: Filter breeds by selected letter
  dropdown.addEventListener("change", (e) => {
    const letter = e.target.value;
    const filtered =
      letter === "all"
        ? allBreeds
        : allBreeds.filter((breed) => breed.startsWith(letter));
    renderBreeds(filtered);
  });
});
