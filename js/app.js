const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallary img"); /* all bc there is multabel imgs*/
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption"); /* dots bc thoese are classes*/


/* looping through each preview 
    and adding a click on each preview
    whenever there is a click smth will happen */ 

previews.forEach(preview => {  /* for each bc we are looping over all img*/
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        // Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
        const altText = preview.alt;
        caption.textContent = altText;
    })
});


/* exit image by clicking out of the picture*/
modal.addEventListener('click', (e) => { /* e is event*/
    if(e.target.classList.contains('modal')){
    	modal.classList.remove('open');
    	original.classList.remove("open");
    }
});




/*page m.a codes*/

let section = document.querySelector('section');
        let text = document.querySelector('.text');
        let innerText = document.querySelector('.innerText');
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            section.style.clipPath = "circle("+ value +"px at center center)";
            text.style.left = 100 - value / 5 + "%";
            innerText.style.left = 100 - value / 5 + "%"; //defin the speed
        })