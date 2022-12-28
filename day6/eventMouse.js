document.addEventListener("DOMContentLoaded", function(){  

  document.addEventListener("click", function(ev){



    console.log(ev.target)
    let img = document.querySelector("img");
    img.style.left = ev.clientX +'px';
    img.style.top = ev.clientY + 'px';
  })
  
}) 