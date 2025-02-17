// structural-directives.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
  imports: [CommonModule, RouterModule],
})
export class StructuralDirectivesComponent {
  // Propiedades para NgIf
  showMessage = true;

  // Propiedades para NgFor
  items = ['Manzana', 'Banana', 'Naranja'];

  // Propiedades para NgSwitch
  selectedOption = '';

  // Métodos para NgIf
  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  // Métodos para NgSwitch
  selectOption(option: string) {
    this.selectedOption = option;
  }
}