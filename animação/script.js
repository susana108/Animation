function chuva (){
    let nuvem = document.querySelector('.nuvem');
    let  elementoDiv = document.createElement('div')
    let left = Math.floor(Math.random() * 310)
    let width = Math.random() * 5; 
    let height = Math.random() * 50;
    let duracao = Math.random() * .5;

    

    nuvem.appendChild(elementoDiv);
    elementoDiv.classList.add('gota')
    elementoDiv.style.left = left + 'px' ;
    elementoDiv.style.width =  .5 +  width + 'px';
    elementoDiv.style.height =  .5 + height + 'px';
    elementoDiv.style.animationDuration = 1 + duracao + 's';

    setTimeout(function(){
        nuvem.removeChild(elementoDiv)
    },2000)
}

setInterval(function(){
     
chuva();
},40);
