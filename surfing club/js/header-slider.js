$(document).ready(function(){

    var headerSlider = $("#headerSlider");

    headerSlider.on('initialized.owl.carousel', function(event){
        $('.slide-controls-number__active').text(event.item.index +1);
        $('.slide-controls-number__total').text(event.item.count)
    });
    headerSlider.owlCarousel({
        items: 1,
        // loop: true,
        dots: false,
        smartSpeed: 1500,
    });

    $('#headerSliderLeft').click(function() {
        console.log('Left');
        headerSlider.trigger('prev.owl.carousel');
    })

    $('#headerSliderRight').click(function() {
        console.log('Right');
        headerSlider.trigger('next.owl.carousel');
    });
    headerSlider.on('changed.owl.carousel', function(event){
        $('.slide-controls-number__active').text(event.item.index +1);
        $('.slide-controls-number__total').text(event.item.count)
    });
});