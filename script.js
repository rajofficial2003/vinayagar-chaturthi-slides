document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const slideList = document.getElementById('slide-list');
  const currentSlideNum = document.getElementById('current-slide-num');
  const totalSlidesNum = document.getElementById('total-slides-num');
  const slideTitlePreview = document.getElementById('slide-title-preview');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const overviewBtn = document.getElementById('overview-btn');
  const overviewModal = document.getElementById('overview-modal');
  const overviewGrid = document.getElementById('overview-grid');
  const closeOverview = document.getElementById('close-overview');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const toggleSidebarBtn = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');

  let currentIndex = 0;
  const totalSlides = slides.length;
  totalSlidesNum.textContent = totalSlides;

  // Build Sidebar Thumbnails & Overview Grid
  slides.forEach((slide, idx) => {
    const title = slide.getAttribute('data-title') || `Slide ${idx + 1}`;

    // Sidebar Item
    if (slideList) {
      const li = document.createElement('li');
      li.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
      li.innerHTML = `
        <span class="thumb-num">${idx + 1}</span>
        <span class="thumb-name">${title}</span>
      `;
      li.addEventListener('click', () => goToSlide(idx));
      slideList.appendChild(li);
    }

    // Overview Grid Item
    if (overviewGrid) {
      const gridThumb = document.createElement('div');
      gridThumb.className = 'grid-thumb';
      gridThumb.innerHTML = `
        <div class="grid-thumb-num">SLIDE ${idx + 1}</div>
        <div class="grid-thumb-title">${title}</div>
      `;
      gridThumb.addEventListener('click', () => {
        goToSlide(idx);
        overviewModal.classList.remove('open');
      });
      overviewGrid.appendChild(gridThumb);
    }
  });

  function updateSlideState() {
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update Sidebar items
    if (slideList) {
      const thumbItems = slideList.querySelectorAll('.thumb-item');
      thumbItems.forEach((thumb, idx) => {
        if (idx === currentIndex) {
          thumb.classList.add('active');
          thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          thumb.classList.remove('active');
        }
      });
    }

    // Update Indicator text
    if (currentSlideNum) currentSlideNum.textContent = currentIndex + 1;
    const currentTitle = slides[currentIndex].getAttribute('data-title');
    if (slideTitlePreview) slideTitlePreview.textContent = currentTitle;

    // Update Nav Buttons State
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentIndex = index;
      updateSlideState();
    }
  }

  // Event Listeners for Nav Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) goToSlide(currentIndex + 1);
    });
  }

  // Keyboard Shortcuts (Arrow Left/Right, Space, PageUp/Down)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      if (currentIndex < totalSlides - 1) goToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentIndex > 0) goToSlide(currentIndex - 1);
    } else if (e.key === 'Escape') {
      if (overviewModal) overviewModal.classList.remove('open');
    }
  });

  // Overview Modal Toggle
  if (overviewBtn && overviewModal) {
    overviewBtn.addEventListener('click', () => {
      overviewModal.classList.add('open');
    });
  }

  if (closeOverview && overviewModal) {
    closeOverview.addEventListener('click', () => {
      overviewModal.classList.remove('open');
    });
  }

  // Fullscreen Presenter Mode
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.error(err));
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Toggle Sidebar
  if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      setTimeout(updateSlideScale, 300);
    });
  }

  // Auto collapse sidebar on mobile initial load
  if (window.innerWidth < 768 && sidebar) {
    sidebar.classList.add('collapsed');
  }

  // Dynamic Scale Calculation so Mobile view matches Laptop view 100%
  function updateSlideScale() {
    const stage = document.querySelector('.stage');
    if (!stage) return;

    const stageWidth = stage.clientWidth - 16; 
    const stageHeight = stage.clientHeight - 16;

    const baseWidth = 1080;
    const baseHeight = 670;

    let scale = Math.min(stageWidth / baseWidth, stageHeight / baseHeight);
    scale = Math.min(Math.max(scale, 0.2), 1.15);

    document.documentElement.style.setProperty('--slide-scale', scale);
  }

  // Touch Swipe Navigation for Mobile Devices
  let touchStartX = 0;
  let touchEndX = 0;
  const stageEl = document.querySelector('.stage');

  if (stageEl) {
    stageEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stageEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        if (currentIndex < totalSlides - 1) goToSlide(currentIndex + 1);
      } else if (touchEndX > touchStartX + swipeThreshold) {
        if (currentIndex > 0) goToSlide(currentIndex - 1);
      }
    }, { passive: true });
  }

  window.addEventListener('resize', updateSlideScale);
  window.addEventListener('orientationchange', updateSlideScale);

  // Initial State Sync
  updateSlideState();
  updateSlideScale();
});

