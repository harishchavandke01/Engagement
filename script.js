// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // Duration of the animation
    easing: 'ease-in-out', // Easing function for smoothness
    once: true // Make sure the animation happens only once on scroll
  });
// Ensure the page stays at the top when loading
window.onload = function() {
    window.scrollTo(0, 0);  // Scroll to the top of the page when loaded
  };
    