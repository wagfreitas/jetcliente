import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
 providedIn: 'root'
})


export class PagSeguroService  extends GenericService{
  //url para buscar estados 
  readonly URL= "http://www.geonames.org/childrenJSON?geonameId=3469034";
  
  constructor(_http: HttpClient, public http: HttpClient) {
    super(_http, '/api/pagseguro');
  }

  public obterIdSession(obj: any) {
    return this.post(obj, 'session');
  }

  public enviarPgto(obj: any) {
   // console.log('obj', obj)
    return this.post(obj, 'pagamento');
  }

  carregaPagSeguroDirectPayment(credencial) {
    return new Promise<void>((resolve) => {
      let script: HTMLScriptElement = document.createElement('script');
      script.addEventListener('load', r => resolve());
      script.src = credencial.urlPagSeguroDirectPayment;
      document.head.appendChild(script);
    });
  }

  public carregaEstados() {
    return this.http.get(`${ this.URL }`) ; 
}

}
