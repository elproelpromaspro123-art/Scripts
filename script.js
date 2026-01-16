// ============================================
// ElPro Scripts - Main JavaScript
// Security & Functionality
// ============================================

// Strict mode for security
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
        badges: ["NEWEST", "BETA", "KEY REQUIRED"],
        badgeClasses: ["badge-new", "badge-beta", "badge-key"],
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
        badges: ["UPDATED", "CHRISTMAS 🎄", "KEY REQUIRED"],
        badgeClasses: ["badge-updated", "badge-christmas", "badge-key"],
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
        badges: ["SIMPLE", "KEY REQUIRED"],
        badgeClasses: ["badge-simple", "badge-key"],
        description: `Uma Racing - Infinite Stamina Script

• Infinite Stamina - Never run out of energy!

✅ Works on Xeno and Solara
✅ All executors should work`,
        video: null,
        thumbImage: "images/game3-thumb.png",
        previewImage: "images/script3-preview.png"
    }
};



// Current script for copying
let currentScriptCode = '';

// ============================================
// Security Functions
// ============================================

// Sanitize HTML to prevent XSS
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Validate URL to prevent injection
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
    
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            });
        });
    }
});

// ============================================
// Modal Functions
// ============================================

function openModal(scriptId) {
    const data = scriptsData[scriptId];
    if (!data) return;
    
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('scriptModal');
    
    // Set modal content
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalImage').src = data.thumbImage;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalScript').textContent = data.script;
    
    // Store current script for copying
    currentScriptCode = data.script;
    
    // Set badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = '';
    data.badges.forEach((badge, index) => {
        const span = document.createElement('span');
        span.className = `badge ${data.badgeClasses[index]}`;
        span.textContent = badge;
        badgesContainer.appendChild(span);
    });
    
    // Set action buttons
    const keyBtn = document.getElementById('keySystemBtn');
    const gameLink = document.getElementById('gameLink');
    
    if (isValidURL(data.keySystem)) {
        keyBtn.href = data.keySystem;
    }
    
    if (isValidURL(data.gameUrl)) {
        gameLink.href = data.gameUrl;
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
    
    // Show modal
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus trap for accessibility
    modal.focus();
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
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

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// Copy Script Function
// ============================================

async function copyScript() {
    const copyBtn = document.querySelector('.copy-btn');
    
    try {
        await navigator.clipboard.writeText(currentScriptCode);
        
        // Visual feedback
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span').textContent = 'Copied!';
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').textContent = 'Copy';
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = currentScriptCode;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            copyBtn.classList.add('copied');
            copyBtn.querySelector('span').textContent = 'Copied!';
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.querySelector('span').textContent = 'Copy';
            }, 2000);
        } catch {
            copyBtn.querySelector('span').textContent = 'Error';
        }
        
        document.body.removeChild(textArea);
    }
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe script cards
    document.querySelectorAll('.script-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add visible class styles
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .script-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// Navbar Scroll Effect
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});

// ============================================
// Prevent Right-Click on Images (Basic Protection)
// ============================================

document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// ============================================
// Console Protection Message
// ============================================

console.log(
    '%c⚠️ Warning!',
    'color: red; font-size: 40px; font-weight: bold;'
);
console.log(
    '%cThis is a browser feature intended for developers. If someone told you to paste something here, they are likely trying to scam you.',
    'color: white; font-size: 16px;'
);


