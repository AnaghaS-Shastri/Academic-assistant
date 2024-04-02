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
        var subject = document.getElementById('subject').value;
        var date = document.getElementById('date').value;
        var extraDetailsFields = document.querySelectorAll('.extra-details-field');
        var extraDetails = [];

        // Extract values from extra details fields
        extraDetailsFields.forEach(function (field) {
            extraDetails.push(field.value);
        });

        // Example of sending data to the server using fetch API
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
            // Handle response from the server
            console.log('Exam details uploaded successfully.');
            // You can redirect the user to another page or show a success message here
        })
        .catch(function (error) {
            console.error('Error uploading exam details:', error);
            // You can show an error message to the user here
        });
    });
});
