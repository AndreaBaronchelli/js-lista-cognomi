/******************************************
 * LAST NAME LIST
 *****************************************/

/*
 TASKS
 1 - creazione arrey cognomi
 2 - chiedere cognome a utente
 3 - inserirlo in arrey cognomi
 4 - ordinare arrey cognomi in ordine alfabetico
 5 - stampare arrey cognomi
 6 - stampare posizione del cognome dell'utente con base 1
*/

//1
var lastnameList = ["rossi", "bianchi", "verdi", "facchini", "colombo", "milesi"];

//2
var userLastname = prompt("What's your Surname?").toLowerCase().trim();

//3
lastnameList.push(userLastname);
//console.log(lastnameList);

//4
lastnameList.sort();

//5
console.log(lastnameList);

//6
console.log( lastnameList.indexOf(userLastname) + 1 );
