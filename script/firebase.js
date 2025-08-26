import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcBC17rj9rzOe5kgDpiYQbLY64Xqptd8U",
  authDomain: "alkhowge.firebaseapp.com",
  projectId: "alkhowge",
  storageBucket: "alkhowge.appspot.com",
  messagingSenderId: "793921262814",
  appId: "1:793921262814:web:4bb4ba88a1ecddefb15e4f",
  measurementId: "G-NE9G3HK7FH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productGrid = document.getElementById("product-grid");

async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${data.image}" alt="${data.name}" class="product-img">
      <h3>${data.name}</h3>
      <p>${data.description || ''}</p>
      <span class="price">السعر: ${data.price}$</span>
    `;
    productGrid.appendChild(productDiv);
  });
}

fetchProducts();
