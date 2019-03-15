<<<<<<< HEAD
/* window de contraoladores 
registro formulario toma valores de cada ConstantSourceNode
: lleva base de datos 
logeado -MutationRecor
funcion base



ROUTES
declara controladores ... iniciar sesion arrow .. todo html dentro de eso 
libreria ID

*/


window.social = {



  firebase: firebase.initializeApp(config),
=======
>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f


//REGISTRO
const buttonRegister = document.getElementById('register');
const buttonAccess = document.getElementById('access');
const buttonLogin = document.getElementById('login');

<<<<<<< HEAD

  register: () => {
=======
 
//buttonRegister.addEventListener('click', () => {
//location.href= "register.html"
//});
//buttonLogin.addEventListener(click , () => {
//location.href = "login.html"
//});

>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f

    ///REGISTRO
    const buttonRegister = document.getElementById('register');


    //REGISTRAR NUEVO USUARIO
    buttonRegister.addEventListener('click', () => {

<<<<<<< HEAD
      let email = document.getElementById('email').value;
      let pass = document.getElementById('pass').value;

      firebase.auth().createUserWithEmailAndPassword(email, pass)
        //.then((res)=>{ })
        //console.log(res)
        .then(function () {
          verifyEmail()
        })
=======
firebase.auth().createUserWithEmailAndPassword(email, pass).then((res)=>{
  console.log(res)
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f

        .catch(function (error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // ...

          console.log(errorCode);
          console.log(errorMessage);

        });

<<<<<<< HEAD
    });

  },





  login: () => {

    //INICIAR SESION
    const buttonAccess = document.getElementById('access');

    //INICIAR SESION
    buttonAccess.addEventListener('click', () => {

      let emailAc = document.getElementById('email-ac').value;
      let passAc = document.getElementById('pass-ac').value;



=======
//INICIAR SESION
buttonAccess.addEventListener('click', () => {

//FUNCION REGISTRAR USUARIO
//FUNCION INGRESA USUARIO
//buttonAccess.addEventListener('click', () => {
>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f

      firebase.auth().signInWithEmailAndPassword(emailAc, passAc)
        .then((res) => {
          location.replace('#/firstpage')

<<<<<<< HEAD
          // console.log(res);
        })
        .catch(function (error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // ...

          console.log(errorCode);
          console.log(errorMessage);

        });

    });



  },

  verify: () => {

    //VERIFICAR USUARIO
    const verify = () => {

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('si existe usuario activo')
          viewUserClose(user);
          // User is signed in.
          let displayName = user.displayName;
          let email = user.email;
          console.log(user.emailVerified);
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('no existe usuario activo')
        }
      });
    }

    verify();


  },


  logOut: () => {

    const viewUserClose = (user) => {
      let content = document.getElementById('user-data');
      if (user.mailVerified) {
        content.innerHTML = `
<p>Bienvenido</p>
<button id="logout" onclick="closeSession()">Cerrar Sesión</button>
`;
      }
    }


  },
=======
    //let emailAc = document.getElementById('email-ac').value;
    //let passAc = document.getElementById('pass-ac').value;
    
    //firebase.auth().signInWithEmailAndPassword(emailAc, passAc).then((res)=>{
      //console.log(res);
    //})
    //.catch(function(error) {
    
      //var errorCode = error.code;
      //var errorMessage = error.message;
    
    
    //console.log(errorCode);
    //console.log(errorMessage);
    
    //});
    
>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f

//VERIFICAR USUARIO
const verify = () => {

<<<<<<< HEAD
  closeSesion: () => {
=======
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('si existe usuario')
            viewUserInfo(); 
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('no existe usuario')
        }
      });
    }
      
    //verify();


//SALIR DE LA SESION
const buttonLogout = document.getElementById('logout');

const viewUserInfo = () => {
 let content = document.getElementById('user-data');

 buttonLogout.addEventListener('click', () => {
  closeSession();
    content.innerHTML = `<p>Su sesión se ha cerrado</p>`;
  
  });
>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f

    }

    //FUNCION CERRAR SESION
    const closeSession = () => {

      firebase.auth().signOut()

        .then(function () {
          console.log('Cerrando sesión');

        })

<<<<<<< HEAD
        .catch(function (error) {
          console.log(error);
        })
    }


  },


  verifyEmail: () => {

    //Verificar Email
    const verifyEmail = () => {

      let user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function () {
        // Email sent.
        console.log('Correo de verificación enviado');
      }).catch(function (error) {
        // An error happened.
        console.log(error);
      });


    }


  },


}
=======
    .catch(function(error){
     console.log(error);   
    } )
}






// function register() {
//     console.log('mevoyaregistrar')
// }

>>>>>>> cc13b74385ee9bf80aeab9585e7483c01ade8d3f
