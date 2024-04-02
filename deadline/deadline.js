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
