document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const searchBtn = document.getElementById('searchBtn');
  const searchWrap = document.getElementById('searchWrap');
  const searchInput = document.getElementById('searchInput');

  // Burger menu toggle
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    if (open) {
      mobileMenu.style.display = 'block';
    } else {
      mobileMenu.style.display = 'none';
    }
  });

  // Search toggle
  searchBtn.addEventListener('click', () => {
    const open = searchWrap.classList.toggle('open');
    if (open) searchInput.focus();
  });

  // HERO image scroll
  const slides = [
    {
      img: 'Scroll Banners/Untitled design_20251113_190634_0000.jpg',
      title: 'Netflix Frankenstien',
      rating: 'Rating: IMBb 7.6/10'
    },
    {
      img: 'Scroll Banners/20251113_190955_0000.jpg',
      title: 'Predator: Badlands',
      rating: 'Rating: IMBb 7.6/10'
    },
    {
      img: 'Scroll Banners/Untitled design_20251113_190752_0000.jpg',
      title: 'The Fantastic Four: First Steps',
      rating: 'Rating: IMBb 7/10'
    },
    {
      img: 'Scroll Banners/Untitled design_20251113_191435_0000.png',
      title: 'Lilo & Stitch',
      rating: 'Rating: IMBb 6.7/10'
    }
  ];

  const heroBg = document.getElementById('heroBg');
  const heroTitle = document.getElementById('heroTitle');
  const heroRating = document.getElementById('heroRating');
  let heroIndex = 0;

  function updateHero() {
    const slide = slides[heroIndex];
    heroBg.style.opacity = 0;
    setTimeout(() => {
      heroBg.src = slide.img;
      heroTitle.textContent = slide.title;
      heroRating.textContent = slide.rating;
      heroBg.style.opacity = 1;
      heroTitle.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 500 });
      heroRating.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600 });
    }, 400);
  }

  updateHero();
  setInterval(() => {
    heroIndex = (heroIndex + 1) % slides.length;
    updateHero();
  }, 5500);

  // Footer year
  document.getElementById('yr').textContent = new Date().getFullYear();
});