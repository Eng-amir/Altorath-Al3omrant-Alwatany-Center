


    var $window = $(window);

    $window.on('load', function () {
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        });


    $(document).ready(function(){
   // $('.card-title').addClass('acc-title');

    $('[data-toggle="tooltip"]').tooltip();

    $('.header').on('click', '.search-toggle', function(e) {
        var selector = $(this).data('selector');

        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');

        e.preventDefault();
    });



    //Main Slider
    $('#main-slider').owlCarousel( {
        stagePadding: 0,
        rtl:true,
        loop: true,
       rewind:true,
        items: 1,
        autoHeight:true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        dots:true,
        responsiveClass:true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 80000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/slider-right-arrow.png">','<img src="images/slider-left-arrow.png">'],

    });


    //hirtage sites carousel
    $('#hirtage-sites').owlCarousel( {
        stagePadding: 100,
        rtl:true,
        loop: true,
        center: true,
        //items: 3,
        lazyLoad: true,
        video: true,
        rewind: true,
        mouseDrag: true,
        dots:true,
        responsiveClass:true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:false,
        //navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0:{
                stagePadding: false,
                items:1,
                nav: false,
                loop:true
            },
            480:{

                items:1,
                nav:false,
                loop:true
            },
            768:{
                items:2,
                nav:false,
                loop:true
            },
            991:{
                items:3,
                nav:false,
                loop:true

            },
            1200:{
                items:3,
                nav:false,
                loop:true
            }
        }
    });

    //hirtage projects carousel
    $('#hirtage-projects').owlCarousel( {


        stagePadding: 100,
        rtl:true,
        loop: true,
        center: false,
        items: 2,
       // mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 20,
        lazyLoad:true,
        autoplay: true,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:false,
       // navText: ['<i class="fa fa-long-arrow-right"></i>','<i class="fa fa-long-arrow-left"></i>'],
        responsive: {
            0:{
                stagePadding: 0,
                items:1,

            },
            480:{
                items:3,
                stagePadding: 0,
                loop:true
            },
            768:{
                items:2,
                stagePadding: 100,
                loop:true
            },
            991:{
                items:2,
            },
            1200:{
                items:2,
            },
            1600:{
                items:3
            }
        }
    });

    $('#article-slider').owlCarousel( {
        stagePadding: 0,
        rtl:true,
        loop: true,
        // rewind:true,
        //center: true,
        items: 1,
        autoHeight:false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        dots:false,
        responsiveClass:true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 500,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        nav:true,
        navText: ['<img src="images/slider-right-arrow.png">','<img src="images/slider-left-arrow.png">'],

    });

    $('#related-images').owlCarousel( {
        //stagePadding: 100,
        rtl:true,
        loop: true,
        // center: false,
        items: 5,
        // mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 20,
        lazyLoad:true,
        autoplay: true,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        responsive: {
            0:{
                stagePadding: 0,
                items:1,
                // nav: false,
                // loop:true,

            },
            480:{
                items:2,
                stagePadding: 0,
                loop:true
            },
            768:{
                items:3,
                stagePadding: 0,
                loop:true
            },
            991:{
                items:4,
                loop:true

            },
            1200:{
                items:5,
                loop:true
            }
        }
    });

    $('#related-videos').owlCarousel( {
        //stagePadding: 100,
        rtl:true,
        loop: true,
        //merge: false,
        video:true,
        lazyLoad:false,
       videoWidth: true, // Default false; Type: Boolean/Number
       videoHeight: 260, // Default false; Type: Boolean/Number
        center: false,
        merge:false,
        items: 3,
        // mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 10,
        autoplay: true,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        responsive: {
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    //hirtage-single-videos
    $('#hirtage-single-videos').owlCarousel( {
        //stagePadding: 100,
        rtl:true,
        loop: true,
        merge: true,
        video:true,
        lazyLoad:false,
        videoWidth: 350, // Default false; Type: Boolean/Number
        videoHeight: 260, // Default false; Type: Boolean/Number
        center: false,
        items: 3,
        //mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 20,
        autoplay: false,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        responsive: {
            0:{
                items:1,
                videoWidth: "100%", // Default false; Type: Boolean/Number
                videoHeight: 260, // Default false; Type: Boolean/Number
            },
            480:{
                items:2,
                videoWidth: "50%", // Default false; Type: Boolean/Number
                videoHeight: 260, // Default false; Type: Boolean/Number
                loop:true
            },
            768:{
                items:2,
                loop:true
            },
            991:{
                items:3,
                loop:true
            },
            1200:{
                items:3,
                loop:true
            }
        }
    });

    //related-images2
    $('#related-images2').owlCarousel( {
        //stagePadding: 100,
        rtl:true,
        loop: true,
        // center: false,
        items: 5,
        // mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 20,
        lazyLoad:true,
        autoplay: true,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        responsive: {
            0:{
                stagePadding: 0,
                items:1,
                // nav: false,
                // loop:true,

            },
            480:{
                items:2,
                stagePadding: 0,
                loop:true
            },
            768:{
                items:4,
                stagePadding: 0,
                loop:true
            },
            991:{
                items:5,

                loop:true

            },
            1200:{
                items:5,

                loop:true
            }
        }
    });

    var owl = $('#hirtage-projects');
    owl.owlCarousel();

    $('.NextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.PrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});

// get file name of bootstrap custom input file
$('#customFile, #customFileattachments').on('change',function(){
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
});


//convert tabs to accordion

var fakewaffle = ( function ( $, fakewaffle ) {
    'use strict';

    fakewaffle.responsiveTabs = function ( collapseDisplayed ) {

        fakewaffle.currentPosition = 'tabs';

        var tabGroups = $( '.nav-tabs.responsive' );
        var hidden    = '';
        var visible   = '';
        var activeTab = '';

		if ( collapseDisplayed === undefined ) {
			collapseDisplayed = [ 'xs', 'sm' ];
		}

		$.each( collapseDisplayed, function () {
			hidden  += ' hidden-' + this;
			visible += ' visible-' + this;
		} );

        hidden = ' d-none d-sm-flex';
        visible = ' d-sm-none';

        $.each( tabGroups, function ( index ) {
            var collapseDiv;
            var $tabGroup = $( this );
            var tabs      = $tabGroup.find( 'li a' );

            if ( $tabGroup.attr( 'id' ) === undefined ) {
                $tabGroup.attr( 'id', 'tabs-' + index );
            }

            collapseDiv = $( '<div></div>', {
                'class' : 'card-soup responsive' + visible,
                'id'    : 'collapse-' + $tabGroup.attr( 'id' )
            } );

            $.each( tabs, function () {
                var $this          = $( this );
                var oldLinkClass   = $this.attr( 'class' ) === undefined ? '' : $this.attr( 'class' );
                var newLinkClass   = 'accordion-toggle';
                var oldParentClass = $this.parent().attr( 'class' ) === undefined ? '' : $this.parent().attr( 'class' );
                var newParentClass = 'card';
                var newHash        = $this.get( 0 ).hash.replace( '#', 'collapse-' );

                if ( oldLinkClass.length > 0 ) {
                    newLinkClass += ' ' + oldLinkClass;
                }

                if ( oldParentClass.length > 0 ) {
                    oldParentClass = oldParentClass.replace( /\bactive\b/g, '' );
                    newParentClass += ' ' + oldParentClass;
                    newParentClass = newParentClass.replace( /\s{2,}/g, ' ' );
                    newParentClass = newParentClass.replace( /^\s+|\s+$/g, '' );
                }

                if ( $this.parent().hasClass( 'active' ) ) {
                    activeTab = '#' + newHash;
                }

                collapseDiv.append(
                    $( '<div>' ).attr( 'class', newParentClass ).html(
                        $( '<div>' ).attr( 'class', 'card-header' ).html(
                            $( '<h4>' ).attr( 'class', 'card-title' ).html(
                                $('<a>', {
                                    'class': newLinkClass,
                                    'data-toggle': 'collapse',
                                    'data-parent': '#collapse-' + $tabGroup.attr('id'),
                                    'href': '#collapse-' + $this.attr('href').replace(/#/g, ''),
                                    'html': $this.html()
                                } )
                            )
                        )
                    ).append(
                        $( '<div>', {
                            'id': 'collapse-' + $this.attr('href').replace(/#/g, ''),
                            'class' : 'collapse'
                        } )
                    )
                );
            } );

            $tabGroup.next().after( collapseDiv );
            $tabGroup.addClass( hidden );
            $( '.tab-content.responsive' ).addClass( hidden );

            if ( activeTab ) {
                $( activeTab ).collapse( 'show' );
            }

        } );

        fakewaffle.checkResize();
        fakewaffle.bindTabToCollapse();
    };

    fakewaffle.checkResize = function () {

        if ( $( '.card-soup.responsive' ).is( ':visible' ) === true && fakewaffle.currentPosition === 'tabs' ) {
            fakewaffle.tabToPanel();
            fakewaffle.currentPosition = 'panel';
        } else if ( $( '.card-soup.responsive' ).is( ':visible' ) === false && fakewaffle.currentPosition === 'panel' ) {
            fakewaffle.panelToTab();
            fakewaffle.currentPosition = 'tabs';
        }

    };

    fakewaffle.tabToPanel = function () {

        var tabGroups = $( '.nav-tabs.responsive' );

        $.each( tabGroups, function ( index, tabGroup ) {

            // Find the tab
            var tabContents = $( tabGroup ).next( '.tab-content' ).find( '.tab-pane' );

            $.each( tabContents, function ( index, tabContent ) {
                // Find the id to move the element to
                var destinationId = $( tabContent ).attr( 'id' ).replace ( /^/, '#collapse-' );

                // Convert tab to panel and move to destination
                $( tabContent )
                    .removeClass( 'tab-pane' )
                    .addClass( 'card-body fw-previous-tab-pane' )
                    .appendTo( $( destinationId ) );

            } );

        } );

    };

    fakewaffle.panelToTab = function () {

        var panelGroups = $( '.card-soup.responsive' );

        $.each( panelGroups, function ( index, panelGroup ) {

            var destinationId = $( panelGroup ).attr( 'id' ).replace( 'collapse-', '#' );
            var destination   = $( destinationId ).next( '.tab-content' )[ 0 ];

            // Find the panel contents
            var panelContents = $( panelGroup ).find( '.card-body.fw-previous-tab-pane' );

            // Convert to tab and move to destination
            panelContents
                .removeClass( 'card-body fw-previous-tab-pane' )
                .addClass( 'tab-pane' )
                .appendTo( $( destination ) );

        } );

    };


    fakewaffle.bindTabToCollapse = function () {

        var tabs = $('.nav-tabs.responsive').find('li a'),
            collapse = $(".panel-group.responsive").find('.panel-collapse');

        tabs.on('shown.bs.tab', function (e) {
            var $current = $($(e.target)[0].hash.replace(/#/, '#collapse-'));
            $current.collapse('show');

            if (e.relatedTarget) {
                var $previous = $($(e.relatedTarget)[0].hash.replace(/#/, '#collapse-'));
                $previous.collapse('hide');

            }
        });

        collapse.on('show.bs.collapse', function (e) {
            var current = $(e.target).context.id.replace(/collapse-/g, '#');

            $('a[href="' + current + '"]').tab('collapse');

        });
    }

    $( window ).resize( function () {
        fakewaffle.checkResize();
    } );

    return fakewaffle;
}( window.jQuery, fakewaffle || { } ) );


fakewaffle.responsiveTabs();



//animation

function onScrollInit( items, trigger ) {
    items.each( function() {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
        },{
            triggerOnce: true,
            offset: '90%'
        });
    });
}

onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );


// Get IE or Edge browser version
// var version = detectIE();
//
// if( version !== false ) {
//     alert( 'Please view in Chrome/Safari/Firefox' );
// }
// /**
//  * detect IE
//  * returns version of IE or false, if browser is not Internet Explorer
//  */
// function detectIE() {
//     var ua = window.navigator.userAgent;
//
//     var msie = ua.indexOf('MSIE ');
//     if (msie > 0) {
//         // IE 10 or older => return version number
//         return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//     }
//
//     var trident = ua.indexOf('Trident/');
//     if (trident > 0) {
//         // IE 11 => return version number
//         var rv = ua.indexOf('rv:');
//         return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
//     }
//
//     var edge = ua.indexOf('Edge/');
//     if (edge > 0) {
//         // Edge (IE 12+) => return version number
//         return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
//     }
//
//     // other browser
//     return false;
// }


