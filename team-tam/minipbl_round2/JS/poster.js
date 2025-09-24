document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const previewImg = document.querySelector('.teamposter img');

  if (modal && modalImg && previewImg) {
    previewImg.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = previewImg.src;
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.style.display = 'none';
    });
  }
});
