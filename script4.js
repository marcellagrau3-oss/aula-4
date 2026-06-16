let nota1 // entrada - input
let nota2 // entrada - input
let nota3 // entrada - input
let média // saída - output

nota1 = prompt("Informe a primeira nota");
nota2 = prompt("Informe a segunda nota");
nota3 = prompt("Informe a terceira nota");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

média = parseFloat(nota1 + nota2 + nota3) / 3;

alert("A média das notas é de " + média);