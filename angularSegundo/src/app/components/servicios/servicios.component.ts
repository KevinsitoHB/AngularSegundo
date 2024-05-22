import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {
  frameworkFavorito: string = '';
  mostrarFrameworkFavorito() {
    console.log('frameworkFavorito: ', this.frameworkFavorito);
  }

  formularioCredenciales = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(''),
  });
  manejarEnvio() {
    console.log('formularioCredenciales: ', this.formularioCredenciales.value);
  }
}
