import { Routes } from '@angular/router';
import { Table } from './components/table/table';
import { Customers } from './components/customers/customers';

export const routes: Routes = [
    { path: '', component: Table},
    { path: 'clientes', component: Customers},
    { path: '**',  redirectTo: '', pathMatch: 'full'}
];
