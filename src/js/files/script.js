// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// Открытие/закрытие .header__language ===========================================
const headerLanguageBtn = document.querySelector('.header__language');
const headerLngs = document.querySelector('.header__lngs');
if (headerLanguageBtn) {
  function toggleHeaderLngs() {
    headerLngs.classList.toggle('_open');
  }
  
  function removeHeaderLngs() {
    headerLngs.classList.remove('_open');
  }
  
  headerLanguageBtn.addEventListener('click', function(event) {
    if (event.target === headerLanguageBtn) {
      toggleHeaderLngs();
    } else {
      removeHeaderLngs();
    }
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.header__lngs')) {
      removeHeaderLngs();
    }
  });
}

// Открытие и закрытие .menu__link_btn =======================
const menuLinkBtns = document.querySelectorAll('.menu__link_btn');

if (menuLinkBtns) {
  const header = document.querySelector('.header');

  menuLinkBtns.forEach((button) => {
    button.addEventListener('click', toggleOpenClass);
  });

  function toggleOpenClass(event) {
    const target = event.currentTarget;
    const parentItem = target.parentNode;
    const isOpen = target.classList.contains('_open');
    const isSubmenuOpen = parentItem.classList.contains('_open-submenu');
    const isSubMenuLink = event.target.closest('.product-submenu__link, .systems-submenu__link');

    if (!isSubMenuLink) {
      if (!isOpen) {
        closeAllMenuLinkBtns();
        closeAllSubmenus();
        target.classList.add('_open');
        parentItem.classList.add('_open-submenu');
        header.classList.add('_open-menu-sub'); // Добавляем класс родительскому элементу .header
        document.addEventListener('click', closeIfOutsideClick);
      } else {
        target.classList.remove('_open');
        parentItem.classList.remove('_open-submenu');
        header.classList.remove('_open-menu-sub'); // Удаляем класс у родительского элемента .header
        document.removeEventListener('click', closeIfOutsideClick);
      }
    }

    event.stopPropagation();
  }

  function closeIfOutsideClick(event) {
    const isMenuLinkBtn = event.target.closest('.menu__link_btn');
    const isMenuLinkBtnDescendant = event.target.closest('.menu__link_btn *');
    const isMenuItem = event.target.closest('.menu__item');
    const isMenuSublist = event.target.closest('.menu__sublist');
    const isMenuSublistDescendant = event.target.closest('.menu__sublist *');
    const isProductSubmenuItem = event.target.closest('.product-submenu__item');
    const isSystemsSubmenuItem = event.target.closest('.systems-submenu__item');

    if (
      !isMenuLinkBtn &&
      !isMenuLinkBtnDescendant &&
      !isMenuItem &&
      !isMenuSublist &&
      !isMenuSublistDescendant &&
      !isProductSubmenuItem &&
      !isSystemsSubmenuItem
    ) {
      closeAllMenuLinkBtns();
      closeAllSubmenus();
      header.classList.remove('_open-menu-sub'); // Удаляем класс у родительского элемента .header
      document.removeEventListener('click', closeIfOutsideClick);
    }
  }

  function closeAllMenuLinkBtns() {
    menuLinkBtns.forEach((button) => {
      button.classList.remove('_open');
    });
  }

  function closeAllSubmenus() {
    const submenuItems = document.querySelectorAll('.menu__item._open-submenu');

    submenuItems.forEach((item) => {
      item.classList.remove('_open-submenu');
    });
  }

  // Исправленный код начинается здесь
  const submenuLinks = document.querySelectorAll('.product-submenu__link, .systems-submenu__link');

  submenuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });
}





