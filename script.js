const accordionBtns = document.querySelectorAll('.accordion')

accordionBtns.forEach(accordion => {
    accordion.a
})

// accordionBtns.forEach(accordion => {
//     accordion.addEventListener('click', ()=>{
//         accordion.classList.toggle("is-open")
//         let content = accordion.nextElementSibling;
//         if(content.style.maxHeight){
//             content.style.maxHeight = null;
//         }else{
//             content.style.maxHeight = content.scrollHeight + 'px'
//         }
//     })
// })