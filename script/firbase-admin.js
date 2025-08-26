import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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

document.getElementById("productForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: parseFloat(document.getElementById("price").value),
    image: document.getElementById("image").value,
    category: document.getElementById("category").value || "عام",
    createdAt: new Date()
  };

  try {
    await addDoc(collection(db, "products"), data);
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("productForm").reset();
  } catch (error) {
    alert("حدث خطأ أثناء الإضافة: " + error.message);
  }
});
