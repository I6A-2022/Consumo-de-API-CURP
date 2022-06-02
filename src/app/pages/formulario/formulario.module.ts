import { NgModule } from '@angular/core';

import { FormularioRoutingModule } from './formulario-routing.module';

import { FormularioComponent } from './formulario.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";

@NgModule({
  imports: [FormularioRoutingModule, NzSwitchModule, FormsModule, NzDropDownModule, NzIconModule, NzGridModule, NzFormModule, NzInputModule, NzSelectModule, ReactiveFormsModule],
  declarations: [FormularioComponent],
  exports: [FormularioComponent]
})
export class FormularioModule { }


