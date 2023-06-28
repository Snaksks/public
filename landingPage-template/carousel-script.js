const carouselBtnPrev = document.querySelector('.carousel-btn-prev');
const carouselBtnNext = document.querySelector('.carousel-btn-next');
let i = 1;
let i2 = 2;
carouselBtnNext.addEventListener('click', (event)=>{

        let active = document.getElementById('carousel-content-'+`${i}`);        
        let next = document.getElementById('carousel-content-'+`${i2}`);
        if(document.getElementById('carousel-content-'+`${i}`) === null){
            i=1;
            i2=2;
        }
        if(document.getElementById('carousel-content-'+`${i2}`) === null){
            active.classList.replace('active','hidden');
            i = 1;
            document.getElementById('carousel-content-'+`${i}`).classList.replace('hidden','active');
            i2 = 2;   
        }else{
        
        active.classList.replace('active','hidden');
        i++;
        next.classList.replace('hidden','active');
        i2++;
        }
})
carouselBtnPrev.addEventListener('click', (event) =>{
    let active = document.getElementById('carousel-content-'+`${i}`);        
    let next = document.getElementById('carousel-content-'+`${i2}`);
    if(active === null){
        active.classList.replace('hidden','active');
        i=1;
        i2=2;
        document.getElementById('carousel-content-'+`${i}`).classList.replace('hidden','active');
    }
    if(document.getElementById('carousel-content-'+`${i2}`) === null){
        i2 = i2 - 2;
        i = i-2;
        active.classList.replace('active','hidden');
        document.getElementById('carousel-content-'+`${i2}`).classList.replace('hidden','active');
        
    }else{
        i--;
        next.classList.replace('active','hidden');
        i2--;
        active.classList.replace('hidden','active');
    }
})