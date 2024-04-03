
import { getFirestore, collection, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1sUK7TYJ6wo4ZlXcHnaiqaVCs5MBeJwg",
  authDomain: "academic-assistant-cd772.firebaseapp.com",
  projectId: "academic-assistant-cd772",
  storageBucket: "academic-assistant-cd772.appspot.com",
  messagingSenderId: "1047978749611",
  appId: "1:1047978749611:web:1853b6459eeebb58dd51ee",
  measurementId: "G-J6EFV6W9CC"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);



  const db = getFirestore(app);

  
  
  db.collection('users').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>
      {
        console.log(doc.data())
      })
  });
 
  function save() {
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
  }
  database.ref('users/' + username).ser({
    name: nameField,
    age: age,
  })
  alert('Saved successfully')