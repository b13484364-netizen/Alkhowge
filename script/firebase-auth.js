import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ السماح فقط لهذا البريد بالدخول إلى لوحة التحكم
const allowedEmail = "shamwebs1@gmail.com";

document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      if (user.email === allowedEmail) {
        window.location.href = "admin.html";
      } else {
        alert("❌ هذا البريد غير مصرح له بالدخول إلى لوحة التحكم.");
      }
    })
    .catch((error) => {
      alert("حدث خطأ في تسجيل الدخول: " + error.message);
    });
});
