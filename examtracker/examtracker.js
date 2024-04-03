import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

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



document.addEventListener('DOMContentLoaded', function () {
var addDetailsBtn = document.getElementById('add-details-btn');
    var extraDetailsContainer = document.getElementById('extra-details');
    var examForm = document.getElementById('exam-form');

    addDetailsBtn.addEventListener('click', function () {
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'extra_details[]';
        input.placeholder = 'Extra Details';
        input.classList.add('extra-details-field');
        extraDetailsContainer.appendChild(input);
    });

    examForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const subject = document.getElementById('subject').value;
        const date = document.getElementById('date').value;
        const extraDetailsFields = document.querySelectorAll('.extra-details-field');
        const extraDetails = [];

        // Extract values from extra details fields
        extraDetailsFields.forEach(function (field) {
            extraDetails.push(field.value);
        });

        const examData = {
            subject: subject,
            date: date,
            extraDetails: extraDetails,
          };
      
          addExamDataToFirestore(examData);
        });

        var formData = new FormData();
        formData.append('subject', subject);
        formData.append('date', date);
        extraDetails.forEach(function (detail) {
            formData.append('extra_details[]', detail);
        });

        fetch('upload_exam_details.php', {
            method: 'POST',
            body: formData
        })
        .then(function (response) {
           
            console.log('Exam details uploaded successfully.');
        
        })
        .catch(function (error) {
            console.error('Error uploading exam details:', error);
        });
    });
    function addExamDataToFirestore(examData) {
        const colRef = collection(db, 'exams'); 
        addDoc(colRef, examData)
          .then(() => {
            console.log("Exam details added to Firestore!");
            
          })
          .catch((error) => {
            console.error("Error adding exam details to Firestore:", error);
        
          });
      }
 