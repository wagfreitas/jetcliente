import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Platform } from '@ionic/angular';


export class Dados {
  public id: number;
  public nome: string;
  public telefone: string ;
  public email: string ;
  public cpf: string ;
  public nascimento: string;
  public logradouro : string ;
  public numero: string;
  public bairro: string;
  public cep: string;
  public cidade : string;
  public estado: string;
  public referencia: string;  
  public ddd: number; 
  public sobrenome: string;     
  constructor(obj?) {
    Object.assign(this, obj, {}, {});
  }
}

const ITEMS_KEY = 'credencial';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  ionicForm: FormGroup;
  defaultDate = '15/07/1961';
  isSubmitted = false;

  
  constructor(
    private authService: AuthService,
    private common: CommonService,
    private router: Router,
    private afStorage: AngularFireStorage,
    private platform: Platform,
    private storage: Storage,
    public formBuilder: FormBuilder, 
  ) {
    
    this.ionicForm = this.formBuilder.group({
      fone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ddd: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$')]], 
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]+$')]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]], 
      logradouro: ['',[Validators.required]],
      numero: ['', [Validators.pattern('^[0-9]+$')]],
      cidade: ['',  [Validators.required]],
      estado: ['', [Validators.required]],
      bairro: ['',  [Validators.required]],
      cep: ['',  [Validators.maxLength(8),Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dtNasc: [this.defaultDate],
    });

  }

  ngOnInit() {
    this.authService.getUserData().then(user => {
      this.authService.getUser(user.uid).snapshotChanges().pipe(take(1)).subscribe((snapshot: any) => {
        this.user = { uid: snapshot.key, ...snapshot.payload.val() };
        this.ionicForm.controls['nome'].setValue(this.user.name); 
        this.ionicForm.controls['sobrenome'].setValue(this.user.sobrenome); 
        this.ionicForm.controls['fone'].setValue(this.user.phoneNumber); 
        this.ionicForm.controls['ddd'].setValue(this.user.ddd); 
        this.ionicForm.controls['cpf'].setValue(this.user.cpf); 
        this.ionicForm.controls['logradouro'].setValue(this.user.logradouro); 
        this.ionicForm.controls['numero'].setValue(this.user.numero); 
        this.ionicForm.controls['cidade'].setValue("São Paulo"); 
        this.ionicForm.controls['estado'].setValue("SP");
        this.ionicForm.controls['bairro'].setValue(this.user.bairro); 
        this.ionicForm.controls['cep'].setValue(this.user.cep); 
        this.ionicForm.controls['email'].setValue(this.user.email);  
        this.ionicForm.controls['dtNasc'].setValue(this.user.dtNasc); 
        console.log(this.user);
      });
    })

  }

  // save user info
  save() {
    this.user.nome = this.ionicForm.controls['nome'].value;
    this.user.sobrenome = this.ionicForm.controls['sobrenome'].value;
    this.user.fone = this.ionicForm.controls['fone'].value; 
    this.user.ddd = this.ionicForm.controls['ddd'].value; 
    this.user.cpf = this.ionicForm.controls['cpf'].value; 
    this.user.logradouro = this.ionicForm.controls['logradouro'].value; 
    this.user.numero = this.ionicForm.controls['numero'].value; 
    this.user.cidade = this.ionicForm.controls['cidade'].value; 
    this.user.estado = this.ionicForm.controls['estado'].value;
    this.user.bairro = this.ionicForm.controls['bairro'].value; 
    this.user.cep = this.ionicForm.controls['cep'].value; 
    this.user.email = this.ionicForm.controls['email'].value;  
    this.user.dtNasc = this.ionicForm.controls['dtNasc'].value; 
    this.authService.updateUserProfile(this.user);
    this.common.showToast("Registro Atualizado");
  }

  // choose file for upload
  chooseFile() {
    document.getElementById('avatar').click();
  }

  upload() {
    // Create a root reference
    this.common.showLoader();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('avatar')).files[0]]) {
      let path = '/users/' + Date.now() + `_${selectedFile.name}`;
      let ref = this.afStorage.ref(path)
      ref.put(selectedFile).then(() => {
        ref.getDownloadURL().subscribe(data => {
          this.user.photoURL = data;
          this.common.hideLoader()
        });
      }).catch(err => {
        this.common.hideLoader();
        console.log(err)
      });

    }
  }

  logout() {
    console.log("chegamos aqui")
    this.authService.logout().then(() => {
      localStorage.clear();
      this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
    });
  }

}
