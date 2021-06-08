const panels = document.querySelectorAll('.panel')
// querySelector lets us select anything (element, class, id, etc.)
// we get all the panel divs with the above statement
// console.log(panels); //gives nodelist, just like array
// check what one node looks like
// console.log(panels[0]) //returns html of the 0th div with class panel

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}