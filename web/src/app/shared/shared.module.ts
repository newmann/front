import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from './material.module';
import { FileUploadModule } from "ng2-file-upload";
import { TreeModule } from "ng2-tree";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    FileUploadModule,
    TreeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    FileUploadModule,
    TreeModule
  ]
})
export class SharedModule {
}
