import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos : Produto [] = [{}]
  constructor(private httpClient: HttpClient) { }






  getProdutos(){
    return 
  }
}
