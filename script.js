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
});