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
            console.log("Hola, me llamo " + this.nombre + ". Tengo " + this.edad + ((this.estaTrabajando) ? 'y sigo trabajando' : 'y estoy sin trabajo'));
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

        this.Ciudadano2 ={
          nombre: "Luis",
          edad: 56,
          estaTrabajando2: true,
          Empresa2: "Accenture",
          profesion: "Desarrollador SAP UI5"

        };    
      },

      onCambioVista3: function ()
        {
            this.getOwnerComponent().getRouter().navTo("Main3");
        },

      //Ejercicio 3.1 - Crea un objeto llamado persona con las propiedades nombre, edad y profesion. Luego imprime el valor de nombre y edad.
      onImprimirValorCiudadano: function () 
      {
        //Declaro el Objeto Ciudadano y las variables necesarias
        const Ciudadano ={
          nombre: "Luis",
          edad: 56,
          profesion: "Desarrollador SAP UI5"

        };        
        let sBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones
        let sResultadoCiudadano = "Hola, me llamo " + Ciudadano.nombre + ", tengo " + Ciudadano["edad"] + " años y mi profesión es la de " + Ciudadano.profesion + "."; 
        //Accedo con "." y con [""]

        //Declaro lógica de mostrar resultados
        this.getView().byId("DesciptivoEJ3.1").setText(sResultadoCiudadano);
        this.getView().byId("label2EJ3.1").setText(sBundle.getText("GraciasUso"));
      },
      
      //Ejercicio 3.2 - Cambia la edad de persona y agrega una nueva propiedad ciudad.
      onMostrarDatos: function ()
      {
        //Declaro el Objeto Ciudadano2 como Global 

        let sBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones
        let sResultadoCiudadano2 = "Hola, me llamo " + this.Ciudadano2.nombre + ", tengo " + this.Ciudadano2["edad"] + " años y mi empresa actual es " + this.Ciudadano2.Empresa2 + "."; 
        
        //Declaro lógica de mostrar resultados
        this.getView().byId("labelEJ3.2").setText(sResultadoCiudadano2);
               
      },

      onActualizarDatos: function() 
      {

        let iNuevaEdad = this.getView().byId("inputEJ3.2Edad").getValue();
        let sNuevaEmpresa = this.getView().byId("inputEJ3.2Empresa").getValue();
        let sNuevaCiudad = this.getView().byId("inputEJ3.2Ciudad").getValue();

        this.Ciudadano2.edad = iNuevaEdad;
        this.Ciudadano2.Empresa2 = sNuevaEmpresa;
        this.Ciudadano2.ciudad = sNuevaCiudad;
        
        //Monto el nuevo resultado      
        let sResultadoPersona2 = "Hola, me llamo " + this.Ciudadano2.nombre + ", tengo " + this.Ciudadano2["edad"] + " años, mi empresa actual es " + this.Ciudadano2.Empresa2 + " y vivo en " + this.Ciudadano2.ciudad + ".";

        //Declaro lógica de mostrar resultados
        this.getView().byId("label2EJ3.2").setText(sResultadoPersona2);

      }

  });
});