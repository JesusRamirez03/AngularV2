// app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule, RouterModule],
})
export class AppComponent {
  // Propiedades para NgClass
  isHighlighted = false;
  isBold = false;

  // Propiedades para NgStyle
  fontSize = 16;
  textColor = 'black';

  // Propiedades para NgModel
  name = '';

  // Propiedades para NgValue
  options = ['Opción 1', 'Opción 2', 'Opción 3'];
  selectedOption = this.options[0];

  // Propiedades para NgDisabled
  isDisabled = true;

  // Propiedades para NgReadonly
  isReadonly = true;

  // Propiedades para NgChecked
  isChecked = true;

  // Propiedades para NgSelected
  isSelected = true;

  // Propiedades para NgSrc
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  // Propiedades para NgHref
  linkUrl = 'https://angular.io';

  // Propiedades para NgPattern
  patternText = '';
  pattern = '^[0-9]*$';
  get isPatternValid(): boolean {
    return new RegExp(this.pattern).test(this.patternText);
  }

  // Propiedades para NgMax y NgMin
  numberValue = 5;
  minValue = 0;
  maxValue = 10;

  // Métodos para NgClass
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  // Métodos para NgStyle
  increaseFontSize() {
    this.fontSize += 2;
  }

  changeColor() {
    this.textColor = this.textColor === 'black' ? 'red' : 'black';
  }

  // Métodos para NgDisabled
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  // Métodos para NgReadonly
  toggleReadonly() {
    this.isReadonly = !this.isReadonly;
  }

  // Métodos para NgSelected
  toggleSelected() {
    this.isSelected = !this.isSelected;
  }

  // Métodos para NgSrc
  changeImage() {
    this.imageUrl =
      this.imageUrl === 'https://angular.io/assets/images/logos/angular/angular.png'
        ? 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png'
        : 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  // Métodos para NgHref
  changeLink() {
    this.linkUrl =
      this.linkUrl === 'https://angular.io'
        ? 'https://angular.io/guide'
        : 'https://angular.io';
  }

  // Métodos para NgForm
  onSubmit(form: any) {
    if (form.valid) {
      alert('Formulario enviado correctamente');
    }
  }
}