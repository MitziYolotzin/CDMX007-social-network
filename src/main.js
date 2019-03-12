//REGISTRO
const buttonRegister = document.getElementById('register');
const buttonAccess = document.getElementById('access');
const buttonLogin = document.getElementById('login');

 
//buttonRegister.addEventListener('click', () => {
//location.href= "register.html"
//});
//buttonLogin.addEventListener(click , () => {
//location.href = "login.html"
//});


//FUNCION REGISTRAR USUARIO
//FUNCION INGRESA USUARIO
//buttonAccess.addEventListener('click', () => {

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
const buttonLogout = document.getElementById('logout');

const viewUserInfo = () => {
 let content = document.getElementById('user-data');

 buttonLogout.addEventListener('click', () => {
  closeSession();
    content.innerHTML = `<p>Su sesión se ha cerrado</p>`;
  
  });

    }

    

const closeSession = () => {

    firebase.auth().signOut()

    .then(function(){
console.log('Cerrando sesión');

    })

    .catch(function(error){
     console.log(error);   
    } )
}






// function register() {
//     console.log('mevoyaregistrar')
// }

