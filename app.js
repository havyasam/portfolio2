
ScrollReveal({ 
    reset: true ,
    distance:'180px',
    duration:2000,
    delay:50                 
});

ScrollReveal().reveal('.navbar',{delay:700,origin:'top',interval:200});
ScrollReveal().reveal('.languages',{delay:100,origin:'left',interval:200});
ScrollReveal().reveal('.frameworks',{delay:100,origin:'right',interval:200});
ScrollReveal().reveal('.tools',{delay:100,origin:'bottom',interval:200});
ScrollReveal().reveal('.note-project',{delay:100,origin:'right',interval:200});
ScrollReveal().reveal('.note-project1',{delay:100,origin:'left',interval:200});
ScrollReveal().reveal('.about',{delay:100,origin:'top',interval:200});
ScrollReveal().reveal('.main3 img',{delay:100,origin:'left',interval:200});
ScrollReveal().reveal('.main3 p',{delay:100,origin:'right',interval:200});
//ScrollReveal().reveal('footer img',{delay:50,duration:20000,distance:'1800px',origin:'left',interval:500});
ScrollReveal().reveal('#h',{delay:200,origin:'bottom',interval:200});
ScrollReveal().reveal('#a',{delay:800,origin:'bottom',interval:200});
ScrollReveal().reveal('#v',{delay:1400,origin:'bottom',interval:200});
ScrollReveal().reveal('#y',{delay:2000,origin:'bottom',interval:200});
ScrollReveal().reveal('#aa',{delay:2600,origin:'bottom',interval:200});
ScrollReveal().reveal('#s',{delay:3200,origin:'bottom',interval:200});

if (window.innerWidth > 400) {
    ScrollReveal().reveal('.he img, .main2 h1, .main2 p, .main1, .main2 h3 ', {
        reset: true ,
        distance:'180px',
        duration:2000,
        delay:600,
        origin:'right',
        interval:200

    });
  }
  

