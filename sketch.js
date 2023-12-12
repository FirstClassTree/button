var container =  document.querySelector('.container');
var btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){

    var blu = document.createElement('div');
    blu.classList.add('btn');
    container.appendChild(blu);
});