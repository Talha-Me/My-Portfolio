/**
 * Abu Talha Akash - Engineering Portfolio
 * Interactive Mechanics & Case Study Engine
 * (Red & White Glassmorphic Cinematic Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initMobileMenu();
    initBackToTop();
    initPortfolioFilters();
    initCaseStudyModal();
    initWhatsAppForm();
    initCopyEmail();
    initScrollRevealFallback();
    initInteractiveTilt();
});

/* ==========================================================================
   1. Dynamic Typing Effect (Vanilla implementation or Typed.js)
   ========================================================================== */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-hero');
    if (!typingElement) return;

    const strings = [
        "Full-Stack Systems Architect",
        "Owner, Founder & CEO @ Talhabyte IT",
        "IT Officer @ UKA Technical Institute",
        "IELTS Venue Coordinator (British Council)",
        "Real-Time Telemetry Specialist"
    ];

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    function type() {
        const currentString = strings[stringIndex];

        if (isDeleting) {
            typingElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30;
        } else {
            typingElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 70;
        }

        if (!isDeleting && charIndex === currentString.length) {
            isDeleting = true;
            typingSpeed = 2200; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            typingSpeed = 400; // Pause before typing new word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ==========================================================================
   2. Mobile Hamburger Navigation
   ========================================================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('close-drawer-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !mobileMenu) return;

    function toggleMenu(open) {
        if (open) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            document.body.classList.add('overflow-hidden');
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            document.body.classList.remove('overflow-hidden');
        }
    }

    menuBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

/* ==========================================================================
   3. Back to Top Button
   ========================================================================== */
function initBackToTop() {
    const backBtn = document.getElementById('back-to-top');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   4. Portfolio Interactive Category Filters
   ========================================================================== */
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-rose-600', 'text-white', 'shadow-md', 'border-rose-600');
                btn.classList.add('bg-white/80', 'text-slate-600', 'border-slate-200');
            });
            button.classList.add('bg-rose-600', 'text-white', 'shadow-md', 'border-rose-600');
            button.classList.remove('bg-white/80', 'text-slate-600', 'border-slate-200');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue || cardCategory.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px) scale(0.97)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

/* ==========================================================================
   5. Comprehensive Case Study Modal Engine
   ========================================================================== */
const caseStudiesData = {
    greenroute: {
        title: "GreenRoute EU",
        tagline: "A real-time, multi-modal green navigation engine and live transit intelligence platform designed to eliminate commute friction for international students and newcomers across Italy and Europe.",
        status: "LIVE PRODUCTION",
        statusColor: "emerald",
        liveUrl: "https://greenrouteeu.xyz/",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Severe Navigation Anxiety: International students face language barriers, complex Italian metro/tram systems, and unannounced schedule shifts.",
            "Transit Disruptions & Strikes: Sudden platform (Binario) shifts and local strikes (Sciopero) cause students to miss crucial exams and residency appointments.",
            "Micro-Mobility Blind Spots: Walking 15 minutes to a bikeshare station only to encounter empty docks or zero available bikes."
        ],
        solution: [
            "Door-to-Door Sidewalk & Transit Routing: Real turn-by-turn pedestrian and bike directions from dorms to supermarkets (Lidl, Conad) and university faculties.",
            "Real-Time Rail Intelligence (Italy's 'Train Koi'): Search any Italian train (Frecciarossa, Regionale) for live delay telemetry, speed, and real-time platform tracking via ViaggiaTreno.",
            "Smart Bikeshare Contingency (GBFS): Live tracking of Milan's BikeMi and Rome/Bologna RideMovi docks with backup walking routes.",
            "'Anti-Mistake Shield' for Newcomers: Real-time contextual alerts (e.g. 'Validate ticket within 3 mins', 'Tram 19 and 33 share this platform').",
            "Audio Voice Guidance: Browser-based speech synthesis for hands-free audio directions."
        ],
        stack: [
            "Frontend: React 19 & Vite 6 with high-performance chunk optimization",
            "Styling: Tailwind CSS with emerald & red ambient highlights",
            "Geospatial: Leaflet & OpenStreetMap, OSRM (Open Source Routing Machine)",
            "Live Telemetry: ViaggiaTreno / Trenitalia API Architecture & GBFS feeds",
            "Backend & CMS: MongoDB Atlas, Node.js / Vercel Serverless Functions"
        ],
        credits: "Architected & Programmed by Abu Talha Akash | Talhabyte IT"
    },
    ieltsmock: {
        title: "IELTS Mock Point",
        tagline: "A 100% free, full-featured computer-delivered IELTS exam simulation engine and preparation platform built for aspiring international students worldwide.",
        status: "LIVE PRODUCTION",
        statusColor: "rose",
        liveUrl: "https://ieltsmockpoint.com/",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Excessive Commercial Costs: Candidates pay hefty commercial fees just to practice in an official test format.",
            "Unrealistic Interfaces: Most online practice portals fail to emulate the strict timed lockdown, font hierarchy, and audio streaming of British Council test centers.",
            "Delayed Diagnostic Feedback: Candidates wait days for test scores instead of getting immediate band diagnostics."
        ],
        solution: [
            "100% Free Complete Mock Tests: Open-access simulation built directly to British Council computerized exam standards.",
            "Strict Timed Lockdown: Timed countdowns, anti-inspect sandbox, keystroke autosave, and auto-submit locks.",
            "Automated Band Scoring: Instant algorithmic band conversion (1.0 - 9.0) across Listening and Reading modules.",
            "Synchronized Audio Player: Native HTML5 Web Audio streaming with authentic international accents."
        ],
        stack: [
            "Frontend: React 19 & Next.js with zero-latency responsive exam viewports",
            "Audio Engine: HTML5 Web Audio API with synchronized passage player",
            "Backend & Database: Node.js, Express, PostgreSQL for assessment schemas",
            "Security: Anti-inspect session sandbox and TLS encrypted session state"
        ],
        credits: "Engineered by Abu Talha Akash (IT Officer & IELTS Venue Coordinator at UKA Technical Institute) | Powered by Talhabyte IT"
    },
    trainkoi: {
        title: "Trainkoi — Live Train Tracking",
        tagline: "A real-time railway transit intelligence platform delivering synchronized GPS positioning, crowdsourced telemetry, and delay estimations across Bangladesh Railway.",
        status: "LIVE PRODUCTION",
        statusColor: "rose",
        liveUrl: "https://trainkoi.com",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Unannounced Rail Delays: Millions of passengers face inconsistent railway timetable records.",
            "Platform Confusion: Commuters struggle to know which platform a train will enter or if it departed earlier junctions.",
            "Patchy Network Connections: Sluggish 3G/4G on moving trains causes traditional web pages to hang."
        ],
        solution: [
            "Real-Time Bi-Directional Telemetry: WebSocket connections broadcasting live train coordinates to concurrent clients.",
            "Crowdsourced Verification: Aggregates passenger GPS pings with station timetables to predict accurate Estimated Time of Arrival (ETA).",
            "Low-Bandwidth Optimization: Ultra-lightweight JSON packet payloads designed to stream reliably over weak mobile signals."
        ],
        stack: [
            "Frontend: React Single Page Application with optimized mobile-first UI",
            "Real-Time Streaming: Socket.io WebSocket cluster with auto-reconnection",
            "Backend & Database: Node.js, Express API with MongoDB 2dsphere geospatial indexing"
        ],
        credits: "Conceived & Architected by Abu Talha Akash | Talhabyte IT Civic Tech"
    },
    ecommerce: {
        title: "Electronics E-Commerce & Admin CMS",
        tagline: "An enterprise-grade electronics retail platform featuring an interactive customer storefront, secure checkout, and a comprehensive real-time Admin Operations Suite.",
        status: "PRODUCTION SUITE",
        statusColor: "purple",
        liveUrl: "https://github.com/Talha-Me",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Disjointed Retail Operations: Vendors juggle disconnected inventory spreadsheets, receipts, and order logs.",
            "Sluggish Page Speeds: Bloated JavaScript storefronts causing cart abandonment."
        ],
        solution: [
            "High-Performance Next.js Storefront: Sub-second page loads with server-side rendering (SSR) and dynamic image optimization.",
            "Admin Operations Suite: Real-time inventory tracking, batch product management, and sales telemetry.",
            "Role-Based Access Control (RBAC): Tiered permissions for managers, inventory handlers, and support staff."
        ],
        stack: [
            "Storefront: Next.js (App Router), React, Tailwind CSS",
            "Admin Dashboard: Next.js Admin Suite with Chart.js telemetry",
            "Backend: Node.js, Express REST API, MongoDB/PostgreSQL"
        ],
        credits: "Engineered by Abu Talha Akash | Talhabyte IT"
    },
    erp: {
        title: "Enterprise Multi-Tenant ERP & Accounting",
        tagline: "An industrial-grade enterprise resource planning core engineered for wholesale inventory, double-entry bookkeeping, and point-of-sale terminal sync.",
        status: "ACTIVE CONSTRUCTION",
        statusColor: "amber",
        liveUrl: "https://github.com/Talha-Me",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Enterprise software is expensive, rigid, and hard to scale across multiple branch warehouses.",
            "Complex regulatory accounting requirements and inventory drift across branches."
        ],
        solution: [
            "Multi-Tenant Database Isolation: Secure data partitioning for multiple independent branches.",
            "Automated Double-Entry Accounting: Real-time balance sheets, income statements, and tax audits.",
            "Background Task Queues: Celery workers processing asynchronous PDF invoices and stock depletion alerts."
        ],
        stack: [
            "Core: Python, Django, Django REST Framework",
            "Database: PostgreSQL with relational constraints",
            "Queues: Celery & Redis for asynchronous background tasks"
        ],
        credits: "Under active development by Abu Talha Akash | Talhabyte IT"
    },
    civic: {
        title: "Civic Assistance & Emergency Care Platform",
        tagline: "A 100% non-profit public welfare platform financed entirely by Talhabyte IT commercial software revenues, connecting blood donors and emergency community care.",
        status: "IN PIPELINE",
        statusColor: "emerald",
        liveUrl: "https://github.com/Talha-Me",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Emergency blood donor shortages and delayed communication during critical medical hours.",
            "Lack of centralized, free community relief coordination tools in Bangladesh."
        ],
        solution: [
            "100% Free Open Access: Zero fees or commercial advertisements.",
            "Instant Geolocation Alerts: Direct SMS & WhatsApp dispatch to matching donors in proximity.",
            "Self-Funded: Sustained entirely by surplus margins from Talhabyte IT client software."
        ],
        stack: [
            "Stack: MERN (MongoDB, Express, React, Node.js), Twilio / WhatsApp Business API",
            "Security: Verified identity checks and encrypted donor contact records"
        ],
        credits: "Humanitarian Tech Initiative by Abu Talha Akash | Talhabyte IT"
    },
    portfolio: {
        title: "Personal Developer Identity Platform",
        tagline: "The official personal engineering portfolio of Abu Talha Akash, showcasing production case studies, systems architecture, and credentials.",
        status: "LIVE PRODUCTION",
        statusColor: "rose",
        liveUrl: "https://abutalha.xyz/",
        githubUrl: "https://github.com/Talha-Me",
        problem: [
            "Generic Portfolios: Most developer sites rely on template clones without showcasing deep architectural problem-solving or social impact.",
            "Asset Latency: Heavy animations causing sluggish mobile performance."
        ],
        solution: [
            "Bespoke Glassmorphism Design: Red & white cinematic aesthetics with custom CSS micro-interactions.",
            "Curated Case Studies: Deep technical breakdowns of production systems like Trainkoi, GreenRoute EU, and IELTS Mock Point.",
            "Global Edge Deployment: Hosted on high-speed Vercel Edge CDN connected to primary domain abutalha.xyz."
        ],
        stack: [
            "Frontend: React, Tailwind CSS, Vite, HTML5 Web APIs",
            "DNS & Deployment: Vercel Global Edge Network with SSL/TLS termination"
        ],
        credits: "Solely Designed & Coded by Abu Talha Akash (abutalha.xyz)"
    }
};

function initCaseStudyModal() {
    let modal = document.getElementById('project-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'project-modal';
        modal.className = 'modal-overlay fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6';
        modal.innerHTML = `
            <div class="modal-container bg-white w-full max-w-4xl max-h-[90vh] rounded-[28px] border border-rose-100 shadow-2xl overflow-hidden flex flex-col relative">
                <!-- Header -->
                <div class="p-6 md:p-8 border-b border-rose-100 flex justify-between items-start bg-rose-50/50">
                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <span id="modal-status-badge" class="px-3 py-1 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider"></span>
                            <span class="text-xs text-rose-600 font-mono-tech font-semibold">Architectural Case Study</span>
                        </div>
                        <h2 id="modal-title" class="text-2xl md:text-3xl font-extrabold text-slate-900"></h2>
                        <p id="modal-tagline" class="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed italic max-w-2xl"></p>
                    </div>
                    <button id="modal-close-btn" class="p-2 rounded-xl bg-white border border-rose-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>
                <!-- Body (Scrollable) -->
                <div class="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-slate-700">
                    <div>
                        <h3 class="text-xs font-mono-tech uppercase font-bold text-rose-600 tracking-wider mb-2 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-rose-600"></span> The Problem (Why We Built It)
                        </h3>
                        <ul id="modal-problem" class="space-y-2 list-disc list-inside text-slate-600 pl-1 text-xs md:text-sm leading-relaxed"></ul>
                    </div>

                    <div class="pt-2">
                        <h3 class="text-xs font-mono-tech uppercase font-bold text-emerald-600 tracking-wider mb-2 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-600"></span> Engineered Solution & Key Innovations
                        </h3>
                        <ul id="modal-solution" class="space-y-2 list-disc list-inside text-slate-600 pl-1 text-xs md:text-sm leading-relaxed"></ul>
                    </div>

                    <div class="pt-2">
                        <h3 class="text-xs font-mono-tech uppercase font-bold text-slate-800 tracking-wider mb-3 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-slate-800"></span> Architectural & Technical Stack
                        </h3>
                        <div id="modal-stack" class="grid grid-cols-1 sm:grid-cols-2 gap-2"></div>
                    </div>

                    <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <p id="modal-credits" class="text-xs text-slate-500 font-mono-tech"></p>
                        <div class="flex items-center gap-2">
                            <a id="modal-live-link" href="#" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-rose-600/20 flex items-center gap-1.5">
                                <span>Visit Live System</span>
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                            </a>
                            <a id="modal-github-link" href="#" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs font-mono-tech transition-colors">
                                GitHub Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });

        document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeProjectModal();
        });
    }
}

window.openProjectModal = function(projectId) {
    const data = caseStudiesData[projectId];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    if (!modal) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-tagline').textContent = data.tagline;

    const statusBadge = document.getElementById('modal-status-badge');
    statusBadge.textContent = data.status;
    if (data.statusColor === 'emerald') {
        statusBadge.className = 'px-3 py-1 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200';
    } else if (data.statusColor === 'amber') {
        statusBadge.className = 'px-3 py-1 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200';
    } else {
        statusBadge.className = 'px-3 py-1 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200';
    }

    const problemList = document.getElementById('modal-problem');
    problemList.innerHTML = data.problem.map(p => `<li>${p}</li>`).join('');

    const solutionList = document.getElementById('modal-solution');
    solutionList.innerHTML = data.solution.map(s => `<li>${s}</li>`).join('');

    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = data.stack.map(st => `
        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-mono-tech text-slate-700">
            ${st}
        </div>
    `).join('');

    document.getElementById('modal-credits').textContent = data.credits;
    document.getElementById('modal-live-link').href = data.liveUrl;
    document.getElementById('modal-github-link').href = data.githubUrl;

    modal.classList.add('active');
    document.body.classList.add('overflow-hidden');
};

window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    }
};

/* ==========================================================================
   6. WhatsApp Direct Builder Form
   ========================================================================== */
function initWhatsAppForm() {
    const waForm = document.getElementById('whatsappDirectForm');
    if (!waForm) return;

    waForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('wa_name')?.value || '';
        const email = document.getElementById('wa_email')?.value || '';
        const projectType = document.getElementById('wa_project_type')?.value || 'Software Architecture';
        const message = document.getElementById('wa_message')?.value || '';

        const whatsappNumber = "8801516579760";
        const formattedMsg = `Hello Talha, I am ${name} (${email}).\nInquiry Type: ${projectType}\nMessage: ${message}`;
        
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
        window.open(waUrl, '_blank');
    });
}

/* ==========================================================================
   7. Copy Email to Clipboard Pill
   ========================================================================== */
function initCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
        const email = "abutalhaakash26@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span class="text-emerald-700 font-bold">Email Copied!</span>
            `;
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2500);
        });
    });
}

/* ==========================================================================
   8. Scroll Reveal Fallback (Modern Web Guidance compliance)
   ========================================================================== */
function initScrollRevealFallback() {
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(25px)';
            observer.observe(el);
        });
    }
}

/* ==========================================================================
   9. Interactive Mouse Move 3D Tilt for Hero Frame
   ========================================================================== */
function initInteractiveTilt() {
    const heroCard = document.querySelector('.hero-portrait-frame');
    if (!heroCard) return;

    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}
