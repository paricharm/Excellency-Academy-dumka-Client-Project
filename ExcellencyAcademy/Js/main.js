(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1200);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Car Categories
    $(".categories-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
// our customer
    $('.carousel-testimony').owlCarousel({
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left test3"></i>',
            '<i class="fas fa-chevron-right test4"></i>'
        ],
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
    });
    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    // email code
    $("#btn").click(function(){
        var txt_name = $("#name").val();
        var txt_email = $("#email").val();
        var txt_subject = $("#subject").val();
        var txt_contact = $("#contact").val();
        var txt_message = $("#message").val();
        $.ajax({
            url:"submit.php",
            type:"POST",
            data:{name:txt_name,email:txt_email,subject:txt_subject,message:txt_message,contact:txt_contact},
            success:function(data){
                alert(data);
                swal({
                    title:"PR ASSOCIATES",
                    text:"Thank you for contacting us!",
                    icon:"success",
                    button:false,
                    timer:3000,
                    backdrop:false
                });
            }
        })
    })
    // index email code
    $(".btns").click(function(){
        var text_name = $(".names").val();
        var text_email = $(".emails").val();
        var text_contact = $(".contacts").val();
        $.ajax({
            url:"submit.php",
            type:"POST",
            data:{name:text_name,email:text_email,contact:text_contact},
            success:function(data){
                alert(data);
                swal({
                    title:"PR ASSOCIATES",
                    text:"Thank you for contacting us!",
                    icon:"success",
                    button:false,
                    timer:3000,
                    backdrop:false
                });
            }
        })
    })
})(jQuery);

