$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/all/arrow_right.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/all/arrow_left.png"></button>',
        responsive: [
        {
        breakpoint: 576,
        settings: {
            arrows: false
      }
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        }) 
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
     
      //Modal
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
      });
      $('.button_mini').each(function(i) {
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        })
      });



      function validateForms(form) {
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "Введите ваше имя",
            phone: "Введите ваш номер телефона",
            email: {
              required: "Введите ваш адрес email",
              email: "Неверный формат email"
            }
          }
        });
      };
      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');


      $('input[name=phone]').mask("+7 (999) 999-99-99");


      $(window).scroll(function(){
        if ($(this).scrollTop() >1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });



      new WOW().init();

      
  });