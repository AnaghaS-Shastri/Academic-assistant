import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
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
const db =  getFirestore(app);

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('submit').addEventListener('click', saveUserData);

  const userForm = document.getElementById('submit');

  userForm.addEventListener('click', function (event) {
      event.preventDefault(); 
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const college = document.getElementById('college').value;
      const branch = document.getElementById('branch').value;
      const semester = document.getElementById('semester').value;
      
      if (name.trim() === '' || age.trim() === '') {
          alert('Please enter both name and age.');
          return; 
      }

      saveUserData(name, age, college, branch, semester);
  });
});

function saveUserData() {
  // Get user input values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const college = document.getElementById('college').value;
  const branch = document.getElementById('branch').value;
  const semester = document.getElementById('semester').value;
  
  document.getElementById('displayedName').textContent = name;
  document.getElementById('displayedAge').textContent = age;
  document.getElementById('displayedCollege').textContent = college;
  document.getElementById('displayedBranch').textContent = branch;
  document.getElementById('displayedSemester').textContent = semester;

  if (!name || !age || !college || !branch || !semester) {
    alert('Please fill in all fields.');
    return;
  }

  addDoc(collection(db, "users"), {
      name: name,
      age: age,
      college: college,
      branch: branch,
      semester: semester
  })
  .then(() => {
      alert('User data saved successfully.');
  })
  .catch((error) => {
      console.error("Error saving user data: ", error);
  });
}
document.getElementById('submit').addEventListener('click', saveUserData);
