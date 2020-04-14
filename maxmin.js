let submitButton = document.getElementById('submit');
let moreButton = document.getElementById('more');

submitButton.addEventListener('click',getStats);
moreButton.addEventListener('click',addMore);


function addMore(){
    for(i=0; i<10; i++){
        let input = document.createElement("input");
        input.type = "text";
        document.getElementById("input-list").appendChild(input);
    }
}

function getStats(){
    let array = document.getElementsByTagName('input');
    let length = 0;
    for(i=0;i<array.length; i++){
        if (array[i].value == ""){
            length = i;
            break;
        }
    }
    let total = 0;
    let min = array[0].value;
    let max = array[0].value;

    for(i=0; i<length; i++){
        total += Number(array[i].value);
        if(min > array[i].value){
            min = array[i].value;
        }
        if(max < array[i].value){
            max = array[i].value;
        }
    }
    let average = total / length;

    document.getElementById('max').innerHTML = max;
    document.getElementById('min').innerHTML = min;
    document.getElementById('average').innerHTML = average;
}