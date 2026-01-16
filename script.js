// ============================================
// ElPro Scripts - Main JavaScript
// Security & Functionality
// ============================================

'use strict';

// ============================================
// Script Data Configuration
// ============================================

const scriptsData = {
    1: {
        title: "Break a Lucky Block",
        gameId: "124311897657957",
        gameUrl: "https://www.roblox.com/es/games/124311897657957/Break-a-Lucky-Block",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/660d469d6b59e9203d285305b6dda424/raw/b09499d5c13d279c766a38027e864b7dbd5aa8e1/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/break-a-lucky-block-key-generator",
        badges: ["NEWEST", "BETA", "KEY REQUIRED", "PC TESTED"],
        badgeClasses: ["badge-new", "badge-beta", "badge-key", "badge-pc"],
        description: `Key Features (BETA):

• Fully underground AutoFarm (completely invisible from surface)
• Noclip + safety platform to prevent falling
• Automatic stuck detection & cycle reset
• Target specific Lucky Block type or random (All)
• Super fast auto-collection of drops (E spam + proximity trigger)
• Stealth-oriented (mostly works below ground)
• Clean Rayfield UI
• Emergency Panic Key (default: P)
• Useful teleports (Sell, Buy Pickaxe, Trader, Fuse Machine, etc)
• Key system via work.ink (easy & fast)`,
        video: null,
        thumbImage: "images/game1-thumb.png",
        previewImage: "images/script1-preview.png"
    },
    2: {
        title: "Animal Simulator",
        gameId: "5712833750",
        gameUrl: "https://www.roblox.com/es/games/5712833750/Animal-Simulator",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/1e39745e7142c4980fbf34792a03c7c2/raw/98f59e9aad6f9a01154ac21bc7fca812c93c96b5/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/animal-simulator-token-generator",
        badges: ["UPDATED", "CHRISTMAS 🎄", "KEY REQUIRED", "PC TESTED"],
        badgeClasses: ["badge-updated", "badge-christmas", "badge-key", "badge-pc"],
        description: `Animal Simulator Christmas Autofarm 2025/2026
🎄 Rayfield GUI - Updated Jan 2026

✨ FEATURES:
• Auto Coins
• Egg Farm TPs
• 5k Dummy EXP Farm
• Christmas Mission TPs (1-50 Toys/Houses)
• Boss TPs
• Noclip
• Hitbox Expander (Players/Bosses)
• Auto Q Spam

✅ Works: All executors should work. If not, just report in comments.`,
        video: "https://www.youtube.com/watch?v=ZzPSGZT5ayI",
        thumbImage: "images/game2-thumb.png",
        previewImage: "images/script2-preview.png"
    },
    3: {
        title: "Uma Racing",
        gameId: "94101948530988",
        gameUrl: "https://www.roblox.com/es/games/94101948530988/Uma-Racing",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/827c89bc204b31aa8efb77dac8e7d315/raw/330a5f67d98310a004cf322e46346ee8fcb3a1ce/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/key-system",
        badges: ["SIMPLE", "KEY REQUIRED", "PC TESTED"],
        badgeClasses: ["badge-simple", "badge-key", "badge-pc"],
        description: `Uma Racing - Infinite Stamina Script

• Infinite Stamina - Never run out of energy!

✅ Works on Xeno and Solara
✅ All executors should work`,
        video: null,
        thumbImage: "images/game3-thumb.png",
        previewImage: "images/script3-preview.png"
    }
};

let currentScriptCode = '';

// ============================================
// Utility Functions
// ============================================

function isValidURL(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
}

// ============================================
// Cursor Glow Effect
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.querySelector('.cursor-glow');
    
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    }
});

// ============================================
// Event Delegation for Modal Buttons
// ============================================

// Add click event listener to document (works even before DOMContentLoaded)
document.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.view-script-btn');
    if (viewBtn) {
        const scriptId = viewBtn.dataset.scriptId;
        console.log('View Script clicked:', scriptId);
        if (scriptId) {
            const id = parseInt(scriptId, 10);
            console.log('Parsed ID:', id, 'Valid:', !isNaN(id) && id in scriptsData);
            if (!isNaN(id) && id in scriptsData) {
                e.preventDefault();
                e.stopPropagation();
                openModal(id);
                return;
            }
        }
    }
    
    // Handle modal close button
    const closeBtn = e.target.closest('.modal-close');
    if (closeBtn) {
        console.log('Close modal clicked');
        e.preventDefault();
        e.stopPropagation();
        closeModal();
        return;
    }
    
    // Handle copy button
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
        console.log('Copy script clicked');
        e.preventDefault();
        e.stopPropagation();
        copyScript(copyBtn);
        return;
    }
}, true); // Use capture phase for reliability

// ============================================
// Modal Functions
// ============================================

function openModal(scriptId) {
     // Validate scriptId is a number
     if (!Number.isInteger(scriptId) || !scriptsData[scriptId]) return;
     
     const data = scriptsData[scriptId];
     const overlay = document.getElementById('modalOverlay');
    
    // Set modal content using textContent to prevent XSS injection
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalScript = document.getElementById('modalScript');
    
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalImage) {
        modalImage.src = data.thumbImage;
        modalImage.alt = data.title;
    }
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalScript) modalScript.textContent = data.script;
    
    currentScriptCode = data.script;
    
    // Set badges - using textContent to prevent XSS
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = '';
    data.badges.forEach((badge, index) => {
        const span = document.createElement('span');
        span.className = `badge ${data.badgeClasses[index]}`;
        span.textContent = badge; // Safe: textContent doesn't parse HTML
        badgesContainer.appendChild(span);
    });
    
    // Set action buttons with proper URLs - validate URLs first
    const keyBtn = document.getElementById('keySystemBtn');
    const gameLink = document.getElementById('gameLink');
    
    if (isValidURL(data.keySystem) && isValidURL(data.gameUrl)) {
        keyBtn.href = data.keySystem;
        keyBtn.onclick = (e) => {
            e.preventDefault();
            window.open(data.keySystem, '_blank', 'noopener,noreferrer');
        };
        
        gameLink.href = data.gameUrl;
        gameLink.onclick = (e) => {
            e.preventDefault();
            window.open(data.gameUrl, '_blank', 'noopener,noreferrer');
        };
    }
    
    // Set video if available
    const videoSection = document.getElementById('modalVideo');
    const videoLink = document.getElementById('videoLink');
    
    if (data.video && isValidURL(data.video)) {
        videoSection.style.display = 'block';
        videoLink.href = data.video;
    } else {
        videoSection.style.display = 'none';
    }
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click or escape
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modalOverlay');
    
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// Copy Script Function
// ============================================

async function copyScript(button) {
     // Use the button passed from event listener, or find it
     const copyBtn = button || document.querySelector('.modal .copy-btn');
     if (!copyBtn) return;
     
     try {
         await navigator.clipboard.writeText(currentScriptCode);
         showCopySuccess(copyBtn);
     } catch {
         // Fallback - use safer method
         const textArea = document.createElement('textarea');
         textArea.value = currentScriptCode;
         // Use safe inline styles with proper escaping
         textArea.style.position = 'fixed';
         textArea.style.left = '-9999px';
         textArea.setAttribute('aria-hidden', 'true');
         document.body.appendChild(textArea);
         textArea.select();
         try {
             document.execCommand('copy');
             showCopySuccess(copyBtn);
         } catch {
             if (copyBtn.querySelector('span')) {
                 copyBtn.querySelector('span').textContent = 'Error';
             }
         }
         document.body.removeChild(textArea);
     }
 }

function showCopySuccess(btn) {
    btn.classList.add('copied');
    btn.querySelector('span').textContent = 'Copied!';
    setTimeout(() => {
        btn.classList.remove('copied');
        btn.querySelector('span').textContent = 'Copy';
    }, 2000);
}

// ============================================
// Smooth Scroll (only for internal anchors)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
             const href = this.getAttribute('href');
             // Only handle internal anchors that start with #
             if (href && href.startsWith('#') && href.length > 1) {
                 e.preventDefault();
                 const targetId = href.substring(1);
                 // Sanitize target ID to prevent XSS
                 if (/^[a-zA-Z0-9_-]+$/.test(targetId)) {
                     const target = document.getElementById(targetId);
                     if (target) {
                         target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }
                 }
             }
         });
     });
});

// ============================================
// Scroll Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.script-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
});

// ============================================
// Navbar Effects
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
});

// ============================================
// Particles Background
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        particles = [];
        const count = Math.min(50, Math.floor(window.innerWidth / 30));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
            ctx.fill();
        });
        
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 150)})`;
                    ctx.stroke();
                }
            });
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    resize();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
});

// ============================================
// Card Tilt Effect
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.script-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
});

// ============================================
// Console Message
// ============================================

console.log('%c⚡ ElPro Scripts', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cPremium Roblox Scripts Collection', 'color: #888; font-size: 14px;');

// Fallback: attach direct click listeners to view buttons in case delegation fails
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.view-script-btn').forEach(btn => {
        // avoid adding duplicate listeners
        if (btn.__hasViewListener) return;
        btn.__hasViewListener = true;
        btn.addEventListener('click', (e) => {
            const scriptId = btn.dataset.scriptId;
            if (!scriptId) return;
            const id = parseInt(scriptId, 10);
            if (isNaN(id) || !(id in scriptsData)) return;
            e.preventDefault();
            openModal(id);
        });
    });
});

// Try to relocate / reduce z-index of Vercel feedback widget if it is injected and covers the page
(function adjustVercelFeedback(){
    let attempts = 0;
    const maxAttempts = 10;
    const tryAdjust = () => {
        const vf = document.querySelector('vercel-live-feedback');
        if (vf) {
            // Move to bottom-right and lower z-index so it doesn't sit on top of content
            vf.style.position = 'fixed';
            vf.style.top = '';
            vf.style.left = '';
            vf.style.bottom = '12px';
            vf.style.right = '12px';
            vf.style.zIndex = '1000';
            vf.style.pointerEvents = 'auto';
            console.log('Adjusted vercel-live-feedback position to bottom-right');
            clearInterval(interval);
        }
        attempts++;
        if (attempts >= maxAttempts) clearInterval(interval);
    };
    const interval = setInterval(tryAdjust, 500);
    tryAdjust();
})();

// One-time diagnostic to see if any `.view-script-btn` is being covered by another element
(function runOneTimeCoverCheck(){
    let checked = false;
    document.addEventListener('click', (e) => {
        if (checked) return;
        checked = true;
        const buttons = document.querySelectorAll('.view-script-btn');
        buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) return;
            const topEl = document.elementFromPoint(x, y);
            if (topEl && !btn.contains(topEl)) {
                console.warn('A `.view-script-btn` may be covered by:', topEl, '\nButton element:', btn);
            }
        });
    }, { once: true, capture: true });
})();
