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
// fetch("./data.json")
//   .then((res) =>{return res.json()})
//   .then(data=> 
//   {

// for (let i = 0; i <  Object.keys(data[0].menu_title).length; i++) {
//   menu_section.push(Object.keys(data[0].menu_title))
  
// }
//     // data[0].
//     // carousel-item
//     console.log(menu_section);
//     card.innerHTML= `
//     <div class="card">
//     <div class="stars">
//       <i class="fas fa-star"></i><i class="fas fa-star"></i
//       ><i class="fas fa-star"></i><i class="fas fa-star"></i
//       ><i class="fas fa-star"></i>
//     </div>
//     <img src="./image/menu-2.png" alt="" class="product_img" />
//     <div class="product_info">
//       <h2 class="item_name">pizza</h2>
//       <div class="price_section">
//         <span class="price">00.00</span>$
//       </div>
//       <div class="num_of_items">
//         <img
//           src="./image/icon-minus.svg"
//           alt="minus icon"
//         /><span>0</span
//         ><img src="./image/icon-plus.svg" alt="plus icon" />
//       </div>
//     </div>
//     <div class="fas fa-heart"></div>
//   </div>
//    `
//   }
   
  

//    )
const form_btns = document.querySelector('.form_btns')

const btn_next = form_btns?.querySelector('.btn_next') as HTMLButtonElement;
const btn_prev = form_btns?.querySelector('.btn_prev') as HTMLButtonElement;

const steps_bodys = document.querySelector('.steps_bodys') as HTMLElement;
const sign_up_section = document.querySelector('.sign_up_section');

const step_body_num_1 = sign_up_section?.querySelector('.step_body.num_1');
const step_body_num_2 = sign_up_section?.querySelector('.step_body.num_2');
const step_body_num_3 = sign_up_section?.querySelector('.step_body.num_3');

const forms_input_1 = Array.from(step_body_num_1!.querySelectorAll('input')) ;
const forms_input_2 = Array.from(step_body_num_2!.querySelectorAll('input')) ;
const forms_input_3 = Array.from(step_body_num_3!.querySelectorAll('input')) ;

const progress_bar = sign_up_section?.querySelector('.progress_bar');
const step_1 =progress_bar?.querySelector('.step_1') as HTMLDivElement;
const step_2 =progress_bar?.querySelector('.step_2') as HTMLDivElement;
const step_3 =progress_bar?.querySelector('.step_3') as HTMLDivElement;

let slide_value: number = 0;
function slideX_pre(){
        steps_bodys.style.transform = `translateX( ${slide_value.toLocaleString()}px)`;
        if(slide_value != 0 && slide_value != -600){
            slide_value += 300;
        }
}
const submit_btn = document.createElement('input');
submit_btn.setAttribute('type','submit');
submit_btn.setAttribute('class','btn btn-primary btn_next');
submit_btn.setAttribute('for','.modal-body')
function slideX_next (){
if(forms_input_1?.every(input =>{return input.checkValidity()}) ){
    steps_bodys.style.transform = 'translate(-300px)';
    step_1.classList.add('confirmed');
    slide_value = 0;
    if(forms_input_2?.every(input =>{return input.checkValidity()}) ){
        steps_bodys.style.transform = 'translate(-600px)'
        step_2.classList.add('confirmed');
        slide_value = -300;
        if(forms_input_3?.every(input =>{return input.checkValidity()})){
            steps_bodys.style.transform = 'translate(-900px)';
            step_3.classList.add('confirmed');
            slide_value = -600;
            btn_next.replaceWith(submit_btn)
        }
    }
}
}
btn_prev?.addEventListener('click',slideX_pre);
btn_next?.addEventListener('click',slideX_next)