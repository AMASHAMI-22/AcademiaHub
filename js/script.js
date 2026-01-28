
const menubtn = document.getElementById('menu-btn');
const menu = document.getElementById('navbar');

menubtn.addEventListener('click', function () {

  if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'block' ;
    boxx.style.display = 'none';
  }

  else {
    navbar.style.display = 'none';
  }
}
);

 
// function changeActive(element) {
    // 1. ابحث عن أي عنصر لديه كلاس active حالياً وقم بإزالته
    // let currentActive = document.querySelector('.active');
    // if (currentActive) {
    //     currentActive.classList.remove('active');
    // }

    // 2. أضف كلاس active للعنصر الذي تم الضغط عليه الآن
//     element.classList.add('active');
// }




// function changeColor() {
    // الوصول للعنصر وتغيير لونه
//     document.getElementById("hoome").style.color = "#d3ad7f";
// }







