// toggle dropdown
const dropDown = document.querySelector('.Navbar')
const dropDownList = document.querySelectorAll('.drop_list')
// console.log(dropDown)

dropDown.addEventListener('click', e =>{
    const target = e.target
    
    if(target.className == 'hamburger_menu') {headerNav.classList.toggle('open_nav')}
    else if(target.className == 'dropdown_button'){target.parentElement.parentElement.classList.toggle('dropdown')}
})