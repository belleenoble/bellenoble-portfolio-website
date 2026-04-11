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
        steps: [
            'Designed and built a full-stack architecture using React/Vite and FastAPI',
            'Structured the backend into modular routes and services',
            'Implemented CSV file upload and manual transation input with Pydantic data validation',
            'Built a data analysis engine to calculate spending summaries, category breakdown, and monthly trends',
            'Developed an anomly detection algorithm to lag unusual spending patterns',
            'Working on adding visualizations for spending breakdowns by category and month',
            'Working more on the UI of the entire web application'
        ],
        photos: ['UI dashboard', 'Expense Input Form', 'Charts View', 'API structure'],
        challenges:[
            {title:'State Management', text:'I struggled with keeping the frontend in sync with the backend data, while this was my first project working with a full-stack pipeline.'},
            {title: 'API Design', text: 'Designing clean REST endpoints that would be easy to consume from the frontend took more experimental coding  and research than expected.'}
        ],
        outcome: 'A web application that I plan to use to track my own spending. End-to-end solo full-stack developement build.',
        tags: ['Python', 'FastAPI', 'React', 'JavaScript', 'Git']
    },
    {
        num: '02 — Computer Vision',
        title: 'ASL Hand Sign Translator',
        role: 'Solo project',
        timeline: '2024',
        stack: 'Python · OpenCV · MediaPipe · NumPy',
        body: 'Built a real-time American Sign Language hand sign recognition system using Python and OpenCV. The app uses MediaPipe hand landmark detection to track 21 keypoints on the hand per frame, then maps those positions to ASL letters and displays the translation live on screen. This project taught me how computer vision pipelines actually work end-to-end.',
        steps: [
            'Set up MediaPipe hand landmark dectection pipeline',
            'Captured and normalized 21 hand keypoints coordinates per frame',
            '[IN PROGRESS] Built classifier to map keypoint positions to ASL letters',
            'Added real-time overlay displaying the detected letter on the video feed'
        ],
        photos: ['Live Demo', 'Hand Landmark Overlay', 'Detection Output' ,'Code Structure'],
        challenges: [
            {title: 'Similar hand shapes', text: 'There are some ASL letters that look nearly identical from one perspective, distinguishing them requires fine-tuning the keypoint thresholds, which I am still currently working on.'},
            {title: 'Learning OpenCV', text: 'I took on this project because it relates to me on a personal level, and to challenge myself with open frameworks, however learning this was drastically different from what I have been learning during my studies, so it was incredibly hard to grasp the concepts and required a lot of research.'}
        ],
        outcome: 'A real-time ASL translator that correctly identifies letters from live webcam input with intermediate accuracy under normal lighting.',

        tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy']
    },
    {
        num: '03 — Hardware',
        title: 'Audio Amplifier — PCB Design',
        role: 'Class project — CMPE 110',
        timeline: '2024',
        stack: 'LTspice · KiCad · Soldering iron · Multimeter',
        body: 'Designed a complete audio amplifier circuit from schematic to physical board. Started in LTspice — simulating the circuit and verifying gain characteristics, then moved into KiCad for PCB layout and routing. Once fabricated, I hand-soldered every component and tested with a function generator and oscilloscope. My first full hardware project and the one that got me hooked on the hardware side of engineering.',
        steps:[
            'Designed schematic in LTspice and ran simulations to verify gain',
            'Transffered schematic to Kicad and assigned footprints to all components',
            '[IN PROGRESS] Currently working on PCB layout by placing components and rounting traces',
            '[IN PROGRESS] Plan to send board for fabrication, hand-solder components, and test functionality'
        ],
        photos: ['LTSpice schematic', 'Kicad PCB Layout', 'Soldered Board', 'Test Setup'],
        challenges: [
            {title: 'PCB Trace Routing', text: 'Learning and understanding how to use Kicad to trace each routing path.'},
            {title: 'SMD Soldering', text: 'First time soldering components, currently in the process of learning how to prepare when my project gets to that point.'}
        ],
        outcome: ' Expected Outcome: A working audio amplifier PCB that produces clean amlpifie audio.',
        tags: ['LTspice', 'KiCad', 'PCB', 'Soldering', 'Hardware']
    },
    {
        num: '04 — Design & Dev',
        title: 'Computer Engineering Personal Portfolio',
        role: 'Solo — designer & developer',
        timeline: '2025',
        stack: 'HTML · CSS · JavaScript',
        body: 'Built entirely from scratch — no frameworks, no templates. Every layout decision, color choice, and interaction was made intentionally. The goal was to create something that felt personal and distinct from the typical engineering portfolio, something that shows both technical skill and personality.',
        steps:[
            'Designed the layout and color system using CSS variables',
            'Built multi-page navigation system using vanilla JavaScript',
            'Added dark mode toggle with localStorage persistence',
            'Implemented animated background and file tree case study layout'
        ],
        photos: ['Home Page', 'Projects page', 'Dark Mode,' , 'Case study View'],
        challenges: [ 
            {title: 'No Frameworks', text: 'Doing everything in vanilla JavaScript meant learning how to build the page navigation, state managemnet, and animations from scratch.'},
            {title: 'Dark Mode', text:'Getting every color to work in both light and dark mode was a struggle, because I have never worked with a system that can switch the page from light to dark mode.'}
        ],
        outcome: 'The portfolio you are looking at right now! This portfolio was built page by page from the ground up, where I activey looked at online resources, and code snippets to accuratly put together a working and interactive engineering portfolio.',
        tags: ['HTML', 'CSS', 'JavaScript', 'CSS Variables', 'localStorage']
    },
    {
        num: '05 - Systems',
        title: 'Terminal Task Manager',
        role: 'Class Project - CMPE 126',
        timeline: '2025',
        stack: 'C++ · Data Structures · Algorithms',
        body: 'Built a command-line task manager in C++ for my Data Structures and Algorithms class. Implemented core data structures from scratch to manage, sort, and retrive tasks efficently. The project deepened my understanding of how the data structures work.',
        steps:[
            'Designed the task data structure and storage model',
            'Implemented linked list and piority que from scratch in C++',
            'Built CLI interface for adding, completing, and listing tasks',
            'Added sorting and filtering by priority and due date'
        ],
        photos: [ 'Terminal Demo', 'Data Structure Diagram', ' Code Strucutre', 'Output Example'],
        challenges: [
            {title: 'Memory Management', text: 'Managing heap memory manually in C++ meant learning when to allocate and deallocate without leaks.'}
        ],
        outcome: 'A fully functional terminal task manager that runs entrely in C++ with no external libraries.',
        tags: ['C++', 'Data Structures', 'Algorithms']
    },
    {
        num: '06 - Digital Design',
        title: ' 4-bit Counter = Digital Design Lab',
        role: ' Lab Project - Digital Design',
        timeline: '2026',
        stack: 'Verilog · Digital Logic · Vivado',
        body: 'Designed and implemented a 4-bit counter part of my Digital Design lab. Covers the full design flow from logic design to simulation and implementation. Reinforced my understanding od sequential logic, flip-flops, and how digital circuits are built from the ground up.',
        steps:[
            'Designed the counter logic using flip=flops and sequential logic',
            'Wrote Verilog code for the 4-bit counter module',
            'Simulated behavior in a testbench to verify correct counting'
        ],
        photos:['Verilog code', 'Simulation Waveform', 'Sequential Logic Diagram', 'Testbench Code'],
        challenges: [
            {title: 'Testbench Writing', text: 'Writing a thorough testbench that verified all edge cases.'}
        ],
        outcome: ' A working 4-bit counter implemented in Verilog.',
        tags: ['Verilog', 'Digital Logic', 'Vivado']
    }

];

//When projects are clicked from PROJECT SHOWCASE SWITCH TO THE PROJECTS PAGE DETAILS
function goToProject(i) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById('page-projects').classList.add('active');

    //updating nav active state
    document.querySelectorAll('.nav-link').forEach(function(link){
        link.classList.remove('active');
    });
    document.querySelector('[data-page="page-projects"]').classList.add('active');
    openProject(i);
}
//When the card is clicked i = index (INSIDE PAGE)

function openProject(i) {
    const p = projects[i];

    document.getElementById('detail-num').textContent = p.num;
    document.getElementById('detail-title').textContent = p.title;
    document.getElementById('detail-body').textContent = p.body;

    //initial image
    const heroEl = document.getElementById('detail-hero');
    heroEl.innerHTML = '<span class="detail-hero-placeholder">photo coming soon</span>';

    //process / steps

    const stepsEl = document.getElementById('detail-steps');
    stepsEl.innerHTML='';
    p.steps.forEach(function(step, index) {
        const div = document.createElement('div');
        div.className = 'detail-step';
        div.innerHTML= `
            <div class="detail-step-num">0${index+1}</div>
            <div class="detail-step-text">${step}</div>
        `;
        stepsEl.appendChild(div);
    })

        // photo placeholders
    const photosEl = document.getElementById('detail-photos');
    photosEl.innerHTML = '';
    p.photos.forEach(function(label) {
        const div = document.createElement('div');
        div.className = 'detail-photo-slot';
        div.innerHTML = `<div class="detail-photo-label">${label}</div>`;
        photosEl.appendChild(div);
    });

    // challenges
    const challengesEl = document.getElementById('detail-challenges');
    challengesEl.innerHTML = '';
    p.challenges.forEach(function(c) {
        const div = document.createElement('div');
        div.className = 'detail-challenge';
        div.innerHTML = `
            <div class="detail-challenge-title">${c.title}</div>
            <div class="detail-challenge-text">${c.text}</div>
        `;
        challengesEl.appendChild(div);
    });

    // outcome
    document.getElementById('detail-outcome').innerHTML = `
        <div class="detail-outcome-box">
            <div class="detail-outcome-text">${p.outcome}</div>
        </div>
    `;

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
    document.getElementById('project-detail').classList.add('open');
    document.getElementById('page-projects').scrollTop=0;
}

function closeProject() {
    document.getElementById('project-detail').classList.remove('open');
    document.getElementById('projects-grid').classList.remove('hidden');
}
