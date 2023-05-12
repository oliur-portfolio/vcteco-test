// Animated Hamburger Icon & Sticky Header
$(document).ready(function () {
    // Navbar Toggler effect
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    }),
        // Sticky Header
        $(".navbar").sticky({ topSpacing: 0, zIndex: 500 }),
        // Executive Bio Slide Effect For Large Desktop
        $(".exe-click").bind("click", function (t1) {
            var e1 = $(this);
            $("html, body")
                .stop()
                .animate({ scrollTop: $(e1.attr("href")).offset().top - "97" + "px" }, 0),
                t1.preventDefault();
        }),
        // Directors Bio Slide Effect For Large Desktop
        $(".directors-click").bind("click", function (t2) {
            var e2 = $(this);
            $("html, body")
                .stop()
                .animate({ scrollTop: $(e2.attr("href")).offset().top - "135" + "px" }, 0),
                t2.preventDefault();
        }),
        // Executive Bio Slide Effect For Small Device
        $(".mb-exe-click").bind("click", function (t3) {
            var e3 = $(this);
            $("html, body")
                .stop()
                .animate({ scrollTop: $(e3.attr("href")).offset().top - "110" + "px" }, 0),
                t3.preventDefault();
        }),
        // Directors Bio Slide Effect For Small Device
        $(".mb-directors-click").bind("click", function (t4) {
            var e4 = $(this);
            $("html, body")
                .stop()
                .animate({ scrollTop: $(e4.attr("href")).offset().top - "110" + "px" }, 0),
                t4.preventDefault();
        });
});

// Mobile Menu Toggle Effect
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".mobile-menu").toggleClass("menu-visible");
        $(".navbar").toggleClass("navbar-shadow");
        $("main").toggleClass("main-hidden");
        $("footer").toggleClass("menu-overflow1");
    }),
        // Mobile Dropdown Toggle Class
        $(".mobile-menu .dropdown-hover").click(function () {
            $(".mobile-menu .dropdown-hover").toggleClass("show-dropdown");
        });
});

// Team Member Close Bio
$(document).ready(function () {
    // Team 1 Image
    $(".team-collapse-area .team-btn1 .bio-cross").click(function () {
        $(".team-collapse-area .team-btn1").toggleClass("active");
    });

    // Team 2 Image
    $(".team-collapse-area .team-btn2 .bio-cross").click(function () {
        $(".team-collapse-area .team-btn2").toggleClass("active");
    });

    // Team 3 Image
    $(".team-collapse-area .team-btn3 .bio-cross").click(function () {
        $(".team-collapse-area .team-btn3").toggleClass("active");
    });

    // Team 4 Image
    $(".team-collapse-area .team-btn4 .bio-cross").click(function () {
        $(".team-collapse-area .team-btn4").toggleClass("active");
    });

    // Team 5 Image
    $(".team-collapse-area .team-btn5 .bio-cross").click(function () {
        $(".team-collapse-area .team-btn5").toggleClass("active");
    });

    // Team 6 Image
    $(".team-collapse-area .team-btn6 .bio-cross").click(function () {
        $(".team-collapse-area .team-btn6").toggleClass("active");
    });
});

// Directors Member Close Bio
$(document).ready(function () {
    // Directors 1 Image
    $(".team-collapse-area .directors-btn1 .bio-cross").click(function () {
        $(".team-collapse-area .directors-btn1").toggleClass("active");
    });

    // Directors 2 Image
    $(".team-collapse-area .directors-btn2 .bio-cross").click(function () {
        $(".team-collapse-area .directors-btn2").toggleClass("active");
    });

    // Directors 3 Image
    $(".team-collapse-area .directors-btn3 .bio-cross").click(function () {
        $(".team-collapse-area .directors-btn3").toggleClass("active");
    });

    // Directors 4 Image
    $(".team-collapse-area .directors-btn4 .bio-cross").click(function () {
        $(".team-collapse-area .directors-btn4").toggleClass("active");
    });

    // Directors 5 Image
    $(".team-collapse-area .directors-btn5 .bio-cross").click(function () {
        $(".team-collapse-area .directors-btn5").toggleClass("active");
    });
});

// GSAP Banner Text Animation
var banner = gsap.timeline();

banner.from(".banner-content h1", {
    duration: 1.5,
    autoAlpha: 0,
    delay: 0.4,
}),
    banner.from(
        ".banner-content h1 span",
        {
            duration: 1.5,
            autoAlpha: 0,
        },
        "-=0.8"
    );

// GSAP Single Box 1 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg1.from(".first-box .single-box-image", {
    duration: 0.6,
    x: -100,
    autoAlpha: 0,
});

// GSAP Single Box 1 Button Animation
gsap.registerPlugin(ScrollTrigger);

var boxbtn1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-box .learn-btn",
        start: "-80px 100%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boxbtn1.from(".first-box .learn-btn a", {
    duration: 0.8,
    autoAlpha: 0,
    delay: 0.2,
});

// GSAP Single Box 2 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg2.from(".second-box .single-box-image", {
    duration: 0.6,
    x: 100,
    autoAlpha: 0,
});

// GSAP Single Box 2 Button Animation
gsap.registerPlugin(ScrollTrigger);

var boxbtn2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-box .learn-btn",
        start: "-80px 100%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boxbtn2.from(".second-box .learn-btn a", {
    duration: 0.8,
    autoAlpha: 0,
    delay: 0.2,
});

// GSAP Single Box 3 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".last-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg1.from(".last-box .single-box-image", {
    duration: 0.6,
    x: -100,
    autoAlpha: 0,
});

// GSAP Single Box 3 Button Animation
gsap.registerPlugin(ScrollTrigger);

var boxbtn3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".last-box .learn-btn",
        start: "-80px 100%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boxbtn3.from(".last-box .learn-btn a", {
    duration: 0.8,
    autoAlpha: 0,
    delay: 0.2,
});

// GSAP Center Details Text Animation
gsap.registerPlugin(ScrollTrigger);

var centertext = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-details-area",
        start: "0 65%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

centertext.from(".center-details-content .learn-btn a", {
    duration: 0.8,
    autoAlpha: 0,
    delay: 0.2,
});

// GSAP Big Image Animation Finlets Page
var banner1 = gsap.timeline();

banner1.from(".big-img", {
    duration: 0.8,
    x: 100,
    autoAlpha: 0,
});

// GSAP Small Images Animation Finlets Page
gsap.registerPlugin(ScrollTrigger);

var smallImages = gsap.timeline({
    scrollTrigger: {
        trigger: ".development-img-container",
        start: "0 95%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

smallImages.from(".development-img-container .small-img", {
    duration: 1.8,
    autoAlpha: 0,
    stagger: 0.4,
    delay: 0.2,
});

// Executive Team member Images Animation
gsap.registerPlugin(ScrollTrigger);

var smallImages = gsap.timeline({
    scrollTrigger: {
        trigger: ".only-executive",
        start: "0 95%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

smallImages.from(".only-executive .small-img", {
    duration: 1.6,
    autoAlpha: 0,
    stagger: 0.3,
    delay: 0.2,
});

// Directors Team member Images Animation
gsap.registerPlugin(ScrollTrigger);

var smallImages = gsap.timeline({
    scrollTrigger: {
        trigger: ".directors-team",
        start: "0 85%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

smallImages.from(".directors-team .small-img", {
    duration: 1.6,
    autoAlpha: 0,
    stagger: 0.3,
    delay: 0.2,
});

// GSAP ANIMATION END

// CountUp Define Effect
jQuery(document).ready(function ($) {
    $(".counter").counterUp({
        delay: 10,
        time: 1300000, // You Can Change This "time" Value for customize Speed
    });
});

// CounterUp Effect JS Code
(function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({ time: 400, delay: 10 }, t);
        return this.each(function () {
            var t = e(this),
                r = n,
                i = function () {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;

                    // You Can Change This f >= Value for customize Speed
                    for (var f = n; f >= 129000; f--) {
                        var l = parseInt((i / n) * f);
                        u && (l = parseFloat((i / n) * f).toFixed(a));
                        if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l);
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function () {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null);
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay);
                };
            t.waypoint(i, { offset: "100%", triggerOnce: !0 });
        });
    };
})(jQuery);
