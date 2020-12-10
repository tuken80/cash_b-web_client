import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from "./components/login/login.component";
import { LoginFormComponent } from "./forms/login/login-form.component";

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    exports: [
        LoginFormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SessionModule { }
