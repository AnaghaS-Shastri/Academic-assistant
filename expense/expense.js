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
    var expenseForm = document.getElementById('expense-form');
    var expensesList = document.getElementById('expenses-list');
    var totalExpenses = document.getElementById('total-expenses');

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const expenseType = document.getElementById('expense-type').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        addExpense(expenseType, expenseAmount);
        
    });

    function addExpense(type, amount) {
        var expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        var expenseType = document.createElement('span');
        expenseType.classList.add('expense-type');
        expenseType.textContent = type.charAt(0).toUpperCase() + type.slice(1) + ': ';
        var expenseAmount = document.createElement('span');
        expenseAmount.textContent = '₹' + amount.toFixed(2);
        expenseItem.appendChild(expenseType);
        expenseItem.appendChild(expenseAmount);
        expensesList.appendChild(expenseItem);


        var total = calculateTotalExpenses();
        totalExpenses.textContent = 'Total Expenses: ₹' + total.toFixed(2);
    }

    function calculateTotalExpenses() {
        var total = 0;
        var expenseItems = document.querySelectorAll('.expense-item');
        expenseItems.forEach(function (item) {
            var amountText = item.querySelector('span:nth-child(2)').textContent;
            total = total+ ( parseFloat(amountText.substring(1)));
        });
        return total;
    }

    function addExpenseToFirestore(type, amount) {
        const colRef = collection(db, 'expenses'); 
        addDoc(colRef, { type, amount })
          .then(() => {
            console.log("Expense added to Firestore!");
            for (i =0; i<4; i++)
            addExpense(type, amount); 
          })
          .catch((error) => {
            console.error("Error adding expense to Firestore:", error);
          });
    }
    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();
      
        const expenseType = document.getElementById('expense-type').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        var type= document.getElementById('expense-type').value;;
        var amount =  parseFloat(document.getElementById('expense-amount').value);;
      
        addExpenseToFirestore(type, amount ) 
          .then(() => {
            addExpense(type, amount); 
        });
    });

});
