$("a[href^='#']").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
});

setTimeout(function () {
    $("form").leadprofit({
        hash: "d08809f1-e56c-4215-b931-8e10d5554e2e", subid: "{subid}"
    }).leadprofitSubmit({
        confirmUrl: 'confirm.html',
        counterParams: {
            country: "{country}",
            version: document.location.pathname.replace(/\/+/g, '').replace('landings', '').replace('index.html', '').replace('index2.html', '').replace('confirm.html', '')
        }
    });
    ;
}, 1500)



$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    window.history.pushState({page: 1}, "", window.location), window.onpopstate = function (o) {
        location.replace('spin/index.html')
    }
});
