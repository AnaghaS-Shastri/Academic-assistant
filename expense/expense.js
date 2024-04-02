document.addEventListener('DOMContentLoaded', function () {
    var expenseForm = document.getElementById('expense-form');
    var expensesList = document.getElementById('expenses-list');
    var totalExpenses = document.getElementById('total-expenses');

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var expenseType = document.getElementById('expense-type').value;
        var expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        addExpense(expenseType, expenseAmount);
        expenseForm.reset();
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

        // Update total expenses
        var total = calculateTotalExpenses();
        totalExpenses.textContent = 'Total Expenses: ₹' + total.toFixed(2);
    }

    function calculateTotalExpenses() {
        var total = 0;
        var expenseItems = document.querySelectorAll('.expense-item');
        expenseItems.forEach(function (item) {
            var amountText = item.querySelector('.expense-amount').textContent;
            total += parseFloat(amountText.substring(1));
        });
        return total;
    }
});
