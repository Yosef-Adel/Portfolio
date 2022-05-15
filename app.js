window.addEventListener("scroll", function(){
    const btn = document.querySelector(".up-btn");
    btn.classList.toggle('up-btn-active', window.scrollY >10);
});




const navactive = ()=> {
    const bur =document.querySelector(".bur");
    const head =document.querySelector(".head");
    const links =document.querySelector(".links");
    const line1 =document.querySelector(".line1");
    const line2 =document.querySelector(".line2");
    const line3 =document.querySelector(".line3");


    bur.addEventListener("click", ()=> {
        links.classList.toggle("linksative");
        head.classList.toggle("headactive");
        links.classList.toggle("links");
        line1.classList.toggle("line1Active");
        line2.classList.toggle("line2Active");
        line3.classList.toggle("line3Active");
        
    });
}

navactive();




