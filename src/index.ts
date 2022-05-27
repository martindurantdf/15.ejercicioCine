/**
 • Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada
 */

let longitud: number = Number(prompt("Ingrese la cantidad de butacas del cine:"));
let salaDeCine: boolean[] = new Array(longitud);

//Funcion para generar aleratoriamente butacas libres y ocuapadas
function cargarSalaAleatoria(arraySala: boolean[]) {
  for (var i = 0; i < arraySala.length; i++) {
    arraySala[i] = Math.random() < 0.5;
  }
}

//Funcion para contar las butacas ocupadas
function buscarButacasDesocupadas(arraySala: boolean[]): number {
  let desocupadas: number = 0;
  for (var i in arraySala) {
    if (arraySala[i] === false) {
      desocupadas++;
    }
  }
  return desocupadas;
}
console.log("Se generarán automaticamente las butacas libres y ocupadas");
cargarSalaAleatoria(salaDeCine);
console.log(salaDeCine);
console.log("Butacas desocupadas:", buscarButacasDesocupadas(salaDeCine));
