import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game-arena/game.component';


@NgModule({
  declarations: [
    GameComponent,

  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
