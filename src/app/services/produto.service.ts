import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  title = 'ProdutoService';

  produtos: Produto[] = [
    { idProduto: 1, nome: "Vinisco", preco: 500 },
    { idProduto: 2, nome: "Marcello", preco: 500 },
    { idProduto: 3, nome: "Pandora", preco: 99999999999 }
  ]

  constructor(
    private httpClient: HttpClient
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  addProdutos(produto: Produto) {
    console.log(`[${this.title}#addProdutos] produto:`, produto);
    this.produtos.push(produto);
  }

  getProdutos() {
    console.log(`[${this.title}#getProdutos]`);
    return this.produtos;
  }

  delete(produto: Produto) {
    console.log(`[${this.title}#delete] produto:`, produto);
  }
}
