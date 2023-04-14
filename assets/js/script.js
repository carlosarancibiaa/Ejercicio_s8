
let opcion = prompt("Seleccione que desea hacer:\n1.- Calcular cual número es mayor\n2.- Sumar\n3.- Restar\n4.- Multiplicar\n5.- Dividir\n6.- Mostrar los números ingresados\n7.- Salir"), num1, num2, resultado;


if (opcion >= 1 && opcion <= 6) {
    num1 = parseInt(prompt("Ingrese número 1"));
    num2 = parseInt(prompt("Ingrese número 2"));
} else if (opcion == 7) {
    alert("Gracias por participar")
} else {
    alert("Elección incorrecta. Adios!")
}
switch (opcion) {
    case "1":
        comparar();
        break
    case "2":
        sumar();
        break
    case "3":
        restar();
        break
    case "4":
        multiplicar();
        break
    case "5":
        dividir();
        break
    case "6":
        alert("Ha ingresado los números "+num1+" y "+num2)
        break
}
function comparar() {
    if (num1 > num2) {
        alert(num1 + " es mayor que " + num2)
    } else if (num1 == num2) {
        alert(num1 + " es igual a " + num2)
    } else {
        alert(num2 + " es mayor que " + num1)
    }
}
function sumar(){
    resultado = num1+num2;
        alert("La suma de los números "+num1+" y "+num2+" es: "+resultado)
}
function restar(){
    resultado = num1-num2;
        alert("La resta de los números "+num1+" y "+num2+" es: "+resultado)
}
function multiplicar(){
    resultado = num1*num2;
        alert("La multiplicación de los números "+num1+" y "+num2+" es: "+resultado)
}
function dividir(){
    resultado = num1/num2;
        alert("La división de los números "+num1+" y "+num2+" es: "+resultado)
}