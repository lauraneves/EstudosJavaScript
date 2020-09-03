// alert("Olá mundo"); 
// console.log(document.querySelector("h1"));	//seleciona um elemento do html e imprime no console
var titulo = document.querySelector("#titulo");
console.log(titulo);
console.log(titulo.textContent);   //imprime sem a tag HTML
titulo.textContent = "Aparecida Nutricionista";   //altera o texto


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;
    if (peso <= 0 || peso >= 300) {
        pesoValido = false;
        console.log("Peso Inválido!");
        tdIMC.textContent = "Peso Inválido!";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("dados-invalidos");
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        console.log("Altura Inválida!");
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("dados-invalidos");
    }
    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    } else {
        tdIMC.textContent = "Altura e/ou peso inválidos!";
    }
}