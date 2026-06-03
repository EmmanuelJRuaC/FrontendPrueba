import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/clienteservice';

@Component({
  selector: 'app-userprofile',
  imports: [],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css',
})
export class Userprofile implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(public clienteService: ClienteService) {}

}
