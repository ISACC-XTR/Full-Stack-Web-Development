 // Simple form validation and submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && subject && message) {
                // In a real implementation, you would send this data to a server
                alert('Thank you for your message, ' + name + '! We will get back to you soon.');
                
                // Reset the form
                document.getElementById('contactForm').reset();
            } else {
                alert('Please fill in all fields.');
            }
        });