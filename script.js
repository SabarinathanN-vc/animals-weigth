function showBtn() {
    document.getElementById('btnID1').style.display = "block";
    document.getElementById('btnID')
        value= "btnID1";
    document.getElementById('btnID2').style.display = "block";
    document.getElementById('btnID')
        value= "btnID2";
    
}

function showBtn1(){
    document.getElementById('getDetails').style.display = "block";
}

function dercalc(){
    let der=document.getElementById("dogcat").value;
    document.getElementById("der1").value=der;
}

function rercalc(){
    let weight=document.getElementById("Weight").value;
    let res1=Math.pow(weight, 0.75);
    let res2=70*res1;
    document.getElementById("rer1").value=Math.round(res2);
}

function totalkcalo(){
    let dervalue=document.getElementById("der1").value;
    let rervalue=document.getElementById("rer1").value;
    document.getElementById("totalkcal").value=Math.round(dervalue*rervalue);
}

function submitcalc(){
    let kcal=document.getElementById("totalkcal").value;
    alert("The total Kcal is "+kcal);
}