function ir(){
    let formusu = document.querySelector("#fusu");
    let formcontra = document.querySelector("#fcontra");
    
    for(var i in baseDatos){

    var c = baseDatos[i].contraseña;
    var u = baseDatos[i].usuario;

    if(formcontra.value==c && formusu.value==u)
    {
        var encuentra = 1;
    }
    }
    if (encuentra==1){
        window.location="index2.html";
    }
    else
    {
        document.getElementById("lugarmen").innerHTML = "El usuario o la contraseña son incorrectos";
    }
} 

function calculasol(){
    let calmes = document.querySelector("#c-mes");
    let caldia = document.querySelector("#c-dia");


    switch(true){
        case ((calmes.value == 3 && caldia.value > 20 && caldia.value<31)||(calmes.value == 4 && caldia.value <= 20)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: ARIES";
            break;
        case ((calmes.value == 4 && caldia.value > 21 && caldia.value<30)||(calmes.value == 5 && caldia.value <= 21)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: TAURO";
            break;
        case ((calmes.value == 5 && caldia.value > 21 && caldia.value<31)||(calmes.value == 6 && caldia.value <= 21)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: GÉMINIS";
            break;
        case ((calmes.value == 6 && caldia.value > 21 && caldia.value<30)||(calmes.value == 7 && caldia.value <= 22)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: CÁNCER";
            break;
        case ((calmes.value == 7 && caldia.value > 22 && caldia.value<31)||(calmes.value == 8 && caldia.value <= 23)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: LEO";
            break;
        case ((calmes.value == 8 && caldia.value > 23 && caldia.value<31)||(calmes.value == 9 && caldia.value <= 23)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: VIRGO";
            break;
        case ((calmes.value == 9 && caldia.value > 23 && caldia.value<30)||(calmes.value == 10 && caldia.value <= 23)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: LIBRA";
            break;
        case ((calmes.value == 10 && caldia.value > 23 && caldia.value<31)||(calmes.value == 11 && caldia.value <= 22)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: ESCORPIO";
            break;
        case ((calmes.value == 11 && caldia.value > 22 && caldia.value<30)||(calmes.value == 12 && caldia.value <= 21)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: SAGITARIO";
            break;
        case ((calmes.value == 12 && caldia.value > 21 && caldia.value<31)||(calmes.value == 1 && caldia.value <= 20)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: CAPRICORNIO";
            break;
        case ((calmes.value == 1 && caldia.value > 20 && caldia.value<31)||(calmes.value == 2 && caldia.value <= 18)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: ACUARIO";
            break;
        case ((calmes.value == 2 && caldia.value > 18 && caldia.value<29)||(calmes.value == 3 && caldia.value <= 20)):
            document.getElementById("lugarCalculo").innerHTML = "Sol: PISCIS";
            break;                                  
        default:
            alert("los datos ingresados no pertenecen a un mes o día valido");    
    }
}

function Persona (nombre, apellido, usuario, contraseña){
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.contraseña = contraseña;
}

var baseDatos = [];
var nuevoUsuario = new Persona("Belén", "Puleo", "Bel18", "Bel12345678");
baseDatos.push(nuevoUsuario);
var nuevoUsuario = new Persona("Patricia", "Spina", "Pat01", "Pat12345678");
baseDatos.push(nuevoUsuario);
var nuevoUsuario = new Persona("Pablo", "Perez", "Pab21", "Pab12345678");
baseDatos.push(nuevoUsuario);
console.log(baseDatos);


