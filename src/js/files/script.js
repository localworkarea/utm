// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// Открытие/закрытие .header__language ===========================================
// const headerLanguageBtn = document.querySelector('.header__language');
// const headerLngs = document.querySelector('.header__lngs');
// if (headerLanguageBtn) {
//   function toggleHeaderLngs() {
//     headerLngs.classList.toggle('_open');
//   }
  
//   function removeHeaderLngs() {
//     headerLngs.classList.remove('_open');
//   }
  
//   headerLanguageBtn.addEventListener('click', function(event) {
//     if (event.target === headerLanguageBtn) {
//       toggleHeaderLngs();
//     } else {
//       removeHeaderLngs();
//     }
//   });
  
//   document.addEventListener('click', function(event) {
//     if (!event.target.closest('.header__lngs')) {
//       removeHeaderLngs();
//     }
//   });
// }
// Получаем необходимые элементы

// Получаем необходимые элементы
const menuItems = document.querySelectorAll('.menu__item-submenu');
const header = document.querySelector('.header');
const menuLinkBtns = Array.from(document.querySelectorAll('.menu__link_btn'));
const menuSublist = document.querySelector('.menu__sublist');

// Функция для добавления класса
function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

// Функция для удаления класса
function removeClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

// Обработчик события при ховере на элементы menu__item-submenu (разрешение > 1101px)
function handleHover() {
  if (window.innerWidth > 1101) {
    addClass(header, '_open-menu-sub');
    addClass(this, '_open');
  }
}

// Обработчик события при уходе с элементов menu__item-submenu (разрешение > 1101px)
function handleLeave() {
  if (window.innerWidth > 1101) {
    removeClass(header, '_open-menu-sub');
    removeClass(this, '_open');
  }
}

// Обработчик события при клике на элементы menu__link_btn (разрешение < 1100)
function handleClick(event) {
  if (window.innerWidth < 1100) {
    event.preventDefault(); // Отменяем действие ссылки
    const parentItem = event.currentTarget.closest('.menu__item-submenu');
    if (parentItem) {
      if (!event.target.closest('.product-tab-submenu')) {
        menuItems.forEach((item) => {
          if (item !== parentItem) {
            removeClass(item, '_open-submenu');
          }
        });
      }
      parentItem.classList.toggle('_open-submenu');
    }
  }
}

// Добавляем обработчики событий к элементам
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', handleHover);
  item.addEventListener('mouseleave', handleLeave);
});

menuLinkBtns.forEach((menuLinkBtn) => {
  menuLinkBtn.addEventListener('click', handleClick);
});

// Обработчик события при клике на кнопку menu__icon
const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    menuItems.forEach((item) => {
      removeClass(item, '_open-submenu');
    });
  });
}

