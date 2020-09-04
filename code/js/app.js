const triggers = document.querySelectorAll(".menu-trigger")
console.log(triggers);

triggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle("is-open")
    })
})

// for(let i = 0; i < triggers.length; i++) {
//     triggers[i].addEventListener("click", function(e){
//         e.preventDefault();
//         this.classList.toggle("is-open")
//     })
// }