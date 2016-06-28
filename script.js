$(document).ready(function(){
    $(".nav").load("nav.html");
    $(".footer").load("footer.html");
    console.log("1337");
});


function loadPage(page) {
    window.location = page + ".html";
}