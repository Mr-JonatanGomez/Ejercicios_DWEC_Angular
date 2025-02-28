import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUserComponent } from './components/lista-user/lista-user.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SweetAlert2Module } from '@SweetAlert2/ngx-sweetalert2';

@NgModule({

  declarations: [
    AppComponent,
    ListaUserComponent,
    FormularioComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
