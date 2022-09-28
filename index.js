document.addEventListener('DOMContentLoaded' ,() => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 300,
         dist:-80,
         shift:15,
         padding:5 , 
         numVisible:4,
         indicators:true,
         noWrap:false
    });
});