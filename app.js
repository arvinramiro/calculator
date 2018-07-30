class Calculate{
    constructor(v, message){
        this.v = v;
        this.message = message;
    }
    com(){
        try {
            return eval(this.v);
        } catch (e) {
            if (e instanceof SyntaxError) {
                return `${this.message}`;
            }
        }
    }
}

document.getElementById('process').addEventListener('click',function(e){
    const v = document.getElementById('total');
    const viewer = new Calculate(v.value, 'Syntax Error');
    if(v.value.includes('√')){
        v.value = v.value.substring(1);
        v.value = Math.sqrt(v.value);
        if(v.value === 'NaN'){
            v.value = viewer.com();
            v.setAttribute('disabled','disabled');
            v.style.color = 'red';
            const allBtn = document.querySelectorAll("#number");
            for (var i = 0, len = allBtn.length; i<len; i++){
                allBtn[i].disabled = true;
            }
        }
    }else{
        if(v.value !== ''){
            v.value = viewer.com();
            v.focus();
        }
        if(v.value === 'undefined'){
            v.value = viewer.com();
        }
        if(v.value.includes('Syntax Error')){
            const allBtn = document.querySelectorAll("#number");
            for (var i = 0, len = allBtn.length; i<len; i++){
                allBtn[i].disabled = true;
            }
            v.setAttribute('disabled','disabled');
            v.style.color = 'red';
        }
    }
    e.preventDefault();
});

document.getElementById('cal-form').addEventListener('submit',function(e){
    const v = document.getElementById('total');
    const viewer = new Calculate(v.value, 'Syntax Error');
    if(v.value.includes('√')){
        v.value = v.value.substring(1);
        v.value = Math.sqrt(v.value);
        if(v.value === 'NaN'){
            v.value = viewer.com();
            v.setAttribute('disabled','disabled');
        }
    }else{
        if(v.value !== ''){
            v.value = viewer.com();
            v.focus();
        }
        if(v.value === 'undefined'){
            v.value = viewer.com();
        }
        if(v.value.includes('Syntax Error')){
            v.setAttribute('disabled','disabled');
        }
    }
    e.preventDefault();
});

document.getElementById('clear').addEventListener('click',function(){
    clearInput();
});

document.getElementById('lastChar').addEventListener('click',function(){
    const v = document.getElementById('total');
    v.value = v.value.substring(0, v.value.length - 1);
});

document.getElementById('clearTwo').addEventListener('click',function(){
    const v = document.getElementById('total');
    const allval = v.value.length;
    if(v.value.includes("+")){
        const rep = v.value.lastIndexOf('+')+1;
        v.value = v.value.substring(0, allval - (allval - rep));
    }
    if(v.value.includes("-")){
        const rep = v.value.lastIndexOf('-')+1;
        v.value = v.value.substring(0, allval - (allval - rep));
    }
    if(v.value.includes("*")){
        const rep = v.value.lastIndexOf('*')+1;
        v.value = v.value.substring(0, allval - (allval - rep));
    }
    if(v.value.includes("/")){
        const rep = v.value.lastIndexOf('/')+1;
        v.value = v.value.substring(0, allval - (allval - rep));
    }
});

document.addEventListener('keyup',function(e){
    if (e.keyCode == 27) {
        clearInput();
    }
});

document.addEventListener('DOMContentLoaded',function(){
    const currentVals = document.querySelectorAll('button#number');
    for (let i = 0; i < currentVals.length; i++) {
        currentVals[i].addEventListener('click',function(){
            let total;
            total = document.getElementById('total'); 
            total.value = total.value + this.textContent;
            total.focus();
        })
    }
});

function clearInput(){
    let inputText = document.getElementById('total');
    inputText.value = '';
    inputText.removeAttribute('disabled','disabled');
    inputText.style.color = '';
    inputText.focus();
    const allBtn = document.querySelectorAll("#number");
    for (var i = 0, len = allBtn.length; i<len; i++){
        allBtn[i].disabled = false;
    }
}

function NumNum(e) {
    var event;
    var charCode;

    if (e) {
        event = e;
    }else {
        event = window.event
    }

    if (e.which) {
        charCode = e.which;
    } else {
        charCode = e.keyCode;
    }

    if ((charCode == 13) || (charCode == 43) || (charCode == 45) || (charCode == 47) || (charCode == 42) ) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
