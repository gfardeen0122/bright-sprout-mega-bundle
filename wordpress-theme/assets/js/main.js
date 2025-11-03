// Countdown Timer
function initCountdownTimer() {
  let timeLeft = {
    hours: 24,
    minutes: 0,
    seconds: 0
  };

  const timerElement = document.getElementById('timer');
  
  if (timerElement) {
    setInterval(() => {
      if (timeLeft.seconds > 0) {
        timeLeft.seconds--;
      } else if (timeLeft.minutes > 0) {
        timeLeft.minutes--;
        timeLeft.seconds = 59;
      } else if (timeLeft.hours > 0) {
        timeLeft.hours--;
        timeLeft.minutes = 59;
        timeLeft.seconds = 59;
      }

      const formatted = 
        String(timeLeft.hours).padStart(2, '0') + ':' +
        String(timeLeft.minutes).padStart(2, '0') + ':' +
        String(timeLeft.seconds).padStart(2, '0');
      
      timerElement.textContent = formatted;
    }, 1000);
  }
}

// Sticky CTA
function initStickyCTA() {
  const stickyCTA = document.getElementById('sticky-cta');
  
  if (stickyCTA) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        stickyCTA.classList.remove('hidden');
      } else {
        stickyCTA.classList.add('hidden');
      }
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// FAQ Toggle
function toggleFaq(index) {
  const faqItems = document.querySelectorAll('.faq-item');
  const item = faqItems[index];
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');
  
  // Close all other FAQs
  faqItems.forEach((faqItem, i) => {
    if (i !== index) {
      faqItem.querySelector('.faq-answer').classList.add('hidden');
      faqItem.querySelector('.faq-icon').textContent = '+';
    }
  });
  
  // Toggle current FAQ
  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    icon.textContent = '−';
  } else {
    answer.classList.add('hidden');
    icon.textContent = '+';
  }
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  initStickyCTA();
  initSmoothScroll();
});

// Make toggleFaq available globally
window.toggleFaq = toggleFaq;
