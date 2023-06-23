// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// // Открытие/закрытие .header__language ===========================================
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



// Получаем все элементы menu__link_btn
const menuLinkBtns = document.querySelectorAll('.menu__link_btn');

if (menuLinkBtns) {
  // Получаем все внутренние ссылки product-submenu__link
  const submenuLinks = document.querySelectorAll('.product-submenu__link');

  // Обработчик события для каждого элемента menu__link_btn
  menuLinkBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('_open');

      // Удаление классов _open у всех кнопок и родительских элементов
      menuLinkBtns.forEach((btn) => {
        btn.classList.remove('_open');
        btn.parentNode.classList.remove('_open-submenu');
      });

      // Добавление классов _open текущей кнопке и родительскому элементу
      if (!isOpen) {
        btn.classList.add('_open');
        btn.parentNode.classList.add('_open-submenu');
        document.querySelector('.header').classList.add('_open-menu-sub'); // Добавляем класс _open-menu-sub к .header
      } else {
        document.querySelector('.header').classList.remove('_open-menu-sub'); // Удаляем класс _open-menu-sub из .header
      }
    });
  });

  // Обработчик события для каждой ссылки product-submenu__link
  submenuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал клик на menu__link_btn
      // Добавьте свой код для обработки действий при клике на внутреннюю ссылку
      // Например, перенаправление пользователя на другую страницу
    });
  });

  // Обработчик события для клика на документе
  document.addEventListener('click', (event) => {
    const target = event.target;
    const header = document.querySelector('.header');

    // Проверяем, является ли кликнутый элемент .menu__link_btn или его родительским элементом
    const isMenuLinkBtn = target.classList.contains('menu__link_btn') || target.closest('.menu__link_btn');

    // Проверяем, является ли кликнутый элемент .header или его потомком
    const isHeader = target.classList.contains('header') || target.closest('.header');

    // Удаляем классы _open и _open-submenu, если кликнули не на .menu__link_btn или .header
    if (!isMenuLinkBtn && !isHeader) {
      menuLinkBtns.forEach((btn) => {
        btn.classList.remove('_open');
        btn.parentNode.classList.remove('_open-submenu');
      });
      header.classList.remove('_open-menu-sub');
    }
  });
}









//===========================================================================================================================================================================

// Открытие и закрытие .menu__link_btn =======================
// const menuLinkBtns = document.querySelectorAll('.menu__link_btn');

// if (menuLinkBtns) {
//   const header = document.querySelector('.header');

//   menuLinkBtns.forEach((button) => {
//     button.addEventListener('click', toggleOpenClass);
//   });

//   function toggleOpenClass(event) {
//     const target = event.currentTarget;
//     const parentItem = target.parentNode;
//     const isOpen = target.classList.contains('_open');
//     const isSubmenuOpen = parentItem.classList.contains('_open-submenu');
//     const isSubMenuLink = event.target.closest('.product-submenu__link, .systems-submenu__link');

//     if (!isSubMenuLink) {
//       if (!isOpen) {
//         closeAllMenuLinkBtns();
//         closeAllSubmenus();
//         target.classList.add('_open');
//         parentItem.classList.add('_open-submenu');
//         header.classList.add('_open-menu-sub'); // Добавляем класс родительскому элементу .header
//         document.addEventListener('click', closeIfOutsideClick);
//       } else {
//         target.classList.remove('_open');
//         parentItem.classList.remove('_open-submenu');
//         header.classList.remove('_open-menu-sub'); // Удаляем класс у родительского элемента .header
//         document.removeEventListener('click', closeIfOutsideClick);
//       }
//     }

//     event.stopPropagation();
//   }

//   function closeIfOutsideClick(event) {
//     const isMenuLinkBtn = event.target.closest('.menu__link_btn');
//     const isMenuLinkBtnDescendant = event.target.closest('.menu__link_btn *');
//     const isMenuItem = event.target.closest('.menu__item');
//     const isMenuSublist = event.target.closest('.menu__sublist');
//     const isMenuSublistDescendant = event.target.closest('.menu__sublist *');
//     const isProductSubmenuItem = event.target.closest('.product-submenu__item');
//     const isSystemsSubmenuItem = event.target.closest('.systems-submenu__item');

//     if (
//       !isMenuLinkBtn &&
//       !isMenuLinkBtnDescendant &&
//       !isMenuItem &&
//       !isMenuSublist &&
//       !isMenuSublistDescendant &&
//       !isProductSubmenuItem &&
//       !isSystemsSubmenuItem
//     ) {
//       closeAllMenuLinkBtns();
//       closeAllSubmenus();
//       header.classList.remove('_open-menu-sub'); // Удаляем класс у родительского элемента .header
//       document.removeEventListener('click', closeIfOutsideClick);
//     }
//   }

//   function closeAllMenuLinkBtns() {
//     menuLinkBtns.forEach((button) => {
//       button.classList.remove('_open');
//     });
//   }

//   function closeAllSubmenus() {
//     const submenuItems = document.querySelectorAll('.menu__item._open-submenu');

//     submenuItems.forEach((item) => {
//       item.classList.remove('_open-submenu');
//     });
//   }

//   // Исправленный код начинается здесь
//   const submenuLinks = document.querySelectorAll('.product-submenu__link, .systems-submenu__link');

//   submenuLinks.forEach((link) => {
//     link.addEventListener('click', (event) => {
//       event.stopPropagation();
//     });
//   });
// }
