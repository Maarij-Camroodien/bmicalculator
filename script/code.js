let button = document.querySelector ('#calculate');
let result = document.getElementById('display');
button.addEventListener ('click', ()=> {
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let answer = (weight / ((height*height) /10000)).toFixed(2)
    result.innerHTML = answer

    if(answer <= 18.5){
        result.innerHTML = 'Under weight : ' + answer;
     }else if(answer > 18.5 &&  answer <= 24.9){
        result.innerHTML = 'Normal : ' + answer;
     }else if(answer >= 25.0 && answer <= 29.9){
        result.innerHTML = 'Overweight : ' + answer;
     }else if(answer >=30.0){
        result.innerHTML = 'Obese : ' + answer;
     }
})

document.querySelector('#clear').
addEventListener('click', ()=>{
    height.value = ""
    weight.value = ""
    result.innerText = ""
})