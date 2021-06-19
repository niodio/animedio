 function getLink(a) {

    let link = a.getAttribute('src')
   
   document.querySelector("[name='img']").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)100%), url('+ link +')';

 }