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
            let oInput = this.getView().byId("inputEJ1");
            this.getView().byId("primerTextoEJ1").setText(oInput.getValue());

        }
    });
});