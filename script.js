//Dark/Light Mode Toggle Button

const toggleBtn = document.getElementById('theme-toggle'); //grabs toggle button from HTML by its id I set in the index.html

console.log('Toggle button found:', toggleBtn); // Debug: check if button is found

if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
        console.log('Button clicked!'); // Debug: check if click is registered
        
        document.body.classList.toggle('dark');
        console.log('Body classes:', document.body.classList); // Debug: check class changes

        //saving the users perference to localStorage
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            console.log('Saved theme: dark'); // Debug
        } else {
            localStorage.setItem('theme', 'light');
            console.log('Saved theme: light'); // Debug
        }
    });
} else {
    console.error('Toggle button not found!');
}

const savedTheme = localStorage.getItem('theme');
console.log('Saved theme loaded:', savedTheme); // Debug: check saved theme

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    console.log('Applied dark theme from storage'); // Debug
}