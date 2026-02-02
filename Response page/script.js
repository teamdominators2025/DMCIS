// Toggle Feedback Sidebar
function toggleFeedback() { 
    document.getElementById('feedback-sidebar').classList.toggle('translate-x-full'); 
}

// Handle Feedback Submission (Modal and Sparkles)
function handleFeedback() {
    toggleFeedback();
    const modal = document.getElementById('success-modal');
    const content = document.getElementById('modal-content');
    
    modal.classList.remove('hidden');
    setTimeout(() => { 
        modal.classList.add('opacity-100'); 
        content.classList.replace('scale-90', 'scale-100');
    }, 10);
    
    // Check if form exists before resetting
    const form = document.getElementById('feedback-form');
    if (form) form.reset();
    
    startSparkles();
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('success-modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('opacity-100');
    content.classList.replace('scale-100', 'scale-90');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Sparkle Animation Generator
function startSparkles() {
    const container = document.getElementById('sparkle-overlay');
    for(let i = 0; i < 40; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = Math.random() * 100 + 'vw';
        spark.style.width = Math.random() * 6 + 2 + 'px';
        spark.style.height = spark.style.width;
        spark.style.animationDelay = Math.random() * 1.5 + 's';
        container.appendChild(spark);
    }
    // Cleanup sparkles after animation finishes
    setTimeout(() => container.innerHTML = '', 4500);
}

// Language Switching Logic
let currentLang = 'en';
function switchLang() {
    const ens = document.querySelectorAll('.en');
    const his = document.querySelectorAll('.hi');
    const label = document.getElementById('lang-label');
    
    if(currentLang === 'en') {
        ens.forEach(e => e.classList.add('hidden-lang'));
        his.forEach(e => e.classList.remove('hidden-lang'));
        label.innerText = "English"; 
        currentLang = 'hi';
    } else {
        his.forEach(e => e.classList.add('hidden-lang'));
        ens.forEach(e => e.classList.remove('hidden-lang'));
        label.innerText = "Hindi"; 
        currentLang = 'en';
    }
}

// Initialize Lucide Icons on Load
window.onload = () => { 
    if (typeof lucide !== 'undefined') {
        lucide.createIcons(); 
    }
};