// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeowrks no es necesario que los vuelvan a definir.

const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');

// ----------------------

// ----- Recursión -----

// EJERCICIO 1
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array){
  var contador = 0;
  
  if(!array) {
    return 0;
  }
for (l in array) {
  if  (Array.isArray(array[l])){
    
   contador += countArray(array[l])
     }
  else {
    contador += array[l]
  }}
  return contador; 
} 
 



// EJERCICIO 2
// Secuencia inventada: f(n) = (f(n-1) + f(n-2) + f(n-3)) x 2
// Donde las primeras tres posiciones son dadas por el array recibido por parametro y a partir de
// la siguiente se calcula como la suma de los 3 números anteriores multiplicados por dos.
// array es un arreglo de 3 posiciones que puede contener números o strings, aquellas posiciones que
// sean números debemos dejarlas tal cual están pero las que tengan strings debemos calcular su cantidad
// de caracteres para usarlos en la secuencia.
// Por ejemplo si recibimos: ["Franco", 1, "Henry"] deberíamos tener los siguientes 3 valores iniciales
// de la secuencia f(0) = 6, f(1) = 1 y f(2) = 5 (Ya que "Franco" tiene 6 caracteres y "Henry", 5)
// A partir de ahí la cuarta posición sería  (6 + 1 + 5) * 2 = 24 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el array
// antes mencionado:
// secuencia: 6, 1, 5, 24, 60, 178, 524
// secuenciaHenry(0) // 6  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 1 ya que el elemento de la posición 1 es 1
// secuenciaHenry(6) // 524 ya que el elemento de la posición 6 es 524
// Para números negativos de n debe devolver false
function secuenciaHenry(array, n) {
  // Tu código aca:
  let nume = n-2;
var count = new Array;
if(n < 0) { return false;}
for(i in array){
  if(typeof array[i] == 'string'){
    count.push(array[i].length)
  } else {
    count.push(array[i])
  }
}
if (n < 3) {
  return count[n]
}if (n >= 3) {
  for (let i = 0; i < nume; i++) { 
     count.push((count[count.length-1] + count [count.length-2] + count[count.length-3])* 2)
  }

}
return count [n]
}
console.log(secuenciaHenry(["Franco", 1, "Henry"], 3))
// ---------------------

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function(){
  // Tu código aca:
  let count = 0;
  let current = this.head;
if (!this.head){
  return 0;
} else {
  while(current){
    count++;
    current = current.next;
  }
  return count;
}
}


// EJERCICIO 4
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false
LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};
LinkedList.prototype.removeFromPos = function(pos){
  // Tu código aca:
  if (this.head === null || pos > this.size() || pos < 0) return false;

  if (pos === 0) {
    let tempo = this.head.value;
    this.head = this.head.next;
    return tempo;
  }
  const anterior = this.getAt(pos - 1);
  if (!anterior || !anterior.next) {
    return;
  }
  let serio= anterior.next.value;
  anterior.next = anterior.next.next;
  return serio;
}
// EJERCICIO 5
// Implementar la función orderLinkedList que ordene los elementos de la lista pasada por parámetro
// y retorne una nueva lista con dichos elementos ya ordenados.
// Ejemplo:
//    Lista original: Head --> 4 --> 13 --> 1 --> 10 --> null
//    Lista nueva luego de aplicar el order: Head --> 1 --> 4 --> 10 --> 13 --> null
// IMPORTANTE: Pueden usar algun método de ordenamiento ya visto para tener un arreglo ordenado y a
// partir de él construir la nueva lista ordenada

var orderLinkedList = function(linkedList){
  // Tu código aca:
  var banco = new Array;
var current = linkedList.head;
while (current){
banco.push(current.value)
current = current.next;
}
banco.sort((a,b) => a-b)
var listaUwU = new LinkedList;
for (i in banco) {
  listaUwU.add(banco[i]);
}
return listaUwU;
}


// ----------------------


// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
  // Tu código aca:
  let vuelta = new Array;
  let personas = new Array;
  let definitiva = new Array;
for (i in queue) {
  if(Array.isArray(queue[i]))
vuelta.push(queue[i])
}
vuelta = vuelta[0]
for (i in vuelta) {
if (vuelta[i].ticket.event == event && vuelta[i].age >=18){
personas.push(vuelta[i].fullname +' '+ vuelta[i].ticket.number)
}
}
for (i in personas){
  for(j in personas) {
    if(personas [j][personas[j].length-1] !== personas[i][personas[i].length-1]){
      definitiva.push (personas[j])
    }
  }

} return definitiva;
}

var queue = new Queue;

queue.enqueue({fullname: "Franco Etcheverri", age: 26, ticket: {number: 1, event: "Tomorrowland"}});
queue.enqueue({fullname: "Toni Tralice", age: 30, ticket: {number: 2, event: "Tomorrowland"}});
queue.enqueue({fullname: "Agus Amani", age: 26, ticket: {number: 1, event: "Tomorrowland"}});
queue.enqueue({fullname: "Leo Maglia", age: 40, ticket: {number: 3, event: "Recital Queen"}});
queue.enqueue({fullname: "Bart Simpson", age: 10, ticket: {number: 3, event: "Tomorrowland"}});
queue.enqueue({fullname: "Cosme Fulanito", age: 10, ticket: {event: "Tomorrowland"}});
console.log(controlAcces(queue, 'Tomorrowland'))

// ---------------


// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function(array){
let uwu = new BinarySearchTree (array[0]);
let i  = 1;
while(i < array.length) {
  uwu.insert(array[i])
  i++
}
return uwu;
}
let uwu2 = generateBST([15,12,10,3,4])
console.log(uwu2)
// ---------------


// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]


var binarySearch = function (array, target) {
  // Tu código aca:
return array.indexOf(target)
}

// EJERCICIO 9
// Ordená un arreglo de números usando un bubble sort pero con algunas particularidades.
// El nuevo arreglo debe ser devuelto.
// El algortimo va a recibir un arreglo de objetos de la siguiente forma:
// {
//   name: "Notebook",
//   price: 1200,
//   review: 8
// }
// Esos objetos deben ser ordenados en función de lo que indique los siguientes parámetros
// "firstOrd", "secondOrd" los cuales van a tener alguna de las propiedades del objeto anterior
// para saber cual va a ser la que debemos tomar para el ordenamiento. La "secondOrd" se usa en los
// casos en los cuales para la "firstOrd" tengan el mismo valor.
// var array = [
//   {name: "Notebook", price: 1200, review: 8},
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 1:
// specialSort(array, "price") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "Notebook", price: 1200, review: 8}
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 2:
// specialSort(array, "price", "review") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7},
//   {name: "Notebook", price: 1200, review: 8}
// ]
// (Siempre el ordenamiento es de menor a mayor sea cual fuera la propiedad indicada para el orden)


var specialSort = function(array, firstOrd, secondOrd) {
  // Tu código aca:

}

// ----- Closures -----

// EJERCICIO 10
// Implementar la función closureGreeting que recibe un parámetro (prefix) mediante closures debe permitir
// generar nuevas funciones de saludo dejando fijo siempre el prefijo indicado.
// Ejemplo 1:
//    var hiGreeting = closureGreeting("Hi");
//    hiGreeting("Franco");  --> Devolverá "Hi Franco, you are number 1"
//    hiGreeting("Toni"); --> Devolverá "Hi Toni, you are number 2"
// Ejemplo 2:
//    var helloGreeting = closureGreeting("Hello");
//    helloGreeting("Franco");  --> Devolverá "Hello Franco, you are number 1"
//    helloGreeting("Toni"); --> Devolverá "Hello Toni, you are number 2"
// IMPORTANTE: Prestar atención a los espacios, comas y demás caracteres ya que tiene que el string
// debe coincidir en todos sus caracteres para que el test pase correctamente

function closureGreeting(prefix) {
  // Tu código aca:
  let i=0;
return function (uribe){
  i++;
  return prefix +' '+ uribe + ', you are number ' + i;  
}
}

// -------------------


// ----- EXTRA CREDIT -----

// Implementar una función que a partir de un String recibido como parámetro
// genere todos los posibles anagramas de ese String y retorne un arreglo con ellos.
// Los parámetros extra "array" e "index" son opcionales y pueden ser utilizados para
// resolver este problema de forma recursiva
// Extra-Extra credit: Sacar las palabras duplicados del array final.
// Ejemplo:
//    const anagrams = allAnagrams('abc');
//    console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

var allAnagrams = function(string, array, index) {

};

module.exports = {
  countArray,
  secuenciaHenry,
  LinkedList,
  Queue,
  controlAcces,
  binarySearch,
  allAnagrams,
  specialSort,
  closureGreeting,
  generateBST,
  orderLinkedList
}
