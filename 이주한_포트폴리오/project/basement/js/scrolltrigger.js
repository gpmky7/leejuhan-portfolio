gsap.utils.toArray(".parallax__item").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true, 
        pinSpacing: false 
    });
});


gsap.utils.toArray(".parallax__item__desc1").forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",        
        onEnter: () => {animate(item)}, 
    });

    item.style.opacity = "0";
});

const animate = (item) => {
    gsap.fromTo(item, 
        {autoAlpha: 0, x: 100, y: 0}, 
        {autoAlpha: 1, x: 0, y: 0, duration: 1.25, overwrite: "auto", ease: "expo"}
    );
}


gsap.utils.toArray(".reveal").forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",        
        onEnter: () => {animate(item)}, 
    });

    item.style.opacity = "0";
});

const animate1 = (item) => {
    gsap.fromTo(item, 
        {autoAlpha: 0, x: 100, y: 0}, 
        {autoAlpha: 1, x: 0, y: 0, duration: 1.25, overwrite: "auto", ease: "expo"}
    );
}
