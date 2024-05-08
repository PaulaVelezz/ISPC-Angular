import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})

export class AppComponent {
  title = 'Ispc-Login';
  form!: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(event: Event) {
    {
      event.preventDefault();

      if (this.form.valid) {
       this.loading = true;

       setTimeout(() => {
         this.loading = false;
         alert('Formulario enviado');
       }, 2000);
      } else {
        alert('Fallo en el envió del formulario');
        this.form.markAllAsTouched();
      }
      }
    }
    
  get Password() {
    return this.form.get('password');
  }

  get Email() {
    return this.form.get('email');
  }
}