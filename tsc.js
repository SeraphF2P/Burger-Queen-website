"use strict";
const hamburger_menu = document.querySelector('.fa-bars');
const accordion_btn = document.querySelector('.accordion-button');
hamburger_menu.onclick = () => {
    accordion_btn.click();
};
const search_btn = document.querySelector('.fa-magnifying-glass');
const search_section = document.querySelector('.search_section');
search_btn.onclick = () => {
    search_section === null || search_section === void 0 ? void 0 : search_section.classList.toggle('show');
};
const sections = Array.from(document.querySelectorAll('.section:not(:first-of-type)'));
function fadeUp(sec) {
    sec.style.transform = 'translateY(-20px)';
    sec.style.opacity = '1';
}
window.onscroll = () => {
    if (scrollY > window.innerHeight / 4) {
        fadeUp(sections[0]);
    }
    if (scrollY > (window.innerHeight / 4) + 300) {
        fadeUp(sections[1]);
    }
    if (scrollY > (window.innerHeight / 4) + 600) {
        fadeUp(sections[2]);
    }
    if (scrollY > (window.innerHeight / 4) + 900) {
        fadeUp(sections[3]);
    }
};
const gallary_menu_button = document.querySelectorAll('.gallary:not(:last-of-type)');
gallary_menu_button.forEach(list_item => {
    list_item.setAttribute('data-bs-toggle', 'offcanvas');
    list_item.setAttribute('data-bs-target', "#staticBackdrop");
    list_item.setAttribute('aria-controls', "staticBackdrop");
});
function activate() {
    this.classList.toggle('active');
}
let asd = { 'asdfdf': 12 };
let heart_icons = document.querySelectorAll('.fa-heart');
heart_icons.forEach(heart => heart.addEventListener('click', activate));
const menu_section = [];
const card = document.createElement('div');
const available_to_purchase = document.querySelector('.available_to_purchase');
const sign_up_form = document.getElementById('sign_up');
const form_btns = document.querySelector('.form_btns');
const btn_next = form_btns === null || form_btns === void 0 ? void 0 : form_btns.querySelector('.btn_next');
const btn_prev = form_btns === null || form_btns === void 0 ? void 0 : form_btns.querySelector('.btn_prev');
const btn_close = form_btns === null || form_btns === void 0 ? void 0 : form_btns.querySelector('.btn_close');
const steps_bodys = document.querySelector('.steps_bodys');
const sign_up_section = document.querySelector('.sign_up_section');
const floatingPassword = document.getElementById('floatingPassword');
const floatingPassword_confirm = document.getElementById('floatingPassword_confirm');
const password_confirm_error_message = document.querySelector('.input_error_message.confirm_password');
const step_body_num_1 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.step_body.num_1');
const step_body_num_2 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.step_body.num_2');
const step_body_num_3 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.step_body.num_3');
const forms_input_1 = Array.from(step_body_num_1.querySelectorAll('input'));
const forms_input_2 = Array.from(step_body_num_2.querySelectorAll('input'));
const forms_input_3 = Array.from(step_body_num_3.querySelectorAll('input'));
const progress_bar = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.progress_bar');
const step_1 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_1');
const step_2 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_2');
const step_3 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_3');
let slide_value = 0;
function slideX_pre() {
    steps_bodys.style.transform = `translateX( ${slide_value.toLocaleString()}px)`;
    if (slide_value != 0 && slide_value != -600) {
        slide_value += 300;
    }
    if (slide_value = -600) {
        submit_btn.replaceWith(btn_next);
    }
}
const submit_btn = document.createElement('input');
submit_btn.setAttribute('type', 'submit');
submit_btn.setAttribute('class', 'btn btn-primary btn_next');
submit_btn.setAttribute('form', 'sign_up');
function slideX_next() {
    if (forms_input_1 === null || forms_input_1 === void 0 ? void 0 : forms_input_1.every(input => { return input.checkValidity(); })) {
        steps_bodys.style.transform = 'translate(-300px)';
        step_1.classList.add('confirmed');
        btn_close.innerText = 'Preview';
        btn_close.removeAttribute('data-bs-dismiss');
        btn_close.classList.remove('btn_close');
        slide_value = 0;
        if (floatingPassword.value != floatingPassword_confirm.value) {
            password_confirm_error_message.style.display = 'block';
        }
        if ((forms_input_2 === null || forms_input_2 === void 0 ? void 0 : forms_input_2.every(input => { return input.checkValidity(); })) && floatingPassword.value == floatingPassword_confirm.value) {
            steps_bodys.style.transform = 'translate(-600px)';
            step_2.classList.add('confirmed');
            slide_value = -300;
            password_confirm_error_message.style.display = 'none';
            if (forms_input_3 === null || forms_input_3 === void 0 ? void 0 : forms_input_3.every(input => { return input.checkValidity(); })) {
                btn_next.replaceWith(submit_btn);
                submit_btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    steps_bodys.style.transform = 'translate(-900px)';
                    step_3.classList.add('confirmed');
                    slide_value = -600;
                    setTimeout(() => sign_up_form.submit(), 500);
                });
            }
        }
    }
}
btn_prev === null || btn_prev === void 0 ? void 0 : btn_prev.addEventListener('click', slideX_pre);
btn_next === null || btn_next === void 0 ? void 0 : btn_next.addEventListener('click', slideX_next);
