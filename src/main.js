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


//REGISTRO
const buttonRegister = document.getElementById('register');
const buttonAccess = document.getElementById('access');
const buttonLogin = document.getElementById('login');


  register: () => {

    ///REGISTRO
    const buttonRegister = document.getElementById('register');


    //REGISTRAR NUEVO USUARIO
    buttonRegister.addEventListener('click', () => {

      let email = document.getElementById('email').value;
      let pass = document.getElementById('pass').value;

      firebase.auth().createUserWithEmailAndPassword(email, pass)
        //.then((res)=>{ })
        //console.log(res)
        .then(function () {
          verifyEmail()
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





  login: () => {

    //INICIAR SESION
    const buttonAccess = document.getElementById('access');

    //INICIAR SESION
    buttonAccess.addEventListener('click', () => {

      let emailAc = document.getElementById('email-ac').value;
      let passAc = document.getElementById('pass-ac').value;




      firebase.auth().signInWithEmailAndPassword(emailAc, passAc)
        .then((res) => {
          location.replace('#/firstpage')

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



  closeSesion: () => {

    

    //FUNCION CERRAR SESION
    const closeSession = () => {

      firebase.auth().signOut()

        .then(function () {
          console.log('Cerrando sesión');

        })

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
