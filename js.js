const elmnt = document.getElementById("header-nav");
// const s = document.getElementById("scrollWatchers");
const ss = document.getElementsByClassName("scroll-watcher");

const div = document.getElementsByClassName("div-under-skills-container");
console.log(div[0].className);
console.log(`Here's the div[0]: ${div[0]}`);
console.log(div[0]);

let text = "Height with padding and border: " + elmnt.offsetHeight + "px";

console.log(`Here's the elmnt.innerHTML: ${elmnt.innerHTML}`);
console.log(`Here's the ss: ${ss[0].className}`);
console.log(`Here's the lenght ss: ${ss.length}`);
console.log(`Here's nav height: ${elmnt.offsetHeight}`);

ss[0].style.top = `${elmnt.offsetHeight}px`; //setting the offset in px

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce").matches){
    addAnimation();
}
function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        // const duplicatedItem = scroller.cloneNode(true);
        // console.log(duplicatedItem);
        // duplicatedItem.setAttribute("aria-hidden", true);
        // div[0].appendChild(duplicatedItem);

    });

    const scrollContent = Array.from(scrollers);
    console.log(scrollContent);
    console.log(`This is scrollContent: ${scrollContent}`);
    console.log(`This is scrollContent[0]: ${scrollContent[0]}` );
    scrollContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    console.log(duplicatedItem);
    duplicatedItem.setAttribute("aria-hidden", true);
    div[0].appendChild(duplicatedItem);
        });


}

// const underEntry = document.getElementById("underEntry");
// underEntry.addEventListener("mouseover", event => {
//     event.target.classList.add("glass");
//     console.log(`This is the event: ${event}`);
// });

// underEntry.addEventListener("mouseout", event => {
//     event.target.classList.remove("glass");
//     console.log(`This is the event: ${event}`);
// });

// elmnt.style.top = "60";
// ss[0].style.top = "60";
// s.style.top = "60px";

// const topOffSetHeight = elmnt.offsetHeight;
// console.log(text);
// console.log(topOffSetHeight);
// const newTop = topOffSetHeight;
// const newEwan = `${topOffSetHeight}px`;
// console.log(newEwan);
// console.log(`New ewan is ${newEwan}`);
// document.getElementsByClassName(scroll-watcher).style.top = "60px";
// document.getElementsByClassName("scroll-watcher").style.top = "60px";
// const newTop = topOffSetHeight;
// scrollWatcher.style = newTop.toString;

