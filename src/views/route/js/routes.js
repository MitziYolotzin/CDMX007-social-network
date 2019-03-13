(function(window,document){
    library.getID('views').routes()
    .route('/register', './views/register.html', 'registerp' , null)
    .route('/login', './views/Login.html', 'loginp' , null)
    .route('/', './views/firstpage.html', null , null)
})(window, document); 
