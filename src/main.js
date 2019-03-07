//REGISTRO
const register = document.getElementById('register');

//INGRESO
const acces = document.getElementById('access');

 


//FUNCION REGISTRAR USUARIO
register.addEventListener('click', () => {

let email = document.getElementById('email').value;
let pass = document.getElementById('pass').value;

firebase.auth().createUserWithEmailAndPassword(email, pass)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

// console.log(errorCode);
// console.log(errorMessage);

  });

});

//FUNCION INGRESA USUARIO
access.addEventListener('click', () => {

    let emailAc = document.getElementById('email-ac').value;
    let passAc = document.getElementById('pass-ac').value;
    
    firebase.auth().createUserWithEmailAndPassword(emailAc, passAc)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    
    console.log(errorCode);
    console.log(errorMessage);
    
      });
    
    });

//VERIFICAR USUARIO
    const verify = () => {

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


//SALIR
const logout = document.getElementById('logout');

    const viewUserInfo = () => {
 let content = document.getElementById('user-data');
 content.innerHTML = "Mostrar al usuario activo";

    }

const closeSession = () => {

    firebase.auth().signOut()
    .then(function(){

    })
    .catch(function(erro){
        
    } )
}




// function register() {
//     console.log('mevoyaregistrar')
// }

