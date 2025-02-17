import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [HighlightDirective],
  standalone: true,
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css',
})
export class CustomDirectivesComponent {

  customColor = 'lightblue';
}
