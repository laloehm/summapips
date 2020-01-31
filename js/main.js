    new WOW().init();

    // Funcion para barra de Manu
    $(window).scroll(function () {
        let navbar = $(".navbar");
        if ($(navbar).offset().top > 200) {
            $(navbar).css("background", "rgba(255,255,255)");
        } else {
            $(navbar).css("background", "transparent");
        }
    });

    /* Smooth scrolling para anclas */
    $("a.smooth").on("click", function (e) {
        e.preventDefault();
        var $link = $(this);
        var anchor = $link.attr("href");
        $("html, body")
            .stop()
            .animate({
                    scrollTop: $(anchor).offset().top - 100 + "px"
                },
                1000
            );
    });

    $(".collapse").on("click", "a", function () {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").removeClass("active");
        $('.icon').removeClass('open')
    });

    // Toggle open class for each icon
    (function fireTrigger() {
        const icons = document.querySelectorAll('.icon');
        icons.forEach(function (icon) {
            icon.addEventListener('click', function () {
                this.classList.toggle('open');
            });
        })
    }());

    $(document).ready(function () {

        // $(".owl-carousel").owlCarousel();
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },

                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    });

    // ScrollReveal().reveal('.left', {
    //     distance: '100px',
    //     delay: 300,
    //     origin: 'left'
    // });
    // ScrollReveal().reveal('.right', {
    //     distance: '100px',
    //     delay: 300,
    //     origin: 'right'
    // });
    // ScrollReveal().reveal('.appear', {
    //     interval: 300
    // });
    // ScrollReveal().reveal('.left', {
    //     mobile: false
    // });
    // ScrollReveal().reveal('.delay', {
    //     delay: 200
    // });