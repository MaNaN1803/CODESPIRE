let = tabs1 = document.querySelectorAll('.tabs__toggle1'),
    contents1 = document.querySelectorAll('.tabs__content1');
let = tabs2 = document.querySelectorAll('.tabs__toggle2'),
    contents2 = document.querySelectorAll('.tabs__content2');


tabs1.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents1.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs1.forEach((tab)=> {
            tab.classList.remove('is-active');
        });

        contents1[index].classList.add('is-active');
        tabs1[index].classList.add('is-active');
    });
});

tabs2.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents2.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs2.forEach((tab)=> {
            tab.classList.remove('is-active');
        });

        contents2[index].classList.add('is-active');
        tabs2[index].classList.add('is-active');
    });
});

// for carousel