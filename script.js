// Form Validation and Dynamic Message
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var responseMessage = '';

    if (name && email && message) {
        responseMessage = 'Thank you for your interest, ' + name + '! We will get back to you shortly with more information.';
        this.reset();
        
        // Add new testimonial dynamically
        addTestimonial(name, message);
    } else {
        responseMessage = 'Please fill out all fields before submitting.';
    }
    
    document.getElementById('form-message').textContent = responseMessage;
});

// Function to add a new testimonial
function addTestimonial(name, message) {
    var testimonialList = document.getElementById('testimonial-list');

    var testimonial = document.createElement('div');
    testimonial.className = 'testimonial';

    var testimonialName = document.createElement('h4');
    testimonialName.textContent = name;

    var testimonialMessage = document.createElement('p');
    testimonialMessage.textContent = message;

    testimonial.appendChild(testimonialName);
    testimonial.appendChild(testimonialMessage);

    testimonialList.appendChild(testimonial);
}
