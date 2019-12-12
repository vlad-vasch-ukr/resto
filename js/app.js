/*let scroll = window.addEventListener('onscroll', function() {
    let headerHeight = document.querySelector('ba-header').clientHeight;
    if()
})*/
window.addEventListener('scroll', function(e) {
    e.preventDefault();
    let headerHeight = document.getElementById('header').clientHeight;
    if(window.pageYOffset > headerHeight) {
        let header = document.querySelector('.ba-header');
        header.classList.add('ba-header--fixed')
    } else {
        header.classList.remove('ba-header--fixed');
    }
  });
  