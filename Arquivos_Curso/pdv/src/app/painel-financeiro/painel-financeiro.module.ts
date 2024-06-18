import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainelFinanceiroPageRoutingModule } from './painel-financeiro-routing.module';

import { PainelFinanceiroPage } from './painel-financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainelFinanceiroPageRoutingModule
  ],
  declarations: [PainelFinanceiroPage]
})
export class PainelFinanceiroPageModule {}
