import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  
  clienteSeleccionado = signal<any>(null);
}
