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

        },

        //Ejercicio 1:
        onComprobarEdad: function (){
            let eInput = this.getView().byId("inputEJ1").getValue();
            let oBundle = this.getView().getModel("i18n").getResourceBundle();

            if (eInput < 18){
                this.getView().byId("label2EJ1").setText(oBundle.getText("Menor"));
            }
            else if (eInput >= 18 && eInput < 67) {
                this.getView().byId("label2EJ1").setText(oBundle.getText("Mayor"));
            }
            else {
                this.getView().byId("label2EJ1").setText(oBundle.getText("Jubilado"));
            }
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
        
        onTabla5: function (){
            let resultado =""

            for (let i=1; i<=10; i++){
                resultado += `5 x ${i} = ${5*i}\n`                           //COMENTAR CON VÍCTOR DIFERENCIA ENTRE ACENTO Y COMILLA (llamados Batticks) + otras formas de concatenar  
            }
            this.getView().byId("DesciptivoEJ3").setText(resultado);
        },

        onSalto3: function (){
            let resultado2 =""

            for (let i=1; i<=5; i++){
                if (i==3) continue;
                resultado2 += `${i}\n`                             
            }
            this.getView().byId("DesciptivoEJ4").setText(resultado2);
        }, 
        
        onPares:  function (){
            let j =2
            let resultado5 =""

            while (j<=10){
                resultado5 += `${j}\n`
                j+=2;                             
            }
            this.getView().byId("DesciptivoEJ5").setText(resultado5);
        },
        
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


        onBreak: function (){
            let resultado7 =""

            for (let i=1; i<=10; i++){
                if (i==7) break;
                resultado7 += `${i}\n`                             
            }
            this.getView().byId("DesciptivoEJ7").setText(resultado7);
        },

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