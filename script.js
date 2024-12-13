
const initialCards = [
    { name: "John Doe", profession: "CEO & Founder", university: "Oxford University", image: "img/avatar.svg" },
    { name: "Jane Smith", profession: "Designer", university: "Harvard University", image: "img/avatar.svg" },
    { name: "Michael Lee", profession: "Engineer", university: "MIT", image: "img/avatar.svg" },
    { name: "Emily Davis", profession: "Developer", university: "Stanford University", image: "img/avatar.svg" }
  ];
  
  // DOM Elements
  const cardsContainer = document.getElementById("cards");
  const modal = document.getElementById("modal");
  const nameInput = document.getElementById("name");
  const professionInput = document.getElementById("profession");
  const universityInput = document.getElementById("university");
  
  // Load Cards
  function loadCards() {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || initialCards;
    cardsContainer.innerHTML = "";
    storedCards.forEach((card) => createCard(card));
    localStorage.setItem("cards", JSON.stringify(storedCards));
  }
  
  // Create a Card
  function createCard({ name, profession, university, image }) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${image}" alt="Profile Picture">
      <h3>${name}</h3>
      <p>${profession}</p>
      <p>${university}</p>
      <div class="icons">
        <img src="img/icon1.svg" alt="Instagram">
        <img src="img/icon2.svg" alt="Instagram">
      </div>
      <button class="follow-btn">Follow</button>
    `;
    cardsContainer.appendChild(card);
  }
  
  // Add New Card
  function addCard() {
    const newCard = {
      name: nameInput.value,
      profession: professionInput.value,
      university: universityInput.value,
      image: "img/avatar.svg"
    };
    const cards = JSON.parse(localStorage.getItem("cards")) || initialCards;
    cards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(cards));
    loadCards();
    closeModal();
  }
  
  // Open Modal
  function openModal() {
    modal.style.display = "flex";
  }
  
  // Close Modal
  function closeModal() {
    modal.style.display = "none";
    nameInput.value = "";
    professionInput.value = "";
    universityInput.value = "";
  }
  
  // Load cards on page load
  document.addEventListener("DOMContentLoaded", loadCards);
  