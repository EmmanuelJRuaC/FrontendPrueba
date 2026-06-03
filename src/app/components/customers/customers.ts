import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models/Cliente';
import { ApiCliente } from '../../services/api-cliente';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-customers',
  imports: [FormsModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  cliente: Cliente = {
    id: null,
    tipo_documento: '',
    documento: null,
    nombre_1: '',
    nombre_2: '',
    apellido_1: '',
    apellido_2: '',
    prefijo: '',
    telefono: '',
  };

  clienteList = signal<Cliente[]>([]);

  constructor(private _apiCliente: ApiCliente) {}

  ngOnInit(): void {
    this._apiCliente.getClientes().subscribe((res) => {
      this.clienteList.set(res.data);

      setTimeout(() => {
        initFlowbite();
      }, 0);
    });
  }

  crearNuevoCliente(form: any) {
    if (form.invalid) {
      return;
    }
    this.cliente.documento = Number(this.cliente.documento);

    this._apiCliente.postNewCliente(this.cliente).subscribe((res) => {
      console.log(res.message);
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  editarCliente() {
    this._apiCliente.patchCliente(this.cliente.id!, this.cliente).subscribe((res) => {
      console.log(res.message);
      this.clienteList.update((clientes) =>
        clientes.map((c) => (c.id === this.cliente.id ? { ...this.cliente } : c)),
      );
    });
  }

  eliminarCliente(id: number) {
    this._apiCliente.deleteCliente(id).subscribe((res) => {
      console.log(res.message);
      this.clienteList.update((clientes) => clientes.filter((c) => c.id !== id));
    });
  }

  datosCliente(cliente: Cliente) {
    this.cliente = {
      id: cliente.id,
      tipo_documento: cliente.tipo_documento,
      documento: cliente.documento,
      nombre_1: cliente.nombre_1,
      nombre_2: cliente.nombre_2,
      apellido_1: cliente.apellido_1,
      apellido_2: cliente.apellido_2,
      prefijo: cliente.prefijo,
      telefono: cliente.telefono,
    };
  }

  // Funciones
  soloNumeros(event: Event): void {
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '');
  }

  limpiarFormulario() {
    this.cliente = {
      id: null,
      tipo_documento: '',
      documento: null,
      nombre_1: '',
      nombre_2: '',
      apellido_1: '',
      apellido_2: '',
      prefijo: '',
      telefono: '',
    };
  }
}
