import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagSeguroService } from '../services/pag-seguro.service';


declare var Stripe: any;

declare let PagSeguroDirectPayment;

export interface Item {
  id: string;
  email: string;
  token: string;
  isSandbox: boolean;
  sessionId: string;
  urlTransacao: string;
  urlPagSeguroDirectPayment: string;
  numCard: string;
  bandCard: string;

}

export class Dados {
  public id: number;
  public nome: string;
  public telefone: string;
  public email: string;
  public cpf: string;
  public nascimento: string;
  public logradouro: string;
  public numero: string;
  public bairro: string;
  public cep: string;
  public cidade: string;
  public estado: string;
  public numCard: number;
  public mesValidadeCard: number;
  public anoValidadeCard: number;
  public codSegCard: number;
  public amount: number;
  public hashComprador: string;        // preenchido dinamicamente
  public bandCard: string;             // preenchido dinamicamente
  public hashCard: string;
  public referencia: string;
  public ddd: number;
  public sobrenome: string;
  public noInterestInstallmentQuantity: number;      // preenchido dinamicamente
  public parcelas: Array<Object> = []; // preenchido dinamicamente
  constructor(obj?) {
    Object.assign(this, obj, {}, {});
  }
}


@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})

export class PaymentsPage implements OnInit {

  number: any;
  exp: any;
  cvv: any;
  uid: any;
  user: any = {};
  sessionId: string;
  ionicForm: FormGroup;
  defaultDate = '15/07/1961';
  isSubmitted = false;
  parcelas = [];
  estados = [];
  public credencial: Item;
  public dados = new Dados();
  thumbnail: string;

  credenciais: Item = {
    id: 'credenciais',
    email: 'vinassis@gmail.com',
    token: '90FFE24A8F314FD98F0F29712BE30EEB',
    isSandbox: true,
    sessionId: '',
    urlTransacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/',
    urlPagSeguroDirectPayment: 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js',
    numCard: '',
    bandCard: ''
  };

  constructor(
    private pagseg: PagSeguroService, 
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private common: CommonService
  ) {

    this.ionicForm = this.formBuilder.group({
      numCard: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mesValCard: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$')]],
      anoValCard: ['', [Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]+$')]],
      codSegCard: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]+$')]],
      parcelas: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.authService.getUserData().then(user => {
      this.authService.getUser(user.uid).snapshotChanges().pipe(take(1)).subscribe((snapshot: any) => {
        this.user = { uid: snapshot.key, ...snapshot.payload.val() };
        console.log(this.user);
      });
    })
     this.pagseg.obterIdSession(this.credenciais).subscribe(res => {
       this.sessionId = res.session.id;
       this.pagseg.carregaPagSeguroDirectPayment(this.credenciais).then(() => {
             PagSeguroDirectPayment.setSessionId(this.sessionId);
             this.credenciais.sessionId = this.sessionId;
           });

     });

  }

  async buscaParcelas(dados: any) {
    
    this.dados.numCard = this.ionicForm.value.numCard;
    const val  = this.ionicForm.value.valor;
    console.log('dados', dados);
    this.dados.amount = val.replace(',', '.');
    //  this.dados.bandCard = dados.numCar
    await PagSeguroDirectPayment.getInstallments({
      amount: val.replace(',', '.'),    // valor total da compra (deve ser informado)
      maxInstallmentNoInterest: 16, // n??mero de parcelas sem juros
      brand: this.dados.bandCard, // bandeira do cart??o (capturado na fun????o buscaBandeira)
           success: (response) => {
        dados.parcelas = response.installments[dados.bandCard];
        this.parcelas = dados.parcelas;
        this.parcelas["installmentAmount"] = parseFloat(this.parcelas["installmentAmount"]).toFixed(2);
       // console.log('parcelas: ' + JSON.stringify(response.installments[dados.bandCard]));
      },
      error: (response: any) => { console.log('buscaParcelas', response); }
    });
  }

  async getCredential(): Promise<any> {
    return this.credenciais
  }

  buscaBandeira(value) {
   
    const numCard = this.ionicForm.value.numCard;
    PagSeguroDirectPayment.setSessionId(this.sessionId);
    PagSeguroDirectPayment.getBrand({
      cardBin: numCard,
      success: (response) => {
        this.credenciais.bandCard = response.brand.name;
        this.dados.bandCard = response.brand.name;
        if (this.credenciais.bandCard === 'mastercard') {
          this.thumbnail = '../../assets/icon/Mastercard.png';
        } else if (this.credenciais.bandCard === 'visa') {
          this.thumbnail = '../../assets/icon/visa.png';
        } else if (this.credenciais.bandCard === 'elo'){
          this.thumbnail = '../../assets/icon/elo.png'
        }else {
          this.thumbnail ='../../assets/icon/card.png';
        }
        console.log('Bandeira do cart??o: ' + this.credenciais.bandCard);
        this.buscaParcelas(this.credenciais);

      },
      error: (response: any) => { console.log('buscaBandeira', response); }
    });
  }

  pagar() {

    // BUSCA O HASH DO COMPRADOR JUNTO A API DO PAGSEGURO
    this.dados.hashComprador = PagSeguroDirectPayment.getSenderHash();

    console.log("dados no pagar", this.dados)

    //console.log("hash", this.dados.hashComprador)
    // CRIA O HASK DO CART??O DE CR??DITO JUNTO A API DO PAGSEGURO

   
    PagSeguroDirectPayment.createCardToken({
      cardNumber: this.dados.numCard,
      brand: this.dados.bandCard,
      cvv: this.dados.codSegCard,
      expirationMonth: this.dados.mesValidadeCard,
      expirationYear: this.dados.anoValidadeCard,
      success: response => {
        this.dados.hashCard = response.card.token;
        console.log('Hash do cartao', this.dados);

        // NESTE MOMENTO J?? TEMOS TUDO QUE PRECISAMOS!
        // HORA DE ENVIAR OS DADOS PARA O SERVIDOR PARA CONCRETIZAR O PAGAMENTO
        this.enviaDadosParaServidor();

      },
      error: response => { console.log('erro recebido', response); }
    });

  }

    // DISPARA OUTROS M??TODOS PARA PODER CONSUMIR A API DO PAGSEGURO E CONCRETIZAR A TRANSA????O
    enviaDadosParaServidor() {
      this.pagarCheckoutTransp(this.dados);
      // .subscribe(result => console.log(result));
    }

     // M??TODO QUE FAZ O CONSUMO COM TODOS OS DADOS NECESS??RIOS PELA API
  // COM A FINALIDADE DE EFETUAR O PAGAMENTO
  public pagarCheckoutTransp(dados: Dados) {

    const valparcelas = this.dados.parcelas[0]['installmentAmount'];
    const  pagDados =  {
        email: 'vinassis@gmail.com', // email da conta que vai receber
        data: {
            payment: {
                mode: 'default',
                method: 'creditCard',
                sender: {
                    hash: this.dados.hashComprador,
                    name: this.dados.nome + '' + this.dados.sobrenome, /// tem que ter nome e sobrenome
                    email: 'teste@sandbox.pagseguro.com.br', //email do pagador  
                    phone: {
                        areaCode: this.dados.ddd,
                        number: this.dados.telefone
                    },
                    documents: {
                        document: {
                            type: 'CPF',
                            value: this.dados.cpf,
                        }
                    }
                },
                currency: 'BRL',
                notificationURL: null,
                items: {
                    item: {
                        id: '1',
                        description: 'Manuten????o de Port??o',
                        quantity: '1',
                        amount: parseFloat(this.dados.amount.toString()).toFixed(2) 
                    }
                },
                extraAmount: '0.00',
                reference: this.dados.referencia,  // uma referencia do pagamento, email do t??cnico
                shipping: {
                    addressRequired: 'false'  // se tiver que entregar albuma coisa 
                },
                creditCard: {
                    token: this.dados.hashCard,
                    installment: {
                        quantity: this.dados.parcelas[0]['quantity'],
                        value: parseFloat(valparcelas).toFixed(2),
                        noInterestInstallmentQuantity: 16
                    },
                    holder: {
                        name: this.dados.nome + '' + this.dados.sobrenome,
                        documents: {
                            document: {
                                type: 'CPF',
                                value: this.dados.cpf
                            }
                        },
                        birthDate: this.dados.nascimento,
                        phone: {
                            areaCode: this.dados.ddd,
                            number: this.dados.telefone
                        }
                    },
                    billingAddress: {
                        street: this.dados.logradouro,
                        number: this.dados.numero,
                        complement: '',
                        district: this.dados.bairro,
                        city: this.dados.cidade,
                        state: this.dados.estado,
                        country: 'BRA',
                        postalCode: this.dados.cep
                    }
                }
            }
        }
      };
      console.log('body------', pagDados);
  
     this.pagseg.enviarPgto(pagDados).subscribe(res =>{
       console.log(res)
       if (res.transaction["code"]) {
          this.common.showToast("Pagamento Efetuado com Sucesso");
          this.ionicForm.reset();
       } else{
         this.common.showToast("Ocorreu um erro, verifique os dados");
       }
     })
  
     // this.http.post(url2, body, {headers: headers});
    }


 

  submitForm(value: any) {
   console.log("valor recebido", value);
   // console.log("user", this.user)
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.common.showToast("Verifique se todos os campos obrigat??rios est??o preenchidos, inclusive Parcelas");
      return false;
    } else {
      console.log("vamos para o pagamento", this.user.dtNasc)

      const nascimento = this.user.dtNasc
      const ano = nascimento.substring(0, 4);
      const mes = nascimento.substring(5, 7)
      const dia = nascimento.substring(8, 10)
      const dtnasc = dia + "/" + mes + "/" + ano;

      console.log("dtnasc",dtnasc)

      this.dados.codSegCard = value.codSegCard;
      this.dados.mesValidadeCard = value.mesValCard;
      this.dados.anoValidadeCard = value.anoValCard; 
      this.dados.parcelas = value.parcelas;
      this.dados.numCard = value.numCard;
      
      this.dados.telefone = this.user.phoneNumber;
      this.dados.cpf = this.user.cpf;
      this.dados.nome = this.user.name;
      this.dados.logradouro = this.user.logradouro;
      this.dados.numero = this.user.numero;
      this.dados.cidade =this.user.cidade;
      this.dados.estado = this.user.estado;
      this.dados.bairro = this.user.bairro;
      this.dados.cep = this.user.cep;
      this.dados.email = this.user.email;
      this.dados.nascimento = dtnasc;
      this.dados.ddd =this.user.ddd; 
      this.dados.sobrenome = this.user.sobrenome; 

      console.log("dados", this.dados)
      this.pagar();
    }
  }

}
