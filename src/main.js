//REGISTRO
const buttonRegister = document.getElementById('register');

//INGRESO
const buttonAccess = document.getElementById('access');

//

var user = firebase.auth().currentUser;


//REGISTRAR NUEVO USUARIO
buttonRegister.addEventListener('click', () => {

let email = document.getElementById('email').value;
let pass = document.getElementById('pass').value;

firebase.auth().createUserWithEmailAndPassword(email, pass)
// .then((response)=>{
// verifyEmail();
// })
.catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);

  });

});





//INICIAR SESION
buttonAccess.addEventListener('click', () => {

    let emailAc = document.getElementById('email-ac').value;
    let passAc = document.getElementById('pass-ac').value;
    
    firebase.auth().signInWithEmailAndPassword(emailAc, passAc).then((res)=>{
      console.log(res);
    })
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;

    
    console.log(errorCode);
    console.log(errorMessage);
    
      });
    
    });

//VERIFICAR USUARIO

// el observador es una función que todo el tiempo esta escuchando si hay cambios o no dentro del sitio
// si hay un usuario autenticado puedes hacer algo /sino te regresa a otra pág, al log in or register.

const verify = () => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         // verifyEmail();

         viewUser(user);

          accessToWall();
            console.log('si existe usuario activo')
            
          // User is signed in.

          // User is signed in. const buttonLogout = document.getElementById('logout');


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

    
    const accessToWall = () =>{
      let content= document.getElementById('post-for-active-users');
      content.innerHTML = window.wall.realTimeData();
     
     }

//SALIR DE LA SESION
const buttonLogout = document.getElementById('logout');


//const buttonLogout = document.getElementById('logout');

//Checar inicio LA SESION

const viewUser = (user) => {
     let content = document.getElementById('user-data');
     var providerId = user.providerData[0].providerId;
     //verifyEmail();
 if (user.mailVerified || providerId == "facebook.com" || providerId == "github.com"){
     
content.innerHTML = `<p>Bienvenid@</p>
<img class="avatar" src="${user.photoURL}">
`;

}
}
//  buttonLogout.addEventListener('click', () => {
//   closeSession();
//     //content.innerHTML = `<p>Su sesión se ha cerrado</p>`;
//     content.innerHTML = `
//     <p>Bienvenido</p>
//     <button id="logout">Cerrar Sesión</button>`;
  
//   });
 

//FUNCION CERRAR SESION
const closeSession = () => {

    firebase.auth().signOut()

    .then(function(){
console.log('Cerrando sesión');

    })

    .catch(function(error){
     console.log(error);   
    })
}

//Verificar Email
const verifyEmail = () => {


user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('Correo de verificación enviado');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});

 
}


///Acceso Google

const InGoogle = () => {
    if (!firebase.auth().currentUser){

        var provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.addScope('https://www.googleapis.com/auth/plus.login');

        //firebase.auth().signInWithRedirect(provider);
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ....
            if(errorCode === 'auth/account-exists-with-different-credential'){
            alert ('Es el mismo usuario');

            }

          });

        } else {
            firebase.auth().signOut();
        }
      
    }

  document.getElementById('in-google').addEventListener('click', InGoogle, false);







