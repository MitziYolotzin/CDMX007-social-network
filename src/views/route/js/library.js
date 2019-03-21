
(function (window, document) {

"use strict";

var start= function(){

   let element= null,
       frame= null,
       routes= {},
       controllers= {},
       controllersLibrary= {

            getID: function (id){
                elemento= document.getElementById(id);
                return this;
            },
       
            noSubmit: function(){
                elemento.addEventListener("submit", function(e){     
                  e.preventDefault();
           }, false);

           return this;
           },

            enroute: function(){
                frame= element;

           return this; 
           },

            route: function(route,frame, controller, load){

                route[route]= {
               "frame":frame,
               "controller": controller,
               "load": load,
            }
        
            },

            managerRoutes: function(){
                let hash= window.location.hash.substring(1) || "/";
                 destination = routes [hash];
                //  routes={ "/ create-contact":
                //  {"frame":"views/Login.html"}
                // }

                // sirve para hacer llamadas de datos a un servidor 
                // no es necesario  xhr=
                
              xhr= new XMLHttpRequest();

              if (destination && destination.frame){
              xhr.addEventListener("load", function(){
                  frame.innerHTML=this.responseText;
              } ,false );
              xhr.open ("get", destination.frame, true);
              xhr.send (null);
              
              }else{
              window.location.hash= "#/";
              }
            }

            };
            return library;

            }


if (typeof window.library === "undefined"){
    window.library = window._= start();
    window.addEventListener("load",_.managerRoutes,false);
    window.addEventListener("hashchange", _.managerRoutes, false);
   

} else{

    console.log ("Se está llamando la librería nuevamente");
}

})(window, document); 


routes= {

    "/": {
        "frame": "views/Login.html",
        "controller": " ",
        "load": null
    },
    "list-contact": {
        "frame": "views/Login.html",
        "controller": "contacts",
        "load": function (){listedContact()}
    },

}

_.getId ("formulary").noSubmit();



// (function (window, document) {
//   var first = function () {
//     var element = null,
//       marco = null,
//       routes = {},
//       controler = {},
//       ctrlFirst = null,
//       library = {
//         getID: function (id) {
//           element = document.getElementById(id);
//           return this;
//         },
//         get: function (id) {
//           return document.getElementById(id)
//         },
//         noSubmit: function () {
//           element.addEventListener('submit', function (e) {
//             e.preventDefault();
//           }, false);
//           return this;
//         },
//         controler: function (name, ctrl) {
//           controler[name] = {
//             'controler': ctrl
//           };
//           return this;
//         },

//         getCtrl: function () {
//           return ctrlFirst;
//         },

//         routes: function () {
//           marco = element;
//           return this;
//         },
//         route: function (route, page, controler, load) {
//           routes[route] = {
//             'page': page,
//             'controler': controler,
//             'load': load,

//           };
//           return this;
//         },      

//         routeManagment: function () {
//           const hash = window.location.hash.substring(1) || '/';
//           destination = routes[hash];
//           xhr = new XMLHttpRequest();
//           if (destination && destination.page) {
//             if (destination.controler) {
//               ctrlFirst = [destination.controler].controler;
//             }
//             xhr.addEventListener('load', function () {
//               marco.innerHTML = this.responseText;
//               setTimeout(function () {
//                 if (typeof (destination.load) === 'function') {
//                   destination.load();
//                 }
//               }, 500);
//             }, false);
//             xhr.open('get', destination.page, true);
//             xhr.send(null);

//           } else {
//             window.location.hash = '#/';
//           }
//         }
//       };
//     return library;
//   }
//   if (typeof window.library === 'undefined') {
//     window.library = window._ = first();
//     window.addEventListener('load', _.routeManagment, false);
//     window.addEventListener('hashchange', library.routeManagment, false)

//   } else {

//   }
// })(window, document)
