let nav = document.querySelector('.nav');
let gnbBtn = document.querySelector('.gnb-btn');
let eBody = document.querySelector('body');

gnbBtn.addEventListener('click', function () {
    nav.classList.toggle('on');
    gnbBtn.classList.toggle('active');
    eBody.classList.toggle('hidden')
});

let gnbIitem = document.querySelectorAll('.gnb-list > .item');

gnbIitem.forEach(function (item) {
    item.addEventListener('click', function () {
        gnbIitem.forEach(function (gnb) {
            gnb.classList.remove('on');
        });
        
        item.classList.add('on');
    });
});