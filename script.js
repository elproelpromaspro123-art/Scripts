// ============================================
// ElPro Scripts - Optimized JavaScript
// Performance & Accessibility Ready
// ============================================

'use strict';

// ============================================
// Script Data
// ============================================

const scriptsData = {
    1: {
        title: "Break a Lucky Block",
        gameUrl: "https://www.roblox.com/es/games/124311897657957/Break-a-Lucky-Block",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/660d469d6b59e9203d285305b6dda424/raw/c4ff5085f58ced0a2d1d29a62ed096a1c9463152/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/break-a-lucky-block-key-generator",
        badges: ["NEW", "BETA", "KEY REQUIRED", "PC TESTED"],
        description: `Key Features (BETA):

• Fully underground AutoFarm (invisible from surface)
• Noclip + safety platform to prevent falling
• Automatic stuck detection & cycle reset
• Target specific Lucky Block type or random
• Fast auto-collection of drops
• Stealth-oriented (works below ground)
• Clean Rayfield UI
• Emergency Panic Key (default: P)
• Useful teleports (Sell, Buy, Trader, Fuse)
• Key system via work.ink`,
        video: "https://www.youtube.com/watch?v=2q1fD3TnFLM",
        thumbImage: "images/game1-thumb.png"
    },
    2: {
        title: "Animal Simulator",
        gameUrl: "https://www.roblox.com/es/games/5712833750/Animal-Simulator",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/1e39745e7142c4980fbf34792a03c7c2/raw/98f59e9aad6f9a01154ac21bc7fca812c93c96b5/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/animal-simulator-token-generator",
        badges: ["UPDATED", "CHRISTMAS", "KEY REQUIRED", "PC TESTED"],
        description: `Animal Simulator Christmas Autofarm 2025/2026

Features:
• Auto Coins
• Egg Farm TPs
• 5k Dummy EXP Farm
• Christmas Mission TPs (1-50 Toys/Houses)
• Boss TPs
• Noclip
• Hitbox Expander (Players/Bosses)
• Auto Q Spam

Works on all executors.`,
        video: "https://www.youtube.com/watch?v=ZzPSGZT5ayI",
        thumbImage: "images/game2-thumb.png"
    },
    3: {
        title: "Uma Racing",
        gameUrl: "https://www.roblox.com/es/games/94101948530988/Uma-Racing",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/827c89bc204b31aa8efb77dac8e7d315/raw/330a5f67d98310a004cf322e46346ee8fcb3a1ce/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/key-system",
        badges: ["SIMPLE", "KEY REQUIRED", "PC TESTED"],
        description: `Uma Racing - Infinite Stamina Script

• Infinite Stamina - Never run out of energy!

Works on Xeno and Solara. All executors should work.`,
        video: null,
        thumbImage: "images/game3-thumb.png"
    },
    4: {
        title: "Blade Ball",
        gameUrl: "https://www.roblox.com/es/games/13772394625/Blade-Ball",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/7efad65c271e7308b00b3867673f1328/raw/0943d45b7a27b34e13955debea5cbf14bd071a5a/gistfile1.txt", true))()',
        keySystem: "https://work.ink/2e7s/blade-ball-op-script-key-generator",
        badges: ["BETA", "PC TESTED"],
        description: `AUTOPARRY BETA V1

Features:
• Automatic parry based on real-time distance/speed
• Reliable real ball detection
• Optimized for high-speed attacks
• Optional hitbox visualizer
• Human-like input simulation
• Clean, lightweight interface
• Toggleable features
• Proper cleanup on exit`,
        video: "https://youtu.be/ZzPSGZT5ayI",
        thumbImage: "images/game4-thumb.png"
    },
    5: {
        title: "SCP: Roleplay",
        gameUrl: "https://www.roblox.com/es/games/5041144419/SCP-Roleplay",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/235fab552f080f8f3c182ee8b4edbac1/raw/7f1657b189276c02833b4a4c87b9251f8410f83a/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/scp-roleplay-key-generator",
        badges: ["BETA", "PC TESTED"],
        description: `SCP:RP Ultimate – Advanced Tools (BETA)

• ESP System – Player outlines, health bars, tracers, names, distance, team tags
• Hitbox Expander – Adjustable size, neon visual
• Custom Crosshair – 10 modern styles + customization
• Quality-of-Life – Fullbright, Anti-AFK, Server Rejoin, Hop`,
        video: "https://youtu.be/ZzPSGZT5ayI",
        thumbImage: "images/game5-thumb.png"
    },
    6: {
        title: "Scary Shawarma Kiosk",
        gameUrl: "https://www.roblox.com/es/games/137826330724902/Scary-Shawarma-Kiosk",
        script: 'loadstring(game:HttpGet("https://gist.githubusercontent.com/elproelpromaspro123-art/cb25329376624636a555658156b7eebe/raw/3ca95ecf14c071a9b2f156bfc341e47258c92981/gistfile1.txt"))()',
        keySystem: "https://work.ink/2e7s/shawarma-key-generator",
        badges: ["NEW", "PC TESTED"],
        description: `Shawarma Dominator v2.0

• Real-time anomaly & screamer detection
• Next model preview (know if it's anomaly)
• Infinite auto-revive
• Smooth fly, perfect noclip, unlimited speed/jump
• Anti-AFK

Control the game. No deaths, no surprises.`,
        video: "https://youtu.be/ZzPSGZT5ayI",
        thumbImage: "images/game6-thumb.png"
    }
};

// ============================================
// DOM Ready
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initModal();
    initCopyButtons();
    initSmoothScroll();
});

// ============================================
// Navbar Scroll Effect
// ============================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// Modal System
// ============================================

function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('scriptModal');
    if (!overlay || !modal) return;
    
    // Open modal from script cards
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.scriptId, 10);
            if (id && scriptsData[id]) {
                openModal(id);
            }
        });
    });
    
    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(id) {
    const data = scriptsData[id];
    if (!data) return;
    
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('scriptModal');
    
    // Populate modal
    document.getElementById('modalImage').src = data.thumbImage;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalScript').textContent = data.script;
    document.getElementById('keySystemBtn').href = data.keySystem;
    document.getElementById('gameLink').href = data.gameUrl;
    
    // Badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = data.badges.map(b => 
        `<span class="badge">${escapeHtml(b)}</span>`
    ).join('');
    
    // Video
    const videoSection = document.getElementById('modalVideo');
    const videoLink = document.getElementById('videoLink');
    if (data.video) {
        videoLink.href = data.video;
        videoSection.style.display = 'block';
    } else {
        videoSection.style.display = 'none';
    }
    
    // Show modal
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    modal.querySelector('.modal-close').focus();
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ============================================
// Copy Functionality
// ============================================

function initCopyButtons() {
    document.querySelectorAll('.code-block .copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.closest('.code-block').querySelector('code');
            if (code) copyToClipboard(code.textContent, btn);
        });
    });
}

function copyHubScript(btn) {
    const code = document.getElementById('hubScript');
    if (code) copyToClipboard(code.textContent, btn);
}

async function copyToClipboard(text, btn) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.cssText = 'position:fixed;left:-9999px;top:-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        showCopyFeedback(btn, true);
    } catch {
        showCopyFeedback(btn, false);
    }
}

function showCopyFeedback(btn, success) {
    const span = btn.querySelector('span');
    const originalText = span.textContent;
    
    btn.classList.add('copied');
    span.textContent = success ? 'Copied!' : 'Error';
    
    setTimeout(() => {
        btn.classList.remove('copied');
        span.textContent = originalText;
    }, 2000);
}

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ============================================
// Utilities
// ============================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Performance mark
if (window.performance?.mark) {
    performance.mark('app-loaded');
}
