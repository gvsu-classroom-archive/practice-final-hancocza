let decorateButton = document.getElementById('decorate');

decorateButton.addEventListener('click', decoration);

function decoration(){
    let uppercases = document.getElementsByClassName('allcaps');
    for (var i=0; i<uppercases.length; i++){
        uppercases[i].style.textTransform="uppercase";
    }

    let capitalizes = document.getElementsByClassName('upcase');
    for (var i=0; i < capitalizes.length; i++){
    capitalizes[i].style.textTransform="capitalize";
    }
};