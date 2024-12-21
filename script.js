//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {  
    const loginForm = document.getElementById('loginForm');  
    const submitButton = document.getElementById('submit');  
    const existingButton = document.getElementById('existing');  

    // Check for existing credentials in local storage  
    const storedUsername = localStorage.getItem('username');  
    const storedPassword = localStorage.getItem('password');  

    if (storedUsername && storedPassword) {  
        existingButton.style.display = 'inline-block'; // Show the existing user button  
    }  

    // Handle form submission  
    loginForm.addEventListener('submit', (e) => {  
        e.preventDefault(); // Prevent default form submission  

        const username = document.getElementById('username').value;  
        const password = document.getElementById('password').value;  
        const rememberMe = document.getElementById('checkbox').checked;  

        // Alert for login  
        alert(`Logged in as ${username}`);  

        // Store or remove credentials based on checkbox  
        if (rememberMe) {  
            localStorage.setItem('username', username);  
            localStorage.setItem('password', password);  
        } else {  
            localStorage.removeItem('username');  
            localStorage.removeItem('password');  
        }  

        // Clear the input fields  
        loginForm.reset();  
    });  

    // Handle existing user login  
    existingButton.addEventListener('click', () => {  
        alert(`Logged in as ${storedUsername}`);  
    });  
});