(function (window,document) {





  var first = function () {
    var element = null,
      marco = null,
      routes = {},
      controler = {},
      ctrlFirst = null,

      library = {
        getID: function (id) {
          element = document.getElementById(id);
          return this;
        },
        get: function(id){
        return document.getElementById(id)
        },
        noSubmit: function () {
          element.addEventListener('submit', function (e) {
            e.preventDefault();
          }, false);
          return this;
        },
        controler: function(name, ctrl){
        controler [name] = {'controler': ctrl};

        },

        getCtrl: function(){
        return ctrlFirst;
        },

        routes: function () {
          marco = element;
          return this;
        },
        route: function (route, page, controler, load) {
          routes[route] = {
            'page': page,
            'controler': controler,
            'load': load,

          };
          return this;
        },

        routeManagment: function () {
          const hash = window.location.hash.substring(1) || '/';
          destination = routes[hash];
          xhr = new XMLHttpRequest();
          if (destination && destination.page) {
              if(destination.controler){
               ctrlFirst = [destination.controler].controler;
              }
            xhr.addEventListener('load', function () {
              marco.innerHTML = this.responseText;
              setTimeout(function(){
                if(typeof(destination.load) === 'function'){
                    destination.load();
                      } 
              },500);
            }, false);
            xhr.open('get', destination.page, true);
            xhr.send(null);

          } else {
            window.location.hash = '#/';
          }
        }
      };
    return library;
  }
  if (typeof window.library === 'undefined') {
    window.library = window._ = first();
    window.addEventListener('load', _.routeManagment, false);
    window.addEventListener('hashchange', library.routeManagment, false)

  } else {

  }
})(window,document)
