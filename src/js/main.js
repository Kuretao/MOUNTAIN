

const tabsTitle = document.querySelectorAll('.tab__nav');
const tabsContent = document.querySelectorAll('.tab__content');



tabsTitle.forEach(item => item.addEventListener('click', event => {
    

    const tabsTitleTarget = event.target.getAttribute('data-tab');


    tabsTitle.forEach(element => element.classList.remove('active'));


    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));


document.querySelector('[data-tab="tab-1"]').classList.add('active');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');