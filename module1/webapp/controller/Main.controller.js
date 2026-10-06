sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
    "use strict";
    this.txtIzquierda = 1;
    this.txtDerecha = 1;


    return Controller.extend("namespace.module1.controller.Main", {
        onInit() 
        {
            this.txtIzquierda = 1;
            this.txtDerecha = 1;
            this.save= 1;
            this.controlpadre= false;
            //this.aInput= "Name";

            let oModel = new JSONModel(
                {
                    Clientes:
                    [
                        {
                            Nombre: "Luis",
                            Cartera: 30,
                            Carrito: ["Carne", "Pescado", "Verdura"],
                            Pagado: false  
                        },
                        {
                            Nombre: "Pepe",
                            Cartera: 10,
                            Carrito: ["Fruta"],
                            Pagado: true  
                        }
                    ]
                }
            );
            this.getView().setModel(oModel, "Cliente");




            let fModel = new JSONModel(
                {
                    Nombre: "Fresa",
                    Precio: 200,
                    Unidad: "€"
                }
            );
            
            this.getView().setModel(fModel, "Fruta");

            let pModel = new JSONModel(
                {
                    PadresCole:
                    [
                        {
                            Nombre: "luis",
                            Edad: 34,
                            Hijo: "Luis",
                            Material: ["lapiz", "boli", "libro","goma"],
                            Pagos: true 
                        },
                        {
                            Nombre: "victor",
                            Edad: 25,
                            Hijo: "José",
                            Material: ["lapiz", "boli", "goma"],
                            Pagos: true  
                        },
                        {
                            Nombre: "paco",
                            Edad: 54,
                            Hijo: "Fran",
                            Material: ["boli", "libro","goma"],
                            Pagos: false 
                        },
                        {
                            Nombre: "pepe",
                            Edad: 41,
                            Hijo: "José",
                            Material: ["lapiz", "libro","goma"],
                            Pagos: true 
                        }
                    ]
                }
            );
            this.getView().setModel(pModel, "PadresCole"); //Declara el modelo en la Vista
                      
        },//Oninit fin

        onFruta: function()
        {
            let modelPrecio = this.getView().getModel("Fruta").getProperty("/Precio");
            let inputPrecio = this.getView().byId("iFruta").getValue();

            this.getView().getModel("Fruta").setProperty("/Precio", inputPrecio);
        },

        onPress: function ()
        {
            if(this.txtIzquierda != 1) //si global texto izq es distinto de 0, coge el texto de idSaludo y mételo en la variante global.
            {    
               this.getView().byId("idSubtitle").setText(this.txtIzquierda);
            }
            else //Sino, toma el valor de idSaludo y guardalo en global
            {
                this.txtIzquierda = this.getView().byId("idSaludo").getText();
                this.txtDerecha = this.getView().byId("idSubtitle").getText();
                this.getView().byId("idSubtitle").setText(this.txtIzquierda);
            }
            
            if(this.txtDerecha != 1)
            {
                //this.txtDerecha = this.getView().byId("idSubtitle").getText();
                this.getView().byId("idSaludo").setText(this.txtDerecha);
            }
            else
            {
                this.getView().byId("idSaludo").setText(this.txtDerecha);
            }

            this.txtIzquierda = this.getView().byId("idSaludo").getText();
            this.txtDerecha = this.getView().byId("idSubtitle").getText();           
        
        },
        
        onPress1: function ()
        {
            this.getView().byId("idSubtitle").setText(this.txtIzquierda);
            this.getView().byId("idSaludo").setText(this.txtDerecha);
        },
        
        onPress2: function ()
        {
            this.getView().byId("idSubtitle").setText("");
            this.getView().byId("idSaludo").setText("");
        },

        onDesplazar()
        {
            let sIzqTexto = this.getView().byId("primerTextoEJ1").getText();
        
            this.getView().byId("segundoTextoEJ1").setText(sIzqTexto);
        },

        onAnhadir: function ()
        {
            let oInput = this.getView().byId("inputEJ");
        
            this.getView().byId("primerTextoEJ1").setText(oInput.getValue());
            this.getView().getModel("modeloPrueba").setProperty("/Age",oInput.getValue());
        },

        //Ejercicio 1:
        onComprobarEdad: function ()
        {
            let eInput = this.getView().byId("inputEJ1").getValue();
            let oBundle = this.getView().getModel("i18n").getResourceBundle();

            if (eInput>=0 && eInput<=150)  // Control de Posibles Errores - Edad introducida es correcta, entre 0 y 150
            {
                if (eInput < 18)
                { 
                    this.getView().byId("label2EJ1").setText(oBundle.getText("Menor"));
                    //console.log(this.getView().byId("NombrePadre").getEnabled());
                    this.getView().byId("NombrePadre").setEnabled(true); //Mostrar sección Datos Padre de la Vista
                    //this.getView().byId("SliderPadre").setEnabled(true);
                    this.getView().byId("ComprobarEdadAdulto").setEnabled(true);

                // TODO: SI ES MENOR DE EDAD, HAZ ENABLED LOS INPUTS DE LA SECCIÓN "DATOS PADRE" DE LA VISTA
                // PISTA: Mirar métodos del elemento/os UI5 
                // CÓDIGO
                }
                else if (eInput >= 18 && eInput < 67) 
                {
                    this.getView().byId("label2EJ1").setText(oBundle.getText("Mayor"));
                }
                else 
                {
                    this.getView().byId("label2EJ1").setText(oBundle.getText("Jubilado"));
                };                                               
            }
            else 
            {
                this.getView().byId("label2EJ1").setText(oBundle.getText("ErrorEdad"));
            }
        },

            // SEGUIMOS EN EL EJERCICIO 1:

            
        onComprobarEdadAdulto: function() 
        {
            let aBundle = this.getView().getModel("i18n").getResourceBundle();

            //CONVERSION TEXTO - Debe meterse en una función y llamarse cada vez.
            let aInput = this.getView().byId("NombrePadre").getValue();
            /* let NFDaInput = aInput.normalize("NFD"); // separa letras y acentos
            let aNFDaInput = NFDaInput.replace(/[\u0300-\u036f]/g, ""); // elimina los acentos
            let MaNFDaInput = aNFDaInput.toLowerCase(); //minúsculas
            let EMaNFDaInput = MaNFDaInput.trim(); //quitar espacios */  
            let sNombrePadreNorm = this.normalizaTexto(aInput); 
                
            //aInput = EMaNFDaInput; //Devuelve el valor transformado a la variable inicial
            
            //FIN CONVERSION TEXTO

            let iInput = this.getView().byId("SliderPadre").getValue(); // Edad padre (Slider)
            // let padres = ["luis","victor","pepe","paco"];  //Array antiguo
            let aPadres = this.getView().getModel("PadresCole").getProperty("/PadresCole"); // Conjunto de nombres padre

            let oPadres = aPadres.filter
            (
                (oPadre) => {
                        if(oPadre.Nombre == sNombrePadreNorm)
                        {
                            return oPadre;
                        } 
                }
            );
                
            if(oPadres.length > 0) // Si existe algún padre en la BBDD
            {
                this.getView().byId("LabelRespuestaPadre").setText(aBundle.getText("PadreBBDD"));
                //this.getView().byId("SliderPadre").setEnabled(true); //activa slider
                this.getView().byId("SliderPadre").setValue(oPadres[0].Edad)//this.getView().byId("SliderPadre").setValue(this.getView().getModel("PadresCole").getProperty(`/PadresCole/${i-1}/Edad`));
                this.getView().byId("EdadPadre2").setText(" "+oPadres[0].Edad);//this.getView().byId("EdadPadre2").setText(" "+ this.getView().getModel("PadresCole").getProperty(`/PadresCole/${i-1}/Edad`)); //this.getView().getModel("PadresCole").getProperty("/PadresCole/"+i-1+"/Edad"));
                //this.getView().byId("NombrePadre").setValue(aInput); //republica el valor del input - borrado en el Else
                this.getView().byId("NombrePadre").setEnabled(false); //desactiva el Input
                this.controlpadre= true;
            }
            
                /* if (this.controlpadre==false) //Variable Global
                {
                    //for (let i=1; i<=padres.length-1;i++){ //Control de datos en la BBDD - Con ARRAY
                    for (let i=1;i<=aPadres.length;i++)
                    {
                        //if (EMaNFDaInput=== padres[i-1]){           //- Con ARRAY        
                        let modelPadre = this.getView().getModel("PadresCole").getProperty(`/PadresCole/${i-1}/Nombre`); //Inicial this.getView().getModel("PadresCole").getProperty("/PadresCole/"+i+"/Nombre");           
                        if (EMaNFDaInput=== modelPadre)
                        {
                            this.getView().byId("LabelRespuestaPadre").setText(aBundle.getText("PadreBBDD"));
                            this.getView().byId("SliderPadre").setEnabled(true); //activa slider
                            this.getView().byId("SliderPadre").setValue(this.getView().getModel("PadresCole").getProperty(`/PadresCole/${i-1}/Edad`));
                            this.getView().byId("EdadPadre2").setText(" "+ this.getView().getModel("PadresCole").getProperty(`/PadresCole/${i-1}/Edad`)); //this.getView().getModel("PadresCole").getProperty("/PadresCole/"+i-1+"/Edad"));
                            this.getView().byId("NombrePadre").setValue(aInput); //republica el valor del input - borrado en el Else
                            this.getView().byId("NombrePadre").setEnabled(false); //desactiva el Input
                            this.controlpadre= true;
                            break; //Sale de la funcion si se cumple lo que hay en el if 
                        }
                        else
                        {
                            this.getView().byId("LabelRespuestaPadre").setText(aBundle.getText("PadreNoBBDD"));
                            this.getView().byId("NombrePadre").setValue("");
                        }
                    }
                }
                else
                { //Si variable global == true

                
                    if (iInput>18) 
                    { //Si cumple con la Edad el padre
                        this.getView().byId("LabelRespuestaPadre").setText(aBundle.getText("Autorizado"));
                        this.getView().byId("NombrePadre").setValue("");
                        this.getView().byId("SliderPadre").setValue(50);
                        this.getView().byId("SliderPadre").setEnabled(false);
                        this.controlpadre= false;
                    }
                    
                    
                    else 
                    { // Edad introducida es menor de edad
                        this.getView().byId("LabelRespuestaPadre").setText(aBundle.getText("ErrorEdad2"));
                    }
                } */
            


            //TODO: Comprobar que el adulto ha introducido bien los datos
            //      Una vez comprobado todo, si es correcto, hacemos que desaparezcan los elementos en "DATOS PADRE".
            //      Si es incorrecto algún campo introducido, borramos lo que haya en el input para que el usuario vuelva a introducir de nuevo.
            //      En las dos posibles opciones, debemos hacer que la Label (id=labelRespuesta) muestre texto descriptivo de lo que pasa. 
        
        },

        // FUNCION NORMALIZAR TEXTO
        normalizaTexto: function (nombrePadre)
        {
            let NFDaInput = nombrePadre.normalize("NFD"); // separa letras y acentos
            let aNFDaInput = NFDaInput.replace(/[\u0300-\u036f]/g, ""); // elimina los acentos
            let MaNFDaInput = aNFDaInput.toLowerCase(); //minúsculas
            let EMaNFDaInput = MaNFDaInput.trim(); //quitar espacios

            return EMaNFDaInput; // Retornamos nombre padre normalizado
        },

        //Ejercicio 2: Comprueba el día de la semana publicado en el input.
        onComprobarDia: function ()
        {
            let diaInput = this.getView().byId("inputEJ2").getValue();
            let dBundle = this.getView().getModel("i18n").getResourceBundle(); //Modelo de Traducciones
            let sDiaNorm = this.normalizaTexto(diaInput); // Llamo a la función para normalizar el texto del Input      

            switch (sDiaNorm) 
            {
                case "lunes":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Inicio"));
                   break;
                case "miercoles":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Mitad"));
                   break;
                case "martes":
                case "jueves":
                case "viernes":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Normal"));
                   break;
                
                case "sabado":
                case "domingo":
                   this.getView().byId("label2EJ2").setText(dBundle.getText("Finde"));
                   break;

                default:
                   this.getView().byId("label2EJ2").setText(dBundle.getText("ErrorDiaSemana"));
                   this.getView().byId("inputEJ2").setValue("");
            }
            
        },

        /**
         * TODO: NECESITO QUE EL USUARIO PUEDA INTRODUCIR, EN MAYUS/MINUS, CON TILDE/SIN TILDE, EL DÍA DE LA SEMANA.
         *       CUALQUIER COSA QUE NO SEA DÍA DE LA SEMANA, MOSTRAMOS MENSAJE DE ERROR.
         * 
         * PISTA: MIRAR LA DOCUMENTACIÓN SOBRE MÉTODOS DE UN OBJETO STRING. 
         *        STRING METHODS: https://www.w3schools.com/js/js_string_methods.asp 
         */


        //EJERCICIO 3:
        onTabla5: function ()
        {
            let resultado =""

            for (let i=1; i<=10; i++)
            {
                resultado += `5 x ${i} = ${5*i}\n`        //COMENTAR CON VÍCTOR DIFERENCIA ENTRE ACENTO Y COMILLA (llamados Batticks) + otras formas de concatenar  
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
        onTablaMultip: function()
        {
            let resultado ="";
            let sMultinput = this.getView().byId("inputMultiplicador").getValue();
            let dBundle = this.getView().getModel("i18n").getResourceBundle();
            let aResultado = [1,2,3,4,5,6,7,8,9,10];
            
            if (sMultinput >=0 && sMultinput <=10)
            {
                for (let i=1; i<=aResultado.length; i++)
                    {
                        resultado += `${sMultinput} x ${aResultado[i-1]} = ${sMultinput*aResultado[i-1]}\n`        //COMENTAR CON VÍCTOR DIFERENCIA ENTRE ACENTO Y COMILLA (llamados Batticks) + otras formas de concatenar  
                    }
                
                this.getView().byId("DesciptivoEJ3").setText(resultado);
                
                // let aResultado = []; // Inicialización de un array (Para el punto extra final).
                //TODO
            }
            else 
            {
                this.getView().byId("DesciptivoEJ3").setText(dBundle.getText("NumeroErroneo")); 
            }
        },

        //onTablaArray {}

        //EJERCICIO 4:
        onSalto3: function ()
        {
            let resultado2 =""

            for (let i=1; i<=5; i++)
            {
                if (i==3) continue;
                resultado2 += `${i}\n`                             
            }
            this.getView().byId("DesciptivoEJ4").setText(resultado2);
        }, 
        
        //EJERCICIO 5:
        onPares:  function ()
        {
            let j =2
            let resultado5 =""

            while (j<=10)
            {
                resultado5 += `${j}\n`
                j+=2;                             
            }
            this.getView().byId("DesciptivoEJ5").setText(resultado5);
        },
        
        //EJERCICIO 6:
        onEstricto: function ()
        {
            let A = 5;
            let B = "5";
            let eBundle = this.getView().getModel("i18n").getResourceBundle();

            if (A === B)
            {
                this.getView().byId("DesciptivoEJ6").setText(eBundle.getText("IguEst"));
            }
            else if (A == B) 
            {
                this.getView().byId("DesciptivoEJ6").setText(eBundle.getText("IguVal"));
            }
            else 
            {
                this.getView().byId("DesciptivoEJ6").setText(eBundle.getText("NoCompEst"));
            }
        },

        //EJERCICIO 7:
        onBreak: function ()
        {
            let resultado7 =""

            for (let i=1; i<=10; i++)
            {
                if (i==7) break;
                resultado7 += `${i}\n`                             
            }
            this.getView().byId("DesciptivoEJ7").setText(resultado7);
        },

        //EJERCICIO 8:
        onComprobarConducir:function ()
        {
            let edadInput = 1;
            let conduInput= "";
            edadInput= this.getView().byId("inputEJ8").getValue();
            conduInput = this.getView().byId("input2EJ8").getValue();
            let cBundle = this.getView().getModel("i18n").getResourceBundle();
            
            if(edadInput>=18 && conduInput=="Si")
            {
                this.getView().byId("label2EJ8").setText(cBundle.getText("PCond"));
            }
            else
            {
                this.getView().byId("label2EJ8").setText(cBundle.getText("NPCond"));
            }
        },

        onNavegacion: function ()
        {
            this.getOwnerComponent().getRouter().navTo("Main2");
        }
    });
});