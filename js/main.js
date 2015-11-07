        $(function() {
        var limit = 90;
        var chars = $(".well-post-thumb .topic").text(); 
        if (chars.length > limit) {
            var visiblePart = $("<span> "+ chars.substr(0, limit) +"</span>");
            var dots = $("<span class='dots'>... </span>");
 
            $(".well-post-thumb .topic").empty()
                .append(visiblePart)
                .append(dots)
         }
    });
      jQuery(document).ready(function() {
             jQuery('.nailthumb-container').nailthumb({width:80,height:80,method:'resize',fitDirection:'top left'});
                });


                $('.owl-carousel').owlCarousel({
                    loop:false,
                    margin:30,
                    items:3,
                    nav:true,
                    navText: [
                      "<i class=' fa fa-chevron-left '></i>",
                      "<i class='fa fa-chevron-right  '></i>"
                      ],
                    responsive:{
                        1000:{
                            items:3,
                            margin:10,
                        }
                    }
                })
 			$(function() {
                $.material.init();
                $(".shor").noUiSlider({
                    start: 40,
                    connect: "lower",
                    range: {
                        min: 0,
                        max: 100
                    }
                });

                $(".svert").noUiSlider({
                    orientation: "vertical",
                    start: 40,
                    connect: "lower",
                    range: {
                        min: 0,
                        max: 100
                    }
                });
            });


     $(function () {
        function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
            $form.find('input').val('');
            $form.removeClass('active');
        }

        // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
        $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
            event.preventDefault();
            var $form = $(this).closest('form'),
                $input = $form.find('input');
            $form.addClass('active');
            $input.focus();
        });
        // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
        // if your form is ajax remember to call `closeSearch()` to close the search container
        $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
            event.preventDefault();
            var $form = $(this).closest('form'),
                $input = $form.find('input');
            $('#showSearchTerm').text($input.val());
            closeSearch()
        });
    });




