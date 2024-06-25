import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreditRequestListComponent } from './features/credit-request-list/credit-request-list.component';
import { CreditRequestDetailComponent } from './features/credit-request-detail/credit-request-detail.component';
import { CreditRequestCreateComponent } from './features/credit-request-create/credit-request-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'credit-requests', component: CreditRequestListComponent },
  { path: 'credit-requests/create', component: CreditRequestCreateComponent },
  { path: 'credit-requests/:id', component: CreditRequestDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
