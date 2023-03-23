function navigateScrollTo(id) {
    id.scrollIntoView({ behavior: "smooth" });
}


document.querySelector('#b1').addEventListener('click', () => {
    document.getElementById('aPropos').scrollIntoView({ behavior: "smooth" });
})
document.querySelector('#b2').addEventListener('click', () => {
    document.getElementById('competences').scrollIntoView({ behavior: "smooth" });
})
document.querySelector('#b3').addEventListener('click', () => {
    document.getElementById('projets').scrollIntoView({ behavior: "smooth" });
})
document.querySelector('#contactBtn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
})

 var carouselCatcatcatcat = document.querySelector('#carouselCatcatcatcat')
 var carouselCatcatcatcat = new bootstrap.Carousel(carouselCatcatcatcat,{
    interval: 2000,
    wrap:false
 })
 var carouselDroidsoft = document.querySelector('#carouselDroidsoft')
 var carouselDroidsoft = new bootstrap.Carousel(carouselDroidsoft,{
    interval: 2000,
    wrap:false
 })
 var carouselMusee = document.querySelector('#carouselMusee')
 var carouselMusee = new bootstrap.Carousel(carouselMusee,{
    interval: 2000,
    wrap:false
 })