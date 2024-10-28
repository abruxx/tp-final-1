import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './component/login-register/login-register.component';// Ajusta el path
import { OlvidasteContraseniaComponent } from './component/olvidaste-contrasenia/olvidaste-contrasenia.component';// Ajusta el path

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    OlvidasteContraseniaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
