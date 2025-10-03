document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 

            if (targetElement) {
             
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

 
    const typewriterSpan = document.querySelector('.typewriter span');
    const words = ["Designer", "Developer", "Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500); 
            } else {
                setTimeout(type, 100); 
            }
        } else {
            typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); 
            } else {
                setTimeout(type, 50); 
            }
        }
    }

    type(); 
});