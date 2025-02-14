//VERSION avec fetch() et Promise

window.onload=function(){
    //bloc de code déclenché dès le chargement de la page 
    let btnAjout = document.getElementById("btnAjout");
    btnAjout.addEventListener('click',onAjout);

    let btnRecherche = document.getElementById("btnRecherche");
    btnRecherche.addEventListener('click',onRecherche);

    let btnEnvoi = document.getElementById("btnEnvoi");
    btnEnvoi.addEventListener('click',onEnvoi);
}

function traiterErreur(erreur){
    console.log(`erreur=${erreur}`);
    let spanMessage = document.getElementById("spanMessage");
    spanMessage.innerHTML=erreur;
    spanMessage.style.color="red";
}

function traiterReponseDevises(responseJsObject){
    console.log(`response=${responseJsObject}`);
    let listeDevises = responseJsObject;
    for(let objDevise of listeDevises){
        ajouterDeviseDansTableauHTML(objDevise)
       }
}

function onRecherche(){
    //let url = "data/devises_locales.json";
   let url = "https://www.d-defrance.fr/tp/devise-api/v1/public/devises";
   fetch(url)
    .then((response)=>{ 
        if(response.status != 200) { 
            let messageErreur="echec ajax " + response.status;
            console.log(messageErreur);
             throw messageErreur; }
        return response.json();
    })
    .then((responseJsonAsJsObject) => { traiterReponseDevises(responseJsonAsJsObject) })
    .catch((err)=>{ traiterErreur(err) });
}

function recupererDeviseSaisie(){
    let spanMessage = document.getElementById("spanMessage");
    spanMessage.innerHTML="";
    // récupérer valeur saisies sous forme d'objet javascript
    let inputCode=document.querySelector("input[name=code]")
    //console.log(`code=${inputCode.value}`)
    let inputName=document.querySelector("input[name=name]")
    let inputChange=document.querySelector("input[name=change]")
    let changeSaisi = inputChange.value;
    //on vérifie via isNaN() si changeSaisi est numerique ou pas
    if(isNaN(changeSaisi)){
        //si pas numerique on affiche (en rouge) un message d'erreur dans "spanMessage"
        spanMessage.innerHTML="le taux de change n'est pas numerique";
        spanMessage.style.color="red";
        return; //sans executer fin de fonction
    }
    //si numerique on ajoute la ligne dans le tableau
    
    let objDevise = { code : inputCode.value ,
                      name : inputName.value,
                      change : Number(changeSaisi) };
    console.log(`objDevise=${JSON.stringify(objDevise)}`)
    return objDevise;
}

function onAjout(){
    let objDevise = recupererDeviseSaisie();
    ajouterDeviseDansTableauHTML(objDevise);
}

function traiterReponseEnvoi(reponseAsJsObject){
    console.log(`reponseEnvoi=${JSON.stringify(reponseAsJsObject)}`)
}

function onEnvoi(){
    let objDevise = recupererDeviseSaisie();
    let url = "https://www.d-defrance.fr/tp/devise-api/v1/public/devises";
    fetch(url,{
        method: 'POST' ,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body : JSON.stringify(objDevise)
    })
    .then((response)=>{ 
        if(response.status != 200 && response.status != 201 ) { 
            let messageErreur="echec ajax " + response.status;
            console.log(messageErreur);
             throw messageErreur; }
        return response.json();
    })
    .then((responseJsonAsJsObject) => { traiterReponseEnvoi(responseJsonAsJsObject) })
    .catch((err)=>{ traiterErreur(err) });
}

function ajouterDeviseDansTableauHTML(objDevise){
    // ajout des valeurs dans une nouvelle ligne du tableau
    let eltTBody = document.getElementById("tBody");
    let newRow = eltTBody.insertRow(-1) ; //new <tr> and .appendChild()
    let newCellCode = newRow.insertCell(0);  //new <td> and .appendChild()
    newCellCode.innerText = objDevise.code;
    let newCellName = newRow.insertCell(1);  //new <td> and .appendChild()
    newCellName.innerText = objDevise.name;
    let newCellChange = newRow.insertCell(2);  //new <td> and .appendChild()
    newCellChange.innerText = objDevise.change;
}