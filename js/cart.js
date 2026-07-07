const Cart = (() => {

  let _items = {};

  function _totalCount() {
    return Object.values(_items).reduce((sum, it) => sum + it.qty, 0);
  }

  function _totalPrice() {
    return Object.values(_items).reduce((sum, it) => sum + it.price * it.qty, 0);
  }

  function _renderItems() {
    const container = document.getElementById('cartItems');
    const footer    = document.getElementById('sidebarFooter');
    const totalEl   = document.getElementById('totalPrice');
    const ids       = Object.keys(_items);

    if (ids.length === 0) {
      container.innerHTML = `
        <div class="empty-cart">
          <div class="empty-icon">🛒</div>
          <p>سبد خرید شما خالی است</p>
        </div>`;
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'block';
    totalEl.textContent  = `${Utils.toPersianNumber(_totalPrice())} تومان`;

    container.innerHTML = ids.map(id => {
      const it = _items[id];
      return `
        <div class="cart-item">
          <img
            src="${it.img}"
            alt="${it.name}"
            loading="lazy"
            onerror="this.style.display='none'"
          />
          <div class="cart-item-info">
            <div class="cart-item-name">${it.name}</div>
            <div class="cart-item-price">${Utils.toPersianNumber(it.price * it.qty)} تومان</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="Cart.changeQty(${id}, -1)">−</button>
            <span class="qty-val">${it.qty}</span>
            <button class="qty-btn" onclick="Cart.changeQty(${id}, 1)">+</button>
          </div>
        </div>`;
    }).join('');
  }

  function _renderBadge() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const count     = _totalCount();
    badge.textContent   = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  function _refresh() {
    _renderBadge();
    _renderItems();
  }

  function addItem(item) {
    if (_items[item.id]) {
      _items[item.id].qty += 1;
    } else {
      _items[item.id] = { ...item, qty: 1 };
    }
    _refresh();
    Utils.showToast(`«${item.name}» به سبد اضافه شد ✓`);
  }

  function changeQty(id, delta) {
    if (!_items[id]) return;
    _items[id].qty += delta;
    if (_items[id].qty <= 0) delete _items[id];
    _refresh();
  }

  function toggle() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
  }

  function checkout() {
    if (Object.keys(_items).length === 0) return;
    Orders.addOrder(_items);
    _items = {};
    _refresh();
    toggle();
    Utils.showToast('✅ سفارش شما با موفقیت ثبت شد!');
  }

  return { addItem, changeQty, toggle, checkout };

})();
