
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.timeline-item');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-button');

  items.forEach(item => {
    const modalId = item.getAttribute('data-modal-target');
    const modal = document.getElementById(modalId);
    if (modal) {
      item.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    }
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
});