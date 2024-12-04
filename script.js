document.getElementById('meniGumb').addEventListener('click', function () {
    var meni = document.getElementById('meniBurger');
    var slikca = document.getElementById('meniGumb');

    if (window.getComputedStyle(meni).display === 'none') {
        meni.style.display = 'block';
        slikca.style.transform = ('rotate(-90deg)');
        setTimeout(function () {
            meni.classList.add('show');
        }, 10);
    } else {
        meni.classList.remove('show');
        slikca.style.transform = ('rotate(0deg)');
        setTimeout(function () {
            meni.style.display = 'none';
        }, 300);
    }
});
