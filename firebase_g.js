import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";     
import { getAuth, sendPasswordResetEmail,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
        const firebaseConfig = {
            apiKey: "AIzaSyDM0IhFLyGv_OFQKp5QLlcORBRpscVYqac",
            authDomain: "authentication-1cd8c.firebaseapp.com",
            databaseURL: "https://authentication-1cd8c-default-rtdb.firebaseio.com",
            projectId: "authentication-1cd8c",
            storageBucket: "authentication-1cd8c.appspot.com",
            messagingSenderId: "302709476573",
            appId: "1:302709476573:web:19b8c39e2861d50300df34",
            measurementId: "G-YN89WVWD4H"
        };
        const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("loginform").addEventListener("submit",(event)=>{
  event.preventDefault();
})
function login() {
  const email = document.getElementById("em").value
  const password = document.getElementById("pass").value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    onAuthStateChanged(auth , (user)=>{
      if(user){
          location.replace("welcome.html")
      }
    })
  })
  .catch((error)=>{
    // var errorCode = error.code;
    // var errorMessage = error.message;
    document.getElementById("error").innerHTML=error;
  })
}
window.login=login;
function forgotPass()
{
  const email=document.getElementById("em").value;
  console.log(email)
  sendPasswordResetEmail(auth, email)
  .then(() => {
  alert("Reset link sent successfully")
})
  .catch((error) => {
    document.getElementById("error").innerHTML=error;
  });
}
window.forgotPass=forgotPass;
