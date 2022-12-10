import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";     
import { getAuth, signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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
function logout(){
signOut(auth).then(() => {
  onAuthStateChanged(auth , (user)=>{
    if(!user){
      location.replace("index.html")
    }
  })
})
}
window.logout=logout;
