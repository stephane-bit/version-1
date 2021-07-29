import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: "inscription", component:InscriptionComponent},
  { path: "connexion", component:ConnecterComponent},
  { path: "contacter", component:ContactComponent},
  { path: "", component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
