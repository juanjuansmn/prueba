import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'AddUser', component: AddUserComponent },
    { path: 'InfoUser/:id', component: UserInfoComponent },
    { path: '',   redirectTo: '/Home', pathMatch: 'full' },
];
