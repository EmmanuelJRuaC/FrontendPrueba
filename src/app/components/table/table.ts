import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCliente } from '../../services/api-cliente';
import { Cliente } from '../../models/Cliente';
import { signal } from '@angular/core';
import { ClienteService } from '../../services/cliente/clienteservice';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  clienteList = signal<Cliente[]>([]);

  constructor(private _apiCliente: ApiCliente, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this._apiCliente.getClientes().subscribe((res) => {
      this.clienteList.set(res.data);
    });
  }

  seleccionarCliente(cliente: any) {
    this.clienteService.clienteSeleccionado.set(cliente);
  }
}
