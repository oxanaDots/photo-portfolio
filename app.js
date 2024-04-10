   
   document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        resetErrors();

        const fields = [
            { id: 'name', validation: value => value.trim() === '', message: 'Please enter your name' },
            { id: 'email', validation: value => !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value), message: 'Please enter a valid email address' },
            { id: 'subject', validation: value => value.trim() === '', message: 'Please enter the subject' },
            { id: 'message', validation: value => value.trim() === '', message: 'Please enter your message' }
          ];


        let hasErrors = false;

        fields.forEach(field => {
            const inputField = document.getElementById(field.id);
            const value = inputField.value.trim();
            const errorElement = document.getElementById(`${field.id}Error`);

            console.log(`Input value for ${field.id}:`, value);


            if (field.validation(value)) {
                errorElement.innerHTML = field.message;
                hasErrors = true;
            }

            // Remove error message on focus
            inputField.addEventListener('focus', function() {
                errorElement.innerHTML = '';
            });
        });

       
            //  Check if form is a valid HTMLFormElement
            if (!hasErrors) {
                // Send form data via AJAX
                const formData = new FormData(form);
            
                fetch('contact.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(response => {
                    console.log('Response:', response);
                    if (response.trim() === 'success') {
                        const messageDiv = document.getElementById('messageDiv');
                        messageDiv.style.display = 'flex';
                        // messageDiv.innerHTML = 'Thank you for contacting us. We will get back to you shortly';
                        form.style.display = 'none'
                    } else {
                        console.error('Error:', response.status);
                        alert('Something went wrong. Please try again.');
                    } 
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong. Please try again.');
                });
            }
            
    });

    function resetErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.innerHTML = '';
        });
    }
});