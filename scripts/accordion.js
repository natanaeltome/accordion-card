const accordions = document.getElementsByClassName("accordion-item__button");

for (let i = 0; i < accordions.length; i++) {
    let target = accordions[i].parentElement.nextElementSibling;

    accordions[i].onclick = () => {
        let expanded = accordions[i].getAttribute('aria-expanded') === 'true' || false;
        accordions[i].setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
    };
}