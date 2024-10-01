document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
