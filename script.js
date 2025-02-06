const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});


const carouselInner = document.getElementById('carousel-inner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const itemsToShow = 3;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const totalGroups = Math.ceil(totalItems / itemsToShow);
let currentGroup = 0;

function showGroup(index) {
  // Ensure the index is within bounds
  if (index >= totalGroups) {
    currentGroup = 0; // Loop back to the first group
  } else if (index < 0) {
    currentGroup = totalGroups - 1; // Loop to the last group
  } else {
    currentGroup = index;
  }

  // Move the carousel
const offset = -currentGroup * 100 / itemsToShow;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

// Auto Slide every 5 seconds
let autoSlide = setInterval(() => {
  showGroup(currentGroup + 1);
}, 5000);

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide); // Stop auto slide when manually clicked
  showGroup(currentGroup + 1);
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide); // Stop auto slide when manually clicked
  showGroup(currentGroup - 1);
});



