let tab = [ "alex" , "bernard" , "Alfred" , "Jean" , "alain" , "toto"];

//en Tp , supprimer dans ce tableau tous les éléments qui commencent par "a" 
//(en minuscule ou bien majuscule)
let taille=tab.length;
//for(let i = 0; i<taille ;i++){
for(let i = taille -1; i>=0 ; i--){
    if(tab[i].toLowerCase().startsWith('a')){
        delete tab[i];
        //tab.splice(i,1,/*rien*/);
    }
}


//afficher le tableau avec les éléments qui restent en majuscule
for(let i=0;i<tab.length;i++){
    if(tab[i]!=undefined){
        console.log(`tab[${i}]=${tab[i].toUpperCase()}`) 
        //plante si tab[i] vaut null ou undefined
    }
}
console.log("------------")
for(let j in tab){
   console.log(`tab[${j}]=${tab[j].toUpperCase()}`) 
}