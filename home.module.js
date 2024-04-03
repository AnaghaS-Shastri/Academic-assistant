
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
  

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
  const db = getFirestore()
  const colRef = collection(db, 'users')
  getDocs(colRef)
  .then((snapshot)=> {
    let users=[]
    snapshot.docs.forEach((doc)=> {
        users.push({...doc.data(), id: doc.id})
    })

  })
  .catch(err=> {

  })

  const addUserForm = document.querySelector('.add')
  addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        name:addUserForm.name.value ,
        age: addUserForm.age.value ,
    })
    .then(() => {
      console.log("User added successfully!");
      // Optionally, reset the form fields here
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
  })

  const deleteUserForm = document.querySelector('.delete')
  deleteUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

  })