//Funciones

function saludoinicial(){
   document.write ("Bienvenidos a yasbakery");
}

saludoinicial();

//For

for(let i = 0; i < 1; i++) {

   const nombre = parseInt(prompt("Ingrese su nombre"));

   const edad = parseInt(prompt("Ingrese la edad"));
   
   if(edad < 18) {
   
   alert("Se ingresó una edad menor a 18");
   
   break; }
   }

//Arrays

const nombres = ["Malena", "Juana", "Maria"]

console.log (nombres)

const edades =["19", "30", "50"]

console.log(edades)

//objetos   

   let persona = {
    nombre:'Juan',
    apellido: 'Arroyo',
    edad:31,

   }
   console.log(persona)

