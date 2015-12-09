particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


var preventClick = function (e) {
    e.stopPropagation();
    e.preventDefault();
};

var gridster
gridster = $(".gridster ul").gridster({
    widget_base_dimensions: [100, 100],
    widget_margins: [5, 5],
    helper: 'clone',
    max_cols: 3,
    max_rows: 3,
    extra_rows: 0,
    draggable: {
        start: function (event, ui) {
            // Stop event from propagating down the tree on the capture phase
            ui.$player[0].addEventListener('click', preventClick, true);
        },
        stop: function (event, ui) {
            var player = ui.$player;
            setTimeout(function () {
                player[0].removeEventListener('click', preventClick, true);
            });
        }
    }
}).data('gridster')




$('.gridster li img').waitForImages(true).done(function () {
    $(".gridster").removeClass("hidden")
    $(".gridster li")
        .velocity("transition.bounceIn", {
            stagger: 500,
            complete: function () {
                $('.gridster li').removeAttr("style");
            }
        })
        .delay(750)
});;

$(".gridster ul li").on("tap click",function(){

    var attribute = $(this).attr("type")

    if (attribute == 'github') {

        window.open('https://github.com/tushariscoolster', '_blank');
    }
    if (attribute == 'facebook') {

        window.open('https://www.facebook.com/borole', '_blank');
    }
    if (attribute == 'twitter') {

        window.open('https://twitter.com/tushariscoolste', '_blank');
    }
    if (attribute == 'linkedin') {

        window.open('https://www.linkedin.com/in/tusharborole', '_blank');
    }
    if (attribute == 'blog') {

        window.open('http://nisostech.com/author/tushar', '_blank');
    }
});


function resize() {
    $(".panel-grid").position({
        my: "center",
        at: "center",
        of: $(window)
    });
    /* var windowHeight = $(window).height();
     var windowWidth = $(window).width();
     $("body").height(windowHeight)
     $("body").width(windowWidth)
     $("#particles-js").height(windowHeight)
     $("#particles-js").width(windowWidth)*/
}
resize()
$(window).resize(function () {
    resize()
});

$(".profile-image").mouseenter(function () {
    $(this).addClass("jello");
});
$(".profile-image").mouseleave(function () {
    $(this).removeClass("jello");
});



var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    /* your code here */
    console.log('You are using a mobile device!');
    $("body").addClass("mobile")
}