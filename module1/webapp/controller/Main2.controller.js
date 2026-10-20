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
            console.log("Hola, me llamo " + this.nombre + ". Tengo " + this.edad + ((this.estaTrabajando) ? ' y sigo trabajando' : ' y estoy sin trabajo'));
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


        
        //Objeto global Ejercicio 2
        this.Ciudadano2 ={
          nombre: "Luis",
          edad: 56,
          estaTrabajando2: true,
          Empresa2: "Accenture",
          profesion: "Desarrollador SAP UI5"

        }; 
        
        //Array Global Ejercicio 6
        this.ArrayPersonas =[
          {Nombre:"Ana",Edad:25},
          {Nombre:"Carlos",Edad:32},
          {Nombre:"Marta",Edad:40}

        ];

        //Objeto Cuenta Bancaria Ejercicio 3.7

        this.mCuentaBancaria = new JSONModel(
              {
                  Nombre: "Luis",
                  Saldo: 1000,
                  Unidad: "€"
              }
          );
        this.getView().setModel(this.mCuentaBancaria, "CuentaBancaria");
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
        this.getView().byId("labelEJ3.2").setText(sResultadoPersona2);

      },

      //Ejercicio 3.3 - Agrega un método llamado mostrar saldo que imprima "Hola [nombre], tu saldo son [Saldo] €." usando this.
      onDevolverSaldo: function () 
      {
        const Saldos ={
        nombre: "Luis",
        saldo: 350,
        }
        
        let sBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones      
        let sNombreInput=this.getView().byId("inputEJ3.3").getValue();
        let sNormalInput=this.normalizaTexto(sNombreInput);
        let sNormalObjeto=this.normalizaTexto(Saldos.nombre);


        if (sNormalInput == sNormalObjeto) {
          //Monto el nuevo resultado 
          let sResultadoSaldo = "Hola " + Saldos.nombre + ", tu saldo es de " + Saldos.saldo + " €.";
        
          //Declaro lógica de mostrar resultados
          this.getView().byId("labelEJ3.3").setText(sResultadoSaldo);
        }
        else 
        {
          //Declaro lógica de mostrar error
          this.getView().byId("labelEJ3.3").setText(sBundle.getText("NombreError"));
        }


      },

      normalizaTexto: function (nombrePadre)
      {
        let NFDaInput = nombrePadre.normalize("NFD"); // separa letras y acentos
        let aNFDaInput = NFDaInput.replace(/[\u0300-\u036f]/g, ""); // elimina los acentos
        let MaNFDaInput = aNFDaInput.toLowerCase(); //minúsculas
        let EMaNFDaInput = MaNFDaInput.trim(); //quitar espacios

        return EMaNFDaInput; // Retornamos nombre padre normalizado
      },


      //Ejercicio 3.4 - Crea una función crearAnimal que reciba tipo y edad, y devuelva un objeto con esas propiedades y un método emitirSonido.
      CrearAnimal: function (TipoAnimal,Edad) 
      { return {
          TipoAnimal: TipoAnimal,
          Edad: Edad,
          EmitirSonido: function () 
          {
            let sResultAnimal = "El " + this.TipoAnimal + " tiene " + this.Edad + " años y hace un sonido.";

            return sResultAnimal;            
          }        
        }
      },

      onEmitirSonido: function () 
      {
        let sAnimalInput=this.getView().byId("inputEJ3.4.1").getValue();
        let iEdadAnimalInput=this.getView().byId("inputEJ3.4.2").getValue();
        const AnimalActual = this.CrearAnimal(sAnimalInput,iEdadAnimalInput);

        //Lógica emitir sonido
        //let sResultAnimalFinal = AnimalActual.EmitirSonido(); //El animal hace el sonido
        //this.getView().byId("labelEJ3.4").setText(sResultAnimalFinal);
        this.getView().byId("labelEJ3.4").setText(AnimalActual.EmitirSonido());
      },

      //Ejercicio 3.5 - Usa un bucle for...in para imprimir todas las propiedades y sus valores del objeto persona.
      onMostrarPropiedades: function ()
      {
        //Declaro el objeto
        const oDatosPersona ={
          Nombre: "Luis",
          Edad: 34,
          Trabajando: true,
          Empresa: "Capgemini",
        }
        let sResultado =" "; //Inicializo sResultado

        //Lógica para recorrer las propiedades del objeto
        for(let propiedad in oDatosPersona)
        {
          //resultado += `${propiedad} + " : "+ ${DatosPersona[propiedad]}\n`        //Toca cada propiedad y su valor, ej: nombre : Luis.  
        sResultado += propiedad + " : "+ `${oDatosPersona[propiedad]}\n`;
        }
        //Lógica para mostrar el resultado
        this.getView().byId("textEJ3.5").setText(sResultado);
      },

      //Ejercicio 3.6 - Tienes un array de objetos con personas. Encuentra la persona llamada "Carlos".
      onButtonAna: function () 
      {
        let sBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones      
        const oAna = this.ArrayPersonas.find(persona=>persona.Nombre === sBundle.getText("ButtonAna")); //Busca en el Array el objeto que coincide con la propiedad nombre===Ana.
        let sResultAna=" ";

        //Lógica para recorrer las propiedades del objeto oAna
        for(let propiedad in oAna)
        {
        sResultAna += propiedad + ": "+ `${oAna[propiedad]}\n`;
        }
        //Lógica para mostrar el resultado
        this.getView().byId("textEJ3.6").setText(sResultAna);
      },
      
      onButtonCarlos: function () 
      {
        let sBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones      
        const oCarlos = this.ArrayPersonas.find(persona=>persona.Nombre === sBundle.getText("ButtonCarlos")); //Busca en el Array el objeto que coincide con la propiedad nombre===Ana.
        let sResultCarlos=" ";

        //Lógica para recorrer las propiedades del objeto oAna
        for(let propiedad in oCarlos)
        {
        sResultCarlos += propiedad + ": "+ `${oCarlos[propiedad]}\n`;
        }
        //Lógica para mostrar el resultado
        this.getView().byId("textEJ3.6").setText(sResultCarlos);
      }, 

      onButtonMarta: function () 
      {
        let sBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones      
        const oMarta = this.ArrayPersonas.find(persona=>persona.Nombre === sBundle.getText("ButtonMarta")); //Busca en el Array el objeto que coincide con la propiedad nombre===Ana.
        let sResultMarta=" ";

        //Lógica para recorrer las propiedades del objeto oAna
        for(let propiedad in oMarta)
        {
        sResultMarta += propiedad + ": "+ `${oMarta[propiedad]}\n`;
        }
        //Lógica para mostrar el resultado
        this.getView().byId("textEJ3.6").setText(sResultMarta);
      },

      //Ejercicio 3.7 - Crea un objeto cuentaBancaria con propiedades saldo y métodos depositar y retirar, que modifiquen el saldo.
      onRetirar: function (){
        let iCantidadRetirar = this.getView().byId("InputRetirarEJ3.7").getValue(); //Propone Number() dado que getValue siempre devuelve un string...
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let oCuentaBancaria = this.getView().getModel("CuentaBancaria");
        //let oDataModel = oCuentaBancaria.getData();                     //Comentar esta opción con Víctor + necesita     oModelo.refresh(true);
        let iSaldo = oCuentaBancaria.getProperty("/Saldo");

        if (iCantidadRetirar >= 0 && iCantidadRetirar <= iSaldo) 
        {
          let iNuevoSaldo=0;
          iNuevoSaldo= iSaldo - iCantidadRetirar;
          oCuentaBancaria.setProperty("/Saldo",iNuevoSaldo);


          this.getView().byId("ResultadoEJ3.7").setText(oBundle.getText("SaldoActualizadoEJ3.7"));
          this.getView().byId("InputRetirarEJ3.7").setValue("");
        }
        else if (iCantidadRetirar > iSaldo) 
        {
        this.getView().byId("ResultadoEJ3.7").setText(oBundle.getText("SaldoInsuficienteEJ3.7"));
        this.getView().byId("InputRetirarEJ3.7").setValue("");
        }
        else 
        {
          this.getView().byId("ResultadoEJ3.7").setText(oBundle.getText("ErrorEJ3.7"));
          this.getView().byId("InputRetirarEJ3.7").setValue("");
        }

      },
    
      onIngresar: function (){
        let iCantidadIngresar = Number(this.getView().byId("InputIngresarEJ3.7").getValue()); //Propone Number() dado que getValue siempre devuelve un string...
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let oCuentaBancaria = this.getView().getModel("CuentaBancaria");
        //let oDataModel = oCuentaBancaria.getData();                     //Comentar esta opción con Víctor + necesita     oModelo.refresh(true);
        let iSaldo = oCuentaBancaria.getProperty("/Saldo");

        if (iCantidadIngresar >= 0) 
        {
          let iNuevoSaldo=0;
          iNuevoSaldo= (iSaldo + iCantidadIngresar);

          
          oCuentaBancaria.setProperty("/Saldo",iNuevoSaldo);


          this.getView().byId("ResultadoEJ3.7").setText(oBundle.getText("SaldoActualizadoEJ3.7"));
          this.getView().byId("InputIngresarEJ3.7").setValue("");
        }
        else 
        {
          this.getView().byId("ResultadoEJ3.7").setText(oBundle.getText("ErrorEJ3.7"));
          this.getView().byId("InputIngresarEJ3.7").setValue("");
        }

      }

  });
});