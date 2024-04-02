document.addEventListener('DOMContentLoaded', function () {
    var coursesList = document.getElementById('courses-list');
    var overallAttendance = document.getElementById('overall-attendance');

    var courses = [
        { name: 'Mathematics' },
        { name: 'POE' },
        { name: 'PPS' },
        {name: 'mechanics'},
        { name: 'DTI'}
    ];

    // Initialize courses
    courses.forEach(function (course) {
        var courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = '<span class="course-name">' + course.name + '</span>';
        var dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('date-input');
        courseItem.appendChild(dateInput);
        var btnGroup = document.createElement('div');
        btnGroup.classList.add('btn-group');
        var presentBtn = document.createElement('button');
        presentBtn.textContent = 'Present';
        presentBtn.classList.add('btn', 'btn-present');
        presentBtn.addEventListener('click', function () {
            markAttendance(course.name, dateInput.value, true);
        });
        btnGroup.appendChild(presentBtn);
        var absentBtn = document.createElement('button');
        absentBtn.textContent = 'Absent';
        absentBtn.classList.add('btn', 'btn-absent');
        absentBtn.addEventListener('click', function () {
            markAttendance(course.name, dateInput.value, false);
        });
        btnGroup.appendChild(absentBtn);
        courseItem.appendChild(btnGroup);
        coursesList.appendChild(courseItem);
    });

    function markAttendance(courseName, date, isPresent) {
        // Example: You can send an AJAX request to the server to mark attendance for the given course
        console.log('Attendance marked for:', courseName, ' - ', date, ' - ', isPresent ? 'Present' : 'Absent');
        // You can update the UI to reflect the marked attendance status

        // Calculate overall attendance percentage
        var totalCourses = courses.length;
        var presentCourses = courses.filter(function (course) {
            return course.attendance;
        }).length;
        var attendancePercentage = (presentCourses / totalCourses) * 100;
        overallAttendance.textContent = 'Overall Attendance: ' + attendancePercentage.toFixed(2) + '%';
    }
});
