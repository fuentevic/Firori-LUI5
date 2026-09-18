sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("namespace.module1.controller.Main", {
        onInit() 
        {
            
        },

        onPress: function (){
            var txtIzquierda = this.getView().byId("idSaludo").getText();
            var txtDerecha = this.getView().byId("idSubtitle").getText();

            this.getView().byId("idSubtitle").setText(txtIzquierda);
            this.getView().byId("idSaludo").setText(txtDerecha);
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