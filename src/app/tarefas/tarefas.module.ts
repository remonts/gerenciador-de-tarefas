import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';

@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
