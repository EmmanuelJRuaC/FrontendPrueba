import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class ApiCliente {
  private baseURL = 'https://jewelryreceipts-production.up.railway.app/cliente';

  constructor(private _httpClient: HttpClient) {}

  public getClientes(): Observable<ApiResponse<Cliente[]>> {
    return this._httpClient.get<ApiResponse<Cliente[]>>(`${this.baseURL}/all-clientes/`);
  }

  public postNewCliente(cliente: Cliente) {
    return this._httpClient.post<ApiResponse<String>>(`${this.baseURL}/new-cliente/`, cliente);
  }

  public patchCliente(id: number, cliente: Cliente) {
    return this._httpClient.patch<ApiResponse<String>>(`${this.baseURL}/update-cliente/${id}`, cliente);
  }

  public deleteCliente(id: number) {
    return this._httpClient.delete<ApiResponse<string>>(`${this.baseURL}/delete-cliente/${id}`);
  }
}
