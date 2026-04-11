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

//Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const targetPageId = this.getAttribute('data-page');
            
            if (targetPageId) {
                // Remove active class from all nav links
                navLinks.forEach(function(navLink) {
                    navLink.classList.remove('active');
                });
                
                // Add active class to clicked nav link
                this.classList.add('active');
                
                // Hide all pages
                pages.forEach(function(page) {
                    page.classList.remove('active');
                });
                
                // Show target page
                const targetPage = document.getElementById(targetPageId);
                if (targetPage) {
                    targetPage.classList.add('active');
                }

                document.getElementById('projects-grid').classList.remove('hidden');
                document.getElementById('project-detail').classList.remove('open');
                
                console.log('Navigated to:', targetPageId);
            }
        });
    });
});

//Project Data (all the info) updating the description should be here not in the html 
const projects = [
     {
        num: '01 — Full Stack',
        title: 'Full-Stack Finance Insight Analyzer',
        role: 'Solo — designed, built, deployed',
        timeline: '2025',
        stack: 'Python · FastAPI · HTML · CSS · JS · React · Git',
        body: 'Built a full-stack web application for tracking and visualizing travel expenses. Users can log spending by category, date, and location — the app then generates charts and breakdowns to show where money actually went. I built everything end-to-end: the frontend UI, the REST API backend, and the data visualization layer.',
        tags: ['Python', 'FastAPI', 'React', 'JavaScript', 'Git']
    },
    {
        num: '02 — Computer Vision',
        title: 'ASL Hand Sign Translator',
        role: 'Solo project',
        timeline: '2024',
        stack: 'Python · OpenCV · MediaPipe · NumPy',
        body: 'Built a real-time American Sign Language hand sign recognition system using Python and OpenCV. The app uses MediaPipe hand landmark detection to track 21 keypoints on the hand per frame, then maps those positions to ASL letters and displays the translation live on screen. This project taught me how computer vision pipelines actually work end-to-end.',
        tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy']
    },
    {
        num: '03 — Hardware',
        title: 'Audio Amplifier — PCB Design',
        role: 'Class project — CMPE 110',
        timeline: '2024',
        stack: 'LTspice · KiCad · Soldering iron · Multimeter',
        body: 'Designed a complete audio amplifier circuit from schematic to physical board. Started in LTspice — simulating the circuit and verifying gain characteristics — then moved into KiCad for PCB layout and routing. Once fabricated, I hand-soldered every component and tested with a function generator and oscilloscope. My first full hardware project and the one that got me hooked on the hardware side of engineering.',
        tags: ['LTspice', 'KiCad', 'PCB', 'Soldering', 'Hardware']
    },
    {
        num: '04 — Design & Dev',
        title: 'This Portfolio',
        role: 'Solo — designer & developer',
        timeline: '2025',
        stack: 'HTML · CSS · JavaScript',
        body: 'Built entirely from scratch — no frameworks, no templates. Every layout decision, color choice, and interaction was made intentionally. The goal was to create something that felt personal and distinct from the typical engineering portfolio, something that shows both technical skill and personality.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Design']
    }
];

//When the card is clicked i = index

function openProject(i) {
    const p = projects[i];

    document.getElementById('detail-num').textContent = p.num;
    document.getElementById('detail-title').textContent = p.title;
    document.getElementById('detail-role').textContent = p.role;
    document.getElementById('detail-timeline').textContent = p.timeline;
    document.getElementById('detail-stack').textContent = p.stack;
    document.getElementById('detail-body').textContent = p.body;

    //builds tags
    const tagsEl = document.getElementById('detail-tags');
    tagsEl.innerHTML =''; //should clear old tags
    p.tags.forEach(function(tag) {
        const span = document.createElement('span');
        span.className='tag';
        span.textContent =tag;
        tagsEl.appendChild(span);
    });

    document.getElementById('projects-grid').classList.add('hidden');
    document.getElementById('projject-detail').classList.add('open');s
    document.getElementById('page-projects').scrollTop=0;
}

function closeProject() {
    document.getElementById('project-detail').classList.remove('open');
    document.getElementById('projects-grid').classList.remove('hidden');
}