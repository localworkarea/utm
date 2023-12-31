/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.main-slider__slider')) {
		new Swiper('.main-slider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation,Pagination,Autoplay,EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			speed: 1000,

			loop: true,
			effect: "fade",
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			// slideToClickedSlide: true,
			// keyboard: {
			// 	enabled: true,
			// 	onlyInViewport: true,
			// 	pageUpDown: true,
			// },
			// pagination: {
			// 	el: '.main-slider__pagination',
			// 	clickable: true,
			// 	dynamicBullets: true,
			// 	renderBullet: function(index, className) {
			// 		var texts = ['СРВ-1 <span class="bullet-num">01</span>', 'СЗДК <span class="bullet-num">02</span>', 'МСУД <span class="bullet-num">03</span>', 'БРУЕП <span class="bullet-num">04</span>', 'КПА МП <span class="bullet-num">05</span>', 'СПС-ПГ <span class="bullet-num">06</span>'];
			// 		return '<span class="' + className + '">' + texts[index] + '</span>';
			// 	}
			// },

			// navigation: {
			// 	prevEl: '.main-slider__slider .swiper-button-prev',
			// 	nextEl: '.main-slider__slider .swiper-button-next',
			// },
			breakpoints: {
				320: {
					pagination: {
						el: '.main-slider__pagination',
						clickable: true,
						dynamicBullets: true,
						renderBullet: function(index, className) {
							var texts = ['СПС-ПГ <span class="bullet-num">01</span>', 'СЗДК <span class="bullet-num">02</span>', 'МСУД <span class="bullet-num">03</span>', 'БРУЕП <span class="bullet-num">04</span>', 'КПА МП <span class="bullet-num">05</span>', 'СРВ-1 <span class="bullet-num">06</span>'];
							return '<span class="' + className + '">' + texts[index] + '</span>';
						}
					},
				},

				551: {
					pagination: {
						el: '.main-slider__pagination',
						clickable: true,
						renderBullet: function(index, className) {
							var texts = ['СПС-ПГ <span class="bullet-num">01</span>', 'СЗДК <span class="bullet-num">02</span>', 'МСУД <span class="bullet-num">03</span>', 'БРУЕП <span class="bullet-num">04</span>', 'КПА МП <span class="bullet-num">05</span>', 'СРВ-1 <span class="bullet-num">06</span>'];
							return '<span class="' + className + '">' + texts[index] + '</span>';
						}
					},
				},
			},
			on: {
				init: function() {
					adjustPagination();
					window.addEventListener('resize', adjustPagination);
				},
				slideChange: function() {
					adjustPagination();
				},
			}
		});
	}

	// === Слайдер главной страницы - движение пагинации с активным буллетом  в пределах вьюпорта
	function adjustPagination() {
    var paginationContainer = document.querySelector('.main-slider__pagination-wrapper');
    var activeBullet = paginationContainer.querySelector('.swiper-pagination-bullet-active');
    var containerWidth = paginationContainer.offsetWidth;
    var activeBulletOffset = activeBullet.offsetLeft;
    var activeBulletWidth = activeBullet.offsetWidth;
    var shiftAmount = 0;

    if (activeBulletOffset + activeBulletWidth > containerWidth) {
      shiftAmount = activeBulletOffset + activeBulletWidth - containerWidth + 10; // +10 для учета промежутка между буллетами
    } else if (activeBulletOffset < 0) {
      shiftAmount = activeBulletOffset - 10; // -10 для учета промежутка между буллетами
    }

    paginationContainer.scrollLeft += shiftAmount;

    var paginationWrapper = document.querySelector('.main-slider__pagination-wrapper');
    var paginationWrapperWidth = paginationWrapper.offsetWidth;
    var activeBulletPosition = activeBulletOffset + shiftAmount;
    var activeBulletLeft = activeBulletPosition - paginationWrapper.scrollLeft;
    var activeBulletRight = activeBulletLeft + activeBulletWidth;

    if (activeBulletLeft < 0) {
      paginationWrapper.scrollLeft += activeBulletLeft;
    } else if (activeBulletRight > paginationWrapperWidth) {
      paginationWrapper.scrollLeft += activeBulletRight - paginationWrapperWidth;
    }
  }

	if (document.querySelector('.products-about__slider')) { 
		new Swiper('.products-about__slider', { 
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			pagination: {
				el: '.products-about__pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
									'<span class="' + totalClass + '"></span>';
				}
			},
			navigation: {
				prevEl: '.products-about__btn.swiper-button-prev',
				nextEl: '.products-about__btn.swiper-button-next',
			},
			// Брейкпоінти
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: "auto",
			// 		spaceBetween: 20,
			// 		speed: 800,
			// 	},
			// 	// 400: {
			// 	// 	slidesPerView: 1.5,
			// 	// 	spaceBetween: 20,
			// 	// },
			// 	530: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	680: {
			// 		slidesPerView: 2.5,
			// 		spaceBetween: 20,
			// 	},
			// 	769: {
			// 		slidesPerView: "auto",
			// 		spaceBetween: 20,
			// 	},
			// 	1201: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 30,
			// 		speed: 1000,
			// 	},
			// },
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.devices-slider__slider')) { 
		new Swiper('.devices-slider__slider', { 
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 30,
			speed: 800,
			// loop: true,
			pagination: {
				el: '.devices-slider__pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
									'<span class="' + totalClass + '"></span>';
				}
			},
			navigation: {
				prevEl: '.devices-slider__btn.swiper-button-prev',
				nextEl: '.devices-slider__btn.swiper-button-next',
			},
			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 20,
				},
				481: {
					spaceBetween: 30,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.projectors-slider__slider')) { 
		new Swiper('.projectors-slider__slider', { 
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 30,
			speed: 800,
			// loop: true,
			pagination: {
				el: '.projectors-slider__pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
									'<span class="' + totalClass + '"></span>';
				}
			},
			navigation: {
				prevEl: '.projectors-slider__btn.swiper-button-prev',
				nextEl: '.projectors-slider__btn.swiper-button-next',
			},
			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 20,
				},
				481: {
					spaceBetween: 30,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.lamps-slider__slider')) { 
		new Swiper('.lamps-slider__slider', { 
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 30,
			speed: 800,
			// loop: true,
			pagination: {
				el: '.lamps-slider__pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
									'<span class="' + totalClass + '"></span>';
				}
			},
			navigation: {
				prevEl: '.lamps-slider__btn.swiper-button-prev',
				nextEl: '.lamps-slider__btn.swiper-button-next',
			},
			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 20,
				},
				481: {
					spaceBetween: 30,
				},
			},
			// Події
			on: {

			}
		});
	}
	// if (document.querySelector('.products-about__slider')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.products-about__slider', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Navigation,Pagination],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: 'products-about__slider .swiper-button-prev',
	// 			nextEl: 'products-about__slider .swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});