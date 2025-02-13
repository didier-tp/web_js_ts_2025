window.onload=function(){
    //bloc de code déclenché dès le chargement de la page 
    let btnAdditionner = document.getElementById("btnAdditionner");
    btnAdditionner.addEventListener('click',onAdditionner);

    let btnClear = document.getElementById("btnClear");
    btnClear.addEventListener('click',()=>{
        //zoneInput.value pour récupérer ou modifier la valeur du champ
        //zoneSpanOuDiv.innerText pour changer le texte imbriqué
        document.getElementById("spanRes").innerText="";
        document.getElementById("inputA").value="";
        document.getElementById("inputB").value="";
    });
}

function onAdditionner(){
    let inputA = document.getElementById("inputA");
    let valueA = inputA.value; //récupérer la valeur saisie
    let valueB = document.getElementById("inputB").value;
    let resAdd = Number(valueA) + Number(valueB);
    console.log(`valueA=${valueA} valueB=${valueB}  resAdd=${resAdd}`);
    let spanRes = document.getElementById("spanRes");
    spanRes.innerText=resAdd;
}