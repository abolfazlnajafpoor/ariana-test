const Menu = (() => {

  let _currentCat = 'all';
  let _allItems   = [];

  const _catEmoji = {
    hot:     '☕',
    cold:    '🧊',
    food:    '🍔',
    dessert: '🍰',
    salad:   '🥗',
    shake:   '🥤'
  };

  function _badgeHTML(badge) {
    if (!badge) return '';
    const isNew = badge === 'new';
    return `<span class="card-badge ${isNew ? 'badge-new' : ''}">${isNew ? 'جدید' : 'پرطرفدار'}</span>`;
  }

  function _cardHTML(item) {
    return `
      <div class="card" data-id="${item.id}">
        <div class="card-img">
          <img
            src="${item.img}"
            alt="${item.name}"
            loading="lazy"
            onerror="this.classList.add('img-error')"
          />
          <div class="img-fallback">${_catEmoji[item.cat] || '🍽️'}</div>
          ${_badgeHTML(item.badge)}
        </div>
        <div class="card-body">
          <div class="card-title">${item.name}</div>
          <div class="card-desc">${item.desc}</div>
          <div class="card-footer">
            <div class="price">
              ${Utils.toPersianNumber(item.price)}
              <small> تومان</small>
            </div>
            <button class="add-btn" onclick="Menu.addToCart(${item.id})">افزودن +</button>
          </div>
        </div>
      </div>`;
  }

  function load() {
    _allItems = DB.getAll();
    render(_currentCat);
  }

  function render(cat) {
    _currentCat    = cat;
    const grid     = document.getElementById('menuGrid');
    if (!grid) return;
    const items    = cat === 'all'
      ? _allItems
      : _allItems.filter(i => i.cat === cat);
    grid.innerHTML = items.length
      ? items.map(_cardHTML).join('')
      : `<p style="color:var(--color-muted);grid-column:1/-1;text-align:center;padding:3rem">آیتمی در این دسته وجود ندارد</p>`;
  }

  function filterByCategory(cat, tabEl) {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    tabEl.classList.add('active');
    render(cat);
  }

  function addToCart(id) {
    const item = _allItems.find(i => i.id === id);
    if (item) Cart.addItem(item);
  }

  return { load, render, filterByCategory, addToCart };

})();
