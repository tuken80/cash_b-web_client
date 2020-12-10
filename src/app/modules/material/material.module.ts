import { NgModule } from '@angular/core';

import { CdkMaterialModule } from "./cdk.material.module";
import { MainMaterialModule } from './main.material.module';
import { FormMaterialModule } from './form.material.module';

@NgModule({
  exports: [
    CdkMaterialModule,
    MainMaterialModule,
    FormMaterialModule
  ]
})
export class MaterialModule { }
