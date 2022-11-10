/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'TestComponent';

  dataArray: any[] = [];

  constructor() {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.loadData();
    console.log(`[${this.title}#ngOnInit] dataArray:`, this.dataArray);
  }

  loadData(): void {
    console.log(`[${this.title}#loadData]`);

    this.dataArray = [
      {
        idProduto: 0,
        nome: 'Tenis A',
        preco: 14.99,
        estoque: 2,
        status: true,
        descricao: 'testando a descrição de um belo produto'
      },
      {
        idProduto: 1,
        nome: 'Tenis B',
        preco: 1.99,
        estoque: 100,
        status: true,
        descricao: 'imagina uma descrição bem grande aqui'
      },
      {
        idProduto: 2,
        nome: 'Tenis C',
        preco: 4199.90,
        estoque: 21,
        status: true,
        descricao: 'o tenis C é o melhor de todos'
      },
    ];
  }
}
