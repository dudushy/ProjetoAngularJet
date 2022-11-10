import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos : Produto [] = [
    {idProduto:1 , nome:"Vinisco", preco:500 },
    {idProduto:2 , nome:"Marcello", preco:500 },
    {idProduto:3 , nome:"Pandora", preco:99999999999 },


  ]
  constructor(private httpClient: HttpClient) { }

  addProdutos(produto: Produto){
    this.produtos.push(produto);
  }

  getProdutos(){
    return this.produtos;
  }

  delete(produto: Produto){
    
  }
}
