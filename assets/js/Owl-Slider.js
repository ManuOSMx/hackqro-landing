$(document).ready(function (e) {
    $(".slider").owlCarousel({
        center: true,
        autoWidth: true,
        loop: true,
        nav: true,
        navSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsiveClass: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
            }
        }
    });
})

$(".owl-prev").html("<i class='fas fa-chevron-left'></i>")
$(".owl-next").html("<i class='fas fa-chevron-right'></i>")