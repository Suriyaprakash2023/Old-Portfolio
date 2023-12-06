const iconToggle = document.querySelector('.toggle_icon');
const navbarmenu = document.querySelector('.menu');
const menulinks = document.querySelector('.menu_link');
const iconclose = document.querySelector('.close_icon');

iconToggle.addEventListener('click',()=>{
    navbarmenu.classList.toggle('active');
});

iconclose.addEventListener('click',() =>{
    navbarmenu.classList.remove('active');

});
menulinks.forEach((menulink)=>{
    menulink.addEventListener('click',()=>{
        navbarmenu.classList.remove('active');
    })
});

//change bg header
function scrollheder(){
    const header=document.getElementById('header');
    this.scrollY >=20? header.classList.add('active'):header.classList.remove('active');
}
window.addEventListener('scroll',scrollheder);

/* hero type   */
const typed=docment.querySelector('.typed');

if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings=typed_strings.split(',');
    new typed('.typed',{
        strings:typed_strings,
        loop:true,
        typesSpeed:100,
        backSpeed:50,
        backDelay:2000
    })
}

// portfolio section
let filteritems = document.querySelectorAll(".portfolio_filters li");
function  activeportfolio(){
    filteritems.forEach(el =>{
        el.classList.remove('.filter-active');
        this.classList.add('filter-active');
    })
}
filteritems.forEach(el=>{
    el.addEventListener('click',activeportfolio);
})

//mixi it
let mixerportfolio = mixitup('.warp_container',{
    selectors:{
        target:'.portfolio_item'
    },
    animation:{
        duration:300
    }
})






















