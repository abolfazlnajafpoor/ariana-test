const STORAGE_KEY_MENU   = 'ariana_menu_v1';
const STORAGE_KEY_ORDERS = 'ariana_orders_v1';

const DEFAULT_MENU = [
  {
    id: 1,
    cat: 'hot',
    name: 'اسپرسو دوبل',
    desc: 'دو شات اسپرسو غلیظ با کرم طلایی',
    price: 45000,
    badge: 'popular',
    img: 'https://uploadkon.ir/uploads/3ef307_26اسپرسو-دوبل.jpg'
  },
  {
    id: 2,
    cat: 'hot',
    name: 'کاپوچینو کلاسیک',
    desc: 'اسپرسو با شیر بخار داده شده و فوم مخملی',
    price: 65000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/beb607_26کاپوچینو-کلاسیک.jpg'
  },
  {
    id: 3,
    cat: 'hot',
    name: 'لاته وانیل',
    desc: 'اسپرسو با شیر خامه‌ای و سیروپ وانیل',
    price: 72000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/984c07_26لاته-وانیل.jpg'
  },
  {
    id: 4,
    cat: 'hot',
    name: 'هات چاکلت',
    desc: 'شکلات بلژیکی، شیر گرم و خامه فرم‌گرفته',
    price: 68000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/beb607_26هات-چاکلت.jpg'
  },
  {
    id: 5,
    cat: 'hot',
    name: 'چای ماسالا',
    desc: 'چای هندی با ادویه‌های گرم‌بخش و شیر',
    price: 48000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/984c07_26چای-ماسالا.jpg'
  },
  {
    id: 6,
    cat: 'cold',
    name: 'آیس لاته',
    desc: 'اسپرسو روی یخ با شیر سرد و کارامل',
    price: 75000,
    badge: 'popular',
    img: 'https://uploadkon.ir/uploads/beb607_26آیس-لاته.jpeg'
  },
  {
    id: 7,
    cat: 'cold',
    name: 'فراپوچینو موکا',
    desc: 'قهوه سرد با شکلات، بستنی و خامه',
    price: 85000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/3fca07_26فراپاچینو-موکا.jpg'
  },
  {
    id: 8,
    cat: 'cold',
    name: 'لیموناد نعنا',
    desc: 'لیموناد خانگی با برگ‌های نعنا تازه و یخ',
    price: 58000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/3fca07_26لیموناد-نعنا.jpg'
  },
  {
    id: 9,
    cat: 'cold',
    name: 'آیس تی هلو',
    desc: 'چای سرد با طعم هلو و یخ خرد شده',
    price: 55000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/3fca07_26آیس-تی-هلو.jpg'
  },
  {
    id: 10,
    cat: 'cold',
    name: 'موهیتو بلوبری',
    desc: 'موهیتو بدون الکل با انگور بلوبری و نعنا',
    price: 62000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/3fca07_26موهیتو-بلوبری.jpg'
  },
  {
    id: 11,
    cat: 'food',
    name: 'برگر کلاسیک',
    desc: 'گوشت ۱۸۰گ، پنیر چدار، سس مخصوص، کاهو و گوجه',
    price: 168000,
    badge: 'popular',
    img: 'https://uploadkon.ir/uploads/3fca07_26برگر-کلاسیک.jpg'
  },
  {
    id: 12,
    cat: 'food',
    name: 'ساندویچ مرغ کریسپی',
    desc: 'مرغ سوخاری ترد با سس هانی موستارد و کلسلا',
    price: 145000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/353407_26ساندویچ-مرغ-کریسپی.png'
  },
  {
    id: 13,
    cat: 'food',
    name: 'پیتزا مارگاریتا',
    desc: 'سس گوجه خانگی، موزارلا تازه و ریحان',
    price: 195000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/b11207_26پیتزا-مارگاریتا.jpg'
  },
  {
    id: 14,
    cat: 'food',
    name: 'سیب‌زمینی سوخاری',
    desc: 'سیب‌زمینی ترد با نمک دریا و سس چیلی',
    price: 65000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/aa9807_26سیب‌زمینی-سوخاری.jpg'
  },
  {
    id: 15,
    cat: 'food',
    name: 'هات‌داگ ویژه',
    desc: 'سوسیس گوشت گاو، خردل، کچاپ و پیاز کاراملی',
    price: 128000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/359a07_26هات‌داگ-ویژه.jpg'
  },
  {
    id: 16,
    cat: 'dessert',
    name: 'چیزکیک توت‌فرنگی',
    desc: 'بیسکوییت مکرون، کرم پنیر و سس توت‌فرنگی',
    price: 115000,
    badge: 'popular',
    img: 'https://uploadkon.ir/uploads/b11207_26چیزکیک-توت‌فرنگی.jpeg'
  },
  {
    id: 17,
    cat: 'dessert',
    name: 'تیرامیسو',
    desc: 'اسپرسو، لیدی فینگر، ماسکارپونه و پودر کاکائو',
    price: 125000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/beb607_26تیرامیسو.jpg'
  },
  {
    id: 18,
    cat: 'dessert',
    name: 'مافین شکلات تلخ',
    desc: 'مافین خانگی با تکه‌های شکلات ۷۰٪',
    price: 72000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/b11207_26مافین-شکلات-تلخ.jpg'
  },
  {
    id: 19,
    cat: 'dessert',
    name: 'پانا کوتا وانیل',
    desc: 'دسر ایتالیایی با سس شکلات تلخ',
    price: 98000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/b11207_26پانا-کوتا-وانیل.jpeg'
  },
  {
    id: 20,
    cat: 'salad',
    name: 'سالاد سزار مرغ',
    desc: 'کاهو رومن، مرغ گریل، ترتیاق، پنیر پارمزان',
    price: 138000,
    badge: 'popular',
    img: 'https://uploadkon.ir/uploads/3fca07_26سالاد-سزار-مرغ.jpg'
  },
  {
    id: 21,
    cat: 'salad',
    name: 'سالاد فتا اسفناج',
    desc: 'اسفناج بیبی، پنیر فتا، گردو و زیتون',
    price: 118000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/3fca07_26سالاد-فتا-اسفناج.jpg'
  },
  {
    id: 22,
    cat: 'salad',
    name: 'سالاد آووکادو',
    desc: 'آووکادو، کینوا، گوجه گیلاسی و آبلیمو',
    price: 142000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/afc007_26سالاد-آووکادو.jpg'
  },
  {
    id: 23,
    cat: 'shake',
    name: 'شیک موز و عسل',
    desc: 'موز رسیده، عسل طبیعی، شیر و بستنی وانیل',
    price: 88000,
    badge: 'popular',
    img: 'https://uploadkon.ir/uploads/b11207_26شیک-موز-و-عسل.jpg'
  },
  {
    id: 24,
    cat: 'shake',
    name: 'شیک توت‌فرنگی',
    desc: 'توت‌فرنگی تازه، بستنی خامه‌ای و شیر',
    price: 92000,
    badge: '',
    img: 'https://uploadkon.ir/uploads/747307_26شیک-توت‌فرنگی.jpg'
  },
  {
    id: 25,
    cat: 'shake',
    name: 'شیک شکلات اوره‌و',
    desc: 'شکلات، بیسکوییت اوره‌و، بستنی و شیر',
    price: 98000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/747307_26میلک-شیک-اوریو.jpg'
  },
   {
    id: 26,
    cat: 'dessert',
    name: 'چیتوز موتوری',
    desc: 'پفک',
    price: 45000,
    badge: 'new',
    img: 'https://uploadkon.ir/uploads/b58707_26چیتوز-موتوری.jpg'
  }
];

const DB = (() => {

  function getAll() {
    const raw = localStorage.getItem(STORAGE_KEY_MENU);
    if (!raw) {
      save(DEFAULT_MENU);
      return DEFAULT_MENU;
    }
    return JSON.parse(raw);
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(items));
  }

  function getById(id) {
    return getAll().find(i => i.id === Number(id)) || null;
  }

  function add(data) {
    const items  = getAll();
    const newId  = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem = {
      id:    newId,
      cat:   data.cat,
      name:  data.name,
      desc:  data.desc  || '',
      price: Number(data.price),
      badge: data.badge || '',
      img:   data.img   || ''
    };
    items.push(newItem);
    save(items);
    return newItem;
  }

  function update(id, data) {
    const items = getAll();
    const idx   = items.findIndex(i => i.id === Number(id));
    if (idx === -1) return null;
    ['name', 'cat', 'desc', 'badge', 'img'].forEach(k => {
      if (data[k] !== undefined) items[idx][k] = data[k];
    });
    if (data.price !== undefined) items[idx].price = Number(data.price);
    save(items);
    return items[idx];
  }

  function remove(id) {
    const items   = getAll();
    const idx     = items.findIndex(i => i.id === Number(id));
    if (idx === -1) return null;
    const deleted = items.splice(idx, 1)[0];
    save(items);
    return deleted;
  }

  function reset() {
    save(DEFAULT_MENU);
    return DEFAULT_MENU;
  }

  return { getAll, getById, add, update, remove, reset };

})();

const Orders = (() => {

  function getAll() {
    const raw = localStorage.getItem(STORAGE_KEY_ORDERS);
    return raw ? JSON.parse(raw) : [];
  }

  function save(orders) {
    localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(orders));
  }

  function addOrder(cartItems) {
    const orders = getAll();
    const now    = new Date().toISOString();
    const items  = Object.values(cartItems).map(it => ({
      id:    it.id,
      name:  it.name,
      cat:   it.cat,
      price: it.price,
      qty:   it.qty,
      total: it.price * it.qty
    }));
    const order = {
      orderId:    Date.now(),
      timestamp:  now,
      items:      items,
      grandTotal: items.reduce((s, i) => s + i.total, 0)
    };
    orders.push(order);
    save(orders);
    return order;
  }

  function clearAll() {
    save([]);
  }

  return { getAll, addOrder, clearAll };

})();

localStorage.removeItem(STORAGE_KEY_MENU);
localStorage.removeItem(STORAGE_KEY_ORDERS);
