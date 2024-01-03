import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from 'src/menu/menu.component';
import { FooterComponent } from 'src/footer/footer.component';
import { InicioComponent } from 'src/inicio/inicio.component';
import { QuemSomosComponent } from 'src/quem-somos/quem-somos.component';
import { ServicosComponent } from 'src/servicos/servicos.component';
import { ContatoComponent } from 'src/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    QuemSomosComponent,
    ServicosComponent,
    ContatoComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
