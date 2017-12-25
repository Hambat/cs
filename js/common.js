$(document).ready(function(){
	$(".main-slider__sidebar").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".main-slider__body",
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
	});
	//
	$(".main-slider__body").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: ".main-slider__sidebar",
		fade: true
	});
	//
	$(".main-slider__arrow").click(function(){
		var getSlider = $(this).siblings(".main-slider__body");
		if($(this).hasClass("main-slider__arrow--prev")){
			$(getSlider).slick("slickPrev");
		} else if($(this).hasClass("main-slider__arrow--next")){
			$(getSlider).slick("slickNext");
		}
	});
	//
	$(".b-slider__wrapper:not('.catalog-viewed__slider-wrapper')").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	//
	$(".main-heroes__slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$(".main-heroes__arrow").click(function(){
		var getSlider = $(this).siblings(".main-heroes__slider")
		if($(this).hasClass("main-heroes__arrow--prev")){
			$(getSlider).slick("slickPrev");
		} else if($(this).hasClass("main-heroes__arrow--next")){
			$(getSlider).slick("slickNext");
		}
	});
	//Вывод вложенного меню
	$(".main-slider__nav-item").hover(function(){
		var isTrue = $(this).find(".main-slider__nav-submenu");
		if(isTrue.length > 0){
			$("#layout").stop().fadeIn(300);
		}
		
	}, function(){
		$("#layout").stop().fadeOut(300);
	});

	//Вывод модального окна "Ваш город - ***?"
	$(".top__info-city .top__info-value").click(function(){
		$(".t-modal--cityconfirm").stop().fadeIn(300);
	});
	$(".t-modal--cityconfirm .t-modal__close").click(function(){
		$(".t-modal--cityconfirm").stop().fadeOut(300);
	});
	$(".t-modal__button-item--confirm").click(function(){
		$(".t-modal--cityconfirm").stop().fadeOut(300);
	});
	$(".t-modal__button-item--another").click(function(){
		$(".t-modal--cityconfirm").stop().fadeOut(300);
		$(".t-modal--citychoose").stop().fadeIn(300);
	});
	$(".t-modal--citychoose .t-modal__close").click(function(){
		$(".t-modal--citychoose").stop().fadeOut(300);
	});

	//Вывести карту с магазинами при клике на "** пункта выдачи заказов"
	$(".top__info-points .top__info-value").click(function(){
		showModal(".modal__form--shops");
	});

	//Вывести корзину (модальное окно) при клике на блок с корзиной в шапке
	$(".header__cart-icon").click(function(e){
		e.preventDefault();

		$(".t-modal--addtocart").stop().toggle(300);
	});

	//Изменить кол-во в корзине при клике на + и -
	$(".t-modal__cart-product-count-icon").click(function(){
		var getCurrentCounter = $(this).siblings(".t-modal__cart-product-count-value").find(".value");
		var getCurrentValue = parseInt($(getCurrentCounter).html());
		var newValue;

		if($(this).hasClass("t-modal__cart-product-count-icon--minus")){
			if(getCurrentValue - 1 != 0){
				newValue = getCurrentValue - 1;
			}
		} else if($(this).hasClass("t-modal__cart-product-count-icon--plus")){
			newValue = getCurrentValue + 1;
		}

		if(newValue != 0 && newValue != null && newValue != undefined){
			$(getCurrentCounter).html(newValue);
		}
	});

	//Манипуляции с модальными окнами
	$(".modal__layout").click(function(){
		closeModals();
	});

	/*Счетчик в слайдере на главной в блоке "Новинки"*/
	var sliderNewBlock = $(".main-news__slider-wrapper");
	var sliderNewTotalCount = $(sliderNewBlock).slick("getSlick").slideCount;
	//Подстановка общего кол-ва слайдов в слайдере
	$("#main-news .b-control__buttons-value-common span").html(sliderNewTotalCount);
	//Смена номера текущего слайда в счетчике
	$(sliderNewBlock).on('afterChange', function(event, slick, currentSlide, nextSlide){
		$("#main-news .b-control__buttons-value-current span").html(currentSlide + 1);
	});
	/*Кнопки переключения в слайдере на главной в блоке "Новинки"*/
	$("#main-news .b-control__buttons-arrow--prev").click(function(){
		$(sliderNewBlock).slick("slickPrev");
	});
	$("#main-news .b-control__buttons-arrow--next").click(function(){
		$(sliderNewBlock).slick("slickNext");
	});

	/*Счетчик в слайдере на главной в блоке "Скидки"*/
	var sliderDiscountBlock = $(".main-discount__slider-wrapper");
	var sliderDiscountTotalCount = $(sliderDiscountBlock).slick("getSlick").slideCount;
	//Подстановка общего кол-ва слайдов в слайдере
	$("#main-discount .b-control__buttons-value-common span").html(sliderDiscountTotalCount);
	//Смена номера текущего слайда в счетчике
	$(sliderDiscountBlock).on('afterChange', function(event, slick, currentSlide, nextSlide){
		$("#main-discount .b-control__buttons-value-current span").html(currentSlide + 1);
	});
	/*Кнопки переключения в слайдере на главной в блоке "Новинки"*/
	$("#main-discount .b-control__buttons-arrow--prev").click(function(){
		$(sliderDiscountBlock).slick("slickPrev");
	});
	$("#main-discount .b-control__buttons-arrow--next").click(function(){
		$(sliderDiscountBlock).slick("slickNext");
	});

	/*Счетчик в слайдере на главной в блоке "Фигурки"*/
	var sliderFigurinesBlock = $(".main-figurines__slider-wrapper");
	var sliderFigurinesTotalCount = $(sliderFigurinesBlock).slick("getSlick").slideCount;
	//Подстановка общего кол-ва слайдов в слайдере
	$("#main-figurines .b-control__buttons-value-common span").html(sliderFigurinesTotalCount);
	//Смена номера текущего слайда в счетчике
	$(sliderFigurinesBlock).on('afterChange', function(event, slick, currentSlide, nextSlide){
		$("#main-figurines .b-control__buttons-value-current span").html(currentSlide + 1);
	});
	/*Кнопки переключения в слайдере на главной в блоке "Новинки"*/
	$("#main-figurines .b-control__buttons-arrow--prev").click(function(){
		$(sliderFigurinesBlock).slick("slickPrev");
	});
	$("#main-figurines .b-control__buttons-arrow--next").click(function(){
		$(sliderFigurinesBlock).slick("slickNext");
	});

	//Вызов меню в моб.версии
	$(".header__mobile-burger").click(function(){
		$("#layout").stop().fadeIn(300);
		$(".header__mobile-menu").stop().fadeIn(300);
	});
	//Закрыть меню при клике на лейаут
	$("#layout").click(function(){
		$("#layout").stop().fadeOut(300);
		$(".header__mobile-menu").stop().fadeOut(300);
	});

	//Подключение виджета ВК
	VK.Widgets.Group("widget--vk", {
		mode: 0, 
		width: "200", 
		height: "330"
	}, 118291032);

	//Слайдер с ценой в фильтрах каталога
	$(".catalog__sidebar-filters-price-slider").slider({
		range: true,
		min: 0,
		max: 23000,
		values: [4000, 23000],
		animate: "fast",
		slide: function(event,ui){
			if(ui.handleIndex == 0){
				$(".catalog__sidebar-filters-price-input--start").val(ui.value);
			} else if(ui.handleIndex == 1){
				$(".catalog__sidebar-filters-price-input--end").val(ui.value);
			}
		}	
	});
	//Подставлять значения в слайдер с ценой при ручном изменении
	$(".catalog__sidebar-filters-price-input").on("change keyup",function(){
		var currentValue = $(this).val();

		if($(this).hasClass("catalog__sidebar-filters-price-input--start")){
			$(".catalog__sidebar-filters-price-slider").slider("values", 0, currentValue);
		} else if($(this).hasClass("catalog__sidebar-filters-price-input--end")){
			$(".catalog__sidebar-filters-price-slider").slider("values", 1, currentValue);
		}
	});

	//Переключение чекбокса в фильтрах при клике
	$(".catalog__sidebar-filters-item-icon").click(function(){
		if($(this).hasClass("catalog__sidebar-filters-item-icon--active")){
			$(this).removeClass("catalog__sidebar-filters-item-icon--active");
		} else{
			$(this).addClass("catalog__sidebar-filters-item-icon--active");
		}
	});

	//Выпадающие варианты сортировки/вывода(кол-во) на страницу
	$(".catalog__block-top-perpage-default").click(function(){
		if($(this).hasClass('catalog__block-top-perpage-default--active')){
			$(".catalog__block-top-perpage-options").stop().slideUp(300).removeClass("catalog__block-top-perpage-options--active");
			$(this).removeClass("catalog__block-top-perpage-default--active");
		} else{
			$(".catalog__block-top-perpage-options").stop().slideDown(300).addClass("catalog__block-top-perpage-options--active");
			$(this).addClass("catalog__block-top-perpage-default--active");
		}
	});
	//Выбор варианта из выпадающего меню
	$(".catalog__block-top-perpage-option").click(function(){
		var getValue = $(this).find(".catalog__block-top-perpage-option-value span").html();
		var getSlider = $(this).closest(".catalog__block-top-perpage-options").siblings(".catalog__block-top-perpage-default").find(".catalog__block-top-perpage-default-value span").html(getValue);
		//Закрыть список
		$(this).parent(".catalog__block-top-perpage-options").stop().slideUp().removeClass("catalog__block-top-perpage-options--active");
		$(this).closest(".catalog__block-top-perpage-wrapper").find(".catalog__block-top-perpage-default").removeClass("catalog__block-top-perpage-default--active");
	});

	//Слайдер в каталоге
	$(".catalog-viewed__slider-wrapper").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	/*Счетчик в слайдере на главной в блоке "Ранее просмотренные"*/
	var sliderViewedBlock = $(".catalog-viewed__slider-wrapper");
	var sliderViewedTotalCount = $(sliderViewedBlock).slick("getSlick").slideCount;
	//Подстановка общего кол-ва слайдов в слайдере
	$(".catalog__viewed .b-control__buttons-value-common span").html(sliderViewedTotalCount);
	//Смена номера текущего слайда в счетчике
	$(sliderViewedBlock).on('afterChange', function(event, slick, currentSlide, nextSlide){
		$(".catalog__viewed .b-control__buttons-value-current span").html(currentSlide + 1);
	});
	/*Кнопки переключения в слайдере на главной в блоке "Новинки"*/
	$(".catalog__viewed .b-control__buttons-arrow--prev").click(function(){
		$(sliderViewedBlock).slick("slickPrev");
	});
	$(".catalog__viewed .b-control__buttons-arrow--next").click(function(){
		$(sliderViewedBlock).slick("slickNext");
	});

	//Галочка подтверждения на странице входа
	$(".login__block-form-confirm-icon").click(function(){
		if($(this).hasClass("login__block-form-confirm-icon--active")){
			$(this).removeClass("login__block-form-confirm-icon--active");
		} else{
			$(this).addClass("login__block-form-confirm-icon--active");
		}
	});

	//Слайдер на странице товара (основное изображение)
	$(".product-info__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: ".product-info__preimage-slider",
	});
	//Слайдер на странице товара (с превью)
	$(".product-info__preimage-slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: ".product-info__slider",
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	//Кнопки управления слайдером
	$(".product-info__preimage-arrow").click(function(){
		if($(this).hasClass("product-info__preimage-arrow--prev")){
			$(".product-info__slider").slick("slickPrev");
		} else if($(this).hasClass("product-info__preimage-arrow--next")){
			$(".product-info__slider").slick("slickNext");
		}
	});

	/*Счетчик в слайдере на странице товара в блоке "Недавно просмотренные"*/
	var sliderProductViewedBlock = $(".product-seen__slider-wrapper");
	var sliderProductViewedTotalCount = $(sliderProductViewedBlock).slick("getSlick").slideCount;
	//Подстановка общего кол-ва слайдов в слайдере
	$("#product-seen .b-control__buttons-value-common span").html(sliderProductViewedTotalCount);
	//Смена номера текущего слайда в счетчике
	$(sliderProductViewedBlock).on('afterChange', function(event, slick, currentSlide, nextSlide){
		$("#product-seen .b-control__buttons-value-current span").html(currentSlide + 1);
	});
	/*Кнопки переключения в слайдере на главной в блоке "Новинки"*/
	$("#product-seen .b-control__buttons-arrow--prev").click(function(){
		$(sliderProductViewedBlock).slick("slickPrev");
	});
	$("#product-seen .b-control__buttons-arrow--next").click(function(){
		$(sliderProductViewedBlock).slick("slickNext");
	});


	//Изменить кол-во в корзине при клике на + и - (на странице корзины)
	$(".cart__block-row-count-button").click(function(){
		var getCurrentCounter = $(this).siblings(".cart__block-row-count-value").find(".cart__block-row-count-input");
		var getCurrentValue = parseInt($(getCurrentCounter).attr("value"));
		var newValue;

		console.log(getCurrentValue);
		if($(this).hasClass("cart__block-row-count-button--prev")){
			if(getCurrentValue - 1 != 0){
				newValue = getCurrentValue - 1;
			}
		} else if($(this).hasClass("cart__block-row-count-button--next")){
			newValue = getCurrentValue + 1;
		}

		if(newValue != 0 && newValue != null && newValue != undefined){
			$(getCurrentCounter).attr("value", newValue).val(newValue);
		}
	});

	//Выпадающий список с городами (для доставки) на странице корзины
	$(".cart__order-delivery-city-default").click(function(){
		if($(this).parent().hasClass("cart__order-delivery-city--active")){
			$(this).parent().removeClass("cart__order-delivery-city--active");
			$(this).parent().find(".cart__order-delivery-city-options").stop().slideUp(300);
		} else{
			$(this).parent().addClass("cart__order-delivery-city--active");
			$(this).parent().find(".cart__order-delivery-city-options").stop().slideDown(300);
		}
	});
	$(".cart__order-delivery-city-option").click(function(){
		var getCurrentValue = $(this).find(".cart__order-delivery-city-option-value span").html();

		$(this).closest(".cart__order-delivery-city-options").siblings(".cart__order-delivery-city-default").find(".cart__order-delivery-city-default-value span").html(getCurrentValue);
		$(".cart__order-delivery-city-options").stop().slideUp(300);
		$(".cart__order-delivery-city").removeClass("cart__order-delivery-city--active");
	});	

	//Галочка в корзине (страница)
	$(".cart__order-userdata-confirm-block-icon").click(function(){
		if($(this).hasClass("cart__order-userdata-confirm-block-icon--active")){
			$(this).removeClass("cart__order-userdata-confirm-block-icon--active");
		} else{
			$(this).addClass("cart__order-userdata-confirm-block-icon--active");
		}
	});

	//Маска на поле с телефоном
	$("input#masked-phone").mask("+7 (999) 999-99-99");

	//Выпадающий список при клике (на странице настроек ЛК)
	$(".lk-main__settings-block-item-city-default").click(function(){
		var getDefaultInput = $(this).find("lk-main__settings-block-item-city-default-value");

		if($(this).hasClass("lk-main__settings-block-item-city-default--active")){
			$(this).removeClass("lk-main__settings-block-item-city-default--active");
			$(".lk-main__settings-block-item-city-options").stop().slideUp(300);
		} else{
			$(this).addClass("lk-main__settings-block-item-city-default--active");
			$(".lk-main__settings-block-item-city-options").stop().slideDown(300);
		}
	});
	$(".lk-main__settings-block-item-city-options-item").click(function(){
		var getValue = $(this).find("span").html();

		$(".lk-main__settings-block-item-city-default-value").attr("value", getValue).val(getValue);
		$(".lk-main__settings-block-item-city-options").stop().slideUp(300);
		$(".lk-main__settings-block-item-city-default").removeClass("lk-main__settings-block-item-city-default--active");
	});

	//Кнопки управления слайдеро на странице корзины
	$("#cart-slider .b-control__buttons-arrow--prev").click(function(){
		$("#cart-slider .cart-slider__slider-wrapper").slick("slickPrev");
	});
	$("#cart-slider .b-control__buttons-arrow--next").click(function(){
		$("#cart-slider .cart-slider__slider-wrapper").slick("slickNext");
	});
});
//Показать модальное окно
function showModal(modalSelector){
	$("#modal").stop().fadeIn(300);
	$(".modal__layout").stop().fadeIn(300);
	$(modalSelector).stop().fadeIn(300);
}
//Закрыть модальные окна
function closeModals(){
	$("#modal").stop().fadeOut(300);
	$(".modal__layout").stop().fadeOut(300);
	$(".modal__form").stop().fadeOut(300);
}