// Notion-style Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the portfolio
    initNavigation();
    initAnimations();
    initThemeToggle();
    initScrollEffects();
    initProfileImage();
    initChat();
});

// Profile image loading
function initProfileImage() {
    const profileImage = document.querySelector('.profile-image');
    const fallbackIcon = document.querySelector('.profile-fallback');

    if (profileImage) {
        profileImage.addEventListener('load', function () {
            console.log('Profile image loaded successfully');
            this.style.display = 'block';
            if (fallbackIcon) fallbackIcon.style.display = 'none';
        });

        profileImage.addEventListener('error', function () {
            console.log('Profile image failed to load, showing fallback');
            this.style.display = 'none';
            if (fallbackIcon) fallbackIcon.style.display = 'flex';
        });

        // Force reload the image with cache busting
        const timestamp = new Date().getTime();
        profileImage.src = `./profile-photo.jpg?v=${timestamp}`;
    }
}

// Navigation functionality
function initNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSection = tab.getAttribute('data-section');

            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });

            // Add smooth transition effect
            const activeSection = document.getElementById(targetSection);
            if (activeSection) {
                activeSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation effects
function initAnimations() {
    // Animate elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .education-card, .certificate-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Theme toggle functionality (for future enhancement)
function initThemeToggle() {
    // This can be expanded to include dark/light theme switching
    // For now, it's a placeholder for future enhancement
    console.log('Theme system initialized');
}

// Scroll effects
function initScrollEffects() {
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav-tabs');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow to navigation when scrolling
        if (scrollTop > 100) {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            nav.style.backgroundColor = 'rgba(247, 246, 243, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.backgroundColor = 'var(--bg-secondary)';
            nav.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

// Enhanced project card interactions
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click to expand functionality for project descriptions
    const projectDescriptions = document.querySelectorAll('.project-description');
    projectDescriptions.forEach(desc => {
        const maxHeight = '150px';
        const fullHeight = desc.scrollHeight + 'px';

        if (desc.scrollHeight > 150) {
            desc.style.maxHeight = maxHeight;
            desc.style.overflow = 'hidden';
            desc.style.position = 'relative';

            // Add expand button
            const expandBtn = document.createElement('button');
            expandBtn.innerHTML = '... Show more';
            expandBtn.className = 'expand-btn';
            expandBtn.style.cssText = `
                background: linear-gradient(transparent, var(--bg-secondary));
                border: none;
                color: var(--accent-color);
                cursor: pointer;
                padding: 20px 0 0 0;
                width: 100%;
                text-align: center;
                font-size: var(--font-size-sm);
                font-weight: 500;
                position: absolute;
                bottom: 0;
                left: 0;
            `;

            desc.appendChild(expandBtn);

            expandBtn.addEventListener('click', function () {
                if (desc.style.maxHeight === maxHeight) {
                    desc.style.maxHeight = fullHeight;
                    expandBtn.innerHTML = 'Show less';
                    expandBtn.style.position = 'static';
                    expandBtn.style.background = 'none';
                    expandBtn.style.padding = '10px 0 0 0';
                } else {
                    desc.style.maxHeight = maxHeight;
                    expandBtn.innerHTML = '... Show more';
                    expandBtn.style.position = 'absolute';
                    expandBtn.style.background = 'linear-gradient(transparent, var(--bg-secondary))';
                    expandBtn.style.padding = '20px 0 0 0';
                }
            });
        }
    });
});

// Tech stack tag interactions
document.addEventListener('DOMContentLoaded', function () {
    const techTags = document.querySelectorAll('.tech-tag');

    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 2px 8px rgba(35, 131, 226, 0.3)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});

// Smooth scrolling for profile links
document.addEventListener('DOMContentLoaded', function () {
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Add a small animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add typing animation to the hero title
document.addEventListener('DOMContentLoaded', function () {
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        const text = profileName.textContent;
        profileName.textContent = '';

        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                profileName.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        };

        // Start typing animation after a brief delay
        setTimeout(typeWriter, 500);
    }
});

// Enhanced certificate card interactions
document.addEventListener('DOMContentLoaded', function () {
    const certificateCards = document.querySelectorAll('.certificate-card');

    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.certificate-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.certificate-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Add progress indicator for reading
document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--accent-color);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Add search functionality (for future enhancement)
function initSearch() {
    // Placeholder for search functionality
    // Could search through projects, experience, etc.
    console.log('Search functionality placeholder');
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.altKey) {
        const currentActive = document.querySelector('.nav-tab.active');
        const tabs = document.querySelectorAll('.nav-tab');
        let currentIndex = Array.from(tabs).indexOf(currentActive);

        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            tabs[currentIndex - 1].click();
            e.preventDefault();
        } else if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            tabs[currentIndex + 1].click();
            e.preventDefault();
        }
    }
});

// Print styles adjustment
window.addEventListener('beforeprint', function () {
    // Show all sections when printing
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'block';
        section.style.pageBreakAfter = 'always';
    });
});

window.addEventListener('afterprint', function () {
    // Restore normal section visibility
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.style.pageBreakAfter = 'auto';
    });
    document.querySelector('.section.active').style.display = 'block';
});

// AI Chat Functionality
function initChat() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle chat window
    function toggleChat() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
        }
    }

    chatButton.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    // Send message logic
    async function handleSend() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        appendMessage(message, 'user');
        chatInput.value = '';

        // Add loading indicator
        const loadingId = appendLoading();

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();

            // Remove loading and add bot response
            removeLoading(loadingId);
            appendMessage(data.response, 'bot');

        } catch (error) {
            console.error('Chat error:', error);
            removeLoading(loadingId);
            appendMessage("Sorry, I'm having trouble connecting to the server. Please try again later.", 'bot');
        }
    }

    sendMessage.addEventListener('click', handleSend);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    // Helper to append messages
    function appendMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;

        // Basic markdown parsing for links and bold
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

        div.innerHTML = formattedText;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Helper for loading state
    function appendLoading() {
        const id = 'loading-' + Date.now();
        const div = document.createElement('div');
        div.className = 'message bot';
        div.id = id;
        div.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    function removeLoading(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
}
