import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'structural-directives', component: StructuralDirectivesComponent},
];
