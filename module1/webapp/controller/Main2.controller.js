sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
  "use strict";

  var variableGlobal;

  return Controller.extend("namespace.module1.controller.Main2", {
      onInit() {
        const persona = {
          nombre: "Luis",
          edad: 30,
          estaTrabajando: true,
          saludar: function () {
            console.log("Hola, me llamo Luis. Tengo 30 y sigo trabajando.");
            console.log(persona.setTrabajando(false));
            if(this.estaTrabajando){
              console.log("Hola, me llamo " + this.nombre + ". Tengo " + this.edad + " y sigo trabajando.");
            }else{
              console.log("Hola, me llamo " + this.nombre + ". Tengo " + this.edad + " y estoy sin trabajo.");
            }

            // TODO: TERNARIA 
            //console.log("Hola, me llamo " + this.nombre + ". Tengo " + this.edad + `(${this.estaTrabajando} == true) ? 'y sigo trabajando' : 'y estoy sin trabajo'`);
            
          },
          getTrabajando: function (){
            return this.estaTrabajando;
          },
          setTrabajando: function (trabajando){
            this.estaTrabajando = trabajando;
          }
        };

        // Llamada funciones del Objeto JS
        console.log(persona.saludar());
        console.log(persona.getTrabajando());
        console.log(persona.setTrabajando(false));
        console.log(persona.getTrabajando());

        // Acceso a propiedades del Objeto JS
        console.log(persona.nombre);
        persona.edad = 35; // Cambiar valor de una propiedad del Objeto JS
        console.log(persona.edad);

        /**
         * Esto es un comentario en bloque
         *    Temario Arrays 
         */
        // Declaraciones de Arrays
        const nombres = [];
        const apellidos = ["Fernandez", "Fuente", "Gonzalez"];

        // Cambiar un valor de un array en una posición concreta
        console.log(apellidos[0]);
        apellidos[0] = "Albors";
        console.log(apellidos);

        // Añadir un valor al final del array
        nombres.push("Victor");
        console.log(nombres);

        // Añadir un valor al final del array
        apellidos.push("Albors");
        console.log(apellidos);

        // Eliminar el último valor del array
        apellidos.pop();
        console.log(apellidos);

        // Nos devuelve el array "cortado" en función de la posición pasado por parametro.
        // Para profundizar más en esto, mirar documentación de Arrays.
        console.log(apellidos.slice(1));

        // Convertir objeto JS en un JSON
        let modeloJSON = JSON.stringify(persona);
        console.log(modeloJSON);
        console.log(persona);

        // Convertir un JSON en un objeto JSç
        let objetoJS = JSON.parse(modeloJSON);
        console.log(objetoJS);

      }
  });
});