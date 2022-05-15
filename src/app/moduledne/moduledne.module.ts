import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuledneRoutingModule } from './moduledne-routing.module';
import { ModuledneComponent } from './moduledne.component';


@NgModule({
    declarations: [ModuledneComponent],
    imports: [
        CommonModule,
        ModuledneRoutingModule
    ]
})
export class ModuledneModule { }
