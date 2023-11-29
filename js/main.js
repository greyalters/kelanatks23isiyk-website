//filter js
$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter")
        if(value == "all"){
            $(".post-box").show("1000")
        }
        else{
            $(".post-box").not("." + value).hide("1000")
            $(".post-box").filter("." + value).show("1000")
        }
    });


    $(".filter-item").click(function(){ 
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

let header  = document.querySelector("header")

window.addEventListener("scroll", () =>{
    header.classList.toggle("shadow", window.scrollY > 0);
});


    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    function openEmail(emailAddress) {
        var subject = "Your subject here"; // Optional: specify the email subject
        var body = "Your message here"; // Optional: specify the email body
    
        var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
        // Open the email window
        window.location.href = mailtoLink;}