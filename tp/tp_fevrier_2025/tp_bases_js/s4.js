/*
classe Personne avec prenom,nom,age
       et methode incrementerAge()

tabPersonnes[] avec quelques Personnes dedans

coder et appeler une fonction qui calcule l'age moyen des personnes

trier les personnes (du tableau) par age ou bien par nom

*/
/*
//V1
function Personne(prenom,nom,age){
    this.prenom=prenom;
    this.nom=nom;
    this.age=age;
    this.incrementerAge = function(){ this.age++;}
}
*/
//V2 (possible depuis es2015):
class Personne{
    constructor(prenom,nom,age){
        this.prenom=prenom;
        this.nom=nom;
        this.age=age;
    }
    incrementerAge(){ this.age++;}
}

tabPersonnes = [new Personne("jean","Bon",30) ,
                new Personne('alex' , 'Therieur' , 28)];
tabPersonnes.push(new Personne('olie' , 'Condor' , 40));
tabPersonnes.push(new Personne('alain' , 'Therieur' , 27));

console.log(`tabPersonnes=${JSON.stringify(tabPersonnes)}`)

function calculerAgeMoyen(tabPers){
    let sommeAge=0
    for(i in tabPers){ sommeAge += tabPers[i].age; }
    //for(pers of tabPers){ sommeAge += pers.age; }
    return sommeAge / tabPers.length;
}

console.log(`ageMoyen=${calculerAgeMoyen(tabPersonnes)}`);

tabPersonnes.sort((pa,pb)=>pa.age - pb.age) //tri par age croissant
console.log(`tabPersonnes trié par age=${JSON.stringify(tabPersonnes)}`)

tabPersonnes.sort((pa,pb)=>pa.nom.localeCompare(pb.nom)) //tri par nom croissant
console.log(`tabPersonnes trié par nom=${JSON.stringify(tabPersonnes)}`)

//incrementer age de toutes les personnes:
for(p of tabPersonnes) {
    p.incrementerAge();
}
console.log(`ageMoyen=${calculerAgeMoyen(tabPersonnes)}`);