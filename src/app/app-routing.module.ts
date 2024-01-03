import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from 'src/contato/contato.component';
import { FooterComponent } from 'src/footer/footer.component';
import { InicioComponent } from 'src/inicio/inicio.component';
import { MenuComponent } from 'src/menu/menu.component';
import { QuemSomosComponent } from 'src/quem-somos/quem-somos.component';
import { ServicosComponent } from 'src/servicos/servicos.component';


const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'}, 

  {path: 'servicos', component:ServicosComponent },
  { path: 'quemSomos', component:QuemSomosComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'menu', component:MenuComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

