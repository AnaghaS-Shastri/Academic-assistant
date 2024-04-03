import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

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
    var remindersList = document.getElementById('reminders-list');
    var addReminderBtn = document.getElementById('add-reminder-btn');

    addReminderBtn.addEventListener('click', function () {
        var reminderItem = document.createElement('div');
        reminderItem.classList.add('reminder-item');
        var reminderInput = document.createElement('input');
        reminderInput.type = 'text';
        reminderInput.classList.add('reminder-input');
        reminderInput.placeholder = 'Enter your reminder...';
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            reminderItem.remove();
        });
        reminderItem.appendChild(reminderInput);
        reminderItem.appendChild(deleteBtn);
        remindersList.appendChild(reminderItem);
    });
    const remindersColRef = collection(db, 'reminders');

    function addReminder(reminderText) {
        addDoc(remindersColRef, { text: reminderText })
          .then(() => {
            console.log("Reminder added to Firestore!");
            createReminderItem(reminderText); // Create UI element for the new reminder
          })
          .catch((error) => {
            console.error("Error adding reminder:", error);
          });
      }
      addReminderBtn.addEventListener('click', function () {
        const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
  // Code that might be causing the error
});
const reminderText = document.getElementById('reminder-Text').value;
        if (reminderText) {
          addReminder(reminderText) // Call the function with reminder text
            .then(() => {
              document.getElementById('reminder-Text').value = ''; 
            })
            .catch((error) => {
                console.error('Error adding reminder:', error);// Clear input field
            });
        }

    });

      function createReminderItem(reminderText) {
        var reminderItem = document.createElement('div');
        reminderItem.classList.add('reminder-item');
        var reminderInput = document.createElement('input');
        reminderInput.type = 'text';
        reminderInput.classList.add('reminder-input');
        reminderInput.value = reminderText; // Pre-fill input with reminder text
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
          const reminderId = reminderItem.dataset.reminderId; // Assuming you store ID in a data attribute
          deleteReminder(reminderId); // Call function to delete from Firestore and UI
        });
        reminderItem.appendChild(reminderInput);
        reminderItem.appendChild(deleteBtn);
        remindersList.appendChild(reminderItem);
        reminderItem.dataset.reminderId = ""; // Placeholder for reminder ID (replace with actual ID)
      }

      function deleteReminder(reminderId) {
        deleteDoc(doc(db, "reminders", reminderId)) // Replace with actual deletion logic based on ID
          .then(() => {
            console.log("Reminder deleted from Firestore!");
            const reminderItem = document.querySelector(`.reminder-item[data-reminderId="${reminderId}"]`);
            if (reminderItem) {
              reminderItem.remove();
            }
          })
          .catch((error) => {
            console.error("Error deleting reminder:", error);
          });
      }

    
      // Optionally, listen for real-time changes in Firestore reminders
      onSnapshot(remindersColRef, (snapshot) => {
        const reminders = [];
        snapshot.docs.forEach((doc) => {
          const reminderData = doc.data();
          reminders.push(reminderData);
        });
    
        // Update UI with reminders from Firestore (consider clearing existing reminders first)
        remindersList.innerHTML = ""; // Example: Clear existing reminders before displaying new ones
        reminders.forEach((reminder) => {
          createReminderItem(reminder.text);
        });
      });
    

    // Initialize calendar
    var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Assignment Deadline',
                start: '2022-05-10',
                end: '2022-05-10'
            },
            {
                title: 'Project Submission',
                start: '2022-05-15',
                end: '2022-05-15'
            },
            {
                title: 'Exam Date',
                start: '2022-05-20',
                end: '2022-05-20'
            }
        ]
    });
    calendar.render();
});
