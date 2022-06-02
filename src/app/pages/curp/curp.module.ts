import { NgModule } from '@angular/core';

import { CurpRoutingModule } from './curp-routing.module';

import { CurpComponent } from './curp.component';
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
    imports: [CurpRoutingModule, NzSwitchModule, FormsModule, NzDropDownModule, NzIconModule, NzGridModule, NzFormModule, NzInputModule, NzSelectModule, ReactiveFormsModule, NzTableModule],
  declarations: [CurpComponent],
  exports: [CurpComponent]
})
export class CurpModule { }


