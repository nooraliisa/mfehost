import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuledneComponent } from './moduledne.component';

const routes: Routes = [{ path: '', component: ModuledneComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuledneRoutingModule { }
