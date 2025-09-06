
const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

function loadHome() {
  clearContent();
  const home = document.createElement("div");
  home.innerHTML = `
    <h1>Welcome to Odin's Restaurant</h1>
    <p>Home of legendary Norse cuisine.</p>
    <img src="https://source.unsplash.com/600x300/?restaurant" alt="restaurant image" />
  `;
  content.appendChild(home);
}

function loadMenu() {
  clearContent();
  const menu = document.createElement("div");
  menu.innerHTML = `
    <h1>Menu</h1>
    <ul style="list-style: none; padding: 0;">
      <li>🍖 Thor's Hammer Steak</li>
      <li>🌮 Loki's Trickster Tacos</li>
      <li>🍺 Odin's Golden Ale</li>
    </ul>
  `;
  content.appendChild(menu);
}

function loadContact() {
  clearContent();
  const contact = document.createElement("div");
  contact.innerHTML = `
    <h1>Contact Us</h1>
    <p>Email: valhalla@odinskitchen.com</p>
    <p>Phone: +123-456-7890</p>
  `;
  content.appendChild(contact);
}

// Event listeners for tab buttons
document.getElementById("homeBtn").addEventListener("click", loadHome);
document.getElementById("menuBtn").addEventListener("click", loadMenu);
document.getElementById("contactBtn").addEventListener("click", loadContact);

// Load home by default
loadHome();
