const accordions = document.getElementsByClassName("item__button");

for (let i = 0; i < accordions.length; i++) {
    let target = accordions[i].parentElement.nextElementSibling;
    let svg = accordions[i].firstChild.nextElementSibling;
    console.log(svg);

    accordions[i].onclick = () => {
        console.log('clicked');
        svg.classList.toggle("item__toggle--on");
        let expanded = accordions[i].getAttribute('aria-expanded') === 'true' || false;
        accordions[i].setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
    };
}