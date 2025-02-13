window.onload=function(){
    //bloc de code déclenché dès le chargement de la page 
    let btnAdditionner = document.getElementById("btnAdditionner");
    btnAdditionner.addEventListener('click',onAdditionner);

    //let btnClear = document.getElementById("btnClear");
    let btnClear = document.querySelector("#btnClear"); //même sélecteur que css
    btnClear.addEventListener('click',()=>{
        //zoneInput.value pour récupérer ou modifier la valeur du champ
        //zoneSpanOuDiv.innerText pour changer le texte imbriqué
        document.getElementById("spanRes").innerText="";
        document.getElementById("inputA").value="";
        document.getElementById("inputB").value="";
    });

    let btncbShowHisto = document.getElementById("cbShowHisto");
    //btncbShowHisto.addEventListener('click',function(){
        btncbShowHisto.addEventListener('change',function(event){
        console.log(`type de event=${event.type}`)
        console.log(`id de la balise où l'évènement a eu lieu=${event.target.id}`)
        console.log(`type de balise où l'évènement a eu lieu=${event.target.nodeName}`)
        console.log(`valeur associée à l'événement=${event.target.checked}`)
        let estCoche=event.target.checked;
        //let estCoche = btncbShowHisto.checked;
        console.log(`estCoche= ${estCoche}`);
        let ulHisto = document.getElementById("ulHisto");
        //ulHisto.style.visibility=estCoche?"visible":"hidden";
        ulHisto.style.display=estCoche?"block":"none";
    });
}

function onAdditionner(){
    let inputA = document.getElementById("inputA");
    let valueA = inputA.value; //récupérer la valeur saisie
    let valueB = document.getElementById("inputB").value;
    let resAdd = Number(valueA) + Number(valueB);
    console.log(`valueA=${valueA} valueB=${valueB}  resAdd=${resAdd}`);
    let spanRes = document.getElementById("spanRes");
    //spanRes.innerText=resAdd;
    spanRes.innerHTML="<b>"+resAdd+"</b>";
    /*
    let baliseB = document.createElement("b")
    baliseB.appendChild(document.createTextNode(resAdd));
    spanRes.appendChild(baliseB);
    */
    let baliseLi = document.createElement("li");
    let textCalcul=`${valueA} + ${valueB} = ${resAdd}`
    baliseLi.appendChild(document.createTextNode(textCalcul));
    let ulHisto = document.getElementById("ulHisto");
    ulHisto.appendChild(baliseLi);

}