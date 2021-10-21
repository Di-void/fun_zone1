//      please please --------DO NOT EDIT THIS SCRIPT-----------     THANK YOU    //   




const navSlide = () => {
    const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
            const navlinks = document.querySelectorAll('.nav-links li');

        
        burger.addEventListener('click', () => {
            //Toggle nav
            nav.classList.toggle('nav-active');

            //Animate links
            // navlinks.forEach(function(link, index){
            //     if(link.style.animation){
            //         link.style.animation = '';
            //     } else {
            //          // to console log this fuinction above => console.log(index); 
            //         link.style.animation = `navfade 0.5s ease forwards $(index / 7 + 1.5)s`;
            //         // to console log the $(index) part above => 
            //         // console.log(index/7 + 1.5);
            //     }
           
        // });
        //Burger animation

        burger.classList.toggle('toggle');



    });
        //Animate links
        //navlinks.forEach((link, index) => {
        //     if(link.style.animation){
        //         link.style.animation = '';
        //     }else{
        //         link.style.animation = `navfade 0.5s ease forwards $(index / 7 + 1.5)s`;
        //         console.log(index / 7);
        //     }
        // });
}

navSlide();