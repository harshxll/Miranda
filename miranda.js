var tl=gsap.timeline();
gsap.to("nav",{
    pin:true,
    duration:undefined
})
 tl.to("#page-1",{
        y:"100vh",
        scale:0.5,
        duration:0
 })
tl.to("#page-1",{
    y:"0vh",
    duration:1,
    delay:1
})
tl.to("#page-1",{
    rotate:360,
    scale:1,
    duration:0.5
})
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
