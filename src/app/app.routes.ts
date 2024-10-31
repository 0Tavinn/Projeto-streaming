import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { RegistroComponent } from './pages/registro/registro.component';
import path from 'node:path';


export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    },
    {
        path:"browse",
        component:BrowseComponent
    },
    {
        path:"registro",
        component:RegistroComponent
    },
    {
        path:"**",
        redirectTo:"login"
    },
];