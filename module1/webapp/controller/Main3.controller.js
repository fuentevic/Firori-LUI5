sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
  "use strict";

  var variableGlobal;

  return Controller.extend("namespace.module1.controller.Main3", {
        onInit() {
        

        },

        onCambioVista2: function ()
            {
                this.getOwnerComponent().getRouter().navTo("Main2");
            },

        onCambioVista1: function ()
            {
                this.getOwnerComponent().getRouter().navTo("RouteMain");
            }
    });
});