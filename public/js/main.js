// Execute after page load
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add post publication time
    const postMetaElements = document.querySelectorAll('.post-meta');
    postMetaElements.forEach(element => {
        const date = new Date();
        element.textContent = `Posted on ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    });
}); 
