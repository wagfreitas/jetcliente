import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
 providedIn: 'root'
})


export class PagSeguroService  extends GenericService{
  public token = "D7BFCB2A51534BB6B38E305B14C73A23";
  public pagbase = "https://ws.sandbox.pagseguro.uol.com.br";
  public email = "vinassis@gmail.com";
  public urlPagSeguroDirectPayment = "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";
  public urlTransacao = 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/';
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

  public getSessionId(){
      return this.post(`${this.pagbase}/v2/sessions?email=${this.email}&token=${this.token}`)
  }

}


