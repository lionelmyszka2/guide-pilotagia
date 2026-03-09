/* ===========================
   PilotageIA - Script interactif
   =========================== */

(function () {
  'use strict';

  var modalOverlay = document.getElementById('modalOverlay');
  var modalClose = document.getElementById('modalClose');
  var modalBadge = document.getElementById('modalBadge');
  var modalTitle = document.getElementById('modalTitle');
  var modalBody = document.getElementById('modalBody');
  var modalFooter = document.getElementById('modalFooter');

  if (!modalOverlay) return;

  // --- Hotspots (inline buttons) ---
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-hotspot]');
    if (!btn) return;
    var id = btn.dataset.hotspot;
    if (typeof pageContent !== 'undefined' && pageContent[id]) {
      openModal(pageContent[id], id);
    }
  });

  function openModal(content, id) {
    modalBadge.textContent = id;
    modalTitle.textContent = content.title;
    modalBody.innerHTML = content.body;
    modalFooter.innerHTML = content.footer || '';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { modalClose.focus(); }, 100);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

})();
