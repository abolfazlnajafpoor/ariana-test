document.addEventListener('DOMContentLoaded', () => {

  Menu.load();

  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      Menu.filterByCategory(btn.dataset.cat, btn);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        Cart.toggle();
      }
    }
  });

});
