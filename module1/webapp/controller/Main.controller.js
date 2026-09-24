sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    this.txtIzquierda = 1;
    this.txtDerecha = 1;

    return Controller.extend("namespace.module1.controller.Main", {
        onInit() 
        {
            this.txtIzquierda = 1;
            this.txtDerecha = 1;
            this.save= 1;

            var oModel = new sap.ui.model.json.JSONModel({
                Name: "Victor",
                Age: 67,
                Direction: "Direction 1234 B"
            });

            this.getView().setModel(oModel,"modeloPrueba");
            
        },

        onPress: function (){
            if(this.txtIzquierda != 1){    //si global texto izq es distinto de 0, coge el texto de idSaludo y mételo en la variante global.
               this.getView().byId("idSubtitle").setText(this.txtIzquierda);
            }else{ //Sino, toma el valor de idSaludo y guardalo en global
                this.txtIzquierda = this.getView().byId("idSaludo").getText();
                this.txtDerecha = this.getView().byId("idSubtitle").getText();
                this.getView().byId("idSubtitle").setText(this.txtIzquierda);
            }
            
            if(this.txtDerecha != 1){
                //this.txtDerecha = this.getView().byId("idSubtitle").getText();
                this.getView().byId("idSaludo").setText(this.txtDerecha);
            }else{
                this.getView().byId("idSaludo").setText(this.txtDerecha);
            }

            this.txtIzquierda = this.getView().byId("idSaludo").getText();
            this.txtDerecha = this.getView().byId("idSubtitle").getText();           
        
        },
        onPress1: function (){

            this.getView().byId("idSubtitle").setText(this.txtIzquierda);
            this.getView().byId("idSaludo").setText(this.txtDerecha);

        },
        
        onPress2: function (){

            this.getView().byId("idSubtitle").setText("");
            this.getView().byId("idSaludo").setText("");

        },

        onDesplazar(){
            let sIzqTexto = this.getView().byId("primerTextoEJ1").getText();
            this.getView().byId("segundoTextoEJ1").setText(sIzqTexto);
        },

        onAnhadir: function (){
            let oInput = this.getView().byId("inputEJ");
            this.getView().byId("primerTextoEJ1").setText(oInput.getValue());

            this.getView().getModel("modeloPrueba").setProperty("/Age",oInput.getValue());

        },

        //Ejercicio 1:
        onComprobarEdad: function (){
            let eInput = this.getView().byId("inputEJ1").getValue();
            let oBundle = this.getView().getModel("i18n").getResourceBundle();

            // TODO: CONTROL DE POSIBLES ERRORES AL INTRODUCIR ALGO
            // CÓDIGO

            if (eInput < 18){
                this.getView().byId("label2EJ1").setText(oBundle.getText("Menor"));
                // TODO: SI ES MENOR DE EDAD, HAZ ENABLED LOS INPUTS DE LA SECCIÓN "DATOS PADRE" DE LA VISTA
                // PISTA: Mirar métodos del elemento/os UI5 
                // CÓDIGO
            }
            else if (eInput >= 18 && eInput < 67) {
                this.getView().byId("label2EJ1").setText(oBundle.getText("Mayor"));
            }
            else {
                this.getView().byId("label2EJ1").setText(oBundle.getText("Jubilado"));
            }
        },

        // SEGUIMOS EN EL EJERCICIO 1:
        onComprobarEdadAdulto: function()
        {
            //TODO: Comprobar que el adulto ha introducido bien los datos
            //      Una vez comprobado todo, si es correcto, hacemos que desaparezcan los elementos en "DATOS PADRE".
            //      Si es incorrecto algún campo introducido, borramos lo que haya en el input para que el usuario vuelva a introducir de nuevo.
            //      En las dos posibles opciones, debemos hacer que la Label (id=labelRespuesta) muestre texto descriptivo de lo que pasa. 
        },

        //Ejercicio 2:
        onComprobarDia: function (){
            let diaInput = this.getView().byId("inputEJ2").getValue();
            let dBundle = this.getView().getModel("i18n").getResourceBundle();
            
            switch (diaInput) {
                case "lunes":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Inicio"));
                   break;
                case "miércoles":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Mitad"));
                   break;
                case "sábado":
                case "domingo":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Finde"));
                   break;
                default:
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Normal"));              
            }
            
        },

        /**
         * TODO: NECESITO QUE EL USUARIO PUEDA INTRODUCIR, EN MAYUS/MINUS, CON TILDE/SIN TILDE, EL DÍA DE LA SEMANA.
         *       CUALQUIER COSA QUE NO SEA DÍA DE LA SEMANA, MOSTRAMOS MENSAJE DE ERROR.
         * 
         * PISTA: MIRAR LA DOCUMENTACIÓN SOBRE MÉTODOS DE UN OBJETO STRING. 
         *        STRING METHODS: https://www.w3schools.com/js/js_string_methods.asp 
         */
        newOnComprobarDia: function (){
            //TODO
        },
        
        //EJERCICIO 3:
        onTabla5: function (){
            let resultado =""

            for (let i=1; i<=10; i++){
                resultado += `5 x ${i} = ${5*i}\n`                           //COMENTAR CON VÍCTOR DIFERENCIA ENTRE ACENTO Y COMILLA (llamados Batticks) + otras formas de concatenar  
            }
            this.getView().byId("DesciptivoEJ3").setText(resultado);
        },

        /**
         * TODO: DEJAR QUE EL USUARIO DECIDA QUE TABLA DE MULTIPLICAR QUIERE
         *       COMPROBAR SI ES UN NÚMERO VÁLIDO. SI LO ES, MOSTRAR TABLA DE MULTIPLICAR DE ESE NÚMERO.
         *       SI NO LO ES, BORRAR LO QUE HA INTRODUCIDO EN EL INPUT, Y MOSTRARLE UN MENSAJE DE "NÚMERO ERRONEO"
         * 
         * PUNTOS EXTRA: SI TE ANIMAS A SUBIR UN POCO EL NIVEL DE DIFICULTAD, USA EL OBJETO ARRAY COMO PUNTO DE PARTIDA DEL EJERCICIO.
         *               TE DEJO LA DECLARACIÓN DEL ARRAY EN EL MÉTODO. ÚSALO SI QUIERES UN PUNTO EXTRA EN LA NOTA FINAL. (BROMA)
         *               SOLO SI USAS LOS ARRAYS COMO VARIABLE, TE DEJO LA DOCUMENTACIÓN SOBRE ELLO: https://www.w3schools.com/js/js_arrays.asp
         */
        onTablaMultiplicar: function()
        {
            // let aResultado = []; // Inicialización de un array (Para el punto extra final).
            //TODO
        },

        //EJERCICIO 4:
        onSalto3: function (){
            let resultado2 =""

            for (let i=1; i<=5; i++){
                if (i==3) continue;
                resultado2 += `${i}\n`                             
            }
            this.getView().byId("DesciptivoEJ4").setText(resultado2);
        }, 
        
        //EJERCICIO 5:
        onPares:  function (){
            let j =2
            let resultado5 =""

            while (j<=10){
                resultado5 += `${j}\n`
                j+=2;                             
            }
            this.getView().byId("DesciptivoEJ5").setText(resultado5);
        },
        
        //EJERCICIO 6:
        onEstricto: function (){
            let A = 5;
            let B = "5";
            let eBundle = this.getView().getModel("i18n").getResourceBundle();

            if (A === B){
                this.getView().byId("DesciptivoEJ6").setText(eBundle.getText("IguEst"));
            }
            else if (A == B) {
                this.getView().byId("DesciptivoEJ6").setText(eBundle.getText("IguVal"));
            }
            else {
                this.getView().byId("DesciptivoEJ6").setText(eBundle.getText("NoCompEst"));
            }
            },

        //EJERCICIO 7:
        onBreak: function (){
            let resultado7 =""

            for (let i=1; i<=10; i++){
                if (i==7) break;
                resultado7 += `${i}\n`                             
            }
            this.getView().byId("DesciptivoEJ7").setText(resultado7);
        },

        //EJERCICIO 8:
        onComprobarConducir:function (){
            let edadInput = 1;
            let conduInput= "";
            edadInput= this.getView().byId("inputEJ8").getValue();
            conduInput = this.getView().byId("input2EJ8").getValue();
            let cBundle = this.getView().getModel("i18n").getResourceBundle();
                if(edadInput>=18 && conduInput=="Si"){
                    this.getView().byId("label2EJ8").setText(cBundle.getText("PCond"));
                }
                else {
                    this.getView().byId("label2EJ8").setText(cBundle.getText("NPCond"));
                }
        }
    });
});