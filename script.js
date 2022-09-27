const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("len");
const volEl = document.getElementById("vol");
const massEl = document.getElementById("mass");
const convBtn = document.getElementById("conv-btn")

convBtn.addEventListener("click",function(){
    convLen();
    convVol();
    convMass();
    inputEl.value='';
})


if(inputEl.value!=null){
    function convLen(){
        let meter = (inputEl.value / 3.281).toFixed(3) ;
        let feet = (inputEl.value * 3.281).toFixed(3); 
        lengthEl.innerHTML+=`<p>${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters </p>`
    }
    
    function convVol(){
        let lit = (inputEl.value * 3.785).toFixed(3) ;
        let gal = (inputEl.value / 3.785).toFixed(3); 
        volEl.innerHTML+=`<p>${inputEl.value} liters = ${gal} gallons | ${inputEl.value} gallons = ${lit} liters </p>`
    }
    
    function convMass(){
        let lbs = (inputEl.value * 2.205).toFixed(3) ;
        let kilo = (inputEl.value / 2.205).toFixed(3); 
        massEl.innerHTML+=`<p>${inputEl.value} kilos = ${lbs} pounds | ${inputEl.value} pounds = ${kilo} kilos </p>`
    }
}





