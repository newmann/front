import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentComponent } from './document.component';
import {RecentComponent} from "./component/recent/recent.component";
import {ListComponent} from "./component/list/list.component";
import {AddComponent} from "./component/add/add.component";

const routes: Routes = [
  { path: '', component: DocumentComponent, children: [
    { path: 'recent', component: RecentComponent },
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent },
  ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {
}
