import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CrudAngular';
  dados: any = {}

  constructor (private http: HttpClient)
  { 
    console.log(`[${this.title}#constructor]`);
  }
  async ngOnInit() {
    console.log(`[${this.title}#ngOnInit]`);
    this.get("https://localhost:7090/api/Produtos")
   // this.post("https://localhost:7090/api/Produtos") //!Por algum motivo deu erro no cors novamente
  }
  async get(url: any){

    await this.http.get<any>(url).subscribe({
      next: data => {
        console.log(`[${this.title}#get] data:`, data);
        this.dados = data;
      },
      error: error => {
        console.log(`[${this.title}#get] error:`, error);
      }
    });
  }
  async post(url:any) {
    console.log(`[${this.title}#post]`);

    const headers = {
      'Content-Type':'application/json'
    };
    const body = {
      
        //"idProduto": 99,
        "nome": "string",
        "imagem": "string",
        "descricao": "string",
        "estoque": 0,
        "status": true,
        "preco": 0
      
    };

    await this.http.post<any>(url, body, { headers }).subscribe({
      next: data => {
        console.log(`[${this.title}#post] data:`, data);
      },
      error: error => {
        console.log(`[${this.title}#post] error:`, error);
      }
    });
  }
}
