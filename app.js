document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    console.log("Form element:", form); // Debugging log

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

        if (!hasErrors) {
            //  Check if form is a valid HTMLFormElement
            if (form instanceof HTMLFormElement) {
                form.submit();
            } else {
                console.error("form is not a valid form element.");
            }
        }
    });

    function resetErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.innerHTML = '';
        });
    }
});