document.addEventListener('DOMContentLoaded', function () {
    var coursesList = document.getElementById('courses-list');
    var overallAttendance = document.getElementById('overall-attendance');

    // Initialize courses with attendance records
    var courses = [
        { name: 'Mathematics', attendance: { present: 0, absent: 0 } },
        { name: 'POE', attendance: { present: 0, absent: 0 } },
        { name: 'PPS', attendance: { present: 0, absent: 0 } },
        { name: 'Mechanics', attendance: { present: 0, absent: 0 } },
        { name: 'DTI', attendance: { present: 0, absent: 0 } }
    ];

    // Initialize courses UI
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
            markAttendance(course, dateInput.value, true);
        });
        btnGroup.appendChild(presentBtn);
        var absentBtn = document.createElement('button');
        absentBtn.textContent = 'Absent';
        absentBtn.classList.add('btn', 'btn-absent');
        absentBtn.addEventListener('click', function () {
            markAttendance(course, dateInput.value, false);
        });
        btnGroup.appendChild(absentBtn);
        courseItem.appendChild(btnGroup);
        coursesList.appendChild(courseItem);
    });

    function markAttendance(course, date, isPresent) {
        // Update attendance record for the course
        {
        if (isPresent) {
            course.attendance.present++;
        } else {
            course.attendance.absent++;
        }
    }

        // Update UI to reflect attendance record for the course
        var attendanceInfo = course.name + ': Present - ' + course.attendance.present + ', Absent - ' + course.attendance.absent;
        console.log(attendanceInfo);

        // Calculate overall attendance percentage
        var totalPresent = 0;
        var totalAbsent = 0;
        courses.forEach(function (course) {
            totalPresent += course.attendance.present;
            totalAbsent += course.attendance.absent;
        });
        var totalDays = totalPresent + totalAbsent;
        var overallAttendancePercentage = (totalPresent / totalDays) * 100;
        overallAttendance.textContent = 'Overall Attendance: ' + overallAttendancePercentage.toFixed(2) + '%';
    }
});
