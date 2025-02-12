var g1="abc" ; 
console.log("g1="+g1) ;
let x="5" ;
let y="6" ;

//calculer et afficher la somme de x et y
let concatenation = x+y;
console.log("concatenation=" + concatenation);
let somme = Number(x)+Number(y);
//console.log("somme=" + somme);
console.log(`somme(${x},${y})=${somme}`)

let v1=false;
let v2=0;
//comparer v1 et v2 avec == et avec ===
if(v1==v2) { 
    console.log("v1 et v2 ont des valeurs considérées comme identiques")
} 
if(v1===v2) { 
    console.log("v1 et v2 ont memes types et memes valeurs")
}

let va;
console.log("type de va=" + typeof va);
va="abc";
//afficher le type de la variable va
console.log("type de va=" + typeof va);
va=12;
console.log("type de va=" + typeof va);
va=true;
console.log("type de va=" + typeof va);