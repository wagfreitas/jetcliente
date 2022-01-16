import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { DEFAULT_AVATAR } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  // get current user data from firebase
  getUserData() {
    return this.afAuth.currentUser;
  }

  // get passenger by id
  getUser(id) {
    return this.db.object('passengers/' + id);
  }

  // login by email and password
  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuth.signOut();
  }

  // register new account
  register(email, password, name, phoneNumber) {
    return Observable.create(observer => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then((authData) => {

        let userInfo: any = {
          uid: authData.user.uid,
          name: name,
          phoneNumber: phoneNumber,
          isPhoneVerified: false,
          email: email,
          createdAt: Date.now()
        };
        this.updateUserProfile(userInfo);
        observer.next();
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }

  // update user display name and photo
  updateUserProfile(user) {
    console.log(user);
    let name = user.name ? user.name : user.email;
    let photoUrl = user.photoURL ? user.photoURL : 'DEFAULT_AVATAR';

    this.getUserData().then(user =>
      user.updateProfile({
        displayName: name,
        photoURL: photoUrl
      })
    );

    // create or update passenger
    this.db.object('passengers/' + user.uid).update({
      name: user.nome,
      sobrenome: user.sobrenome, 
      email: user.email,
      phoneNumber: user.phoneNumber ? user.phoneNumber : '',
      isPhoneVerified: user.isPhoneVerified,
      updatedAt: Date.now(),
      cpf: user.cpf, 
      dtNasc: user.dtNasc,
      ddd: user.ddd, 
      logradouro: user.logradouro, 
      numero: user.numero, 
      cep: user.cep, 
      estado: user.estado, 
      cidade: user.cidade 

    })
  }

  // create new user if not exist
  createUserIfNotExist(user) {
    this.getUser(user.uid).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      if (snapshot === null) {
        this.updateUserProfile(user);
      }
    });
  }

  // update card setting
  updateCardSetting(number, exp, cvv, token, uid) {
    this.db.object('passengers/' + uid + '/card').update({
      number: number,
      exp: exp,
      cvv: cvv,
      token: token
    })
  }

  // get card setting
  getCardSetting(uid) {
    return this.db.object('passengers/' + uid + '/card');
  }

}
