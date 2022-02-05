const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    
    burger.addEventListener('click' ,() =>{
        nav.classList.toggle('nav-active');
    });
    
    navlinks.forEach((links, index)=> {
        console.log(index);
    });
}
navslide();