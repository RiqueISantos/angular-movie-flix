import { Routes } from '@angular/router';
import { Login } from './pages/not-logged/home/login';
import { Home as HomeLogged } from  './pages/logged/home/home';
import { Registration } from './pages/not-logged/registration/registration';

export const routes: Routes = [
    {
        path: '',
        component:  HomeLogged
    },
    {
        path: 'login',
        component:  Login
    },
    {
        path: 'cadastre-se',
        component:  Registration
    }
];
