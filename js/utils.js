const Utils = (() => {

  function toPersianNumber(n) {
    return n.toLocaleString('fa-IR');
  }

  function showToast(message, duration = 2200) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  }

  return { toPersianNumber, showToast };

})();
