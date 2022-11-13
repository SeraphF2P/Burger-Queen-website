const hamburger_menu = document.querySelector('.fa-bars') as HTMLButtonElement;
const accordion_btn = document.querySelector('.accordion-button') as HTMLElement;
hamburger_menu.onclick =()=>{
    accordion_btn.click()
}

// document.querySelector('.home').onmousemove = (e) =>{

//     let x = (window.innerWidth - e.pageX * 2) / 90;
//     let y = (window.innerHeight - e.pageY * 2) / 90;

//     document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
// }

// document.querySelector('.home').onmouseleave = () =>{

//     document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
// }   

const search_btn = document.querySelector('.fa-magnifying-glass')as HTMLElement;
const search_section = document.querySelector('.search_section');
search_btn.onclick = ()=>{
    search_section?.classList.toggle('show')
}

const sections = Array.from(document.querySelectorAll('.section:not(:first-of-type)'));

function fadeUp(sec: any){
sec.style.transform = 'translateY(-20px)';
sec.style.opacity = '1';
}
window.onscroll=()=>{
    if(scrollY > window.innerHeight/4){
     fadeUp(sections[0])
    }
     if(scrollY > (window.innerHeight/4) + 300){
        fadeUp(sections[1])
    }
     if(scrollY > (window.innerHeight/4) + 600){
        fadeUp(sections[2])
    }
    if(scrollY > (window.innerHeight/4) + 900){
        fadeUp(sections[3])
    }
}

const gallary_menu_button =document.querySelectorAll('.gallary:not(:last-of-type)')

gallary_menu_button.forEach(list_item =>{
    list_item.setAttribute('data-bs-toggle','offcanvas');
    list_item.setAttribute('data-bs-target',"#staticBackdrop");
    list_item.setAttribute('aria-controls',"staticBackdrop");
})

function activate (this: any){
this.classList.toggle('active')
}
let asd ={'asdfdf':12}

let heart_icons = document.querySelectorAll('.fa-heart');
heart_icons.forEach(heart => heart.addEventListener('click',activate));
const menu_section: any[] = []
const card = document.createElement('div');
const available_to_purchase = document.querySelector('.available_to_purchase')
fetch("./data.json")
  .then((res) =>{return res.json()})
  .then(data=> 
  {

for (let i = 0; i <  Object.keys(data[0].menu_title).length; i++) {
  menu_section.push(Object.keys(data[0].menu_title))
  
}
    // data[0].
    // carousel-item
    console.log(menu_section);
    card.innerHTML= `
    <div class="card">
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i
      ><i class="fas fa-star"></i><i class="fas fa-star"></i
      ><i class="fas fa-star"></i>
    </div>
    <img src="./image/menu-2.png" alt="" class="product_img" />
    <div class="product_info">
      <h2 class="item_name">pizza</h2>
      <div class="price_section">
        <span class="price">00.00</span>$
      </div>
      <div class="num_of_items">
        <img
          src="./image/icon-minus.svg"
          alt="minus icon"
        /><span>0</span
        ><img src="./image/icon-plus.svg" alt="plus icon" />
      </div>
    </div>
    <div class="fas fa-heart"></div>
  </div>
   `
  }
   
  

   )