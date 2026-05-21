(function () {
  let currentUrl = '#';

  window.openContext = function (data) {
    document.getElementById('ctx-title').textContent = data.name;
    document.getElementById('ctx-link-label').textContent = data.linkLabel;
    document.getElementById('ctx-desc').textContent = data.desc;
    currentUrl = data.url;
    document.getElementById('context-menu').classList.add('is-open');
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ctx-close').addEventListener('click', () => {
      document.getElementById('context-menu').classList.remove('is-open');
    });

    document.getElementById('ctx-visit').addEventListener('click', () => {
      window.open(currentUrl, '_blank', 'noopener noreferrer');
    });

    document.addEventListener('click', (e) => {
      const menu = document.getElementById('context-menu');
      if (!menu.contains(e.target) && !e.target.closest('.ctx-trigger')) {
        menu.classList.remove('is-open');
      }
    });
  });
})();
