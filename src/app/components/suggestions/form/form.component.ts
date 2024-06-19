import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuggestionService } from '../../../services/suggestions/suggestion.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  suggestionForm: FormGroup;
  showAlert: boolean = false;

  constructor(private fb: FormBuilder, private suggestionService: SuggestionService) {
    this.suggestionForm = this.fb.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.suggestionForm.valid) {
      this.suggestionService.createSuggestion(this.suggestionForm.value).subscribe({
        next: response => {
          console.log('Sugerencia enviada', response);
          this.showAlert = true;
          this.suggestionForm.reset();
          setTimeout(() => this.showAlert = false, 3000); // Ocultar la alerta después de 3 segundos
        },
        error: (error) => {
          console.error('Error al enviar la sugerencia:', error);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
