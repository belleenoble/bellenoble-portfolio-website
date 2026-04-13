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

                // Re-align timeline dots when About page is shown
                if (targetPageId === 'page-about') {
                    setTimeout(alignTimeline, 0);
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

        heroImage: 'images/hero-finance.png',
        photoFiles: [
            'images/finance-analyzer-dashboard-ui.png',
            'images/csv.test.png',
            null, // Charts photo coming soon
            'images/api-structure.png.png'
        ],
        photos: ['UI dashboard', 'Expense Input Form', 'Charts View - Photo Coming Soon', 'API structure'],
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
            'Transffered schematic to KiCad and assigned footprints to all components',
            '[IN PROGRESS] Currently working on PCB layout by placing components and rounting traces',
            '[IN PROGRESS] Plan to send board for fabrication, hand-solder components, and test functionality'
        ],
        heroImage: 'images/audio-amplifier-kicad-schem.png',
        photoFiles: [
            'images/audio-amplifier-kicad-schem.png',
            'images/pcb.png',
            null, // Soldered Board photo coming soon
            null, // Test Setup photo coming soon
        ],
        photos: ['KiCad schematic', 'KiCad PCB Layout', 'Soldered Board - Coming Soon', 'Test Setup - Coming Soon'],
        challenges: [
            {title: 'PCB Trace Routing', text: 'Learning and understanding how to use KiCad to trace each routing path.'},
            {title: 'SMD Soldering', text: 'First time soldering components, currently in the process of learning how to prepare when my project gets to that point.'}
        ],
        outcome: ' Expected Outcome: A working audio amplifier PCB that produces clean amplified audio.',
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
        heroImage: 'images/port-UI .png',
        photoFiles: [
            'images/port-UI .png',
            'images/project-page.png',
            'images/dark-mode.png',
            'images/case-study.png'
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
        heroImage: 'images/task-structure.png',
        photoFiles: [
            'images/task-structure.png',
            'images/terminal demo.png',
            'images/data-structure.png',
            'images/output.png'
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
    if(p.heroImage) {
        heroEl.innerHTML=`<img src="${p.heroImage}"
            alt="${p.title}"
            style="width:100%; height:100%; object-fit:cover;">`;
    } else {
        heroEl.innerHTML = '<span class="detail-hero-placeholder">photo coming soon</span>'; 
    }   

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
    p.photos.forEach(function(label, index) {
        const div = document.createElement('div');
        div.className = 'detail-photo-slot';
        
        //checking if real photo in this slot
        if (p.photoFiles && p.photoFiles[index]) {
            div.innerHTML = `<img src="${p.photoFiles[index]}" 
            alt="${label}" 
            style="width:100%; height:100%; object-fit:cover;">`;

            /*clicking the slot opens the lightbox*/
            div.onclick = function() {
                openLightbox(p.photoFiles[index], label);
            }
        } else {
            div.innerHTML = `<div class="detail-photo-label">${label}</div>`;
        }
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

//for lightbox only opens when the photo is clicked
function openLightbox(src, caption) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-caption').textContent = caption;
    document.getElementById('lightbox').classList.add('open');

    //esc can make it close
    document.addEventListener('keydown',function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.getElementById('lightbox-img').src = '';
}

//travel carousel
const carouselPlaces = [
    {city: 'Tokyo, Japan', img: 'images/travel/tokyo.jpg'},
    {city: 'Osaka, Japan', img: 'images/travel/osaka.jpg'},
    {city: 'Kyoto, Japan', img: 'images/travel/kyoto.jpg'},
    {city: 'Okinawa, Japan', img: 'images/travel/okinawa.jpg'},
    {city: 'Iwakuni, Japan', img: 'images/travel/iwakuni.jpg'},
    {city: 'Izu, Japan', img: 'images/travel/izu.jpg'},
    {city: 'Jeju Island, South Korea', img: 'images/travel/jeju.jpg'},
    {city: 'Ensenada, Mexico', img: 'images/travel/ensenada.jpg'},
    {city: 'San Franscisco, CA', img: 'images/travel/sf.jpg'},
    {city: 'Los Angeles, CA', img: 'images/travel/la.jpg'},
    {city: 'Las Vegas, NV', img: 'images/travel/ls.jpg'},
    {city: 'Orlando, FL', img: 'images/travel/orlando.jpg'},
    {city: 'Miami, FL', img: 'images/travel/miami.jpg'},
    {city: 'Catalina Island, CA', img: 'images/travel/ci.jpg'},
];

let carouselIndex =0;
function carouselUpdate() {
    const place = carouselPlaces[carouselIndex];

    //try load city name
    document.getElementById('carousel-city').textContent=place.city + "✦";
    document.getElementById('carousel-placeholder').textContent = place.city;

    // tryto load image
    const slide = document.getElementById('carousel-slide');
    const existingImg = slide.querySelector('img');
    if (existingImg) existingImg.remove();

    const img = document.createElement('img');
    img.src = place.img;
    img.alt = place.city;
    img.onerror = function() { this.remove(); };
    slide.appendChild(img);

    // update count
    document.getElementById('carousel-count').textContent =
        (carouselIndex + 1) + ' / ' + carouselPlaces.length;

    //update dots
    const dotsEl = document.getElementById('carousel-dots');
    dotsEl.innerHTML = '';
    carouselPlaces.forEach(function(_, i) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === carouselIndex ? ' active' : '');
        dotsEl.appendChild(dot);
    });
}

function carouselNext() {
    carouselIndex = (carouselIndex + 1) % carouselPlaces.length;
    carouselUpdate();
}

function carouselPrev() {
    carouselIndex = (carouselIndex - 1 + carouselPlaces.length) % carouselPlaces.length;
    carouselUpdate();
}

// initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    carouselUpdate();
});

//travel lightbox

function openTravelLightbox() {
    updateTravelLightbox();
    document.getElementById('travel-lightbox').classList.add('open');

    // keyboard navigation
    document.addEventListener('keydown', travelLightboxKeydown);
}

function closeTravelLightbox() {
    document.getElementById('travel-lightbox').classList.remove('open');
    document.removeEventListener('keydown', travelLightboxKeydown);
}

function travelLightboxKeydown(e) {
    if (e.key === 'Escape') closeTravelLightbox();
    if (e.key === 'ArrowRight') travelLightboxNext();
    if (e.key === 'ArrowLeft') travelLightboxPrev();
}

function travelLightboxNext() {
    carouselIndex = (carouselIndex + 1) % carouselPlaces.length;
    carouselUpdate();         // keep carousel in sync
    updateTravelLightbox();
}

function travelLightboxPrev() {
    carouselIndex = (carouselIndex - 1 + carouselPlaces.length) % carouselPlaces.length;
    carouselUpdate();         // keep carousel in sync
    updateTravelLightbox();
}

function updateTravelLightbox() {
    const place = carouselPlaces[carouselIndex];

    // city name
    document.getElementById('tlb-city').textContent = place.city + ' ✦';

    // count
    document.getElementById('tlb-count').textContent =
        (carouselIndex + 1) + ' / ' + carouselPlaces.length;

    // placeholder text
    document.getElementById('tlb-placeholder').textContent = place.city;

    // try to load image
    const imgEl = document.getElementById('tlb-img');
    imgEl.classList.remove('loaded');
    imgEl.src = '';

    const testImg = new Image();
    testImg.onload = function() {
        imgEl.src = place.img;
        imgEl.classList.add('loaded');
        document.getElementById('tlb-placeholder').style.display = 'none';
    };
    testImg.onerror = function() {
        imgEl.classList.remove('loaded');
        document.getElementById('tlb-placeholder').style.display = 'flex';
    };
    testImg.src = place.img;
}

// close if clicking outside the content
document.getElementById('travel-lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeTravelLightbox();
});