import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editsalesreturns',
  templateUrl: './editsalesreturns.component.html',
  styleUrls: ['./editsalesreturns.component.scss']
})
export class EditsalesreturnsComponent implements OnInit {

  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      NetUnitPrice:'150',
      Stock: '500	',
      QTY: '500	',
      Discount: '100',
      Tax:'50',
      Subtotal:'250',
    },
    {
      img:'assets/img/product/product6.jpg',
      ProductName:'Macbook Pro',
      NetUnitPrice:'150',
      Stock: '500	',
      QTY: '500	',
      Discount: '100',
      Tax:'50',
      Subtotal:'250',
    }
  ]

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }
  delete(index:any)
  {
    this.tableData.splice(index, 1);
  }
}
