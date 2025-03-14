document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
  
  // Pricing toggle
  const pricingToggle = document.getElementById('pricing-toggle');
  const monthlyPrices = document.querySelectorAll('.price.monthly');
  const annualPrices = document.querySelectorAll('.price.annual');
  
  if (pricingToggle && monthlyPrices.length && annualPrices.length) {
    pricingToggle.addEventListener('change', function() {
      if (this.checked) {
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'flex');
      } else {
        monthlyPrices.forEach(price => price.style.display = 'flex');
        annualPrices.forEach(price => price.style.display = 'none');
      }
    });
  }
  
  // Testimonial slider
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const indicators = document.querySelectorAll('.indicator');
  const prevButton = document.querySelector('.testimonial-nav-prev');
  const nextButton = document.querySelector('.testimonial-nav-next');
  
  if (testimonialCards.length && indicators.length && prevButton && nextButton) {
    let currentSlide = 0;
    
    function showSlide(index) {
      // Normalize index
      if (index < 0) index = testimonialCards.length - 1;
      if (index >= testimonialCards.length) index = 0;
      
      currentSlide = index;
      
      // Update slide positions
      testimonialCards.forEach((card, i) => {
        card.style.transform = `translateX(${(i - index) * 100}%)`;
      });
      
      // Update indicators
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
    
    // Initialize first slide
    showSlide(0);
    
    // Event listeners for navigation
    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
    
    // Event listeners for indicators
    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => showSlide(i));
    });
    
    // Auto advance slides every 5 seconds
    setInterval(() => showSlide(currentSlide + 1), 5000);
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      }
    });
  });
});

