import { NgModule } from '@angular/core';

import { ColsultaRoutingModule } from './colsulta-routing.module';

import { ConsultaComponent } from './consulta.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTableModule} from "ng-zorro-antd/table";

@NgModule({
    imports: [ColsultaRoutingModule, NzSwitchModule, FormsModule, NzDropDownModule, NzIconModule, NzGridModule, NzFormModule, NzInputModule, NzSelectModule, ReactiveFormsModule, NzTableModule],
  declarations: [ConsultaComponent],
  exports: [ConsultaComponent]
})
export class ConsultaModule { }


