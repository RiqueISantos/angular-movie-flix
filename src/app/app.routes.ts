import { Routes } from '@angular/router';
import { SignIn } from './components/not-logged/sign-in/sign-in';
import { Home as HomeLogged } from  './pages/logged/home/home';
import { Registration } from './pages/not-logged/registration/registration';

export const routes: Routes = [
    {
        path: '',
        component:  HomeLogged
    },
    {
        path: 'login',
        component:  SignIn
    },
    {
        path: 'cadastre-se',
        component:  Registration
    }
];
