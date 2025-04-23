document.addEventListener('DOMContentLoaded', () => {
    const buttonGroups = document.querySelectorAll('.button-group');
    const mainButtons = document.querySelector('.main-buttons');
    
    // Handle main button clicks
    document.querySelectorAll('.link-button[data-target]').forEach(button => {
        button.addEventListener('click', () => {
            const targetGroup = document.querySelector(`.${button.dataset.target}-buttons`);
            mainButtons.classList.add('hidden');
            targetGroup.classList.remove('hidden');
        });
    });
    
    // Handle back button clicks
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', () => {
            buttonGroups.forEach(group => {
                if (!group.classList.contains('main-buttons')) {
                    group.classList.add('hidden');
                }
            });
            mainButtons.classList.remove('hidden');
        });
    });

    //balloes

    // Array of specific colors
    const BALLOON_COLORS = ['#007A9E', '#002937'];

    document.getElementById('balloon-button').addEventListener('click', createBalloons);

// Add click event listener for profile image toggle
    const profileImage = document.querySelector('.profile-image');
    let isAlternateImage = false;

    if (profileImage) {
        profileImage.addEventListener('click', () => {
            isAlternateImage = !isAlternateImage;
            profileImage.src = isAlternateImage
                ? './image/profile.png' // Alternate image
                : './image/profile01.jpg'; // Original image

            // Add transition effect
            profileImage.style.transform = 'scale(0.95)';
            setTimeout(() => {
                profileImage.style.transform = 'scale(1)';
            }, 200);
        });
    }

    function createBalloons() {
        // Create multiple balloons
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createBalloon();
            }, i * 150); // Increased delay between balloons
        }
    }

    function getRandomPosition(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'floating-balloon';

        // Window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Random start positions (anywhere on screen)
        const startX = getRandomPosition(0, windowWidth);
        const startY = getRandomPosition(0, windowHeight);

        // Random end positions (anywhere on screen)
        const endX = getRandomPosition(0, windowWidth);
        const endY = getRandomPosition(0, windowHeight);

        // Alternate between the two specified colors
        const color = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];

        // Random size variation (slightly smaller range)
        const size = 24 + Math.random() * 16; // 24-40px

        // Slower animation variations
        const floatDuration = 8 + Math.random() * 4; // 8-12s
        const swayDuration = 4 + Math.random() * 2; // 4-6s
        const swayDistance = 15 + Math.random() * 25; // 15-40px

        // Apply random variations as CSS variables
        balloon.style.setProperty('--float-duration', `${floatDuration}s`);
        balloon.style.setProperty('--sway-duration', `${swayDuration}s`);
        balloon.style.setProperty('--sway-distance', `${swayDistance}px`);
        balloon.style.setProperty('--start-x', `${startX}px`);
        balloon.style.setProperty('--start-y', `${startY}px`);
        balloon.style.setProperty('--end-x', `${endX}px`);
        balloon.style.setProperty('--end-y', `${endY}px`);

        // Balloon SVG with specified color and size
        balloon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9c0 4 3.5 8 6 8s6-4 6-8a6 6 0 0 0-12 0"/>
            <line x1="12" y1="17" x2="12" y2="22"/>
        </svg>
    `;

        document.body.appendChild(balloon);

        // Remove balloon after animation
        balloon.addEventListener('animationend', (e) => {
            if (e.animationName === 'float') {
                balloon.remove();
            }
        });
    }
});

