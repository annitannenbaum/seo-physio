const buttons = document.querySelectorAll('button[data-behavior="scroll"]');

const scrollToSection = (sectionName) => {
    console.log(sectionName)
    const el = document.querySelector(`#${sectionName}`);
    el.scrollIntoView({ behavior: "smooth" });
}

buttons.forEach(button => {
    button.addEventListener('click', () => scrollToSection(button.dataset.section));
})