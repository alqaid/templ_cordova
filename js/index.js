/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       $("#boton_capturar").click(function(){
           alert("hola");
       })
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
*/
document.addEventListener("deviceready",DispositivoListo,false);


/****
 * Parámetros del plugin de la cámara https://github.com/apache/cordova-plugin-camera
 */
function DispositivoListo(){
     $("#boton_capturar").click(function(){
           capturarFoto();
           console.debug("capturar imagen");
       })
}


/***
 * funcion si success, si ocurrio evento CORRECTO
 */
function onSuccess(imagen){
    console.debug("imagen" + imagen);
}


/***
 * funcion si success, si ocurrio evento fallo
 */

function onFail(mensaje){
    console.debug("errror" + mensaje);
}

/***
 * captuara FOTO
 */

function    capturarFoto(){
     navigator.camera.getPicture(
                onSuccess,
                onFail,
                {
                    quality:100,
                    destinationType: Camera.DestinationType.DATA_URL,
                    allowedEdit: true
                    
                }
            );
}