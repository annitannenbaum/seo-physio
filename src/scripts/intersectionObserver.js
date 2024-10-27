const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if (entry.target.classList.contains('left')) {
                entry.target.classList.add('fade-in-left')
            } else if (entry.target.classList.contains('right')) {
                entry.target.classList.add('fade-in-right')
            } else {
                entry.target.classList.add('fade-in-forward')
            }
        }
    });
}, options)

const elements = document.querySelectorAll('.animated');

elements.forEach((el) => {
    io.observe(el);
})

