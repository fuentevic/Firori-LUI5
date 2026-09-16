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
        }
    });
});