window.addEventListener('load', function () {

    let faq = document.querySelector('.faq');

    faq.addEventListener('click', function (e) {
        if (e.target.classList.contains('ask')) {
            toggleItem(e.target);
        }
    });

    function toggleItem(ask) {
        let answer = ask.nextElementSibling;

        if (answer.classList.contains('visible')) {
            answer.classList.remove('visible');


            answer.addEventListener('finish', function () {
                answer.classList.remove('open');

            });
        } else {
            answer.classList.add('visible');
            answer.classList.add('open');
        }
    }

});
