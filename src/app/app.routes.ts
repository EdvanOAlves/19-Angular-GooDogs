import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Search } from './pages/search/search';

export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'search', component: Search}
];
