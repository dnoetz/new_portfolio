// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// document.addEventListener('DOMContentLoaded', function() {
//     var observer = new IntersectionObserver(function(entries) {
//       entries.forEach(function(entry) {
//         if (entry.intersectionRatio > 0) {
//           entry.target.classList.add('opacity-100');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, {
//       threshold: 0.5
//     });
  
//     var elements = document.querySelectorAll('.fade-in-element');
//     elements.forEach(function(element) {
//       observer.observe(element);
//     });
  
//     var navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(function(link) {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         var targetId = link.getAttribute('href');
//         var targetElement = document.querySelector(targetId);
//         smoothScrollTo(targetElement);
//       });
//     });
  
//     function smoothScrollTo(target) {
//       var startPosition = window.pageYOffset;
//       var targetPosition = target.offsetTop;
//       var distance = targetPosition - startPosition;
//       var duration = 1000;
//       var startTimestamp = null;
  
//       function step(timestamp) {
//         if (!startTimestamp) startTimestamp = timestamp;
//         var progress = timestamp - startTimestamp;
//         var percentage = Math.min(progress / duration, 1);
//         var easing = easeInOutQuad(percentage);
//         window.scrollTo(0, startPosition + distance * easing);
//         if (progress < duration) {
//           window.requestAnimationFrame(step);
//         }
//       }
  
//       function easeInOutQuad(t) {
//         return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//       }
  
//       window.requestAnimationFrame(step);
//     }
//   });
  