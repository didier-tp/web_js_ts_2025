let tabNoms = [ "Zorro" , "Jean" , "Alex" , "Dupond" , "Luc" , "Bernard"];
let tabNombres = [ 12, 5 , 30 , 6 , 145 , 14];

//tabNoms.sort(); //tri par defaut par ordre croissant
tabNoms.sort((na,nb) => nb.localeCompare(na) ); //tri par ordre décroissant

let comparateurNombresCroissants = function(va,vb){
    /*
    if(va>vb) return 1;
    if(va<vb) return -1;
    if(va==vb) return 0;
    */
   return va-vb;
}
//tabNombres.sort(comparateurNombresCroissants);
tabNombres.sort((va,vb)=>va-vb); //tri par ordre croissant


//En Tp : trier ces tableaux par ordre croissant et décroissant
//puis afficher les éléments d'une manière ou d'une autre 
//boucle for( ...; i++) ou boucle for (... in ...) ou for(...of ...)
/*
for(let i=0;i<tabNombres.length;i++){
    console.log(`tabNombres[${i}]=${tabNombres[i]}`)
}
*/
for(let i in tabNombres){
    console.log(`tabNombres[${i}]=${tabNombres[i]}`)
}
for(let nom of tabNoms){
    console.log(`nom=${nom}`)
}