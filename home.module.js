
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
const db = getFirestore(app);

// Function to save user data to Firestore
function saveUserData() {
    // Get the user input values
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

    document.getElementById('displayedName', displayedAge, displayedCollege, displayedBranch, displayedSemester).textContent = name,age,college,branch,semester;
    // Add a new document with a generated id to the 'users' collection
    addDoc(collection(db, "users"), {
        name: name,
        age: age,
        college: college,
        branch: branch,
        semester: semester
    })
    .then(() => {
        // Alert the user that the data was saved successfully
        alert('User data saved successfully.');
    })
    .catch((error) => {
        // Log any errors to the console
        console.error("Error saving user data: ", error);
    });
}
document.getElementById('submit').addEventListener('click', saveUserData);
document.addEventListener('DOMContentLoaded', function(){

const userForm = document.getElementById('submit'); // Assuming your form has this ID

userForm.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const college = document.getElementById('college').value;
  const branch = document.getElementById('branch').value;
  const semester = document.getElementById('semester').value;
  
  if (name === null || name.trim() === '' || age === null || age.trim() === '') {
    // Handle null or empty values (e.g., show an alert)
    alert('Please enter both name and age.');
    return; 
  }// Prevent default form submission behavior
  saveUserData(name, age,college, branch, semester);
});
});