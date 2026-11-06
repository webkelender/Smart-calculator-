/* translation.js — Diwali Faral Calculator
 * Languages: mr (default), en, hi
 * Usage:
 *   Load this file before the main script.
 *   t("save")                      -> translated string
 *   t("confirmDelete",{name:"X"})  -> with {name} placeholders
 *   tProduct("chakli")             -> {name, sub}
 *   setLang("en")                  -> saves choice, fires "langchange"
 *   applyStaticTranslations()      -> updates elements with data-i18n / data-i18n-aria / data-i18n-placeholder
 */
(function (global) {
  "use strict";

  const LANG_KEY = "faral-lang-v1";
  const DEFAULT_LANG = "mr";

  const LANGS = {
    mr: { label: "मराठी", locale: "mr-IN", htmlLang: "mr" },
    en: { label: "English", locale: "en-IN", htmlLang: "en" },
    hi: { label: "हिन्दी", locale: "hi-IN", htmlLang: "hi" }
  };

  const STRINGS = {
    mr: {
      pageTitle: "दिवाळी फराळ कॅल्क्युलेटर",
      subtitle: "नाव लिहा, वजन निवडा, ऑर्डर सेव्ह करा",
      customerName: "ग्राहकाचे नाव",
      customerPlaceholder: "उदा. सुरेखा ताई",
      editing: "संपादन सुरू आहे",
      cancel: "रद्द करा",
      total: "एकूण",
      remove: "काढा",
      save: "ऑर्डर सेव्ह करा",
      saveChanges: "बदल सेव्ह करा",
      openOrders: "सेव्ह केलेल्या ऑर्डर्स उघडा",
      savedOrders: "सेव्ह केलेल्या ऑर्डर्स",
      close: "बंद करा",
      noOrders: "अजून कोणतीही ऑर्डर सेव्ह केलेली नाही.",
      completed: "पूर्ण",
      completedOrders: "✔ पूर्ण: {n} ऑर्डर्स",
      pendingOrders: "बाकी: {n} ऑर्डर्स",
      allOrders: "सर्व: {n} ऑर्डर्स",
      markDone: "ऑर्डर पूर्ण",
      edit: "बदला",
      whatsapp: "WhatsApp",
      delete: "हटवा",
      clearAll: "सर्व ऑर्डर्स हटवा",
      toastNeedName: "आधी ग्राहकाचे नाव लिहा",
      toastNeedItem: "किमान एक पदार्थ निवडा",
      toastStorageOff: "सेव्ह करता आले नाही (स्टोरेज बंद आहे)",
      toastUpdated: "ऑर्डर अपडेट झाली",
      toastSaved: "ऑर्डर सेव्ह झाली",
      toastEditHint: "बदल करून 'बदल सेव्ह करा' दाबा",
      toastDone: "ऑर्डर पूर्ण झाली",
      toastUndone: "ऑर्डर पुन्हा बाकी केली",
      toastDeleted: "ऑर्डर हटवली",
      toastClearedAll: "सर्व ऑर्डर्स हटवल्या",
      confirmClearAll: "सर्व {n} ऑर्डर्स कायमच्या हटवायच्या?",
      confirmDelete: "{name} यांची ऑर्डर हटवायची?",
      waTitle: "दिवाळी फराळ ऑर्डर – {name}",
      waTotalWeight: "एकूण वजन: {w}",
      waTotalAmount: "एकूण रक्कम: {a}",
      language: "भाषा"
    },

    en: {
      pageTitle: "Diwali Faral Calculator",
      subtitle: "Enter name, pick weight, save the order",
      customerName: "Customer name",
      customerPlaceholder: "e.g. Surekha Tai",
      editing: "Editing in progress",
      cancel: "Cancel",
      total: "Total",
      remove: "Remove",
      save: "Save Order",
      saveChanges: "Save Changes",
      openOrders: "Open saved orders",
      savedOrders: "Saved Orders",
      close: "Close",
      noOrders: "No orders saved yet.",
      completed: "Done",
      completedOrders: "✔ Done: {n} orders",
      pendingOrders: "Pending: {n} orders",
      allOrders: "All: {n} orders",
      markDone: "Mark order done",
      edit: "Edit",
      whatsapp: "WhatsApp",
      delete: "Delete",
      clearAll: "Delete all orders",
      toastNeedName: "Enter the customer name first",
      toastNeedItem: "Select at least one item",
      toastStorageOff: "Could not save (storage is disabled)",
      toastUpdated: "Order updated",
      toastSaved: "Order saved",
      toastEditHint: "Make changes, then tap 'Save Changes'",
      toastDone: "Order marked done",
      toastUndone: "Order moved back to pending",
      toastDeleted: "Order deleted",
      toastClearedAll: "All orders deleted",
      confirmClearAll: "Permanently delete all {n} orders?",
      confirmDelete: "Delete {name}'s order?",
      waTitle: "Diwali Faral Order – {name}",
      waTotalWeight: "Total weight: {w}",
      waTotalAmount: "Total amount: {a}",
      language: "Language"
    },

    hi: {
      pageTitle: "दिवाली फराल कैलकुलेटर",
      subtitle: "नाम लिखें, वजन चुनें, ऑर्डर सेव करें",
      customerName: "ग्राहक का नाम",
      customerPlaceholder: "जैसे सुरेखा ताई",
      editing: "संपादन जारी है",
      cancel: "रद्द करें",
      total: "कुल",
      remove: "हटाएँ",
      save: "ऑर्डर सेव करें",
      saveChanges: "बदलाव सेव करें",
      openOrders: "सेव किए गए ऑर्डर खोलें",
      savedOrders: "सेव किए गए ऑर्डर",
      close: "बंद करें",
      noOrders: "अभी तक कोई ऑर्डर सेव नहीं हुआ है।",
      completed: "पूर्ण",
      completedOrders: "✔ पूर्ण: {n} ऑर्डर",
      pendingOrders: "बाकी: {n} ऑर्डर",
      allOrders: "सभी: {n} ऑर्डर",
      markDone: "ऑर्डर पूर्ण करें",
      edit: "बदलें",
      whatsapp: "WhatsApp",
      delete: "हटाएँ",
      clearAll: "सभी ऑर्डर हटाएँ",
      toastNeedName: "पहले ग्राहक का नाम लिखें",
      toastNeedItem: "कम से कम एक पदार्थ चुनें",
      toastStorageOff: "सेव नहीं हो सका (स्टोरेज बंद है)",
      toastUpdated: "ऑर्डर अपडेट हो गया",
      toastSaved: "ऑर्डर सेव हो गया",
      toastEditHint: "बदलाव करके 'बदलाव सेव करें' दबाएँ",
      toastDone: "ऑर्डर पूर्ण हुआ",
      toastUndone: "ऑर्डर फिर से बाकी किया",
      toastDeleted: "ऑर्डर हटाया गया",
      toastClearedAll: "सभी ऑर्डर हटा दिए गए",
      confirmClearAll: "सभी {n} ऑर्डर हमेशा के लिए हटाएँ?",
      confirmDelete: "{name} का ऑर्डर हटाएँ?",
      waTitle: "दिवाली फराल ऑर्डर – {name}",
      waTotalWeight: "कुल वजन: {w}",
      waTotalAmount: "कुल रकम: {a}",
      language: "भाषा"
    }
  };

  const PRODUCTS = {
    mr: {
      chakli: { name: "चकली", sub: "" },
      karanji: { name: "करंजी", sub: "(ड्रायफ्रूट्स)" },
      ladu: { name: "बेसन लाडू", sub: "(साजूक तूप)" },
      god: { name: "गोड शंकरपाळे", sub: "" },
      khare: { name: "खारे शंकरपाळे", sub: "" },
      chivda: { name: "चिवडा", sub: "(पातळ पोहे)" }
    },
    en: {
      chakli: { name: "Chakli", sub: "" },
      karanji: { name: "Karanji", sub: "(dry fruits)" },
      ladu: { name: "Besan Ladu", sub: "(pure ghee)" },
      god: { name: "Sweet Shankarpali", sub: "" },
      khare: { name: "Salty Shankarpali", sub: "" },
      chivda: { name: "Chivda", sub: "(thin poha)" }
    },
    hi: {
      chakli: { name: "चकली", sub: "" },
      karanji: { name: "करंजी", sub: "(ड्राई फ्रूट्स)" },
      ladu: { name: "बेसन लड्डू", sub: "(शुद्ध घी)" },
      god: { name: "मीठे शंकरपाले", sub: "" },
      khare: { name: "नमकीन शंकरपाले", sub: "" },
      chivda: { name: "चिवड़ा", sub: "(पतले पोहे)" }
    }
  };

  /* Weight units, translated. Fractions (¼ ½ ¾) are universal. */
  const UNITS = {
    mr: { kg: "किलो", g: "ग्रॅम" },
    en: { kg: "kg", g: "g" },
    hi: { kg: "किलो", g: "ग्राम" }
  };

  let current = DEFAULT_LANG;
  try {
    const saved = global.localStorage.getItem(LANG_KEY);
    if (saved && LANGS[saved]) current = saved;
  } catch (e) { /* storage unavailable */ }

  function getLang() { return current; }
  function getLocale() { return LANGS[current].locale; }
  function unit(u) { return UNITS[current][u]; }

  function fmtW(g) {
    if (!g) return "0 " + unit("g");
    const kg = Math.floor(g / 1000), r = g % 1000, fr = { 250: "¼", 500: "½", 750: "¾" }[r];
    if (kg && !r) return kg + " " + unit("kg");
    if (kg && fr) return kg + " " + fr + " " + unit("kg");
    if (kg) return kg + " " + unit("kg") + " " + r + " " + unit("g");
    return fr ? fr + " " + unit("kg") : r + " " + unit("g");
  }

  function t(key, vars) {
    const str = (STRINGS[current] && STRINGS[current][key]) ??
                STRINGS[DEFAULT_LANG][key] ?? key;
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  }

  function tProduct(id) {
    return (PRODUCTS[current] && PRODUCTS[current][id]) ||
           PRODUCTS[DEFAULT_LANG][id] || { name: id, sub: "" };
  }

  function applyStaticTranslations(root) {
    const scope = root || document;
    document.documentElement.lang = LANGS[current].htmlLang;
    document.title = t("pageTitle");
    scope.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    scope.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    scope.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder)); });
  }

  function setLang(lang) {
    if (!LANGS[lang]) return false;
    current = lang;
    try { global.localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyStaticTranslations();
    global.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
    return true;
  }

  global.I18N = {
    LANGS, STRINGS, PRODUCTS,
    t, tProduct, unit, fmtW,
    getLang, getLocale, setLang, applyStaticTranslations
  };
  global.t = t;
  global.tProduct = tProduct;
  global.setLang = setLang;
  global.applyStaticTranslations = applyStaticTranslations;
})(window);
