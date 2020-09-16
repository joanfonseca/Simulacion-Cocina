import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { Order } from '../../model/Order';
import { Dishe } from '../../model/Dishe';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  order: Order[];
  dishes: Dishe;

ngOnInit() {
    this.servicioService
      .getPlatos('http://localhost:3000/orders/views')
      .subscribe(data => {
      this.order = data;      
      });
  }

}
