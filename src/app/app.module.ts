import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './tp1-card/tp1-card.component';
import { Tp2TableauComponent } from './tp2-tableau/tp2-tableau.component';
import { Tp2LigneComponent } from './tp2-ligne/tp2-ligne.component';
import { Tp3CompteurComponent } from './tp3-compteur/tp3-compteur.component';
import { Tp4AnimalCardComponent } from './tp4-animal-card/tp4-animal-card.component';
import { Tp5TableauVoitureComponent } from './tp5-tableau-voiture/tp5-tableau-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Tp2TableauComponent,
    Tp2LigneComponent,
    Tp3CompteurComponent,
    Tp4AnimalCardComponent,
    Tp5TableauVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
