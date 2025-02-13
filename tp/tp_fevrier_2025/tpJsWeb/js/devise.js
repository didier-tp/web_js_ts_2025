window.onload=function(){
    //bloc de code déclenché dès le chargement de la page 
    let btnAjout = document.getElementById("btnAjout");
    btnAjout.addEventListener('click',onAjout);

}

function onAjout(){
// récupérer valeur saisies sous forme d'objet javascript
let inputCode=document.querySelector("input[name=code]")
let inputName=document.querySelector("input[name=name]")
let inputChange=document.querySelector("input[name=change]")
//console.log(`code=${inputCode.value}`)
let objDevise = { code : inputCode.value ,
                  name : inputName.value,
                  change : Number(inputChange.value) };
console.log(`objDevise=${JSON.stringify(objDevise)}`)

// ajout des valeurs dans une nouvelle ligne du tableau
let eltTBody = document.getElementById("tBody");
var newRow = eltTBody.insertRow(-1) ; //new <tr> and .appendChild()
var newCellCode = newRow.insertCell(0);  //new <td> and .appendChild()
newCellCode.innerText = objDevise.code;
var newCellName = newRow.insertCell(1);  //new <td> and .appendChild()
newCellName.innerText = objDevise.name;
var newCellChange = newRow.insertCell(2);  //new <td> and .appendChild()
newCellChange.innerText = objDevise.change;
}