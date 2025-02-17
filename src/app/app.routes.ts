// app.routes.ts
import { Routes } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AppComponent } from './app.component';
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Página principal
  { path: 'structural-directives', component: StructuralDirectivesComponent }, // Página de directivas estructurales
  {path: 'attributes-directives', component: AttributesDirectivesComponent},
  { path: 'custom-directives', component: CustomDirectivesComponent},
];