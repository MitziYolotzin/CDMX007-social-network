(function(window,document){
    library.getID('views').routes()
    .route('/register', './views/register.html', null , null)
    .route('/login', './views/Login.html', null , null)
    .route('/', './views/firstpage.html', null , null)
})(window, document); 
