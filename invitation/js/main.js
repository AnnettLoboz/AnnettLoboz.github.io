
$(document).ready(function () {
    $('.about__toggle').click(function (event) {
        event.preventDefault()
        console.log('Click')

        $('.about-content__box').hide()

        var href = $(this).attr('href'); //#'private'

         console.log(href);

         $(href).show();
    });

    var windowHeight = $(window).height();
    console.log(windowHeight)

// Следим за скроллом и показываем/скрываем кнопку
     $(window).scroll(function () {
         console.log($ (this).scrollTop())

         if ($(this).scrollTop()> windowHeight){
             $('#scrollToTop').fadeIn();
         }
         else {
             $('#scrollToTop').fadeOut();
         }

     });

//

    // При кликен а кнопку прокручиваем на вверх

        $('#scrollToTop').click(function (event) {
            event.preventDefault();
            $('html').animate({scrollTop: 0},800)
    })



    })

