var Utils = {hasAttr: function (t, i) {
        return void 0 !== t.attr(i) && !1 !== t.attr(i)
    }, isMobile: function () {
        return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && window.innerWidth < 992
    }};
function SlaytlarVideo() {
    var t = $(".slaytlarScreen .owl-carousel");
    function a() {
        var a = t.find(".owl-item.active .slaytlar__item video");
        a.length && (a.trigger("play"), a.on("play", function () {
            t.trigger("stop.owl.autoplay")
        }), a.on("ended", function () {
            t.trigger("play.owl.autoplay")
        }))
    }
    t.owlCarousel({loop: !0, margin: 0, nav: !1, dots: 1, items: 1, mouseDrag: !1, touchDrag: !1, animateIn: "fadeIn", animateOut: "fadeOut", autoplay: !0, autoplayHoverPause: !1, smartSpeed: 1e3, autoplayTimeout: 4250, pagination: true, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]}), t.find(".owl-item .slaytlar__item").each(function () {
        var a = $(this), t = !!Utils.hasAttr(a, "data-src") && a.attr("data-src");
        t && a.append('<video playsinline="" muted=""><source src="' + t + '" type="video/mp4"></video>')
    }), a(), t.on("translated.owl.carousel", function () {
        t.find(".owl-item .slaytlar__item[data-src] video").each(function () {
            $(this).trigger("pause")
        }), a()
    })
}
function SlaytlarVideoM() {
    var t = $(".slaytlarMobile .owl-carousel");
    function a() {
        var a = t.find(".owl-item.active .slaytlar__item video");
        a.length && (a.trigger("play"), a.on("play", function () {
            t.trigger("stop.owl.autoplay")
        }), a.on("ended", function () {
            t.trigger("play.owl.autoplay")
        }))
    }
    t.owlCarousel({loop: !0, margin: 0, nav: !1, dots: 1, items: 1, mouseDrag: !1, touchDrag: !1, animateIn: "fadeIn", animateOut: "fadeOut", autoplay: !0, autoplayHoverPause: !1, smartSpeed: 1e3, autoplayTimeout: 4250, pagination: true, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]}), t.find(".owl-item .slaytlar__item").each(function () {
        var a = $(this), t = !!Utils.hasAttr(a, "data-src") && a.attr("data-src");
        t && a.append('<video playsinline="" muted=""><source src="' + t + '" type="video/mp4"></video>')
    }), a(), t.on("translated.owl.carousel", function () {
        t.find(".owl-item .slaytlar__item[data-src] video").each(function () {
            $(this).trigger("pause")
        }), a()
    })
}



$(document).ready(function (e) {
    $(".mobileUl li ul").slideUp();
    $(".mobileUl li").click(function () {
        if ($(this).hasClass('mobileMenuOpen')) {
            $(this).removeClass("mobileMenuOpen");
            $(this).find($("ul")).slideUp();
        } else {
            $(this).addClass("mobileMenuOpen");
            $(this).find($("ul")).slideDown();
        }
    });
    $("#pageOverlay").on("touchstart click", function () {
        mobileMenuKapat();
    });
});

function mobileMenuKapat() {
    $(".mobileUl li ul").slideUp();
    $("#mobileMenu").removeClass("open");
    document.body.classList.remove("stickyPage");
    document.documentElement.classList.remove("htmlFixed");
}

function mobileMenuAc() {
    $("#mobileMenu").addClass("open");
    document.body.classList.add("stickyPage");
    document.documentElement.classList.add("htmlFixed");
}


function tabGosterSelect() {
    var id = $("#selectTab").val();
    window.location.href = id;
}

$(document).ready(function () {
    var owlReklam = $("#owlReklam");
    owlReklam.owlCarousel({responsive: {0: {items: 1}, 800: {items: 2}}, autoplay: true, autoplayTimeout: 5000, autoplayHoverPause: false, margin: 10, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]});
});

$(document).ready(function () {
    var owlFikstur = $("#owlFikstur");
    owlFikstur.owlCarousel({responsive: {0: {items: 1}}, autoplay: false, autoplayHoverPause: false, margin: 10, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]});
});

$(document).ready(function () {
    var owlHaber = $("#owlHaber");
    owlHaber.owlCarousel({responsive: {0: {items: 1}, 767: {items: 2}, 1200: {items: 3}}, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: false, margin: 0, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]});
});

$(document).ready(function () {
    var owlManset = $("#owlManset");
    owlManset.owlCarousel({responsive: {0: {items: 2}, 767: {items: 3}, 1200: {items: 4}}, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: false, margin: 0, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]});
});

$(document).ready(function () {
    var owlFoto = $("#owlFoto");
    owlFoto.owlCarousel({responsive: {0: {items: 1}, 700: {items: 2}, 991: {items: 3}, 1200: {items: 3}}, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: false, margin: 0, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]});
});

$(document).ready(function () {
    var owlVideo = $("#owlVideo");
    owlVideo.owlCarousel({responsive: {0: {items: 2}, 991: {items: 3}, 1200: {items: 4}}, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: false, margin: 0, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]});
});

$(document).ready(function () {
    var owlFutbol = $("#owlFutbol");
    owlFutbol.owlCarousel({responsive: {0: {items: 1}, 1200: {items: 2}}, autoplay: true, autoplayTimeout: 5000, autoplayHoverPause: false, margin: 0, pagination: false, nav: true, loop: true, navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]});
});

$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
function vimeoLoadingThumb(id) {
    var url = "http://vimeo.com/api/v2/video/" + id + ".json?callback=showThumb";

    var id_img = "#vimeo-" + id;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    $(id_img).before(script);
}

function showThumb(data) {
    var id_img = "#vimeo-" + data[0].id;
    $(id_img).attr('src', data[0].thumbnail_medium);
}

$('[data-toggle="tooltip"]').tooltip();




	function YukariCik() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
	}

$(document).ready(function () {
	
	
    $('.row-popup').magnificPopup({
        delegate: '.zoom-item',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return "";
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 400, // Duration for zoom animation 
            opener: function (element) {
                return element.find('img');
            }
        }

    });

    $('.row-popupS').magnificPopup({
        delegate: '.zoom-item',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return "";
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 400, // Duration for zoom animation 
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});



$(window).resize(function () {
    Fixed();
});
$(document).ready(function () {
    Fixed();
});

function Fixed() {
    var nav = $('#header');
    var height = $("#header").height();

    var anaTop = $("#header").height() + $("#headerTop").height();
	
	
	if ($(this).scrollTop() > 500) {
		$("#yukari-cik").removeClass("displayNone");
	}else{
		$("#yukari-cik").addClass("displayNone");
	}

    if ($(this).scrollTop() > 0) {
        nav.addClass("fixed-top");
    } else {
        nav.removeClass("fixed-top");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("fixed-top");
        } else {
            nav.removeClass("fixed-top");
        }
		
		if ($(this).scrollTop() > 500) {
			$("#yukari-cik").removeClass("displayNone");
		}else{
			$("#yukari-cik").addClass("displayNone");
		}
    });
}

