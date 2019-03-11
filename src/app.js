import login        from './views/pages/login.js'
import register     from './views/pages/register.js'


const routes = {
'/login'      : login
'/register'   : register

}; 



window.addEventListener('hashchange', router);
