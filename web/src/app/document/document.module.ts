import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';
import {DocumentRoutingModule} from "./document.routing";

import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducer/index.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PathListEffects} from "./effect/document.list.effect";
import {DocumentService} from "./document.service";
import {RecentComponent} from "./component/recent/recent.component";
import { ListComponent } from './component/list/list.component';
import { AddComponent } from './component/add/add.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocumentRoutingModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('document', reducers),
    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([PathListEffects]),
  ],
  declarations: [
    DocumentComponent,
    RecentComponent,
    ListComponent,
    AddComponent
  ],
  providers: [
    DocumentService
  ]
})
export class DocumentModule { }
