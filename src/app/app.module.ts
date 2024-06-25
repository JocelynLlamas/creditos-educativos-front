import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreditRequestListComponent } from './features/credit-request-list/credit-request-list.component';
import { CreditRequestDetailComponent } from './features/credit-request-detail/credit-request-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreditRequestListComponent,
    CreditRequestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añadir FormsModule aquí
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
