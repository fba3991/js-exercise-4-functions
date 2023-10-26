/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC). Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo */

 function argomento (parola){
    let rovescia = '';
    
    for (let i = parola.length - 1; i >=0; i--){  // 0 1 2 3 (Ciao) -> '' -> 'o' -> 'oa' 
     rovescia = rovescia + parola[i];
    }
    
    if(rovescia == parola){
    alert('la parola e un palindromo');
   
}else{
    alert('la parola non e palindromo');
} 
return rovescia;
}
let parolaUtente = prompt('inserisci una parola');
let parolaRovesciata = argomento(parolaUtente);

console.log(parolaRovesciata); 



